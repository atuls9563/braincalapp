import {
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { FC, useEffect, useState } from "react";
import { UniversalProps } from "../navigation/NavigationTypes";
import { colors } from "../theme/colors";
import { commonFont } from "../theme/fonts";
import { hp } from "../helper/constants";
import Modal from "react-native-modal";
import { icons } from "../helper/iconConstant";
import * as RNIap from "react-native-iap";
import {
  Purchase,
  PurchaseError,
  purchaseErrorListener,
  purchaseUpdatedListener,
  requestPurchase,
} from "react-native-iap";
import CommonButton from "./CommonButton";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMyPlan, subscribePlan } from "../actions";
import { api } from "../helper/apiConstants";

interface Props {
  isVisible: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

// Product IDs must match exactly in App Store Connect (iOS) and Play Console (Android).
// iOS: In-App Purchase product ID e.g. "com.prod.consumable1" must exist in App Store Connect
//      with status "Ready to Submit", and Paid Apps agreement + banking must be complete.
//      Test on a real device with a Sandbox Apple ID (Settings > App Store > Sandbox Account).
const itemSkus = Platform.select({
  ios: ["com.prod.consumable1"],
  android: ["com.prod.consumable1"],
}) ?? ["com.prod.consumable1"];

const fetchProducts = async (): Promise<RNIap.Product[]> => {
  const skus = Array.isArray(itemSkus) ? itemSkus : ["com.prod.consumable1"];
  return RNIap.getProducts({ skus });
};

const SubscribeModal: FC<Props> = ({ isVisible, onClose, onSuccess }) => {
  const [products, setProducts] = useState<RNIap.Product[]>([]);
  const [productsPrice, setProductsPrice] = useState("");
  const [productsLoading, setProductsLoading] = useState(false);
  const [productsError, setProductsError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.common);

  const loadProducts = React.useCallback(async () => {
    setProductsError(null);
    const skus = Array.isArray(itemSkus) ? itemSkus : ["com.prod.consumable1"];
    console.log("[IAP] getProducts called with skus:", skus, "platform:", Platform.OS);
    try {
      const results = await fetchProducts();
      console.log("[IAP] getProducts response: count =", results?.length ?? 0);
      if (results?.length > 0) {
        results.forEach((p, i) => {
          console.log(`[IAP] product[${i}]:`, {
            productId: p.productId,
            price: p.price,
            localizedPrice: p.localizedPrice,
            title: p.title,
          });
        });
        setProducts(results);
        setProductsPrice(results[0]?.price ?? "");
      } else {
        console.log("[IAP] No products received (empty array or null)");
        setProducts([]);
      }
      return results;
    } catch (err: any) {
      const msg = err?.message ?? String(err);
      setProductsError(msg);
      console.warn("[IAP] getProducts error:", err?.message ?? err, err);
      return [];
    }
  }, []);

  useEffect(() => {
    let purchaseUpdateSubscription: any;
    let purchaseErrorSubscription: any;

    const initIAP = async () => {
      try {
        console.log("[IAP] initConnection starting...");
        await RNIap.initConnection();
        console.log("[IAP] initConnection success");
        if (Platform.OS === "ios") {
          console.log("[IAP] iOS: waiting 500ms before getProducts");
          await new Promise((r) => setTimeout(r, 500));
        }
        setProductsLoading(true);
        const results = await loadProducts();
        setProductsLoading(false);
        if (results?.length === 0 && Platform.OS === "ios") {
          console.log("[IAP] iOS: first getProducts returned 0, retrying in 1s...");
          setTimeout(async () => {
            const retry = await loadProducts();
            if (retry?.length > 0) setProductsLoading(false);
          }, 1000);
        }
      } catch (err) {
        setProductsLoading(false);
        console.error("[IAP] initConnection error:", err);
      }

      purchaseUpdateSubscription = purchaseUpdatedListener(
        (purchase: Purchase) => {
          const receipt = purchase.transactionReceipt;
          if (receipt) onPurchasePlan(purchase);
        }
      );
      purchaseErrorSubscription = purchaseErrorListener(
        (error: PurchaseError) => {
          console.error("Purchase error:", error);
        }
      );
    };

    initIAP();
    return () => {
      if (purchaseUpdateSubscription) purchaseUpdateSubscription.remove();
      if (purchaseErrorSubscription) purchaseErrorSubscription.remove();
      RNIap.endConnection();
    };
  }, [loadProducts]);

  useEffect(() => {
    if (isVisible && products.length === 0 && !productsLoading) {
      console.log("[IAP] Modal opened with no products, refetching...");
      loadProducts();
    }
  }, [isVisible, products.length, productsLoading, loadProducts]);

  const onPressBuy = () => {
    onClose();
    // setTimeout(() => {

    if (Platform.OS == "ios") {
      RNIap.requestPurchase({ sku: "com.prod.consumable1" });
    } else {
      RNIap.requestPurchase({ skus: [products?.[0]?.productId] });
    }

    // }, 3000);
  };
  const onPurchasePlan = (purchase: any) => {
    let obj = {
      // signature: Platform.OS == "android" ? purchase.signatureAndroid : "",
      signature:
        Platform.OS == "android"
          ? purchase.signatureAndroid
          : `ath2oLxCxo42MHlXPYEynFTvNGUqCTGyYNLCdq7HcTZY3qY+4xNUzymRrGRxSATyhfKh7WIKsj3WIMEEUMTm7S+dUw2/kj/FILV7nkJir/9C2ImqMRd+KAP4Pk+jqHVvNv01NiTxTOW/vc6sZNKte9Dnv/sE8+8ceAUqSbrhWxWM0UJbXtNYFYNAusz5Tt9WuEP5HkOENWE4ZPEq+t4/SzWxqoq1JeXLiktbBNEYbnzzmwyTe/4VO7SVOnJhe9zl45vcostw2Kp0tHEiPmriSF1Lqzj15np2i1WgD3gPG3ArjlQwYKoPDUM//b/BoBRULOX0ujTPsdYrDIHqAVPGzg==`,
      userid: user.id,
      hash: api.hash,
      device_type: Platform.OS == "android" ? "ANDROID" : "IOS",
      transaction_id: purchase.transactionId,
      product_id: purchase.productId,
      amount: productsPrice,
      receipt: purchase.transactionReceipt,
    };
    let request = {
      type: "subscribe/plan",
      params: obj,
      onSuccess: (res: any) => {
        if (res.success == true) {
          let obj = {
            userid: user.id,
            hash: api.hash,
          };
          let request = {
            type: "plan/details",
            params: obj,
            onSuccess: (res: any) => {},
            onFail: (err: any) => {},
          };
          dispatch(getMyPlan(request));
          onSuccess();
        }
      },
      onFail: (err: any) => {
        console.log(err);
      },
    };
    dispatch(subscribePlan(request));
    RNIap.finishTransaction(purchase.transactionId);
  };
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={() => onClose()} style={styles.btnView}>
          <Image source={icons.closeRound} style={styles.closeBtn} />
        </TouchableOpacity>
        <Image source={icons.brainCalImage} style={styles.logo} />
        <Text style={styles.titleText}>Braincal Premium</Text>
        <Text style={styles.des}>{products?.[0]?.description}</Text>
        <Text style={styles.priceText}>{products?.[0]?.localizedPrice}/M</Text>
        <CommonButton
          onPress={() => onPressBuy()}
          title={"BUY NOW"}
          style={styles.buyBtn}
        />
      </View>
    </Modal>
  );
};

export default SubscribeModal;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  closeBtn: {
    height: hp(3.5),
    width: hp(3.5),
    resizeMode: "contain",
    tintColor: colors.skyBlue1,
  },
  logo: {
    height: hp(12),
    width: hp(12),
    resizeMode: "contain",
    alignSelf: "center",
  },
  btnView: {
    alignSelf: "flex-end",
    padding: hp(1),
  },
  titleText: {
    ...commonFont(700, 22, colors.darkBlue),
    textAlign: "center",
    marginTop: hp(1),
    marginBottom: hp(2),
  },
  des: {
    marginHorizontal: hp(3),
    ...commonFont(400, 16, colors.black),
    textAlign: "center",
  },
  priceText: {
    ...commonFont(700, 28, colors.skyBlue1),
    textAlign: "center",
    marginVertical: hp(3),
  },
  buyBtn: {
    backgroundColor: colors.skyBlue1,
    width: "80%",
    alignSelf: "center",
    marginBottom: hp(3),
  },
});
