(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js ***!
  \***********************************************************************/
/*! exports provided: Facebook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facebook", function() { return Facebook; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var Facebook = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Facebook, _super);
    function Facebook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.EVENTS = {
            EVENT_NAME_ACTIVATED_APP: 'fb_mobile_activate_app',
            EVENT_NAME_DEACTIVATED_APP: 'fb_mobile_deactivate_app',
            EVENT_NAME_SESSION_INTERRUPTIONS: 'fb_mobile_app_interruptions',
            EVENT_NAME_TIME_BETWEEN_SESSIONS: 'fb_mobile_time_between_sessions',
            EVENT_NAME_COMPLETED_REGISTRATION: 'fb_mobile_complete_registration',
            EVENT_NAME_VIEWED_CONTENT: 'fb_mobile_content_view',
            EVENT_NAME_SEARCHED: 'fb_mobile_search',
            EVENT_NAME_RATED: 'fb_mobile_rate',
            EVENT_NAME_COMPLETED_TUTORIAL: 'fb_mobile_tutorial_completion',
            EVENT_NAME_PUSH_TOKEN_OBTAINED: 'fb_mobile_obtain_push_token',
            EVENT_NAME_ADDED_TO_CART: 'fb_mobile_add_to_cart',
            EVENT_NAME_ADDED_TO_WISHLIST: 'fb_mobile_add_to_wishlist',
            EVENT_NAME_INITIATED_CHECKOUT: 'fb_mobile_initiated_checkout',
            EVENT_NAME_ADDED_PAYMENT_INFO: 'fb_mobile_add_payment_info',
            EVENT_NAME_PURCHASED: 'fb_mobile_purchase',
            EVENT_NAME_ACHIEVED_LEVEL: 'fb_mobile_level_achieved',
            EVENT_NAME_UNLOCKED_ACHIEVEMENT: 'fb_mobile_achievement_unlocked',
            EVENT_NAME_SPENT_CREDITS: 'fb_mobile_spent_credits',
            EVENT_PARAM_CURRENCY: 'fb_currency',
            EVENT_PARAM_REGISTRATION_METHOD: 'fb_registration_method',
            EVENT_PARAM_CONTENT_TYPE: 'fb_content_type',
            EVENT_PARAM_CONTENT_ID: 'fb_content_id',
            EVENT_PARAM_SEARCH_STRING: 'fb_search_string',
            EVENT_PARAM_SUCCESS: 'fb_success',
            EVENT_PARAM_MAX_RATING_VALUE: 'fb_max_rating_value',
            EVENT_PARAM_PAYMENT_INFO_AVAILABLE: 'fb_payment_info_available',
            EVENT_PARAM_NUM_ITEMS: 'fb_num_items',
            EVENT_PARAM_LEVEL: 'fb_level',
            EVENT_PARAM_DESCRIPTION: 'fb_description',
            EVENT_PARAM_SOURCE_APPLICATION: 'fb_mobile_launch_source',
            EVENT_PARAM_VALUE_YES: '1',
            EVENT_PARAM_VALUE_NO: '0',
        };
        return _this;
    }
    Facebook.prototype.login = function (permissions) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "login", {}, arguments); };
    Facebook.prototype.logout = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logout", {}, arguments); };
    Facebook.prototype.getLoginStatus = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getLoginStatus", {}, arguments); };
    Facebook.prototype.getAccessToken = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getAccessToken", {}, arguments); };
    Facebook.prototype.showDialog = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "showDialog", {}, arguments); };
    Facebook.prototype.api = function (requestPath, permissions, httpMethod) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "api", {}, arguments); };
    Facebook.prototype.logEvent = function (name, params, valueToSum) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logEvent", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    Facebook.prototype.setAutoLogAppEventsEnabled = function (enabled) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "setAutoLogAppEventsEnabled", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    Facebook.prototype.logPurchase = function (value, currency, params) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logPurchase", {}, arguments); };
    Facebook.prototype.getDeferredApplink = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getDeferredApplink", {}, arguments); };
    Facebook.prototype.activateApp = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "activateApp", {}, arguments); };
    Facebook.pluginName = "Facebook";
    Facebook.plugin = "cordova-plugin-facebook-connect";
    Facebook.pluginRef = "facebookConnectPlugin";
    Facebook.repo = "https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect";
    Facebook.install = "ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID=\"123456789\" --variable APP_NAME=\"myApplication\"";
    Facebook.installVariables = ["APP_ID", "APP_NAME"];
    Facebook.platforms = ["Android", "iOS", "Browser"];
Facebook.ɵfac = function Facebook_Factory(t) { return ɵFacebook_BaseFactory(t || Facebook); };
Facebook.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Facebook, factory: function (t) { return Facebook.ɵfac(t); } });
var ɵFacebook_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Facebook);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Facebook, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return Facebook;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZmFjZWJvb2svbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBRVEsSUFrSHNCLDRCQUFpQjtBQUFDO0FBRXJDO0FBQ3NCLFFBRi9CLFlBQU0sR0FBRztBQUNYLFlBQUksd0JBQXdCLEVBQUUsd0JBQXdCO0FBQ3RELFlBQUksMEJBQTBCLEVBQUUsMEJBQTBCO0FBQzFELFlBQUksZ0NBQWdDLEVBQUUsNkJBQTZCO0FBQ25FLFlBQUksZ0NBQWdDLEVBQUUsaUNBQWlDO0FBQ3ZFLFlBQUksaUNBQWlDLEVBQUUsaUNBQWlDO0FBQ3hFLFlBQUkseUJBQXlCLEVBQUUsd0JBQXdCO0FBQ3ZELFlBQUksbUJBQW1CLEVBQUUsa0JBQWtCO0FBQzNDLFlBQUksZ0JBQWdCLEVBQUUsZ0JBQWdCO0FBQ3RDLFlBQUksNkJBQTZCLEVBQUUsK0JBQStCO0FBQ2xFLFlBQUksOEJBQThCLEVBQUUsNkJBQTZCO0FBQ2pFLFlBQUksd0JBQXdCLEVBQUUsdUJBQXVCO0FBQ3JELFlBQUksNEJBQTRCLEVBQUUsMkJBQTJCO0FBQzdELFlBQUksNkJBQTZCLEVBQUUsOEJBQThCO0FBQ2pFLFlBQUksNkJBQTZCLEVBQUUsNEJBQTRCO0FBQy9ELFlBQUksb0JBQW9CLEVBQUUsb0JBQW9CO0FBQzlDLFlBQUkseUJBQXlCLEVBQUUsMEJBQTBCO0FBQ3pELFlBQUksK0JBQStCLEVBQUUsZ0NBQWdDO0FBQ3JFLFlBQUksd0JBQXdCLEVBQUUseUJBQXlCO0FBQ3ZELFlBQUksb0JBQW9CLEVBQUUsYUFBYTtBQUN2QyxZQUFJLCtCQUErQixFQUFFLHdCQUF3QjtBQUM3RCxZQUFJLHdCQUF3QixFQUFFLGlCQUFpQjtBQUMvQyxZQUFJLHNCQUFzQixFQUFFLGVBQWU7QUFDM0MsWUFBSSx5QkFBeUIsRUFBRSxrQkFBa0I7QUFDakQsWUFBSSxtQkFBbUIsRUFBRSxZQUFZO0FBQ3JDLFlBQUksNEJBQTRCLEVBQUUscUJBQXFCO0FBQ3ZELFlBQUksa0NBQWtDLEVBQUUsMkJBQTJCO0FBQ25FLFlBQUkscUJBQXFCLEVBQUUsY0FBYztBQUN6QyxZQUFJLGlCQUFpQixFQUFFLFVBQVU7QUFDakMsWUFBSSx1QkFBdUIsRUFBRSxnQkFBZ0I7QUFDN0MsWUFBSSw4QkFBOEIsRUFBRSx5QkFBeUI7QUFDN0QsWUFBSSxxQkFBcUIsRUFBRSxHQUFHO0FBQzlCLFlBQUksb0JBQW9CLEVBQUUsR0FBRztBQUM3QixTQUFHLENBQUM7QUFDSjtBQUVlO0FBQU0sSUFxQm5CLHdCQUFLLGFBQUMsV0FBcUI7QUFJN0IsSUFPRSx5QkFBTTtBQUtpQixJQTBCdkIsaUNBQWM7QUFLaUIsSUFLL0IsaUNBQWM7QUFLYyxJQWlCNUIsNkJBQVUsYUFBQyxPQUFZO0FBS1IsSUFjZixzQkFBRyxhQUFDLFdBQW1CLEVBQUUsV0FBcUIsRUFBRSxVQUFtQjtBQUszRCxJQVdSLDJCQUFRLGFBQUMsSUFBWSxFQUFFLE1BQWUsRUFBRSxVQUFtQjtBQUtWLElBUWpELDZDQUEwQixhQUFDLE9BQWdCO0FBS3VCLElBUWxFLDhCQUFXLGFBQUMsS0FBYSxFQUFFLFFBQWdCLEVBQUUsTUFBZTtBQUs1QyxJQUloQixxQ0FBa0I7QUFLYyxJQUloQyw4QkFBVztBQUlzQjtBQUFzQztBQUF5RDtBQUFrRDtBQUEwRztBQUF5SjtBQUF3RDs0Q0F4TjllLFVBQVU7Ozs7OzBCQUNMO0FBQUMsbUJBdEhQO0FBQUUsRUFzSDRCLGlCQUFpQjtBQUM5QyxTQURZLFFBQVE7QUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZhY2Vib29rTG9naW5SZXNwb25zZSB7XG4gIHN0YXR1czogc3RyaW5nO1xuXG4gIGF1dGhSZXNwb25zZToge1xuICAgIHNlc3Npb25fa2V5OiBib29sZWFuO1xuXG4gICAgYWNjZXNzVG9rZW46IHN0cmluZztcblxuICAgIGV4cGlyZXNJbjogbnVtYmVyO1xuXG4gICAgc2lnOiBzdHJpbmc7XG5cbiAgICBzZWNyZXQ6IHN0cmluZztcblxuICAgIHVzZXJJRDogc3RyaW5nO1xuICB9O1xufVxuXG4vKipcbiAqIEBuYW1lIEZhY2Vib29rXG4gKiBAZGVzY3JpcHRpb25cbiAqIFVzZSB0aGUgRmFjZWJvb2sgQ29ubmVjdCBwbHVnaW4gdG8gb2J0YWluIGFjY2VzcyB0byB0aGUgbmF0aXZlIEZCIGFwcGxpY2F0aW9uIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3RgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRmFjZWJvb2sgQ29ubmVjdF0oaHR0cHM6Ly9naXRodWIuY29tL2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QvY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdCkuXG4gKlxuICogIyMjIyBJbnN0YWxsYXRpb25cbiAqXG4gKiAgVG8gdXNlIHRoZSBGQiBwbHVnaW4sIHlvdSBmaXJzdCBoYXZlIHRvIGNyZWF0ZSBhIG5ldyBGYWNlYm9vayBBcHAgaW5zaWRlIG9mIHRoZSBGYWNlYm9vayBkZXZlbG9wZXIgcG9ydGFsIGF0IFtodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcykuXG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC0xXSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzEucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKiBSZXRyaWV2ZSB0aGUgYEFwcCBJRGAgYW5kIGBBcHAgTmFtZWAuXG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC0yXSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzIucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKiBUaGVuIHR5cGUgaW4gdGhlIGZvbGxvd2luZyBjb21tYW5kIGluIHlvdXIgVGVybWluYWwsIHdoZXJlIEFQUF9JRCBhbmQgQVBQX05BTUUgYXJlIHRoZSB2YWx1ZXMgZnJvbSB0aGUgRmFjZWJvb2sgRGV2ZWxvcGVyIHBvcnRhbC5cbiAqXG4gKiBgYGBiYXNoXG4gKiAgaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QgLS12YXJpYWJsZSBBUFBfSUQ9XCIxMjM0NTY3ODlcIiAtLXZhcmlhYmxlIEFQUF9OQU1FPVwibXlBcHBsaWNhdGlvblwiXG4gKiBgYGBcbiAqXG4gKiBBZnRlciwgeW91J2xsIG5lZWQgdG8gYWRkIHRoZSBuYXRpdmUgcGxhdGZvcm1zIHlvdSdsbCBiZSB1c2luZyB0byB5b3VyIGFwcCBpbiB0aGUgRmFjZWJvb2sgRGV2ZWxvcGVyIHBvcnRhbCB1bmRlciB5b3VyIGFwcCdzIFNldHRpbmdzOlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtM10oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay8zLnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICogQ2xpY2sgYCdBZGQgUGxhdGZvcm0nYC5cbiAqXG4gKiBbIVtmYi1nZXRzdGFydGVkLTRdKC9pbWcvZG9jcy9uYXRpdmUvRmFjZWJvb2svNC5wbmcpXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2FwcHMvKVxuICpcbiAqIEF0IHRoaXMgcG9pbnQgeW91J2xsIG5lZWQgdG8gb3BlbiB5b3VyIHByb2plY3QncyBbYGNvbmZpZy54bWxgXShodHRwczovL2NvcmRvdmEuYXBhY2hlLm9yZy9kb2NzL2VuL2xhdGVzdC9jb25maWdfcmVmL2luZGV4Lmh0bWwpIGZpbGUsIGZvdW5kIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB5b3VyIHByb2plY3QuXG4gKlxuICogVGFrZSBub3RlIG9mIHRoZSBgaWRgIGZvciB0aGUgbmV4dCBzdGVwOlxuICogYGBgXG4gKiA8d2lkZ2V0IGlkPVwiY29tLm15Y29tcGFueS50ZXN0YXBwXCIgdmVyc2lvbj1cIjAuMC4xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy9ucy93aWRnZXRzXCIgeG1sbnM6Y2R2PVwiaHR0cDovL2NvcmRvdmEuYXBhY2hlLm9yZy9ucy8xLjBcIj5cbiAqIGBgYFxuICpcbiAqIFlvdSBjYW4gYWxzbyBlZGl0IHRoZSBgaWRgIHRvIHdoYXRldmVyIHlvdSdkIGxpa2UgaXQgdG8gYmUuXG4gKlxuICogIyMjIyBpT1MgSW5zdGFsbFxuICogVW5kZXIgJ0J1bmRsZSBJRCcsIGFkZCB0aGUgYGlkYCBmcm9tIHlvdXIgYGNvbmZpZy54bWxgIGZpbGU6XG4gKlxuICogWyFbZmItZ2V0c3RhcnRlZC01XSgvaW1nL2RvY3MvbmF0aXZlL0ZhY2Vib29rLzUucG5nKV0oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9hcHBzLylcbiAqXG4gKlxuICogIyMjIyBBbmRyb2lkIEluc3RhbGxcbiAqIFVuZGVyICdHb29nbGUgUGxheSBQYWNrYWdlIE5hbWUnLCBhZGQgdGhlIGBpZGAgZnJvbSB5b3VyIGBjb25maWcueG1sYCBmaWxlOlxuICpcbiAqIFshW2ZiLWdldHN0YXJ0ZWQtNl0oL2ltZy9kb2NzL25hdGl2ZS9GYWNlYm9vay82LnBuZyldKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vYXBwcy8pXG4gKlxuICpcbiAqIEFuZCB0aGF0J3MgaXQhIFlvdSBjYW4gbm93IG1ha2UgY2FsbHMgdG8gRmFjZWJvb2sgdXNpbmcgdGhlIHBsdWdpbi5cbiAqXG4gKiAjIyBFdmVudHNcbiAqXG4gKiBBcHAgZXZlbnRzIGFsbG93IHlvdSB0byB1bmRlcnN0YW5kIHRoZSBtYWtldXAgb2YgdXNlcnMgZW5nYWdpbmcgd2l0aCB5b3VyIGFwcCwgbWVhc3VyZSB0aGUgcGVyZm9ybWFuY2Ugb2YgeW91ciBGYWNlYm9vayBtb2JpbGUgYXBwIGFkcywgYW5kIHJlYWNoIHNwZWNpZmljIHNldHMgb2YgeW91ciB1c2VycyB3aXRoIEZhY2Vib29rIG1vYmlsZSBhcHAgYWRzLlxuICpcbiAqIC0gW2lPU10gW2h0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9pb3MvYXBwLWV2ZW50c10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2lvcy9hcHAtZXZlbnRzKVxuICogLSBbQW5kcm9pZF0gW2h0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9hbmRyb2lkL2FwcC1ldmVudHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9hbmRyb2lkL2FwcC1ldmVudHMpXG4gKiAtIFtKU10gRG9lcyBub3QgaGF2ZSBhbiBFdmVudHMgQVBJLCBzbyB0aGUgcGx1Z2luIGZ1bmN0aW9ucyBhcmUgZW1wdHkgYW5kIHdpbGwgcmV0dXJuIGFuIGF1dG9tYXRpYyBzdWNjZXNzXG4gKlxuICogQWN0aXZhdGlvbiBldmVudHMgYXJlIGF1dG9tYXRpY2FsbHkgdHJhY2tlZCBmb3IgeW91IGluIHRoZSBwbHVnaW4uXG4gKlxuICogRXZlbnRzIGFyZSBsaXN0ZWQgb24gdGhlIFtpbnNpZ2h0cyBwYWdlXShodHRwczovL3d3dy5mYWNlYm9vay5jb20vaW5zaWdodHMvKS5cbiAqXG4gKiBGb3IgdHJhY2tpbmcgZXZlbnRzLCBzZWUgYGxvZ0V2ZW50YCBhbmQgYGxvZ1B1cmNoYXNlYC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZhY2Vib29rLCBGYWNlYm9va0xvZ2luUmVzcG9uc2UgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2ZhY2Vib29rL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmYjogRmFjZWJvb2spIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuZmIubG9naW4oWydwdWJsaWNfcHJvZmlsZScsICd1c2VyX2ZyaWVuZHMnLCAnZW1haWwnXSlcbiAqICAgLnRoZW4oKHJlczogRmFjZWJvb2tMb2dpblJlc3BvbnNlKSA9PiBjb25zb2xlLmxvZygnTG9nZ2VkIGludG8gRmFjZWJvb2shJywgcmVzKSlcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ0Vycm9yIGxvZ2dpbmcgaW50byBGYWNlYm9vaycsIGUpKTtcbiAqXG4gKlxuICogdGhpcy5mYi5sb2dFdmVudCh0aGlzLmZiLkVWRU5UUy5FVkVOVF9OQU1FX0FEREVEX1RPX0NBUlQpO1xuICpcbiAqIGBgYFxuICpcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdGYWNlYm9vaycsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QnLFxuICBwbHVnaW5SZWY6ICdmYWNlYm9va0Nvbm5lY3RQbHVnaW4nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3QvY29yZG92YS1wbHVnaW4tZmFjZWJvb2stY29ubmVjdCcsXG4gIGluc3RhbGw6XG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0IC0tdmFyaWFibGUgQVBQX0lEPVwiMTIzNDU2Nzg5XCIgLS12YXJpYWJsZSBBUFBfTkFNRT1cIm15QXBwbGljYXRpb25cIicsXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQVBQX0lEJywgJ0FQUF9OQU1FJ10sXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdCcm93c2VyJ10sXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZhY2Vib29rIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICBFVkVOVFMgPSB7XG4gICAgRVZFTlRfTkFNRV9BQ1RJVkFURURfQVBQOiAnZmJfbW9iaWxlX2FjdGl2YXRlX2FwcCcsXG4gICAgRVZFTlRfTkFNRV9ERUFDVElWQVRFRF9BUFA6ICdmYl9tb2JpbGVfZGVhY3RpdmF0ZV9hcHAnLFxuICAgIEVWRU5UX05BTUVfU0VTU0lPTl9JTlRFUlJVUFRJT05TOiAnZmJfbW9iaWxlX2FwcF9pbnRlcnJ1cHRpb25zJyxcbiAgICBFVkVOVF9OQU1FX1RJTUVfQkVUV0VFTl9TRVNTSU9OUzogJ2ZiX21vYmlsZV90aW1lX2JldHdlZW5fc2Vzc2lvbnMnLFxuICAgIEVWRU5UX05BTUVfQ09NUExFVEVEX1JFR0lTVFJBVElPTjogJ2ZiX21vYmlsZV9jb21wbGV0ZV9yZWdpc3RyYXRpb24nLFxuICAgIEVWRU5UX05BTUVfVklFV0VEX0NPTlRFTlQ6ICdmYl9tb2JpbGVfY29udGVudF92aWV3JyxcbiAgICBFVkVOVF9OQU1FX1NFQVJDSEVEOiAnZmJfbW9iaWxlX3NlYXJjaCcsXG4gICAgRVZFTlRfTkFNRV9SQVRFRDogJ2ZiX21vYmlsZV9yYXRlJyxcbiAgICBFVkVOVF9OQU1FX0NPTVBMRVRFRF9UVVRPUklBTDogJ2ZiX21vYmlsZV90dXRvcmlhbF9jb21wbGV0aW9uJyxcbiAgICBFVkVOVF9OQU1FX1BVU0hfVE9LRU5fT0JUQUlORUQ6ICdmYl9tb2JpbGVfb2J0YWluX3B1c2hfdG9rZW4nLFxuICAgIEVWRU5UX05BTUVfQURERURfVE9fQ0FSVDogJ2ZiX21vYmlsZV9hZGRfdG9fY2FydCcsXG4gICAgRVZFTlRfTkFNRV9BRERFRF9UT19XSVNITElTVDogJ2ZiX21vYmlsZV9hZGRfdG9fd2lzaGxpc3QnLFxuICAgIEVWRU5UX05BTUVfSU5JVElBVEVEX0NIRUNLT1VUOiAnZmJfbW9iaWxlX2luaXRpYXRlZF9jaGVja291dCcsXG4gICAgRVZFTlRfTkFNRV9BRERFRF9QQVlNRU5UX0lORk86ICdmYl9tb2JpbGVfYWRkX3BheW1lbnRfaW5mbycsXG4gICAgRVZFTlRfTkFNRV9QVVJDSEFTRUQ6ICdmYl9tb2JpbGVfcHVyY2hhc2UnLFxuICAgIEVWRU5UX05BTUVfQUNISUVWRURfTEVWRUw6ICdmYl9tb2JpbGVfbGV2ZWxfYWNoaWV2ZWQnLFxuICAgIEVWRU5UX05BTUVfVU5MT0NLRURfQUNISUVWRU1FTlQ6ICdmYl9tb2JpbGVfYWNoaWV2ZW1lbnRfdW5sb2NrZWQnLFxuICAgIEVWRU5UX05BTUVfU1BFTlRfQ1JFRElUUzogJ2ZiX21vYmlsZV9zcGVudF9jcmVkaXRzJyxcbiAgICBFVkVOVF9QQVJBTV9DVVJSRU5DWTogJ2ZiX2N1cnJlbmN5JyxcbiAgICBFVkVOVF9QQVJBTV9SRUdJU1RSQVRJT05fTUVUSE9EOiAnZmJfcmVnaXN0cmF0aW9uX21ldGhvZCcsXG4gICAgRVZFTlRfUEFSQU1fQ09OVEVOVF9UWVBFOiAnZmJfY29udGVudF90eXBlJyxcbiAgICBFVkVOVF9QQVJBTV9DT05URU5UX0lEOiAnZmJfY29udGVudF9pZCcsXG4gICAgRVZFTlRfUEFSQU1fU0VBUkNIX1NUUklORzogJ2ZiX3NlYXJjaF9zdHJpbmcnLFxuICAgIEVWRU5UX1BBUkFNX1NVQ0NFU1M6ICdmYl9zdWNjZXNzJyxcbiAgICBFVkVOVF9QQVJBTV9NQVhfUkFUSU5HX1ZBTFVFOiAnZmJfbWF4X3JhdGluZ192YWx1ZScsXG4gICAgRVZFTlRfUEFSQU1fUEFZTUVOVF9JTkZPX0FWQUlMQUJMRTogJ2ZiX3BheW1lbnRfaW5mb19hdmFpbGFibGUnLFxuICAgIEVWRU5UX1BBUkFNX05VTV9JVEVNUzogJ2ZiX251bV9pdGVtcycsXG4gICAgRVZFTlRfUEFSQU1fTEVWRUw6ICdmYl9sZXZlbCcsXG4gICAgRVZFTlRfUEFSQU1fREVTQ1JJUFRJT046ICdmYl9kZXNjcmlwdGlvbicsXG4gICAgRVZFTlRfUEFSQU1fU09VUkNFX0FQUExJQ0FUSU9OOiAnZmJfbW9iaWxlX2xhdW5jaF9zb3VyY2UnLFxuICAgIEVWRU5UX1BBUkFNX1ZBTFVFX1lFUzogJzEnLFxuICAgIEVWRU5UX1BBUkFNX1ZBTFVFX05POiAnMCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIExvZ2luIHRvIEZhY2Vib29rIHRvIGF1dGhlbnRpY2F0ZSB0aGlzIGFwcC5cbiAgICpcbiAgICogYGBgdHlwZXNjcmlwdFxuICAgKiB7XG4gICAqICAgc3RhdHVzOiAnY29ubmVjdGVkJyxcbiAgICogICBhdXRoUmVzcG9uc2U6IHtcbiAgICogICAgIHNlc3Npb25fa2V5OiB0cnVlLFxuICAgKiAgICAgYWNjZXNzVG9rZW46ICdrZ2toM2c0MmtoNGcyM2toNGcya2gzNGcya2c0azJoNGdraDNnNGsyaDRnazIzaDRnazJoMzRnazIzNGdrMmgzNEFuZFNvT24nLFxuICAgKiAgICAgZXhwaXJlc0luOiA1MTgzOTc5LFxuICAgKiAgICAgc2lnOiAnLi4uJyxcbiAgICogICAgIHNlY3JldDogJy4uLicsXG4gICAqICAgICB1c2VySUQ6ICc2MzQ1NjU0MzUnXG4gICAqICAgfVxuICAgKiB9XG4gICAqXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSAgcGVybWlzc2lvbnMgTGlzdCBvZiBbcGVybWlzc2lvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9mYWNlYm9vay1sb2dpbi9wZXJtaXNzaW9ucykgdGhpcyBhcHAgaGFzIHVwb24gbG9nZ2luZyBpbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8RmFjZWJvb2tMb2dpblJlc3BvbnNlPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgc3RhdHVzIG9iamVjdCBpZiBsb2dpbiBzdWNjZWVkcywgYW5kIHJlamVjdHMgaWYgbG9naW4gZmFpbHMuXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGxvZ2luKHBlcm1pc3Npb25zOiBzdHJpbmdbXSk6IFByb21pc2U8RmFjZWJvb2tMb2dpblJlc3BvbnNlPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZ291dCBvZiBGYWNlYm9vay5cbiAgICpcbiAgICogRm9yIG1vcmUgaW5mbyBzZWUgdGhlIFtGYWNlYm9vayBkb2NzXShodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvcmVmZXJlbmNlL2phdmFzY3JpcHQvRkIubG9nb3V0KVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIGEgc3VjY2Vzc2Z1bCBsb2dvdXQsIGFuZCByZWplY3RzIGlmIGxvZ291dCBmYWlscy5cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZSBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluIHRvIEZhY2Vib29rIGFuZCBoYXMgYXV0aGVudGljYXRlZCB5b3VyIGFwcC4gIFRoZXJlIGFyZSB0aHJlZSBwb3NzaWJsZSBzdGF0ZXMgZm9yIGEgdXNlcjpcbiAgICpcbiAgICogMSkgdGhlIHVzZXIgaXMgbG9nZ2VkIGludG8gRmFjZWJvb2sgYW5kIGhhcyBhdXRoZW50aWNhdGVkIHlvdXIgYXBwbGljYXRpb24gKGNvbm5lY3RlZClcbiAgICogMikgdGhlIHVzZXIgaXMgbG9nZ2VkIGludG8gRmFjZWJvb2sgYnV0IGhhcyBub3QgYXV0aGVudGljYXRlZCB5b3VyIGFwcGxpY2F0aW9uIChub3RfYXV0aG9yaXplZClcbiAgICogMykgdGhlIHVzZXIgaXMgZWl0aGVyIG5vdCBsb2dnZWQgaW50byBGYWNlYm9vayBvciBleHBsaWNpdGx5IGxvZ2dlZCBvdXQgb2YgeW91ciBhcHBsaWNhdGlvbiBzbyBpdCBkb2Vzbid0IGF0dGVtcHQgdG8gY29ubmVjdCB0byBGYWNlYm9vayBhbmQgdGh1cywgd2UgZG9uJ3Qga25vdyBpZiB0aGV5J3ZlIGF1dGhlbnRpY2F0ZWQgeW91ciBhcHBsaWNhdGlvbiBvciBub3QgKHVua25vd24pXG4gICAqXG4gICAqIFJlc29sdmVzIHdpdGggYSByZXNwb25zZSBsaWtlOlxuICAgKlxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgIGF1dGhSZXNwb25zZToge1xuICAgKiAgICAgdXNlcklEOiAnMTIzNDU2Nzg5MTIzNDUnLFxuICAgKiAgICAgYWNjZXNzVG9rZW46ICdrZ2toM2c0MmtoNGcyM2toNGcya2gzNGcya2c0azJoNGdraDNnNGsyaDRnazIzaDRnazJoMzRnazIzNGdrMmgzNEFuZFNvT24nLFxuICAgKiAgICAgc2Vzc2lvbl9LZXk6IHRydWUsXG4gICAqICAgICBleHBpcmVzSW46ICc1MTgzNzM4JyxcbiAgICogICAgIHNpZzogJy4uLidcbiAgICogICB9LFxuICAgKiAgIHN0YXR1czogJ2Nvbm5lY3RlZCdcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICogRm9yIG1vcmUgaW5mb3JtYXRpb24gc2VlIHRoZSBbRmFjZWJvb2sgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL3JlZmVyZW5jZS9qYXZhc2NyaXB0L0ZCLmdldExvZ2luU3RhdHVzKVxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBzdGF0dXMsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvclxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRMb2dpblN0YXR1cygpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBGYWNlYm9vayBhY2Nlc3MgdG9rZW4gZm9yIHVzaW5nIEZhY2Vib29rIHNlcnZpY2VzLlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYWNjZXNzIHRva2VuLCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogU2hvdyBvbmUgb2YgdmFyaW91cyBGYWNlYm9vayBkaWFsb2dzLiBFeGFtcGxlIG9mIG9wdGlvbnMgZm9yIGEgU2hhcmUgZGlhbG9nOlxuICAgKlxuICAgKiBgYGBcbiAgICoge1xuICAgKiAgIG1ldGhvZDogJ3NoYXJlJyxcbiAgICogICBocmVmOiAnaHR0cDovL2V4YW1wbGUuY29tJyxcbiAgICogICBjYXB0aW9uOiAnU3VjaCBjYXB0aW9uLCB2ZXJ5IGZlZWQuJyxcbiAgICogICBkZXNjcmlwdGlvbjogJ011Y2ggZGVzY3JpcHRpb24nLFxuICAgKiAgIHBpY3R1cmU6ICdodHRwOi8vZXhhbXBsZS5jb20vaW1hZ2UucG5nJ1xuICAgKiB9XG4gICAqIGBgYFxuICAgKlxuICAgKiBGb3IgbW9yZSBvcHRpb25zIHNlZSB0aGUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXBsdWdpbi1mYWNlYm9vay1jb25uZWN0L2NvcmRvdmEtcGx1Z2luLWZhY2Vib29rLWNvbm5lY3Qjc2hvdy1hLWRpYWxvZykgYW5kIHRoZSBbRmFjZWJvb2sgZG9jc10oaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2phdmFzY3JpcHQvcmVmZXJlbmNlL0ZCLnVpKVxuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBUaGUgZGlhbG9nIG9wdGlvbnNcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHN1Y2Nlc3MgZGF0YSwgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3dEaWFsb2cob3B0aW9uczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFrZSBhIGNhbGwgdG8gRmFjZWJvb2sgR3JhcGggQVBJLiBDYW4gdGFrZSBhZGRpdGlvbmFsIHBlcm1pc3Npb25zIGJleW9uZCB0aG9zZSBncmFudGVkIG9uIGxvZ2luLlxuICAgKlxuICAgKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWU6XG4gICAqXG4gICAqICBDYWxsaW5nIHRoZSBHcmFwaCBBUEkgLSBodHRwczovL2RldmVsb3BlcnMuZmFjZWJvb2suY29tL2RvY3MvamF2YXNjcmlwdC9yZWZlcmVuY2UvRkIuYXBpXG4gICAqICBHcmFwaCBFeHBsb3JlciAtIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vdG9vbHMvZXhwbG9yZXJcbiAgICogIEdyYXBoIEFQSSAtIGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9ncmFwaC1hcGlcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9ICByZXF1ZXN0UGF0aCBHcmFwaCBBUEkgZW5kcG9pbnQgeW91IHdhbnQgdG8gY2FsbFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSAgcGVybWlzc2lvbnMgTGlzdCBvZiBbcGVybWlzc2lvbnNdKGh0dHBzOi8vZGV2ZWxvcGVycy5mYWNlYm9vay5jb20vZG9jcy9mYWNlYm9vay1sb2dpbi9wZXJtaXNzaW9ucykgZm9yIHRoaXMgcmVxdWVzdC5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICBodHRwTWV0aG9kIEhUVFAgbWV0aG9kIGZvciB0aGUgcmVxdWVzdCwgb25lIG9mIFwiR0VUXCIsIFwiUE9TVFwiLCBvciBcIkRFTEVURVwiIChkZWZhdWx0IGlzIFwiR0VUXCIpXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSByZXF1ZXN0LCBvciByZWplY3RzIHdpdGggYW4gZXJyb3JcbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYXBpKHJlcXVlc3RQYXRoOiBzdHJpbmcsIHBlcm1pc3Npb25zOiBzdHJpbmdbXSwgaHR0cE1ldGhvZD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyBhbiBldmVudC4gIEZvciBtb3JlIGluZm9ybWF0aW9uIHNlZSB0aGUgRXZlbnRzIHNlY3Rpb24gYWJvdmUuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSAgbmFtZSBOYW1lIG9mIHRoZSBldmVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gIFtwYXJhbXNdIEFuIG9iamVjdCBjb250YWluaW5nIGV4dHJhIGRhdGEgdG8gbG9nIHdpdGggdGhlIGV2ZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSAgW3ZhbHVlVG9TdW1dIGFueSB2YWx1ZSB0byBiZSBhZGRlZCB0byBhZGRlZCB0byBhIHN1bSBvbiBlYWNoIGV2ZW50XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3VjY2Vzc0luZGV4OiAzLFxuICAgIGVycm9ySW5kZXg6IDQsXG4gIH0pXG4gIGxvZ0V2ZW50KG5hbWU6IHN0cmluZywgcGFyYW1zPzogT2JqZWN0LCB2YWx1ZVRvU3VtPzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRW5hYmxlIG9yIGRpc2FibGUgdGhlIGF1dG8gbG9nIGFwcCBldmVudCBmZWF0dXJlIC0gaHR0cHM6Ly9kZXZlbG9wZXJzLmZhY2Vib29rLmNvbS9kb2NzL2FwcC1ldmVudHMvZ2Rwci1jb21wbGlhbmNlL1xuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59ICBlbmFibGVkIHZhbHVlIHRvIGJlIHNldFxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBzZXRBdXRvTG9nQXBwRXZlbnRzRW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIExvZyBhIHB1cmNoYXNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBzZWUgdGhlIEV2ZW50cyBzZWN0aW9uIGFib3ZlLlxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gIHZhbHVlIFZhbHVlIG9mIHRoZSBwdXJjaGFzZS5cbiAgICogQHBhcmFtIHtzdHJpbmd9ICBjdXJyZW5jeSBUaGUgY3VycmVuY3ksIGFzIGFuIFtJU08gNDIxNyBjdXJyZW5jeSBjb2RlXShodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT180MjE3KVxuICAgKiBAcGFyYW0ge09iamVjdH0gIHBhcmFtcyBBbiBvYmplY3QgY29udGFpbmluZyBleHRyYSBkYXRhIHRvIGxvZyB3aXRoIHRoZSBldmVudFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBsb2dQdXJjaGFzZSh2YWx1ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nLCBwYXJhbXM/OiBPYmplY3QpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkZWZlcnJlZCBhcHAgbGlua1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXREZWZlcnJlZEFwcGxpbmsoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgbG9nIGFjdGl2YXRpb24gZXZlbnRzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGFjdGl2YXRlQXBwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js ***!
  \**************************************************************************/
/*! exports provided: GooglePlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePlus", function() { return GooglePlus; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var GooglePlus = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GooglePlus, _super);
    function GooglePlus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GooglePlus.prototype.login = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "login", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    GooglePlus.prototype.trySilentLogin = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "trySilentLogin", {}, arguments); };
    GooglePlus.prototype.logout = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "logout", {}, arguments); };
    GooglePlus.prototype.disconnect = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "disconnect", {}, arguments); };
    GooglePlus.prototype.getSigningCertificateFingerprint = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getSigningCertificateFingerprint", {}, arguments); };
    GooglePlus.pluginName = "GooglePlus";
    GooglePlus.plugin = "cordova-plugin-googleplus";
    GooglePlus.pluginRef = "window.plugins.googleplus";
    GooglePlus.repo = "https://github.com/EddyVerbruggen/cordova-plugin-googleplus";
    GooglePlus.install = "ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid";
    GooglePlus.installVariables = ["REVERSED_CLIENT_ID"];
    GooglePlus.platforms = ["Android", "iOS"];
GooglePlus.ɵfac = function GooglePlus_Factory(t) { return ɵGooglePlus_BaseFactory(t || GooglePlus); };
GooglePlus.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GooglePlus, factory: function (t) { return GooglePlus.ɵfac(t); } });
var ɵGooglePlus_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](GooglePlus);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GooglePlus, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return GooglePlus;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvZ29vZ2xlLXBsdXMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0FBQ3hFO0FBS0EsSUF1QmdDLDhCQUFpQjtBQUFDO0FBRTlCO0FBRW5CO0FBQU0sSUFNTCwwQkFBSyxhQUFDLE9BQVk7QUFLNEIsSUFLOUMsbUNBQWMsYUFBQyxPQUFhO0FBS1QsSUFJbkIsMkJBQU07QUFLaUIsSUFJdkIsK0JBQVU7QUFLaUIsSUFJM0IscURBQWdDO0FBSXNCO0FBQTBDO0FBQXFEO0FBQXdEO0FBQXFGO0FBQWdJO0FBQTBEOzhDQXBEN2QsVUFBVTs7Ozs7MEJBQ0w7QUFBQyxxQkE5QlA7QUFBRSxFQThCOEIsaUJBQWlCO0FBQ2hELFNBRFksVUFBVTtBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgR29vZ2xlIFBsdXNcbiAqIEBkZXNjcmlwdGlvblxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBHb29nbGVQbHVzIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9nb29nbGUtcGx1cy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlUGx1czogR29vZ2xlUGx1cykgeyB9XG4gKlxuICogLi4uXG4gKlxuICogdGhpcy5nb29nbGVQbHVzLmxvZ2luKHt9KVxuICogICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAqICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICpcbiAqIGBgYFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0dvb2dsZVBsdXMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGVwbHVzJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMuZ29vZ2xlcGx1cycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tZ29vZ2xlcGx1cycsXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZ29vZ2xlcGx1cyAtLXZhcmlhYmxlIFJFVkVSU0VEX0NMSUVOVF9JRD1teXJldmVyc2VkY2xpZW50aWQnLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1JFVkVSU0VEX0NMSUVOVF9JRCddLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR29vZ2xlUGx1cyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIFRoZSBsb2dpbiBmdW5jdGlvbiB3YWxrcyB0aGUgdXNlciB0aHJvdWdoIHRoZSBHb29nbGUgQXV0aCBwcm9jZXNzLlxuICAgKiBAcGFyYW0gb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN1Y2Nlc3NJbmRleDogMSxcbiAgICBlcnJvckluZGV4OiAyLFxuICB9KVxuICBsb2dpbihvcHRpb25zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBZb3UgY2FuIGNhbGwgdHJ5U2lsZW50TG9naW4gdG8gY2hlY2sgaWYgdGhleSdyZSBhbHJlYWR5IHNpZ25lZCBpbiB0byB0aGUgYXBwIGFuZCBzaWduIHRoZW0gaW4gc2lsZW50bHkgaWYgdGhleSBhcmUuXG4gICAqIEBwYXJhbSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHRyeVNpbGVudExvZ2luKG9wdGlvbnM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGlzIHdpbGwgY2xlYXIgdGhlIE9BdXRoMiB0b2tlbi5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCBjbGVhciB0aGUgT0F1dGgyIHRva2VuLCBmb3JnZXQgd2hpY2ggYWNjb3VudCB3YXMgdXNlZCB0byBsb2dpbiwgYW5kIGRpc2Nvbm5lY3QgdGhhdCBhY2NvdW50IGZyb20gdGhlIGFwcC4gVGhpcyB3aWxsIHJlcXVpcmUgdGhlIHVzZXIgdG8gYWxsb3cgdGhlIGFwcCBhY2Nlc3MgYWdhaW4gbmV4dCB0aW1lIHRoZXkgc2lnbiBpbi4gQmUgYXdhcmUgdGhhdCB0aGlzIGVmZmVjdCBpcyBub3QgYWx3YXlzIGluc3RhbnRhbmVvdXMuIEl0IGNhbiB0YWtlIHRpbWUgdG8gY29tcGxldGVseSBkaXNjb25uZWN0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaXNjb25uZWN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgd2lsbCByZXRyaWV2ZSB0aGUgQW5kcm9pZCBzaWduaW5nIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IHdoaWNoIGlzIHJlcXVpcmVkIGluIHRoZSBHb29nbGUgRGV2ZWxvcGVyIENvbnNvbGUuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGdldFNpZ25pbmdDZXJ0aWZpY2F0ZUZpbmdlcnByaW50KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/sim/__ivy_ngcc__/ngx/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ionic-native/sim/__ivy_ngcc__/ngx/index.js ***!
  \******************************************************************/
/*! exports provided: Sim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sim", function() { return Sim; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/__ivy_ngcc__/index.js");




var Sim = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Sim, _super);
    function Sim() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sim.prototype.getSimInfo = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getSimInfo", {}, arguments); };
    Sim.prototype.hasReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    Sim.prototype.requestReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    Sim.pluginName = "Sim";
    Sim.plugin = "cordova-plugin-sim";
    Sim.pluginRef = "plugins.sim";
    Sim.repo = "https://github.com/pbakondy/cordova-plugin-sim";
    Sim.platforms = ["Android", "iOS", "Windows", "Windows Phone"];
Sim.ɵfac = function Sim_Factory(t) { return ɵSim_BaseFactory(t || Sim); };
Sim.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Sim, factory: function (t) { return Sim.ɵfac(t); } });
var ɵSim_BaseFactory = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](Sim);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Sim, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], null, null); })();
    return Sim;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9AaW9uaWMtbmF0aXZlL3BsdWdpbnMvc2ltL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztBQUN4RTtBQUlXLElBb0NjLHVCQUFpQjtBQUFDO0FBRTlCO0FBSVo7QUFBTSxJQUFMLHdCQUFVO0FBTUwsSUFLTCwrQkFBaUI7QUFRaEIsSUFHRCxtQ0FBcUI7QUFJZ0Q7QUFBNEI7QUFBdUM7QUFBbUM7QUFBaUU7SUFoQ2pPLEdBQUcsd0JBRGYsVUFBVSxFQUFFLFFBQ0EsR0FBRzs7Ozs7MEJBQUU7QUFBQyxjQTFDbkI7QUFBRSxFQTBDdUIsaUJBQWlCO0FBQ3pDLFNBRFksR0FBRztBQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbi8qKlxuICogQG5hbWUgU2ltXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldHMgaW5mbyBmcm9tIHRoZSBTaW0gY2FyZCBsaWtlIHRoZSBjYXJyaWVyIG5hbWUsIG1jYywgbW5jIGFuZCBjb3VudHJ5IGNvZGUgYW5kIG90aGVyIHN5c3RlbSBkZXBlbmRlbnQgaW5mby5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXNpbWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIFNpbSBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vcGJha29uZHkvY29yZG92YS1wbHVnaW4tc2ltKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFNpbSB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc2ltL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2ltOiBTaW0pIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMuc2ltLmdldFNpbUluZm8oKS50aGVuKFxuICogICAoaW5mbykgPT4gY29uc29sZS5sb2coJ1NpbSBpbmZvOiAnLCBpbmZvKSxcbiAqICAgKGVycikgPT4gY29uc29sZS5sb2coJ1VuYWJsZSB0byBnZXQgc2ltIGluZm86ICcsIGVycilcbiAqICk7XG4gKlxuICogdGhpcy5zaW0uaGFzUmVhZFBlcm1pc3Npb24oKS50aGVuKFxuICogICAoaW5mbykgPT4gY29uc29sZS5sb2coJ0hhcyBwZXJtaXNzaW9uOiAnLCBpbmZvKVxuICogKTtcbiAqXG4gKiB0aGlzLnNpbS5yZXF1ZXN0UmVhZFBlcm1pc3Npb24oKS50aGVuKFxuICogICAoKSA9PiBjb25zb2xlLmxvZygnUGVybWlzc2lvbiBncmFudGVkJyksXG4gKiAgICgpID0+IGNvbnNvbGUubG9nKCdQZXJtaXNzaW9uIGRlbmllZCcpXG4gKiApO1xuICogYGBgXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU2ltJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2ltJyxcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zaW0nLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3BiYWtvbmR5L2NvcmRvdmEtcGx1Z2luLXNpbScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUnXSxcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2ltIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogUmV0dXJucyBpbmZvIGZyb20gdGhlIFNJTSBjYXJkLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBnZXRTaW1JbmZvKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICBoYXNSZWFkUGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxuICB9KVxuICByZXF1ZXN0UmVhZFBlcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar class=\"new-background-color\">\n        <ion-title class=\"ion-text-center\">\n            Login\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<!-- *ngIf=\"requestInProgress\" -->\n<div *ngIf=\"requestInProgress\" class=\"preloader-wrap\">\n    <div class=\"preloader\"></div>\n</div>\n\n\n\n<!-- <ion-content fullscreen=\"true\" class=\"login-content\" padding> -->\n<ion-content fullscreen=\"true\" class=\"login-content\">\n    <!-- <img src=\"assets/img/logo.png\" alt=\"braincal\"> -->\n    <ion-grid>\n        <!-- <ion-row  class=\"login-wrap\"> -->\n        <ion-row>\n            <!-- <ion-row class=\"ion-align-items-center ion-no-padding\"> -->\n            <ion-row class=\"centerLogin\">\n                <ion-col>\n                    <img src=\"assets/img/logo.png\" alt=\"braincal\">\n                </ion-col>\n            </ion-row>\n            <!-- <ion-row class=\"logo-row braincal-logo\">\n                <ion-col class=\"logo-container\">\n                    <img src=\"assets/img/logo.png\" alt=\"braincal\">\n                </ion-col>\n            </ion-row> -->\n\n            <!-- <div class=\"login-box\"> -->\n            <div>\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.valid)\">\n                    <ion-row class=\"ion-align-items-center\">\n                        <ion-col>\n                            <ion-list inset>\n                                <ion-select formControlName=\"country\" class=\"select-country\">\n                                    <ion-select-option value=\"\">Choose Country</ion-select-option>\n                                    <ion-select-option *ngFor=\"let country of countries\" value=\"{{country.code}}\">\n                                        {{country.name}}</ion-select-option>\n                                </ion-select>\n                                <div *ngIf=\"loginForm.controls['country'].hasError('required') && loginForm.controls['country'].touched\"\n                                    class=\"alert alert-danger\">Country Required.</div>\n\n                                <ion-item>\n                                    <ion-label color=\"primary\" floating>\n                                        <!--   <ion-icon name=\"ios-phone-portrait\"></ion-icon> -->\n                                        <ion-icon name=\"phone-portrait\"></ion-icon>\n                                        Mobile\n                                    </ion-label>\n                                    <ion-input type=\"text\" [ngClass]=\"{'has-error':!loginForm.controls['mobile'].valid}\"\n                                        formControlName=\"mobile\"></ion-input>\n                                    <div *ngIf=\"loginForm.controls['mobile'].hasError('required') && loginForm.controls['mobile'].touched\"\n                                        class=\"alert alert-danger\">Mobile number required.</div>\n                                </ion-item>\n                                <!-- <button type=\"submit\" [disabled]=\"!loginForm.valid\" ion-button>Login</button> -->\n                                <ion-button color=\"secondary\" expand=\"block\" type=\"submit\"\n                                    [disabled]=\"!loginForm.valid\">\n                                    Login</ion-button>\n                                <!-- <ion-button color=\"secondary\" (click)=\"go()\">\n                                    LoginTest</ion-button> -->\n                            </ion-list>\n\n                            <!-- <ion-button expand=\"block\" color=\"#DD4B39\" class=\"loginBtn loginBtn--facebook\"\n                                (click)=\"loginWithFb()\">\n                                Login with Facebook</ion-button> -->\n                            <ion-grid>\n                                <ion-row>\n                                    <ion-col></ion-col>\n                                    <ion-col size=\"12\">\n                                        <ion-button expand=\"block\" color=\"#DD4B39\" class=\"loginBtn loginBtn--google\"\n                                            (click)=\"loginWithGoogle()\">\n                                            Login with google</ion-button>\n                                    </ion-col>\n                                    <!-- <ion-col size=\"13\">\n                                        <button type=\"button\" class=\"loginBtn loginBtn--google\"\n                                            (click)=\"loginWithGoogle()\" ion-button>Login with google</button>\n                                    </ion-col> -->\n                                    <ion-col></ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col></ion-col>\n                                    <ion-col size=\"12\">\n                                        <ion-button expand=\"block\" color=\"#DD4B39\" class=\"loginBtn loginBtn--facebook\"\n                                            (click)=\"loginWithFb()\">\n                                            Login with Facebook</ion-button>\n                                        <!-- <button type=\"button\" class=\"loginBtn loginBtn--facebook\"\n                                            (click)=\"loginWithFb()\" ion-button>Login with Facebook</button> -->\n                                    </ion-col>\n                                    <ion-col></ion-col>\n                                </ion-row>\n                                <ion-row>\n                                    <ion-col></ion-col>\n                                    <ion-col size=\"12\">\n                                        <ion-button expand=\"block\" color=\"#DD4B39\" class=\"loginBtn loginBtn--apple\"\n                                            (click)=\"openAppleSignIn()\">\n                                            Sign in with Apple\n                                        </ion-button>\n                                    </ion-col>\n                                    <ion-col></ion-col>\n                                </ion-row>\n                            </ion-grid>\n                        </ion-col>\n                    </ion-row>\n                </form>\n            </div>\n        </ion-row>\n    </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/pages/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







// import { HttpClient } from '@angular/common/http';
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            // HttpClient
            // FormBuilder
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".scroll-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.scroll-content .login-wrap {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  align-content: flex-start;\n}\n.scroll-content img {\n  display: block;\n  margin: 0px auto;\n}\n.scroll-content .button {\n  width: 100%;\n  margin-top: 20px;\n}\n.scroll-content ion-icon {\n  padding: 0 5px;\n}\n.select-country {\n  max-width: 100%;\n  background-color: whitesmoke;\n}\n/* Shared */\n.loginBtn {\n  box-sizing: border-box;\n  position: relative;\n  /* width: 13em;  - apply for fixed size */\n  margin: 0.2em;\n  border: none;\n  text-align: left;\n  line-height: 34px;\n  white-space: nowrap;\n  border-radius: 0.2em;\n  font-size: 16px;\n  color: #FFF;\n}\n.loginBtn:before {\n  content: \"\";\n  box-sizing: border-box;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 34px;\n  height: 100%;\n}\n.loginBtn:focus {\n  outline: none;\n}\n.loginBtn:active {\n  box-shadow: inset 0 0 0 32px rgba(0, 0, 0, 0.1);\n}\n/* Facebook */\n.loginBtn--facebook {\n  background-color: #4C69BA;\n  background-image: linear-gradient(#4C69BA, #3B55A0);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--facebook:before {\n  border-right: #364e92 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat;\n}\n.loginBtn--facebook:hover,\n.loginBtn--facebook:focus {\n  background-color: #5B7BD5;\n  background-image: linear-gradient(#5B7BD5, #4864B1);\n}\n/* Google */\n.loginBtn--google {\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\n  background: #DD4B39;\n}\n.loginBtn--google:before {\n  border-right: #BB3F30 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png\") 6px 6px no-repeat;\n}\n.loginBtn--google:hover,\n.loginBtn--google:focus {\n  background: #E74B37;\n}\n/* Apple */\n.loginBtn--apple {\n  background-color: #050708;\n  background-image: linear-gradient(#050708, #050708);\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\n  text-shadow: 0 -1px 0 #354C8C;\n}\n.loginBtn--apple:before {\n  border-right: #050708 1px solid;\n  background: url(\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png\") 6px 6px no-repeat;\n}\n.loginBtn--apple:hover,\n.loginBtn--apple:focus {\n  background-color: #050708;\n  background-image: linear-gradient(#050708, #050708);\n}\nion-title {\n  color: white;\n}\nion-grid {\n  --height: 100%;\n  --justify-content: center;\n}\n.new-background-color {\n  --background: #2788E8;\n}\n.icon {\n  --display: inline-block;\n  --font-size: 35px;\n  --color: #ffC977;\n  --vertical-align: middle;\n}\n.text {\n  --display: inline-block;\n  --vertical-align: middle;\n}\n.login-content {\n  text-align: center;\n}\n.centerLogin {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQUFaO0FBR1M7RUFBSyxjQUFBO0VBQWdCLGdCQUFBO0FBQzlCO0FBQ1E7RUFBUyxXQUFBO0VBQWEsZ0JBQUE7QUFHOUI7QUFEUTtFQUFVLGNBQUE7QUFJbEI7QUFGSTtFQUFpQixlQUFBO0VBQW9CLDRCQUFBO0FBT3pDO0FBTEksV0FBQTtBQUNKO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBT0o7QUFMRTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVFKO0FBTkU7RUFDRSxhQUFBO0FBU0o7QUFQRTtFQUNFLCtDQUFBO0FBVUo7QUFORSxhQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1EQUFBO0VBQ0EsK0VBQUE7RUFDQSw2QkFBQTtBQVNKO0FBUEU7RUFDRSwrQkFBQTtFQUNBLHlHQUFBO0FBVUo7QUFSRTs7RUFFRSx5QkFBQTtFQUNBLG1EQUFBO0FBV0o7QUFQRSxXQUFBO0FBQ0E7RUFDRSxvREFBQTtFQUNBLG1CQUFBO0FBVUo7QUFSRTtFQUNFLCtCQUFBO0VBQ0EsdUdBQUE7QUFXSjtBQVRFOztFQUVFLG1CQUFBO0FBWUo7QUFURSxVQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLG1EQUFBO0VBQ0EsK0VBQUE7RUFDQSw2QkFBQTtBQVlKO0FBVkU7RUFDRSwrQkFBQTtFQUNBLHlHQUFBO0FBYUo7QUFYRTs7RUFFRSx5QkFBQTtFQUNBLG1EQUFBO0FBY0o7QUFSQTtFQUNJLFlBQUE7QUFXSjtBQVJBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FBV0o7QUFSQTtFQUNJLHFCQUFBO0FBV0o7QUFSQTtFQUNFLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBV0Y7QUFSQztFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUFXSDtBQVJDO0VBQ0Usa0JBQUE7QUFXSDtBQVJDO0VBRUMsWUFBQTtBQVVGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmxvZ2luLWNvbnRlbnR7XG4gICAgLnNjcm9sbC1jb250ZW50e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgIC5sb2dpbi13cmFwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgfVxuXG4gICAgICAgICBpbWd7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW46IDBweCBhdXRvO31cbiAgICAgICAgXG4gICAgICAgIC5idXR0b257IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiAyMHB4O31cblxuICAgICAgICBpb24taWNvbnsgcGFkZGluZzowIDVweDsgfSAgICAgICAgXG4gICAgfVxuICAgIC5zZWxlY3QtY291bnRyeXsgbWF4LXdpZHRoOiAxMDAlOyAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO31cblxuICAgIC8qIFNoYXJlZCAqL1xuLmxvZ2luQnRuIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiB3aWR0aDogMTNlbTsgIC0gYXBwbHkgZm9yIGZpeGVkIHNpemUgKi9cbiAgICBtYXJnaW46IDAuMmVtO1xuICAgIC8vIHBhZGRpbmc6IDAgMTVweCAwIDQ2cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBib3JkZXItcmFkaXVzOiAwLjJlbTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNGRkY7XG4gIH1cbiAgLmxvZ2luQnRuOmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMzRweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgLmxvZ2luQnRuOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gIC5sb2dpbkJ0bjphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMycHggcmdiYSgwLDAsMCwwLjEpO1xuICB9XG4gIFxuICBcbiAgLyogRmFjZWJvb2sgKi9cbiAgLmxvZ2luQnRuLS1mYWNlYm9vayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDNjlCQTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzRDNjlCQSwgIzNCNTVBMCk7XG4gICAgLypmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgbmV1ZVwiLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsqL1xuICAgIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMzU0QzhDO1xuICB9XG4gIC5sb2dpbkJ0bi0tZmFjZWJvb2s6YmVmb3JlIHtcbiAgICBib3JkZXItcmlnaHQ6ICMzNjRlOTIgMXB4IHNvbGlkO1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9mYWNlYm9vay5wbmcnKSA2cHggNnB4IG5vLXJlcGVhdDtcbiAgfVxuICAubG9naW5CdG4tLWZhY2Vib29rOmhvdmVyLFxuICAubG9naW5CdG4tLWZhY2Vib29rOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUI3QkQ1O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjNUI3QkQ1LCAjNDg2NEIxKTtcbiAgfVxuICBcbiAgXG4gIC8qIEdvb2dsZSAqL1xuICAubG9naW5CdG4tLWdvb2dsZSB7XG4gICAgLypmb250LWZhbWlseTogXCJSb2JvdG9cIiwgUm9ib3RvLCBhcmlhbCwgc2Fucy1zZXJpZjsqL1xuICAgIGJhY2tncm91bmQ6ICNERDRCMzk7XG4gIH1cbiAgLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcbiAgICBib3JkZXItcmlnaHQ6ICNCQjNGMzAgMXB4IHNvbGlkO1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9nb29nbGUucG5nJykgNnB4IDZweCBuby1yZXBlYXQ7XG4gIH1cbiAgLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsXG4gIC5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kOiAjRTc0QjM3O1xuICB9XG5cbiAgLyogQXBwbGUgKi9cbiAgLmxvZ2luQnRuLS1hcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDcwODtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzA1MDcwOCwgIzA1MDcwOCk7XG4gICAgLypmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgbmV1ZVwiLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsqL1xuICAgIHRleHQtc2hhZG93OiAwIC0xcHggMCAjMzU0QzhDO1xuICB9XG4gIC5sb2dpbkJ0bi0tYXBwbGU6YmVmb3JlIHtcbiAgICBib3JkZXItcmlnaHQ6ICMwNTA3MDggMXB4IHNvbGlkO1xuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9mYWNlYm9vay5wbmcnKSA2cHggNnB4IG5vLXJlcGVhdDtcbiAgfVxuICAubG9naW5CdG4tLWFwcGxlOmhvdmVyLFxuICAubG9naW5CdG4tLWFwcGxlOmZvY3VzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwNzA4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDUwNzA4LCAjMDUwNzA4KTtcbiAgfVxuXG4gICAgXG4vLyB9XG5cbmlvbi10aXRsZXtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1ncmlkIHtcbiAgICAtLWhlaWdodDogMTAwJTtcbiAgICAtLWp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjc4OEU4O1xufVxuXG4uaWNvbiB7XG4gIC0tZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtLWZvbnQtc2l6ZTogMzVweDtcbiAgLS1jb2xvcjogI2ZmQzk3NztcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cbiBcbiAudGV4dHtcbiAgIC0tZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuIH1cblxuIC5sb2dpbi1jb250ZW50e1xuICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIH1cblxuIC5jZW50ZXJMb2dpbiB7XG4gIC8vd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIC8vbWFyZ2luLXJpZ2h0OiAxNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/sim/ngx */ "./node_modules/@ionic-native/sim/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/app.constants */ "./src/app/shared/app.constants.ts");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/sign-in-with-apple/ngx */ "./node_modules/@ionic-native/sign-in-with-apple/__ivy_ngcc__/ngx/index.js");
var LoginPage_1;











let LoginPage = LoginPage_1 = class LoginPage {
    constructor(activatedRoute, sim, alertCtrl, userService, fb, router, googlePlus, facebook, menuCtrl, signInWithApple) {
        this.activatedRoute = activatedRoute;
        this.sim = sim;
        this.alertCtrl = alertCtrl;
        this.userService = userService;
        this.router = router;
        this.googlePlus = googlePlus;
        this.facebook = facebook;
        this.menuCtrl = menuCtrl;
        this.signInWithApple = signInWithApple;
        this.requestInProgress = false;
        this.countries = [];
        this.menuCtrl.enable(false);
        this.loginForm = fb.group({
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(14), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
        this.countries = src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].countries;
        this.sim.getSimInfo().then((info) => {
            let countryISOCode = info.countryCode;
            if (src_app_shared_app_constants__WEBPACK_IMPORTED_MODULE_7__["AppConstants"].DIAL_CODES[countryISOCode.toUpperCase()]) {
                let countryCode = countryISOCode.toUpperCase();
                this.loginForm.controls.country.setValue(countryCode);
            }
        }, (err) => console.log('Unable to get sim info: ', err));
    }
    loginWithGoogle() {
        this.requestInProgress = true;
        this.googlePlus.login({
            'webClientId': '355295706725-jju0h51dqmnabbddljlnvr9nkegki8c2.apps.googleusercontent.com',
            'offline': true
        }).then(res => {
            this.userService.registerUser(res.email, res.email, res.givenName).subscribe(response => {
                this.requestInProgress = false;
                this.socialAccountRegistered(response);
            });
        }, err => {
            this.requestInProgress = false;
            //this.showAlert(err);
        });
    }
    loginWithFb() {
        console.log('loginWithFb');
        this.facebook.getLoginStatus()
            .then((res) => {
            if (res && res.status == "connected") {
                this.fetchUserDataFromFB();
            }
            else if (res && (res.status == "not_authorized" || res.status == "unknown")) {
                this.requestInProgress = true;
                this.facebook.login(['public_profile', 'email']).then((res) => {
                    this.fetchUserDataFromFB();
                })
                    .catch(e => {
                    this.requestInProgress = false;
                    this.showAlert('Unable to log into Facebook.');
                });
            }
        })
            .catch(e => {
            this.requestInProgress = false;
            this.showAlert(e);
        });
    }
    fetchUserDataFromFB() {
        this.facebook.api('me?fields=id,name,email,first_name', []).then(profile => {
            this.userService.registerUser(profile['email'], profile['email'], profile['first_name']).subscribe(response => {
                this.requestInProgress = false;
                this.socialAccountRegistered(response);
            });
        }).catch(e => {
            this.requestInProgress = false;
            this.showAlert(e);
        });
    }
    login(valid) {
        if (!valid)
            return false;
        this.showRequestInProgress(true);
        this.userService.doLogin(this.loginForm.value.mobile, this.loginForm.value.country).subscribe(data => {
            this.showRequestInProgress(false);
            if (data.otp_session)
                this.showOTPDialog(data.otp_session);
            if (data.error) {
                this.showError(data.error);
                return;
            }
        }, err => {
            this.showRequestInProgress(false);
            try {
                let errorResponse = JSON.parse(err._body);
                if (errorResponse.error)
                    this.showError(errorResponse.error);
            }
            catch (error) {
                this.checkForResponseError(err);
            }
        });
    }
    showRequestInProgress(status) {
        this.requestInProgress = status;
    }
    showOTPDialog(otp_session) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'One Time Password',
                inputs: [
                    {
                        name: 'otp',
                        placeholder: 'OTP'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Ok',
                        handler: data => {
                            if (!data.otp)
                                return;
                            this.showRequestInProgress(true);
                            this.userService.verifyOTP(this.loginForm.value.mobile, this.loginForm.value.country, data.otp, otp_session).subscribe(data => {
                                this.showRequestInProgress(false);
                                if (data.error) {
                                    // alert.setMessage(data.error);
                                    alert.message = data.error;
                                    return false;
                                }
                                if (data.hasOwnProperty('user') && data.hasOwnProperty('cookie')) {
                                    let user = data.user;
                                    this.userService.saveUser(user);
                                    this.userService.saveAuthCookie(data.cookie);
                                    alert.dismiss();
                                    this.menuCtrl.enable(true);
                                    if (!user.firstname || !user.email) {
                                        // this.navCtrl.setRoot(ProfilePage);
                                        // this.navCtrl.navigateRoot(ProfilePage);
                                        this.router.navigate(['profile']);
                                    }
                                    else {
                                        // this.navCtrl.setRoot(HomePage);
                                        // this.navCtrl.navigateRoot(HomePage);
                                        this.router.navigate(['home']);
                                    }
                                }
                                else {
                                    alert.dismiss();
                                    this.showError(LoginPage_1.JSON_ERROR);
                                }
                            }, err => {
                                let errorResponse = JSON.parse(err._body);
                                if (errorResponse.error) {
                                    //  alert.setMessage(data.error);
                                    alert.message = data.error;
                                    return false;
                                }
                            });
                            return false;
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    showError(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Error',
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
                //this.navCtrl.push(LoginPage);
                this.userService.logout();
            }
            else
                this.showAlert(errorResponse.error);
        }
        catch (error) {
            this.showAlert('Unable to connect to server. Please  try after some time or check your internet connection.');
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
    go() {
        console.log(1);
        // this.router.navigate(['profile']);
        this.router.navigateByUrl('/profile');
    }
    socialAccountRegistered(response) {
        if (response.success) {
            let user = response.data;
            this.userService.saveUser(user);
            this.userService.saveAuthCookie(response.data.cookie);
            if (!user.firstname || !user.email) {
                // this.navCtrl.setRoot(ProfilePage);
                this.router.navigate(['profile']);
            }
            else {
                // this.navCtrl.setRoot(HomePage);
                this.router.navigate(['home']);
            }
        }
        else {
            this.showAlert(response.data.msg);
        }
    }
    appleAccountRegistered(response) {
        if (response.success) {
            let user = response.data;
            this.userService.saveUser(user);
            this.userService.saveAuthCookie(response.data.cookie);
            this.menuCtrl.enable(true);
            this.router.navigate(['home']);
        }
        else {
            this.showAlert(response.data.msg);
        }
    }
    openAppleSignIn() {
        this.signInWithApple.signin({
            requestedScopes: [
                _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_10__["ASAuthorizationAppleIDRequest"].ASAuthorizationScopeFullName,
                _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_10__["ASAuthorizationAppleIDRequest"].ASAuthorizationScopeEmail
            ]
        })
            .then((res) => {
            // https://developer.apple.com/documentation/signinwithapplerestapi/verifying_a_user
            if (res && res.identityToken) {
                alert('Send token to apple for verification: ' + JSON.stringify(res));
                let email = res.email;
                if (email == "") {
                    email = res.user + '@gmail.com';
                }
                this.userService.registerUser(email, email, res.fullName.givenName).subscribe(response => {
                    this.requestInProgress = false;
                    this.appleAccountRegistered(response);
                });
            }
            else {
                alert('Login failed. Please try later.');
            }
        })
            .catch((error) => {
            alert(error.code + ' ' + error.localizedDescription);
            console.error(error);
        });
    }
};
LoginPage.JSON_ERROR = "Unable to connect to server. Please  try after some time.";
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_4__["Sim"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] },
    { type: _ionic_native_sign_in_with_apple_ngx__WEBPACK_IMPORTED_MODULE_10__["SignInWithApple"] }
];
LoginPage = LoginPage_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'user-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
        providers: [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"], _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_4__["Sim"], _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_8__["GooglePlus"], _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_9__["Facebook"]],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map