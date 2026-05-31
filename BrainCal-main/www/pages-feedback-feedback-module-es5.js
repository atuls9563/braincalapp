(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feedback-feedback-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesFeedbackFeedbackPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Write to us</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div *ngIf=\"requestInProgress\" class=\"preloader-wrap\">\n  <div  class=\"preloader\"></div>\n</div>\n\n<ion-content>\n  <div>\n    <form [formGroup]=\"feedbackForm\" (ngSubmit)=\"send(feedbackForm.valid)\">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n\n            <ion-item>\n              <ion-label color=\"primary\" floating>\n                <ion-icon name=\"contact\"></ion-icon>\n                Name\n              </ion-label>\n              <ion-input type=\"text\" [ngClass]=\"{'has-error':!feedbackForm.controls['name'].valid}\"  formControlName=\"name\"></ion-input>\n            </ion-item>\n\n           <ion-item>\n            <ion-label color=\"primary\" floating>\n              <ion-icon name=\"ios-text\"></ion-icon>\n              Message\n            </ion-label>\n            <ion-textarea formControlName=\"message\"></ion-textarea>\n          </ion-item>       \n        <ion-button color=\"secondary\" expand=\"block\" type=\"submit\" \n        [disabled]=\"!feedbackForm.valid\">Send</ion-button>        \n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </form>\n</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/feedback/feedback-routing.module.ts": function srcAppPagesFeedbackFeedbackRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackPageRoutingModule", function () {
        return FeedbackPageRoutingModule;
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


      var _feedback_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./feedback.page */
      "./src/app/pages/feedback/feedback.page.ts");

      var routes = [{
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_3__["FeedbackPage"]
      }];

      var FeedbackPageRoutingModule = function FeedbackPageRoutingModule() {
        _classCallCheck(this, FeedbackPageRoutingModule);
      };

      FeedbackPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FeedbackPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/feedback/feedback.module.ts": function srcAppPagesFeedbackFeedbackModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackPageModule", function () {
        return FeedbackPageModule;
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


      var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./feedback-routing.module */
      "./src/app/pages/feedback/feedback-routing.module.ts");
      /* harmony import */


      var _feedback_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./feedback.page */
      "./src/app/pages/feedback/feedback.page.ts");

      var FeedbackPageModule = function FeedbackPageModule() {
        _classCallCheck(this, FeedbackPageModule);
      };

      FeedbackPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _feedback_routing_module__WEBPACK_IMPORTED_MODULE_5__["FeedbackPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_6__["FeedbackPage"]]
      })], FeedbackPageModule);
      /***/
    },

    /***/
    "./src/app/pages/feedback/feedback.page.scss": function srcAppPagesFeedbackFeedbackPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-background-color {\n  --background: #2788E8;\n}\n\nion-title {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmVlZGJhY2svZmVlZGJhY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZlZWRiYWNrL2ZlZWRiYWNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzg4RTg7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLW1lbnUtYnV0dG9ue1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/feedback/feedback.page.ts": function srcAppPagesFeedbackFeedbackPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FeedbackPage", function () {
        return FeedbackPage;
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/util.service */
      "./src/app/services/util.service.ts");

      var FeedbackPage = /*#__PURE__*/function () {
        function FeedbackPage(fb, userService, alertCtrl, router, utilService) {
          _classCallCheck(this, FeedbackPage);

          this.fb = fb;
          this.userService = userService;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.utilService = utilService;
          this.requestInProgress = false;
        }

        _createClass(FeedbackPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.feedbackForm = this.fb.group({
              name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
              message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
            });
            this.userService.getUser().then(function (user) {
              _this.user = user;

              _this.initializeData(user);
            });
          }
        }, {
          key: "initializeData",
          value: function initializeData(user) {
            this.feedbackForm.controls.name.setValue(user.firstname);
          }
        }, {
          key: "showRequestInProgress",
          value: function showRequestInProgress(status) {
            this.requestInProgress = status;
          }
        }, {
          key: "showAlert",
          value: function showAlert(msg) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Error";
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: title,
                        message: msg,
                        buttons: [{
                          text: 'Dismiss',
                          role: 'dismiss',
                          handler: function handler() {
                            // this.navCtrl.setRoot(HomePage);
                            _this2.router.navigate(['home']);
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "send",
          value: function send(valid) {
            var _this3 = this;

            if (!valid) return;
            var name = this.feedbackForm.get('name').value;
            var message = this.feedbackForm.get('message').value;
            this.showRequestInProgress(true);
            this.utilService.sendFeedback(name, message, this.user).subscribe(function (data) {
              _this3.showAlert('Thank you for your valuable feedback.', '');

              _this3.showRequestInProgress(false);
            });
          }
        }]);

        return FeedbackPage;
      }();

      FeedbackPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
        }];
      };

      FeedbackPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./feedback.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/feedback/feedback.page.html"))["default"],
        providers: [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./feedback.page.scss */
        "./src/app/pages/feedback/feedback.page.scss"))["default"]]
      })], FeedbackPage);
      /***/
    },

    /***/
    "./src/app/services/util.service.ts": function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UtilService", function () {
        return UtilService;
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
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); //import { Http } from '@angular/http';
      //import {Observable} from 'rxjs/Rx';
      //import 'rxjs/add/operator/map';
      //import 'rxjs/add/operator/catch';
      //import 'rxjs/Rx';


      var UtilService = /*#__PURE__*/function () {
        // constructor(private http: Http){
        // }
        function UtilService(http) {
          _classCallCheck(this, UtilService);

          this.http = http;
        }

        _createClass(UtilService, [{
          key: "sendFeedback",
          value: function sendFeedback(name, message, user) {
            var requestData = {
              name: name,
              message: message,
              mobile: user.mobile
            };
            return this.http.post(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].SEND_FEEDBACK, JSON.stringify(requestData));
          }
        }]);

        return UtilService;
      }();

      UtilService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      UtilService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UtilService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-feedback-feedback-module-es5.js.map