(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-favorites-favorites-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Favorites</ion-title>\n  </ion-toolbar>\n\n  <!-- <ion-searchbar [(ngModel)]=\"searchKeyword\" [showCancelButton]=\"shouldShowCancel\" (ionInput)=\"onInput($event)\"\n    (ionClear)=\"clearSearch()\" (ionCancel)=\"onCancel($event)\"></ion-searchbar> -->\n</ion-header>\n\n<div *ngIf=\"requestInProgress\">\n  <div class=\"preloader\"></div>\n</div>\n\n<ion-content>\n  <ion-row class=\"tricks-row\">\n    <div class=\"tricks-list\">\n      <ion-list>\n        <ion-item *ngFor=\"let post of posts; let i=index\">\n          <div class=\"favorite\">\n            <div (click)=\"removeFavorite(post.id,i)\">\n              <ion-icon ios=\"remove\" md=\"remove\"></ion-icon>\n            </div>\n          </div>\n          <div class=\"trick-title\" (click)=\"openDetailPage(post)\" [innerHTML]=\"post.title.rendered\"></div>\n          <div class=\"read-more\">\n            <button class=\"ReadMoreCls\" (click)=\"openDetailPage(post)\">Read More</button>\n          </div>\n        </ion-item>\n\n        <ion-item *ngIf=\"posts.length==0 && !requestInProgress\">\n          <div>No Contents available.</div>\n        </ion-item>\n\n        <ion-item *ngIf=\"posts.length==0 && requestInProgress\">\n          <div *ngIf=\"requestInProgress\">Loading Contents...</div>\n        </ion-item>\n\n      </ion-list>\n    </div>\n    <div class=\"infinitte-scroll\">\n      <ion-infinite-scroll (ionInfinite)=\"doInfinite($event)\">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n  </ion-row>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/favorites/favorites-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/favorites/favorites-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FavoritesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageRoutingModule", function() { return FavoritesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./favorites.page */ "./src/app/pages/favorites/favorites.page.ts");




const routes = [
    {
        path: '',
        component: _favorites_page__WEBPACK_IMPORTED_MODULE_3__["FavoritesPage"]
    }
];
let FavoritesPageRoutingModule = class FavoritesPageRoutingModule {
};
FavoritesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FavoritesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/favorites/favorites.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.module.ts ***!
  \*****************************************************/
/*! exports provided: FavoritesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPageModule", function() { return FavoritesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./favorites-routing.module */ "./src/app/pages/favorites/favorites-routing.module.ts");
/* harmony import */ var _favorites_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./favorites.page */ "./src/app/pages/favorites/favorites.page.ts");







let FavoritesPageModule = class FavoritesPageModule {
};
FavoritesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _favorites_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavoritesPageRoutingModule"]
        ],
        declarations: [_favorites_page__WEBPACK_IMPORTED_MODULE_6__["FavoritesPage"]]
    })
], FavoritesPageModule);



/***/ }),

/***/ "./src/app/pages/favorites/favorites.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: #2788E8;\n}\n\nion-title {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-back-button {\n  float: left;\n  color: #FFF;\n}\n\n.tricks-list {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 20px;\n}\n\n.tricks-list ion-list ion-item {\n  --ion-background-position: top right;\n  --ion-background-repeat: no-repeat;\n}\n\n.tricks-list ion-list ion-item:nth-child(even) {\n  --ion-background-color: #EC407A;\n}\n\n.tricks-list ion-list ion-item:nth-child(odd) {\n  --ion-background-color: #0088e8;\n}\n\nion-item {\n  --min-height: 140px;\n}\n\n.favorite {\n  position: absolute;\n  right: 15px;\n  top: 15px;\n  z-index: 0;\n  color: #FFF;\n  font-size: 25px;\n}\n\n.ReadMoreCls {\n  margin: 15px auto 0;\n  display: block;\n  background: transparent;\n  color: #FFF;\n}\n\n.trick-title {\n  color: #FFF;\n  font-size: 18px;\n  text-align: center;\n  margin-top: 20px;\n  height: 70px;\n  width: 90%;\n  display: block;\n  display: -webkit-box;\n  white-space: normal;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.read-more {\n  position: absolute;\n  text-align: center;\n  width: 100%;\n  bottom: 20px;\n}\n\n.tricks-row .search-results {\n  width: calc(100% - 32px);\n  margin-left: 16px;\n  margin-right: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #19B5FE;\n  color: #FFF;\n}\n\n.search-results .result {\n  padding-right: 25px;\n  padding-left: 20px;\n  position: relative;\n  z-index: 2;\n}\n\n.result {\n  width: 90%;\n  float: left;\n  height: auto;\n}\n\n.result-forward-outline {\n  width: 10%;\n  float: right;\n}\n\n.search-results {\n  width: 90%;\n  margin-left: 16px;\n  margin-right: 16px;\n  padding-left: 10px;\n  padding-right: 10px;\n  background: #19B5FE;\n  color: #FFF;\n}\n\n.search-results ul {\n  padding: 0;\n  margin: 0;\n}\n\n.search-results ul li {\n  list-style: none;\n  position: relative;\n  padding: 25px 0px;\n  font-size: 15px;\n}\n\n.search-results ul li:first-child {\n  margin-top: 15px;\n}\n\n.search-results ul li:last-child {\n  margin-bottom: 15px;\n}\n\n.search-results ul li .go-to-link {\n  position: absolute;\n  right: 0px;\n  top: 10px;\n  z-index: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVFO0VBQ0UsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLG9DQUFBO0VBQ0Esa0NBQUE7QUFGSjs7QUFLQTtFQUNJLCtCQUFBO0FBRko7O0FBS0E7RUFDSSwrQkFBQTtBQUZKOztBQU1BO0VBRUksbUJBQUE7QUFKSjs7QUFNSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFIUjs7QUFPQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQUpKOztBQU9BO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0QsNEJBQUE7RUFDQyxnQkFBQTtFQUNBLHVCQUFBO0FBSko7O0FBT0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFKSjs7QUFPQTtFQUNJLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFKSjs7QUFPQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFKSjs7QUFPQTtFQUVJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBRUksVUFBQTtFQUNBLFlBQUE7QUFOSjs7QUFRQTtFQUVJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVFBO0VBQXFCLFVBQUE7RUFBWSxTQUFBO0FBSGpDOztBQUlBO0VBQXdCLGdCQUFBO0VBQWtCLGtCQUFBO0VBQW9CLGlCQUFBO0VBQWtCLGVBQUE7QUFHaEY7O0FBRkE7RUFBa0MsZ0JBQUE7QUFNbEM7O0FBTEE7RUFBa0MsbUJBQUE7QUFTbEM7O0FBUkE7RUFBbUMsa0JBQUE7RUFBb0IsVUFBQTtFQUFZLFNBQUE7RUFBVyxVQUFBO0FBZTlFIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc4OEU4O1xuICB9XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbntcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbntcbiAgICBmbG9hdDogbGVmdDtcbiAgICBjb2xvcjogI0ZGRjsgIFxufVxuXG5cbi8vICBDaGFuZ2VzIC8vXG5cbi50cmlja3MtbGlzdHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnRyaWNrcy1saXN0IGlvbi1saXN0IGlvbi1pdGVtIHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQ7XG4gICAgLS1pb24tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLnRyaWNrcy1saXN0IGlvbi1saXN0IGlvbi1pdGVtOm50aC1jaGlsZChldmVuKXtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjRUM0MDdBO1xuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2Fzc2V0cy9pbWcvZXZlbi5wbmcpXG59XG4udHJpY2tzLWxpc3QgaW9uLWxpc3QgaW9uLWl0ZW06bnRoLWNoaWxkKG9kZCl7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzAwODhlODtcbiAgICAvL2JhY2tncm91bmQtaW1hZ2U6IHVybCguLi9hc3NldHMvaW1nL29kZC5wbmcpXG59XG5cbmlvbi1pdGVtIHtcbiAgICAvLyAtLWlvbi10ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLS1taW4taGVpZ2h0OiAxNDBweDtcbn1cbiAgICAuZmF2b3JpdGV7IFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgICAgICByaWdodDogMTVweDsgXG4gICAgICAgIHRvcDogMTVweDsgXG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgfVxuXG5cbi5SZWFkTW9yZUNscyB7XG4gICAgbWFyZ2luOiAxNXB4IGF1dG8gMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogI0ZGRjtcbn1cblxuLnRyaWNrLXRpdGxle1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbi5yZWFkLW1vcmV7XG4gICAgcG9zaXRpb246IGFic29sdXRlOzsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDIwcHg7XG59XG5cbi50cmlja3Mtcm93IC5zZWFyY2gtcmVzdWx0cyB7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTlCNUZFO1xuICAgIGNvbG9yOiAjRkZGO1xufVxuXG4uc2VhcmNoLXJlc3VsdHMgLnJlc3VsdHsgXG4gICAgcGFkZGluZy1yaWdodDogMjVweDsgXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4OyBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IFxuICAgIHotaW5kZXg6IDI7XG59XG5cbi5yZXN1bHRcbntcbiAgICB3aWR0aDogOTAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLnJlc3VsdC1mb3J3YXJkLW91dGxpbmVcbntcbiAgICB3aWR0aDogMTAlO1xuICAgIGZsb2F0OnJpZ2h0O1xufVxuLnNlYXJjaC1yZXN1bHRzeyBcbiAgICAvLyB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gICAgd2lkdGg6OTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMTlCNUZFO1xuICAgIGNvbG9yOiAjRkZGOyBcbn1cbi5zZWFyY2gtcmVzdWx0cyB1bCB7IHBhZGRpbmc6IDA7IG1hcmdpbjogMH1cbi5zZWFyY2gtcmVzdWx0cyB1bCBsaSB7IGxpc3Qtc3R5bGU6IG5vbmU7IHBvc2l0aW9uOiByZWxhdGl2ZTsgcGFkZGluZzogMjVweCAwcHg7Zm9udC1zaXplOiAxNXB4O31cbi5zZWFyY2gtcmVzdWx0cyB1bCBsaTpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOiAxNXB4fVxuLnNlYXJjaC1yZXN1bHRzIHVsIGxpOmxhc3QtY2hpbGR7IG1hcmdpbi1ib3R0b206IDE1cHg7fVxuLnNlYXJjaC1yZXN1bHRzIHVsIGxpIC5nby10by1saW5reyBwb3NpdGlvbjogYWJzb2x1dGU7IHJpZ2h0OiAwcHg7IHRvcDogMTBweDsgei1pbmRleDogMDt9Il19 */");

/***/ }),

/***/ "./src/app/pages/favorites/favorites.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/favorites/favorites.page.ts ***!
  \***************************************************/
/*! exports provided: FavoritesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritesPage", function() { return FavoritesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/app.constants */ "./src/app/shared/app.constants.ts");







let FavoritesPage = class FavoritesPage {
    constructor(userService, service, alertCtrl, router) {
        this.userService = userService;
        this.service = service;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.posts = [];
        this.postSuggestions = [];
        this.userFavorites = [];
        this.requestInProgress = false;
    }
    ngOnInit() {
        this.userService.getUser().then(user => {
            let ids = user.favorites.toString().split(',');
            this.userFavorites = ids.map(Number);
            this.showRequestInProgress(true);
            this.service.getPostsByIds(user.favorites).subscribe((posts) => {
                this.showRequestInProgress(false);
                this.posts = posts;
            }, err => {
                this.showRequestInProgress(false);
                this.checkForResponseError(err);
            });
        });
    }
    showRequestInProgress(status) {
        this.requestInProgress = status;
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
    checkForResponseError(err) {
        try {
            let errorResponse = JSON.parse(err._body);
            if (errorResponse.code == "rest_post_invalid_page_number")
                return;
            if (errorResponse.error == "session_expired") {
                this.showAlert("Seems your session is expired. Please login again.");
                // this.navCtrl.push(LoginPage)
                // let navigationExtras: NavigationExtras = {
                //   state: {
                //     post: ""
                //   }
                // };
                this.router.navigate(['login']);
            }
            else
                this.showAlert(errorResponse.error);
        }
        catch (error) {
            this.showAlert(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].JSON_ERROR);
        }
    }
    openDetailPage(post) {
        if (post.type == 'tricks') {
            // this.navCtrl.push(TrickPage,{'trick': post,'loadFromServer': true});
            let navigationExtras = {
                state: {
                    trick: post,
                    loadFromServer: true
                }
            };
            this.router.navigate(['trick'], navigationExtras);
        }
        else if (post.type == 'general_knowledge') {
            // this.navCtrl.push(GKPage,{'gk': post,'loadFromServer': true});
            let navigationExtras = {
                state: {
                    gk: post,
                    loadFromServer: true
                }
            };
            this.router.navigate(['gk'], navigationExtras);
        }
        else if (post.type == '11_plus') {
            // this.navCtrl.push(ElPlusPage,{'post': post,'loadFromServer': true});
            let navigationExtras = {
                state: {
                    post: post,
                    loadFromServer: true
                }
            };
            this.router.navigate(['el-plus'], navigationExtras);
        }
        else if (['spanish', 'english', 'french', 'hindi'].indexOf(post.type) >= 0) {
            // this.navCtrl.push(LangPage,{'post': post,'loadFromServer': true});
            let navigationExtras = {
                state: {
                    post: post,
                    loadFromServer: true
                }
            };
            this.router.navigate(['lang'], navigationExtras);
        }
    }
    searchTrick() {
        if (this.searchKeyword) {
            if (this.searchKeyword.length < 3)
                return false;
            this.service.searchPosts(this.searchKeyword).subscribe(posts => {
                this.postSuggestions = posts;
            }, err => this.checkForResponseError(err));
        }
    }
    onInput(event) {
        this.searchTrick();
    }
    doInfinite(infiniteScroll) {
        let page = Math.ceil(this.posts.length / 5) + 1;
        if (page < 5) {
            this.userService.getUser().then(user => {
                let ids = user.favorites.toString().split(',');
                this.service.getPostsByIds(ids, page).subscribe(tricks => {
                    this.posts = this.posts.concat(tricks);
                    infiniteScroll.target.complete();
                }, err => {
                    infiniteScroll.target.complete();
                    this.checkForResponseError(err);
                });
            });
        }
        else {
            infiniteScroll.target.complete();
        }
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
    removeFavorite(id, itemIndex) {
        this.posts.splice(itemIndex, 1);
        let tmpIndex = this.userFavorites.indexOf(id);
        this.userFavorites.splice(tmpIndex, 1);
        this.updateFavorites();
    }
};
FavoritesPage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FavoritesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favorites',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./favorites.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorites/favorites.page.html")).default,
        providers: [
            src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./favorites.page.scss */ "./src/app/pages/favorites/favorites.page.scss")).default]
    })
], FavoritesPage);



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
//# sourceMappingURL=pages-favorites-favorites-module-es2015.js.map