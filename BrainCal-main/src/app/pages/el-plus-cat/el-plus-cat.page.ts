import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { InAppPurchase } from '@ionic-native/in-app-purchase/ngx';
import { AlertController, LoadingController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-el-plus-cat',
  templateUrl: './el-plus-cat.page.html',
  styleUrls: ['./el-plus-cat.page.scss'],
  providers: [PostService]
})

export class ElPlusCatPage implements OnInit {
  type: string;
  plans;
  last = { ID: "", name: "" };
  is_subscribe = false;

  constructor(
    private activatedRoute: ActivatedRoute
    , public storage: Storage
    , public postService: PostService
    , private iap: InAppPurchase
    , public loadingCtrl: LoadingController
    , private alertCtrl: AlertController
    , private router: Router
    , public platform: Platform
  ) {

    // this.type = this.navParams.get('type');
    this.type = this.activatedRoute.snapshot.params['type'];
    console.log(this.type);

    this.getPlans();
  }

  ngOnInit() {
  }

  getPlans() {
    let loader = this.presentLoadingDefault();
    this.storage.get('userData').then(user => {
      console.log(user);
      this.postService.getMyPlan(user.id).subscribe(data => {
        this.is_subscribe = data.data.is_plan_active;
      });
    });

    this.is_subscribe = false;

    this.iap
      .getProducts(['com.prod1'])
      .then((products) => {
        // console.log(products);
        this.plans = products;
        // loader.dismiss()
        // loader.then((a)=>a.dismiss());
        loader.then((a) => a.dismiss()
          .then(() => console.log('dismissed1')));

        //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]        
      })
      .catch((err) => {
        err && err.message && alert(err.message);
        // loader.dismiss()
        loader.then((a) => a.dismiss()
          .then(() => console.log('dismissed')));
        // this.dismiss();
        console.log(err);
      });
  }

  async presentLoadingDefault() {
    let loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });

    await loading.present();

    return loading;
  }

  // async dismiss() {
  //   // this.isLoading = false;
  //   return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
  // }

  buy(prod) {
    console.log(prod);
    this.iap
      .subscribe(prod.productId)
      .then((data) => {
        let loader = this.presentLoadingDefault();
        console.log(data);
        console.log(data, "data");
        this.storage.get('userData').then(user => {
          this.postService.subscribePlan(data.signature, user.id, data.receipt, data.transactionId, prod.productId, prod.price, this.platform.is("android") ? "ANDROID" : "IOS").subscribe(data => {
            if (data.success) {
              this.is_subscribe = true;
              this.openQuizPage(this.last.ID, this.last.name);
            }
            let alert = this.alertCtrl.create({
              header: "Success",
              message: data.data,
              buttons: ['Dismiss']
            });
            // alert.present();
            // loader.dismiss()
            alert.then((a) => a.present());
            loader.then((a) => a.dismiss())
          }, err => {
            // loader.dismiss()
            loader.then((a) => a.dismiss())
          });


        });
      })
      .catch((err) => {
        console.log(err);
      });

  }

  openElPlusPage(typeValue, heading) {
    // this.navCtrl.push(ElPlusListPage, { type: this.type, typeValue: typeValue, heading: heading });

    let navigationExtras: NavigationExtras = {
      state: {
        type: this.type,
        typeValue: typeValue,
        heading: heading
      }
    };
    this.router.navigate(['el-plus-list'], navigationExtras);
  }

  openQuizPage(id, quizName) {
    this.is_subscribe = true;
    if (!this.is_subscribe) {
      this.last = { 'ID': id, 'name': quizName };;
      this.presentConfirm();
    }
    else {
      let quiz = { 'ID': id, 'name': quizName };
      // this.navCtrl.push(QuizPage, { 'quiz': quiz });

      let navigationExtras: NavigationExtras = {
        state: {
          quiz: quiz
        }
      };
      this.router.navigate(['quiz'], navigationExtras);
    }
  }

  async presentConfirm() {
    //if(!this.plans || !this.plans.length ) return;

    let alert = await this.alertCtrl.create({
      header: this.plans[0].title,
      message: this.plans[0].description + "<br> Monthly subscription " + this.plans[0].price,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Buy',
          handler: () => {
            this.buy(this.plans[0]);
            console.log('Buy clicked');
          }
        }
      ]
    });
    // alert.setMode("ios");


    await alert.present();

  }


}
