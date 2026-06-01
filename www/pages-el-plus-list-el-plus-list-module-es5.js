(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-el-plus-list-el-plus-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/el-plus-list/el-plus-list.page.html": function node_modulesRawLoaderDistCjsJsSrcAppPagesElPlusListElPlusListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"new-background-color\">    \n    <ion-back-button></ion-back-button>\n    <ion-title [innerHTML]=\"heading\"></ion-title>\n  </ion-toolbar>\n\n  <ion-searchbar\n  [(ngModel)]=\"searchKeyword\"\n  [showCancelButton]=\"shouldShowCancel\"\n  (ionInput)=\"onInput($event)\"\n  (ionClear)=\"clearSearch()\"\n  (ionCancel)=\"onCancel($event)\"></ion-searchbar>\n</ion-header>\n\n<div *ngIf=\"requestInProgress\" class=\"preloader-wrap\">\n  <div  class=\"preloader\"></div>   \n</div>  \n\n<ion-content (swipe)=\"onSwipeUp($event)\">\n  <ion-row class=\"tricks-row\">\n    <div class=\"search-results\">\n      <ul>\n        <li *ngFor=\"let post of suggestions\">\n          <div class=\"result\" (click)=\"openDetailPage(post)\" [innerHTML]=\"post.title.rendered\"></div>\n            <!-- <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\" ></ion-icon> -->\n            <div class=\"result-forward-outline\">\n              <ion-icon class=\"go-to-link\" name=\"chevron-forward-outline\"></ion-icon>\n            </div>\n        </li>\n      </ul>\n    </div>\n\n  <div class=\"tricks-list\">    \n      <ion-list>\n        <ion-item *ngFor=\"let post of posts\">\n          <div *ngIf=\"userFavorites\" class=\"favorite\">\n            <div *ngIf=\"userFavorites.indexOf(post.id)==-1\" (click)=\"addFavorite(post.id)\">\n              <!-- <ion-icon ios=\"ios-heart-outline\" md=\"md-heart-outline\"></ion-icon> -->\n              <ion-icon ios=\"heart-outline\" md=\"heart-outline\"></ion-icon>\n            </div>   \n            <div *ngIf=\"userFavorites.indexOf(post.id)>=0\" (click)=\"removeFavorite(post.id)\">\n              <!-- <ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon> -->\n              <ion-icon ios=\"heart\" md=\"heart\"></ion-icon>\n            </div>     \n          </div>\n          <div class=\"trick-title\"  (click)=\"openDetailPage(post)\" [innerHTML]=\"post.title.rendered\" ></div>\n          <div class=\"read-more\">\n            <button class=\"ReadMoreCls\" (click)=\"openDetailPage(post)\">Read More</button>\n          </div>\n        </ion-item>\n\n        <ion-item *ngIf=\"posts.length==0 && !requestInProgress\">     \n          <div>No Content available.</div>\n        </ion-item>\n\n        <ion-item *ngIf=\"posts.length==0 && requestInProgress\">   \n          <div *ngIf=\"requestInProgress\">Loading Contents...</div>    \n        </ion-item>\n\n      </ion-list>\n  </div>\n  <div >\n      <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n          <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n  </div>\n</ion-row>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/el-plus-list/el-plus-list-routing.module.ts": function srcAppPagesElPlusListElPlusListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElPlusListPageRoutingModule", function () {
        return ElPlusListPageRoutingModule;
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


      var _el_plus_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./el-plus-list.page */
      "./src/app/pages/el-plus-list/el-plus-list.page.ts");

      var routes = [{
        path: '',
        component: _el_plus_list_page__WEBPACK_IMPORTED_MODULE_3__["ElPlusListPage"]
      }];

      var ElPlusListPageRoutingModule = function ElPlusListPageRoutingModule() {
        _classCallCheck(this, ElPlusListPageRoutingModule);
      };

      ElPlusListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ElPlusListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/el-plus-list/el-plus-list.module.ts": function srcAppPagesElPlusListElPlusListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElPlusListPageModule", function () {
        return ElPlusListPageModule;
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


      var _el_plus_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./el-plus-list-routing.module */
      "./src/app/pages/el-plus-list/el-plus-list-routing.module.ts");
      /* harmony import */


      var _el_plus_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./el-plus-list.page */
      "./src/app/pages/el-plus-list/el-plus-list.page.ts");

      var ElPlusListPageModule = function ElPlusListPageModule() {
        _classCallCheck(this, ElPlusListPageModule);
      };

      ElPlusListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _el_plus_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElPlusListPageRoutingModule"]],
        declarations: [_el_plus_list_page__WEBPACK_IMPORTED_MODULE_6__["ElPlusListPage"]]
      })], ElPlusListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/el-plus-list/el-plus-list.page.scss": function srcAppPagesElPlusListElPlusListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".new-background-color {\n  --background: #2788E8;\n}\n\nion-title {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-back-button {\n  float: left;\n  color: #FFF;\n}\n\n.tricks-row .search-results {\n  width: calc(100% - 32px);\n  margin-left: 16px;\n  margin-right: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #19B5FE;\n  color: #FFF;\n}\n\n.search-results .result {\n  padding-right: 25px;\n  padding-left: 20px;\n  position: relative;\n  z-index: 2;\n}\n\n.search-results {\n  width: 90%;\n  margin-left: 16px;\n  margin-right: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #19B5FE;\n  color: #FFF;\n}\n\n.search-results ul {\n  padding: 0;\n  margin: 0;\n}\n\n.search-results ul li {\n  list-style: none;\n  position: relative;\n  padding: 25px 0px;\n  font-size: 15px;\n}\n\n.search-results ul li:first-child {\n  margin-top: 15px;\n}\n\n.search-results ul li:last-child {\n  margin-bottom: 15px;\n}\n\n.search-results ul li .go-to-link {\n  position: absolute;\n  right: 0px;\n  top: 10px;\n  z-index: 0;\n}\n\n.result {\n  width: 90%;\n  float: left;\n  height: auto;\n}\n\n.result-forward-outline {\n  width: 10%;\n  float: right;\n}\n\n.tricks-list {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.tricks-list ion-list ion-item {\n  --ion-background-position: top right;\n  --ion-background-repeat: no-repeat;\n}\n\n.tricks-list ion-list ion-item:nth-child(even) {\n  --ion-background-color: #EC407A;\n}\n\n.tricks-list ion-list ion-item:nth-child(odd) {\n  --ion-background-color: #0088e8;\n}\n\nion-item {\n  --min-height: 140px;\n}\n\n.favorite {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  z-index: 0;\n  color: #FFF;\n  font-size: 25px;\n}\n\n.trick-title {\n  color: #FFF;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 20px;\n  height: 70px;\n  width: 90%;\n  display: block;\n  display: -webkit-box;\n  white-space: normal;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.read-more {\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  bottom: 20px;\n}\n\n.ReadMoreCls {\n  margin: 15px auto 0;\n  display: block;\n  background: transparent;\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWwtcGx1cy1saXN0L2VsLXBsdXMtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDSjs7QUFFQTtFQUVJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUFKOztBQUVBO0VBQXFCLFVBQUE7RUFBWSxTQUFBO0FBR2pDOztBQUZBO0VBQXdCLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLGlCQUFBO0VBQWtCLGVBQUE7QUFTaEY7O0FBUkE7RUFBa0MsZ0JBQUE7QUFZbEM7O0FBWEE7RUFBa0MsbUJBQUE7QUFlbEM7O0FBZEE7RUFBbUMsa0JBQUE7RUFBb0IsVUFBQTtFQUFZLFNBQUE7RUFBVyxVQUFBO0FBcUI5RTs7QUFuQkE7RUFFSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFxQko7O0FBbEJBO0VBRUksVUFBQTtFQUNBLFlBQUE7QUFvQko7O0FBakJBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFvQko7O0FBakJBO0VBQ0ksb0NBQUE7RUFDQSxrQ0FBQTtBQW9CSjs7QUFqQkE7RUFDSSwrQkFBQTtBQW9CSjs7QUFqQkE7RUFDSSwrQkFBQTtBQW9CSjs7QUFoQkE7RUFFSSxtQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBbUJKOztBQWhCQTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNELDRCQUFBO0VBQ0MsZ0JBQUE7RUFDQSx1QkFBQTtBQW1CSjs7QUFoQkE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFtQko7O0FBaEJBO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBbUJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWwtcGx1cy1saXN0L2VsLXBsdXMtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc4OEU4O1xuICB9XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbntcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogI0ZGRjsgIFxufVxuXG4udHJpY2tzLXJvdyAuc2VhcmNoLXJlc3VsdHMge1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogIzE5QjVGRTtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLnNlYXJjaC1yZXN1bHRzIC5yZXN1bHR7IFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7IFxuICAgIHBhZGRpbmctbGVmdDogMjBweDsgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uc2VhcmNoLXJlc3VsdHN7IFxuICAgIC8vIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgICB3aWR0aDo5MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICMxOUI1RkU7XG4gICAgY29sb3I6ICNGRkY7IFxufVxuLnNlYXJjaC1yZXN1bHRzIHVsIHsgcGFkZGluZzogMDsgbWFyZ2luOiAwfVxuLnNlYXJjaC1yZXN1bHRzIHVsIGxpIHsgbGlzdC1zdHlsZTogbm9uZTsgcG9zaXRpb246IHJlbGF0aXZlOyBwYWRkaW5nOiAyNXB4IDBweDtmb250LXNpemU6IDE1cHg7fVxuLnNlYXJjaC1yZXN1bHRzIHVsIGxpOmZpcnN0LWNoaWxke21hcmdpbi10b3A6IDE1cHh9XG4uc2VhcmNoLXJlc3VsdHMgdWwgbGk6bGFzdC1jaGlsZHsgbWFyZ2luLWJvdHRvbTogMTVweDt9XG4uc2VhcmNoLXJlc3VsdHMgdWwgbGkgLmdvLXRvLWxpbmt7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDBweDsgdG9wOiAxMHB4OyB6LWluZGV4OiAwO31cblxuLnJlc3VsdFxue1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVzdWx0LWZvcndhcmQtb3V0bGluZVxue1xuICAgIHdpZHRoOiAxMCU7XG4gICAgZmxvYXQ6cmlnaHQ7XG59XG5cbi50cmlja3MtbGlzdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cblxuLnRyaWNrcy1saXN0IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnRyaWNrcy1saXN0IGlvbi1saXN0IGlvbi1pdGVtOm50aC1jaGlsZChldmVuKXtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRUM0MDdBO1xuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvZXZlbi5wbmcpXG59XG4udHJpY2tzLWxpc3QgaW9uLWxpc3QgaW9uLWl0ZW06bnRoLWNoaWxkKG9kZCl7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwODhlODtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1nL29kZC5wbmcpXG59XG5cbmlvbi1pdGVtIHtcbiAgICAvLyAtLWlvbi10ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLS1taW4taGVpZ2h0OiAxNDBweDtcbn1cbi5mYXZvcml0ZXsgXG4gICAgcG9zaXRpb246IGFic29sdXRlOyBcbiAgICByaWdodDogMTVweDsgXG4gICAgdG9wOiAxNXB4OyBcbiAgICB6LWluZGV4OiAwO1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnRyaWNrLXRpdGxle1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLnJlYWQtbW9yZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7OyBcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMjBweDtcbn1cblxuLlJlYWRNb3JlQ2xzIHtcbiAgICBtYXJnaW46IDE1cHggYXV0byAwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/el-plus-list/el-plus-list.page.ts": function srcAppPagesElPlusListElPlusListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElPlusListPage", function () {
        return ElPlusListPage;
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


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/user.service */
      "./src/app/services/user.service.ts");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/app.constants */
      "./src/app/shared/app.constants.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var ElPlusListPage = /*#__PURE__*/function () {
        function ElPlusListPage(router, userService, service, alertCtrl) {
          _classCallCheck(this, ElPlusListPage);

          this.router = router;
          this.userService = userService;
          this.service = service;
          this.alertCtrl = alertCtrl;
          this.posts = [];
          this.requestInProgress = false;
          this.suggestions = [];
          this.userFavorites = [];
          this.postType = '11_plus';

          if (this.router.getCurrentNavigation().extras.state) {
            this.taxonomy = this.router.getCurrentNavigation().extras.state.type;
            this.taxonomyValue = this.router.getCurrentNavigation().extras.state.typeValue;
            this.heading = this.router.getCurrentNavigation().extras.state.heading;
          }
        }

        _createClass(ElPlusListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.getUser().then(function (user) {
              if (user && user.favorites) _this.userFavorites = user.favorites.toString().split(',').map(Number);
            });
            this.requestInProgress = true; // this.service.getPostsByTaxonomy(1,this.postType,this.taxonomy,this.taxonomyValue).finally(()=>this.requestInProgress=false)
            //                              .subscribe((posts:QA[])=> this.posts= posts);

            this.service.getPostsByTaxonomy(1, this.postType, this.taxonomy, this.taxonomyValue).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
              return _this.requestInProgress = false;
            })).subscribe(function (posts) {
              return _this.posts = posts;
            });
          }
        }, {
          key: "doInfinite",
          value: function doInfinite(infiniteScroll) {
            var _this2 = this;

            var page = Math.ceil(this.posts.length / 5) + 1;

            if (page < 5) {
              this.service.getPostsByTaxonomy(page, this.postType, this.taxonomy, this.taxonomyValue).subscribe(function (gks) {
                _this2.posts = _this2.posts.concat(gks);
                infiniteScroll.target.complete();
              }, function (err) {
                infiniteScroll.target.complete();

                _this2.checkForResponseError(err);
              });
            } else {
              infiniteScroll.target.complete();
            }
          }
        }, {
          key: "checkForResponseError",
          value: function checkForResponseError(err) {
            try {
              var errorResponse = JSON.parse(err._body);
              if (errorResponse.code == "rest_post_invalid_page_number") return;

              if (errorResponse.error == "session_expired") {
                this.showAlert("Seems your session is expired. Please login again."); //this.navCtrl.push(LoginPage);

                this.userService.logout();
              } else this.showAlert(errorResponse.error);
            } catch (error) {
              this.showAlert(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].JSON_ERROR);
            }
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
          key: "openDetailPage",
          value: function openDetailPage(qa) {
            // this.navCtrl.push(ElPlusPage,{'post': qa});
            var navigationExtras = {
              state: {
                post: qa
              }
            };
            this.router.navigate(['el-plus'], navigationExtras);
          }
        }, {
          key: "searchPost",
          value: function searchPost() {
            var _this3 = this;

            if (this.searchKeyword) {
              if (this.searchKeyword.length < 3) {
                this.clearSearch();
                return false;
              }

              this.service.searchPosts(this.searchKeyword, '11_plus').subscribe(function (posts) {
                _this3.suggestions = posts;
              }, function (err) {
                return _this3.checkForResponseError(err);
              });
            }
          }
        }, {
          key: "onInput",
          value: function onInput(event) {
            this.searchPost();
          }
        }, {
          key: "clearSearch",
          value: function clearSearch() {
            this.suggestions = [];
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
                  _this4.userService.saveUser(data.user);
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

        return ElPlusListPage;
      }();

      ElPlusListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
        }, {
          type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }];
      };

      ElPlusListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-el-plus-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./el-plus-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/el-plus-list/el-plus-list.page.html"))["default"],
        providers: [src_app_services_post_service__WEBPACK_IMPORTED_MODULE_3__["PostService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./el-plus-list.page.scss */
        "./src/app/pages/el-plus-list/el-plus-list.page.scss"))["default"]]
      })], ElPlusListPage);
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
//# sourceMappingURL=pages-el-plus-list-el-plus-list-module-es5.js.map