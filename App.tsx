import React, { useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
  InteractionManager,
} from "react-native";
import Navigation from "./src/navigation/Navigation";
import SplashScreen from "react-native-splash-screen";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { commonFont } from "./src/theme/fonts";
import { useAppDispatch, useAppSelector } from "./src/redux/hooks";
import { colors } from "./src/theme/colors";
import { hp } from "./src/helper/constants";

const App = () => {
  const preLoader = useAppSelector((e) => e.common?.preLoader);
  const _TOAST = useAppSelector((e) => e.common?.toast);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Defer native splash hide to avoid launch crash; call after mount is stable
    const t = setTimeout(() => {
      try {
        if (typeof SplashScreen?.hide === "function") SplashScreen.hide();
      } catch (_) {}
    }, 1500);
    return () => clearTimeout(t);
  }, []);
  useEffect(() => {
    /**
     * Toast message display
     */
    if (_TOAST && _TOAST.hasOwnProperty("message")) {
      Toast.show({
        text1: _TOAST.message,
        text2: _TOAST.message2,
        type: _TOAST.type,
      });
      dispatch({
        type: "TOAST",
        payload: {},
      });
    }
  }, [_TOAST]);

  const toastConfig = {
    success: ({ text1, text2, type, props, ...rest }) =>
      type === "success" && (
        <View style={styles.textStyleToastSuccess}>
          <Text style={styles.textStyleToast}>{text1}</Text>
          {/* <Text style={styles.textStyleToast}>{text2}</Text> */}
        </View>
      ),
    error: ({ text1, text2, type, props, ...rest }) =>
      type === "error" && (
        <View style={styles.toastStyle}>
          <Text style={styles.textStyleToast}>{text1}</Text>
          {/* <Text style={styles.textStyleToast}>{text2}</Text> */}
        </View>
      ),
  };

  return (
    <View style={{ flex: 1}}>
      <Navigation />
      {preLoader && (
        <View style={styles.loaderView}>
          <ActivityIndicator size={"large"} color={colors.darkBlue} />
        </View>
      )}
      <Toast
        position={"bottom"}
        config={toastConfig}
        visibilityTime={2000}
        onHide={() =>
          dispatch({
            type: "TOAST",
            payload: {},
          })
        }
      />
    </View>
  );
};

export default App;
const styles = StyleSheet.create({
  loaderView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  toastStyle: {
    backgroundColor: "white",
    paddingVertical: hp("1.8"),
    width: Dimensions.get("window").width - hp("8"),
    borderRadius: 5,
    borderLeftWidth: 6,
    borderLeftColor: colors.red,
  },
  textStyleToastSuccess: {
    backgroundColor: "white",
    paddingVertical: hp("1.8"),
    width: Dimensions.get("window").width - hp("8"),
    borderRadius: 5,
    borderLeftWidth: 6,
    borderLeftColor: colors.primary,
  },
  textStyleToast: {
    ...commonFont(600, 17, colors.black),
    marginLeft: hp("2"),
  },
});

// trickstype: {
//   science_11, english_11, maths_11;
// }
