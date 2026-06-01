(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"new-background-color\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<div *ngIf=\"requestInProgress\" class=\"preloader-wrap\">\n  <div  class=\"preloader\"></div>\n</div>\n\n<ion-content>\n  <!-- <div class=\"profile-box\"> -->\n    <div>\n      <form [formGroup]=\"profileForm\" (ngSubmit)=\"update(profileForm.valid)\">\n        <ion-row>\n          <ion-col>\n            <ion-list inset>\n\n              <ion-item>\n                <ion-label color=\"primary\" floating>\n                  <ion-icon name=\"person\"></ion-icon>\n                  First Name\n                </ion-label>\n                <ion-input type=\"text\"  formControlName=\"firstname\"  maxlength=\"10\"></ion-input>\n             </ion-item>\n\n             <ion-item>\n              <ion-label color=\"primary\" floating>\n                <ion-icon name=\"person\"></ion-icon>\n                Last Name\n              </ion-label>\n              <ion-input type=\"text\"  formControlName=\"lastname\" maxlength=\"15\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label color=\"primary\" floating>\n              <ion-icon name=\"mail\"></ion-icon>\n              Email\n            </ion-label>\n            <ion-input type=\"text\" [ngClass]=\"{'has-error':!profileForm.controls['email'].valid}\"  formControlName=\"email\"></ion-input>\n            <div *ngIf=\"profileForm.controls['email'].hasError('email') && profileForm.controls['email'].touched\" class=\"alert alert-danger\">Invalid email.</div>\n\n          </ion-item>\n\n          <ion-item>\n            <ion-label color=\"primary\" floating>\n              <ion-icon name=\"phone-portrait\"></ion-icon>\n              Mobile\n            </ion-label>\n            <ion-input type=\"text\"  formControlName=\"mobile\"></ion-input>\n          </ion-item>\n\n          <!-- <button type=\"submit\" [disabled]=\"!profileForm.valid\" ion-button>Update</button> -->\n\n          <ion-button color=\"secondary\" expand=\"block\" type=\"submit\" \n          [disabled]=\"!profileForm.valid\">Update</ion-button>\n            </ion-list>\n          </ion-col>\n        </ion-row>\n      </form>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");








let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]],
        providers: [
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
        ]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: #2788E8;\n}\n\nion-title {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xuICAgIC0tYmFja2dyb3VuZDogIzI3ODhFODtcbiAgfVxuXG4gIGlvbi10aXRsZSB7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tbWVudS1idXR0b257XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/app.constants */ "./src/app/shared/app.constants.ts");
/* harmony import */ var src_app_shared_validators_email_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/validators/email.validator */ "./src/app/shared/validators/email.validator.ts");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







 // This line added manually.

let ProfilePage = class ProfilePage {
    // constructor(private alertCtrl: AlertController,private storage: Storage ,public navCtrl: NavController, public navParams: NavParams,private userService: UserService,private fb: FormBuilder,public viewCtrl: ViewController,public appCtrl: App) {
    // }
    // constructor( public navParams: NavParams,public viewCtrl: ViewController,public appCtrl: App) {
    // }
    constructor(fb, userService, alertCtrl, storage, router, activatedRoute) {
        this.fb = fb;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.requestInProgress = false;
        this.countries = [];
    }
    ngOnInit() {
        this.countries = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].countries;
        this.profileForm = this.fb.group({
            firstname: [''],
            lastname: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([src_app_shared_validators_email_validator__WEBPACK_IMPORTED_MODULE_6__["ValidateEmail"]])],
            mobile: [''],
        });
        this.userService.getUser().then(user => {
            this.initializeData(user);
        });
    }
    initializeData(user) {
        // console.log(user);
        this.profileForm.controls.firstname.setValue(user.firstname);
        this.profileForm.controls.lastname.setValue(user.lastname);
        this.profileForm.controls.email.setValue(user.email);
        this.profileForm.controls.mobile.setValue(user.mobile);
        //this.profileForm.controls.country.setValue(user.countryCode);
    }
    showAlert(msg, title = "Error", error = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: title,
                message: msg,
                buttons: [
                    {
                        text: 'Dismiss',
                        role: 'dismiss',
                        handler: () => {
                            if (!error) {
                                // this.navCtrl.setRoot(HomePage);
                                this.router.navigate(['home']);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    checkForResponseError(err) {
        try {
            // let errorResponse= JSON.parse(err._body);
            let errorResponse = err;
            if (errorResponse.error.error == "session_expired") {
                this.showAlert("Seems your session is expired. Please login again.");
                // this.navCtrl.push(LoginPage)
                this.router.navigate(['login']);
                this.userService.logout();
            }
            else
                this.showAlert(errorResponse.error.error, 'Error', true);
        }
        catch (error) {
            this.showAlert(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["AppConstants"].JSON_ERROR, 'Error', true);
        }
    }
    showRequestInProgress(status) {
        this.requestInProgress = status;
    }
    update(valid) {
        if (!valid)
            return;
        this.showRequestInProgress(true);
        this.storage.get("authCookie").then(val => {
            this.userService.updateUser(this.profileForm.value, val).subscribe((data) => {
                this.showRequestInProgress(false);
                if (data.status == "ok") {
                    this.userService.saveUser(data.user);
                    this.showAlert("Profile updated successfully", "Profile Update");
                }
            }, err => { this.showRequestInProgress(false); this.checkForResponseError(err); });
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }
];
ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        providers: [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    })
], ProfilePage);



/***/ }),

/***/ "./src/app/shared/validators/email.validator.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/validators/email.validator.ts ***!
  \******************************************************/
/*! exports provided: ValidateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateEmail", function() { return ValidateEmail; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

function ValidateEmail(control) {
    const emailError = _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].email(control);
    if (control.value && emailError) {
        return { 'email': {} };
    }
    return null;
}


/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map