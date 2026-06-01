(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lang-lang-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lang/lang.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lang/lang.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle class=\"\">\n      <ion-icon name=\"menu\"></ion-icon>\n    </button>\n    <ion-title *ngIf=\"lang.title.rendered\" [innerHTML]=\"lang.title.rendered\"></ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-header>\n  <ion-toolbar class=\"new-background-color\">    \n    <ion-back-button></ion-back-button>\n    <ion-title *ngIf=\"lang.title.rendered\" [innerHTML]=\"lang.title.rendered\"></ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class=\"trick-content\">\n  <div *ngIf=\"lang\" class=\"single-trick\">\n    <h2 [innerHTML]=\"lang.title.rendered\"></h2>\n    <div class=\"trick-details\">  \n        <div *ngIf=\"userFavorites\" class=\"favorite\">\n            <div *ngIf=\"userFavorites.indexOf(lang.id)==-1\" (click)=\"addFavorite(lang.id)\">\n              <!-- <ion-icon ios=\"ios-heart-outline\" md=\"md-heart-outline\"></ion-icon> -->\n              <ion-icon ios=\"heart-outline\" md=\"heart-outline\"></ion-icon>\n            </div>   \n            <div *ngIf=\"userFavorites.indexOf(lang.id)>=0\" (click)=\"removeFavorite(lang.id)\">\n              <!-- <ion-icon ios=\"ios-heart\" md=\"md-heart\"></ion-icon> -->\n              <ion-icon ios=\"heart\" md=\"heart\"></ion-icon>\n            </div>     \n      </div>\n      <div></div>\n      \n      \n      <div [innerHTML]=\"lang.content.rendered\"></div>\n      \n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/lang/lang-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/lang/lang-routing.module.ts ***!
  \***************************************************/
/*! exports provided: LangPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangPageRoutingModule", function() { return LangPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lang_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lang.page */ "./src/app/pages/lang/lang.page.ts");




const routes = [
    {
        path: '',
        component: _lang_page__WEBPACK_IMPORTED_MODULE_3__["LangPage"]
    }
];
let LangPageRoutingModule = class LangPageRoutingModule {
};
LangPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LangPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/lang/lang.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/lang/lang.module.ts ***!
  \*******************************************/
/*! exports provided: LangPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangPageModule", function() { return LangPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lang_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lang-routing.module */ "./src/app/pages/lang/lang-routing.module.ts");
/* harmony import */ var _lang_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lang.page */ "./src/app/pages/lang/lang.page.ts");







let LangPageModule = class LangPageModule {
};
LangPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lang_routing_module__WEBPACK_IMPORTED_MODULE_5__["LangPageRoutingModule"]
        ],
        declarations: [_lang_page__WEBPACK_IMPORTED_MODULE_6__["LangPage"]]
    })
], LangPageModule);



/***/ }),

/***/ "./src/app/pages/lang/lang.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/lang/lang.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: #2788E8;\n}\n\nion-title {\n  color: white;\n}\n\nion-menu-button {\n  color: white;\n}\n\nion-back-button {\n  float: left;\n  color: #FFF;\n}\n\n.single-trick {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.favorite {\n  position: absolute;\n  right: 25px;\n  top: 21px;\n  z-index: 0;\n  color: #FFF;\n  font-size: 25px;\n}\n\n.trick-content .single-trick h2 {\n  padding: 5px 25px 5px 10px;\n  color: #FFF;\n  background-color: #0088e8;\n  font-size: 16px;\n  line-height: 1.5;\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGFuZy9sYW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUU7RUFDRSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBRUUsa0JBQUE7RUFDRSxtQkFBQTtBQUFKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsMEJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUFGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGFuZy9sYW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvcntcbiAgICAtLWJhY2tncm91bmQ6ICMyNzg4RTg7XG4gIH1cblxuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLW1lbnUtYnV0dG9ue1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWJhY2stYnV0dG9ue1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGNvbG9yOiAjRkZGOyAgXG4gIH1cblxuLnNpbmdsZS10cmlja3tcbiAgLy8gcGFkZGluZzogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG59XG5cbi5mYXZvcml0ZXsgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTsgXG4gIHJpZ2h0OiAyNXB4OyBcbiAgdG9wOiAyMXB4OyBcbiAgei1pbmRleDogMDtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnRyaWNrLWNvbnRlbnQgLnNpbmdsZS10cmljayBoMiB7XG4gIHBhZGRpbmc6IDVweCAyNXB4IDVweCAxMHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwODhlODtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/lang/lang.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/lang/lang.page.ts ***!
  \*****************************************/
/*! exports provided: LangPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangPage", function() { return LangPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/app.constants */ "./src/app/shared/app.constants.ts");







let LangPage = class LangPage {
    constructor(postService, activatedRoute, router, userService, alertCtrl) {
        // this.lang= this.navParams.get('post');
        // let loadFromServer= this.navParams.get('loadFromServer');
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.userFavorites = [];
        this.result = null;
        this.showAnswer = false;
        let loadFromServer = this.activatedRoute.snapshot.params['loadFromServer'];
        if (this.router.getCurrentNavigation().extras.state) {
            this.lang = this.router.getCurrentNavigation().extras.state.post;
        }
        if (loadFromServer) {
            postService.getPost(this.lang.id, 'lang').subscribe(lang => {
                this.lang = lang;
            });
        }
    }
    ngOnInit() {
        this.userService.getUser().then(user => {
            this.userFavorites = user.favorites.toString().split(',').map(Number);
        });
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
            this.showAlert(src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].JSON_ERROR);
        }
    }
    getAnswer() {
        this.showAnswer = true;
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
    addFavorite(id) {
        this.userFavorites.push(id);
        this.updateFavorites();
    }
};
LangPage.ctorParameters = () => [
    { type: src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
LangPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lang',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lang.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lang/lang.page.html")).default,
        providers: [
            src_app_services_post_service__WEBPACK_IMPORTED_MODULE_4__["PostService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
        ],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lang.page.scss */ "./src/app/pages/lang/lang.page.scss")).default]
    })
], LangPage);



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
//# sourceMappingURL=pages-lang-lang-module-es2015.js.map