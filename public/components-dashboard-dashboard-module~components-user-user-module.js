(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dashboard-dashboard-module~components-user-user-module"],{

/***/ "./src/app/components/user/redirection-with-token/redirection-with-token.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/user/redirection-with-token/redirection-with-token.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  redirection-with-token works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/user/redirection-with-token/redirection-with-token.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/user/redirection-with-token/redirection-with-token.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/redirection-with-token/redirection-with-token.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/components/user/redirection-with-token/redirection-with-token.component.ts ***!
  \********************************************************************************************/
/*! exports provided: RedirectionWithTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectionWithTokenComponent", function() { return RedirectionWithTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RedirectionWithTokenComponent = /** @class */ (function () {
    function RedirectionWithTokenComponent(router, route, userService, matSnackBar) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.matSnackBar = matSnackBar;
    }
    RedirectionWithTokenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            var token = params.token;
            _this.userService.userLocalLogin(token);
            _this.router.navigate(['/user', 'profile']);
        }, function (err) { return console.log('err', err); });
    };
    RedirectionWithTokenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-redirection-with-token',
            template: __webpack_require__(/*! ./redirection-with-token.component.html */ "./src/app/components/user/redirection-with-token/redirection-with-token.component.html"),
            styles: [__webpack_require__(/*! ./redirection-with-token.component.scss */ "./src/app/components/user/redirection-with-token/redirection-with-token.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], RedirectionWithTokenComponent);
    return RedirectionWithTokenComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-create/user-create.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-create/user-create.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n  <!--<div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\" fxFlexOffset.gt-xs=\"20\" fxFlexOffset.gt-md=\"30\">-->\r\n\r\n  <div class=\"centered-container\">\r\n    <mat-card class=\"form-block\">\r\n      <mat-card-content>\r\n        <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n          <img class=\"responsive-image\" src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\">\r\n        </div>\r\n\r\n        <form [formGroup]=\"userCreateForm\" (submit)=\"onUserCreateSubmit()\">\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">account_box</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Логін\" formControlName=\"login\" required>\r\n              <mat-error\r\n                *ngIf=\"(userCreateForm.get('login').errors?.minlength ||\r\n                      userCreateForm.get('login').errors?.maxlength ||\r\n                      userCreateForm.get('login').errors?.required) &&\r\n                      userCreateForm.get('login').touched\">\r\n                Довжина повинна бути від 4 до 15 символів\r\n              </mat-error>\r\n              <mat-error\r\n                *ngIf=\"userCreateForm.get('login').errors?.pattern &&\r\n                     userCreateForm.get('login').touched\">\r\n                Використовуйте тільки латинські символи і цифри\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">account_circle</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Ім'я\" formControlName=\"name\" required>\r\n              <mat-error\r\n                *ngIf=\"(userCreateForm.get('name').errors?.minlength ||\r\n                      userCreateForm.get('name').errors?.maxlength ||\r\n                      userCreateForm.get('name').errors?.required) &&\r\n                      userCreateForm.get('name').touched\">\r\n                Довжина повинна бути від 2 до 20 символів\r\n              </mat-error>\r\n              <mat-error\r\n                *ngIf=\"userCreateForm.get('name').errors?.pattern &&\r\n                     userCreateForm.get('name').touched\">\r\n                Використовуйте тільки букви і цифри\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">supervised_user_circle</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Прізвище\" formControlName=\"surname\" required>\r\n              <mat-error\r\n                *ngIf=\"(userCreateForm.get('surname').errors?.minlength ||\r\n                      userCreateForm.get('surname').errors?.maxlength ||\r\n                      userCreateForm.get('surname').errors?.required) &&\r\n                      userCreateForm.get('surname').touched\">\r\n                Довжина повинна бути від 2 до 20 символів\r\n              </mat-error>\r\n              <mat-error\r\n                *ngIf=\"userCreateForm.get('surname').errors?.pattern &&\r\n                     userCreateForm.get('surname').touched\">\r\n                Використовуйте тільки букви і цифри\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">lock_outline</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Пароль\" formControlName=\"password\"\r\n                     required [type]=\"hidePassword ? 'password' : 'text'\">\r\n              <mat-icon color=\"accent\" matSuffix (click)=\"hidePassword = !hidePassword\">\r\n                {{hidePassword ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n              <mat-error\r\n                *ngIf=\"(userCreateForm.get('password').errors?.minlength ||\r\n                          userCreateForm.get('password').errors?.maxlength ||\r\n                          userCreateForm.get('password').errors?.required) &&\r\n                          userCreateForm.get('password').touched\">\r\n                Довжина повинна бути від 6 до 15 символів\r\n              </mat-error>\r\n              <mat-error\r\n                *ngIf=\"userCreateForm.get('password').errors?.pattern &&\r\n                         userCreateForm.get('password').touched\">\r\n                Використовуйте тільки латинські символи та цифри\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <!--<mat-icon color=\"primary\">lock</mat-icon>-->\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Підтвердіть пароль\" formControlName=\"passwordConfirm\"\r\n                     required [type]=\"hidePassword ? 'password' : 'text'\">\r\n\r\n              <mat-icon *ngIf=\"!userCreateForm.get('passwordConfirm').errors?.mismatch && !userCreateForm.get('password').errors\"\r\n               matSuffix color=\"accent\">verified_user</mat-icon>\r\n\r\n              <mat-error\r\n                *ngIf=\"userCreateForm.get('passwordConfirm').errors?.mismatch &&\r\n                      userCreateForm.get('passwordConfirm').touched\">\r\n                Пароль не збігається\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">mail_outline</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required>\r\n              <mat-error\r\n                *ngIf=\"(userCreateForm.get('email').errors?.minlength ||\r\n                        userCreateForm.get('email').errors?.maxlength ||\r\n                        userCreateForm.get('email').errors?.required) &&\r\n                        userCreateForm.get('email').touched\">\r\n                Довжина повинна бути від 5 до 30 символів\r\n              </mat-error>\r\n              <mat-error\r\n                *ngIf=\"userCreateForm.get('email').errors?.pattern &&\r\n                       userCreateForm.get('email').touched\">\r\n                Введіть правільну адресу\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n          <re-captcha [ngClass]=\"{'display-none':\r\n          !userCreateForm.get('email').valid || !userCreateForm.get('login').valid ||\r\n          !userCreateForm.get('password').valid || !userCreateForm.get('passwordConfirm').valid}\"\r\n                      [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                      siteKey=\"6Lc0uE8UAAAAAKyekxrsdhSdrgV9zhPW-lMY-srm\">\r\n          </re-captcha>\r\n\r\n          <div class=\"submit-button-wrapper\">\r\n            <!--<button type=\"reset\" mat-button color=\"primary\" (click)=\"onUserCreateReset()\">Повернутись</button>-->\r\n            <span fxFlex></span>\r\n            <button mat-raised-button color=\"primary\" [disabled]=\"!userCreateForm.valid\">Зареєструватись</button>\r\n          </div>\r\n\r\n        </form>\r\n      </mat-card-content>\r\n      <!--<img mat-card-image class=\"mat-card-image-bottom\" src=\"./assets/images/logo400x140-2.jpg\" alt=\"\">-->\r\n    </mat-card>\r\n  </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/user-create/user-create.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-create/user-create.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-create/user-create.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-create/user-create.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCreateComponent", function() { return UserCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserCreateComponent = /** @class */ (function () {
    function UserCreateComponent(validateService, userService, matSnackBar, router) {
        this.validateService = validateService;
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_6__["config"];
        this.hidePassword = true;
    }
    UserCreateComponent.prototype.ngOnInit = function () {
        var emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.userCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9]+'),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9]+'),
            ]),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(emailPattern),
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
            ]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
            ]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        }, this.validateService.matchPassword);
    };
    UserCreateComponent.prototype.onUserCreateSubmit = function () {
        var _this = this;
        this.user = {
            login: this.userCreateForm.get('login').value,
            password: this.userCreateForm.get('password').value,
            email: this.userCreateForm.get('email').value,
            name: this.userCreateForm.get('name').value,
            surname: this.userCreateForm.get('surname').value
        };
        // create user
        this.userService.userCreate(this.user, this.userCreateForm.get('recaptcha').value)
            .subscribe(function (result) {
            var token = result;
            _this.resetForm();
            _this.matSnackBar.open('Користувача створено, вхід виконано', '', { duration: 3000 });
            // login new user
            _this.userService.userLocalLogin(token);
            _this.router.navigate(['/user', 'profile']);
        }, function (err) {
            // 422 or 400
            _this.recaptchaRef.reset();
            _this.matSnackBar.open(err.error.message || 'Сталася полка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    };
    UserCreateComponent.prototype.onUserCreateReset = function () {
        this.resetForm();
        // MAKE redirect
    };
    UserCreateComponent.prototype.resetForm = function () {
        if (this.userCreateFormDirective) {
            this.userCreateFormDirective.resetForm();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"])
    ], UserCreateComponent.prototype, "userCreateFormDirective", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaComponent"]),
        __metadata("design:type", ng_recaptcha__WEBPACK_IMPORTED_MODULE_7__["RecaptchaComponent"])
    ], UserCreateComponent.prototype, "recaptchaRef", void 0);
    UserCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-create',
            template: __webpack_require__(/*! ./user-create.component.html */ "./src/app/components/user/user-create/user-create.component.html"),
            styles: [__webpack_require__(/*! ./user-create.component.scss */ "./src/app/components/user/user-create/user-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserCreateComponent);
    return UserCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-dialog/user-dialog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-dialog/user-dialog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Внести зміни</h1>\n<div class=\"form-block\">\n    <form [formGroup]=\"userEditForm\" (submit)=\"onSubmit()\">\n\n      <div fxLayout=\"row\" *ngFor=\"let dataPayload of data.payload\">\n        <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\n          <mat-icon color=\"primary\">{{dataPayload.icon}}</mat-icon>\n        </div>\n        <mat-form-field>\n            <input matInput placeholder=\"{{dataPayload.label}}\" formControlName=\"{{dataPayload.name}}\"\n                   autocomplete=\"false\" type=\"{{dataPayload.type}}\" required>\n            <mat-error *ngFor=\"let validator of dataPayload.validators\">\n              <div\n                *ngIf=\"(validator.name === 'length' &&\n                (userEditForm.get(dataPayload.name).errors?.minlength ||\n                userEditForm.get(dataPayload.name).errors?.maxlength ||\n                userEditForm.get(dataPayload.name).errors?.required) &&\n                userEditForm.get(dataPayload.name).touched)\">\n                {{validator.message}}\n              </div>\n              <div\n                *ngIf=\"(validator.name === 'pattern' &&\n                userEditForm.get(dataPayload.name).errors?.pattern &&\n                userEditForm.get(dataPayload.name).touched)\">\n                {{validator.message}}\n              </div>\n              <div\n                *ngIf=\"(validator.name === 'require' &&\n                userEditForm.get(dataPayload.name).errors?.required &&\n                userEditForm.get(dataPayload.name).touched)\">\n                {{validator.message}}\n              </div>\n              <div\n                *ngIf=\"(validator.name === 'match' &&\n                userEditForm.get(dataPayload.name).errors?.mismatch &&\n                userEditForm.get(dataPayload.name).touched)\">\n                {{validator.message}}\n              </div>\n            </mat-error>\n          </mat-form-field>\n\n      </div>\n      <div class=\"submit-button-wrapper\">\n        <button type=\"reset\" mat-button color=\"primary\" (click)=\"onNoClick()\">Повернутись</button>\n        <span fxFlex></span>\n        <button mat-raised-button color=\"primary\" [disabled]=\"!userEditForm.valid\">Ok</button>\n      </div>\n\n    </form>\n<p *ngIf=\"data.oldValue\" class=\"mat-body-1\">поточне значення: <span class=\"mat-body-2\">{{data.oldValue}}</span></p>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user-dialog/user-dialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-dialog/user-dialog.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-dialog/user-dialog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-dialog/user-dialog.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDialogComponent", function() { return UserDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var UserDialogComponent = /** @class */ (function () {
    function UserDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    UserDialogComponent.prototype.ngOnInit = function () {
        this.userEditForm = this.data.initForm();
    };
    UserDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    UserDialogComponent.prototype.onSubmit = function () {
        this.dialogRef.close({
            // request: [
            //   {
            //     [this.data.payload[0].name]: this.userEditForm.get(this.data.payload[0].name).value
            //   }
            // ],
            name: this.data.payload[0].name,
            value: this.userEditForm.get(this.data.payload[0].name).value,
            password: this.data.payload[0].name === 'password' ?
                this.userEditForm.get(this.data.payload[2].name).value :
                this.userEditForm.get(this.data.payload[1].name).value
        });
    };
    UserDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dialog',
            template: __webpack_require__(/*! ./user-dialog.component.html */ "./src/app/components/user/user-dialog/user-dialog.component.html"),
            styles: [__webpack_require__(/*! ./user-dialog.component.scss */ "./src/app/components/user/user-dialog/user-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], UserDialogComponent);
    return UserDialogComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-login/user-login.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-login/user-login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n    <!--<div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\" fxFlexOffset.gt-xs=\"20\" fxFlexOffset.gt-md=\"30\">-->\r\n\r\n  <div class=\"centered-container\">\r\n    <mat-card  class=\"form-block\">\r\n      <mat-card-content>\r\n        <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n          <img class=\"responsive-image\" src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\">\r\n        </div>\r\n        <form [formGroup]=\"userLoginForm\" (submit)=\"onUserLoginSubmit()\">\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">account_circle</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Логін\" formControlName=\"login\" required>\r\n              <mat-error\r\n                *ngIf=\"userLoginForm.get('login').errors?.required &&\r\n                      userLoginForm.get('login').touched\">\r\n                      Введіть логін\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">lock_outline</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Пароль\" formControlName=\"password\"\r\n                     required [type]=\"hidePassword ? 'password' : 'text'\">\r\n              <mat-icon class=\"muted\" matSuffix (click)=\"hidePassword = !hidePassword\">\r\n                {{hidePassword ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n              <mat-error\r\n                *ngIf=\"userLoginForm.get('password').errors?.required &&\r\n                          userLoginForm.get('password').touched\">\r\n                Введіть пароль\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <!-- <div class=\"submit-button-wrapper\">\r\n            <button mat-raised-button class=\"full-width\" color=\"primary\" [disabled]=\"!userLoginForm.valid\">Увійти</button>       \r\n          </div> -->\r\n\r\n          <div class=\"links-wrapper\" fxLayoutAlign=\"center\">\r\n            <button class=\"google-button full-width\" mat-raised-button color=\"primary\"\r\n            [disabled]=\"!userLoginForm.valid\">Увійти</button>       \r\n          </div>\r\n          <div fxLayout=\"row\" class=\"links-wrapper\">\r\n              <a [routerLink]=\"['/user/create']\">Зареєструватись</a>\r\n              <span fxFlex></span>\r\n              <a [routerLink]=\"['/user/password-reset']\">Забули пароль</a>\r\n          </div>\r\n\r\n          <div class=\"links-wrapper\" fxLayoutAlign=\"center\">\r\n            <!-- <button mat-stroked-button type=\"button\" (click)=\"userGoogleLogin()\">\r\n                <i class=\"fab fa-google\"></i> Signin with google\r\n            </button> -->\r\n            <!-- <a mat-stroked-button href=\"http://localhost:8081/api/user/auth/google\">\r\n              <i class=\"fab fa-google\"></i> Signin with google\r\n            </a> -->\r\n            <a class=\"google-button\" mat-raised-button href=\"http://localhost:8081/api/user/auth/google\">\r\n                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18px\" height=\"18px\" viewBox=\"0 0 48 48\">\r\n                  <g>\r\n                    <path fill=\"#EA4335\" d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\"></path>\r\n                    <path fill=\"#4285F4\" d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\"></path>\r\n                    <path fill=\"#FBBC05\" d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\"></path>\r\n                    <path fill=\"#34A853\" d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\"></path>\r\n                    <path fill=\"none\" d=\"M0 0h48v48H0z\"></path>\r\n                  </g>\r\n                </svg>\r\n              Sign in with Google</a>\r\n          </div>\r\n\r\n         \r\n   \r\n        </form>\r\n      </mat-card-content>\r\n      <!--<img mat-card-image class=\"mat-card-image-bottom\" src=\"./assets/images/logo400x140-2.jpg\" alt=\"\">-->\r\n    </mat-card>\r\n  </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/user-login/user-login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-login/user-login.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-login/user-login.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/user/user-login/user-login.component.ts ***!
  \********************************************************************/
/*! exports provided: UserLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLoginComponent", function() { return UserLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserLoginComponent = /** @class */ (function () {
    function UserLoginComponent(userService, matSnackBar, router) {
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
        this.hidePassword = true;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
        this.userLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        });
    };
    UserLoginComponent.prototype.onUserLoginSubmit = function () {
        var _this = this;
        this.user = {
            login: this.userLoginForm.get('login').value,
            password: this.userLoginForm.get('password').value,
        };
        this.userService.userLogin(this.user)
            .subscribe(function (token) {
            if (token) {
                _this.resetForm();
                _this.userService.userLocalLogin(token);
                var login = _this.userService.userLocalGetCredentials().login;
                _this.matSnackBar.open(login + ", \u0432\u0438 \u0443\u0432\u0456\u0439\u0448\u043B\u0438 \u043D\u0430 \u0441\u0430\u0439\u0442", '', { duration: 5000 });
                _this.router.navigate(['/user', 'profile']);
            }
        }, function (err) {
            _this.matSnackBar.open(err.error.message || 'Сталася помилка', '', { duration: 5000, panelClass: 'snack-bar-danger' });
        });
    };
    UserLoginComponent.prototype.resetForm = function () {
        if (this.userCreateFormDirective) {
            this.userCreateFormDirective.resetForm();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"])
    ], UserLoginComponent.prototype, "userCreateFormDirective", void 0);
    UserLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-login',
            template: __webpack_require__(/*! ./user-login.component.html */ "./src/app/components/user/user-login/user-login.component.html"),
            styles: [__webpack_require__(/*! ./user-login.component.scss */ "./src/app/components/user/user-login/user-login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-password-reset/user-password-reset.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/user/user-password-reset/user-password-reset.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div class=\"cell\" fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n\r\n    <div class=\"item centered-container\">\r\n      <mat-card class=\"form-block\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            <h2 class=\"mat-h2\">Відновлення паролю</h2>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n          <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n            <img class=\"responsive-image\" src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\">\r\n          </div>\r\n          <div *ngIf=\"processing\" class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <div class=\"cell\" fxFlex=\"100\">\r\n              <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n            </div>\r\n          </div>\r\n          <mat-vertical-stepper #stepper linear>\r\n            <mat-step [stepControl]=\"emailForm\" editable=\"false\" >\r\n              <form [formGroup]=\"emailForm\" validate (submit)=\"onEmailSubmit(stepper)\">\r\n                <ng-template matStepLabel>Введіть свій email</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">mail_outline</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required>\r\n\r\n                    <mat-error\r\n                      *ngIf=\"(emailForm.get('email').errors?.minlength ||\r\n                        emailForm.get('email').errors?.maxlength ||\r\n                        emailForm.get('email').errors?.required) &&\r\n                        emailForm.get('email').touched\">\r\n                      Довжина повинна бути від 5 до 30 символів\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.pattern &&\r\n                        emailForm.get('email').touched\">\r\n                      Введіть правільну адресу\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.invalidEmail &&\r\n                        emailForm.get('email').touched\">\r\n                      Користувач з такою поштою не зареєстрований\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.unrecognizedError &&\r\n                        emailForm.get('email').touched\">\r\n                        'Сталася помилка'\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <re-captcha [ngClass]=\"{'display-none': !emailForm.get('email').valid}\"\r\n                  [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                            siteKey=\"6Lc0uE8UAAAAAKyekxrsdhSdrgV9zhPW-lMY-srm\">\r\n                </re-captcha>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!emailForm.valid || processing\">Далі</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n\r\n            <mat-step [stepControl]=\"codeForm\" editable=\"false\">\r\n\r\n              <form [formGroup]=\"codeForm\" (submit)=\"onCodeSubmit()\">\r\n                <!--<div *ngIf=\"codeForm.get('code').errors\">field {{codeForm.get('code').errors | json}}</div>-->\r\n                <!--<div *ngIf=\"codeForm.errors\">form {{codeForm.errors | json}}</div>-->\r\n\r\n                <ng-template matStepLabel>Введіть код, що надійшов на email</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">settings_ethernet</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Код підтвердження\" formControlName=\"code\" required>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.required &&\r\n                    codeForm.get('code').touched\">\r\n                      Введіть код\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.invalidCode &&\r\n                        codeForm.get('code').touched\">\r\n                      Код введено не вірно\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.maxTries\">\r\n                      Ви зробили максимальну кількість спроб\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.unrecognizedError &&\r\n                        codeForm.get('code').touched\">\r\n                      Сталася помилка\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!codeForm.valid || processing\">Далі</button>\r\n                  <button *ngIf=\"codeForm.get('code').errors?.maxTries\"\r\n                          mat-button (click)=\"refresh()\">Оновити сторінку</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n            <mat-step [stepControl]=\"passwordForm\" editable=\"false\">\r\n              <form [formGroup]=\"passwordForm\" (submit)=\"onPasswordSubmit()\">\r\n                <ng-template matStepLabel>Введіть новий пароль</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">lock_outline</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Пароль\" formControlName=\"password\"\r\n                           required [type]=\"hidePassword ? 'password' : 'text'\">\r\n                    <mat-icon class=\"muted\" matSuffix (click)=\"hidePassword = !hidePassword\">\r\n                      {{hidePassword ? 'visibility' : 'visibility_off'}}\r\n                    </mat-icon>\r\n                    <mat-error\r\n                      *ngIf=\"(passwordForm.get('password').errors?.minlength ||\r\n                          passwordForm.get('password').errors?.maxlength ||\r\n                          passwordForm.get('password').errors?.required) &&\r\n                          passwordForm.get('password').touched\">\r\n                      Довжина повинна бути від 6 до 15 символів\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"passwordForm.get('password').errors?.pattern &&\r\n                         passwordForm.get('password').touched\">\r\n                      Використовуйте тільки латинські символи та цифри\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <!--<mat-icon color=\"primary\">lock</mat-icon>-->\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Підтвердіть пароль\" formControlName=\"passwordConfirm\"\r\n                           required [type]=\"hidePassword ? 'password' : 'text'\">\r\n                    <mat-error\r\n                      *ngIf=\"passwordForm.get('passwordConfirm').errors?.mismatch &&\r\n                      passwordForm.get('passwordConfirm').touched\">\r\n                      Пароль не збігається\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!passwordForm.valid || processing\">Завершити</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n          </mat-vertical-stepper>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/user/user-password-reset/user-password-reset.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/user/user-password-reset/user-password-reset.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-password-reset/user-password-reset.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/components/user/user-password-reset/user-password-reset.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UserPasswordResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPasswordResetComponent", function() { return UserPasswordResetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserPasswordResetComponent = /** @class */ (function () {
    function UserPasswordResetComponent(userService, validateService, matSnackBar, router) {
        this.userService = userService;
        this.validateService = validateService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_6__["config"];
        this.hidePassword = true;
        this.processing = false;
    }
    UserPasswordResetComponent.prototype.ngOnInit = function () {
        var emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(emailPattern),
            ]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
        this.codeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        });
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9]+'),
            ]),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
        }, this.validateService.matchPassword);
    };
    UserPasswordResetComponent.prototype.onEmailSubmit = function (stepper) {
        var _this = this;
        this.processing = true;
        this.userService.userLocalRemoveToken('token');
        this.userService.userLocalRemoveToken('codeToken');
        this.userService.userLocalRemoveToken('passwordResetToken');
        var email = this.emailForm.get('email').value;
        var recaptcha = this.emailForm.get('recaptcha').value;
        this.userService.userPasswordResetEmail(email, recaptcha)
            .subscribe(function (result) {
            _this.processing = false;
            _this.emailForm.get('email').setErrors(null);
            _this.matStepper.next();
            var codeToken = result;
            _this.userService.userLocalSetToken('codeToken', codeToken);
        }, function (err) {
            _this.processing = false;
            if (err.error.code === 'wrongCredentials') {
                _this.emailForm.get('email').setErrors({ invalidEmail: true });
            }
            else {
                _this.matStepper.reset();
                _this.matSnackBar.open('Сталася помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            }
        });
    };
    UserPasswordResetComponent.prototype.onCodeSubmit = function () {
        var _this = this;
        this.processing = true;
        var code = this.codeForm.get('code').value;
        var codeToken = this.userService.userLocalGetToken('codeToken');
        this.userService.userPasswordResetCode(code, codeToken)
            .subscribe(function (passwordResetToken) {
            _this.processing = false;
            _this.codeForm.get('code').setErrors(null);
            _this.matStepper.next();
            _this.userService.userLocalRemoveToken('codeToken');
            _this.userService.userLocalSetToken('passwordResetToken', passwordResetToken);
        }, function (err) {
            _this.processing = false;
            if (err.error.code === 'wrongCredentials') {
                _this.codeForm.get('code').setErrors({ invalidCode: true });
            }
            else if (err.error.code === 'maxTries') {
                _this.codeForm.get('code').setErrors({ maxTries: true });
                _this.codeForm.setValidators(_this.validateService.maxTries);
                setTimeout(function () {
                    _this.router.navigate(['/']);
                }, 3000);
                _this.matSnackBar.open('Код невірний, спрпобуйте пізніше', '', { duration: 4000, panelClass: 'snack-bar-danger' });
            }
            else {
                _this.codeForm.get('code').setErrors({ unrecognizedError: true });
            }
        });
    };
    UserPasswordResetComponent.prototype.onPasswordSubmit = function () {
        var _this = this;
        this.processing = true;
        var password = this.passwordForm.get('password').value;
        var passwordResetToken = this.userService.userLocalGetToken('passwordResetToken');
        this.userService.userPasswordReset(password, passwordResetToken)
            .subscribe(function (result) {
            var token = result;
            _this.processing = false;
            _this.userService.userLocalRemoveToken('passwordResetToken');
            _this.userService.userLocalLogin(token);
            _this.router.navigate(['/user', 'profile']);
            _this.matSnackBar.open('Пароль відновлено', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        }, function (err) {
            _this.processing = false;
            _this.matSnackBar.open(err.error.message || 'Сталася помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    };
    UserPasswordResetComponent.prototype.goHomePage = function () {
        this.router.navigate(['/']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatStepper"])
    ], UserPasswordResetComponent.prototype, "matStepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('recaptchaRef'),
        __metadata("design:type", Object)
    ], UserPasswordResetComponent.prototype, "recaptchaRef", void 0);
    UserPasswordResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-password-reset',
            template: __webpack_require__(/*! ./user-password-reset.component.html */ "./src/app/components/user/user-password-reset/user-password-reset.component.html"),
            styles: [__webpack_require__(/*! ./user-password-reset.component.scss */ "./src/app/components/user/user-password-reset/user-password-reset.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UserPasswordResetComponent);
    return UserPasswordResetComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-profile/user-profile.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div class=\"cell\" fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n\r\n    <div class=\"item centered-container\" *ngIf=\"user\">\r\n      <div class=\"info-block mat-elevation-z4\">\r\n\r\n        <div class=\"avatar-block\">\r\n          <form [formGroup]=\"changeAvatarForm\" (submit)=\"onSubmitChangeAvatarForm()\">\r\n\r\n          <div class=\"avatar-img-wrapper\">\r\n            <img *ngIf=\"!previewAvatarUrl\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_180,h_180,f_auto/' +\r\n              user.avatar}}\" alt=\"avatar\">\r\n            <img *ngIf=\"previewAvatarUrl\"  src=\"{{previewAvatarUrl}}\" alt=\"avatar\">\r\n\r\n            <div *ngIf=\"processingChangeAvatar\" class=\"avatar-div-processing\">\r\n              <div class=\"spinner-wrapper\">\r\n                <mat-spinner [diameter]=\"24\"></mat-spinner>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"!editAvatar && !processingChangeAvatar\" class=\"avatar-div-change\"></div>\r\n            <div *ngIf=\"!editAvatar && !processingChangeAvatar\" class=\"avatar-button-change\">\r\n              <input type=\"file\" accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png, .gif\" (change)=\"changeAvatar($event)\" id=\"input-file\">\r\n              <label for=\"input-file\">Змінити\r\n              </label>\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"editAvatar && !processingChangeAvatar\">\r\n              <div class=\"avatar-div-ok\" >\r\n              </div>\r\n              <div class=\"avatar-div-cancel\">\r\n              </div>\r\n              <button class=\"avatar-button-ok\" [disabled]=\"!changeAvatarForm.valid\">\r\n                <mat-icon>done</mat-icon>\r\n              </button>\r\n              <button type=\"button\" class=\"avatar-button-cancel\" (click)=\"cancelChangeAvatar()\">\r\n                <mat-icon>cancel</mat-icon>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          </form>\r\n\r\n        </div>\r\n\r\n        <div class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div class=\"info-block-row-title mat-title\">{{user.login}}</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"info-block-row-wrapper\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n              <!--<div fxFlex=\"100%\">-->\r\n                <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Email</div>\r\n                <div class=\"mat-body-1 muted\" fxFlex=\"60%\">{{user.email}}</div>\r\n                <!-- <mat-icon *ngIf=\"processing !== 'email'\" fxFlex=\"30px\"\r\n                          (click)=\"openDialog(makeEmailObject())\" class=\"muted\">edit</mat-icon> -->\r\n                <mat-spinner *ngIf=\"processing === 'email'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n              <!--</div>-->\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"user.role === 'guest' && !verificationSent\" class=\"info-block-row-wrapper border-0\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row mail-verification\">\r\n            <div class=\"mat-body-1\" fxFlex=\"100%\">\r\n              <p>Пошту не верифіковано, надіслати код.</p>\r\n              <p>Деякі функції будуть недоступні. Наприклад, відправка коментарів</p>\r\n            </div>\r\n            <mat-icon *ngIf=\"processing !== 'verification'\" fxFlex=\"30px\" (click)=\"onVerificationSend()\">mail</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'verification'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"user.role === 'guest' && verificationSent\" class=\"info-block-row-wrapper border-0\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row mail-verification\">\r\n            <div class=\"mat-body-1 muted\" fxFlex=\"100%\">На пошту надіслано посилання</div>\r\n            <mat-icon *ngIf=\"processing !== 'verification'\" fxFlex=\"30px\" class=\"muted\" (click)=\"onVerificationSend()\">refresh</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'verification'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Ім'я</div>\r\n            <!--<div fxFlex></div>-->\r\n            <div class=\"mat-subheading-2 muted\" fxFlex=\"60%\">{{user.name}}</div>\r\n            <mat-icon *ngIf=\"processing !== 'name' && restrictTo(['google'])\" fxFlex=\"30px\"\r\n                      (click)=\"openDialog(makeNameObject())\" class=\"muted\">edit</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'name'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Прізвище</div>\r\n            <!--<div fxFlex></div>-->\r\n            <div class=\"mat-subheading-2 muted\" fxFlex=\"60%\">{{user.surname}}</div>\r\n            <mat-icon *ngIf=\"processing !== 'surname'\" fxFlex=\"30px\"\r\n                      (click)=\"openDialog(makeSurnameObject())\" class=\"muted\">edit</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'surname'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div fxFlex=\"60%\"></div>\r\n            <div fxFlex=\"40%\">\r\n              <button mat-button (click)=\"openDialog(makePasswordObject())\">\r\n                <span *ngIf=\"processing !== 'password'\">Змінити пароль</span>\r\n                <mat-spinner *ngIf=\"processing === 'password'\" [diameter]=\"24\"></mat-spinner>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/user/user-profile/user-profile.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-profile.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user-profile/user-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-dialog/user-dialog.component */ "./src/app/components/user/user-dialog/user-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(userService, matSnackBar, router, dialog) {
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.dialog = dialog;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
        this.editAvatar = false;
        this.processingChangeAvatar = false;
        this.verificationSent = false;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        this.getProfile();
        this.changeAvatarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4),
            ]),
        });
    };
    UserProfileComponent.prototype.allowTo = function (permitedRole) {
        return this.userService.allowTo(permitedRole);
    };
    UserProfileComponent.prototype.restrictTo = function (restrictedRoles) {
        return this.userService.restrictTo(restrictedRoles);
    };
    UserProfileComponent.prototype.onVerificationSend = function () {
        var _this = this;
        this.verificationSent = true;
        this.processing = 'verification';
        this.userService.userEmailVerification()
            .subscribe(function (result) {
            _this.processing = '';
            _this.matSnackBar.open(result.message, '', { duration: 3000 });
        }, function (err) {
            _this.processing = '';
            // this.matSnackBar.open(err.error || 'Помилка', '',
            //   {duration: 3000, panelClass: 'snack-bar-danger'});
        });
    };
    UserProfileComponent.prototype.onSubmitChangeAvatarForm = function () {
        var _this = this;
        this.processingChangeAvatar = true;
        this.userService.userEditAvatar(this.changeAvatarForm.get('file').value)
            .subscribe(function (result) {
            _this.matSnackBar.open(result, '', { duration: 3000 });
            _this.getProfile();
            _this.previewAvatarUrl = null;
            _this.processingChangeAvatar = false;
            _this.editAvatar = false;
        }, function (err) {
            return _this.matSnackBar.open(err.error.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    };
    UserProfileComponent.prototype.changeAvatar = function (event) {
        var _this = this;
        this.editAvatar = true;
        var checkFile = this.userService.checkFile(event.target);
        if (!checkFile.success) {
            this.cancelChangeAvatar();
            this.matSnackBar.open(checkFile.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        }
        else {
            this.changeAvatarForm.get('file').setValue(event.target.files[0]);
            var reader = new FileReader();
            reader.addEventListener('load', function (readerEvent) {
                // .jpg, .jpe, .jpeg, .bmp, .webp, .png
                _this.previewAvatarUrl = readerEvent.target.result;
            });
            reader.readAsDataURL(event.target.files[0]);
        }
    };
    UserProfileComponent.prototype.cancelChangeAvatar = function () {
        this.changeAvatarForm.get('file').setValue(null);
        this.editAvatar = false;
        this.previewAvatarUrl = null;
    };
    UserProfileComponent.prototype.getProfile = function () {
        var _this = this;
        this.userService.userGetProfile()
            .subscribe(function (user) {
            _this.user = user;
        }, function (err) {
            _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' });
            _this.router.navigate(['/user', 'login']);
        });
    };
    UserProfileComponent.prototype.openDialog = function (object) {
        var _this = this;
        var dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_5__["UserDialogComponent"], {
            width: '400px',
            data: object,
        });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (result) {
            if (result) {
                return _this.userService.userEdit(result);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(null);
            }
        }))
            .subscribe(function (result) {
            _this.processing = null;
            if (!result) {
                // didn't get data from dialog
                return;
            }
            else {
                _this.matSnackBar.open(result, '', { duration: 3000 });
                _this.getProfile();
            }
        }, function (err) {
            _this.processing = null;
            _this.matSnackBar.open(err.error.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    };
    UserProfileComponent.prototype.makePasswordObject = function () {
        this.processing = 'password';
        return {
            payload: [{
                    name: 'password',
                    label: 'Новий пароль',
                    type: 'password',
                    icon: 'lock_outline',
                    validators: [
                        {
                            name: 'length',
                            message: 'Довжина повинна бути від 6 до 15 символів'
                        },
                        {
                            name: 'pattern',
                            message: 'Використовуйте тільки латинські символи та цифри'
                        },
                    ],
                },
                {
                    name: 'passwordConfirm',
                    label: 'Підтвердіть пароль',
                    type: 'password',
                    icon: '',
                    validators: [
                        {
                            name: 'require',
                            message: 'Це поле не може бути пустим'
                        },
                        {
                            name: 'match',
                            message: 'Пароль не збігається'
                        },
                    ]
                },
                {
                    name: 'passwordCurrent',
                    label: 'Діючий пароль',
                    type: 'password',
                    icon: '',
                    validators: [
                        {
                            name: 'require',
                            message: 'Це поле не може бути пустим'
                        }
                    ],
                }],
            initForm: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                    password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(15),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[a-zA-Z0-9]+'),
                    ]),
                    passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    ]),
                    passwordCurrent: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    ]),
                }, function matchPassword(abstractControl) {
                    var password = abstractControl.get('password').value;
                    var passwordConfirm = abstractControl.get('passwordConfirm').value;
                    if (password === passwordConfirm) {
                        abstractControl.get('passwordConfirm').setErrors(null);
                        return null;
                    }
                    else {
                        abstractControl.get('passwordConfirm').setErrors({ mismatch: true });
                        return null;
                    }
                });
            }
        };
    };
    // makeEmailObject() {
    //   this.processing = 'email';
    //   const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    //   return {
    //     payload: [{
    //       name: 'email',
    //       label: 'Email',
    //       type: 'email',
    //       icon: 'mail_outline',
    //       oldValue: this.user.email,
    //       validators: [
    //         {
    //           name: 'length',
    //           message: 'Довжина повинна бути від 5 до 30 символів'
    //         },
    //         {
    //           name: 'pattern',
    //           message: 'Введіть правільну адресу'
    //         }
    //       ],
    //       },
    //       {
    //       name: 'passwordCurrent',
    //       label: 'Введіть пароль',
    //       type: 'password',
    //       icon: '',
    //       validators: [
    //         {
    //           name: 'require',
    //           message : 'Це поле не може бути пустим'
    //         }
    //       ],
    //     }],
    //     initForm: function () {
    //       return new FormGroup({
    //         email: new FormControl('', [
    //           Validators.required,
    //           Validators.minLength(5),
    //           Validators.maxLength(30),
    //           Validators.pattern(emailPattern),
    //         ]),
    //         passwordCurrent: new FormControl('', [
    //           Validators.required,
    //         ]),
    //       });
    //     },
    //   };
    // }
    UserProfileComponent.prototype.makeNameObject = function () {
        this.processing = 'name';
        return {
            payload: [{
                    name: 'name',
                    label: 'Ім\'я',
                    type: '',
                    icon: 'perm_identity',
                    oldValue: this.user.name,
                    validators: [
                        {
                            name: 'length',
                            message: 'Довжина повинна бути від 2 до 20 символів'
                        },
                        {
                            name: 'pattern',
                            message: 'Використовуйте букви і цифри'
                        }
                    ],
                },
                {
                    name: 'passwordCurrent',
                    label: 'Введіть пароль',
                    type: 'password',
                    icon: '',
                    validators: [
                        {
                            name: 'require',
                            message: 'Це поле не може бути пустим'
                        }
                    ],
                }],
            initForm: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
                    ]),
                    passwordCurrent: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    ]),
                });
            },
        };
    };
    UserProfileComponent.prototype.makeSurnameObject = function () {
        this.processing = 'surname';
        return {
            payload: [{
                    name: 'surname',
                    label: 'Прізвище',
                    type: '',
                    icon: 'perm_identity',
                    oldValue: this.user.surname,
                    validators: [
                        {
                            name: 'length',
                            message: 'Довжина повинна бути від 2 до 20 символів'
                        },
                        {
                            name: 'pattern',
                            message: 'Використовуйте букви і цифри'
                        }
                    ],
                },
                {
                    name: 'passwordCurrent',
                    label: 'Введіть пароль',
                    type: 'password',
                    icon: '',
                    validators: [
                        {
                            name: 'require',
                            message: 'Це поле не може бути пустим'
                        }
                    ],
                }],
            initForm: function () {
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
                    surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
                    ]),
                    passwordCurrent: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                    ]),
                });
            },
        };
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/components/user/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/components/user/user-profile/user-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/user/user-routing.module.ts ***!
  \********************************************************/
/*! exports provided: UserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function() { return UserRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/components/user/user-create/user-create.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/components/user/user-login/user-login.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-password-reset/user-password-reset.component */ "./src/app/components/user/user-password-reset/user-password-reset.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
/* harmony import */ var _redirection_with_token_redirection_with_token_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redirection-with-token/redirection-with-token.component */ "./src/app/components/user/redirection-with-token/redirection-with-token.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var userRoutes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [
            {
                path: 'create',
                component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_3__["UserCreateComponent"],
            },
            {
                path: 'login',
                component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_4__["UserLoginComponent"],
            },
            {
                path: 'profile',
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
                data: { auth: 'guest' },
            },
            {
                path: 'password-reset',
                component: _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_6__["UserPasswordResetComponent"],
            },
            {
                path: 'redirection-with-token/:token',
                component: _redirection_with_token_redirection_with_token_component__WEBPACK_IMPORTED_MODULE_9__["RedirectionWithTokenComponent"],
            },
            { path: '', component: _shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_8__["Page404Component"] },
        ],
    },
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(userRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/user/user.module.ts ***!
  \************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/components/user/user-routing.module.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/components/user/user-create/user-create.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/components/user/user-login/user-login.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-dialog/user-dialog.component */ "./src/app/components/user/user-dialog/user-dialog.component.ts");
/* harmony import */ var _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-password-reset/user-password-reset.component */ "./src/app/components/user/user-password-reset/user-password-reset.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _redirection_with_token_redirection_with_token_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./redirection-with-token/redirection-with-token.component */ "./src/app/components/user/redirection-with-token/redirection-with-token.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
                _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__["UserCreateComponent"],
                _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"],
                _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UserDialogComponent"],
                _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_10__["UserPasswordResetComponent"],
                _redirection_with_token_redirection_with_token_component__WEBPACK_IMPORTED_MODULE_14__["RedirectionWithTokenComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _user_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__["RecaptchaModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_12__["RecaptchaFormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
            ],
            exports: [],
            entryComponents: [
                _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_9__["UserDialogComponent"],
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-dashboard-dashboard-module~components-user-user-module.js.map