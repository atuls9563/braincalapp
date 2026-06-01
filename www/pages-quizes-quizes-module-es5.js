(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-quizes-quizes-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizes/quizes.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesQuizesQuizesPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Quizes</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"trick-content\" padding>\n  <div class=\"tricks-level\">\n    <ion-list>\n        <ion-item *ngFor=\"let quiz of quizes\">\n            <div class=\"level-title\" (click)=\"openQuiz(quiz)\">{{quiz.name}}</div>\n        </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/quizes/quizes-routing.module.ts": function srcAppPagesQuizesQuizesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuizesPageRoutingModule", function () {
        return QuizesPageRoutingModule;
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


      var _quizes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quizes.page */
      "./src/app/pages/quizes/quizes.page.ts");

      var routes = [{
        path: '',
        component: _quizes_page__WEBPACK_IMPORTED_MODULE_3__["QuizesPage"]
      }];

      var QuizesPageRoutingModule = function QuizesPageRoutingModule() {
        _classCallCheck(this, QuizesPageRoutingModule);
      };

      QuizesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QuizesPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/quizes/quizes.module.ts": function srcAppPagesQuizesQuizesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuizesPageModule", function () {
        return QuizesPageModule;
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


      var _quizes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./quizes-routing.module */
      "./src/app/pages/quizes/quizes-routing.module.ts");
      /* harmony import */


      var _quizes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./quizes.page */
      "./src/app/pages/quizes/quizes.page.ts");

      var QuizesPageModule = function QuizesPageModule() {
        _classCallCheck(this, QuizesPageModule);
      };

      QuizesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quizes_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizesPageRoutingModule"]],
        declarations: [_quizes_page__WEBPACK_IMPORTED_MODULE_6__["QuizesPage"]]
      })], QuizesPageModule);
      /***/
    },

    /***/
    "./src/app/pages/quizes/quizes.page.scss": function srcAppPagesQuizesQuizesPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1aXplcy9xdWl6ZXMucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/pages/quizes/quizes.page.ts": function srcAppPagesQuizesQuizesPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuizesPage", function () {
        return QuizesPage;
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


      var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/quiz.service */
      "./src/app/services/quiz.service.ts");

      var QuizesPage = /*#__PURE__*/function () {
        function QuizesPage(qs, router) {
          _classCallCheck(this, QuizesPage);

          this.qs = qs;
          this.router = router;
          this.quizes = [];
        }

        _createClass(QuizesPage, [{
          key: "openQuiz",
          value: function openQuiz(quiz) {
            // this.navCtrl.push(QuizPage,{'quiz': quiz});
            var navigationExtras = {
              state: {
                quiz: quiz
              }
            };
            console.log(navigationExtras);
            this.router.navigate(['quiz'], navigationExtras);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.qs.getQuizes().subscribe(function (quizes) {
              return _this.quizes = quizes;
            });
          }
        }]);

        return QuizesPage;
      }();

      QuizesPage.ctorParameters = function () {
        return [{
          type: src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      QuizesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quizes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./quizes.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quizes/quizes.page.html"))["default"],
        providers: [src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_3__["QuizService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./quizes.page.scss */
        "./src/app/pages/quizes/quizes.page.scss"))["default"]]
      })], QuizesPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-quizes-quizes-module-es5.js.map