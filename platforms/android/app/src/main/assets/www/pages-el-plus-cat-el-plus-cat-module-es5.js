(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-el-plus-cat-el-plus-cat-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/el-plus-cat/el-plus-cat.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesElPlusCatElPlusCatPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"type=='maths_11'\">11 Plus Maths</ion-title>\n    <ion-title *ngIf=\"type=='english_11'\">11 Plus English</ion-title>\n    <ion-title *ngIf=\"type=='science_11'\">11 Plus Science</ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content class=\"trick-content\">\n\n <div *ngIf=\"type=='maths_11'\" class=\"tricks-level\">\n    <ion-list>\n        <ion-item lines=\"none\" color=\"none\" (click)=\"openElPlusPage(24,'11 Plus Maths Level 1')\">\n            <ion-label>\n              <div class=\"labelCls\">\n                Level 1\n              </div>\n            </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" color=\"none\" (click)=\"openElPlusPage(23,'11 Plus Maths Level 2')\">\n            <ion-label>\n              <div class=\"labelCls\">\n                Level 2\n             </div>\n            </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" color=\"none\" (click)=\"openElPlusPage(25,'11 Plus Maths Level 3')\">\n            <ion-label>\n              <div class=\"labelCls\">\n                Level 3\n             </div>\n            </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" color=\"none\" (click)=\"openQuizPage(2,'11+ Maths Marathon')\">\n            <ion-label>\n              <div class=\"labelCls\">\n                11+ Maths Marathon Test\n             </div>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</div>\n <div *ngIf=\"type=='english_11'\"  class=\"tricks-level\">\n    <ion-list>\n        <ion-item  lines=\"none\" color=\"none\" (click)=\"openElPlusPage(27,'11 Plus English Level 1')\">\n            <ion-label>\n              <div class=\"labelCls\">\n                Level 1\n             </div>\n            </ion-label>\n        </ion-item>\n        <ion-item  lines=\"none\" color=\"none\" (click)=\"openElPlusPage(28,'11 Plus English Level 2')\">\n            <ion-label>\n              <div class=\"labelCls\">\n                Level 2\n             </div>\n            </ion-label>\n        </ion-item>\n        <ion-item  lines=\"none\" color=\"none\" (click)=\"openElPlusPage(29,'11 Plus English Level 3')\">\n            <ion-label>\n              <div class=\"labelCls\">\n                Level 3\n             </div>\n            </ion-label>\n        </ion-item>\n        <ion-item  lines=\"none\" color=\"none\" (click)=\"openQuizPage(1,'11+ English Marathon')\">\n            <ion-label>\n              <div class=\"labelCls\">\n                11+ English Marathon Test\n             </div>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</div>\n<div *ngIf=\"type=='science_11'\" class=\"tricks-level\">\n    <ion-list>\n        <ion-item lines=\"none\" color=\"none\" (click)=\"openElPlusPage(39,'11 Plus Biology')\">\n            <ion-label>\n              <div class=\"labelCls\">\n                Biology\n             </div>\n            </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" color=\"none\" (click)=\"openElPlusPage(38,'11 Plus Chemistry')\">\n            <ion-label>\n              <div class=\"labelCls\">\n                Chemistry\n             </div>\n            </ion-label>\n        </ion-item>\n        <ion-item lines=\"none\" color=\"none\" (click)=\"openElPlusPage(37,'11 Plus Physics')\">\n            <ion-label>\n              <div class=\"labelCls\">\n                Physics\n             </div>\n            </ion-label>\n        </ion-item>\n    </ion-list>\n</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/el-plus-cat/el-plus-cat-routing.module.ts": function srcAppPagesElPlusCatElPlusCatRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElPlusCatPageRoutingModule", function () {
        return ElPlusCatPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _el_plus_cat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./el-plus-cat.page */
      "./src/app/pages/el-plus-cat/el-plus-cat.page.ts");

      var routes = [{
        path: '',
        component: _el_plus_cat_page__WEBPACK_IMPORTED_MODULE_3__["ElPlusCatPage"]
      }];

      var ElPlusCatPageRoutingModule = function ElPlusCatPageRoutingModule() {
        _classCallCheck(this, ElPlusCatPageRoutingModule);
      };

      ElPlusCatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ElPlusCatPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/el-plus-cat/el-plus-cat.module.ts": function srcAppPagesElPlusCatElPlusCatModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElPlusCatPageModule", function () {
        return ElPlusCatPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _el_plus_cat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./el-plus-cat-routing.module */
      "./src/app/pages/el-plus-cat/el-plus-cat-routing.module.ts");
      /* harmony import */


      var _el_plus_cat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./el-plus-cat.page */
      "./src/app/pages/el-plus-cat/el-plus-cat.page.ts");

      var ElPlusCatPageModule = function ElPlusCatPageModule() {
        _classCallCheck(this, ElPlusCatPageModule);
      };

      ElPlusCatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _el_plus_cat_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElPlusCatPageRoutingModule"]],
        declarations: [_el_plus_cat_page__WEBPACK_IMPORTED_MODULE_6__["ElPlusCatPage"]]
      })], ElPlusCatPageModule);
      /***/
    },

    /***/
    "./src/app/pages/el-plus-cat/el-plus-cat.page.scss": function srcAppPagesElPlusCatElPlusCatPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-background-color {\n  --background: #2788E8;\n}\n\nion-title {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\n.trick-content .single-trick {\n  position: relative;\n}\n\n.tricks-level ion-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100px;\n  -webkit-margin-after: 15px;\n          margin-block-end: 15px;\n  text-align: center;\n  width: 100%;\n  padding: 20px;\n}\n\n.labelCls {\n  color: white;\n}\n\nion-item:nth-child(odd) {\n  background-color: #0088e8;\n}\n\nion-item:nth-child(even) {\n  background-color: #EC407A;\n}\n\n.tricks-level {\n  width: 100%;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWwtcGx1cy1jYXQvZWwtcGx1cy1jYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFHSTtFQUNRLGtCQUFBO0FBQVo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0VBSUEsV0FBQTtFQUNBLGFBQUE7QUFKSjs7QUFPQTtFQUNJLFlBQUE7QUFKSjs7QUFPQTtFQUNJLHlCQUFBO0FBSko7O0FBTUM7RUFDRyx5QkFBQTtBQUhKOztBQU1BO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VsLXBsdXMtY2F0L2VsLXBsdXMtY2F0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzg4RTg7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLW1lbnUtYnV0dG9ue1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRyaWNrLWNvbnRlbnQgIHtcbiAgICAuc2luZ2xlLXRyaWNrIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG59XG5cbi50cmlja3MtbGV2ZWwgaW9uLWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIC8vIGNvbG9yOiAjZmZmO1xuXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzoyMHB4O1xufVxuXG4ubGFiZWxDbHN7XG4gICAgY29sb3I6d2hpdGU7XG59XG5cbmlvbi1pdGVtOm50aC1jaGlsZChvZGQpe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg4ZTg7XG59XG4gaW9uLWl0ZW06bnRoLWNoaWxkKGV2ZW4pe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQzQwN0E7XG59XG5cbi50cmlja3MtbGV2ZWx7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzoyMHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/el-plus-cat/el-plus-cat.page.ts": function srcAppPagesElPlusCatElPlusCatPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElPlusCatPage", function () {
        return ElPlusCatPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/post.service */
      "./src/app/services/post.service.ts");
      /* harmony import */


      var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/in-app-purchase/ngx */
      "./node_modules/@ionic-native/in-app-purchase/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var ElPlusCatPage = /*#__PURE__*/function () {
        function ElPlusCatPage(activatedRoute, storage, postService, iap, loadingCtrl, alertCtrl, router, platform) {
          _classCallCheck(this, ElPlusCatPage);

          this.activatedRoute = activatedRoute;
          this.storage = storage;
          this.postService = postService;
          this.iap = iap;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.platform = platform;
          this.last = {
            ID: "",
            name: ""
          };
          this.is_subscribe = false; // this.type = this.navParams.get('type');

          this.type = this.activatedRoute.snapshot.params['type'];
          console.log(this.type);
          this.getPlans();
        }

        _createClass(ElPlusCatPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getPlans",
          value: function getPlans() {
            var _this = this;

            var loader = this.presentLoadingDefault();
            this.storage.get('userData').then(function (user) {
              console.log(user);

              _this.postService.getMyPlan(user.id).subscribe(function (data) {
                _this.is_subscribe = data.data.is_plan_active;
              });
            });
            this.is_subscribe = false;
            this.iap.getProducts(['com.prod1']).then(function (products) {
              // console.log(products);
              _this.plans = products; // loader.dismiss()
              // loader.then((a)=>a.dismiss());

              loader.then(function (a) {
                return a.dismiss().then(function () {
                  return console.log('dismissed1');
                });
              }); //  [{ productId: 'com.yourapp.prod1', 'title': '...', description: '...', price: '...' }, ...]        
            })["catch"](function (err) {
              err && err.message && alert(err.message); // loader.dismiss()

              loader.then(function (a) {
                return a.dismiss().then(function () {
                  return console.log('dismissed');
                });
              }); // this.dismiss();

              console.log(err);
            });
          }
        }, {
          key: "presentLoadingDefault",
          value: function presentLoadingDefault() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        message: 'Please wait...'
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      return _context.abrupt("return", loading);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          } // async dismiss() {
          //   // this.isLoading = false;
          //   return await this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
          // }

        }, {
          key: "buy",
          value: function buy(prod) {
            var _this2 = this;

            console.log(prod);
            this.iap.subscribe(prod.productId).then(function (data) {
              var loader = _this2.presentLoadingDefault();

              console.log(data);
              console.log(data, "data");

              _this2.storage.get('userData').then(function (user) {
                _this2.postService.subscribePlan(data.signature, user.id, data.receipt, data.transactionId, prod.productId, prod.price, _this2.platform.is("android") ? "ANDROID" : "IOS").subscribe(function (data) {
                  if (data.success) {
                    _this2.is_subscribe = true;

                    _this2.openQuizPage(_this2.last.ID, _this2.last.name);
                  }

                  var alert = _this2.alertCtrl.create({
                    header: "Success",
                    message: data.data,
                    buttons: ['Dismiss']
                  }); // alert.present();
                  // loader.dismiss()


                  alert.then(function (a) {
                    return a.present();
                  });
                  loader.then(function (a) {
                    return a.dismiss();
                  });
                }, function (err) {
                  // loader.dismiss()
                  loader.then(function (a) {
                    return a.dismiss();
                  });
                });
              });
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }, {
          key: "openElPlusPage",
          value: function openElPlusPage(typeValue, heading) {
            // this.navCtrl.push(ElPlusListPage, { type: this.type, typeValue: typeValue, heading: heading });
            var navigationExtras = {
              state: {
                type: this.type,
                typeValue: typeValue,
                heading: heading
              }
            };
            this.router.navigate(['el-plus-list'], navigationExtras);
          }
        }, {
          key: "openQuizPage",
          value: function openQuizPage(id, quizName) {
            this.is_subscribe = true;

            if (!this.is_subscribe) {
              this.last = {
                'ID': id,
                'name': quizName
              };
              ;
              this.presentConfirm();
            } else {
              var quiz = {
                'ID': id,
                'name': quizName
              }; // this.navCtrl.push(QuizPage, { 'quiz': quiz });

              var navigationExtras = {
                state: {
                  quiz: quiz
                }
              };
              this.router.navigate(['quiz'], navigationExtras);
            }
          }
        }, {
          key: "presentConfirm",
          value: function presentConfirm() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: this.plans[0].title,
                        message: this.plans[0].description + "<br> Monthly subscription " + this.plans[0].price,
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          handler: function handler() {
                            console.log('Cancel clicked');
                          }
                        }, {
                          text: 'Buy',
                          handler: function handler() {
                            _this3.buy(_this3.plans[0]);

                            console.log('Buy clicked');
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ElPlusCatPage;
      }();

      ElPlusCatPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
        }, {
          type: _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppPurchase"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      ElPlusCatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-el-plus-cat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./el-plus-cat.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/el-plus-cat/el-plus-cat.page.html"))["default"],
        providers: [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./el-plus-cat.page.scss */
        "./src/app/pages/el-plus-cat/el-plus-cat.page.scss"))["default"]]
      })], ElPlusCatPage);
      /***/
    },

    /***/
    "./src/app/services/post.service.ts": function srcAppServicesPostServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PostService", function () {
        return PostService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _shared_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/app.constants */
      "./src/app/shared/app.constants.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var PostService_1; //import { Http } from '@angular/http';
      //import { Observable } from 'rxjs/Rx';
      //import 'rxjs/add/operator/map';
      // import 'rxjs/add/operator/catch';
      //import 'rxjs/Rx';
      //import { HttpClientModule } from '@angular/common/http'
      //import 'rxjs/add/observable/of';
      //import { of } from 'rxjs';

      var PostService = PostService_1 = /*#__PURE__*/function () {
        // constructor(private http: Http) {
        // }
        function PostService(http) {
          _classCallCheck(this, PostService);

          this.http = http;
        } // public getPosts(page: number = 1, type = "tricks"): Observable<any> {
        //     return this.http.get(AppConstants.POSTS_URL + type + "?cr=1&page=" + page + "&per_page=" + PostService.POSTS_PER_PAGE).map(data => data.json());
        // }


        _createClass(PostService, [{
          key: "getPosts",
          value: function getPosts() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "tricks";
            // const request = this.http.get().pipe(
            //     map((res) => res.data)),
            //     catchError(error => Observable.of(null))
            //   );
            return this.http.get(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].POSTS_URL + type + "?cr=1&page=" + page + "&per_page=" + PostService_1.POSTS_PER_PAGE).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }) //,
            //catchError(error => Observable.of(null))
            // , catchError((err, caught) => {
            //     return empty();
            //   })
            );
          }
        }, {
          key: "getPost",
          value: function getPost(id) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "tricks";
            //return this.http.get(AppConstants.POSTS_URL + type + "/" + id).map(data => data.json());
            return this.http.get(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].POSTS_URL + type + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "searchPosts",
          value: function searchPosts(search) {
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "tricks";
            //return this.http.get(AppConstants.POSTS_URL + type + "?cr=1&page=1&per_page=" + PostService.POSTS_PER_PAGE + "&search=" + search).map(data => data.json());
            return this.http.get(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].POSTS_URL + type + "?cr=1&page=1&per_page=" + PostService_1.POSTS_PER_PAGE + "&search=" + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getPostsByIds",
          value: function getPostsByIds(ids) {
            var page = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
            if (!ids) ids = "0";

            if (ids.indexOf(",") >= 0) {
              var tempIds = ids.split(',');
              var validIds = [];

              for (var i = 0; i < tempIds.length; i++) {
                var validId = parseInt(tempIds[i]);
                if (!isNaN(validId)) validIds.push(parseInt(tempIds[i]));
              }

              if (validIds.length > 0) {
                ids = validIds.join();
              }
            } //return this.http.get(AppConstants.POSTS_URL + "posts?type[]=spanish&type[]=english&type[]=hindi&type[]=french&type[]=tricks&type[]=general_knowledge&type[]=11_plus&cr=1&include=" + ids + "&page=" + page + "&per_page=" + PostService.POSTS_PER_PAGE).map(data => data.json());


            return this.http.get(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].POSTS_URL + "posts?type[]=spanish&type[]=english&type[]=hindi&type[]=french&type[]=tricks&type[]=general_knowledge&type[]=11_plus&cr=1&include=" + ids + "&page=" + page + "&per_page=" + PostService_1.POSTS_PER_PAGE).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getPostsByTaxonomy",
          value: function getPostsByTaxonomy() {
            var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "tricks";
            var tax = arguments.length > 2 ? arguments[2] : undefined;
            var taxId = arguments.length > 3 ? arguments[3] : undefined;
            // return this.http.get(`${AppConstants.POSTS_URL}${type}?${tax}=${taxId}&cr=1&page=${page}&per_page=${PostService.POSTS_PER_PAGE}`).map(data => data.json());
            return this.http.get("".concat(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].POSTS_URL).concat(type, "?").concat(tax, "=").concat(taxId, "&cr=1&page=").concat(page, "&per_page=").concat(PostService_1.POSTS_PER_PAGE)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "getMyPlan",
          value: function getMyPlan(userid) {
            var hash = "EB46F14D6E44B1472AA818248116FF65";
            var type = "plan/details"; //return this.http.get(`${AppConstants.PLAN_URL}${type}?hash=${hash}&userid=${userid}`).map(data => data.json());

            return this.http.get("".concat(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].PLAN_URL).concat(type, "?hash=").concat(hash, "&userid=").concat(userid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "subscribePlan",
          value: function subscribePlan(signature, userid, reciept, transactionId, product_id, amount, device_type) {
            var hash = "EB46F14D6E44B1472AA818248116FF65";
            var type = "subscribe/plan"; // return this.http.get(`${AppConstants.PLAN_URL}${type}?device_type=${device_type}&transaction_id=${transactionId}&product_id=${product_id}&amount=${amount}&signature=${signature}&hash=${hash}&receipt=${reciept}&userid=${userid}`).map(data => data.json());

            return this.http.get("".concat(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].PLAN_URL).concat(type, "?device_type=").concat(device_type, "&transaction_id=").concat(transactionId, "&product_id=").concat(product_id, "&amount=").concat(amount, "&signature=").concat(signature, "&hash=").concat(hash, "&receipt=").concat(reciept, "&userid=").concat(userid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
              return data;
            }));
          }
        }]);

        return PostService;
      }();

      PostService.POSTS_PER_PAGE = 10;

      PostService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      PostService = PostService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], PostService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-el-plus-cat-el-plus-cat-module-es5.js.map