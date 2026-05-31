(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-quiz-quiz-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quiz/quiz.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesQuizQuizPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\"> \n    <ion-back-button slot=\"start\" defaultHref=\"profile\"></ion-back-button>  \n    <ion-title>General Knowledge</ion-title> \n  </ion-toolbar>\n</ion-header>\n\n<div *ngIf=\"requestInProgress\">\n  <div  class=\"preloader\"></div>   \n</div>\n\n<ion-content>\n\n  <div *ngIf=\"quizStarted && !quizCompleted\" class=\"countdown-wrap\">\n    <span class=\"question-title\">Question {{slideCount}}.</span>\n    <div class=\"timer-countdown\">{{timeString}}</div>\n</div> \n<ion-slides #slides (ionSlideDidChange)=\"slideChanged()\"> \n    <ion-slide *ngFor=\"let question of questions; let i = index;\">\n      <ion-header *ngIf=\"!quizCompleted\">\n      <ion-row>\n        <ion-col>\n      <ion-list >\n        <ion-radio-group >\n          <ion-list-header>\n            <ion-label>\n              <h3 class=\"question\">\n                <span [innerHTML]=\"question.questionText\"></span>\n              </h3>\n            </ion-label>\n          </ion-list-header>\n      \n          <ion-item *ngFor=\"let answer of question.answers; let j = index;\">\n            <ion-radio slot=\"end\" (click)=\"selectAnswer(i,j)\"  *ngIf=\"question.type=='radio'\"></ion-radio>\n            <ion-label>{{j+1}}. {{answer.text}}</ion-label>\n        </ion-item>\n        </ion-radio-group>\n      </ion-list>\n      </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n      <ion-button size=\"light\" *ngIf=\"i<questions.length-1\" (click)=\"nextSlide(i)\">Next</ion-button>\n      <ion-button size=\"light\" *ngIf=\"i==questions.length-1\" (click)=\"nextSlide(i)\">Finish</ion-button>\n     </ion-col>\n  </ion-row>\n</ion-header>\n      </ion-slide>\n\n\n      \n\n      <!-- <ion-slide class=\"result-slide\" *ngIf=\"quizCompleted\">\n       \n        <ion-label >Congratulations – you have completed \n          <span>{{quiz.name}}</span>. You scored \n          <span>{{totalScore}}</span> point(s) out of \n          <span>{{questions.length}}</span> points total.\n            Here are the details for incorrect answers:\n          </ion-label>        \n       \n\n        <ion-list no-lines radio-group *ngFor=\"let question of questions; let i= index;\">\n          <h3>Question {{i+1}}</h3>\n            <h3 [innerHTML]=\"question.questionText\"></h3>\n        \n            <ion-list *ngIf=\"question.selected_answer_index!=null\" no-lines radio-group>\n              <ion-item *ngFor=\"let answer of question.answers; let j = index;\">\n                <ion-label>{{j+1}}. {{answer.text}}</ion-label>\n                <ion-label  *ngIf=\"j==question.selected_answer_index && !answer.correct\"><ion-icon name=\"close\"></ion-icon></ion-label>\n                <ion-label  *ngIf=\"j==question.selected_answer_index && answer.correct\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon></ion-label>\n                <ion-label  *ngIf=\"j!=question.selected_answer_index && answer.correct\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon></ion-label>\n              </ion-item>\n            </ion-list>\n\n            <ion-list *ngIf=\"question.selected_answer_index==null\" no-lines radio-group>\n              <ion-item>\n                <ion-label >No answer selected.</ion-label>\n              </ion-item>\n            </ion-list>\n          </ion-list>\n       </ion-slide> -->\n\n    <ion-slide *ngIf=\"questions.length==0\">\n        <ion-label>This test series has no questions yet.</ion-label>\n    </ion-slide>\n    \n</ion-slides>\n\n\n\n\n<div *ngIf=\"quizCompleted\" class=\"quiz-results\" >\n  <ion-label class=\"quizCompleted\">Congratulations – you have completed \n  <span>{{quiz.name}}</span>. You scored \n  <span>{{totalScore}}</span> point(s) out of \n  <span>{{questions.length}}</span> points total.\n    Here are the details for incorrect answers:\n  </ion-label>        \n<ion-list no-lines radio-group *ngFor=\"let question of questions; let i= index;\">\n  <h5 class=\"ion-text-center\">Question {{i+1}}</h5>\n    <h6 [innerHTML]=\"question.questionText\"></h6>\n\n    <ion-list *ngIf=\"question.selected_answer_index!=null\" no-lines radio-group>\n      <ion-item *ngFor=\"let answer of question.answers; let j = index;\">\n        <ion-label>{{j+1}}. {{answer.text}}</ion-label>\n        <ion-label class=\"quiz-incorrect\" *ngIf=\"j==question.selected_answer_index && !answer.correct\"><ion-icon name=\"close\"></ion-icon></ion-label>\n        <ion-label class=\"quiz-correct\" *ngIf=\"j==question.selected_answer_index && answer.correct\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon></ion-label>\n        <ion-label class=\"quiz-correct\" *ngIf=\"j!=question.selected_answer_index && answer.correct\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon></ion-label>\n      </ion-item>\n    </ion-list>\n\n    <ion-list *ngIf=\"question.selected_answer_index==null\" no-lines radio-group>\n      <ion-item>\n        <ion-label >No answer selected.</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-list>\n</div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./node_modules/rxjs-compat/observable/TimerObservable.js": function node_modulesRxjsCompatObservableTimerObservableJs(module, exports, __webpack_require__) {
      "use strict";

      var __extends = this && this.__extends || function () {
        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (b.hasOwnProperty(p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        return function (d, b) {
          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var rxjs_1 = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");

      var TimerObservable = function (_super) {
        __extends(TimerObservable, _super);

        function TimerObservable() {
          return _super !== null && _super.apply(this, arguments) || this;
        }

        TimerObservable.create = function (initialDelay, period, scheduler) {
          if (initialDelay === void 0) {
            initialDelay = 0;
          }

          return rxjs_1.timer(initialDelay, period, scheduler);
        };

        return TimerObservable;
      }(rxjs_1.Observable);

      exports.TimerObservable = TimerObservable; //# sourceMappingURL=TimerObservable.js.map

      /***/
    },

    /***/
    "./node_modules/rxjs/observable/TimerObservable.js": function node_modulesRxjsObservableTimerObservableJs(module, exports, __webpack_require__) {
      "use strict";

      function __export(m) {
        for (var p in m) {
          if (!exports.hasOwnProperty(p)) exports[p] = m[p];
        }
      }

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      __export(__webpack_require__(
      /*! rxjs-compat/observable/TimerObservable */
      "./node_modules/rxjs-compat/observable/TimerObservable.js")); //# sourceMappingURL=TimerObservable.js.map

      /***/

    },

    /***/
    "./src/app/pages/quiz/quiz-routing.module.ts": function srcAppPagesQuizQuizRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuizPageRoutingModule", function () {
        return QuizPageRoutingModule;
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


      var _quiz_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./quiz.page */
      "./src/app/pages/quiz/quiz.page.ts");

      var routes = [{
        path: '',
        component: _quiz_page__WEBPACK_IMPORTED_MODULE_3__["QuizPage"]
      }];

      var QuizPageRoutingModule = function QuizPageRoutingModule() {
        _classCallCheck(this, QuizPageRoutingModule);
      };

      QuizPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], QuizPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/quiz/quiz.module.ts": function srcAppPagesQuizQuizModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuizPageModule", function () {
        return QuizPageModule;
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


      var _quiz_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./quiz-routing.module */
      "./src/app/pages/quiz/quiz-routing.module.ts");
      /* harmony import */


      var _quiz_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./quiz.page */
      "./src/app/pages/quiz/quiz.page.ts");

      var QuizPageModule = function QuizPageModule() {
        _classCallCheck(this, QuizPageModule);
      };

      QuizPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _quiz_routing_module__WEBPACK_IMPORTED_MODULE_5__["QuizPageRoutingModule"]],
        declarations: [_quiz_page__WEBPACK_IMPORTED_MODULE_6__["QuizPage"]]
      })], QuizPageModule);
      /***/
    },

    /***/
    "./src/app/pages/quiz/quiz.page.scss": function srcAppPagesQuizQuizPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";\n.new-background-color {\n  --background: #2788E8;\n}\nion-title {\n  color: white;\n}\nion-menu-button {\n  color: white;\n}\nion-back-button {\n  float: left;\n  color: #FFF;\n}\n.countdown-wrap {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  text-align: right;\n  padding: 0px 16px;\n}\n.question-title {\n  line-height: 36px;\n  float: left;\n  font-weight: bold;\n  font-size: 20px;\n}\n.timer-countdown {\n  display: inline-block;\n  margin: 0 auto;\n  background-color: #0088e8;\n  color: #ffffff;\n  padding: 10px 30px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMV…h/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-size: cover;\n  font-weight: bold;\n}\n.quiz-incorrect {\n  color: red;\n  text-align: right;\n}\n.quiz-correct {\n  color: green;\n  text-align: right;\n}\n.quiz-no-answer {\n  color: red;\n}\nh3.question {\n  text-align: left;\n  font-weight: normal;\n  padding: 0px 16px;\n  font-size: 20px;\n  line-height: 1.5em;\n}\nh3.question span {\n  font-weight: bold;\n}\n.item-inner {\n  border-width: 1px !important;\n}\n.quiz-results {\n  padding: 15px;\n}\n.quiz-results h3 {\n  font-size: 1.5rem;\n}\n.quizCompleted span {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcXVpei9xdWl6LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxxQkFBQTtBQUVKO0FBQ0U7RUFDRSxZQUFBO0FBRUo7QUFDQTtFQUNJLFlBQUE7QUFFSjtBQUNBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFFSjtBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUNDO0VBQ0csaUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBRUo7QUFBQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNktBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBR0o7QUFBQTtFQUFpQixVQUFBO0VBQVksaUJBQUE7QUFLN0I7QUFKQTtFQUFlLFlBQUE7RUFBYSxpQkFBQTtBQVM1QjtBQVJBO0VBQWdCLFVBQUE7QUFZaEI7QUFWQTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWFKO0FBWEE7RUFDSSxpQkFBQTtBQWNKO0FBWEE7RUFDSSw0QkFBQTtBQWNKO0FBWEE7RUFDSSxhQUFBO0FBY0o7QUFaQTtFQUNJLGlCQUFBO0FBZUo7QUFKQTtFQUNJLGlCQUFBO0FBT0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xdWl6L3F1aXoucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzI3ODhFODtcbiAgfVxuXG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbWVudS1idXR0b257XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tYmFjay1idXR0b257XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgY29sb3I6ICNGRkY7ICBcbiAgfVxuXG4gIC5jb3VudGRvd24td3JhcHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgcGFkZGluZzogMHB4IDE2cHg7XG4gfVxuXG4gLnF1ZXN0aW9uLXRpdGxle1xuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbi50aW1lci1jb3VudGRvd257XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg4ZTg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQUhCQU1BQUFEekR0QnhBQUFBRDFCTVbigKZoL1RYRUFBQUFhU1VSQlZBalhZeENFQWdZNFVJSUNCbU1vZ01zZ0ZMdEFBUUNOU3dYWktPZFB4Z0FBQUFCSlJVNUVya0pnZ2c9PSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnF1aXotaW5jb3JyZWN0eyBjb2xvcjogcmVkOyB0ZXh0LWFsaWduOiByaWdodDsgfVxuLnF1aXotY29ycmVjdHsgY29sb3I6Z3JlZW47IHRleHQtYWxpZ246IHJpZ2h0OyB9XG4ucXVpei1uby1hbnN3ZXJ7Y29sb3I6IHJlZDt9XG5cbmgzLnF1ZXN0aW9ue1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xufVxuaDMucXVlc3Rpb24gc3BhbntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLml0ZW0taW5uZXJ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHggIWltcG9ydGFudDtcbn1cblxuLnF1aXotcmVzdWx0c3tcbiAgICBwYWRkaW5nOiAxNXB4O1xufVxuLnF1aXotcmVzdWx0cyBoM3tcbiAgICBmb250LXNpemU6IDEuNXJlbVxufVxuXG4vLyAucmVzdWx0LXNsaWRle1xuLy8gICAgIGZsb2F0OmxlZnQ7XG4vLyAgICAgcGFkZGluZy1yaWdodDogNjQ4cHg7XG4vLyAgICAgLy8gZm9udC13ZWlnaHQ6bGlnaHRlcjtcbi8vICAgICBmb250LXNpemU6IDE2cHg7XG4vLyAgICAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4ucXVpekNvbXBsZXRlZCBzcGFue1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vLyAucXVpekNvbXBsZXRlRGl2e1xuLy8gICAgIHBhZGRpbmc6MzVweDtcbi8vIH1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/quiz/quiz.page.ts": function srcAppPagesQuizQuizPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QuizPage", function () {
        return QuizPage;
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


      var src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/quiz.service */
      "./src/app/services/quiz.service.ts");
      /* harmony import */


      var rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/observable/TimerObservable */
      "./node_modules/rxjs/observable/TimerObservable.js");
      /* harmony import */


      var rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/app.constants */
      "./src/app/shared/app.constants.ts");

      var QuizPage = /*#__PURE__*/function () {
        function QuizPage(router, qs, alertCtrl, navCtrl) {
          _classCallCheck(this, QuizPage);

          // this.quiz= navParams.get('quiz');
          this.router = router;
          this.qs = qs;
          this.alertCtrl = alertCtrl;
          this.navCtrl = navCtrl;
          this.questions = [];
          this.timeString = '';
          this.quizStarted = false;
          this.quizCompleted = false;
          this.showAnswers = false;
          this.totalScore = 0;
          this.requestInProgress = false;
          this.goBack = false;
          this.slideCount = 1;

          if (this.router.getCurrentNavigation().extras.state) {
            this.quiz = this.router.getCurrentNavigation().extras.state.quiz;
          }

          this.quiz = {
            'ID': 0,
            'name': 'General Knowledge'
          };
        }

        _createClass(QuizPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.quizCompleted = false;
            console.log(this.quizCompleted);
            this.goBack = false;
            this.requestInProgress = true;
            this.qs.getQuestions(this.quiz.ID).subscribe(function (response) {
              // this.alertCtrl.create({
              //   header: 'Confirmation',
              //   message: "Click Start button to begin the test: <br> There are " + response.questions.length + " questions. <br> You have " + response.q_time + " minutes.",
              //   buttons: [{
              //       text: 'Start',
              //       handler: () => {
              //         this.slides.slideNext();
              //         this.requestInProgress=false;
              //         this.questions= response.questions;
              //         this.countDownDate= new Date().getTime() + 1000*60*response.q_time ;
              //         this.quizStarted= true;
              //         let timer= TimerObservable.create(1000,1000);
              //         this.subscription = timer.subscribe(t => {
              //           this.timeString = this.startTimer()
              //         });
              //       }
              //   }, {
              //       role: 'cancel',
              //       text: 'Cancel',
              //       handler: () => {
              //           this.goBack= true;
              //           this.navCtrl.pop();
              //       }
              //   }]
              // }).present();
              _this.showConfirmation(response);
            }, function (error) {
              return _this.checkForResponseError(error);
            });
          }
        }, {
          key: "startTimer",
          value: function startTimer() {
            var now = new Date().getTime();
            var distance = this.countDownDate - now;

            if (distance <= 0) {
              this.slides.lockSwipes(false);
              this.slides.slideTo(this.questions.length + 1, 0);
              this.quizFinished();
              this.slides.lockSwipes(true);
              this.subscription.unsubscribe();
              return '0m 0s';
            }

            var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            var seconds = Math.floor(distance % (1000 * 60) / 1000);
            var timeStr = minutes + "m " + seconds + "s ";
            return timeStr;
          }
        }, {
          key: "nextSlide",
          value: function nextSlide(i) {
            if (this.questions[i]) {
              if (this.questions[i].selected_answer_index == null) {
                // this.alertCtrl.create({
                //   title: 'Confirm leaving',
                //   message: 'You did not select any answer. Are you sure you want to continue?',
                //   buttons: [{
                //       text: 'OK',
                //       handler: () => {
                //         this.slides.lockSwipes(false); 
                //         this.slides.slideNext();
                //         let currentIndex = this.slides.getActiveIndex();
                //         if(currentIndex== this.questions.length){
                //           this.quizFinished();
                //         }
                //         this.slides.lockSwipes(true); 
                //       }
                //   }, {
                //       role: 'cancel',
                //       text: 'Cancel',
                //       handler: () => {
                //           //resolve(false);
                //       }
                //   }]
                // }).present();
                this.showAlertNextSlide();
              } else {
                this.questions[i].next = true;
                this.slides.lockSwipes(false);
                this.slides.slideNext();
                var currentIndex = this.slides.getActiveIndex();
                console.log(this.questions.length);
                console.log(this.slideCount); // if(currentIndex== this.questions.length){
                //   this.quizFinished();
                // }

                if (this.slideCount == this.questions.length) {
                  this.quizFinished();
                }

                this.slides.lockSwipes(true);
              }
            }
          }
        }, {
          key: "prevSlide",
          value: function prevSlide(index) {
            this.slides.slidePrev();
          }
        }, {
          key: "ionViewCanLeave",
          value: function ionViewCanLeave() {
            var _this2 = this;

            return new Promise(function (resolve) {
              if (_this2.quizStarted && _this2.quizCompleted || _this2.goBack == true) {
                resolve(true);
              } else {
                // this.alertCtrl.create({
                //   title: 'Confirm leaving',
                //   message: 'Your test session will be lost.',
                //   buttons: [{
                //       text: 'Leave',
                //       handler: () => {
                //           resolve(true);
                //       }
                //   }, {
                //       text: 'Stay',
                //       handler: () => {
                //           resolve(false);
                //       }
                //   }]
                // }).present();
                _this2.showAlertionViewCanLeave(resolve);
              }
            });
          }
        }, {
          key: "slideChanged",
          value: function slideChanged() {
            var _this3 = this;

            var currentIndex = this.slides.getActiveIndex();

            if (this.questions[currentIndex]) {
              this.questions[currentIndex].next = true;
            }

            this.slides.getActiveIndex().then(function (index) {
              // console.log(index);
              _this3.slideCount = index + 1;
            });
          }
        }, {
          key: "selectAnswer",
          value: function selectAnswer(q, a) {
            this.questions[q].selected_answer_index = a;
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.slides.lockSwipes(true);
          }
        }, {
          key: "quizFinished",
          value: function quizFinished() {
            this.quizCompleted = true;
            this.quizStarted = false;

            for (var i = 0; i < this.questions.length; i++) {
              var selected_answer = this.questions[i].selected_answer_index;

              if (selected_answer != null) {
                for (var j = 0; j < this.questions[i].answers.length; j++) {
                  if (this.questions[i].answers[j].correct == true && j == selected_answer) {
                    this.totalScore += Math.trunc(this.questions[i].answers[j].point);
                    this.questions[i].correct = true;
                  }
                }
              }
            }
          }
        }, {
          key: "showAlertionViewCanLeave",
          value: function showAlertionViewCanLeave(resolve) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirm leaving',
                        message: 'Your test session will be lost.',
                        buttons: [{
                          text: 'Leave',
                          handler: function handler() {
                            resolve(true);
                          }
                        }, {
                          text: 'Stay',
                          handler: function handler() {
                            resolve(false);
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
          key: "showAlertNextSlide",
          value: function showAlertNextSlide() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirm leaving',
                        message: 'You did not select any answer. Are you sure you want to continue?',
                        buttons: [{
                          text: 'OK',
                          handler: function handler() {
                            _this4.slides.lockSwipes(false);

                            _this4.slides.slideNext();

                            var currentIndex = _this4.slides.getActiveIndex();

                            if (currentIndex == _this4.questions.length) {
                              _this4.quizFinished();
                            }

                            _this4.slides.lockSwipes(true);
                          }
                        }, {
                          role: 'cancel',
                          text: 'Cancel',
                          handler: function handler() {//resolve(false);
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
        }, {
          key: "showConfirmation",
          value: function showConfirmation(response) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        header: 'Confirmation',
                        message: "Click Start button to begin the test: <br> There are " + response.questions.length + " questions. <br> You have " + response.q_time + " minutes.",
                        buttons: [{
                          text: 'Start',
                          handler: function handler() {
                            _this5.slides.slideNext();

                            _this5.requestInProgress = false;
                            _this5.questions = response.questions;
                            _this5.countDownDate = new Date().getTime() + 1000 * 60 * response.q_time;
                            _this5.quizStarted = true;
                            var timer = rxjs_observable_TimerObservable__WEBPACK_IMPORTED_MODULE_5__["TimerObservable"].create(1000, 1000);
                            _this5.subscription = timer.subscribe(function (t) {
                              _this5.timeString = _this5.startTimer();
                            });
                          }
                        }, {
                          role: 'cancel',
                          text: 'Cancel',
                          handler: function handler() {
                            _this5.goBack = true;

                            _this5.navCtrl.pop();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "showAlert",
          value: function showAlert(msg) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Error";
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertCtrl.create({
                        header: title,
                        message: msg,
                        buttons: ['Dismiss']
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "checkForResponseError",
          value: function checkForResponseError(err) {
            try {
              var errorResponse = JSON.parse(err._body);
              if (errorResponse.code == "rest_post_invalid_page_number") return;

              if (errorResponse.error == "session_expired") {
                this.showAlert("Seems your session is expired. Please logout and login again.");
              } else this.showAlert(errorResponse.error);
            } catch (error) {
              this.showAlert(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].JSON_ERROR);
            }
          }
        }]);

        return QuizPage;
      }();

      QuizPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }];
      };

      QuizPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['slides']
        }]
      };
      QuizPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quiz',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./quiz.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/quiz/quiz.page.html"))["default"],
        providers: [src_app_services_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./quiz.page.scss */
        "./src/app/pages/quiz/quiz.page.scss"))["default"]]
      })], QuizPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-quiz-quiz-module-es5.js.map