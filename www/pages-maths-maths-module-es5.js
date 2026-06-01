(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-maths-maths-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maths/maths.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesMathsMathsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Math Tricks</ion-title>\n  </ion-toolbar>\n\n  <ion-searchbar\n  [(ngModel)]=\"searchKeyword\"\n  [showCancelButton]=\"shouldShowCancel\"\n  (ionInput)=\"onInput($event)\"\n  (ionClear)=\"clearSearch()\"\n  (ionCancel)=\"onCancel($event)\"></ion-searchbar>\n</ion-header>\n\n<div *ngIf=\"requestInProgress\" class=\"preloader-wrap\">\n  <div  class=\"preloader\"></div>   \n</div>  \n\n<!-- <ion-content (swipe)=\"onSwipeUp($event)\">\n  <ion-row class=\"tricks-row\">\n    <div class=\"search-results\">\n        <ul>\n            <li *ngFor=\"let trick of trickSuggestions\">\n                <div class=\"result\" (click)=\"openTrickDetail(trick)\" [innerHTML]=\"trick.title.rendered\"></div>\n                <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\" class=\"go-to-link\"></ion-icon>\n            </li>\n        </ul>\n    </div>\n    <div class=\"tricks-list\">    \n        <ion-list>\n            <ion-item class=\"item item-text-wrap\" *ngFor=\"let trick of tricks\">\n                        <div *ngIf=\"userFavorites\" class=\"favorite\">\n                                <div *ngIf=\"userFavorites.indexOf(trick.id)==-1\" (click)=\"addFavorite(trick.id)\"><ion-icon ios=\"ios-heart-outline\" md=\"md-heart-outline\"></ion-icon></div>   \n                                <div *ngIf=\"userFavorites.indexOf(trick.id)>=0\" (click)=\"removeFavorite(trick.id)\"><ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon></div>     \n                        </div>    \n                \n                        <div (click)=\"openDetailPage(trick)\" [innerHTML]=\"trick.title.rendered\" class=\"trick-title\"></div>\n                        <button (click)=\"openDetailPage(trick)\">Read More</button>\n            </ion-item>\n\n            <ion-item class=\"item item-text-wrap no-trick\" *ngIf=\"tricks.length==0 && !requestInProgress\">     \n                    <div>No Contents available.</div>\n            </ion-item>\n\n            <ion-item class=\"item item-text-wrap no-trick\" *ngIf=\"tricks.length==0 && requestInProgress\">   \n                    <div *ngIf=\"requestInProgress\">Loading Contents...</div>    \n            </ion-item>\n\n        </ion-list>\n    </div>\n    <div class=\"infinitte-scroll\">\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div>\n</ion-row>\n</ion-content>\n\n -->\n\n\n <ion-content (swipe)=\"onSwipeUp($event)\">\n  <ion-row class=\"tricks-row\">\n    <div  class=\"search-results\">\n        <ul>\n            <li *ngFor=\"let trick of trickSuggestions\">\n                <div class=\"result\" (click)=\"openTrickDetail(trick)\" [innerHTML]=\"trick.title.rendered\"></div>\n                <!-- <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\"  ></ion-icon>                -->\n                <div class=\"result-forward-outline\">\n                <ion-icon class=\"go-to-link\" name=\"chevron-forward-outline\"></ion-icon>\n              </div>\n            </li>\n        </ul>\n    </div>\n    <div class=\"tricks-list\">    \n        <ion-list>\n            <ion-item *ngFor=\"let trick of tricks\">\n              <div *ngIf=\"userFavorites\" class=\"favorite\">\n                <!-- <div *ngIf=\"userFavorites.indexOf(trick.id)==-1\" (click)=\"addFavorite(trick.id)\"> -->\n                  <div *ngIf=\"!validateId(trick.id)\" (click)=\"addFavorite(trick.id)\">                  \n                  <ion-icon ios=\"heart-outline\" md=\"heart-outline\"></ion-icon>\n                </div>\n                <!-- <div *ngIf=\"userFavorites.indexOf(trick.id)>=0\" (click)=\"removeFavorite(trick.id)\"> -->\n                  <div *ngIf=\"validateId(trick.id)\" (click)=\"removeFavorite(trick.id)\">\n                  <ion-icon ios=\"heart\" md=\"heart\"></ion-icon>\n                </div>     \n              </div>    \n                \n              <div class=\"trick-title\" (click)=\"openDetailPage(trick)\" [innerHTML]=\"trick.title.rendered\"></div>\n              <div class=\"read-more\">\n                <button class=\"ReadMoreCls\" (click)=\"openDetailPage(trick)\">Read More</button>\n              </div>\n            </ion-item>\n\n            <ion-item *ngIf=\"tricks.length==0 && !requestInProgress\">     \n                    <div>No Contents available.</div>\n            </ion-item>\n\n            <ion-item *ngIf=\"tricks.length==0 && requestInProgress\">   \n                    <div *ngIf=\"requestInProgress\">Loading Contents...</div>    \n            </ion-item>\n\n\n        </ion-list>\n    </div>\n    <div>\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div>\n</ion-row>\n</ion-content>\n\n\n";
      /***/
    },

    /***/
    "./src/app/pages/maths/maths-routing.module.ts": function srcAppPagesMathsMathsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MathsPageRoutingModule", function () {
        return MathsPageRoutingModule;
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


      var _maths_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./maths.page */
      "./src/app/pages/maths/maths.page.ts");

      var routes = [{
        path: '',
        component: _maths_page__WEBPACK_IMPORTED_MODULE_3__["MathsPage"]
      }];

      var MathsPageRoutingModule = function MathsPageRoutingModule() {
        _classCallCheck(this, MathsPageRoutingModule);
      };

      MathsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MathsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/maths/maths.module.ts": function srcAppPagesMathsMathsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MathsPageModule", function () {
        return MathsPageModule;
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


      var _maths_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./maths-routing.module */
      "./src/app/pages/maths/maths-routing.module.ts");
      /* harmony import */


      var _maths_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./maths.page */
      "./src/app/pages/maths/maths.page.ts");

      var MathsPageModule = function MathsPageModule() {
        _classCallCheck(this, MathsPageModule);
      };

      MathsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _maths_routing_module__WEBPACK_IMPORTED_MODULE_5__["MathsPageRoutingModule"]],
        declarations: [_maths_page__WEBPACK_IMPORTED_MODULE_6__["MathsPage"]]
      })], MathsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/maths/maths.page.scss": function srcAppPagesMathsMathsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-background-color {\n  --background: #2788E8;\n}\n\nion-title {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\n.tricks-list {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.tricks-list ion-list ion-item {\n  --ion-background-position: top right;\n  --ion-background-repeat: no-repeat;\n}\n\n.tricks-list ion-list ion-item:nth-child(even) {\n  --ion-background-color: #EC407A;\n}\n\n.tricks-list ion-list ion-item:nth-child(odd) {\n  --ion-background-color: #0088e8;\n}\n\nion-item {\n  --min-height: 140px;\n}\n\n.favorite {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  z-index: 0;\n  color: #FFF;\n  font-size: 25px;\n}\n\n.ReadMoreCls {\n  margin: 15px auto 0;\n  display: block;\n  background: transparent;\n  color: #FFF;\n}\n\n.trick-title {\n  color: #FFF;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 20px;\n  height: 70px;\n  width: 90%;\n  display: block;\n  display: -webkit-box;\n  white-space: normal;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.read-more {\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  bottom: 20px;\n}\n\n.tricks-row .search-results {\n  width: calc(100% - 32px);\n  margin-left: 16px;\n  margin-right: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #19B5FE;\n  color: #FFF;\n}\n\n.search-results .result {\n  padding-right: 25px;\n  padding-left: 20px;\n  position: relative;\n  z-index: 2;\n}\n\n.result {\n  width: 90%;\n  float: left;\n  height: auto;\n}\n\n.result-forward-outline {\n  width: 10%;\n  float: right;\n}\n\n.search-results {\n  width: 90%;\n  margin-left: 16px;\n  margin-right: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #19B5FE;\n  color: #FFF;\n}\n\n.search-results ul {\n  padding: 0;\n  margin: 0;\n}\n\n.search-results ul li {\n  list-style: none;\n  position: relative;\n  padding: 25px 0px;\n  font-size: 15px;\n}\n\n.search-results ul li:first-child {\n  margin-top: 15px;\n}\n\n.search-results ul li:last-child {\n  margin-bottom: 15px;\n}\n\n.search-results ul li .go-to-link {\n  position: absolute;\n  right: 0px;\n  top: 10px;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWF0aHMvbWF0aHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUE0SkE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXpKSjs7QUE0SkE7RUFDSSxvQ0FBQTtFQUNBLGtDQUFBO0FBekpKOztBQTRKQTtFQUNJLCtCQUFBO0FBekpKOztBQTRKQTtFQUNJLCtCQUFBO0FBekpKOztBQTZKQTtFQUVJLG1CQUFBO0FBM0pKOztBQTZKSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUExSlI7O0FBOEpBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBM0pKOztBQThKQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNELDRCQUFBO0VBQ0MsZ0JBQUE7RUFDQSx1QkFBQTtBQTNKSjs7QUE4SkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEzSko7O0FBOEpBO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQTNKSjs7QUE4SkE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBM0pKOztBQThKQTtFQUVJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQTVKSjs7QUErSkE7RUFFSSxVQUFBO0VBQ0EsWUFBQTtBQTdKSjs7QUErSkE7RUFFSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUE3Sko7O0FBK0pBO0VBQXFCLFVBQUE7RUFBWSxTQUFBO0FBMUpqQzs7QUEySkE7RUFBd0IsZ0JBQUE7RUFBa0Isa0JBQUE7RUFBb0IsaUJBQUE7RUFBa0IsZUFBQTtBQXBKaEY7O0FBcUpBO0VBQWtDLGdCQUFBO0FBakpsQzs7QUFrSkE7RUFBa0MsbUJBQUE7QUE5SWxDOztBQStJQTtFQUFtQyxrQkFBQTtFQUFvQixVQUFBO0VBQVksU0FBQTtFQUFXLFVBQUE7QUF4STlFIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWF0aHMvbWF0aHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzI3ODhFODtcbiAgfVxuXG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbWVudS1idXR0b257XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4vLyAgICAgaW9uLW1lbnUgLml0ZW0tbWQgeyBwYWRkaW5nOiAwO31cbi8vICAgICAubGlzdC1tZCAuaXRlbS1ibG9jayAuaXRlbS1pbm5lcnsgcGFkZGluZzogMCAyMHB4O31cbi8vICAgICBpb24tbWVudSBpb24taWNvbnsgXG4vLyAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgdG9wOiAycHg7XG4vLyAgICAgICAgIGNvbG9yOiAjMDA4OGU4O1xuLy8gICAgIH1cbi8vICAgICAvLyBpb24tbWVudSAuc2Nyb2xsLWNvbnRlbnQge1xuLy8gICAgIC8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvbG9nby5wbmcnKTtcbi8vICAgICAvLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlO1xuLy8gICAgIC8vICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gICAgIC8vICAgICBiYWNrZ3JvdW5kLXNpemU6IDEyNXB4O1xuLy8gICAgIC8vIH1cblxuXG4vLyAvLyBwYWdlLWhvbWUge1xuLy8gLy8gICAgIGlvbi1tZW51IC5pdGVtLW1kIHsgcGFkZGluZzogMDt9XG4vLyAvLyAgICAgLmxpc3QtbWQgLml0ZW0tYmxvY2sgLml0ZW0taW5uZXJ7IHBhZGRpbmc6IDAgMjBweDt9XG4vLyAvLyAgICAgaW9uLW1lbnUgaW9uLWljb257IFxuLy8gLy8gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuLy8gLy8gICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAvLyAgICAgICAgIHRvcDogMnB4O1xuLy8gLy8gICAgICAgICBjb2xvcjogIzAwODhlODtcbi8vIC8vICAgICB9XG4vLyAvLyAgICAgaW9uLW1lbnUgLnNjcm9sbC1jb250ZW50IHtcbi8vIC8vICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2xvZ28ucG5nJyk7XG4vLyAvLyAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJTtcbi8vIC8vICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vIC8vICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMjVweDtcbi8vIC8vICAgICB9XG4vLyAvLyAgICAgLyoubWVudS1jb250ZW50IHsgbWFyZ2luLXRvcDogNTZweDt9Ki9cbi8vIC8vIH1cblxuXG4vLyAudHJpY2tzLXJvd3tcbi8vICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuXG5cbi8vICAgICAudHJpY2tzLWxpc3QsXG4vLyAgICAgLmluZmluaXR0ZS1zY3JvbGx7IHdpZHRoOiAxMDAlO31cbi8vICAgICAuaXRlbS1tZCB7IHBhZGRpbmctcmlnaHQ6IDE2cHg7fVxuXG4vLyAgICAgLml0ZW0tdGV4dC13cmFwIHsgcG9zaXRpb246IHJlbGF0aXZlO31cblxuLy8gICAgIC5zZWFyY2gtcmVzdWx0c3sgXG4vLyAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbi8vICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4vLyAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbi8vICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuLy8gICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjMTlCNUZFO1xuLy8gICAgICAgICBjb2xvcjogI0ZGRjsgXG4vLyAgICAgfVxuLy8gICAgIC5zZWFyY2gtcmVzdWx0cyB1bCB7IHBhZGRpbmc6IDA7IG1hcmdpbjogMH1cbi8vICAgICAuc2VhcmNoLXJlc3VsdHMgdWwgbGkgeyBsaXN0LXN0eWxlOiBub25lOyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmc6IDEwcHggMHB4O31cbi8vICAgICAuc2VhcmNoLXJlc3VsdHMgdWwgbGk6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDogMTVweH1cbi8vICAgICAuc2VhcmNoLXJlc3VsdHMgdWwgbGk6bGFzdC1jaGlsZHsgbWFyZ2luLWJvdHRvbTogMTVweDt9XG4vLyAgICAgLnNlYXJjaC1yZXN1bHRzIHVsIGxpIC5nby10by1saW5reyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwcHg7IHRvcDogMTBweDsgei1pbmRleDogMDt9XG5cbi8vICAgICAuc2VhcmNoLXJlc3VsdHMgLnJlc3VsdHsgcGFkZGluZy1yaWdodDogMjVweDsgcGFkZGluZy1sZWZ0OiAyMHB4OyBwb3NpdGlvbjogcmVsYXRpdmU7IHotaW5kZXg6IDI7fVxuLy8gfVxuXG4vLyAvLyAudHJpY2tzLXJvd3tcbi8vIC8vICAgICBtYXJnaW4tdG9wOiA1NHB4O1xuLy8gLy8gfVxuXG4vLyAvLyAudHJpY2tzLWxpc3QgaW9uLWxpc3QgaW9uLWl0ZW0gLml0ZW0taW5uZXJ7XG4vLyAvLyAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuLy8gLy8gICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyAvLyB9XG4vLyAvLyAudHJpY2tzLWxpc3QgaW9uLWxpc3QgaW9uLWl0ZW06bnRoLWNoaWxkKGV2ZW4pIC5pdGVtLWlubmVye1xuLy8gLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNFQzQwN0E7XG4vLyAvLyAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZy9ldmVuLnBuZylcbi8vIC8vIH1cbi8vIC8vIC50cmlja3MtbGlzdCBpb24tbGlzdCBpb24taXRlbTpudGgtY2hpbGQob2RkKSAuaXRlbS1pbm5lcntcbi8vIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGU4O1xuLy8gLy8gICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvb2RkLnBuZylcbi8vIC8vIH1cbi8vIC50cmlja3MtbGlzdCBsaXN0LWlvc3tcbi8vICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbi8vICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4vLyAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4vLyAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcbi8vICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuLy8gICAgIGZsZXgtd3JhcDogd3JhcDtcbi8vIH1cbi8vIC50cmlja3MtbGlzdCAuaXRlbS1pb3N7IFxuLy8gICAgIHBhZGRpbmc6IDAgMTZweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAuZmF2b3JpdGVzLXJvdyAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyLFxuLy8gLnRyaWNrcy1yb3cgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lcntcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuLy8gICAgIHBhZGRpbmctbGVmdDogMjBweDtcbi8vICAgICBtYXJnaW4tdG9wOiA1cHg7XG4vLyAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bztcbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vIH1cblxuLy8gLmZhdm9yaXRlcy1yb3cgLml0ZW0tbWQuaXRlbS1ibG9jazpmaXJzdC1jaGlsZCAuaXRlbS1pbm5lcixcbi8vIC50cmlja3Mtcm93IC5pdGVtLW1kLml0ZW0tYmxvY2s6Zmlyc3QtY2hpbGQgLml0ZW0taW5uZXJ7IG1hcmdpbi10b3A6IDEwcHh9XG5cbi8vIC5mYXZvcml0ZXMtcm93IC5pdGVtLW1kLml0ZW0tYmxvY2s6bGFzdC1jaGlsZCAuaXRlbS1pbm5lcixcbi8vIC50cmlja3Mtcm93IC5pdGVtLW1kLml0ZW0tYmxvY2s6bGFzdC1jaGlsZCAuaXRlbS1pbm5lcnttYXJnaW4tYm90dG9tOiAxMHB4fVxuXG4vLyAvLyAuZmF2b3JpdGVzLXJvdyAudHJpY2stdGl0bGUsXG4vLyAvLyAudHJpY2tzLXJvdyAudHJpY2stdGl0bGV7XG4vLyAvLyAgICAgY29sb3I6ICNGRkY7XG4vLyAvLyAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIC8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gLy8gICAgIGhlaWdodDogNzBweDtcbi8vIC8vICAgICBtYXgtd2lkdGg6IDEwMCU7XG4vLyAvLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAvLyAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4vLyAvLyAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbi8vIC8vICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4vLyAvLyAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbi8vIC8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuLy8gLy8gfVxuLy8gLmZhdm9yaXRlcy1yb3cgLml0ZW0tbWQuaXRlbS1ibG9jayAuaXRlbS1pbm5lciAubGFiZWwtbWQsXG4vLyAudHJpY2tzLXJvdyAuaXRlbS1tZC5pdGVtLWJsb2NrIC5pdGVtLWlubmVyIC5sYWJlbC1tZHsgbWFyZ2luLXJpZ2h0OiAwcHg7IH1cblxuLy8gLmZhdm9yaXRlcy1yb3cgLmZhdm9yaXRlLFxuLy8gLnRyaWNrcy1yb3cgLmZhdm9yaXRleyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAyNXB4OyB0b3A6IDEycHg7IHotaW5kZXg6IDI7IGNvbG9yOiAjRkZGO31cblxuLy8gLmZhdm9yaXRlcy1yb3cgLml0ZW0taW5uZXIgYnV0dG9uLFxuLy8gLnRyaWNrcy1yb3cgLml0ZW0taW5uZXIgYnV0dG9ue1xuLy8gICAgIG1hcmdpbjogMTVweCBhdXRvIDA7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgY29sb3I6ICNGRkY7XG4vLyB9XG4vLyAubm8tdHJpY2sgeyBjb2xvcjogI0ZGRjsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4vLyAudmlkZW8tY29udGFpbmVyOjphZnRlcntcbi8vICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgIGNsZWFyOiBib3RoO1xuLy8gfVxuXG5cblxuXG5cblxuXG4vLyAgQ2hhbmdlcyAvL1xuXG4udHJpY2tzLWxpc3R7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi50cmlja3MtbGlzdCBpb24tbGlzdCBpb24taXRlbSB7XG4gICAgLS1pb24tYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0O1xuICAgIC0taW9uLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59XG5cbi50cmlja3MtbGlzdCBpb24tbGlzdCBpb24taXRlbTpudGgtY2hpbGQoZXZlbil7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VDNDA3QTtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1nL2V2ZW4ucG5nKVxufVxuLnRyaWNrcy1saXN0IGlvbi1saXN0IGlvbi1pdGVtOm50aC1jaGlsZChvZGQpe1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMwMDg4ZTg7XG4gICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZy9vZGQucG5nKVxufVxuXG5pb24taXRlbSB7XG4gICAgLy8gLS1pb24tdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC0tbWluLWhlaWdodDogMTQwcHg7XG59XG4gICAgLmZhdm9yaXRleyBcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICAgICAgcmlnaHQ6IDE1cHg7IFxuICAgICAgICB0b3A6IDE1cHg7IFxuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cblxuXG4uUmVhZE1vcmVDbHMge1xuICAgIG1hcmdpbjogMTVweCBhdXRvIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNGRkY7XG59XG5cbi50cmljay10aXRsZXtcbiAgICBjb2xvcjogI0ZGRjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4ucmVhZC1tb3Jle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTs7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAyMHB4O1xufVxuXG4udHJpY2tzLXJvdyAuc2VhcmNoLXJlc3VsdHMge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzE5QjVGRTtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLnNlYXJjaC1yZXN1bHRzIC5yZXN1bHR7IFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7IFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICB6LWluZGV4OiAyO1xufVxuXG4ucmVzdWx0XG57XG4gICAgd2lkdGg6IDkwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5yZXN1bHQtZm9yd2FyZC1vdXRsaW5lXG57XG4gICAgd2lkdGg6IDEwJTtcbiAgICBmbG9hdDpyaWdodDtcbn1cbi5zZWFyY2gtcmVzdWx0c3sgXG4gICAgLy8gd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIHdpZHRoOjkwJTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzE5QjVGRTtcbiAgICBjb2xvcjogI0ZGRjsgXG59XG4uc2VhcmNoLXJlc3VsdHMgdWwgeyBwYWRkaW5nOiAwOyBtYXJnaW46IDB9XG4uc2VhcmNoLXJlc3VsdHMgdWwgbGkgeyBsaXN0LXN0eWxlOiBub25lOyBwb3NpdGlvbjogcmVsYXRpdmU7IHBhZGRpbmc6IDI1cHggMHB4O2ZvbnQtc2l6ZTogMTVweDt9XG4uc2VhcmNoLXJlc3VsdHMgdWwgbGk6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDogMTVweH1cbi5zZWFyY2gtcmVzdWx0cyB1bCBsaTpsYXN0LWNoaWxkeyBtYXJnaW4tYm90dG9tOiAxNXB4O31cbi5zZWFyY2gtcmVzdWx0cyB1bCBsaSAuZ28tdG8tbGlua3sgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMHB4OyB0b3A6IDEwcHg7IHotaW5kZXg6IDA7fSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/maths/maths.page.ts": function srcAppPagesMathsMathsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MathsPage", function () {
        return MathsPage;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/post.service */
      "./src/app/services/post.service.ts");
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/app.constants */
      "./src/app/shared/app.constants.ts");

      var MathsPage = /*#__PURE__*/function () {
        function MathsPage(userService, service, alertCtrl, router) {
          _classCallCheck(this, MathsPage);

          this.userService = userService;
          this.service = service;
          this.alertCtrl = alertCtrl;
          this.router = router;
          this.tricks = [];
          this.trickSuggestions = [];
          this.userFavorites = [];
          this.requestInProgress = false;
        }

        _createClass(MathsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.getUser().then(function (user) {
              if (user && user.favorites) _this.userFavorites = user.favorites.toString().split(',').map(Number);
            });
            this.requestInProgress = true;
            this.service.getPosts().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
              return _this.requestInProgress = false;
            })).subscribe(function (tricks) {
              return _this.tricks = tricks;
            }, function (error) {
              return _this.checkForResponseError(error);
            });
          }
        }, {
          key: "validateId",
          value: function validateId(trickid) {
            return this.userFavorites.find(function (id) {
              return id === trickid;
            });
          }
        }, {
          key: "showAlert",
          value: function showAlert(msg) {
            var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Error";
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var alertMessage;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      console.log("Coming here --- ", msg, title);
                      alert("coming here");
                      _context.next = 4;
                      return this.alertCtrl.create({
                        header: title,
                        message: msg,
                        buttons: ['Dismiss']
                      });

                    case 4:
                      alertMessage = _context.sent;
                      _context.next = 7;
                      return alertMessage.present();

                    case 7:
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
                this.showAlert("Seems your session is expired. Please login again.");
                this.userService.logout();
              } else this.showAlert(errorResponse.error);
            } catch (error) {
              this.showAlert(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].JSON_ERROR);
            }
          }
        }, {
          key: "openDetailPage",
          value: function openDetailPage(trick) {
            this.router.navigate(['trick'], {
              state: {
                trick: trick
              }
            });
          }
        }, {
          key: "searchTrick",
          value: function searchTrick() {
            var _this2 = this;

            if (this.searchKeyword == null || this.searchKeyword == '') return;

            if (this.searchKeyword.length < 3) {
              this.clearSearch();
              return false;
            }

            this.service.searchPosts(this.searchKeyword).subscribe(function (tricks) {
              _this2.trickSuggestions = tricks;
            }, function (err) {
              return _this2.checkForResponseError(err);
            });
          }
        }, {
          key: "onInput",
          value: function onInput(event) {
            this.searchTrick();
          }
        }, {
          key: "clearSearch",
          value: function clearSearch() {
            this.trickSuggestions = [];
          }
        }, {
          key: "openTrickDetail",
          value: function openTrickDetail(trick) {
            this.router.navigate(['trick'], {
              state: {
                trick: trick
              }
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this3 = this;

            var page = Math.ceil(this.tricks.length / 5) + 1;

            if (page < 5) {
              this.service.getPosts(page).subscribe(function (tricks) {
                _this3.tricks = _this3.tricks.concat(tricks);
                infiniteScroll.target.complete();
              }, function (err) {
                infiniteScroll.target.complete();

                _this3.checkForResponseError(err);
              });
            } else {
              infiniteScroll.target.complete();
            }
          }
        }, {
          key: "addFavorite",
          value: function addFavorite(id) {
            this.userFavorites.push(id);
            this.updateFavorites();
          }
        }, {
          key: "updateFavorites",
          value: function updateFavorites() {
            var _this4 = this;

            this.userService.getAuthCookie().then(function (val) {
              _this4.userService.saveFavorites(_this4.userFavorites, val).subscribe(function (data) {
                if (data.hasOwnProperty('user')) {
                  _this4.favUser = data.user;

                  _this4.userService.saveUser(_this4.favUser);
                }
              }, function (err) {
                _this4.checkForResponseError(err);
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
        }]);

        return MathsPage;
      }();

      MathsPage.ctorParameters = function () {
        return [{
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      MathsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-maths',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./maths.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/maths/maths.page.html"))["default"],
        providers: [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./maths.page.scss */
        "./src/app/pages/maths/maths.page.scss"))["default"]]
      })], MathsPage);
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
//# sourceMappingURL=pages-maths-maths-module-es5.js.map