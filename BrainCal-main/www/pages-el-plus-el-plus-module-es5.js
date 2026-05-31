(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-el-plus-el-plus-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/el-plus/el-plus.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesElPlusElPlusPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">    \n    <ion-back-button></ion-back-button>\n    <ion-title *ngIf=\"post.title.rendered\" [innerHTML]=\"post.title.rendered\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"trick-content\">\n  <div *ngIf=\"post\" class=\"single-trick\">\n    <h2 [innerHTML]=\"post.title.rendered\"></h2>\n    <div class=\"trick-details\">  \n        <div *ngIf=\"userFavorites\" class=\"favorite\">\n            <div *ngIf=\"userFavorites.indexOf(post.id)==-1\" (click)=\"addFavorite(post.id)\">\n              <!-- <ion-icon ios=\"ios-heart-outline\" md=\"md-heart-outline\"></ion-icon> -->\n              <ion-icon ios=\"heart-outline\" md=\"heart-outline\"></ion-icon>\n            </div>   \n            <div *ngIf=\"userFavorites.indexOf(post.id)>=0\" (click)=\"removeFavorite(post.id)\">\n              <!-- <ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon> -->\n              <ion-icon ios=\"heart\" md=\"heart\"></ion-icon>\n            </div>     \n      </div>\n      <div></div>\n      \n      <div *ngIf=\"post.cover_image!=''\">\n        <img [src]=\"post.cover_image\" #coverImage (tap)=\"showCover(coverImage)\"/>\n      </div>\n\n      <div [innerHTML]=\"post.content.rendered\"></div>\n      <div *ngIf=\"post.answer\">\n          <div *ngIf=\"showAnswer\">Correct Answer is: <b [innerHTML]=\"post.answer\"></b></div>\n          <a *ngIf=\"!showAnswer\" (click)=\"getAnswer()\">Show Answer</a>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/el-plus/el-plus-routing.module.ts": function srcAppPagesElPlusElPlusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElPlusPageRoutingModule", function () {
        return ElPlusPageRoutingModule;
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


      var _el_plus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./el-plus.page */
      "./src/app/pages/el-plus/el-plus.page.ts");

      var routes = [{
        path: '',
        component: _el_plus_page__WEBPACK_IMPORTED_MODULE_3__["ElPlusPage"]
      }];

      var ElPlusPageRoutingModule = function ElPlusPageRoutingModule() {
        _classCallCheck(this, ElPlusPageRoutingModule);
      };

      ElPlusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ElPlusPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/el-plus/el-plus.module.ts": function srcAppPagesElPlusElPlusModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElPlusPageModule", function () {
        return ElPlusPageModule;
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


      var _el_plus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./el-plus-routing.module */
      "./src/app/pages/el-plus/el-plus-routing.module.ts");
      /* harmony import */


      var _el_plus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./el-plus.page */
      "./src/app/pages/el-plus/el-plus.page.ts");

      var ElPlusPageModule = function ElPlusPageModule() {
        _classCallCheck(this, ElPlusPageModule);
      };

      ElPlusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _el_plus_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElPlusPageRoutingModule"]],
        declarations: [_el_plus_page__WEBPACK_IMPORTED_MODULE_6__["ElPlusPage"]]
      })], ElPlusPageModule);
      /***/
    },

    /***/
    "./src/app/pages/el-plus/el-plus.page.scss": function srcAppPagesElPlusElPlusPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-background-color {\n  --background: #2788E8;\n}\n\nion-title {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\n.single-trick {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.favorite {\n  position: absolute;\n  right: 25px;\n  top: 21px;\n  z-index: 0;\n  color: #FFF;\n  font-size: 25px;\n}\n\n.trick-content .single-trick h2 {\n  padding: 5px 25px 5px 10px;\n  color: #FFF;\n  background-color: #0088e8;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: normal;\n}\n\nion-back-button {\n  float: left;\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWwtcGx1cy9lbC1wbHVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFFRSxrQkFBQTtFQUNFLG1CQUFBO0FBQUo7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSwwQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsV0FBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWwtcGx1cy9lbC1wbHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzg4RTg7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLW1lbnUtYnV0dG9ue1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNpbmdsZS10cmlja3tcbiAgLy8gcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5mYXZvcml0ZXsgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gIHJpZ2h0OiAyNXB4OyBcbiAgdG9wOiAyMXB4OyBcbiAgei1pbmRleDogMDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnRyaWNrLWNvbnRlbnQgLnNpbmdsZS10cmljayBoMiB7XG4gIHBhZGRpbmc6IDVweCAyNXB4IDVweCAxMHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODhlODtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5pb24tYmFjay1idXR0b257XG4gIGZsb2F0OiBsZWZ0O1xuICBjb2xvcjogI0ZGRjsgIFxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/el-plus/el-plus.page.ts": function srcAppPagesElPlusElPlusPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElPlusPage", function () {
        return ElPlusPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/post.service */
      "./src/app/services/post.service.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/app.constants */
      "./src/app/shared/app.constants.ts");
      /* harmony import */


      var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-ionic-image-viewer */
      "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");

      var ElPlusPage = /*#__PURE__*/function () {
        function ElPlusPage(activatedRoute, router, postService, userService, alertCtrl, modalController) {
          var _this = this;

          _classCallCheck(this, ElPlusPage);

          this.activatedRoute = activatedRoute;
          this.router = router;
          this.userService = userService;
          this.alertCtrl = alertCtrl;
          this.modalController = modalController;
          this.userFavorites = [];
          this.result = null;
          this.showAnswer = false; // this.post= this.navParams.get('post');

          if (this.router.getCurrentNavigation().extras.state) {
            this.post = this.router.getCurrentNavigation().extras.state.post;
          } // let loadFromServer= this.navParams.get('loadFromServer');


          var loadFromServer = this.activatedRoute.snapshot.params['loadFromServer'];

          if (loadFromServer) {
            postService.getPost(this.post.id, '11_plus').subscribe(function (post) {
              _this.post = post;
            });
          }
        }

        _createClass(ElPlusPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.userService.getUser().then(function (user) {
              _this2.userFavorites = user.favorites.toString().split(',').map(Number);
            });
          }
        }, {
          key: "showAlert",
          value: function showAlert(msg) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Error";
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: title,
                        message: msg,
                        buttons: ['Dismiss']
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
          key: "checkForResponseError",
          value: function checkForResponseError(err) {
            try {
              var errorResponse = JSON.parse(err._body);
              if (errorResponse.code == "rest_post_invalid_page_number") return;

              if (errorResponse.error == "session_expired") {
                this.showAlert("Seems your session is expired. Please login again."); // this.navCtrl.push(LoginPage);

                this.userService.logout();
              } else this.showAlert(errorResponse.error);
            } catch (error) {
              this.showAlert(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].JSON_ERROR);
            }
          }
        }, {
          key: "getAnswer",
          value: function getAnswer() {
            this.showAnswer = true;
          }
        }, {
          key: "updateFavorites",
          value: function updateFavorites() {
            var _this3 = this;

            this.userService.getAuthCookie().then(function (val) {
              _this3.userService.saveFavorites(_this3.userFavorites, val).subscribe(function (data) {
                if (data.hasOwnProperty('user')) {
                  _this3.userService.saveUser(data.user);
                }
              }, function (err) {
                _this3.checkForResponseError(err);
              });
            });
          }
        }, {
          key: "removeFavorite",
          value: function removeFavorite(id) {
            var index = this.userFavorites.indexOf(id);

            if (index >= 0) {
              this.userFavorites.splice(index, 1);
              this.updateFavorites();
            }
          }
        }, {
          key: "addFavorite",
          value: function addFavorite(id) {
            this.userFavorites.push(id);
            this.updateFavorites();
          }
        }, {
          key: "showCover",
          value: function showCover(coverImage) {
            // const imageViewer = this.imageViewerCtrl.create(coverImage);
            // imageViewer.present();
            this.openViewer(coverImage);
          }
        }, {
          key: "openViewer",
          value: function openViewer(coverImage) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["ViewerModalComponent"],
                        componentProps: {
                          // src: "./assets/img/demo.jpg"
                          src: coverImage
                        },
                        cssClass: 'ion-img-viewer',
                        keyboardClose: true,
                        showBackdrop: true
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      return _context2.abrupt("return", _context2.sent);

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return ElPlusPage;
      }();

      ElPlusPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      ElPlusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-el-plus',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./el-plus.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/el-plus/el-plus.page.html"))["default"],
        providers: [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./el-plus.page.scss */
        "./src/app/pages/el-plus/el-plus.page.scss"))["default"]]
      })], ElPlusPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-el-plus-el-plus-module-es5.js.map