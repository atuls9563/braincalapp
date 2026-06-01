(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lang-list-lang-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lang-list/lang-list.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lang-list/lang-list.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-back-button></ion-back-button>   \n    <ion-title [innerHTML]=\"heading\"></ion-title>\n  </ion-toolbar>\n\n  <ion-searchbar\n  [(ngModel)]=\"searchKeyword\"\n  [showCancelButton]=\"shouldShowCancel\"\n  (ionInput)=\"onInput($event)\"\n  (ionClear)=\"clearSearch()\"\n  (ionCancel)=\"onCancel($event)\"></ion-searchbar>\n</ion-header>\n\n<div *ngIf=\"requestInProgress\" class=\"preloader-wrap\">\n  <div  class=\"preloader\"></div>   \n</div>  \n\n<ion-content (swipe)=\"onSwipeUp($event)\">\n <ion-row class=\"tricks-row\">\n    <div class=\"search-results\">\n      <ul>\n        <li *ngFor=\"let post of suggestions\">\n          <div class=\"result\" (click)=\"openDetailPage(post)\" [innerHTML]=\"post.title.rendered\"></div>\n          <!-- <ion-icon ios=\"ios-arrow-forward\" md=\"md-arrow-forward\" class=\"go-to-link\"></ion-icon> -->\n          <div class=\"result-forward-outline\">\n            <ion-icon class=\"go-to-link\" name=\"chevron-forward-outline\"></ion-icon>\n          </div>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"tricks-list\">    \n      <ion-list>\n        <ion-item *ngFor=\"let post of posts\">\n          <div *ngIf=\"userFavorites\" class=\"favorite\">\n            <div *ngIf=\"userFavorites.indexOf(post.id)==-1\" (click)=\"addFavorite(post.id)\">\n              <!-- <ion-icon ios=\"ios-heart-outline\" md=\"md-heart-outline\"></ion-icon> -->\n              <ion-icon ios=\"heart-outline\" md=\"heart-outline\"></ion-icon>\n            </div>   \n            <div *ngIf=\"userFavorites.indexOf(post.id)>=0\" (click)=\"removeFavorite(post.id)\">\n              <!-- <ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon> -->\n              <ion-icon ios=\"heart\" md=\"heart\"></ion-icon>\n            </div>     \n          </div>\n\n          <div class=\"trick-title\" (click)=\"openDetailPage(post)\" [innerHTML]=\"post.title.rendered\"></div>\n          <div class=\"read-more\">\n            <button class=\"ReadMoreCls\" (click)=\"openDetailPage(post)\">Read More</button>\n          </div>\n        </ion-item>\n\n            <ion-item *ngIf=\"posts.length==0 && !requestInProgress\">     \n                    <div>No Content available.</div>\n            </ion-item>\n\n            <ion-item  *ngIf=\"posts.length==0 && requestInProgress\">   \n                    <div *ngIf=\"requestInProgress\">Loading Contents...</div>    \n            </ion-item>\n\n      </ion-list>\n    </div>\n    <div class=\"infinitte-scroll\">\n        <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n            <ion-infinite-scroll-content></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div>\n </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/lang-list/lang-list-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/lang-list/lang-list-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: LangListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangListPageRoutingModule", function() { return LangListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lang_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang-list.page */ "./src/app/pages/lang-list/lang-list.page.ts");




const routes = [
    {
        path: '',
        component: _lang_list_page__WEBPACK_IMPORTED_MODULE_3__["LangListPage"]
    }
];
let LangListPageRoutingModule = class LangListPageRoutingModule {
};
LangListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LangListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/lang-list/lang-list.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/lang-list/lang-list.module.ts ***!
  \*****************************************************/
/*! exports provided: LangListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangListPageModule", function() { return LangListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lang_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang-list-routing.module */ "./src/app/pages/lang-list/lang-list-routing.module.ts");
/* harmony import */ var _lang_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lang-list.page */ "./src/app/pages/lang-list/lang-list.page.ts");







let LangListPageModule = class LangListPageModule {
};
LangListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lang_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["LangListPageRoutingModule"]
        ],
        declarations: [_lang_list_page__WEBPACK_IMPORTED_MODULE_6__["LangListPage"]]
    })
], LangListPageModule);



/***/ }),

/***/ "./src/app/pages/lang-list/lang-list.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/lang-list/lang-list.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: #2788E8;\n}\n\nion-title {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-back-button {\n  float: left;\n  color: #FFF;\n}\n\n.tricks-list {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.tricks-list ion-list ion-item {\n  --ion-background-position: top right;\n  --ion-background-repeat: no-repeat;\n}\n\n.tricks-list ion-list ion-item:nth-child(even) {\n  --ion-background-color: #EC407A;\n}\n\n.tricks-list ion-list ion-item:nth-child(odd) {\n  --ion-background-color: #0088e8;\n}\n\nion-item {\n  --min-height: 140px;\n}\n\n.favorite {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  z-index: 0;\n  color: #FFF;\n  font-size: 25px;\n}\n\n.ReadMoreCls {\n  margin: 15px auto 0;\n  display: block;\n  background: transparent;\n  color: #FFF;\n}\n\n.trick-title {\n  color: #FFF;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 20px;\n  height: 70px;\n  width: 90%;\n  display: block;\n  display: -webkit-box;\n  white-space: normal;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.read-more {\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  bottom: 20px;\n}\n\n.tricks-row .search-results {\n  width: calc(100% - 32px);\n  margin-left: 16px;\n  margin-right: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #19B5FE;\n  color: #FFF;\n}\n\n.search-results .result {\n  padding-right: 25px;\n  padding-left: 20px;\n  position: relative;\n  z-index: 2;\n}\n\n.result {\n  width: 90%;\n  float: left;\n  height: auto;\n}\n\n.result-forward-outline {\n  width: 10%;\n  float: right;\n}\n\n.search-results {\n  width: 90%;\n  margin-left: 16px;\n  margin-right: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #19B5FE;\n  color: #FFF;\n}\n\n.search-results ul {\n  padding: 0;\n  margin: 0;\n}\n\n.search-results ul li {\n  list-style: none;\n  position: relative;\n  padding: 25px 0px;\n  font-size: 15px;\n}\n\n.search-results ul li:first-child {\n  margin-top: 15px;\n}\n\n.search-results ul li:last-child {\n  margin-bottom: 15px;\n}\n\n.search-results ul li .go-to-link {\n  position: absolute;\n  right: 0px;\n  top: 10px;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZy1saXN0L2xhbmctbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxvQ0FBQTtFQUNBLGtDQUFBO0FBQUY7O0FBR0E7RUFDRSwrQkFBQTtBQUFGOztBQUdBO0VBQ0UsK0JBQUE7QUFBRjs7QUFJQTtFQUVFLG1CQUFBO0FBRkY7O0FBSUU7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRE47O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNELDRCQUFBO0VBQ0MsZ0JBQUE7RUFDQSx1QkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRkY7O0FBS0E7RUFFRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUVFLFVBQUE7RUFDQSxZQUFBO0FBSkY7O0FBTUE7RUFFRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFKRjs7QUFNQTtFQUFxQixVQUFBO0VBQVksU0FBQTtBQURqQzs7QUFFQTtFQUF3QixnQkFBQTtFQUFrQixrQkFBQTtFQUFvQixpQkFBQTtFQUFrQixlQUFBO0FBS2hGOztBQUpBO0VBQWtDLGdCQUFBO0FBUWxDOztBQVBBO0VBQWtDLG1CQUFBO0FBV2xDOztBQVZBO0VBQW1DLGtCQUFBO0VBQW9CLFVBQUE7RUFBWSxTQUFBO0VBQVcsVUFBQTtBQWlCOUUiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5nLWxpc3QvbGFuZy1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzg4RTg7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLW1lbnUtYnV0dG9ue1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWJhY2stYnV0dG9ue1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICNGRkY7ICBcbn1cblxuXG4udHJpY2tzLWxpc3R7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi50cmlja3MtbGlzdCBpb24tbGlzdCBpb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcbiAgLS1pb24tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnRyaWNrcy1saXN0IGlvbi1saXN0IGlvbi1pdGVtOm50aC1jaGlsZChldmVuKXtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI0VDNDA3QTtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZy9ldmVuLnBuZylcbn1cbi50cmlja3MtbGlzdCBpb24tbGlzdCBpb24taXRlbTpudGgtY2hpbGQob2RkKXtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwODhlODtcbiAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vYXNzZXRzL2ltZy9vZGQucG5nKVxufVxuXG5pb24taXRlbSB7XG4gIC8vIC0taW9uLXRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1taW4taGVpZ2h0OiAxNDBweDtcbn1cbiAgLmZhdm9yaXRleyBcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gICAgICByaWdodDogMTVweDsgXG4gICAgICB0b3A6IDE1cHg7IFxuICAgICAgei1pbmRleDogMDtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgZm9udC1zaXplOiAyNXB4O1xuICB9XG5cblxuLlJlYWRNb3JlQ2xzIHtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLnRyaWNrLXRpdGxle1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XG4gLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIH1cblxuLnJlYWQtbW9yZXtcbiAgcG9zaXRpb246IGFic29sdXRlOzsgXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDIwcHg7XG59XG5cbi50cmlja3Mtcm93IC5zZWFyY2gtcmVzdWx0cyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTlCNUZFO1xuICBjb2xvcjogI0ZGRjtcbn1cblxuLnNlYXJjaC1yZXN1bHRzIC5yZXN1bHR7IFxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4OyBcbiAgcGFkZGluZy1sZWZ0OiAyMHB4OyBcbiAgcG9zaXRpb246IHJlbGF0aXZlOyBcbiAgei1pbmRleDogMjtcbn1cblxuLnJlc3VsdFxue1xuICB3aWR0aDogOTAlO1xuICBmbG9hdDogbGVmdDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucmVzdWx0LWZvcndhcmQtb3V0bGluZVxue1xuICB3aWR0aDogMTAlO1xuICBmbG9hdDpyaWdodDtcbn1cbi5zZWFyY2gtcmVzdWx0c3sgXG4gIC8vIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcbiAgd2lkdGg6OTAlO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICMxOUI1RkU7XG4gIGNvbG9yOiAjRkZGOyBcbn1cbi5zZWFyY2gtcmVzdWx0cyB1bCB7IHBhZGRpbmc6IDA7IG1hcmdpbjogMH1cbi5zZWFyY2gtcmVzdWx0cyB1bCBsaSB7IGxpc3Qtc3R5bGU6IG5vbmU7IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZzogMjVweCAwcHg7Zm9udC1zaXplOiAxNXB4O31cbi5zZWFyY2gtcmVzdWx0cyB1bCBsaTpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOiAxNXB4fVxuLnNlYXJjaC1yZXN1bHRzIHVsIGxpOmxhc3QtY2hpbGR7IG1hcmdpbi1ib3R0b206IDE1cHg7fVxuLnNlYXJjaC1yZXN1bHRzIHVsIGxpIC5nby10by1saW5reyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwcHg7IHRvcDogMTBweDsgei1pbmRleDogMDt9XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/lang-list/lang-list.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/lang-list/lang-list.page.ts ***!
  \***************************************************/
/*! exports provided: LangListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangListPage", function() { return LangListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/app.constants */ "./src/app/shared/app.constants.ts");








let LangListPage = class LangListPage {
    constructor(userService, service, alertCtrl, router) {
        this.userService = userService;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.posts = [];
        this.requestInProgress = false;
        this.suggestions = [];
        this.userFavorites = [];
        if (this.router.getCurrentNavigation().extras.state) {
            this.postType = this.router.getCurrentNavigation().extras.state.type;
            this.heading = this.router.getCurrentNavigation().extras.state.heading;
        }
    }
    ngOnInit() {
        this.userService.getUser().then(user => {
            if (user && user.favorites)
                this.userFavorites = user.favorites.toString().split(',').map(Number);
        });
        this.requestInProgress = true;
        // this.service.getPosts(1,this.postType).finally(()=>
        // this.requestInProgress=false).subscribe((posts:Post[])=> 
        // this.posts= posts);
        this.service.getPosts(1, this.postType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.requestInProgress = false))
            .subscribe((posts) => this.posts = posts);
    }
    doInfinite(infiniteScroll) {
        let page = Math.ceil(this.posts.length / 5) + 1;
        if (page < 3) {
            this.service.getPosts(page, this.postType).subscribe((posts) => {
                this.posts = this.posts.concat(posts);
                infiniteScroll.target.complete();
            }, err => {
                infiniteScroll.target.complete();
                this.checkForResponseError(err);
            });
        }
        else {
            infiniteScroll.target.complete();
        }
    }
    checkForResponseError(err) {
        try {
            let errorResponse = JSON.parse(err._body);
            if (errorResponse.code == "rest_post_invalid_page_number")
                return;
            if (errorResponse.error == "session_expired") {
                this.showAlert("Seems your session is expired. Please login again.");
                //this.navCtrl.push(LoginPage);
                this.userService.logout();
            }
            else
                this.showAlert(errorResponse.error);
        }
        catch (error) {
            this.showAlert(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].JSON_ERROR);
        }
    }
    showAlert(msg, title = "Error") {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: msg,
                buttons: ['Dismiss']
            });
            yield alert.present();
        });
    }
    openDetailPage(lang) {
        // this.navCtrl.push(LangPage,{'post': lang});
        // this.navCtrl.push(TrickPage,{'trick': trick});
        let navigationExtras = {
            state: {
                post: lang
            }
        };
        this.router.navigate(['lang'], navigationExtras);
    }
    searchPost() {
        if (this.searchKeyword) {
            if (this.searchKeyword.length < 3) {
                this.clearSearch();
                return false;
            }
        }
        this.service.searchPosts(this.searchKeyword, this.postType).subscribe((posts) => {
            this.suggestions = posts;
        }, err => this.checkForResponseError(err));
    }
    onInput(event) {
        this.searchPost();
    }
    clearSearch() {
        this.suggestions = [];
    }
    addFavorite(id) {
        this.userFavorites.push(id);
        this.updateFavorites();
    }
    updateFavorites() {
        this.userService.getAuthCookie().then(val => {
            this.userService.saveFavorites(this.userFavorites, val).subscribe((data) => {
                if (data.hasOwnProperty('user')) {
                    this.userService.saveUser(data.user);
                }
            }, err => {
                this.checkForResponseError(err);
            });
        });
    }
    removeFavorite(id) {
        let index = this.userFavorites.indexOf(id);
        if (index >= 0) {
            this.userFavorites.splice(index, 1);
            this.updateFavorites();
        }
    }
};
LangListPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LangListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lang-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lang-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lang-list/lang-list.page.html")).default,
        providers: [
            src_app_services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lang-list.page.scss */ "./src/app/pages/lang-list/lang-list.page.scss")).default]
    })
], LangListPage);



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/app.constants */ "./src/app/shared/app.constants.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var PostService_1;


//import { Http } from '@angular/http';
//import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
//import 'rxjs/Rx';

//import { HttpClientModule } from '@angular/common/http'


//import 'rxjs/add/observable/of';
//import { of } from 'rxjs';
let PostService = PostService_1 = class PostService {
    // constructor(private http: Http) {
    // }
    constructor(http) {
        this.http = http;
    }
    // public getPosts(page: number = 1, type = "tricks"): Observable<any> {
    //     return this.http.get(AppConstants.POSTS_URL + type + "?cr=1&page=" + page + "&per_page=" + PostService.POSTS_PER_PAGE).map(data => data.json());
    // }
    getPosts(page = 1, type = "tricks") {
        // const request = this.http.get().pipe(
        //     map((res) => res.data)),
        //     catchError(error => Observable.of(null))
        //   );
        return this.http.get(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].POSTS_URL + type + "?cr=1&page=" + page + "&per_page=" +
            PostService_1.POSTS_PER_PAGE).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data)
        //,
        //catchError(error => Observable.of(null))
        // , catchError((err, caught) => {
        //     return empty();
        //   })
        );
    }
    getPost(id, type = "tricks") {
        //return this.http.get(AppConstants.POSTS_URL + type + "/" + id).map(data => data.json());
        return this.http.get(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].POSTS_URL + type + "/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
    searchPosts(search, type = "tricks") {
        //return this.http.get(AppConstants.POSTS_URL + type + "?cr=1&page=1&per_page=" + PostService.POSTS_PER_PAGE + "&search=" + search).map(data => data.json());
        return this.http.get(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].POSTS_URL + type + "?cr=1&page=1&per_page=" + PostService_1.POSTS_PER_PAGE + "&search=" + search).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
    getPostsByIds(ids, page = 1) {
        if (!ids)
            ids = "0";
        if (ids.indexOf(",") >= 0) {
            let tempIds = ids.split(',');
            let validIds = [];
            for (let i = 0; i < tempIds.length; i++) {
                let validId = parseInt(tempIds[i]);
                if (!isNaN(validId))
                    validIds.push(parseInt(tempIds[i]));
            }
            if (validIds.length > 0) {
                ids = validIds.join();
            }
        }
        //return this.http.get(AppConstants.POSTS_URL + "posts?type[]=spanish&type[]=english&type[]=hindi&type[]=french&type[]=tricks&type[]=general_knowledge&type[]=11_plus&cr=1&include=" + ids + "&page=" + page + "&per_page=" + PostService.POSTS_PER_PAGE).map(data => data.json());
        return this.http.get(_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].POSTS_URL + "posts?type[]=spanish&type[]=english&type[]=hindi&type[]=french&type[]=tricks&type[]=general_knowledge&type[]=11_plus&cr=1&include=" + ids + "&page=" + page + "&per_page=" + PostService_1.POSTS_PER_PAGE).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
    getPostsByTaxonomy(page = 1, type = "tricks", tax, taxId) {
        // return this.http.get(`${AppConstants.POSTS_URL}${type}?${tax}=${taxId}&cr=1&page=${page}&per_page=${PostService.POSTS_PER_PAGE}`).map(data => data.json());
        return this.http.get(`${_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].POSTS_URL}${type}?${tax}=${taxId}&cr=1&page=${page}&per_page=${PostService_1.POSTS_PER_PAGE}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
    getMyPlan(userid) {
        var hash = "EB46F14D6E44B1472AA818248116FF65";
        var type = "plan/details";
        //return this.http.get(`${AppConstants.PLAN_URL}${type}?hash=${hash}&userid=${userid}`).map(data => data.json());
        return this.http.get(`${_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].PLAN_URL}${type}?hash=${hash}&userid=${userid}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
    subscribePlan(signature, userid, reciept, transactionId, product_id, amount, device_type) {
        var hash = "EB46F14D6E44B1472AA818248116FF65";
        var type = "subscribe/plan";
        // return this.http.get(`${AppConstants.PLAN_URL}${type}?device_type=${device_type}&transaction_id=${transactionId}&product_id=${product_id}&amount=${amount}&signature=${signature}&hash=${hash}&receipt=${reciept}&userid=${userid}`).map(data => data.json());
        return this.http.get(`${_shared_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].PLAN_URL}${type}?device_type=${device_type}&transaction_id=${transactionId}&product_id=${product_id}&amount=${amount}&signature=${signature}&hash=${hash}&receipt=${reciept}&userid=${userid}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data));
    }
};
PostService.POSTS_PER_PAGE = 10;
PostService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PostService = PostService_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PostService);



/***/ })

}]);
//# sourceMappingURL=pages-lang-list-lang-list-module-es2015.js.map