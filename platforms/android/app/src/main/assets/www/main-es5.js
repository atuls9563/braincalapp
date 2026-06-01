(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$": function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>Welcome</ion-list-header>\n          <ion-note>{{user?.firstname}}</ion-note>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"openPage(p)\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n              [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js"); // import { LoginPage } from './pages/login/login.page';
      // import { ProfilePage } from './pages/profile/profile.page';


      var routes = [// {
      //   path: '',
      //   redirectTo: 'folder/Inbox',
      //   pathMatch: 'full'
      // },
      {
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-home-home-module */
          "pages-home-home-module").then(__webpack_require__.bind(null,
          /*! ./pages/home/home.module */
          "./src/app/pages/home/home.module.ts")).then(function (m) {
            return m.HomePageModule;
          });
        }
      }, {
        path: 'trick',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-trick-trick-module */
          [__webpack_require__.e("default~pages-el-plus-el-plus-module~pages-trick-trick-module"), __webpack_require__.e("pages-trick-trick-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/trick/trick.module */
          "./src/app/pages/trick/trick.module.ts")).then(function (m) {
            return m.TrickPageModule;
          });
        }
      }, {
        path: 'folder/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-folder-module */
          "folder-folder-module").then(__webpack_require__.bind(null,
          /*! ./folder/folder.module */
          "./src/app/folder/folder.module.ts")).then(function (m) {
            return m.FolderPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-login-login-module */
          "pages-login-login-module").then(__webpack_require__.bind(null,
          /*! ./pages/login/login.module */
          "./src/app/pages/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-profile-profile-module */
          "pages-profile-profile-module").then(__webpack_require__.bind(null,
          /*! ./pages/profile/profile.module */
          "./src/app/pages/profile/profile.module.ts")).then(function (m) {
            return m.ProfilePageModule;
          });
        }
      }, {
        path: 'maths',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-maths-maths-module */
          "pages-maths-maths-module").then(__webpack_require__.bind(null,
          /*! ./pages/maths/maths.module */
          "./src/app/pages/maths/maths.module.ts")).then(function (m) {
            return m.MathsPageModule;
          });
        }
      }, {
        path: 'lang-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-lang-list-lang-list-module */
          "pages-lang-list-lang-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/lang-list/lang-list.module */
          "./src/app/pages/lang-list/lang-list.module.ts")).then(function (m) {
            return m.LangListPageModule;
          });
        }
      }, {
        path: 'lang-cat',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-lang-cat-lang-cat-module */
          "pages-lang-cat-lang-cat-module").then(__webpack_require__.bind(null,
          /*! ./pages/lang-cat/lang-cat.module */
          "./src/app/pages/lang-cat/lang-cat.module.ts")).then(function (m) {
            return m.LangCatPageModule;
          });
        }
      }, {
        path: 'lang',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-lang-lang-module */
          "pages-lang-lang-module").then(__webpack_require__.bind(null,
          /*! ./pages/lang/lang.module */
          "./src/app/pages/lang/lang.module.ts")).then(function (m) {
            return m.LangPageModule;
          });
        }
      }, {
        path: 'quiz',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-quiz-quiz-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-quiz-quiz-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/quiz/quiz.module */
          "./src/app/pages/quiz/quiz.module.ts")).then(function (m) {
            return m.QuizPageModule;
          });
        }
      }, {
        path: 'quizes',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-quizes-quizes-module */
          [__webpack_require__.e("common"), __webpack_require__.e("pages-quizes-quizes-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/quizes/quizes.module */
          "./src/app/pages/quizes/quizes.module.ts")).then(function (m) {
            return m.QuizesPageModule;
          });
        }
      }, {
        path: 'el-plus-cat/:type',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-el-plus-cat-el-plus-cat-module */
          "pages-el-plus-cat-el-plus-cat-module").then(__webpack_require__.bind(null,
          /*! ./pages/el-plus-cat/el-plus-cat.module */
          "./src/app/pages/el-plus-cat/el-plus-cat.module.ts")).then(function (m) {
            return m.ElPlusCatPageModule;
          });
        }
      }, {
        path: 'el-plus-list',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-el-plus-list-el-plus-list-module */
          "pages-el-plus-list-el-plus-list-module").then(__webpack_require__.bind(null,
          /*! ./pages/el-plus-list/el-plus-list.module */
          "./src/app/pages/el-plus-list/el-plus-list.module.ts")).then(function (m) {
            return m.ElPlusListPageModule;
          });
        }
      }, {
        path: 'el-plus',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | pages-el-plus-el-plus-module */
          [__webpack_require__.e("default~pages-el-plus-el-plus-module~pages-trick-trick-module"), __webpack_require__.e("pages-el-plus-el-plus-module")]).then(__webpack_require__.bind(null,
          /*! ./pages/el-plus/el-plus.module */
          "./src/app/pages/el-plus/el-plus.module.ts")).then(function (m) {
            return m.ElPlusPageModule;
          });
        }
      }, {
        path: 'favorites',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-favorites-favorites-module */
          "pages-favorites-favorites-module").then(__webpack_require__.bind(null,
          /*! ./pages/favorites/favorites.module */
          "./src/app/pages/favorites/favorites.module.ts")).then(function (m) {
            return m.FavoritesPageModule;
          });
        }
      }, {
        path: 'feedback',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | pages-feedback-feedback-module */
          "pages-feedback-feedback-module").then(__webpack_require__.bind(null,
          /*! ./pages/feedback/feedback.module */
          "./src/app/pages/feedback/feedback.module.ts")).then(function (m) {
            return m.FeedbackPageModule;
          });
        }
      }];
      var newpath = [{
        path: '',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./app.module */
          "./src/app/app.module.ts")).then(function (m) {
            return m.AppModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss": function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\nion-menu.md ion-list {\n  padding: 20px 0;\n}\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n.preloader-wrap {\n  position: fixed;\n  top: 0;\n  height: 3px;\n  z-index: 999;\n  width: 100%;\n}\n.preloader-wrap:after {\n  left: 0;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMV…h/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLDJFQUFBO0FBRUY7QUFDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7QUFFRjtBQUNBO0VBQ0UsbUJBQUE7QUFFRjtBQUNBOztFQUVFLGtCQUFBO0FBRUY7QUFDQTtFQUNFLDJEQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQ0Y7QUFFQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGRjtBQUtBO0VBQ0Usc0RBQUE7QUFGRjtBQUtBO0VBQ0UsK0JBQUE7QUFGRjtBQUtBO0VBQ0UsY0FBQTtBQUZGO0FBS0E7RUFDRSxnQkFBQTtBQUZGO0FBS0E7RUFDRSxzQkFBQTtBQUZGO0FBS0E7RUFDRSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBRkY7QUFLQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUZGO0FBS0E7RUFDRSwrQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBS0E7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQUZGO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBS0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUhGO0FBTUE7RUFDRSxpQ0FBQTtBQUhGO0FBMEJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUF2QkY7QUEwQkE7RUFDRSxPQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDZLQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBdkJGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuXG5cblxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cblxuLy8gQXBwIEdsb2JhbCBTYXNzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSBnbG9iYWxseS4gVGhlc2Vcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LlxuLy8gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlIGFsc28gdXNlZCBhcyBhbiBlbnRyeSBwb2ludFxuLy8gdG8gaW1wb3J0IG90aGVyIFNhc3MgZmlsZXMgdG8gYmUgaW5jbHVkZWQgaW4gdGhlIG91dHB1dCBDU1MuXG4vL1xuLy8gU2hhcmVkIFNhc3MgdmFyaWFibGVzLCB3aGljaCBjYW4gYmUgdXNlZCB0byBhZGp1c3QgSW9uaWMnc1xuLy8gZGVmYXVsdCBTYXNzIHZhcmlhYmxlcywgYmVsb25nIGluIFwidGhlbWUvdmFyaWFibGVzLnNjc3NcIi5cbi8vXG4vLyBUbyBkZWNsYXJlIHJ1bGVzIGZvciBhIHNwZWNpZmljIG1vZGUsIGNyZWF0ZSBhIGNoaWxkIHJ1bGVcbi8vIGZvciB0aGUgLm1kLCAuaW9zLCBvciAud3AgbW9kZSBjbGFzc2VzLiBUaGUgbW9kZSBjbGFzcyBpc1xuLy8gYXV0b21hdGljYWxseSBhcHBsaWVkIHRvIHRoZSA8Ym9keT4gZWxlbWVudCBpbiB0aGUgYXBwLlxuXG4ucHJlbG9hZGVyLXdyYXB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBoZWlnaHQ6IDNweDtcbiAgei1pbmRleDogOTk5O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByZWxvYWRlci13cmFwOmFmdGVye1xuICBsZWZ0OiAwO1xuICBib3R0b206IC01cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgLTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQUhCQU1BQUFEekR0QnhBQUFBRDFCTVbigKZoL1RYRUFBQUFhU1VSQlZBalhZeENFQWdZNFVJSUNCbU1vZ01zZ0ZMdEFBUUNOU3dYWktPZFB4Z0FBQUFCSlJVNUVya0pnZ2c9PSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuXG5cbi8vIEhlYWRlclxuXG5cbi8vIGlvbi10aXRsZXtcbi8vICAgY29sb3I6I2ZmZjtcbi8vIH1cblxuLy8gLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuLy8gICAtLWJhY2tncm91bmQ6ICMyNzg4RTg7XG4vLyB9XG5cbi8vIGlvbi1uYXZiYXIgYnV0dG9ue1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuLy8gICAgIHotaW5kZXg6IDI0O1xuLy8gfVxuXG4vLyAudHJpY2tzLXJvd3tcbi8vICAgbWFyZ2luLXRvcDogNTRweDtcbi8vIH1cblxuLy8gLnNpZGUtbWVudS1wYWdlcyBpb24taWNvbiB7XG4vLyAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4vLyAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgdG9wOiAycHg7XG4vLyAgIGNvbG9yOiAjMDA4OGU4O1xuLy8gfVxuLy8gLnRvb2xiYXItYmFja2dyb3VuZC1tZCB7IGJhY2tncm91bmQ6ICMwMDg4ZTg7fVxuLy8gLnRvb2xiYXItdGl0bGUtbWQge1xuLy8gICB0ZXh0LWFsaWduOiBsZWZ0O1xuLy8gICBjb2xvcjogI0ZGRjtcbi8vICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbi8vICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbi8vIH1cbi8vIC50cmlja3MtbGlzdCBpb24tbGlzdCBpb24taXRlbSAuaXRlbS1pbm5lcntcbi8vICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuLy8gICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gfVxuLy8gLnRyaWNrcy1saXN0IGlvbi1saXN0IGlvbi1pdGVtOm50aC1jaGlsZChldmVuKSAuaXRlbS1pbm5lcntcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI0VDNDA3QTtcbi8vICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvZXZlbi5wbmcpXG4vLyB9XG4vLyAudHJpY2tzLWxpc3QgaW9uLWxpc3QgaW9uLWl0ZW06bnRoLWNoaWxkKG9kZCkgLml0ZW0taW5uZXJ7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg4ZTg7XG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1nL29kZC5wbmcpXG4vLyB9XG4vLyAudHJpY2tzLWxpc3QgbGlzdC1pb3N7XG4vLyAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuLy8gICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4vLyAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbi8vICAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbi8vICAgZmxleC13cmFwOiB3cmFwO1xuLy8gfVxuLy8gLnRyaWNrcy1saXN0IC5pdGVtLWlvc3sgXG4vLyAgIHBhZGRpbmc6IDAgMTZweCAhaW1wb3J0YW50O1xuLy8gfVxuLy8gLmxpc3QtaW9zID4gLml0ZW0tYmxvY2s6Zmlyc3QtY2hpbGR7XG4vLyAgIGJvcmRlci10b3A6IG5vbmU7XG4vLyB9XG4vLyAuZmF2b3JpdGVzLXJvdyAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyLFxuLy8gLnRyaWNrcy1yb3cgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lcntcbi8vICAgcGFkZGluZy1yaWdodDogMjBweDtcbi8vICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuLy8gICBtYXJnaW4tdG9wOiA1cHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDVweDtcbi8vICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuLy8gICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4vLyAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyB9XG5cbi8vIC5mYXZvcml0ZXMtcm93IC5pdGVtLW1kLml0ZW0tYmxvY2s6Zmlyc3QtY2hpbGQgLml0ZW0taW5uZXIsXG4vLyAudHJpY2tzLXJvdyAuaXRlbS1tZC5pdGVtLWJsb2NrOmZpcnN0LWNoaWxkIC5pdGVtLWlubmVyeyBtYXJnaW4tdG9wOiAxMHB4fVxuXG4vLyAuZmF2b3JpdGVzLXJvdyAuaXRlbS1tZC5pdGVtLWJsb2NrOmxhc3QtY2hpbGQgLml0ZW0taW5uZXIsXG4vLyAudHJpY2tzLXJvdyAuaXRlbS1tZC5pdGVtLWJsb2NrOmxhc3QtY2hpbGQgLml0ZW0taW5uZXJ7bWFyZ2luLWJvdHRvbTogMTBweH1cblxuLy8gLmZhdm9yaXRlcy1yb3cgLnRyaWNrLXRpdGxlLFxuLy8gLnRyaWNrcy1yb3cgLnRyaWNrLXRpdGxle1xuLy8gICBjb2xvcjogI0ZGRjtcbi8vICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgIG1hcmdpbi10b3A6IDIwcHg7XG4vLyAgIGhlaWdodDogNzBweDtcbi8vICAgbWF4LXdpZHRoOiAxMDAlO1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4vLyAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4vLyAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbi8vICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4vLyB9XG4vLyAuZmF2b3JpdGVzLXJvdyAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIC5sYWJlbC1tZCxcbi8vIC50cmlja3Mtcm93IC5pdGVtLW1kLml0ZW0tYmxvY2sgLml0ZW0taW5uZXIgLmxhYmVsLW1keyBtYXJnaW4tcmlnaHQ6IDBweDsgfVxuXG4vLyAuZmF2b3JpdGVzLXJvdyAuZmF2b3JpdGUsXG4vLyAudHJpY2tzLXJvdyAuZmF2b3JpdGV7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDI1cHg7IHRvcDogMTJweDsgei1pbmRleDogMjsgY29sb3I6ICNGRkY7fVxuXG4vLyAuZmF2b3JpdGVzLXJvdyAuaXRlbS1pbm5lciBidXR0b24sXG4vLyAudHJpY2tzLXJvdyAuaXRlbS1pbm5lciBidXR0b257XG4vLyAgIG1hcmdpbjogMTVweCBhdXRvIDA7XG4vLyAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgY29sb3I6ICNGRkY7XG4vLyB9XG4vLyAubm8tdHJpY2sgeyBjb2xvcjogI0ZGRjsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4vLyAudmlkZW8tY29udGFpbmVyOjphZnRlcntcbi8vICAgZGlzcGxheTogYmxvY2s7XG4vLyAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgIGNsZWFyOiBib3RoO1xuLy8gfVxuLy8gLnZpZGVvLWZpeCB7IGhlaWdodDogMXB4OyBkaXNwbGF5OiBibG9jazsgY2xlYXI6IGJvdGg7fVxuLy8gLmJhci1idXR0b24tZGVmYXVsdC1tZDpob3Zlcjpub3QoLmRpc2FibGUtaG92ZXIpXG4vLyAuYmFyLWJ1dHRvbi1jbGVhci1tZC1kZWZhdWx0OmhvdmVyOm5vdCguZGlzYWJsZS1ob3ZlciksXG4vLyAuYmFyLWJ1dHRvbi1tZC1kZWZhdWx0OmhvdmVyOm5vdCguZGlzYWJsZS1ob3ZlciksXG4vLyAuYmFyLWJ1dHRvbi1kZWZhdWx0LW1kLCAuYmFyLWJ1dHRvbi1jbGVhci1tZC1kZWZhdWx0LCAuYmFyLWJ1dHRvbi1tZC1kZWZhdWx0XG4vLyB7IGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7fVxuXG5cbi8vIC5wcmVsb2FkZXJ7XG4vLyAgIHRvcDogMDtcbi8vICAgaGVpZ2h0OiAzcHg7XG4vLyAgIGJhY2tncm91bmQ6ICNFQzQwN0E7XG4vLyAgIHotaW5kZXg6IDk5OTtcbi8vICAgd2lkdGg6IDEwMCU7XG4vLyAgIGFuaW1hdGlvbjogbG9hZGluZy1hbmltYXRpb24gMnMgaW5maW5pdGU7XG4vLyB9XG4vLyAuaW5wdXQtd3JhcHBlciB7XG4vLyAgIHBvc2l0aW9uOiBzdGF0aWM7XG4vLyB9XG5cbi8vIGlvbi1jb2wgeyBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50OyB9XG4vLyAuY29sIHtwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O31cbi8vIEAtd2Via2l0LWtleWZyYW1lcyBsb2FkaW5nLWFuaW1hdGlvbiB7XG4vLyAgIDAlIHt3aWR0aDogMCU7fVxuLy8gICA1MCUge3dpZHRoOiAxMDAlO31cbi8vICAgNTElIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO31cbi8vICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO31cbi8vIH1cbi8vIEAtbW96LWtleWZyYW1lcyBsb2FkaW5nLWFuaW1hdGlvbiB7XG4vLyAgIDAlIHt3aWR0aDogMCU7fVxuLy8gICA1MCUge3dpZHRoOiAxMDAlO31cbi8vICAgNTElIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCUpO31cbi8vICAgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO31cbi8vIH1cbi8vIEAtby1rZXlmcmFtZXMgbG9hZGluZy1hbmltYXRpb24ge1xuLy8gICAwJSB7d2lkdGg6IDAlO31cbi8vICAgNTAlIHt3aWR0aDogMTAwJTt9XG4vLyAgIDUxJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAlKTt9XG4vLyAgIDEwMCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTt9XG4vLyB9XG4vLyBAa2V5ZnJhbWVzIGxvYWRpbmctYW5pbWF0aW9uIHtcbi8vICAgMCUge3dpZHRoOiAwJTt9XG4vLyAgIDUwJSB7d2lkdGg6IDEwMCU7fVxuLy8gICA1MSUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7fVxuLy8gICAxMDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7fVxuLy8gfVxuXG5cblxuLy8gaW9uLXNsaWRlc3sgaGVpZ2h0OiBhdXRvO31cbi8vIC5zd2lwZXItcGFnaW5hdGlvbi1mcmFjdGlvbiwgLnN3aXBlci1wYWdpbmF0aW9uLWN1c3RvbSxcbi8vIC5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0c3tcbi8vICAgYm90dG9tOiAwO1xuLy8gfVxuXG4vLyA6Zm9jdXMsXG4vLyA6YWN0aXZlIHtcbi8vIG91dGxpbmU6IG5vbmU7XG4vLyB9XG4vLyAudG9vbGJhci1iYWNrZ3JvdW5kLWlvc3tcbi8vICAgYmFja2dyb3VuZDogIzAwODhlODtcbi8vIH1cbi8vIC50b29sYmFyLXRpdGxlLWlvcyxcbi8vIC5iYXItYnV0dG9uLWRlZmF1bHQtaW9zLCAuYmFyLWJ1dHRvbi1kZWZhdWx0LmJhci1idXR0b24taW9zLWRlZmF1bHQsIC5iYXItYnV0dG9uLWNsZWFyLWlvcy1kZWZhdWx0e1xuLy8gICBjb2xvcjogI0ZGRjtcbi8vIH1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, splashScreen, statusBar, storage, userService, router, menuCtrl) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.storage = storage;
          this.userService = userService;
          this.router = router;
          this.menuCtrl = menuCtrl;
          this.trickSuggestions = [];
          this.appPages = [{
            title: 'Home',
            url: '/home',
            icon: 'home',
            type: 'home'
          }, {
            title: 'Math Tricks',
            url: '/maths',
            icon: 'calculator',
            type: 'tricks'
          }, {
            title: 'Languages',
            url: '/lang-cat',
            icon: 'calculator',
            type: 'lang'
          }, {
            title: 'General Knowledge',
            url: '/quiz',
            icon: 'book',
            type: 'gk'
          }, {
            title: '11+ Maths',
            url: '/el-plus-cat/maths_11',
            icon: 'calculator',
            type: 'maths_11'
          }, {
            title: '11+ English',
            url: '/el-plus-cat/english_11',
            icon: 'text',
            type: 'english_11'
          }, {
            title: '11+ Science',
            url: '/el-plus-cat/science_11',
            icon: 'planet',
            type: 'science_11'
          }, {
            title: 'Profile',
            url: '/profile',
            icon: 'person',
            type: 'profile'
          }, {
            title: 'Favourites',
            url: '/favorites',
            icon: 'heart',
            type: 'fav'
          }, {
            title: 'Feedback',
            url: '/feedback',
            icon: 'clipboard',
            type: 'feedback'
          }, {
            title: 'Logout',
            url: '/profile',
            icon: 'log-out',
            type: 'logout'
          }];
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.splashScreen.hide();

              setTimeout(function () {
                return _this.splashScreen.hide();
              }, 100);

              _this.storage.get("authCookie").then(function (val) {
                return _this.checkAuthorization.call(_this, val);
              });
            });
          }
        }, {
          key: "checkAuthorization",
          value: function checkAuthorization(val) {
            var _this2 = this;

            if (val) this.userService.getUser().then(function (user) {
              return _this2.redirectAutorizedUser.call(_this2, user);
            });else this.router.navigate(['login']);
          }
          /**
           * Redirects user to either home/profile/login page.
           * @param user
           * @returns
           */

        }, {
          key: "redirectAutorizedUser",
          value: function redirectAutorizedUser(user) {
            if (user == null || user == '') {
              this.router.navigate(['login']);
              return;
            }

            this.user = user;

            if (!this.user.firstname && !this.user.lastname || !this.user.email) {
              this.router.navigate(['profile']);
              return;
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeApp();
          }
        }, {
          key: "openPage",
          value: function openPage(page) {
            if (page.title == "Logout") {
              this.logout();
              return;
            }

            if (page.type == 'gk') {
              var quiz = {
                'ID': 0,
                'name': page.title
              };
              this.router.navigate(['quiz'], {
                state: {
                  quiz: quiz
                }
              });
              return;
            }

            this.router.navigate([page.url], {
              state: page
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            this.userService.logout();
            this.router.navigate(['login']);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"]
        }, {
          type: _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic-native/in-app-purchase/ngx */
      "./node_modules/@ionic-native/in-app-purchase/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @ionic-native/sign-in-with-apple/ngx */
      "./node_modules/@ionic-native/sign-in-with-apple/__ivy_ngcc__/ngx/index.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _ionic_native_in_app_purchase_ngx__WEBPACK_IMPORTED_MODULE_12__["InAppPurchase"], Storage, _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_14__["SignInWithApple"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/services/user.service.ts": function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
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


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/storage */
      "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
      /* harmony import */


      var _shared_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/app.constants */
      "./src/app/shared/app.constants.ts");
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/add/operator/catch */
      "./node_modules/rxjs/add/operator/catch.js");
      /* harmony import */


      var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/add/operator/mergeMap */
      "./node_modules/rxjs/add/operator/mergeMap.js");
      /* harmony import */


      var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js"); //import 'rxjs/add/operator/map';
      //import 'rxjs/Rx';


      var UserService = /*#__PURE__*/function () {
        // constructor(private http: Http,private storage: Storage){
        // }
        function UserService(http, storage) {
          _classCallCheck(this, UserService);

          this.http = http;
          this.storage = storage;
        }

        _createClass(UserService, [{
          key: "doLogin",
          value: function doLogin(mobile, countryCode) {
            var _this3 = this;

            // return this.getRegisterNonce().flatMap((data)=> this.doRegisterLogin(data.json(),mobile,countryCode)).map(response=>response.json());
            return this.getRegisterNonce().flatMap(function (data) {
              return _this3.doRegisterLogin(data, mobile, countryCode);
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "getRegisterNonce",
          value: function getRegisterNonce() {
            return this.http.get(_shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].REG_NONCE_URL);
          }
        }, {
          key: "verifyOTP",
          value: function verifyOTP(mobile, countryCode, otp, otp_session) {
            var url = _shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].CUSTOM_REG_URL + "?mobile=" + mobile + "&countryCode=" + countryCode + "&otp_session=" + otp_session + "&otp=" + otp; // return this.sendOTP(url).map(response=>response.json());

            return this.sendOTP(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (response) {
              return response;
            }));
          }
        }, {
          key: "sendOTP",
          value: function sendOTP(url) {
            return this.http.get(url);
          }
        }, {
          key: "doRegisterLogin",
          value: function doRegisterLogin(data, mobile, countryCode) {
            var url = _shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].CUSTOM_REG_URL + "?mobile=" + mobile + "&countryCode=" + countryCode + "&nonce=" + data.nonce;
            return this.http.get(url);
          }
          /* This method saves user locally on device */

        }, {
          key: "saveUser",
          value: function saveUser(user) {
            this.storage.set('userData', user);
          }
          /* Save cookie for user authentication */

        }, {
          key: "saveAuthCookie",
          value: function saveAuthCookie(cookie) {
            this.storage.set('authCookie', cookie);
          }
        }, {
          key: "getUser",
          value: function getUser() {
            return this.storage.get('userData');
          } // public saveFavorites(favorites: number[],cookie){
          //     let requestData: any= {
          //         cookie: cookie,
          //         meta_key: 'favorites',
          //         meta_value: favorites.map(Number).toString()
          //     } 
          //     // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData)).map(data=>data.json());
          //     // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData)).pipe(map(data=>data));
          //     // console.log(requestData);
          //     return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData))
          //     .pipe(map(data=>
          //         {
          //             console.log(data);
          //             data;
          //         }));
          //         // return this.http.post<any>(AppConstants.UPDATE_PROFILE, requestData ,{ observe: 'response'})
          //         // .pipe(
          //         //   map(response => {
          //         //     return response.headers;
          //         //   })).subscribe(data => console.log(data));
          // }

        }, {
          key: "saveFavorites",
          value: function saveFavorites(favorites, cookie) {
            var requestData = {
              cookie: cookie,
              meta_key: 'favorites',
              meta_value: favorites.map(Number).toString()
            }; // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData)).map(data=>data.json());
            // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData)).pipe(map(data=>data));

            return this.http.post(_shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].UPDATE_PROFILE, JSON.stringify(requestData)); // .pipe(map(data=>
            //     {
            //         console.log(data);
            //         if(data.hasOwnProperty('user')){
            //             console.log(54);
            //             console.log(data);
            //             // this.saveUser(data);
            //         }
            //         data;
            //     }));
            // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData))
            // .pipe(map(data=>
            //     {
            //         // console.log(data);
            //         // if(data.hasOwnProperty('user')){
            //         //     console.log(54);
            //         //     console.log(data);
            //         //     // this.saveUser(data);
            //         // }
            //         data;
            //     }));
          }
        }, {
          key: "getAuthCookie",
          value: function getAuthCookie() {
            return this.storage.get("authCookie");
          }
        }, {
          key: "updateUser",
          value: function updateUser(user, cookie) {
            var requestData = {
              cookie: cookie,
              meta_key: 'first_name,last_name,mobile,email',
              meta_value: user.firstname + "," + user.lastname + "," + user.mobile + "," + user.email
            }; // return this.http.post(AppConstants.UPDATE_PROFILE,JSON.stringify(requestData)).map(data=>data.json());

            return this.http.post(_shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].UPDATE_PROFILE, JSON.stringify(requestData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
              return data;
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.storage.remove('authCookie');
            this.storage.remove('userData');
          }
        }, {
          key: "registerUser",
          value: function registerUser(email, username) {
            var first_name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var requestData = {
              email: email,
              first_name: first_name,
              username: username,
              hash: 'EB46F14D6E44B1472AA818248116FF65'
            }; // return this.http.post(AppConstants.REG_URL,JSON.stringify(requestData)).map(data=>data.json());

            return this.http.post(_shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].REG_URL, JSON.stringify(requestData)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (data) {
              return data;
            }));
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], UserService);
      /***/
    },

    /***/
    "./src/app/shared/app.constants.ts": function srcAppSharedAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppConstants", function () {
        return AppConstants;
      });

      var AppConstants = function AppConstants() {
        _classCallCheck(this, AppConstants);
      };

      AppConstants.BASE_URL = "https://braincal.com/";
      AppConstants.REG_NONCE_URL = AppConstants.BASE_URL + "api/core/get_nonce?controller=user&method=register";
      AppConstants.CUSTOM_REG_URL = AppConstants.BASE_URL + "api/user/register";
      AppConstants.REG_URL = AppConstants.BASE_URL + "wp-json/users/create_new_user/";
      AppConstants.JSON_ERROR = "Unable to connect to server. Please  try after some time.";
      AppConstants.TRICKS_URL = AppConstants.BASE_URL + "wp-json/wp/v2/tricks";
      AppConstants.POSTS_URL = AppConstants.BASE_URL + "wp-json/wp/v2/";
      AppConstants.UPDATE_PROFILE = AppConstants.BASE_URL + "api/user/update_user_meta/";
      AppConstants.SEND_FEEDBACK = AppConstants.BASE_URL + "wp-json/send_fb/email/";
      AppConstants.QUIZ_URL = AppConstants.BASE_URL + "wp-json/watu/";
      AppConstants.PLAN_URL = AppConstants.BASE_URL + "/wp-json/";
      AppConstants.DIAL_CODES = {
        "AF": "+93",
        "AL": "+355",
        "DZ": "+213",
        "AS": "+1 684",
        "AD": "+376",
        "AO": "+244",
        "AI": "+1 264",
        "AG": "+1268",
        "AR": "+54",
        "AM": "+374",
        "AW": "+297",
        "AU": "+61",
        "AT": "+43",
        "AZ": "+994",
        "BS": "+1 242",
        "BH": "+973",
        "BD": "+880",
        "BB": "+1 246",
        "BY": "+375",
        "BE": "+32",
        "BZ": "+501",
        "BJ": "+229",
        "BM": "+1 441",
        "BT": "+975",
        "BA": "+387",
        "BW": "+267",
        "BR": "+55",
        "IO": "+246",
        "BG": "+359",
        "BF": "+226",
        "BI": "+257",
        "KH": "+855",
        "CM": "+237",
        "CA": "+1",
        "CV": "+238",
        "KY": "+ 345",
        "CF": "+236",
        "TD": "+235",
        "CL": "+56",
        "CN": "+86",
        "CX": "+61",
        "CO": "+57",
        "KM": "+269",
        "CG": "+242",
        "CK": "+682",
        "CR": "+506",
        "HR": "+385",
        "CU": "+53",
        "CY": "+537",
        "CZ": "+420",
        "DK": "+45",
        "DJ": "+253",
        "DM": "+1 767",
        "DO": "+1 849",
        "EC": "+593",
        "EG": "+20",
        "SV": "+503",
        "GQ": "+240",
        "ER": "+291",
        "EE": "+372",
        "ET": "+251",
        "FO": "+298",
        "FJ": "+679",
        "FI": "+358",
        "FR": "+33",
        "GF": "+594",
        "PF": "+689",
        "GA": "+241",
        "GM": "+220",
        "GE": "+995",
        "DE": "+49",
        "GH": "+233",
        "GI": "+350",
        "GR": "+30",
        "GL": "+299",
        "GD": "+1 473",
        "GP": "+590",
        "GU": "+1 671",
        "GT": "+502",
        "GN": "+224",
        "GW": "+245",
        "GY": "+595",
        "HT": "+509",
        "HN": "+504",
        "HU": "+36",
        "IS": "+354",
        "IN": "+91",
        "ID": "+62",
        "IQ": "+964",
        "IE": "+353",
        "IL": "+972",
        "IT": "+39",
        "JM": "+1 876",
        "JP": "+81",
        "JO": "+962",
        "KZ": "+7 7",
        "KE": "+254",
        "KI": "+686",
        "KW": "+965",
        "KG": "+996",
        "LV": "+371",
        "LB": "+961",
        "LS": "+266",
        "LR": "+231",
        "LI": "+423",
        "LT": "+370",
        "LU": "+352",
        "MG": "+261",
        "MW": "+265",
        "MY": "+60",
        "MV": "+960",
        "ML": "+223",
        "MT": "+356",
        "MH": "+692",
        "MQ": "+596",
        "MR": "+222",
        "MU": "+230",
        "YT": "+262",
        "MX": "+52",
        "MC": "+377",
        "MN": "+976",
        "ME": "+382",
        "MS": "+1664",
        "MA": "+212",
        "MM": "+95",
        "NA": "+264",
        "NR": "+674",
        "NP": "+977",
        "NL": "+31",
        "AN": "+599",
        "NC": "+687",
        "NZ": "+64",
        "NI": "+505",
        "NE": "+227",
        "NG": "+234",
        "NU": "+683",
        "NF": "+672",
        "MP": "+1 670",
        "NO": "+47",
        "OM": "+968",
        "PK": "+92",
        "PW": "+680",
        "PA": "+507",
        "PG": "+675",
        "PY": "+595",
        "PE": "+51",
        "PH": "+63",
        "PL": "+48",
        "PT": "+351",
        "PR": "+1 939",
        "QA": "+974",
        "RO": "+40",
        "RW": "+250",
        "WS": "+685",
        "SM": "+378",
        "SA": "+966",
        "SN": "+221",
        "RS": "+381",
        "SC": "+248",
        "SL": "+232",
        "SG": "+65",
        "SK": "+421",
        "SI": "+386",
        "SB": "+677",
        "ZA": "+27",
        "GS": "+500",
        "ES": "+34",
        "LK": "+94",
        "SD": "+249",
        "SR": "+597",
        "SZ": "+268",
        "SE": "+46",
        "CH": "+41",
        "TJ": "+992",
        "TH": "+66",
        "TG": "+228",
        "TK": "+690",
        "TO": "+676",
        "TT": "+1 868",
        "TN": "+216",
        "TR": "+90",
        "TM": "+993",
        "TC": "+1 649",
        "TV": "+688",
        "UG": "+256",
        "UA": "+380",
        "AE": "+971",
        "GB": "+44",
        "US": "+1",
        "UY": "+598",
        "UZ": "+998",
        "VU": "+678",
        "WF": "+681",
        "YE": "+967",
        "ZM": "+260",
        "ZW": "+263",
        "AX": "",
        "AQ": "",
        "BO": "+591",
        "BN": "+673",
        "CC": "+61",
        "CD": "+243",
        "CI": "+225",
        "FK": "+500",
        "GG": "+44",
        "VA": "+379",
        "HK": "+852",
        "IR": "+98",
        "IM": "+44",
        "JE": "+44",
        "KP": "+850",
        "KR": "+82",
        "LA": "+856",
        "LY": "+218",
        "MO": "+853",
        "MK": "+389",
        "FM": "+691",
        "MD": "+373",
        "MZ": "+258",
        "PS": "+970",
        "PN": "+872",
        "RE": "+262",
        "RU": "+7",
        "BL": "+590",
        "SH": "+290",
        "KN": "+1 869",
        "LC": "+1 758",
        "MF": "+590",
        "PM": "+508",
        "VC": "+1 784",
        "ST": "+239",
        "SO": "+252",
        "SJ": "+47",
        "SY": "+963",
        "TW": "+886",
        "TZ": "+255",
        "TL": "+670",
        "VE": "+58",
        "VN": "+84",
        "VG": "+1 284",
        "VI": "+1 340"
      };
      AppConstants.countries = [{
        name: "Afghanistan",
        dial_code: "+93",
        code: "AF"
      }, {
        name: "Albania",
        dial_code: "+355",
        code: "AL"
      }, {
        name: "Algeria",
        dial_code: "+213",
        code: "DZ"
      }, {
        name: "AmericanSamoa",
        dial_code: "+1 684",
        code: "AS"
      }, {
        name: "Andorra",
        dial_code: "+376",
        code: "AD"
      }, {
        name: "Angola",
        dial_code: "+244",
        code: "AO"
      }, {
        name: "Anguilla",
        dial_code: "+1 264",
        code: "AI"
      }, {
        name: "Antigua and Barbuda",
        dial_code: "+1268",
        code: "AG"
      }, {
        name: "Argentina",
        dial_code: "+54",
        code: "AR"
      }, {
        name: "Armenia",
        dial_code: "+374",
        code: "AM"
      }, {
        name: "Aruba",
        dial_code: "+297",
        code: "AW"
      }, {
        name: "Australia",
        dial_code: "+61",
        code: "AU"
      }, {
        name: "Austria",
        dial_code: "+43",
        code: "AT"
      }, {
        name: "Azerbaijan",
        dial_code: "+994",
        code: "AZ"
      }, {
        name: "Bahamas",
        dial_code: "+1 242",
        code: "BS"
      }, {
        name: "Bahrain",
        dial_code: "+973",
        code: "BH"
      }, {
        name: "Bangladesh",
        dial_code: "+880",
        code: "BD"
      }, {
        name: "Barbados",
        dial_code: "+1 246",
        code: "BB"
      }, {
        name: "Belarus",
        dial_code: "+375",
        code: "BY"
      }, {
        name: "Belgium",
        dial_code: "+32",
        code: "BE"
      }, {
        name: "Belize",
        dial_code: "+501",
        code: "BZ"
      }, {
        name: "Benin",
        dial_code: "+229",
        code: "BJ"
      }, {
        name: "Bermuda",
        dial_code: "+1 441",
        code: "BM"
      }, {
        name: "Bhutan",
        dial_code: "+975",
        code: "BT"
      }, {
        name: "Bosnia and Herzegovina",
        dial_code: "+387",
        code: "BA"
      }, {
        name: "Botswana",
        dial_code: "+267",
        code: "BW"
      }, {
        name: "Brazil",
        dial_code: "+55",
        code: "BR"
      }, {
        name: "British Indian Ocean Territory",
        dial_code: "+246",
        code: "IO"
      }, {
        name: "Bulgaria",
        dial_code: "+359",
        code: "BG"
      }, {
        name: "Burkina Faso",
        dial_code: "+226",
        code: "BF"
      }, {
        name: "Burundi",
        dial_code: "+257",
        code: "BI"
      }, {
        name: "Cambodia",
        dial_code: "+855",
        code: "KH"
      }, {
        name: "Cameroon",
        dial_code: "+237",
        code: "CM"
      }, {
        name: "Canada",
        dial_code: "+1",
        code: "CA"
      }, {
        name: "Cape Verde",
        dial_code: "+238",
        code: "CV"
      }, {
        name: "Cayman Islands",
        dial_code: "+ 345",
        code: "KY"
      }, {
        name: "Central African Republic",
        dial_code: "+236",
        code: "CF"
      }, {
        name: "Chad",
        dial_code: "+235",
        code: "TD"
      }, {
        name: "Chile",
        dial_code: "+56",
        code: "CL"
      }, {
        name: "China",
        dial_code: "+86",
        code: "CN"
      }, {
        name: "Christmas Island",
        dial_code: "+61",
        code: "CX"
      }, {
        name: "Colombia",
        dial_code: "+57",
        code: "CO"
      }, {
        name: "Comoros",
        dial_code: "+269",
        code: "KM"
      }, {
        name: "Congo",
        dial_code: "+242",
        code: "CG"
      }, {
        name: "Cook Islands",
        dial_code: "+682",
        code: "CK"
      }, {
        name: "Costa Rica",
        dial_code: "+506",
        code: "CR"
      }, {
        name: "Croatia",
        dial_code: "+385",
        code: "HR"
      }, {
        name: "Cuba",
        dial_code: "+53",
        code: "CU"
      }, {
        name: "Cyprus",
        dial_code: "+537",
        code: "CY"
      }, {
        name: "Czech Republic",
        dial_code: "+420",
        code: "CZ"
      }, {
        name: "Denmark",
        dial_code: "+45",
        code: "DK"
      }, {
        name: "Djibouti",
        dial_code: "+253",
        code: "DJ"
      }, {
        name: "Dominica",
        dial_code: "+1 767",
        code: "DM"
      }, {
        name: "Dominican Republic",
        dial_code: "+1 849",
        code: "DO"
      }, {
        name: "Ecuador",
        dial_code: "+593",
        code: "EC"
      }, {
        name: "Egypt",
        dial_code: "+20",
        code: "EG"
      }, {
        name: "El Salvador",
        dial_code: "+503",
        code: "SV"
      }, {
        name: "Equatorial Guinea",
        dial_code: "+240",
        code: "GQ"
      }, {
        name: "Eritrea",
        dial_code: "+291",
        code: "ER"
      }, {
        name: "Estonia",
        dial_code: "+372",
        code: "EE"
      }, {
        name: "Ethiopia",
        dial_code: "+251",
        code: "ET"
      }, {
        name: "Faroe Islands",
        dial_code: "+298",
        code: "FO"
      }, {
        name: "Fiji",
        dial_code: "+679",
        code: "FJ"
      }, {
        name: "Finland",
        dial_code: "+358",
        code: "FI"
      }, {
        name: "France",
        dial_code: "+33",
        code: "FR"
      }, {
        name: "French Guiana",
        dial_code: "+594",
        code: "GF"
      }, {
        name: "French Polynesia",
        dial_code: "+689",
        code: "PF"
      }, {
        name: "Gabon",
        dial_code: "+241",
        code: "GA"
      }, {
        name: "Gambia",
        dial_code: "+220",
        code: "GM"
      }, {
        name: "Georgia",
        dial_code: "+995",
        code: "GE"
      }, {
        name: "Germany",
        dial_code: "+49",
        code: "DE"
      }, {
        name: "Ghana",
        dial_code: "+233",
        code: "GH"
      }, {
        name: "Gibraltar",
        dial_code: "+350",
        code: "GI"
      }, {
        name: "Greece",
        dial_code: "+30",
        code: "GR"
      }, {
        name: "Greenland",
        dial_code: "+299",
        code: "GL"
      }, {
        name: "Grenada",
        dial_code: "+1 473",
        code: "GD"
      }, {
        name: "Guadeloupe",
        dial_code: "+590",
        code: "GP"
      }, {
        name: "Guam",
        dial_code: "+1 671",
        code: "GU"
      }, {
        name: "Guatemala",
        dial_code: "+502",
        code: "GT"
      }, {
        name: "Guinea",
        dial_code: "+224",
        code: "GN"
      }, {
        name: "Guinea-Bissau",
        dial_code: "+245",
        code: "GW"
      }, {
        name: "Guyana",
        dial_code: "+595",
        code: "GY"
      }, {
        name: "Haiti",
        dial_code: "+509",
        code: "HT"
      }, {
        name: "Honduras",
        dial_code: "+504",
        code: "HN"
      }, {
        name: "Hungary",
        dial_code: "+36",
        code: "HU"
      }, {
        name: "Iceland",
        dial_code: "+354",
        code: "IS"
      }, {
        name: "India",
        dial_code: "+91",
        code: "IN"
      }, {
        name: "Indonesia",
        dial_code: "+62",
        code: "ID"
      }, {
        name: "Iraq",
        dial_code: "+964",
        code: "IQ"
      }, {
        name: "Ireland",
        dial_code: "+353",
        code: "IE"
      }, {
        name: "Israel",
        dial_code: "+972",
        code: "IL"
      }, {
        name: "Italy",
        dial_code: "+39",
        code: "IT"
      }, {
        name: "Jamaica",
        dial_code: "+1 876",
        code: "JM"
      }, {
        name: "Japan",
        dial_code: "+81",
        code: "JP"
      }, {
        name: "Jordan",
        dial_code: "+962",
        code: "JO"
      }, {
        name: "Kazakhstan",
        dial_code: "+7 7",
        code: "KZ"
      }, {
        name: "Kenya",
        dial_code: "+254",
        code: "KE"
      }, {
        name: "Kiribati",
        dial_code: "+686",
        code: "KI"
      }, {
        name: "Kuwait",
        dial_code: "+965",
        code: "KW"
      }, {
        name: "Kyrgyzstan",
        dial_code: "+996",
        code: "KG"
      }, {
        name: "Latvia",
        dial_code: "+371",
        code: "LV"
      }, {
        name: "Lebanon",
        dial_code: "+961",
        code: "LB"
      }, {
        name: "Lesotho",
        dial_code: "+266",
        code: "LS"
      }, {
        name: "Liberia",
        dial_code: "+231",
        code: "LR"
      }, {
        name: "Liechtenstein",
        dial_code: "+423",
        code: "LI"
      }, {
        name: "Lithuania",
        dial_code: "+370",
        code: "LT"
      }, {
        name: "Luxembourg",
        dial_code: "+352",
        code: "LU"
      }, {
        name: "Madagascar",
        dial_code: "+261",
        code: "MG"
      }, {
        name: "Malawi",
        dial_code: "+265",
        code: "MW"
      }, {
        name: "Malaysia",
        dial_code: "+60",
        code: "MY"
      }, {
        name: "Maldives",
        dial_code: "+960",
        code: "MV"
      }, {
        name: "Mali",
        dial_code: "+223",
        code: "ML"
      }, {
        name: "Malta",
        dial_code: "+356",
        code: "MT"
      }, {
        name: "Marshall Islands",
        dial_code: "+692",
        code: "MH"
      }, {
        name: "Martinique",
        dial_code: "+596",
        code: "MQ"
      }, {
        name: "Mauritania",
        dial_code: "+222",
        code: "MR"
      }, {
        name: "Mauritius",
        dial_code: "+230",
        code: "MU"
      }, {
        name: "Mayotte",
        dial_code: "+262",
        code: "YT"
      }, {
        name: "Mexico",
        dial_code: "+52",
        code: "MX"
      }, {
        name: "Monaco",
        dial_code: "+377",
        code: "MC"
      }, {
        name: "Mongolia",
        dial_code: "+976",
        code: "MN"
      }, {
        name: "Montenegro",
        dial_code: "+382",
        code: "ME"
      }, {
        name: "Montserrat",
        dial_code: "+1664",
        code: "MS"
      }, {
        name: "Morocco",
        dial_code: "+212",
        code: "MA"
      }, {
        name: "Myanmar",
        dial_code: "+95",
        code: "MM"
      }, {
        name: "Namibia",
        dial_code: "+264",
        code: "NA"
      }, {
        name: "Nauru",
        dial_code: "+674",
        code: "NR"
      }, {
        name: "Nepal",
        dial_code: "+977",
        code: "NP"
      }, {
        name: "Netherlands",
        dial_code: "+31",
        code: "NL"
      }, {
        name: "Netherlands Antilles",
        dial_code: "+599",
        code: "AN"
      }, {
        name: "New Caledonia",
        dial_code: "+687",
        code: "NC"
      }, {
        name: "New Zealand",
        dial_code: "+64",
        code: "NZ"
      }, {
        name: "Nicaragua",
        dial_code: "+505",
        code: "NI"
      }, {
        name: "Niger",
        dial_code: "+227",
        code: "NE"
      }, {
        name: "Nigeria",
        dial_code: "+234",
        code: "NG"
      }, {
        name: "Niue",
        dial_code: "+683",
        code: "NU"
      }, {
        name: "Norfolk Island",
        dial_code: "+672",
        code: "NF"
      }, {
        name: "Northern Mariana Islands",
        dial_code: "+1 670",
        code: "MP"
      }, {
        name: "Norway",
        dial_code: "+47",
        code: "NO"
      }, {
        name: "Oman",
        dial_code: "+968",
        code: "OM"
      }, {
        name: "Pakistan",
        dial_code: "+92",
        code: "PK"
      }, {
        name: "Palau",
        dial_code: "+680",
        code: "PW"
      }, {
        name: "Panama",
        dial_code: "+507",
        code: "PA"
      }, {
        name: "Papua New Guinea",
        dial_code: "+675",
        code: "PG"
      }, {
        name: "Paraguay",
        dial_code: "+595",
        code: "PY"
      }, {
        name: "Peru",
        dial_code: "+51",
        code: "PE"
      }, {
        name: "Philippines",
        dial_code: "+63",
        code: "PH"
      }, {
        name: "Poland",
        dial_code: "+48",
        code: "PL"
      }, {
        name: "Portugal",
        dial_code: "+351",
        code: "PT"
      }, {
        name: "Puerto Rico",
        dial_code: "+1 939",
        code: "PR"
      }, {
        name: "Qatar",
        dial_code: "+974",
        code: "QA"
      }, {
        name: "Romania",
        dial_code: "+40",
        code: "RO"
      }, {
        name: "Rwanda",
        dial_code: "+250",
        code: "RW"
      }, {
        name: "Samoa",
        dial_code: "+685",
        code: "WS"
      }, {
        name: "San Marino",
        dial_code: "+378",
        code: "SM"
      }, {
        name: "Saudi Arabia",
        dial_code: "+966",
        code: "SA"
      }, {
        name: "Senegal",
        dial_code: "+221",
        code: "SN"
      }, {
        name: "Serbia",
        dial_code: "+381",
        code: "RS"
      }, {
        name: "Seychelles",
        dial_code: "+248",
        code: "SC"
      }, {
        name: "Sierra Leone",
        dial_code: "+232",
        code: "SL"
      }, {
        name: "Singapore",
        dial_code: "+65",
        code: "SG"
      }, {
        name: "Slovakia",
        dial_code: "+421",
        code: "SK"
      }, {
        name: "Slovenia",
        dial_code: "+386",
        code: "SI"
      }, {
        name: "Solomon Islands",
        dial_code: "+677",
        code: "SB"
      }, {
        name: "South Africa",
        dial_code: "+27",
        code: "ZA"
      }, {
        name: "South Georgia and the South Sandwich Islands",
        dial_code: "+500",
        code: "GS"
      }, {
        name: "Spain",
        dial_code: "+34",
        code: "ES"
      }, {
        name: "Sri Lanka",
        dial_code: "+94",
        code: "LK"
      }, {
        name: "Sudan",
        dial_code: "+249",
        code: "SD"
      }, {
        name: "Suriname",
        dial_code: "+597",
        code: "SR"
      }, {
        name: "Swaziland",
        dial_code: "+268",
        code: "SZ"
      }, {
        name: "Sweden",
        dial_code: "+46",
        code: "SE"
      }, {
        name: "Switzerland",
        dial_code: "+41",
        code: "CH"
      }, {
        name: "Tajikistan",
        dial_code: "+992",
        code: "TJ"
      }, {
        name: "Thailand",
        dial_code: "+66",
        code: "TH"
      }, {
        name: "Togo",
        dial_code: "+228",
        code: "TG"
      }, {
        name: "Tokelau",
        dial_code: "+690",
        code: "TK"
      }, {
        name: "Tonga",
        dial_code: "+676",
        code: "TO"
      }, {
        name: "Trinidad and Tobago",
        dial_code: "+1 868",
        code: "TT"
      }, {
        name: "Tunisia",
        dial_code: "+216",
        code: "TN"
      }, {
        name: "Turkey",
        dial_code: "+90",
        code: "TR"
      }, {
        name: "Turkmenistan",
        dial_code: "+993",
        code: "TM"
      }, {
        name: "Turks and Caicos Islands",
        dial_code: "+1 649",
        code: "TC"
      }, {
        name: "Tuvalu",
        dial_code: "+688",
        code: "TV"
      }, {
        name: "Uganda",
        dial_code: "+256",
        code: "UG"
      }, {
        name: "Ukraine",
        dial_code: "+380",
        code: "UA"
      }, {
        name: "United Arab Emirates",
        dial_code: "+971",
        code: "AE"
      }, {
        name: "United Kingdom",
        dial_code: "+44",
        code: "GB"
      }, {
        name: "United States",
        dial_code: "+1",
        code: "US"
      }, {
        name: "Uruguay",
        dial_code: "+598",
        code: "UY"
      }, {
        name: "Uzbekistan",
        dial_code: "+998",
        code: "UZ"
      }, {
        name: "Vanuatu",
        dial_code: "+678",
        code: "VU"
      }, {
        name: "Yemen",
        dial_code: "+967",
        code: "YE"
      }, {
        name: "Viet Nam",
        dial_code: "+84",
        code: "VN"
      }, {
        name: "Virgin Islands, British",
        dial_code: "+1 284",
        code: "VG"
      }, {
        name: "Virgin Islands, U.S.",
        dial_code: "+1 340",
        code: "VI"
      }];
      /***/
    },

    /***/
    "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0: function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Volumes/storage/Projects/braincal/New code base 22-june/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map