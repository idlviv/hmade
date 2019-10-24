(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/dashboard/dashboard.module": [
		"./src/app/components/dashboard/dashboard.module.ts",
		"default~components-dashboard-dashboard-module~components-mcs-mcs-module~components-social-social-module",
		"default~components-dashboard-dashboard-module~components-user-user-module",
		"default~components-dashboard-dashboard-module~components-mcs-mcs-module",
		"components-dashboard-dashboard-module"
	],
	"./components/mcs/mcs.module": [
		"./src/app/components/mcs/mcs.module.ts",
		"default~components-dashboard-dashboard-module~components-mcs-mcs-module~components-social-social-module",
		"default~components-dashboard-dashboard-module~components-mcs-mcs-module"
	],
	"./components/products/products.module": [
		"./src/app/components/products/products.module.ts",
		"components-products-products-module"
	],
	"./components/social/social.module": [
		"./src/app/components/social/social.module.ts",
		"default~components-dashboard-dashboard-module~components-mcs-mcs-module~components-social-social-module"
	],
	"./components/user/user.module": [
		"./src/app/components/user/user.module.ts",
		"default~components-dashboard-dashboard-module~components-user-user-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./dist/ng-user-man/fesm2015/ng-user-man.js":
/*!**************************************************!*\
  !*** ./dist/ng-user-man/fesm2015/ng-user-man.js ***!
  \**************************************************/
/*! exports provided: LoginComponent, NgUserManComponent, NgUserManModule, NgUserManService, SharedService, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgUserManComponent", function() { return NgUserManComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgUserManModule", function() { return NgUserManModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgUserManService", function() { return NgUserManService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgUserManService {
    /**
     * @param {?} http
     * @param {?} cookieService
     * @param {?} injector
     */
    constructor(http, cookieService, injector) {
        this.http = http;
        this.cookieService = cookieService;
        this.injector = injector;
        this._logging = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.tokenSyncronizatonProgress = false;
        this.eventToReloadUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.eventToReloadUser$ = this.eventToReloadUser.asObservable();
        this.config = injector.get('config');
    }
    /*
      * Create new user
      *
      */
    /**
     * @param {?} user
     * @param {?} recaptcha
     * @return {?}
     */
    userCreate(user, recaptcha) {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    recaptcha
                }
            })
        };
        return this.http.post('api/user/create', user, httpOptions);
    }
    /**
     * Login with username and password
     *
     * @param {?} user
     * @return {?}
     */
    userLogin(user) {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    login: user.login,
                    password: user.password
                }
            })
        };
        return this.http.get('api/user/login', httpOptions);
    }
    /**
     * Login with google social sin in
     *
     * @return {?}
     */
    userGoogleLogin() {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/user/auth/google', httpOptions);
    }
    /**
     * Get profile
     *
     * @return {?}
     */
    userGetProfile() {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/user/profile', httpOptions);
    }
    /**
     * Session
     * User logout
     *
     * @return {?}
     */
    userLogout() {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get('api/user/logout', httpOptions);
    }
    /**
     * Session
     * Used for router guard (canActivate)
     *
     * @param {?} requiredRoleForAuthentication
     * @return {?}
     */
    userCheckAuthorization(requiredRoleForAuthentication) {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: `role=${requiredRoleForAuthentication}` })
        };
        return this.http.get('api/user/checkAuthorization', httpOptions);
    }
    /**
     * Extract user from cookie
     *
     * @return {?}
     */
    userCookieExtractor() {
        if (this.cookieService.get('hmade')) {
            /** @type {?} */
            const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
            return helper.decodeToken(this.cookieService.get('hmade')).sub;
        }
        return null;
    }
    /**
     * Helper for frontend authorization
     * Check user permittion for some restricted actions
     * like menu displaying..
     *
     * @param {?} permitedRole
     * @return {?}
     */
    allowTo(permitedRole) {
        /** @type {?} */
        const user = this.userCookieExtractor();
        /** @type {?} */
        const permissions = this.config.permissions;
        if (!user && permitedRole === 'notUser') {
            return true;
        }
        if (!user) {
            return false;
        }
        /** @type {?} */
        const roleFromCookie = user.role;
        if (permissions[roleFromCookie].indexOf(permitedRole) >= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * @param {?} restrictedRoles
     * @return {?}
     */
    restrictTo(restrictedRoles) {
        /** @type {?} */
        const user = this.userCookieExtractor();
        if (!user) {
            return true;
        }
        /** @type {?} */
        const roleFromCookie = user.role;
        if (restrictedRoles.indexOf(roleFromCookie) >= 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * Helper for checking image file before uploading
     *
     * @param {?} eventTarget
     * @return {?}
     */
    checkFile(eventTarget) {
        if (!eventTarget.files[0]) {
            return ({ success: false, message: 'Виберіть файл' });
        }
        else if (eventTarget.files[0].size > 8400000) {
            return ({ success: false, message: 'Розмір файлу повинен бути менше 8Мб' });
        }
        else if (eventTarget.files[0].type !== 'image/jpg' &&
            eventTarget.files[0].type !== 'image/jpe' &&
            eventTarget.files[0].type !== 'image/jpeg' &&
            eventTarget.files[0].type !== 'image/bmp' &&
            eventTarget.files[0].type !== 'image/png' &&
            eventTarget.files[0].type !== 'image/webp') {
            return ({ success: false, message: 'Виберіть інший тип файлу' });
        }
        else {
            return ({ success: true, message: '' });
        }
    }
    /**
     * First step to reset password
     * Send reset code on email and write its hash in db
     *
     * @param {?} email
     * @param {?} recaptcha
     * @return {?}
     */
    userPasswordResetEmail(email, recaptcha) {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    email, recaptcha
                }
            })
        };
        return this.http.get('api/user/password-reset-check-email', httpOptions);
    }
    /**
     * Second step to reset password
     * Compare code from email with one in db
     *
     * @param {?} code
     * @param {?} codeToken
     * @return {?}
     */
    userPasswordResetCode(code, codeToken) {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: codeToken
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    code,
                }
            })
        };
        return this.http.get('api/user/password-reset-check-code', httpOptions);
    }
    /**
     *
     *
     * @param {?} password
     * @param {?} passwordResetToken
     * @return {?}
     */
    userPasswordReset(password, passwordResetToken) {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: passwordResetToken
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    password,
                }
            })
        };
        return this.http.get('api/user/password-reset', httpOptions);
    }
    /**
     * @return {?}
     */
    userEmailVerification() {
        // const token = localStorage.getItem('token');
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get('api/user/email-verification-send', httpOptions);
    }
    /**
     * Edit user fields without password confirmation
     *
     * @param {?} data
     * @return {?}
     */
    userEditUnsecure(data) {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put('api/user/editUnsecure', data, httpOptions);
    }
    /**
     * Edit user fields with password confirmation
     *
     *
     * @param {?} data
     * @return {?}
     */
    userEdit(data) {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put('api/user/edit', data, httpOptions);
    }
    /**
     *
     *
     * @param {?} file
     * @return {?}
     */
    userEditAvatar(file) {
        /** @type {?} */
        const formData = new FormData();
        formData.append('file', file, file.name);
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            // 'Content-Type':  'application/json',
            })
        };
        return this.http.put('api/user/edit-avatar', formData, httpOptions);
    }
    /**
     * @return {?}
     */
    logging() {
        /** @type {?} */
        const user = this.userCookieExtractor();
        this._logging.next(user);
    }
    /**
     * @return {?}
     */
    userManualUpdateCookie() {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/user/manual-update-cookie', httpOptions);
    }
    /**
     * @return {?}
     */
    getUserLocal() {
        // return this.userCookieExtractor();
        return this._logging.asObservable();
    }
    /*
       * Token manipulations
       *
       */
    /**
     * @param {?} tokenKey
     * @param {?} token
     * @return {?}
     */
    userLocalSetToken(tokenKey, token) {
        localStorage.setItem(tokenKey, token);
    }
    /**
     * @param {?} tokenKey
     * @return {?}
     */
    userLocalRemoveToken(tokenKey) {
        localStorage.removeItem(tokenKey);
    }
    /**
     * @param {?} tokenKey
     * @return {?}
     */
    userLocalCheckExpiration(tokenKey) {
        /** @type {?} */
        const token = localStorage.getItem(tokenKey);
        if (!token) {
            return true;
        }
        /** @type {?} */
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        return helper.isTokenExpired(token);
    }
    /**
     * @param {?} tokenKey
     * @return {?}
     */
    userLocalGetToken(tokenKey) {
        /** @type {?} */
        const token = localStorage.getItem(tokenKey);
        if (!token) {
            return '';
        }
        if (this.userLocalCheckExpiration(tokenKey)) {
            return '';
        }
        return token;
    }
    /**
     * @param {?} tokenKey
     * @return {?}
     */
    userLocalGetExpirationDate(tokenKey) {
        /** @type {?} */
        const token = localStorage.getItem(tokenKey);
        /** @type {?} */
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        return helper.getTokenExpirationDate(token);
    }
}
NgUserManService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgUserManService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }
];
/** @nocollapse */ NgUserManService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgUserManService_Factory() { return new NgUserManService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"])); }, token: NgUserManService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SharedService {
    /**
     * @param {?} http
     */
    constructor(http) {
        this.http = http;
        this.shareEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.shareEvent$ = this.shareEvent.asObservable();
        this.eventToReloadComments = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.eventToReloadComments$ = this.eventToReloadComments.asObservable();
    }
    // sharing data between components
    /**
     * @param {?} x
     * @return {?}
     */
    sharingEvent(x) {
        this.shareEvent.next(x);
    }
    /**
     * @return {?}
     */
    getSharingEvent() {
        return this.shareEvent$;
    }
    // ['updateDesigns'] design-item-component => design-editor-component
    // ['closeSidenav'] design-popup-component => app-component
    // ['userChangeStatusEmitter'] user login (login comp) or logout (content-component) or
    //     markCommentsAsReaded (content-component) emitter =>
    //     content-component (update unreaded comments length)
    // events on any changes in comments
    /**
     * @param {?=} event
     * @return {?}
     */
    sharingEventToReloadComments(event) {
        console.log('sharing service event', event);
        this.eventToReloadComments.next(event);
    }
    // if event === null - reload comment based variables (like unreaded comments length)
    // if event === {sort, skip, limit, displayFilter} - should reload comments in comments-list component
    /**
     * @return {?}
     */
    getEventToReloadComments() {
        return this.eventToReloadComments$;
    }
    // sending feedback message
    /**
     * @param {?} feedback
     * @param {?} recaptcha
     * @return {?}
     */
    sendFeedbackMessage(feedback, recaptcha) {
        /** @type {?} */
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: {
                    recaptcha
                }
            })
        };
        return this.http.post('api/shared/send-feedback-message', feedback, httpOptions);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    checkFile(file) {
        if (!file) {
            return ({ success: false, message: 'Файл не вибрано' });
        }
        else if (file.size > 26215000) { // 25 * 1024 * 1024
            return ({ success: false, message: 'Розмір файлу повинен бути менше 25Мб' });
        }
        else if (file.type !== 'image/jpg' &&
            file.type !== 'image/jpe' &&
            file.type !== 'image/gif' &&
            file.type !== 'image/jpeg' &&
            file.type !== 'image/bmp' &&
            file.type !== 'image/png' &&
            file.type !== 'image/svg+xml' &&
            file.type !== 'image/webp') {
            return ({ success: false, message: 'Виберіть інший тип файлу' });
        }
        else {
            return ({ success: true, message: '' });
        }
    }
}
SharedService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
SharedService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
/** @nocollapse */ SharedService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function SharedService_Factory() { return new SharedService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: SharedService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgUserManComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgUserManComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-ng-user-man',
                template: `
    <p>
      ng-user-man works!
    </p>
  `
            }] }
];
/** @nocollapse */
NgUserManComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LoginComponent {
    /**
     * @param {?} matSnackBar
     * @param {?} ngUserManService
     * @param {?} sharedService
     * @param {?} injector
     * @param {?} router
     */
    constructor(matSnackBar, ngUserManService, sharedService, injector, router) {
        this.matSnackBar = matSnackBar;
        this.ngUserManService = ngUserManService;
        this.sharedService = sharedService;
        this.injector = injector;
        this.router = router;
        this.hidePassword = true;
        // this.config = config;
        // this.userService = injector.get('UserService');
        // this.ngUserManService = injector.get('NgUserManService');
        this.config = injector.get('config');
        // this.sharingService = sharingService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.userLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
            ]),
        });
    }
    /**
     * @return {?}
     */
    onUserLoginSubmit() {
        this.user = (/** @type {?} */ ({
            login: this.userLoginForm.get('login').value,
            password: this.userLoginForm.get('password').value,
        }));
        this.ngUserManService.userLogin(this.user)
            .subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result === 'logged in') {
                this.resetForm();
                this.ngUserManService.logging();
                this.sharedService.sharingEventToReloadComments();
                // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
                this.matSnackBar.open(`${this.user.login}, ви увійшли на сайт`, '', { duration: 5000 });
                this.router.navigate(['/user', 'profile']);
            }
        }), (/**
         * @param {?} err
         * @return {?}
         */
        err => {
            this.matSnackBar.open(err.error.message || 'Сталася помилка', '', { duration: 5000, panelClass: 'snack-bar-danger' });
        }));
    }
    /**
     * @return {?}
     */
    resetForm() {
        if (this.userCreateFormDirective) {
            this.userCreateFormDirective.resetForm();
        }
    }
}
LoginComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'lib-login',
                template: "\n<!-- {{config | json}} -->\n<div class=\"container\">\n  <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n    <div fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\n\n    <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\n\n      <div class=\"centered-container\">\n        <mat-card class=\"form-block\">\n          <mat-card-content>\n\n            <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\n              <img class=\"responsive-image\" [src]=\"config.loginComponent.logo\" width=\"367px\" alt=\"HandMADE\">\n            </div>\n            <form [formGroup]=\"userLoginForm\" (submit)=\"onUserLoginSubmit()\">\n\n              <div fxLayout=\"row\">\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\n                  <mat-icon color=\"primary\">{{config.loginComponent.loginIcon}}</mat-icon>\n                </div>\n                <mat-form-field>\n                  <input matInput placeholder=\"\u041B\u043E\u0433\u0456\u043D\" formControlName=\"login\" required>\n                  <mat-error *ngIf=\"userLoginForm.get('login').errors?.required &&\n                      userLoginForm.get('login').touched\">\n                    \u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043B\u043E\u0433\u0456\u043D\n                  </mat-error>\n                </mat-form-field>\n              </div>\n\n              <div fxLayout=\"row\">\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\n                  <mat-icon color=\"primary\">{{config.loginComponent.passwordIcon}}</mat-icon>\n                </div>\n                <mat-form-field>\n                  <input matInput placeholder=\"\u041F\u0430\u0440\u043E\u043B\u044C\" formControlName=\"password\" required\n                    [type]=\"hidePassword ? 'password' : 'text'\">\n                  <mat-icon class=\"muted\" matSuffix (click)=\"hidePassword = !hidePassword\">\n                    {{hidePassword ? 'visibility' : 'visibility_off'}}</mat-icon>\n                  <mat-error *ngIf=\"userLoginForm.get('password').errors?.required &&\n                          userLoginForm.get('password').touched\">\n                    \u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C\n                  </mat-error>\n                </mat-form-field>\n              </div>\n\n\n              <div class=\"links-wrapper\" fxLayoutAlign=\"center\">\n                <button class=\"google-button full-width\" mat-raised-button color=\"primary\" aria-label=\"Login\"\n                  [disabled]=\"!userLoginForm.valid\">\u0423\u0432\u0456\u0439\u0442\u0438</button>\n              </div>\n              <div fxLayout=\"row\" class=\"links-wrapper\">\n                <a [routerLink]=\"['/user/create']\">\u0417\u0430\u0440\u0435\u0454\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438\u0441\u044C</a>\n                <span fxFlex></span>\n                <a [routerLink]=\"['/user/password-reset']\">\u0417\u0430\u0431\u0443\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C</a>\n              </div>\n\n              <div class=\"links-wrapper\" fxLayoutAlign=\"center\">\n                <!-- <a class=\"google-button\" mat-raised-button href=\"{{config.host + '/api/user/auth/google'}}\" -->\n                <a class=\"google-button\" mat-raised-button href=\"{{'/api/user/auth/google'}}\"\n                  aria-label=\"Sign in with Google\">\n                  <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18px\" height=\"18px\" viewBox=\"0 0 48 48\">\n                    <g>\n                      <path fill=\"#EA4335\"\n                        d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\">\n                      </path>\n                      <path fill=\"#4285F4\"\n                        d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\">\n                      </path>\n                      <path fill=\"#FBBC05\"\n                        d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\">\n                      </path>\n                      <path fill=\"#34A853\"\n                        d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\">\n                      </path>\n                      <path fill=\"none\" d=\"M0 0h48v48H0z\"></path>\n                    </g>\n                  </svg>\n                  Sign in with Google</a>\n              </div>\n\n\n\n            </form>\n          </mat-card-content>\n        </mat-card>\n      </div>\n\n\n    </div>\n  </div>\n</div>",
                styles: [".bg{background-color:#deb887}"]
            }] }
];
/** @nocollapse */
LoginComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] },
    { type: NgUserManService },
    { type: SharedService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LoginComponent.propDecorators = {
    userCreateFormDirective: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MaterialModule {
}
MaterialModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [],
                imports: [
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                ],
                exports: [
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
                    _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { NgUserManService } from './ng-user-man.service';
// import { SharedService } from './shared.service';
class NgUserManModule {
}
NgUserManModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [
                    NgUserManComponent,
                    LoginComponent,
                ],
                providers: [
                // NgUserManService,
                // SharedService
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                    MaterialModule
                ],
                exports: [
                    NgUserManComponent,
                    LoginComponent,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng-user-man.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header *ngIf=\"showHeader\"></app-header>\r\n<!-- <app-socket></app-socket> -->\r\n<app-content></app-content>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/about/about.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/about/about.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<article id=\"about\">\r\n    <div class=\"container\">\r\n      <div class=\"app-container-h app-container-v\">\r\n        <div class=\"container\">\r\n          <div class=\"row\" fxLayout=\"row\">\r\n            <div class=\"cell\" fxFlex=\"100\">\r\n                <section>\r\n                  <h1 class=\"mat-display-2 title\">Вітаю в творчій майстерні!</h1>\r\n                  <!-- <img class=\"avatar-big\" src=\"./assets/images/my-photo180x180.png\" alt=\"my photo\"> -->\r\n                  <div class=\"avatar-big-block\">\r\n                    <img class=\"avatar-big\" src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_180,h_180,f_auto/' +\r\n                      'my-photo180x180'}}\" alt=\"my photo\">\r\n                </div>\r\n                  <p class=\"text-justify muted mat-body-1\">\r\n                    Мене звати Ірина, я мама чудової донечки, саме Вона надихає мене на нові цікаві витвори.\r\n                      Канікули у школі - творимо маленький театр ляльок. Вільна хвилинка -\r\n                      в'яжемо теплі шарфики для іграшок, шиємо та розмальовуємо кавові іграшки. \r\n                      Свято у школі - новий віночок.. Ще багато можна писати про себе та мої захоплення, але згодом.. \r\n                      Завітайте у мою майстерню.\r\n                  </p>\r\n                  <p class=\"text-justify muted mat-body-1\">\r\n                    Зв'язатись зі мною можна за допомогою електорнної пошти: <a class=\"bold\" href=\"mailto:info@hmade.work\">info@hmade.work</a>\r\n\r\n                  </p>\r\n\r\n                  <p class=\"text-justify muted mat-body-1\">\r\n                    або скориставшись <a [routerLink]=\"['/feedback']\" class=\"bold\" aria-label=\"Feedback\"\r\n                    [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                   формою зворотнього зв'язку</a>\r\n                  </p>\r\n                </section>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n</article>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/confirm-popup/confirm-popup.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/confirm-popup/confirm-popup.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  {{data.message}}\r\n</p>\r\n<button mat-button color=\"danger\" (click)=\"onClose(true, data.payload)\" aria-label=\"Yes\">Так</button>\r\n<button mat-button color=\"primary\" (click)=\"onClose(false, null)\" aria-label=\"No\">Ні</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/content/content.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/content/content.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<nav id=\"toolbar\" class=\"mat-elevation-z4\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <div class=\"logo\" fxFlex.lt-md=\"80\" fxFlex=\"25\" fxLayoutAlign=\"start center\">\r\n    <a href=\"\">\r\n      <img src=\"./assets/images/hmade_logo_light.svg\" height=\"36px\" alt=\"HandMADE logo\">\r\n    </a>\r\n  </div>\r\n  <div fxShow=\"true\" fxHide.lt-md=\"true\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\r\n    <a *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\" class=\"link\"\r\n      [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\" [routerLinkActive]=\"['active']\"\r\n      [routerLinkActiveOptions]=\"{exact: false}\">\r\n      <span class=\"type1\">{{mainMenuCommonItem.name}}</span>\r\n    </a>\r\n  </div>\r\n\r\n  <div fxShow=\"true\" fxHide.lt-md=\"true\" fxFlex=\"25\" fxLayoutAlign=\"end center\">\r\n    <a *ngIf=\"allowTo('guest')\" [matBadgeHidden]=\"!restrictTo(['guest']) || !unreadedCommentsLength\" class=\"link\" \r\n        matBadge=\"{{unreadedCommentsLength}}\" matBadgeColor=\"accent\" matBadgePosition=\"above before\" \r\n        (click)=\"showUnreadededComments()\">\r\n      <span class=\"type2\" [matMenuTriggerFor]=\"settingsMenu\" #settingsMenuTrigger=\"matMenuTrigger\"\r\n      (mouseover)=\"onSettingsMenuMouseover()\">\r\n        <mat-icon class=\"mat-icon-aligner\">settings</mat-icon>{{user?.name}} {{user?.surname}}\r\n      </span>\r\n    </a>\r\n    \r\n    <mat-menu #settingsMenu=\"matMenu\" xPosition=\"after\" yPosition=\"above\" [overlapTrigger]=\"false\">\r\n      <span (mouseleave)=\"onSettingsMenuMouseleave()\">\r\n        <a *ngIf=\"allowTo('guest')\" mat-menu-item [routerLink]=\"['/user/profile']\" [routerLinkActive]=\"['accent']\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <mat-icon>account_circle</mat-icon><span>Профіль</span>\r\n        </a>\r\n        <a *ngIf=\"allowTo('manager')\" mat-menu-item [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['accent']\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <mat-icon>settings</mat-icon><span>Dashboard</span>\r\n        </a>\r\n        <a *ngIf=\"allowTo('user') && unreadedCommentsLength\" mat-menu-item (click)=\"showUnreadededComments()\">\r\n          <mat-icon color=\"accent\">comments</mat-icon><span>Нові коментарі</span>\r\n        </a>\r\n\r\n        <a *ngIf=\"allowTo('user') && unreadedCommentsLength\" mat-menu-item (click)=\"markCommentsAsReaded()\">\r\n          <mat-icon>done_all</mat-icon><span>Коментарі прочитані</span>\r\n        </a>\r\n      </span>\r\n    </mat-menu>\r\n\r\n    <a *ngIf=\"allowTo('notUser')\" class=\"link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n      [routerLink]=\"['/user/login']\"><span class=\"type1\">Вхід</span></a>\r\n    <a *ngIf=\"allowTo('guest')\" class=\"link\" (click)=\"userLogout()\">\r\n      <span class=\"type2\"><mat-icon class=\"mat-icon-aligner\">exit_to_app</mat-icon>Вихід</span>\r\n    </a>\r\n  </div>\r\n\r\n  <div class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\" fxFlex=\"20\" fxLayoutAlign=\"end center\">\r\n    <button mat-button (click)=\"sidenav.toggle()\" aria-label=\"Menu\">\r\n      <span *ngIf=\"allowTo('user')\" matBadge=\"{{unreadedCommentsLength}}\" matBadgeColor=\"accent\" matBadgePosition=\"above before\" \r\n      matBadgeOverlap=\"false\" [matBadgeHidden]=\"!unreadedCommentsLength\"></span>\r\n      <mat-icon *ngIf=\"sidenav.opened\">format_indent_increase</mat-icon>\r\n      <mat-icon *ngIf=\"!sidenav.opened\">menu</mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n</nav>\r\n\r\n<mat-sidenav-container fxFlexFill>\r\n  <mat-sidenav #sidenav fxLayout=\"column\" position=\"end\" class=\"sidenav mat-elevation-z4\" role=\"navigation\" mode=\"side\">\r\n    <div fxLayout=\"column\">\r\n      <mat-nav-list>\r\n        <mat-list-item *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\">\r\n          <a matLine [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n            [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\" (click)=\"sidenav.toggle()\">\r\n            {{mainMenuCommonItem.name}}\r\n          </a>\r\n        </mat-list-item>\r\n\r\n        <mat-expansion-panel *ngIf=\"allowTo('guest')\" class=\"mat-elevation-z0\">\r\n          <mat-expansion-panel-header class=\"sidenav-expansion-panel\">\r\n            <!-- <mat-panel-title> -->\r\n            <!-- <mat-list-item> -->\r\n              \r\n            <span matLine>\r\n                <mat-icon class=\"mat-icon-aligner\">settings</mat-icon>\r\n                <span>{{user.name}} {{user.surname}}</span>\r\n            </span>\r\n                <!-- <mat-icon class=\"mat-icon-aligner\">settings</mat-icon>{{user.name}} {{user.surname}} -->\r\n              <!-- </span> -->\r\n            <!-- </mat-list-item> -->\r\n            <!-- </mat-panel-title> -->\r\n\r\n          </mat-expansion-panel-header>\r\n          <mat-list-item *ngIf=\"allowTo('guest')\">\r\n            <mat-icon matListIcon>account_circle</mat-icon>\r\n            <a matLine [routerLink]=\"['/user/profile']\" [routerLinkActive]=\"['muted']\"\r\n              [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"sidenav.toggle()\">\r\n              Профіль</a>\r\n          </mat-list-item>\r\n          <mat-list-item *ngIf=\"allowTo('manager')\">\r\n            <mat-icon matListIcon>settings</mat-icon>\r\n            <a matLine [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['muted']\"\r\n              [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"sidenav.toggle()\">\r\n              Dashboard</a>\r\n          </mat-list-item>\r\n          <mat-list-item *ngIf=\"allowTo('user') && unreadedCommentsLength\">\r\n              <mat-icon matListIcon matBadge=\"{{unreadedCommentsLength}}\" matBadgeColor=\"accent\" \r\n              matBadgePosition=\"above before\">comment</mat-icon>\r\n              <a mat-menu-item (click)=\"showUnreadededComments(); sidenav.toggle()\">Нові коментарі</a>\r\n          </mat-list-item>\r\n          <mat-list-item *ngIf=\"allowTo('user') && unreadedCommentsLength\">\r\n              <mat-icon matListIcon>done_all</mat-icon>\r\n              <a mat-menu-item (click)=\"markCommentsAsReaded(); sidenav.toggle()\">Коментарі прочитані</a>\r\n          </mat-list-item>\r\n          </mat-expansion-panel>\r\n\r\n        <mat-list-item>\r\n          <a matLine [routerLink]=\"['/privacy']\" aria-label=\"privacy conditions\" [routerLinkActive]=\"['accent']\"\r\n            [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"sidenav.toggle()\">\r\n            Політика конфіденційності\r\n          </a>\r\n        </mat-list-item>\r\n        <mat-list-item *ngIf=\"allowTo('notUser')\">\r\n          <a matLine [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n            [routerLink]=\"['/user/login']\" (click)=\"sidenav.toggle()\">Вхід</a>\r\n        </mat-list-item>\r\n\r\n        <!-- <mat-list-item *ngIf=\"allowTo('manager')\">\r\n          <a matLine (click)=\"sidenav.toggle()\">\r\n            user - {{user}}\r\n          </a>\r\n          <mat-icon matListIcon>exit_to_app</mat-icon>\r\n        </mat-list-item> -->\r\n\r\n        <mat-list-item *ngIf=\"allowTo('guest')\">\r\n          <a matLine (click)=\"userLogout()\" (click)=\"sidenav.toggle()\">\r\n            Вихід\r\n          </a>\r\n          <mat-icon matListIcon>exit_to_app</mat-icon>\r\n        </mat-list-item>\r\n\r\n      </mat-nav-list>\r\n    </div>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    {{error | json}}\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/crsl/crsl.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/crsl/crsl.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-horizontal-stepper class=\"crsl\" #stepper>\r\n  <ng-template matStepperIcon=\"edit\">\r\n  </ng-template>\r\n\r\n  <ng-template matStepperIcon=\"done\">\r\n  </ng-template>\r\n  <ng-template matStepperIcon=\"number\" let-index=\"index\">\r\n    <!--{{index + 10}}-->\r\n  </ng-template>\r\n\r\n  <mat-step *ngFor=\"let banner of homeBanner\">\r\n    <!--<img *ngIf=\"media.isActive('md')\" class=\"responsive-image-stretch\" src=\"{{-->\r\n    <img *ngIf=\"media.isActive('gt-md')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_760,h_350,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n    <img *ngIf=\"media.isActive('md')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_550,h_250,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n    <img *ngIf=\"media.isActive('sm')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_760,h_350,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n    <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_590,h_270,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n\r\n  </mat-step>\r\n\r\n</mat-horizontal-stepper>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/design-popup/design-popup.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/design-popup/design-popup.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n  <div class=\"cell\" fxLayout>\r\n    <div fxFlex=\"calc(100%-40px)\" fxLayoutAlign=\"center center\">\r\n      <h3 class=\"h3 muted\">{{data.title}}</h3>\r\n    </div>\r\n\r\n    <div fxFlex=\"40px\" fxLayoutAlign=\"end center\">\r\n      <div>\r\n        <button mat-icon-button color=\"accent\" (click)=\"onClose()\" aria-label=\"Close\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"designProducts\" class=\"container\">\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\" fxLayout=\"row\" fxFill=\"center\">\r\n\r\n        <mat-form-field fxFlex=\"100\">\r\n        <mat-select placeholder=\"Колекції\" #productSelect (valueChange)=\"onProductSelect($event)\">\r\n          <mat-option *ngFor=\"let product of designProducts\" [value]=\"product\">\r\n              {{product.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n          </mat-form-field>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"responsive-image-popup-container\">\r\n      <img class=\"responsive-image-popup\" src=\"{{\r\n          config.imgPath +\r\n          config.cloudinary.cloud_name +\r\n          cloudinaryOptions +\r\n          data.image}}\"\r\n           alt=\"design\">\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/feedback/feedback.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/feedback/feedback.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"feedback\">\r\n    <div class=\"container\">\r\n      <div class=\"app-container-h app-container-v\">\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n    <div fxFlex.gt-xs=\"10\" fxFlex.gt-md=\"15\"></div>\r\n\r\n    <div class=\"cell\" fxFlex.gt-xs=\"80\" fxFlex.gt-md=\"70\">\r\n\r\n      <div class=\"centered-container-600\">\r\n        <mat-card  class=\"form-block\">\r\n          <mat-card-content>\r\n              <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n                <img class=\"responsive-image\" src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\">\r\n              </div>\r\n            <form #fForm=\"ngForm\" [formGroup]=\"feedbackForm\" (submit)=\"onFeedbackFormSubmit()\">\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">textsms</mat-icon>\r\n                </div>\r\n              <mat-form-field>\r\n                <textarea rows=\"5\" matInput placeholder=\"Повідомлення\" formControlName=\"message\" required></textarea>\r\n                <mat-error\r\n                  *ngIf=\"(feedbackForm.get('message').errors?.minlength ||\r\n                                    feedbackForm.get('message').errors?.maxlength ||\r\n                                    feedbackForm.get('message').errors?.required) &&\r\n                                    feedbackForm.get('message').touched\">\r\n                  Довжина повинна бути від 3 до 500 символів\r\n                </mat-error>\r\n              </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">account_circle</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Ваше ім'я\" formControlName=\"name\" required>\r\n                  <mat-error\r\n                    *ngIf=\"feedbackForm.get('contacts').errors?.required &&\r\n                        feedbackForm.get('name').touched\">\r\n                    Введіть ім'я\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">contacts</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Контактний номер або email\" formControlName=\"contacts\" required>\r\n                  <mat-error\r\n                    *ngIf=\"feedbackForm.get('contacts').errors?.required &&\r\n                        feedbackForm.get('contacts').touched\">\r\n                    Введіть котактну інформацію\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <re-captcha [ngClass]=\"{'display-none':\r\n          !feedbackForm.get('contacts').valid || !feedbackForm.get('contacts').valid ||\r\n          !feedbackForm.get('message').valid}\"\r\n                          [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                          siteKey=\"{{config.recaptchaSiteKey}}\">\r\n              </re-captcha>\r\n              <!--<div *ngIf=\"!processing\" fxLayout=\"row\">-->\r\n                <!--<object type=\"image/svg+xml\" data=\"./assets/images/loading.svg\" width=\"50px\" height=\"20px\">-->\r\n                  <!--Loading..-->\r\n                <!--</object>-->\r\n              <!--</div>-->\r\n\r\n              <div class=\"submit-button-wrapper\">\r\n                <!--<span fxFlex></span>-->\r\n                <button mat-raised-button class=\"full-width\" color=\"primary\" aria-label=\"Send message\"\r\n                 [disabled]=\"!feedbackForm.valid || processing\">\r\n                  <mat-icon *ngIf=\"!processing\">message</mat-icon> Написати мені</button>\r\n              </div>\r\n\r\n            </form>\r\n          </mat-card-content>\r\n          <!--<img mat-card-image class=\"mat-card-image-bottom\" src=\"./assets/images/logo400x140-2.jpg\" alt=\"\">-->\r\n        </mat-card>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"mat-elevation-z8\" id=\"footer\">\r\n  <a mat-button fxHide.lt-md=\"true\" [routerLink]=\"['/privacy']\" aria-label=\"privacy conditions\"\r\n     [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    Політика конфіденційності\r\n  </a>\r\n  <div fxFlex></div>\r\n  <a mat-button [routerLink]=\"['/feedback']\" aria-label=\"Feedback\"\r\n     [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <mat-icon>question_answer</mat-icon> Зворотній зв'язок\r\n  </a>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/gallery/gallery.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/gallery/gallery.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-container-h\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n      <h1 class=\"mat-display-1\">Галерея</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\" *ngFor=\"let product of productsWithGallery\">\r\n        <mat-card>\r\n          <mat-card-subtitle>\r\n            <a mat-button [attr.aria-label]=\"product.name\"\r\n               [routerLink]=\"['/products', 'ch', {outlets: {primary: [product.parent[0], 'details', product._id],\r\n                    breadcrumb: [product.parent[0], 'details', product._id]}}]\"\r\n               [queryParams]=\"{name: product.name}\"\r\n               [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n              {{product.name}}\r\n            </a>\r\n          </mat-card-subtitle>\r\n          <div class=\"row\" fxLayout=\"row\">\r\n            <div fxFlex=\"100\" class=\"cell text-justify\" [innerHTML]=\"product.description\"></div>\r\n\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"33\" fxFlex.gt-sm=\"25\" class=\"cell\"\r\n                 fxLayout fxLayoutAlign=\"center center\"\r\n                 *ngFor=\"let productAsset of product.assets\">\r\n              <mat-card *ngIf=\"media.isActive('xs')\" class=\"no-padding\">\r\n                <mat-card-header fxLayoutAlign=\"center center\">\r\n                  <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\r\n                </mat-card-header>\r\n                <mat-card-content fxLayoutAlign=\"center center\">\r\n\r\n                  <img *ngIf=\"productAsset\" class=\"responsive-image hover-cursor\"\r\n                       (click)=\"openDialog(productAsset, product.name)\"\r\n                       src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_590,h_295,f_auto/' +\r\n                      productAsset}}\"\r\n                       alt=\"design\">\r\n                </mat-card-content>\r\n              </mat-card>\r\n\r\n\r\n              <mat-card *ngIf=\"media.isActive('gt-xs')\" class=\"no-padding\" fxFlex.gt-xs=\"100\">\r\n                <mat-card-header fxLayoutAlign=\"center center\">\r\n                  <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\r\n                </mat-card-header>\r\n                <mat-card-content fxLayoutAlign=\"center center\">\r\n                  <img *ngIf=\"productAsset\" class=\"responsive-image-stretch hover-cursor\"\r\n                       (click)=\"openDialog(productAsset, product.name)\"\r\n                       src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_350,h_175,f_auto/' +\r\n                      productAsset}}\"\r\n                       alt=\"design\">\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"app-container-h primary-background\" id=\"header\">\r\n  <div class=\"container\" fxHide.lt-md=\"true\">\r\n    <div class=\"row primary-background\">\r\n      <div class=\"cell\">\r\n        <a href=\"\">\r\n          <img src=\"./assets/images/hmade_logo_light.svg\" height=\"60px\">\r\n        </a>\r\n      </div>\r\n      <div fxFlex></div>\r\n    <div class=\"cell\">\r\n      <div class=\"row\" fxLayout=\"row\">\r\n        <div class=\"cell\" fxFlex=\"100\">\r\n          <a mat-button [routerLink]=\"['/feedback']\" class=\"muted\" aria-label=\"Ask\"\r\n             [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <mat-icon>mail</mat-icon> Задати питання\r\n          </a>\r\n        </div>\r\n        <div class=\"cell\" fxFlex=\"100\">\r\n          <a mat-button class=\"muted\" aria-label=\"Call\"\r\n             href=\"tel:+380985443968\">\r\n            <mat-icon>phone</mat-icon> 098 544 39 68\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    </div>\r\n  </div>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/image-popup/image-popup.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/image-popup/image-popup.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\">\r\n  <div class=\"cell\" fxLayout>\r\n    <div fxFlex=\"calc(100%-40px)\" fxLayoutAlign=\"center center\">\r\n      <h3 class=\"h3 muted\">{{data.title}}</h3>\r\n    </div>\r\n\r\n    <div fxFlex=\"40px\" fxLayoutAlign=\"end center\">\r\n      <div>\r\n        <button mat-icon-button color=\"accent\" (click)=\"onClose()\" aria-label=\"Close\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"responsive-image-popup-container\">\r\n      <img class=\"responsive-image-popup\" src=\"{{\r\n          config.imgPath +\r\n          config.cloudinary.cloud_name +\r\n          data.cloudinaryOptions +\r\n          data.image}}\"\r\n           alt=\"design\">\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/landing/landing.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/landing/landing.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"landing\">\r\n  <div class=\"container arrange-background\">\r\n    <div class=\"app-container-h app-container-v\">\r\n      <section class=\"row landing-block\" fxLayout=\"row\">\r\n\r\n        <div id=\"landing-left\" class=\"container\" fxFlexOrder.lt-md=\"2\" fxFlex.xs=\"50\" fxFlex.sm=\"50\" fxFlex=\"35\"\r\n          fxLayoutAlign=\"center center\">\r\n          <div class=\"row\" fxLayoutAlign=\"center center\">\r\n\r\n            <div class=\"cell\" data-aos=\"fade-right\" data-aos-offset=\"100\" data-aos-easing=\"ease-in-out\"\r\n              data-aos-duration=\"1000\">\r\n              <a [routerLink]=\"['/products', 'ch']\">\r\n                <img class=\"responsive-image-stretch hover-transition\" src=\"{{\r\n                            config.imgPath +\r\n                            config.cloudinary.cloud_name +\r\n                            '/c_fill,w_500,h_500,f_auto/' +\r\n                            'products-logo'}}\" alt=\"Вироби\">\r\n              </a>\r\n            </div>\r\n            <a mat-raised-button color=\"accent\" alt=\"Вироби\" class=\"hover-button\" fxHide=\"xs\"\r\n              [routerLink]=\"['/products', 'ch']\">Мої роботи</a>\r\n          </div>\r\n        </div>\r\n        <div class=\"container\" fxFlexOrder.lt-md=\"1\" fxFlex.lt-md=\"100\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\r\n          <div class=\"row\">\r\n            <div class=\"cell\">\r\n\r\n              <h1 class=\"mat-h1 title text-align-center\">Вітаю в творчій майстерні HMADE!</h1>\r\n              <div class=\"avatar-big-block, opacity0\" [ngClass]=\"{animationAppear05s: !avatarLoading}\">\r\n                <img (load)=\"onAvatarLoaded()\"\r\n                  class=\"avatar-big\" src=\"{{\r\n                                config.imgPath +\r\n                                config.cloudinary.cloud_name +\r\n                                '/c_fill,w_180,h_180,f_auto/' +\r\n                                'my-photo180x180'}}\" alt=\"my photo\">\r\n              </div>\r\n              <p class=\"body-3 muted text-align-center\">Мене звати Ірина, я мама чудової донечки, саме Вона надихає мене\r\n                на нові цікаві витвори.\r\n                Канікули у школі - творимо маленький театр ляльок. Вільна хвилинка - в'яжемо теплі шарфики для іграшок,\r\n                шиємо та розмальовуємо кавові іграшки. Свято у школі - новий віночок..\r\n                Ще багато можна писати про себе та мої захоплення, але згодом..\r\n                Завітайте у мою майстерню.</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div id=\"landing-right\" class=\"container\" fxFlexOrder.lt-md=\"3\" fxFlex.xs=\"50\" fxFlex.sm=\"50\" fxFlex=\"35\"\r\n          fxLayoutAlign=\"center center\">\r\n          <div class=\"row\" fxLayoutAlign=\"center center\">\r\n            <div class=\"cell\" data-aos=\"fade-left\" data-aos-offset=\"100\" data-aos-easing=\"ease-in-out\"\r\n              data-aos-duration=\"1000\">\r\n              <a [routerLink]=\"['/mcs', 'ch']\">\r\n                <img class=\"responsive-image-stretch hover-transition\" src=\"{{\r\n                            config.imgPath +\r\n                            config.cloudinary.cloud_name +\r\n                            '/c_fill,w_500,h_500,f_auto/' +\r\n                            'mcs-logo'}}\" alt=\"Майстеркласи\">\r\n              </a>\r\n            </div>\r\n            <a mat-raised-button class=\"hover-button\" color=\"accent\" alt=\"Майстер-класи\" fxHide=\"xs\"\r\n              [routerLink]=\"['/mcs', 'ch']\">Майстер-класи</a>\r\n          </div>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n  <div class=\"container arrange-background\">\r\n    <div class=\"app-container-h app-container-v\">\r\n      <section *ngIf=\"products\" class=\"row\">\r\n        <div class=\"cell\" fxFlex=\"100\">\r\n          <h2 class=\"mat-h2 title\">Нові роботи</h2>\r\n        </div>\r\n        <div *ngFor=\"let product of products; let i = index\" class=\"cell\" [attr.id]=\"'product' + i\" data-aos=\"fade-down\"\r\n          data-aos-offset=\"100\" data-aos-easing=\"ease-in-out\" data-aos-duration=\"800\" fxFlex.xs=\"100\" fxFlex.sm=\"50\"\r\n          fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">\r\n          <app-product-item-brief [product]=\"product\"></app-product-item-brief>\r\n        </div>\r\n      </section>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/literature/literature.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/literature/literature.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"literature\">\r\n  <div class=\"container\">\r\n    <div class=\"app-container-h app-container-v\">\r\n      <div class=\"container\">\r\n        <div class=\"row\" fxLayout=\"row\">\r\n          <div class=\"cell\" fxFlex=\"100\">\r\n            <h1 class=\"mat-display-2 title\">Літературна сторінка</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/page-404/page-404.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/page-404/page-404.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"page-404\">\r\n  <div class=\"container\">\r\n    <div class=\"app-container-h app-container-v\">\r\n      <div class=\"container\">\r\n        <div class=\"row\" fxLayout=\"row\">\r\n          <div class=\"cell\" fxFlex=\"100\">\r\n            <h1 class=\"mat-h1\">Сторінку не знайдено</h1>\r\n            <a [routerLink]=\"['/']\">Перейти на головну</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/privacy/privacy.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/privacy/privacy.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<article id=\"privacy\">\n  <div class=\"container\">\n    <div class=\"app-container-h app-container-v\">\n      <div class=\"container\">\n        <div class=\"row\" fxLayout=\"row\">\n          <div class=\"cell\" fxFlex=\"100\">\n            <section>\n              <h2 class=\"mat-h2 title\">Політика конфіденційності</h2>\n              <p class=\"text-justify muted mat-body-1\">Цей документ описує політику конфіденційності сайту hmade.work\n                'Майстерня творчості'.</p>\n              <p class=\"text-justify muted mat-body-1\">Наш сайт може містити посилання на інші веб-ресурси. Ми не несемо\n                відповідальності за політику конфіденційності або зміст цих ресурсів. Стосовно будь-яких питаннь або\n                сумнів з приводу цієї політики, просимо зв’язатися з нами за адресою електронної пошти\n                <a class=\"bold\" href=\"mailto:privacy@hmade.work\">privacy@hmade.work</a>. Ця політика поширюється тільки на інформацію, зібрану на нашому сайті.</p>\n              <h3 class=\"mat-h3\">Інформація від користувачів (огляди, рейтинги, коментарі та інше)</h3>\n              <p class=\"text-justify muted mat-body-1\">Наш сайт надає можливість користувачам залишати коментарі,\n                приймати участь у обговореннях, впливати на рейтинги певного контенту сайту. Повідомляємо, що інформація\n                опублікована користувачем, а також логін, ім’я, прізвище або будь-яке зображення чи фотографія справжні\n                чи вигадані стають надбаннями громадськості та можуть бути використані в будь-яких засобах інформації.\n              </p>\n              <p class=\"text-justify muted mat-body-1\">Приймаючи участь у дискусії, користувач повинен усвідомлювати, що\n                його дії будуть публічними і будь-яка особиста інформація, надана ним, може бути прочитана, збережена чи\n                використана іншими користувачами або ресурсами, наприклад, для розсилки небажаних повідомлень. Ми не\n                несемо відповідальність за особисту інформацію, яку користувач публікує на сайті в тому числі у\n                коментарях, і користувач погоджується, що ця інформація буде вважатися такою, що була надана\n                користувачем.</p>\n              <p class=\"text-justify muted mat-body-1\">Ми залишаємо за собою право на видалення коментарів та\n                повідомлень користувача, а також на блокування облікового запису користувача без пояснення причин.</p>\n              <h3 class=\"mat-h3\">Обмеження відповідальності за достовірність отриманої інформації.</h3>\n              <p class=\"text-justify muted mat-body-1\">Ми не перевіряємо достовірність інформації отриманої від\n                користувачів.</p>\n              <p class=\"text-justify muted mat-body-1\">\n                Інформація, яка може бути оброблена в процесі взаємодії з користувачем:\n              </p>\n              <ul>\n                <li class=\"text-justify muted mat-body-1\">Основна інформація профілю користувача, отримана під час його\n                  реєстрації на\n                  сайті або передана під час автентифікації сервісами Google чи Facebook, зокрема ім’я, прізвище,\n                  електронна адреса та зображення профілю.</li>\n                <li class=\"text-justify muted mat-body-1\">Певна інформація з облікового запису Google або Facebook після\n                  отримання\n                  згоди на її перегляд від користувача.</li>\n                <li class=\"text-justify muted mat-body-1\">Інформація про відвідування, що зберігається у файлах cookie,\n                  та дозволяє\n                  ідентифікувати користувача. Також деяка не приватна інформація, на зразок IP-адреси, типу браузера\n                  тощо\n                </li>\n                <li class=\"text-justify muted mat-body-1\">Користувацькі повідомлення, такі як коментарі або повідомлення\n                  в формі\n                  зворотнього зв’язку, що можуть бути збережені та оброблені. Для зв'язку з користувачем може\n                  використовуватися адреса електронної пошти надана ним.</li>\n              </ul>\n              <p class=\"text-justify muted mat-body-1\">Більшість браузерів спочатку налаштовані на отримання файлів\n                cookie, однак ви можете вимкнути ці налаштування і вказати, щоб браузер блокував всі файли cookie або\n                сповіщав про відправку цих файлів. Просимо врахувати, що деякі функції сайту не зможуть працювати\n                належним чином, якщо відключити файли cookie. </p>\n              <h3 class=\"mat-h3\">Надання доступу до інформації</h3>\n              <p class=\"text-justify muted mat-body-1\">Ми надаємо доступ до особистої інформації іншим компаніям і\n                приватним особам, лише за таких обмежених обставин:</p>\n              <ul>\n                <li class=\"text-justify muted mat-body-1\">Має місце наявність дозволу Користувача. Для передачі\n                  будь-якої конфіденційної інформації потрібна явна згода Користувача.</li>\n                <li class=\"text-justify muted mat-body-1\">\n                  У нас є підстави вважати, що доступ, використання, збереження або розкриття такої інформації необхідне\n                  для:\n                  <ul>\n                    <li class=\"text-justify muted mat-body-1\">Дотримання будь-яких чинних законів, постанов, або\n                      дійсного запиту з державних органів</li>\n                    <li class=\"text-justify muted mat-body-1\">Розслідування потенційних порушень</li>\n                    <li class=\"text-justify muted mat-body-1\">При виявленні і запобіганні шахрайським діям, а також\n                      вирішенні проблем безпеки та усунення технічних неполадок</li>\n                  </ul>\n                </li>\n              </ul>\n              <h3 class=\"mat-h3\">Захист інформації</h3>\n              <p class=\"text-justify muted mat-body-1\">Ми вживаємо всіх необхідних заходів для захисту даних від\n                несанкціонованого доступу, зміни, розкриття чи знищення. До цих заходів належать, зокрема, внутрішня\n                перевірка процесів збору, зберігання та обробки даних і заходів безпеки, включаючи відповідне шифрування\n                і заходи щодо забезпечення фізичної безпеки даних для запобігання неавторизованого доступу до систем, в\n                яких ми зберігаємо особисті дані.</p>\n              <h3 class=\"mat-h3\">Зміна даної політики конфіденційності</h3>\n              <p class=\"text-justify muted mat-body-1\">Користувач, використовуючи цей сайт, прийняв умови цієї політики\n                конфіденційності і приймає, що дана політика конфіденційності може час від часу змінюватися. Зміни, що\n                вносяться до політики конфіденційності, публікуються на цій сторінці.</p>\n            </section>\n\n            <section>\n              <h2 class=\"mat-h2 title\">Умови використання</h2>\n              <p class=\"text-justify muted mat-body-1\">Уважно прочитайте ці умови, використання сайту означає згоду з\n                цими умовами.</p>\n\n              <h3 class=\"mat-h3\">Використання сайту</h3>\n              <p class=\"text-justify muted mat-body-1\">Ми дозволяємо Вам переглядати матеріали цього сайту та\n                використовувати їх тільки для особистого некомерційного використання. Будь-яке копіювання чи відтворення\n                матеріалів можливе лише за згодою автора, з вказанням посилання на цей сайт та за умови збереження Вами\n                всієї інформації про авторське право.</p>\n\n              <h3 class=\"mat-h3\">Відмова від відповідальності</h3>\n              <p class=\"text-justify muted mat-body-1\">Матеріали та послуги цього сайту надаються без жодних гарантій.\n                Ми не гарантуємо точності та повноти матеріалів, що надаються на цьому cайті. Ми в будь-який час без\n                повідомлення можемо вносити зміни в матеріали та послуги, що надаються на цьому cайті. Ми за жодних\n                обставин не несемо відповідальності за будь-які збитки (включно з, але не обмежуючись збитком від втрати\n                прибутку, даних або від переривання ділової активності), що виникли внаслідок використання, неможливості\n                використання або результатів використання цього сайту.</p>\n\n              <h3 class=\"mat-h3\">Реєстрація на сайті</h3>\n              <p class=\"text-justify muted mat-body-1\">Реєструючись на cайті, ви погоджуєтеся надати достовірну та точну\n                інформацію про себе і свої контактні дані.</p>\n              <p class=\"text-justify muted mat-body-1\">У результаті реєстрації ви отримуєте логін і пароль, за безпеку\n                яких ви несете відповідальність. Ви також несете відповідальність за всі дії під вашим логіном і паролем\n                на cайті. У разі втрати реєстраційних даних ви зобов'язуєтеся повідомити нас про це.</p>\n\n              <h3 class=\"mat-h3\">Зворотний зв'язок і коментарі</h3>\n              <p class=\"text-justify muted mat-body-1\">Звертаючись до нас або залишаючи коментарі на сайті, Ви несете\n                відповідальність, що це повідомлення не є незаконним, шкідливим, загрозливим, наклепницьким, суперечить\n                моральним нормам, порушує авторські права, пропагує ненависть і/або дискримінацію людей за расовою,\n                етнічною, статевою, релігійною, соціальною ознаками, містить образи на адресу конкретних осіб або\n                організацій, а також будь-яким іншим чином порушує чинне законодавство України. Ми залишаємо за собою\n                право на видалення Ваших коментарів та повідомлень, а також на блокування Вашого облікового запису без\n                пояснення причин.</p>\n            </section>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</article>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/product-item-brief/product-item-brief.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/product-item-brief/product-item-brief.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<article class=\"product-item-brief hover-transition\" (click)=\"onCatalogRouting(child)\">\r\n  <section class=\"product-item-brief-img\">\r\n      <img *ngIf=\"media.isActive('gt-sm') && child\" class=\"responsive-image-stretch\" src=\"{{\r\n                config.imgPath +\r\n                config.cloudinary.cloud_name +\r\n                '/c_fill,w_400,h_300,f_auto/' +\r\n                child.assets[0]}}\" alt=\"Image\">\r\n      <img *ngIf=\"media.isActive('sm') && child\" class=\"responsive-image-stretch\" src=\"{{\r\n                config.imgPath +\r\n                config.cloudinary.cloud_name +\r\n                '/c_fill,w_460,h_345,f_auto/' +\r\n                child.assets[0]}}\" alt=\"Image\">\r\n      <img *ngIf=\"media.isActive('xs') && child\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_590,h_443,f_auto/' +\r\n              child.assets[0]}}\" alt=\"Image\">\r\n      <img *ngIf=\"media.isActive('gt-sm') && product\" class=\"responsive-image-stretch \" src=\"{{\r\n      config.imgPath +\r\n      config.cloudinary.cloud_name +\r\n      '/c_fill,w_400,h_300,f_auto/' +\r\n      'w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/' +\r\n      product.menuImage}}\" alt=\"Image\" (click)=\"openDialog(product.menuImage, \r\n      '/c_fill,w_1100,h_825,f_auto/w_550,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/', product.name)\">\r\n      <img *ngIf=\"media.isActive('sm') && product\" class=\"responsive-image-stretch\" src=\"{{\r\n      config.imgPath +\r\n      config.cloudinary.cloud_name +\r\n      '/c_fill,w_460,h_345,f_auto/' +\r\n      'w_230,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/' +\r\n      product.menuImage}}\" alt=\"Image\" (click)=\"openDialog(product.menuImage,\r\n      '/c_fill,w_900,h_675,f_auto/w_450,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/', product.name)\">\r\n      <img *ngIf=\"media.isActive('xs') && product\" class=\"responsive-image-stretch\" src=\"{{\r\n      config.imgPath +\r\n      config.cloudinary.cloud_name +\r\n      '/c_fill,w_590,h_443,f_auto/' +\r\n      'w_295,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/' +\r\n      product.menuImage}}\" alt=\"Image\" (click)=\"openDialog(product.menuImage, \r\n      '/c_fill,w_590,h_443,f_auto/w_295,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/', product.name)\">\r\n\r\n  </section>\r\n  <section class=\"product-item-brief-content\">\r\n    <h2 class=\"mat-h1 title\" *ngIf=\"!child && product\">{{product.name}}</h2>\r\n    <p class=\"mat-body-1\" *ngIf=\"!child && product\">{{product.description}}</p>\r\n    <p *ngIf=\"product?.updatedAt\" class=\"mat-caption\">{{product.updatedAt | date:'dd MM yyyy'}}</p>\r\n    <div fxLayout=\"row\">\r\n      <a *ngIf=\"!child && allowTo('manager')\" mat-button aria-label=\"Edit\" fxFlex=\"50\" color=\"accent\"\r\n        [routerLink]=\"['/dashboard', 'product-editor-edit', parentCategory_id, parentCategoryName, product._id]\"\r\n        [queryParams]=\"{seoTitle: product.seoTitle, seoMeta: product.seoMeta}\"\r\n        [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        Редагувати\r\n      </a>\r\n      <a *ngIf=\"!child && allowTo('manager')\" mat-button aria-label=\"Delete\" fxFlex=\"50\" color=\"accent\"\r\n        (click)=\"deleteProductItem(product._id, product.name)\">\r\n        Видалити\r\n      </a>\r\n      <a *ngIf=\"child\" \r\n        [routerLink]=\"['/products', 'ch', {outlets: {primary: [child._id], breadcrumb: [child._id]}}]\"\r\n        [queryParams]=\"{seoTitle: child.seoTitle, seoMeta: child.seoMeta}\"\r\n        [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <span class=\"mat-h1 title\">{{child.name}}</span>\r\n      </a>\r\n    </div>\r\n\r\n\r\n  </section>\r\n</article>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/product-item-detail/product-item-detail.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/product-item-detail/product-item-detail.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n  <!--<div class=\"item\" fxFlex>-->\r\n    <mat-card *ngIf=\"product\" [ngClass]=\"{'mat-elevation-z0': media.isActive('gt-sm')}\">\r\n      <mat-card-header>\r\n        <h1 class=\"mat-display-2\">{{product.name}}</h1>\r\n        <p>{{product | json}}</p>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n          <h2 class=\"mat-h2\">Created at: {{product.createdAt | date:'dd MM yyyy HH:mm:ss'}}</h2>\r\n          <h2 class=\"mat-h2\">Updated at: {{product.updatedAt | date:'dd MM yyyy HH:mm:ss'}}</h2>\r\n\r\n        <div class=\"row\" fxLayout>\r\n          <div class=\"cell margin-bottom\" fxFlex>\r\n            <p class=\"mat-body text-justify\" [innerHTML]=\"product.description\"></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" fxLayout=\"row\">\r\n\r\n          <div class=\"cell\" fxFlex.lt-xl=\"100\" fxFlex.gt-md=\"65\" fxLayout=\"column\">\r\n\r\n            <div class=\"row margin-bottom\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <!--<div fxFlex=\"100\">-->\r\n                  <img class=\"responsive-image\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_535,h_350,f_auto/' +\r\n              product.mainImage}}\"\r\n                       alt=\"designImage\">\r\n                <!--</div>-->\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row margin-bottom\" fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\r\n                <div fxFlex.gt-xs=\"33\" class=\"cell\" *ngFor=\"let asset of product.assets\">\r\n                  <div fxFlex=\"100\">\r\n                    <img *ngIf=\"media.isActive('gt-xs')\" (click)=\"openDialog(asset, '/c_fill,w_1100,h_550,f_auto/', null)\"\r\n                         class=\"responsive-image hover-cursor\" src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_260,h_170,f_auto/' +\r\n                        asset}}\"\r\n                                       alt=\"designImage\">\r\n                    <img *ngIf=\"media.isActive('xs')\" (click)=\"openDialog(asset, '/c_fill,w_1100,h_550,f_auto/', null)\"\r\n                         class=\"responsive-image hover-cursor\" src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_535,h_350,f_auto/' +\r\n                        asset}}\"\r\n                         alt=\"designImage\">\r\n\r\n                  </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n          \r\n          </div>\r\n\r\n          <div class=\"cell\" fxFlex.gt-md=\"35\" fxFlex.lt-xl=\"100\">\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n      <!--<mat-card-actions>-->\r\n      <!--</mat-card-actions>-->\r\n    </mat-card>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/product-item-feed/product-item-feed.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/product-item-feed/product-item-feed.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" fxLayout=\"row\">\n  <div class=\"cell\" fxFlex=\"100\">\n    <div class=\"item\" fxFlex=\"92px\" fxLayoutAlign=\"center center\">\n      <img class=\"responsive-image-stretch\" src=\"{{\n          config.imgPath +\n          config.cloudinary.cloud_name +\n          '/c_fill,w_80,h_60,f_auto/' +\n          product.menuImage}}\"\n         alt=\"Image\">\n    </div>\n    <div class=\"item\" fxFlex=\"100%-92px\">\n      <p class=\"body-1 muted\">{{product.name}}</p>\n      <p class=\"caption text-justify\">{{product.description}}</p>\n    </div>\n  </div>\n</div>\n       ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/screen-test/screen-test.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/screen-test/screen-test.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <div class=\"cell\">\r\n      <p class=\"muted\">height {{height}}</p>\r\n      <p class=\"muted\"> width {{width}}</p>\r\n  \r\n    </div>\r\n  <div class=\"w393\">393</div>\r\n  <div class=\"w360\">360</div>\r\n  <div class=\"w350\">350</div>\r\n  <div class=\"w100\">100</div>\r\n  <div><img src=\"./assets/images/sample300x300.jpg\" alt=\"300\"></div>\r\n  <div><img src=\"./assets/images/sample350x350.jpg\" alt=\"300\"></div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/shared/page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_shared_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/feedback/feedback.component */ "./src/app/components/shared/feedback/feedback.component.ts");
/* harmony import */ var _components_shared_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/landing/landing.component */ "./src/app/components/shared/landing/landing.component.ts");
/* harmony import */ var _components_shared_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/about/about.component */ "./src/app/components/shared/about/about.component.ts");
/* harmony import */ var _components_shared_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/privacy/privacy.component */ "./src/app/components/shared/privacy/privacy.component.ts");
/* harmony import */ var _components_shared_literature_literature_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/literature/literature.component */ "./src/app/components/shared/literature/literature.component.ts");










const appRoutes = [
    {
        path: 'products',
        loadChildren: './components/products/products.module#ProductsModule',
    },
    {
        path: 'mcs',
        loadChildren: './components/mcs/mcs.module#McsModule',
    },
    {
        path: 'comments',
        loadChildren: './components/social/social.module#SocialModule',
    },
    {
        path: 'about/ch',
        component: _components_shared_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"]
    },
    {
        path: 'literature/ch',
        component: _components_shared_literature_literature_component__WEBPACK_IMPORTED_MODULE_9__["LiteratureComponent"]
    },
    {
        path: 'dashboard',
        loadChildren: './components/dashboard/dashboard.module#DashboardModule',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
        data: { auth: 'user' },
    },
    {
        path: 'user',
        loadChildren: './components/user/user.module#UserModule'
    },
    {
        path: 'feedback',
        component: _components_shared_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_5__["FeedbackComponent"]
    },
    {
        path: 'privacy',
        component: _components_shared_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_8__["PrivacyComponent"]
    },
    { path: 'page-404', component: _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"] },
    { path: '', component: _components_shared_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"], pathMatch: 'full' },
    // { path: '', loadChildren: './components/home/home.module#HomeModule', pathMatch: 'full' },
    { path: '**', component: _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"] })
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
        ]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
// import 'rxjs/add/operator/filter';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/mergeMap';








let AppComponent = class AppComponent {
    constructor(userService, router, route, titleService, metaService) {
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.metaService = metaService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_6__["config"];
        this.showHeader = false;
    }
    ngOnInit() {
        // login user
        this.userService.logging();
        // add seo (title and meta description)
        const $routerEvents = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(() => this.route), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((route) => {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(route => route.outlet === 'primary'));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["combineLatest"])($routerEvents.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((route) => route.queryParamMap)), // query params
        $routerEvents.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])((route) => route.data)) // routing.module data
        )
            .subscribe((result) => {
            const paramMap = result[0];
            const data = result[1];
            // prioryty: 1. embeded to router 2. passed as queryParams 3.default values
            const seoTitle = data.dataTitle || paramMap.get('seoTitle') || _app_config__WEBPACK_IMPORTED_MODULE_6__["config"].seoTitle;
            const seoMeta = data.dataMeta || paramMap.get('seoMeta') || _app_config__WEBPACK_IMPORTED_MODULE_6__["config"].seoMeta;
            this.titleService.setTitle(seoTitle);
            const tag = { name: 'description', content: seoMeta };
            const attributeSelector = 'name="description"';
            this.metaService.removeTag(attributeSelector);
            this.metaService.addTag(tag, false);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Title"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["Meta"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: Config, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Config", function() { return Config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


class Config {
    get conf() {
        return config;
    }
}
const config = {
    host: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].host,
    serverUrl: '/',
    defaultProductImg: 'default_product',
    defaultAvatar: 'default_avatar',
    logoLight: 'hmade_logo_light',
    logoDark: 'hmade_logo_dark',
    icon: 'hmade_icon',
    recaptchaSiteKey: '6Le5XoUUAAAAACCWkV0muQG0SFc75G_7udZzbqs1',
    seoTitle: 'HMADE - Майстерня творчості HandMADE. Ручна робота. Букети, іграшки, декор, оформлення',
    seoMeta: 'Цікаві ідеї для творчості. Солодкі букети з цекерок, букети з квітів, композиції з овочів та фруктів. Дизайн, декор, оформлення. Іграшки ручної роботи, в\'язання.',
    social: {
        showLikes: true,
        showViews: true,
        showComments: true,
    },
    mcPrefix: 'mcs',
    mcSkipValue: 0,
    mcLimitValue: 10,
    mcSortOptionsDefault: 0,
    mcSortOptions: [
        {
            name: 'Дата (зверху новіші)',
            value: 'updatedAt',
        },
        {
            name: 'Популярність',
            value: 'views',
        },
    ],
    commercial: {
        useCommercial: true,
    },
    blogOptions: {
        showViews: true,
        showComments: true,
        commentsLength: 10,
    },
    permissions: {
        admin: ['casual', 'guest', 'user', 'manager', 'admin', 'google'],
        manager: ['casual', 'guest', 'user', 'manager', 'google'],
        user: ['casual', 'guest', 'user', 'google'],
        google: ['casual', 'guest', 'user', 'google'],
        guest: ['casual', 'guest'],
        casual: ['casual']
    },
    imgPath: 'https://res.cloudinary.com/',
    cloudinary: {
        cloud_name: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].cloud_name
    },
    certAssets: [
        {
            _id: 's_color20nv_red',
            image: 's_color20nv_red',
            description: ''
        },
        {
            _id: 's_color20nv_blue',
            image: 's_color20nv_blue',
            description: ''
        },
        {
            _id: 's_diamond',
            image: 's_diamond',
            description: ''
        },
        {
            _id: 's_fiba',
            image: 's_fiba',
            description: ''
        },
        {
            _id: 's_pvc',
            image: 's_pvc',
            description: ''
        },
        {
            _id: 'sez_pvc_01',
            image: 'sez_pvc_01',
            description: ''
        },
        {
            _id: 'sez_pvc_02',
            image: 'sez_pvc_02',
            description: ''
        },
        {
            _id: 'sez_color_20nv_01',
            image: 'sez_color_20nv_01',
            description: ''
        },
        {
            _id: 'sez_color_20nv_02',
            image: 'sez_color_20nv_02',
            description: ''
        },
    ],
    techAssets: [
        {
            _id: 'fiber',
            image: 'fiber',
            description: ''
        },
        {
            _id: 'europe',
            image: 'europe',
            description: ''
        },
        {
            _id: 'water_resistant',
            image: 'water_resistant',
            description: ''
        },
        {
            _id: 'iguard',
            image: 'iguard',
            description: ''
        },
        {
            _id: 'leaf',
            image: 'leaf',
            description: ''
        },
        {
            _id: 'cdf',
            image: 'cdf',
            description: ''
        },
        {
            _id: 'pur',
            image: 'pur',
            description: ''
        },
        {
            _id: 'san',
            image: 'san',
            description: ''
        },
        {
            _id: 'solvent_free',
            image: 'solvent_free',
            description: ''
        },
        {
            _id: 'tech',
            image: 'tech',
            description: ''
        },
        {
            _id: 'wax',
            image: 'wax',
            description: ''
        },
        {
            _id: 'e_nowaste',
            image: 'e_nowaste',
            description: ''
        },
        {
            _id: 'e_phthalate',
            image: 'e_phthalate',
            description: ''
        },
        {
            _id: 'e_recycle',
            image: 'e_recycle',
            description: ''
        },
        {
            _id: 'e_reachconform',
            image: 'e_reachconform',
            description: ''
        },
        {
            _id: 'heavy_metal',
            image: 'heavy_metal',
            description: ''
        },
        {
            _id: '200cm',
            image: '200cm',
            description: ''
        },
        {
            _id: 'clp',
            image: 'clp',
            description: ''
        },
        {
            _id: 'silver_knight',
            image: 'silver_knight',
            description: ''
        },
        {
            _id: 'floor_score',
            image: 'floor_score',
            description: ''
        },
        {
            _id: 'fiba',
            image: 'fiba',
            description: ''
        },
        {
            _id: 'ihf',
            image: 'ihf',
            description: ''
        },
        {
            _id: 'portable',
            image: 'portable',
            description: ''
        },
        {
            _id: 'e_recycle33',
            image: 'e_recycle33',
            description: ''
        },
    ],
    homeBanner: [
        'banner_residential',
        'banner_commercial',
        'banner_parquet',
        'banner_show',
        'banner_sport',
        'banner_transport',
    ],
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/shared/confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var _components_shared_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/shared/design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_shared_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shared/image-popup/image-popup.component */ "./src/app/components/shared/image-popup/image-popup.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");
















// import { ScrollingDirective } from './directives/scrolling.directive';




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"].forRoot(),
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaFormsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        ],
        providers: [
            // ValidateService,
            // UserService,
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_6__["RecaptchaFormsModule"],
            // CatalogService,
            // ProductService,
            // SharedService,
            // AuthGuard,
            // NoAuthGuard,
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_16__["CookieService"],
            // { provide: SharedService, useClass: SharedService },
            {
                provide: 'config', useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"]
            },
            ng_user_man__WEBPACK_IMPORTED_MODULE_17__["NgUserManService"],
            ng_user_man__WEBPACK_IMPORTED_MODULE_17__["SharedService"]
        ],
        exports: [],
        entryComponents: [
            _components_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmPopupComponent"],
            _components_shared_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_13__["DesignPopupComponent"],
            _components_shared_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_15__["ImagePopupComponent"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/shared/about/about.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/about/about.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/shared/about/about.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/shared/about/about.component.ts ***!
  \************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");



let AboutComponent = class AboutComponent {
    constructor() {
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./about.component.scss */ "./src/app/components/shared/about/about.component.scss")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/components/shared/confirm-popup/confirm-popup.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/confirm-popup/confirm-popup.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NvbmZpcm0tcG9wdXAvY29uZmlybS1wb3B1cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/confirm-popup/confirm-popup.component.ts ***!
  \****************************************************************************/
/*! exports provided: ConfirmPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPopupComponent", function() { return ConfirmPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ConfirmPopupComponent = class ConfirmPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
    }
    onClose(choise, payload) {
        this.confirmPopupChoise = { choise, payload };
        this.dialogRef.close(this.confirmPopupChoise);
    }
};
ConfirmPopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ConfirmPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-confirm-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./confirm-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/confirm-popup/confirm-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./confirm-popup.component.scss */ "./src/app/components/shared/confirm-popup/confirm-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ConfirmPopupComponent);



/***/ }),

/***/ "./src/app/components/shared/content/content.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/content/content.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/shared/content/content.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/content/content.component.ts ***!
  \****************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");
/* harmony import */ var src_app_services_social_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/social.service */ "./src/app/services/social.service.ts");








let ContentComponent = class ContentComponent {
    constructor(sharedService, userService, router, catalogService, cd, socialService) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.catalogService = catalogService;
        this.cd = cd;
        this.socialService = socialService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
        this.hierarchyCategory = [];
    }
    ngAfterViewInit() {
        // Solve error ExpressionChangedAfterItHasBeenCheckedError
        // After redirection from auth2 signin (server) view changes (*ngIf)
        // was user=null becomes user which logged
        this.cd.detectChanges();
    }
    ngOnInit() {
        this.sharedService.getSharingEvent()
            .subscribe(event => {
            if (event[0] === 'closeSidenav') {
                this.sidenav.close();
                // } else if (event[0] === 'userChangeStatusEmitter') {
                //   this.getUnreadedCommentsLength();
            }
        });
        this.sharedService.getEventToReloadComments()
            .subscribe(event => this.getUnreadedCommentsLength());
        this.getUnreadedCommentsLength();
        // get main menu items
        this.catalogService.getMainMenu()
            .subscribe(menuItems => {
            this.mainMenuCommonItems = menuItems.data.common;
            this.mainMenuSystemItems = menuItems.data.system;
        }, err => {
            this.error = err;
            console.log(err);
        });
    }
    getUnreadedCommentsLength() {
        if (this.allowTo('user')) {
            this.socialService.getUnreadedCommentsLength()
                .subscribe(result => this.unreadedCommentsLength = result, err => console.log('err', err));
        }
    }
    userLogout() {
        this.userService.userLogout()
            .subscribe(message => {
            this.userService.logging();
            this.sharedService.sharingEventToReloadComments();
            // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
            this.router.navigate(['/user', 'login']);
        }, err => {
            console.log(err.error);
        });
    }
    markCommentsAsReaded() {
        if (!this.unreadedCommentsLength) {
            return;
        }
        this.userService.userEditUnsecure({ name: 'commentsReadedTill' })
            .subscribe(res => {
            this.sharedService.sharingEventToReloadComments();
        }, err => console.log('err', err));
    }
    showUnreadededComments() {
        console.log('showUnreadededComments');
        this.router.navigate(['/comments', 'unreaded-comments']);
    }
    onSettingsMenuMouseover() {
        this.settingsMenuTrigger.openMenu();
    }
    onSettingsMenuMouseleave() {
        this.settingsMenuTrigger.closeMenu();
    }
    onSettingsSideMenuMouseover() {
        this.settingsSideMenuTrigger.openMenu();
    }
    onSettingsSideMenuMouseleave() {
        this.settingsSideMenuTrigger.closeMenu();
    }
    allowTo(permitedRole) {
        this.user = this.userService.userCookieExtractor();
        return this.userService.allowTo(permitedRole);
    }
    restrictTo(restrictedRoles) {
        this.user = this.userService.userCookieExtractor();
        return this.userService.restrictTo(restrictedRoles);
    }
};
ContentComponent.ctorParameters = () => [
    { type: ng_user_man__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__["CatalogService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: src_app_services_social_service__WEBPACK_IMPORTED_MODULE_7__["SocialService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('settingsMenuTrigger', { static: false })
], ContentComponent.prototype, "settingsMenuTrigger", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('settingsSideMenuTrigger', { static: false })
], ContentComponent.prototype, "settingsSideMenuTrigger", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sidenav', { static: false })
], ContentComponent.prototype, "sidenav", void 0);
ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/content/content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content.component.scss */ "./src/app/components/shared/content/content.component.scss")).default]
    })
], ContentComponent);



/***/ }),

/***/ "./src/app/components/shared/crsl/crsl.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/shared/crsl/crsl.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Nyc2wvY3JzbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/shared/crsl/crsl.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/shared/crsl/crsl.component.ts ***!
  \**********************************************************/
/*! exports provided: CrslComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CrslComponent", function() { return CrslComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");




let CrslComponent = class CrslComponent {
    constructor(media) {
        this.media = media;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
        this.homeBanner = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].homeBanner;
    }
    ngOnInit() {
        // this.matStepper.selectionChange
        //   .subscribe(st => {
        //     // this.stepperIndex = st.selectedIndex;
        //     // clearInterval(this.interval);
        //     // this.setInterval();
        //     console.log('st', st);
        //   });
        this.setInterval();
        // console.log('matStepper', this.matStepper);
    }
    setInterval() {
        return this.interval = setInterval(() => {
            if (this.matStepper.selectedIndex === this.stepperIndex) {
                this.stepperIndex = this.matStepper.selectedIndex;
                this.matStepper.reset();
            }
            else {
                this.stepperIndex = this.matStepper.selectedIndex;
                this.matStepper.next();
            }
        }, 4000);
    }
};
CrslComponent.ctorParameters = () => [
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper', { static: false })
], CrslComponent.prototype, "matStepper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepperHeader', { static: false })
], CrslComponent.prototype, "matStepperHeader", void 0);
CrslComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-crsl',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./crsl.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/crsl/crsl.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./crsl.component.scss */ "./src/app/components/shared/crsl/crsl.component.scss")).default]
    })
], CrslComponent);



/***/ }),

/***/ "./src/app/components/shared/design-popup/design-popup.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/design-popup/design-popup.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Rlc2lnbi1wb3B1cC9kZXNpZ24tcG9wdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/shared/design-popup/design-popup.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/design-popup/design-popup.component.ts ***!
  \**************************************************************************/
/*! exports provided: DesignPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignPopupComponent", function() { return DesignPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");






let DesignPopupComponent = class DesignPopupComponent {
    // productForm: FormGroup;
    constructor(sharedService, router, dialogRef, data) {
        this.sharedService = sharedService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"];
    }
    ngOnInit() {
        this.data.cloudinaryOptions ?
            this.cloudinaryOptions = this.data.cloudinaryOptions :
            this.cloudinaryOptions = '/c_fill,w_650,h_650,f_auto/';
        this.designProducts = this.data.designProducts;
    }
    onClose() {
        this.dialogRef.close();
    }
    onProductSelect(product) {
        if (this.data.closer) {
            this.sharedService.sharingEvent(['closeSidenav']);
        }
        this.onClose();
        this.router.navigate(['/products', 'ch', { outlets: { primary: [product.category_id[0], 'details', product._id],
                    breadcrumb: [product.category_id[0], 'details', product._id] } }], { queryParams: { name: product.name } });
    }
};
DesignPopupComponent.ctorParameters = () => [
    { type: ng_user_man__WEBPACK_IMPORTED_MODULE_5__["SharedService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('productSelect', { static: false })
], DesignPopupComponent.prototype, "productSelect", void 0);
DesignPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-design-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./design-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/design-popup/design-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./design-popup.component.scss */ "./src/app/components/shared/design-popup/design-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DesignPopupComponent);



/***/ }),

/***/ "./src/app/components/shared/feedback/feedback.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/feedback/feedback.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/shared/feedback/feedback.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/feedback/feedback.component.ts ***!
  \******************************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");







let FeedbackComponent = class FeedbackComponent {
    constructor(location, sharedService, matSnackBar) {
        this.location = location;
        this.sharedService = sharedService;
        this.matSnackBar = matSnackBar;
        this.processing = false;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_6__["config"];
    }
    ngOnInit() {
        this.feedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(500),
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            contacts: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
    }
    onFeedbackFormSubmit() {
        this.processing = true;
        this.feedback = this.feedbackForm.value;
        this.sharedService.sendFeedbackMessage(this.feedback, this.feedbackForm.get('recaptcha').value)
            .subscribe(res => {
            // console.log('feedback ', res);
            this.matSnackBar.open('Повідомлення надіслано. Ми зв\'яжемось з вами найближчим часом', '', { duration: 5000 });
            this.processing = false;
            this.resetForm();
            this.location.back();
        }, err => {
            this.processing = false;
            this.matSnackBar.open('Сталася помилка. Повідомлення не надіслано. Спробуйте пізнше', '', { duration: 3000, panelClass: 'warn' });
            // console.log('feedback err ', err);
        });
    }
    resetForm() {
        if (this.fFormDirective) {
            this.fFormDirective.resetForm();
        }
    }
};
FeedbackComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: ng_user_man__WEBPACK_IMPORTED_MODULE_4__["SharedService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fForm', { static: false })
], FeedbackComponent.prototype, "fFormDirective", void 0);
FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/feedback/feedback.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./feedback.component.scss */ "./src/app/components/shared/feedback/feedback.component.scss")).default]
    })
], FeedbackComponent);



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/shared/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/shared/gallery/gallery.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/gallery/gallery.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2dhbGxlcnkvZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/shared/gallery/gallery.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/gallery/gallery.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");







let GalleryComponent = class GalleryComponent {
    constructor(dialog, media, productService) {
        this.dialog = dialog;
        this.media = media;
        this.productService = productService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_6__["config"];
    }
    ngOnInit() {
        this.productService.getProductsWithGallery()
            .subscribe(result => this.productsWithGallery = result.data, err => console.log('getProductsWithGallery error'));
    }
    openDialog(image, title) {
        const imageObject = {
            image,
            cloudinaryOptions: '/c_fill,w_1100,h_550,f_auto/',
            title
        };
        const dialogRef = this.dialog.open(_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_3__["DesignPopupComponent"], {
            // width: '400px',
            data: imageObject,
            panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed()
            .subscribe(result => {
            console.log('result popup', result);
        }, err => console.log('err delete', err));
    }
};
GalleryComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"] }
];
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/gallery/gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.component.scss */ "./src/app/components/shared/gallery/gallery.component.scss")).default]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/components/shared/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/shared/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.scss */ "./src/app/components/shared/header/header.component.scss")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/components/shared/image-popup/image-popup.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/image-popup/image-popup.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2ltYWdlLXBvcHVwL2ltYWdlLXBvcHVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/shared/image-popup/image-popup.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/image-popup/image-popup.component.ts ***!
  \************************************************************************/
/*! exports provided: ImagePopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePopupComponent", function() { return ImagePopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");




let ImagePopupComponent = class ImagePopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"];
    }
    ngOnInit() {
        if (!this.data.cloudinaryOptions) {
            this.data.cloudinaryOptions = '/c_fill,w_590,h_443,f_auto/';
        }
        if (!this.data.title) {
            this.data.title = '';
        }
    }
    onClose() {
        this.dialogRef.close();
    }
};
ImagePopupComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ImagePopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-popup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./image-popup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/image-popup/image-popup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./image-popup.component.scss */ "./src/app/components/shared/image-popup/image-popup.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ImagePopupComponent);



/***/ }),

/***/ "./src/app/components/shared/landing/landing.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/landing/landing.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/shared/landing/landing.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/landing/landing.component.ts ***!
  \****************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_mc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mc.service */ "./src/app/services/mc.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_8__);









let LandingComponent = class LandingComponent {
    constructor(catalogService, media, productService, mcService, el) {
        this.catalogService = catalogService;
        this.media = media;
        this.productService = productService;
        this.mcService = mcService;
        this.el = el;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"];
        this.products = [];
        this.limit = 6;
        this.portionOfProducts = 3;
        this.productsPoint = 0;
        this.state = 'hide';
        this.avatarLoading = true;
    }
    ngOnInit() {
        aos__WEBPACK_IMPORTED_MODULE_8__["init"]();
        if (this.media.isActive('xs')) {
            this.limit = 9;
            this.portionOfProducts = 3;
        }
        else if (this.media.isActive('sm')) {
            this.limit = 9;
            this.portionOfProducts = 3;
        }
        else if (this.media.isActive('md')) {
            this.limit = 9;
            this.portionOfProducts = 3;
        }
        else if (this.media.isActive('gt-md')) {
            this.limit = 12;
            this.portionOfProducts = 4;
        }
        this.productService.getNewProducts(this.limit)
            .subscribe(result => this.products = result, err => console.log('newProducts load error', err));
        this.mcService.getMainPageMcs()
            .subscribe(result => this.mcs = result, err => console.log('mainPageMcs load error', err));
    }
    checkScroll(event) {
        const componentPosition = this.el.nativeElement.offsetTop;
        const scrollPosition = window.pageYOffset;
        if (scrollPosition >= componentPosition) {
            this.state = 'show';
        }
        else {
            this.state = 'hide';
        }
    }
    onAvatarLoaded() {
        this.avatarLoading = false;
    }
};
LandingComponent.ctorParameters = () => [
    { type: _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["MediaObserver"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: src_app_services_mc_service__WEBPACK_IMPORTED_MODULE_6__["McService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollPoint', { static: false })
], LandingComponent.prototype, "scrollPoint", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], LandingComponent.prototype, "checkScroll", null);
LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/landing/landing.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('scrollAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                    opacity: 1,
                    transform: 'translateX(0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('show => hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('700ms ease-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('hide => show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('700ms ease-in'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing.component.scss */ "./src/app/components/shared/landing/landing.component.scss")).default]
    })
], LandingComponent);



/***/ }),

/***/ "./src/app/components/shared/literature/literature.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/literature/literature.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2xpdGVyYXR1cmUvbGl0ZXJhdHVyZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/shared/literature/literature.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/shared/literature/literature.component.ts ***!
  \**********************************************************************/
/*! exports provided: LiteratureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiteratureComponent", function() { return LiteratureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LiteratureComponent = class LiteratureComponent {
    constructor() { }
    ngOnInit() {
    }
};
LiteratureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-literature',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./literature.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/literature/literature.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./literature.component.scss */ "./src/app/components/shared/literature/literature.component.scss")).default]
    })
], LiteratureComponent);



/***/ }),

/***/ "./src/app/components/shared/page-404/page-404.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/page-404/page-404.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3BhZ2UtNDA0L3BhZ2UtNDA0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/shared/page-404/page-404.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/page-404/page-404.component.ts ***!
  \******************************************************************/
/*! exports provided: Page404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page404Component", function() { return Page404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Page404Component = class Page404Component {
    constructor() { }
    ngOnInit() {
    }
};
Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page-404',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/page-404/page-404.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-404.component.scss */ "./src/app/components/shared/page-404/page-404.component.scss")).default]
    })
], Page404Component);



/***/ }),

/***/ "./src/app/components/shared/privacy/privacy.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/privacy/privacy.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/shared/privacy/privacy.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/privacy/privacy.component.ts ***!
  \****************************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrivacyComponent = class PrivacyComponent {
    constructor() { }
    ngOnInit() {
    }
};
PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./privacy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/privacy/privacy.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./privacy.component.scss */ "./src/app/components/shared/privacy/privacy.component.scss")).default]
    })
], PrivacyComponent);



/***/ }),

/***/ "./src/app/components/shared/product-item-brief/product-item-brief.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-brief/product-item-brief.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3Byb2R1Y3QtaXRlbS1icmllZi9wcm9kdWN0LWl0ZW0tYnJpZWYuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/components/shared/product-item-brief/product-item-brief.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-brief/product-item-brief.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ProductItemBriefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemBriefComponent", function() { return ProductItemBriefComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../image-popup/image-popup.component */ "./src/app/components/shared/image-popup/image-popup.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");













let ProductItemBriefComponent = class ProductItemBriefComponent {
    constructor(media, userService, dialog, productService, matSnackBar, router) {
        this.media = media;
        this.userService = userService;
        this.dialog = dialog;
        this.productService = productService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.refreshProducts = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    ngOnInit() {
    }
    allowTo(permitedRole) {
        return this.userService.allowTo(permitedRole);
    }
    openDialog(image, cloudinaryOptions, title) {
        const imageObject = {
            image,
            cloudinaryOptions,
            title
        };
        const dialogRef = this.dialog.open(_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_6__["ImagePopupComponent"], {
            data: imageObject,
            panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed()
            .subscribe(result => {
        }, err => console.log('err delete', err));
    }
    onCatalogRouting(child) {
        if (child) {
            this.router.navigate(['/products', 'ch',
                { outlets: { primary: [child._id], breadcrumb: [child._id] } }], {
                queryParams: {
                    seoTitle: child.seoTitle,
                    seoMeta: child.seoMeta
                }
            });
        }
    }
    deleteProductItem(_id, name) {
        console.log('_id, name', _id, name);
        const confirmObject = {
            message: `Дійсно видалити: ${name} ?`,
            payload: { _id }
        };
        const dialogRef = this.dialog.open(_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmPopupComponent"], {
            data: confirmObject,
        });
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(result => {
            if (result && result.choise) {
                return this.productService.deleteProduct(result.payload._id);
            }
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_10__["of"])(null);
        }))
            .subscribe(result => {
            if (result) {
                this.refreshProducts.emit();
                this.matSnackBar.open(result, '', { duration: 3000, panelClass: 'snack-bar-danger' });
            }
        }, err => this.matSnackBar.open(err.error.message || 'Сталася помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' }));
    }
};
ProductItemBriefComponent.ctorParameters = () => [
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["MediaObserver"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_9__["ProductService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemBriefComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemBriefComponent.prototype, "category_id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemBriefComponent.prototype, "parentCategory_id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemBriefComponent.prototype, "parentCategoryName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemBriefComponent.prototype, "child", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProductItemBriefComponent.prototype, "refreshProducts", void 0);
ProductItemBriefComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-item-brief',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-item-brief.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/product-item-brief/product-item-brief.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-item-brief.component.scss */ "./src/app/components/shared/product-item-brief/product-item-brief.component.scss")).default]
    })
], ProductItemBriefComponent);



/***/ }),

/***/ "./src/app/components/shared/product-item-detail/product-item-detail.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-detail/product-item-detail.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3Byb2R1Y3QtaXRlbS1kZXRhaWwvcHJvZHVjdC1pdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/shared/product-item-detail/product-item-detail.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-detail/product-item-detail.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ProductItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemDetailComponent", function() { return ProductItemDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let ProductItemDetailComponent = class ProductItemDetailComponent {
    constructor(dialog, media, productService, route) {
        this.dialog = dialog;
        this.media = media;
        this.productService = productService;
        this.route = route;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    ngOnInit() {
        this.productService.increaseViews(this.product._id).subscribe((result) => this.product = result.data);
    }
    ngOnChanges(changes) {
        const productChange = changes.product;
        // console.log('prev value: ', productChange.previousValue);
        // console.log('got name: ', productChange.currentValue);
        // console.log('productChange: ', productChange);
        if (productChange) {
            console.log('simple changes product');
            // this.getRecommendations();
        }
    }
    // takes design object (from local designs array) by design_id
    // getDesign(_id) {
    //   return this.designs.filter(design => design._id === _id)[0];
    // }
    openDialog(image, cloudinaryOptions, title) {
        const imageObject = {
            image,
            cloudinaryOptions,
            title
        };
        const dialogRef = this.dialog.open(_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_4__["DesignPopupComponent"], {
            // height: '80vh',
            data: imageObject,
            panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed()
            .subscribe(result => {
        }, err => console.log('err delete', err));
    }
};
ProductItemDetailComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["MediaObserver"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemDetailComponent.prototype, "product", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemDetailComponent.prototype, "category_id", void 0);
ProductItemDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-item-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-item-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/product-item-detail/product-item-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-item-detail.component.scss */ "./src/app/components/shared/product-item-detail/product-item-detail.component.scss")).default]
    })
], ProductItemDetailComponent);



/***/ }),

/***/ "./src/app/components/shared/product-item-feed/product-item-feed.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-feed/product-item-feed.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3Byb2R1Y3QtaXRlbS1mZWVkL3Byb2R1Y3QtaXRlbS1mZWVkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/shared/product-item-feed/product-item-feed.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-feed/product-item-feed.component.ts ***!
  \************************************************************************************/
/*! exports provided: ProductItemFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemFeedComponent", function() { return ProductItemFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");



let ProductItemFeedComponent = class ProductItemFeedComponent {
    constructor() {
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductItemFeedComponent.prototype, "product", void 0);
ProductItemFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-item-feed',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./product-item-feed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/product-item-feed/product-item-feed.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./product-item-feed.component.scss */ "./src/app/components/shared/product-item-feed/product-item-feed.component.scss")).default]
    })
], ProductItemFeedComponent);



/***/ }),

/***/ "./src/app/components/shared/screen-test/screen-test.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/screen-test/screen-test.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".w393 {\n  width: 393px;\n  background-color: beige;\n}\n\n.w100 {\n  width: 100px;\n  background-color: #424213;\n}\n\n.w360 {\n  width: 360px;\n  background-color: burlywood;\n}\n\n.w350 {\n  width: 350px;\n  background-color: cadetblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2NyZWVuLXRlc3QvQzpcXGl0XFx2c1xcaG1hZGVcXGZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGFyZWRcXHNjcmVlbi10ZXN0XFxzY3JlZW4tdGVzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2NyZWVuLXRlc3Qvc2NyZWVuLXRlc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUU7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3NjcmVlbi10ZXN0L3NjcmVlbi10ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAudzM5MyB7XHJcbiAgICB3aWR0aDogMzkzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZVxyXG4gIH1cclxuICBcclxuICAudzEwMCB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDY2LCAxOSlcclxuICB9XHJcbiAgXHJcbiAgLnczNjAge1xyXG4gICAgd2lkdGg6IDM2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kXHJcbiAgfVxyXG4gIFxyXG4gIC53MzUwIHtcclxuICAgIHdpZHRoOiAzNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZVxyXG4gIH0iLCIudzM5MyB7XG4gIHdpZHRoOiAzOTNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmVpZ2U7XG59XG5cbi53MTAwIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjEzO1xufVxuXG4udzM2MCB7XG4gIHdpZHRoOiAzNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYnVybHl3b29kO1xufVxuXG4udzM1MCB7XG4gIHdpZHRoOiAzNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/shared/screen-test/screen-test.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/shared/screen-test/screen-test.component.ts ***!
  \************************************************************************/
/*! exports provided: ScreenTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTestComponent", function() { return ScreenTestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScreenTestComponent = class ScreenTestComponent {
    constructor() { }
    ngOnInit() {
        this.height = window.innerHeight;
        this.width = window.innerWidth;
    }
    ngOnChanges(changes) {
    }
};
ScreenTestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-screen-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./screen-test.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/screen-test/screen-test.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./screen-test.component.scss */ "./src/app/components/shared/screen-test/screen-test.component.scss")).default]
    })
], ScreenTestComponent);



/***/ }),

/***/ "./src/app/components/shared/shared.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/shared/shared.module.ts ***!
  \****************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var _product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-item-brief/product-item-brief.component */ "./src/app/components/shared/product-item-brief/product-item-brief.component.ts");
/* harmony import */ var _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-item-detail/product-item-detail.component */ "./src/app/components/shared/product-item-detail/product-item-detail.component.ts");
/* harmony import */ var _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _crsl_crsl_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./crsl/crsl.component */ "./src/app/components/shared/crsl/crsl.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/components/shared/feedback/feedback.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/components/shared/gallery/gallery.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/components/shared/landing/landing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./content/content.component */ "./src/app/components/shared/content/content.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about/about.component */ "./src/app/components/shared/about/about.component.ts");
/* harmony import */ var _screen_test_screen_test_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./screen-test/screen-test.component */ "./src/app/components/shared/screen-test/screen-test.component.ts");
/* harmony import */ var _product_item_feed_product_item_feed_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./product-item-feed/product-item-feed.component */ "./src/app/components/shared/product-item-feed/product-item-feed.component.ts");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./image-popup/image-popup.component */ "./src/app/components/shared/image-popup/image-popup.component.ts");
/* harmony import */ var src_app_directives_scrolling_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/directives/scrolling.directive */ "./src/app/directives/scrolling.directive.ts");
/* harmony import */ var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./privacy/privacy.component */ "./src/app/components/shared/privacy/privacy.component.ts");
/* harmony import */ var _literature_literature_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./literature/literature.component */ "./src/app/components/shared/literature/literature.component.ts");




























let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__["RecaptchaModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_13__["RecaptchaFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        ],
        declarations: [
            _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"],
            _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmPopupComponent"],
            _product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemBriefComponent"],
            _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemDetailComponent"],
            _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_9__["DesignPopupComponent"],
            _crsl_crsl_component__WEBPACK_IMPORTED_MODULE_10__["CrslComponent"],
            _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__["FeedbackComponent"],
            _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__["LandingComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
            _content_content_component__WEBPACK_IMPORTED_MODULE_18__["ContentComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
            _screen_test_screen_test_component__WEBPACK_IMPORTED_MODULE_20__["ScreenTestComponent"],
            _product_item_feed_product_item_feed_component__WEBPACK_IMPORTED_MODULE_21__["ProductItemFeedComponent"],
            _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_22__["ImagePopupComponent"],
            src_app_directives_scrolling_directive__WEBPACK_IMPORTED_MODULE_23__["ScrollingDirective"],
            _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_24__["PrivacyComponent"],
            _literature_literature_component__WEBPACK_IMPORTED_MODULE_25__["LiteratureComponent"],
        ],
        exports: [
            _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_3__["Page404Component"],
            _product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemBriefComponent"],
            _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_8__["ProductItemDetailComponent"],
            _product_item_feed_product_item_feed_component__WEBPACK_IMPORTED_MODULE_21__["ProductItemFeedComponent"],
            _crsl_crsl_component__WEBPACK_IMPORTED_MODULE_10__["CrslComponent"],
            _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_11__["FeedbackComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
            _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__["LandingComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
            _content_content_component__WEBPACK_IMPORTED_MODULE_18__["ContentComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
            _literature_literature_component__WEBPACK_IMPORTED_MODULE_25__["LiteratureComponent"],
        ],
    })
], SharedModule);



/***/ }),

/***/ "./src/app/directives/scrolling.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/scrolling.directive.ts ***!
  \***************************************************/
/*! exports provided: ScrollingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollingDirective", function() { return ScrollingDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScrollingDirective = class ScrollingDirective {
    constructor(el) {
        this.el = el;
    }
    isElementOnScreen(elem) {
        // elem.getBoundingClientRect(); видима обасть екрану до елемента
        // pageYOffset верх сторінки до верху видимой обасті
        // innerHeight висота видимої області
        const box = elem.getBoundingClientRect();
        const screenTop = pageYOffset;
        const screenBottom = pageYOffset + innerHeight;
        const elementTop = box.top + pageYOffset;
        const elementBottom = box.bottom + pageYOffset;
        if ((elementTop > screenTop && elementTop < screenBottom) ||
            (elementBottom > screenTop && elementBottom < screenBottom)) {
            return true;
        }
        else {
            return false;
        }
    }
    onWindowScroll(event) {
        const elem = this.el.nativeElement;
        if (this.isElementOnScreen(elem)) {
            // elem.classList.add('appear');
        }
    }
};
ScrollingDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], ScrollingDirective.prototype, "onWindowScroll", null);
ScrollingDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appScrolling]'
    })
], ScrollingDirective);



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





let AuthGuard = class AuthGuard {
    constructor(userService) {
        this.userService = userService;
    }
    canActivate(next, state) {
        const requiredRoleForAuthorization = next.data.auth; // from routing.module
        return this.userService.userCheckAuthorization(requiredRoleForAuthorization)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((permission) => permission), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(false)));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");




let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
        ],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/services/catalog.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/catalog.service.ts ***!
  \*********************************************/
/*! exports provided: CatalogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogService", function() { return CatalogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CatalogService = class CatalogService {
    constructor(http) {
        this.http = http;
    }
    getMainMenu() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/catalog/get-main-menu', httpOptions);
    }
    getAllParents(category_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('category_id', category_id)
        };
        return this.http.get('api/catalog/get-all-parents', httpOptions);
    }
    /**
     *
     *
     * @param {string} _id
     * @returns {Observable<IResponse>}
     * @memberof CatalogService
     */
    getPrefix(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    _id
                }
            })
        };
        return this.http.get('api/catalog/get-prefix', httpOptions);
    }
    /**
   *
   *
   * @param {string} _id
   * @returns {Observable<IResponse>}
   * @memberof CatalogService
   */
    getSiblings(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    _id
                }
            })
        };
        return this.http.get('api/catalog/get-siblings', httpOptions);
    }
    /**
     *
     *
     * @param {string} parent
     * @param {number} depth
     * @returns {Observable<IResponse>}
     * @memberof CatalogService
     */
    getDescendants(parent, depth) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    parent,
                    depth: depth + ''
                }
            })
        };
        return this.http.get('api/catalog/get-descendants', httpOptions);
    }
    /**
     *
     *
     * @param {string} parent
     * @returns {Observable<IResponse>}
     * @memberof CatalogService
     */
    getChildren(parent) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    parent
                }
            })
        };
        return this.http.get('api/catalog/get-Children', httpOptions);
    }
    /**
     *
     *
     * @param {string} _id
     * @returns {Observable<IResponse>}
     * @memberof CatalogService
     */
    getCategoryById(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    _id
                }
            })
        };
        return this.http.get('api/catalog/get-category-by-id', httpOptions);
    }
};
CatalogService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CatalogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CatalogService);



/***/ }),

/***/ "./src/app/services/mc.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/mc.service.ts ***!
  \****************************************/
/*! exports provided: McService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McService", function() { return McService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




// import { AnimationStyleNormalizer } from '@angular/animations/browser/src/dsl/style_normalization/animation_style_normalizer';
let McService = class McService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    /**
     *
     *
     * @returns {Observable<[IMc]>}
     * @memberof McService
     */
    getMainPageMcs() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/mc/get-main-page-mcs', httpOptions);
    }
    // /**
    //  *
    //  *
    //  * @returns {Observable<IResponse>}
    //  * @memberof McService
    //  */
    // getMcs(): Observable<IResponse> {
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type': 'application/json',
    //     }),
    //     // params: new HttpParams().set('category', category)
    //   };
    //   return this.http.get<IResponse>(
    //     'api/mc/get-mcs',
    //     httpOptions
    //   );
    // }
    mcUpsert(mc) {
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.post('api/mc/upsert', mc, httpOptions);
    }
    deleteMc(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        // return this.http.delete<AnimationStyleNormalizer>(
        return this.http.delete('api/mc/delete/' + _id, httpOptions);
    }
    /**
     *
     *
     * @param {string} _id
     * @returns {Observable<IMc>}
     * @memberof McService
     */
    getMcById(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/mc/get-mc-by-id/' + _id, httpOptions);
    }
    /**
   *
   *
   * @param {string} _id
   * @returns {Observable<IMc>}
   * @memberof McService
   */
    getMcByIdAndIncViews(_id) {
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
        };
        return this.http.get('api/mc/get-mc-by-id-and-inc-views/' + _id, httpOptions);
    }
    /**
     *
     *
     * @param {string} parent
     * @param {boolean} [displayFilter]
     * @returns {Observable<IMc[]>}
     * @memberof McService
     */
    getMcsByParent(parent, displayFilter) {
        if (!displayFilter) {
            displayFilter = false;
        }
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('parent', parent)
                .set('displayFilter', displayFilter + '')
        };
        return this.http.get('api/mc/get-mcs-by-parent', httpOptions);
    }
    /**
     *  return all descendants
     *
     * @param {string} [parent='products']
     * @param {string} sort
     * @param {number} [sortOrder=1]
     * @param {number} [skip=0]
     * @param {number} [limit=10]
     * @returns {Observable<IMc[]>}
     * @memberof McService
     */
    getMcsByFilter(parent = 'products', sort, sortOrder = 1, skip = 0, limit = 10, noMoreChildren) {
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: {
                    parent, sort, sortOrder: sortOrder + '', skip: skip + '', limit: limit + '', noMoreChildren
                } }),
        };
        return this.http.get('api/mc/get-mcs-by-filter', httpOptions);
    }
    /**
     *
     *
     * @param {File} file
     * @param {string} _id
     * @returns {Observable<string>}
     * @memberof McService
     */
    addMainImage(file, _id) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/mc/add-main-image', formData, httpOptions);
    }
    /**
     *
     *
     * @param {File} file
     * @param {string} _id
     * @returns {Observable<string>}
     * @memberof McService
     */
    addStepsPic(file, _id) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/mc/add-steps-pic', formData, httpOptions);
    }
    /**
     *
     *
     * @returns {Observable<{_id: string}[]>}
     * @memberof McService
     */
    getSkuList() {
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.get('api/mc/get-sku-list', httpOptions);
    }
    mcLocalSetFilter(filter) {
        localStorage.setItem('mcQueryParams', JSON.stringify(filter));
    }
    mcLocalGetFilter() {
        return JSON.parse(localStorage.getItem('mcQueryParams'));
    }
    mcLocalRemoveFilter() {
        localStorage.removeItem('mcQueryParams');
    }
};
McService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
McService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], McService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");






let ProductService = class ProductService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
    }
    // getProductById(_id) {
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //     }),
    //     params: new HttpParams().set('_id', _id)
    //   };
    //   return this.http.get<IResponse>(
    //     'api/product/get-product-by-id',
    //     httpOptions
    //   );
    // }
    getProductsWithGallery() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-products-with-gallery', httpOptions);
    }
    getProductsByDesignId(design_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('design_id', design_id)
        };
        return this.http.get('api/product/get-products-by-design-id', httpOptions);
    }
    // getRecommendations() {
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //     }),
    //   };
    //   return this.http.get<IResponse>(
    //     'api/product/get-recommendations',
    //     httpOptions
    //   );
    // }
    // getRecommendationsByIds(ids) {
    //   // console.log('service ids', ids);
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //     }),
    //     params: new HttpParams().set('ids', ids)
    //   };
    //   return this.http.get<IResponse>(
    //     'api/product/get-recommendations-by-ids',
    //     httpOptions
    //   );
    // }
    // getProductsByRecommendation(recommendation) {
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //     }),
    //     params: new HttpParams().set('recommendation', recommendation)
    //   };
    //   return this.http.get<IResponse>(
    //     'api/product/get-products-by-recommendation',
    //     httpOptions
    //   );
    // }
    getProducts(category) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('category', category)
        };
        return this.http.get('api/product/get-products', httpOptions);
    }
    productAddImage(file, sku) {
        console.log('file', file);
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('sku', sku);
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-image', formData, httpOptions);
    }
    productCreate(product) {
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.post('api/product/create', product, httpOptions);
    }
    productEdit(product) {
        console.log('prodEdit', product);
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/product/edit', product, httpOptions);
    }
    deleteProduct(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.delete('api/product/delete/' + _id, httpOptions);
    }
    productAddBriefImage(file, _id) {
        console.log('file', file);
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-brief-image', formData, httpOptions);
    }
    productAddAssets(file, _id) {
        console.log('file', file);
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-assets', formData, httpOptions);
    }
    getTechAssets() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ success: true, message: '', data: this.config.techAssets });
    }
    getCertAssets() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ success: true, message: '', data: this.config.certAssets });
    }
    productAddTechAssets(file, _id) {
        console.log('file', file);
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-techassets', formData, httpOptions);
    }
    /**
     *
     *
     * @returns {Observable<[IProduct]>}
     * @memberof ProductService
     */
    getMainPageProducts() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-main-page-products', httpOptions);
    }
    /**
     *
     *
     * @param {number} limit
     * @returns {Observable<[IProduct]>}
     * @memberof ProductService
     */
    getNewProducts(limit) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('limit', limit + '')
        };
        return this.http.get('api/product/get-new-products', httpOptions);
    }
    /**
     *
     *
     * @param {File} file
     * @param {string} _id
     * @returns {Observable<IResponse>}
     * @memberof ProductService
     */
    productAddMenuImage(file, _id) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //   })
        // };
        return this.http.post('api/product/add-menu-image', formData);
    }
    /**
     *
     *
     * @param {string} _id
     * @returns {Observable<IResponse>}
     * @memberof ProductService
     */
    increaseViews(_id) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('_id', _id)
        };
        return this.http.get('api/product/increase-views', httpOptions);
    }
    /**
     *
     *
     * @param {File} file
     * @param {string} _id
     * @returns {Observable<IResponse>}
     * @memberof ProductService
     */
    productAddMainImage(file, _id) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-main-image', formData, httpOptions);
    }
    /**
     *
     *
     * @param {File} file
     * @returns {IResponse}
     * @memberof ProductService
     */
    checkFile(file) {
        if (!file) {
            return ({ success: false, message: 'Файл не вибрано' });
        }
        else if (file.size > 26215000) { // 25 * 1024 * 1024
            return ({ success: false, message: 'Розмір файлу повинен бути менше 25Мб' });
        }
        else if (file.type !== 'image/jpg' &&
            file.type !== 'image/jpe' &&
            file.type !== 'image/gif' &&
            file.type !== 'image/jpeg' &&
            file.type !== 'image/bmp' &&
            file.type !== 'image/png' &&
            file.type !== 'image/svg+xml' &&
            file.type !== 'image/webp') {
            return ({ success: false, message: 'Виберіть інший тип файлу' });
        }
        else {
            return ({ success: true, message: '' });
        }
    }
    /**
     *
     *
     * @param {IProduct} product
     * @returns {Observable<string>}
     * @memberof ProductService
     */
    productUpsert(product) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post('api/product/upsert', product, httpOptions);
    }
    /**
     *
     *
     * @returns {Observable<{_id: string}[]>}
     * @memberof ProductService
     */
    getSkuList() {
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.get('api/product/get-sku-list', httpOptions);
    }
    /**
     *
     *
     * @param {string} _id
     * @param {string} collection
     * @param {boolean} [displayFilter]
     * @returns {Observable<IResponse>}
     * @memberof ProductService
     */
    getProductById(_id, collection, displayFilter) {
        if (!displayFilter) {
            displayFilter = false;
        }
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('_id', _id)
                .set('displayFilter', displayFilter + '')
                .set('collection', collection)
        };
        return this.http.get('api/product/get-product-by-id', httpOptions);
    }
    /**
     *
     *
     * @param {string} parent
     * @param {string} collection
     * @param {boolean} [displayFilter]
     * @returns {Observable<{any}>}
     * @memberof ProductService
     */
    getProductsByParent(parent, collection, displayFilter, sort, skip, limit) {
        if (!displayFilter) {
            displayFilter = false;
        }
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('parent', parent)
                .set('displayFilter', displayFilter + '')
                .set('collection', collection)
                .set('sort', sort + '')
                .set('skip', skip + '')
                .set('limit', limit + '')
        };
        return this.http.get('api/product/get-products-by-parent', httpOptions);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductService);



/***/ }),

/***/ "./src/app/services/social.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/social.service.ts ***!
  \********************************************/
/*! exports provided: SocialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialService", function() { return SocialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");




let SocialService = class SocialService {
    constructor(userService, http) {
        this.userService = userService;
        this.http = http;
    }
    deleteComment(parent_id, parentCategory, comment_id) {
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('parent_id', parent_id)
                .set('parentCategory', parentCategory)
                .set('comment_id', comment_id)
        };
        return this.http.delete('api/social/delete-comment/', httpOptions);
    }
    addComment(parent_id, parentCategory, comment, recaptcha) {
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: {
                    recaptcha
                } })
        };
        return this.http.post('api/social/add-comment', { parent_id, parentCategory, comment }, httpOptions);
    }
    getComments(parent_id, parentCategory, sort, skip, limit, displayFilter, commentsReadedTillFilter = false) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
                .set('parent_id', parent_id)
                .set('parentCategory', parentCategory)
                .set('sort', sort + '')
                .set('skip', skip + '')
                .set('limit', limit + '')
                .set('displayFilter', displayFilter + '')
                .set('commentsReadedTillFilter', commentsReadedTillFilter + '')
        };
        return this.http.get('api/social/get-comments', httpOptions);
    }
    /**
   * get current user unreaded commnets
   *
   * @param {}
   * @returns {Observable<[]>}
   * @memberof SocialService
   */
    getUnreadedCommentsCategories() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/social/get-unreaded-comments-categories', httpOptions);
    }
    /**
     * get current user unreaded commnets length
     *
     * @param {}
     * @returns {Observable<number>}
     * @memberof SocialService
     */
    getUnreadedCommentsLength() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/social/get-unreaded-comments-length', httpOptions);
    }
    displayComment(parent_id, parentCategory, display, comment_id) {
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/social/display-comment', { parent_id, parentCategory, display, comment_id }, httpOptions);
    }
    likesSet(parent_id, parentCategory, action) {
        // action is true for like, is false for dislike
        const token = this.userService.userLocalGetToken('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/social/likes-set', { parent_id, parentCategory, action }, httpOptions);
    }
};
SocialService.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SocialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SocialService);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.js");







let UserService = class UserService {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this._logging = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.tokenSyncronizatonProgress = false;
        this._eventToReloadUser = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.eventToReloadUser$ = this._eventToReloadUser.asObservable();
    }
    /**
     * Create new user
     *
     */
    userCreate(user, recaptcha) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    recaptcha
                }
            })
        };
        return this.http.post('api/user/create', user, httpOptions);
    }
    /**
     * Login with username and password
     *
     */
    userLogin(user) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    login: user.login,
                    password: user.password
                }
            })
        };
        return this.http.get('api/user/login', httpOptions);
    }
    /**
     * Login with google social sin in
     *
     */
    userGoogleLogin() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/user/auth/google', httpOptions);
    }
    /**
     * Get profile
     *
     */
    userGetProfile() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/user/profile', httpOptions);
    }
    /** Session
     * User logout
     *
     */
    userLogout() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get('api/user/logout', httpOptions);
    }
    /** Session
     * Used for router guard (canActivate)
     *
     */
    userCheckAuthorization(requiredRoleForAuthentication) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromString: `role=${requiredRoleForAuthentication}` })
        };
        return this.http.get('api/user/checkAuthorization', httpOptions);
    }
    /**
     * Extract user from cookie
     *
     */
    userCookieExtractor() {
        if (this.cookieService.get('hmade')) {
            const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
            return helper.decodeToken(this.cookieService.get('hmade')).sub;
        }
        return null;
    }
    /**
     * Helper for frontend authorization
     * Check user permittion for some restricted actions
     * like menu displaying..
     *
     */
    allowTo(permitedRole) {
        const user = this.userCookieExtractor();
        const permissions = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"].permissions;
        if (!user && permitedRole === 'notUser') {
            return true;
        }
        if (!user) {
            return false;
        }
        const roleFromCookie = user.role;
        if (permissions[roleFromCookie].indexOf(permitedRole) >= 0) {
            return true;
        }
        else {
            return false;
        }
    }
    restrictTo(restrictedRoles) {
        const user = this.userCookieExtractor();
        if (!user) {
            return true;
        }
        const roleFromCookie = user.role;
        if (restrictedRoles.indexOf(roleFromCookie) >= 0) {
            return false;
        }
        else {
            return true;
        }
    }
    /**
     * Helper for checking image file before uploading
     *
     */
    checkFile(eventTarget) {
        if (!eventTarget.files[0]) {
            return ({ success: false, message: 'Виберіть файл' });
        }
        else if (eventTarget.files[0].size > 8400000) {
            return ({ success: false, message: 'Розмір файлу повинен бути менше 8Мб' });
        }
        else if (eventTarget.files[0].type !== 'image/jpg' &&
            eventTarget.files[0].type !== 'image/jpe' &&
            eventTarget.files[0].type !== 'image/jpeg' &&
            eventTarget.files[0].type !== 'image/bmp' &&
            eventTarget.files[0].type !== 'image/png' &&
            eventTarget.files[0].type !== 'image/webp') {
            return ({ success: false, message: 'Виберіть інший тип файлу' });
        }
        else {
            return ({ success: true, message: '' });
        }
    }
    /**
     * First step to reset password
     * Send reset code on email and write its hash in db
     *
     */
    userPasswordResetEmail(email, recaptcha) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    email, recaptcha
                }
            })
        };
        return this.http.get('api/user/password-reset-check-email', httpOptions);
    }
    /**
     * Second step to reset password
     * Compare code from email with one in db
     *
     */
    userPasswordResetCode(code, codeToken) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: codeToken
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    code,
                }
            })
        };
        return this.http.get('api/user/password-reset-check-code', httpOptions);
    }
    /**
     *
     *
     */
    userPasswordReset(password, passwordResetToken) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: passwordResetToken
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
                fromObject: {
                    password,
                }
            })
        };
        return this.http.get('api/user/password-reset', httpOptions);
    }
    userEmailVerification() {
        // const token = localStorage.getItem('token');
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get('api/user/email-verification-send', httpOptions);
    }
    /**
     * Edit user fields without password confirmation
     *
     */
    userEditUnsecure(data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put('api/user/editUnsecure', data, httpOptions);
    }
    /** Edit user fields with password confirmation
     *
     *
     */
    userEdit(data) {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put('api/user/edit', data, httpOptions);
    }
    /**
     *
     *
     */
    userEditAvatar(file) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            // 'Content-Type':  'application/json',
            })
        };
        return this.http.put('api/user/edit-avatar', formData, httpOptions);
    }
    logging() {
        const user = this.userCookieExtractor();
        this._logging.next(user);
    }
    userManualUpdateCookie() {
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/user/manual-update-cookie', httpOptions);
    }
    getUserLocal() {
        // return this.userCookieExtractor();
        return this._logging.asObservable();
    }
    /*
     * Token manipulations
     *
     */
    userLocalSetToken(tokenKey, token) {
        localStorage.setItem(tokenKey, token);
    }
    userLocalRemoveToken(tokenKey) {
        localStorage.removeItem(tokenKey);
    }
    userLocalCheckExpiration(tokenKey) {
        const token = localStorage.getItem(tokenKey);
        if (!token) {
            return true;
        }
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        return helper.isTokenExpired(token);
    }
    userLocalGetToken(tokenKey) {
        const token = localStorage.getItem(tokenKey);
        if (!token) {
            return '';
        }
        if (this.userLocalCheckExpiration(tokenKey)) {
            return '';
        }
        return token;
    }
    userLocalGetExpirationDate(tokenKey) {
        const token = localStorage.getItem(tokenKey);
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        return helper.getTokenExpirationDate(token);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    cloud_name: 'hd1oejweg',
    host: 'http://localhost:8081',
    loginComponent: {
        logo: './assets/images/hmade_logo_dark.svg',
        loginIcon: 'account_circle',
        passwordIcon: 'lock_outline',
    }
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\it\vs\hmade\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map