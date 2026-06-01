(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-trick-trick-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trick/trick.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trick/trick.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">    \n    <ion-back-button></ion-back-button>\n    <ion-title *ngIf=\"trick.title.rendered\" [innerHTML]=\"trick.title.rendered\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"trick-content\">\n\n  <div *ngIf=\"trick\" class=\"single-trick\">\n    <h2 [innerHTML]=\"trick.title.rendered\"></h2>\n    <div class=\"trick-details\">  \n      <div *ngIf=\"userFavorites\" class=\"favorite\">\n          <div *ngIf=\"userFavorites.indexOf(trick.id)==-1\" (click)=\"addFavorite(trick.id)\">\n            <!-- <ion-icon ios=\"ios-heart-outline\" md=\"md-heart-outline\"></ion-icon> -->\n            <ion-icon ios=\"heart-outline\" md=\"heart-outline\"></ion-icon>\n          </div>   \n          <div *ngIf=\"userFavorites.indexOf(trick.id)>=0\" (click)=\"removeFavorite(trick.id)\">\n            <!-- <ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon> -->\n            <ion-icon ios=\"heart\" md=\"heart\"></ion-icon>\n          </div>     \n      </div>\n      <div></div>\n      <div *ngIf=\"trick.cover_image!=''\">\n              <img [src]=\"trick.cover_image\" #coverImage (tap)=\"showCover(coverImage)\"/>\n          \n      </div>\n      \n      <div [innerHTML]=\"trick.content.rendered\"></div>\n\n      <div *ngIf=\"trick.expression\">\n        <div class=\"playground-title\"><h3>Excersie Here</h3></div>\n        <form  [formGroup]=\"playForm\" (ngSubmit)=\"calculate(playForm.valid)\" class=\"playground\">\n          <div class=\"row\">\n            <ion-col>\n              <ion-input type=\"number\" placeholder=\"First Number\" [ngClass]=\"{'has-error':!playForm.controls['firstNumber'].valid}\"  formControlName=\"firstNumber\"></ion-input>\n            </ion-col>\n            <ion-col class=\"operand\">\n              <div>{{trick.expression}}</div>\n            </ion-col>\n            <ion-col>\n              <ion-input type=\"number\" placeholder=\"Second Number\" [ngClass]=\"{'has-error':!playForm.controls['secondNumber'].valid}\"  formControlName=\"secondNumber\"></ion-input>\n            </ion-col>\n          </div>\n          <div class=\"button-container\">\n            <button type=\"submit\" [disabled]=\"!playForm.valid\" ion-button>Show Result</button>\n          </div>\n          <div *ngIf=\"result\" class=\"result\"><b>Answer:{{result}}</b></div>\n        </form>  \n      </div>\n\n       <div *ngIf=\"trick.video\" class=\"video-container\" >\n        \n          <iframe width=\"100%\" [src]=\"getVideoURL()\" frameborder=\"0\" allowfullscreen></iframe>\n          <div class=\"video-fix\"></div>  \n        </div>\n\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/trick/trick-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/trick/trick-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TrickPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrickPageRoutingModule", function() { return TrickPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _trick_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trick.page */ "./src/app/pages/trick/trick.page.ts");




const routes = [
    {
        path: '',
        component: _trick_page__WEBPACK_IMPORTED_MODULE_3__["TrickPage"]
    }
];
let TrickPageRoutingModule = class TrickPageRoutingModule {
};
TrickPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrickPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/trick/trick.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/trick/trick.module.ts ***!
  \*********************************************/
/*! exports provided: TrickPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrickPageModule", function() { return TrickPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _trick_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trick-routing.module */ "./src/app/pages/trick/trick-routing.module.ts");
/* harmony import */ var _trick_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trick.page */ "./src/app/pages/trick/trick.page.ts");







let TrickPageModule = class TrickPageModule {
};
TrickPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _trick_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrickPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_trick_page__WEBPACK_IMPORTED_MODULE_6__["TrickPage"]]
    })
], TrickPageModule);



/***/ }),

/***/ "./src/app/pages/trick/trick.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/trick/trick.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: #2788E8;\n}\n\nion-title {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\n.single-trick {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.favorite {\n  position: absolute;\n  right: 25px;\n  top: 21px;\n  z-index: 0;\n  color: #FFF;\n  font-size: 25px;\n}\n\n.trick-content .single-trick h2 {\n  padding: 5px 25px 5px 10px;\n  color: #FFF;\n  background-color: #0088e8;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: normal;\n}\n\nion-back-button {\n  float: left;\n  color: #FFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdHJpY2svdHJpY2sucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFRTtFQUNFLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUVFLGtCQUFBO0VBQ0UsbUJBQUE7QUFBSjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FBQUYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90cmljay90cmljay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc4OEU4O1xuICB9XG5cbiAgaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1tZW51LWJ1dHRvbntcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zaW5nbGUtdHJpY2t7XG4gIC8vIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuXG4uZmF2b3JpdGV7IFxuICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICByaWdodDogMjVweDsgXG4gIHRvcDogMjFweDsgXG4gIHotaW5kZXg6IDA7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi50cmljay1jb250ZW50IC5zaW5nbGUtdHJpY2sgaDIge1xuICBwYWRkaW5nOiA1cHggMjVweCA1cHggMTBweDtcbiAgY29sb3I6ICNGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDg4ZTg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuaW9uLWJhY2stYnV0dG9ue1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6ICNGRkY7ICBcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/trick/trick.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/trick/trick.page.ts ***!
  \*******************************************/
/*! exports provided: TrickPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrickPage", function() { return TrickPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/__ivy_ngcc__/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/app.constants */ "./src/app/shared/app.constants.ts");










let TrickPage = class TrickPage {
    constructor(postService, fb, activatedRoute, sanitizer, userService, alertCtrl, modalController, router) {
        this.activatedRoute = activatedRoute;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.router = router;
        this.userFavorites = [];
        this.result = null;
        if (this.router.getCurrentNavigation().extras.state) {
            this.trick = this.router.getCurrentNavigation().extras.state.trick;
        }
        let loadFromServer = this.activatedRoute.snapshot.params['loadFromServer'];
        if (loadFromServer) {
            postService.getPost(this.trick.id).subscribe(trick => {
                this.trick = trick;
            });
        }
        this.playForm = fb.group({
            firstNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            secondNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    getVideoURL() {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.trick.video + "?ecver=1");
    }
    ngOnInit() {
        this.userService.getUser().then(user => {
            this.userFavorites = user.favorites.toString().split(',').map(Number);
        });
    }
    addFavorite(id) {
        this.userFavorites.push(id);
        this.updateFavorites();
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
                // this.navCtrl.push(LoginPage);
                this.userService.logout();
            }
            else
                this.showAlert(errorResponse.error);
        }
        catch (error) {
            this.showAlert(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_9__["AppConstants"].JSON_ERROR);
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
    removeFavorite(id) {
        let index = this.userFavorites.indexOf(id);
        if (index >= 0) {
            this.userFavorites.splice(index, 1);
            this.updateFavorites();
        }
    }
    calculate(valid) {
        if (!valid)
            return;
        let firstNumber = parseInt(this.playForm.controls['firstNumber'].value);
        let secondNumber = parseInt(this.playForm.controls['secondNumber'].value);
        if (firstNumber === NaN || secondNumber === NaN) {
            this.result = 'Invalid Input';
            return;
        }
        this.result = eval(firstNumber + this.trick.expression + secondNumber);
    }
    showCover(coverImage) {
        // const imageViewer = this.imageViewerCtrl.create(coverImage);
        // imageViewer.present();
        this.openViewer(coverImage);
    }
    openViewer(coverImage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_6__["ViewerModalComponent"],
                componentProps: {
                    // src: "./assets/img/demo.jpg"
                    src: coverImage
                },
                cssClass: 'ion-img-viewer',
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
};
TrickPage.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TrickPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trick',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./trick.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/trick/trick.page.html")).default,
        providers: [
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            src_app_services_post_service__WEBPACK_IMPORTED_MODULE_7__["PostService"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./trick.page.scss */ "./src/app/pages/trick/trick.page.scss")).default]
    })
], TrickPage);



/***/ })

}]);
//# sourceMappingURL=pages-trick-trick-module-es2015.js.map