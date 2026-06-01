(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lang-cat-lang-cat-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lang-cat/lang-cat.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lang-cat/lang-cat.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Languages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n\n<ion-content class=\"trick-content\">\n\n  \n  <div class=\"tricks-level\">     \n    <ion-list>\n      <ion-item lines=\"none\" color=\"none\" (click)=\"openElPlusPage('english','English')\">\n        <ion-label>\n          <div class=\"labelCls\">\n          English\n        </div>\n        </ion-label>\n      </ion-item>\n\n      <ion-item lines=\"none\" color=\"none\" (click)=\"openElPlusPage('french','French')\">\n        <ion-label>\n          <div class=\"labelCls\">\n          French\n          </div>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" color=\"none\" (click)=\"openElPlusPage('spanish','Spanish')\">\n        <ion-label>\n          <div class=\"labelCls\">\n          Spanish\n          </div>\n        </ion-label>\n      </ion-item>\n      <ion-item lines=\"none\" color=\"none\" (click)=\"openElPlusPage('hindi','Hindi')\">\n        <ion-label>\n          <div class=\"labelCls\">\n          Hindi\n          </div>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/lang-cat/lang-cat-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/lang-cat/lang-cat-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LangCatPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangCatPageRoutingModule", function() { return LangCatPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lang_cat_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang-cat.page */ "./src/app/pages/lang-cat/lang-cat.page.ts");




const routes = [
    {
        path: '',
        component: _lang_cat_page__WEBPACK_IMPORTED_MODULE_3__["LangCatPage"]
    }
];
let LangCatPageRoutingModule = class LangCatPageRoutingModule {
};
LangCatPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LangCatPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/lang-cat/lang-cat.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/lang-cat/lang-cat.module.ts ***!
  \***************************************************/
/*! exports provided: LangCatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangCatPageModule", function() { return LangCatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lang_cat_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang-cat-routing.module */ "./src/app/pages/lang-cat/lang-cat-routing.module.ts");
/* harmony import */ var _lang_cat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lang-cat.page */ "./src/app/pages/lang-cat/lang-cat.page.ts");







let LangCatPageModule = class LangCatPageModule {
};
LangCatPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lang_cat_routing_module__WEBPACK_IMPORTED_MODULE_5__["LangCatPageRoutingModule"]
        ],
        declarations: [_lang_cat_page__WEBPACK_IMPORTED_MODULE_6__["LangCatPage"]]
    })
], LangCatPageModule);



/***/ }),

/***/ "./src/app/pages/lang-cat/lang-cat.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/lang-cat/lang-cat.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: #2788E8;\n}\n\nion-title {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\n.trick-content .single-trick {\n  position: relative;\n}\n\n.tricks-level ion-item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100px;\n  -webkit-margin-after: 15px;\n          margin-block-end: 15px;\n  text-align: center;\n}\n\nion-item:nth-child(odd) {\n  background-color: #0088e8;\n}\n\nion-item:nth-child(even) {\n  background-color: #EC407A;\n}\n\nion-label {\n  color: white;\n}\n\n.labelCls {\n  color: white;\n}\n\n.tricks-level {\n  width: 100%;\n  padding: 20px;\n}\n\n.item-content {\n  --background-color:red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZy1jYXQvbGFuZy1jYXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFJSTtFQUNRLGtCQUFBO0FBRFo7O0FBZ0ZBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO1VBQUEsc0JBQUE7RUFDQSxrQkFBQTtBQTdFSjs7QUE0RkM7RUFDRyx5QkFBQTtBQXpGSjs7QUE0RkM7RUFDRyx5QkFBQTtBQXpGSjs7QUE0R0E7RUFDSSxZQUFBO0FBekdKOztBQTRHQTtFQUNJLFlBQUE7QUF6R0o7O0FBZ0lBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUE3SEo7O0FBcUlBO0VBQ0ksc0JBQUE7QUFsSUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sYW5nLWNhdC9sYW5nLWNhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc4OEU4O1xuICB9XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbntcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuLnRyaWNrLWNvbnRlbnQgIHtcbiAgICAuc2luZ2xlLXRyaWNrIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIC8vICBiYWNrZ3JvdW5kOiAjZmNmY2ZjO1xuICAgICAgICAgICAgLy8gLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggI0ZGRjtcbiAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCAjZWVlO1xuICAgICAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvLyAudHJpY2stZGV0YWlscyB7XG4gICAgICAgIC8vICAgICBwYWRkaW5nOiAwIDEwcHggMTBweDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBoMnsgXG4gICAgICAgIC8vICAgICBwYWRkaW5nOiA1cHggMjVweCA1cHggMTBweDtcbiAgICAgICAgLy8gICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODhlODtcbiAgICAgICAgLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgLy8gICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIC8vICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgLy8gLmZhdm9yaXRle1xuICAgICAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAvLyAgICAgcmlnaHQ6IDVweDtcbiAgICAgICAgLy8gICAgIHRvcDogOHB4O1xuICAgICAgICAvLyAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG5cbiAgICAgICAgLy8gICAgIGlvbi1pY29uIHsgY29sb3I6ICNGRkY7fVxuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC8vIC5wbGF5Z3JvdW5kIGlvbi1jb2wgPiBkaXZ7XG4gICAgLy8gICAgIHBhZGRpbmc6IDEzcHggOHB4O1xuICAgIC8vICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyB9XG4gICAgLy8gLnBsYXlncm91bmQgLm9wZXJhbmR7XG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyAgICAgbWF4LXdpZHRoOiAzMHB4O1xuICAgIC8vIH1cbiAgICAvLyAucGxheWdyb3VuZCBpb24taW5wdXR7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgLy8gICAgIGJveC1zaGFkb3c6IDBweCAwcHggMXB4IDBweCAjZWVlO1xuICAgIC8vIH1cbiAgICAvLyAucGxheWdyb3VuZC10aXRsZXsgbWFyZ2luOiAzMHB4IDAgMTBweDsgfVxuICAgIC8vIC5wbGF5Z3JvdW5kLXRpdGxlIGgze1xuICAgIC8vICAgICBtYXJnaW46IDA7XG4gICAgLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAvLyAgICAgcGFkZGluZzogMCA1cHg7XG4gICAgLy8gfVxuICAgIC8vIC5wbGF5Z3JvdW5kIC5idXR0b24tY29udGFpbmVyeyB0ZXh0LWFsaWduOiBjZW50ZXI7IG1hcmdpbjogMjBweCBhdXRvfVxuICAgIC8vIC5wbGF5Z3JvdW5kIC5yZXN1bHR7IHRleHQtYWxpZ246IGNlbnRlcjt9XG5cbiAgICAvLyAudHJpY2tzLWxldmVsIGlvbi1pdGVte1xuICAgIC8vICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAvLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgLy8gICAgIG1hcmdpbi1ibG9jay1lbmQ6IDE1cHg7XG4gICAgLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyAgICAgY29sb3I6ICNmZmY7XG4gICAgLy8gfVxuICAgIC8vIC50cmlja3MtbGV2ZWwgaW9uLWl0ZW06bnRoLWNoaWxkKG9kZCl7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg4ZTg7XG4gICAgLy8gICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gICAgLy8gfVxuICAgIC8vIC50cmlja3MtbGV2ZWwgaW9uLWl0ZW06bnRoLWNoaWxkKGV2ZW4pe1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUM0MDdBO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIC8vIH1cbiAgICAvLyAudHJpY2tzLWxldmVsIGlvbi1sYWJlbHtcbiAgICAvLyAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIC8vICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAvLyB9XG4gICAgXG59XG5cblxuLy8gLnRyaWNrcy1sZXZlbCBpb24tbGFiZWx7XG4vLyAgICAgZm9udC1zaXplOiAyMHB4O1xuLy8gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuLy8gfVxuXG5cbi50cmlja3MtbGV2ZWwgaW9uLWl0ZW17XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIC8vIGNvbG9yOiAjZmZmO1xufVxuXG5cbi8vIC50cmlja3MtbGV2ZWwgaW9uLWl0ZW06bnRoLWNoaWxkKG9kZCl7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODhlODtcbi8vICAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuLy8gfVxuLy8gLnRyaWNrcy1sZXZlbCBpb24taXRlbTpudGgtY2hpbGQoZXZlbil7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VDNDA3QTtcbi8vICAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuLy8gfVxuXG4gaW9uLWl0ZW06bnRoLWNoaWxkKG9kZCl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwODhlODtcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xufVxuIGlvbi1pdGVtOm50aC1jaGlsZChldmVuKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUM0MDdBO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG5cbi8vIC50ZXN0e1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDg4ZTg7XG4vLyB9XG5cbi8vIC5pdGVtLW5hdGl2ZXtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGU4O1xuLy8gfVxuXG4vLyBpb24taXRlbXtcbi8vICAgICBwYWRkaW5nOiAxMHB4O1xuLy8gICAgIC8vIHBhZGRpbmctbGVmdDogNTAlO1xuLy8gICAgIC8vIHBhZGRpbmctcmlnaHQ6IDEwMCU7XG4vLyAgICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyB9XG5cbmlvbi1sYWJlbHtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuLmxhYmVsQ2xze1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4vLyAudHJpY2stY29udGVudHtcbi8vICAgICBwYWRkaW5nLWxlZnQ6MTBweDtcbi8vIH1cblxuLy8gLnNjcm9sbC1jb250ZW50IHtcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIHRvcDogMDtcbi8vICAgICBib3R0b206IDA7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIHotaW5kZXg6IDE7XG4vLyAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuLy8gICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbi8vICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4vLyAgICAgd2lsbC1jaGFuZ2U6IHNjcm9sbC1wb3NpdGlvbjtcbi8vICAgICBjb250YWluOiBzaXplIHN0eWxlIGxheW91dDtcbi8vICAgICBwYWRkaW5nOjEwcHg7XG4vLyB9XG5cbi50cmlja3MtbGV2ZWx7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzoyMHB4O1xufVxuXG4vLyAgaW9uLWxpc3QgaW9uLWl0ZW0ge1xuLy8gICAgIC0taW9uLWJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcbi8vICAgICAtLWlvbi1iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuLy8gfVxuXG4uaXRlbS1jb250ZW50e1xuICAgIC0tYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gICAgLy8gZGlzcGxheTogaW5saW5lO1xufVxuXG4vLyAudHJpY2stdGl0bGV7XG4vLyAgICAgY29sb3I6ICNGRkY7XG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuLy8gICAgIGhlaWdodDogNzBweDtcbi8vICAgICB3aWR0aDogOTAlO1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuLy8gICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4vLyAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuLy8gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbi8vICAgICBvdmVyZmxvdzogaGlkZGVuO1xuLy8gICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuLy8gICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/pages/lang-cat/lang-cat.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/lang-cat/lang-cat.page.ts ***!
  \*************************************************/
/*! exports provided: LangCatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangCatPage", function() { return LangCatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let LangCatPage = class LangCatPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    openElPlusPage(postType, heading) {
        // this.navCtrl.push(LangListPage,{type:postType,heading:heading});
        let navigationExtras = {
            state: {
                type: postType,
                heading: heading
            }
        };
        this.router.navigate(['lang-list'], navigationExtras);
    }
};
LangCatPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LangCatPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lang-cat',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lang-cat.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lang-cat/lang-cat.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lang-cat.page.scss */ "./src/app/pages/lang-cat/lang-cat.page.scss")).default]
    })
], LangCatPage);



/***/ })

}]);
//# sourceMappingURL=pages-lang-cat-lang-cat-module-es2015.js.map