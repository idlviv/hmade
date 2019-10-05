(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-dashboard-dashboard-module~components-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-create/user-create.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-create/user-create.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n  <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n    <div fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n    <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n      <!--<div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\" fxFlexOffset.gt-xs=\"20\" fxFlexOffset.gt-md=\"30\">-->\r\n\r\n      <div class=\"centered-container\">\r\n        <mat-card class=\"form-block\">\r\n          <mat-card-content>\r\n            <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n              <img class=\"responsive-image\" src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\" alt=\"HandMADE\">\r\n            </div>\r\n\r\n            <form [formGroup]=\"userCreateForm\" (submit)=\"onUserCreateSubmit()\">\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">account_box</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Логін\" formControlName=\"login\" required>\r\n                  <mat-error *ngIf=\"(userCreateForm.get('login').errors?.minlength ||\r\n                      userCreateForm.get('login').errors?.maxlength ||\r\n                      userCreateForm.get('login').errors?.required) &&\r\n                      userCreateForm.get('login').touched\">\r\n                    Довжина повинна бути від 4 до 15 символів\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"userCreateForm.get('login').errors?.pattern &&\r\n                     userCreateForm.get('login').touched\">\r\n                    Використовуйте тільки латинські символи і цифри\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">account_circle</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Ім'я\" formControlName=\"name\" required>\r\n                  <mat-error *ngIf=\"(userCreateForm.get('name').errors?.minlength ||\r\n                      userCreateForm.get('name').errors?.maxlength ||\r\n                      userCreateForm.get('name').errors?.required) &&\r\n                      userCreateForm.get('name').touched\">\r\n                    Довжина повинна бути від 2 до 20 символів\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"userCreateForm.get('name').errors?.pattern &&\r\n                     userCreateForm.get('name').touched\">\r\n                    Використовуйте тільки букви і цифри\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">supervised_user_circle</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Прізвище\" formControlName=\"surname\" required>\r\n                  <mat-error *ngIf=\"(userCreateForm.get('surname').errors?.minlength ||\r\n                      userCreateForm.get('surname').errors?.maxlength ||\r\n                      userCreateForm.get('surname').errors?.required) &&\r\n                      userCreateForm.get('surname').touched\">\r\n                    Довжина повинна бути від 2 до 20 символів\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"userCreateForm.get('surname').errors?.pattern &&\r\n                     userCreateForm.get('surname').touched\">\r\n                    Використовуйте тільки букви і цифри\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">lock_outline</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Пароль\" formControlName=\"password\" required\r\n                    [type]=\"hidePassword ? 'password' : 'text'\">\r\n                  <mat-icon color=\"accent\" matSuffix (click)=\"hidePassword = !hidePassword\">\r\n                    {{hidePassword ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                  <mat-error *ngIf=\"(userCreateForm.get('password').errors?.minlength ||\r\n                          userCreateForm.get('password').errors?.maxlength ||\r\n                          userCreateForm.get('password').errors?.required) &&\r\n                          userCreateForm.get('password').touched\">\r\n                    Довжина повинна бути від 6 до 15 символів\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"userCreateForm.get('password').errors?.pattern &&\r\n                         userCreateForm.get('password').touched\">\r\n                    Використовуйте тільки латинські символи та цифри\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <!--<mat-icon color=\"primary\">lock</mat-icon>-->\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Підтвердіть пароль\" formControlName=\"passwordConfirm\" required\r\n                    [type]=\"hidePassword ? 'password' : 'text'\">\r\n\r\n                  <mat-icon\r\n                    *ngIf=\"!userCreateForm.get('passwordConfirm').errors?.mismatch && !userCreateForm.get('password').errors\"\r\n                    matSuffix color=\"accent\">verified_user</mat-icon>\r\n\r\n                  <mat-error *ngIf=\"userCreateForm.get('passwordConfirm').errors?.mismatch &&\r\n                      userCreateForm.get('passwordConfirm').touched\">\r\n                    Пароль не збігається\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">mail_outline</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required>\r\n                  <mat-error *ngIf=\"(userCreateForm.get('email').errors?.minlength ||\r\n                        userCreateForm.get('email').errors?.maxlength ||\r\n                        userCreateForm.get('email').errors?.required) &&\r\n                        userCreateForm.get('email').touched\">\r\n                    Довжина повинна бути від 5 до 50 символів\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"userCreateForm.get('email').errors?.pattern &&\r\n                       userCreateForm.get('email').touched\">\r\n                    Введіть правільну адресу\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <re-captcha [ngClass]=\"{'display-none':\r\n          !userCreateForm.get('email').valid || !userCreateForm.get('login').valid ||\r\n          !userCreateForm.get('password').valid || !userCreateForm.get('passwordConfirm').valid}\"\r\n                [formControlName]=\"'recaptcha'\" #recaptchaRef siteKey=\"{{config.recaptchaSiteKey}}\">\r\n              </re-captcha>\r\n\r\n              <div class=\"submit-button-wrapper\">\r\n                <span fxFlex></span>\r\n                <button mat-raised-button color=\"primary\" [disabled]=\"!userCreateForm.valid\"\r\n                  aria-label=\"Register\">Зареєструватись</button>\r\n              </div>\r\n\r\n            </form>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-dialog/user-dialog.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-dialog/user-dialog.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title>Внести зміни</h1>\r\n<div class=\"form-block\">\r\n    <form [formGroup]=\"userEditForm\" (submit)=\"onSubmit()\">\r\n\r\n      <div fxLayout=\"row\" *ngFor=\"let dataPayload of data.payload\">\r\n        <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n          <mat-icon color=\"primary\">{{dataPayload.icon}}</mat-icon>\r\n        </div>\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"{{dataPayload.label}}\" formControlName=\"{{dataPayload.name}}\"\r\n                   autocomplete=\"false\" type=\"{{dataPayload.type}}\" required>\r\n            <mat-error *ngFor=\"let validator of dataPayload.validators\">\r\n              <div\r\n                *ngIf=\"(validator.name === 'length' &&\r\n                (userEditForm.get(dataPayload.name).errors?.minlength ||\r\n                userEditForm.get(dataPayload.name).errors?.maxlength ||\r\n                userEditForm.get(dataPayload.name).errors?.required) &&\r\n                userEditForm.get(dataPayload.name).touched)\">\r\n                {{validator.message}}\r\n              </div>\r\n              <div\r\n                *ngIf=\"(validator.name === 'pattern' &&\r\n                userEditForm.get(dataPayload.name).errors?.pattern &&\r\n                userEditForm.get(dataPayload.name).touched)\">\r\n                {{validator.message}}\r\n              </div>\r\n              <div\r\n                *ngIf=\"(validator.name === 'require' &&\r\n                userEditForm.get(dataPayload.name).errors?.required &&\r\n                userEditForm.get(dataPayload.name).touched)\">\r\n                {{validator.message}}\r\n              </div>\r\n              <div\r\n                *ngIf=\"(validator.name === 'match' &&\r\n                userEditForm.get(dataPayload.name).errors?.mismatch &&\r\n                userEditForm.get(dataPayload.name).touched)\">\r\n                {{validator.message}}\r\n              </div>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n      </div>\r\n      <div class=\"submit-button-wrapper\">\r\n        <button type=\"reset\" mat-button color=\"primary\" (click)=\"onNoClick()\" aria-label=\"Back\">Повернутись</button>\r\n        <span fxFlex></span>\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"!userEditForm.valid\" aria-label=\"Ok\">Ok</button>\r\n      </div>\r\n\r\n    </form>\r\n<p *ngIf=\"data.oldValue\" class=\"mat-body-1\">поточне значення: <span class=\"mat-body-2\">{{data.oldValue}}</span></p>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-login/user-login.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-login/user-login.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n    <!--<div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\" fxFlexOffset.gt-xs=\"20\" fxFlexOffset.gt-md=\"30\">-->\r\n\r\n  <div class=\"centered-container\">\r\n    <mat-card  class=\"form-block\">\r\n      <mat-card-content>\r\n        <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n          <img class=\"responsive-image\" src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\" alt=\"HandMADE\">\r\n        </div>\r\n        <form [formGroup]=\"userLoginForm\" (submit)=\"onUserLoginSubmit()\">\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">account_circle</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Логін\" formControlName=\"login\" required>\r\n              <mat-error\r\n                *ngIf=\"userLoginForm.get('login').errors?.required &&\r\n                      userLoginForm.get('login').touched\">\r\n                      Введіть логін\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div fxLayout=\"row\">\r\n            <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n              <mat-icon color=\"primary\">lock_outline</mat-icon>\r\n            </div>\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Пароль\" formControlName=\"password\"\r\n                     required [type]=\"hidePassword ? 'password' : 'text'\">\r\n              <mat-icon class=\"muted\" matSuffix (click)=\"hidePassword = !hidePassword\">\r\n                {{hidePassword ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n              <mat-error\r\n                *ngIf=\"userLoginForm.get('password').errors?.required &&\r\n                          userLoginForm.get('password').touched\">\r\n                Введіть пароль\r\n              </mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <!-- <div class=\"submit-button-wrapper\">\r\n            <button mat-raised-button class=\"full-width\" color=\"primary\" [disabled]=\"!userLoginForm.valid\">Увійти</button>       \r\n          </div> -->\r\n\r\n          <div class=\"links-wrapper\" fxLayoutAlign=\"center\">\r\n            <button class=\"google-button full-width\" mat-raised-button color=\"primary\" aria-label=\"Login\"\r\n            [disabled]=\"!userLoginForm.valid\">Увійти</button>       \r\n          </div>\r\n          <div fxLayout=\"row\" class=\"links-wrapper\">\r\n              <a [routerLink]=\"['/user/create']\">Зареєструватись</a>\r\n              <span fxFlex></span>\r\n              <a [routerLink]=\"['/user/password-reset']\">Забули пароль</a>\r\n          </div>\r\n\r\n          <div class=\"links-wrapper\" fxLayoutAlign=\"center\">\r\n            <!-- <button mat-stroked-button type=\"button\" (click)=\"userGoogleLogin()\">\r\n                <i class=\"fab fa-google\"></i> Signin with google\r\n            </button> -->\r\n            <!-- <a mat-stroked-button href=\"http://localhost:8081/api/user/auth/google\">\r\n              <i class=\"fab fa-google\"></i> Signin with google\r\n            </a> -->\r\n\r\n            <a class=\"google-button\" mat-raised-button href=\"{{config.host + '/api/user/auth/google'}}\" aria-label=\"Sign in with Google\">\r\n                <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"18px\" height=\"18px\" viewBox=\"0 0 48 48\">\r\n                  <g>\r\n                    <path fill=\"#EA4335\" d=\"M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z\"></path>\r\n                    <path fill=\"#4285F4\" d=\"M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z\"></path>\r\n                    <path fill=\"#FBBC05\" d=\"M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z\"></path>\r\n                    <path fill=\"#34A853\" d=\"M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z\"></path>\r\n                    <path fill=\"none\" d=\"M0 0h48v48H0z\"></path>\r\n                  </g>\r\n                </svg>\r\n              Sign in with Google</a>\r\n          </div>\r\n\r\n         \r\n   \r\n        </form>\r\n      </mat-card-content>\r\n      <!--<img mat-card-image class=\"mat-card-image-bottom\" src=\"./assets/images/logo400x140-2.jpg\" alt=\"\">-->\r\n    </mat-card>\r\n  </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-password-reset/user-password-reset.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-password-reset/user-password-reset.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div class=\"cell\" fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n\r\n    <div class=\"item centered-container\">\r\n      <mat-card class=\"form-block\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            <h2 class=\"mat-h2\">Відновлення паролю</h2>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n          <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n            <img class=\"responsive-image\" src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\" alt=\"HandMADE\">\r\n          </div>\r\n          <div *ngIf=\"processing\" class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <div class=\"cell\" fxFlex=\"100\">\r\n              <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n            </div>\r\n          </div>\r\n          <mat-vertical-stepper #stepper linear>\r\n            <mat-step [stepControl]=\"emailForm\" editable=\"false\" >\r\n              <form [formGroup]=\"emailForm\" validate (submit)=\"onEmailSubmit(stepper)\">\r\n                <ng-template matStepLabel>Введіть свій email</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">mail_outline</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required>\r\n\r\n                    <mat-error\r\n                      *ngIf=\"(emailForm.get('email').errors?.minlength ||\r\n                        emailForm.get('email').errors?.maxlength ||\r\n                        emailForm.get('email').errors?.required) &&\r\n                        emailForm.get('email').touched\">\r\n                      Довжина повинна бути від 5 до 30 символів\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.pattern &&\r\n                        emailForm.get('email').touched\">\r\n                      Введіть правільну адресу\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.invalidEmail &&\r\n                        emailForm.get('email').touched\">\r\n                      Користувач з такою поштою не зареєстрований\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.unrecognizedError &&\r\n                        emailForm.get('email').touched\">\r\n                        'Сталася помилка'\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <re-captcha [ngClass]=\"{'display-none': !emailForm.get('email').valid}\"\r\n                  [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                            siteKey=\"{{config.recaptchaSiteKey}}\">\r\n                </re-captcha>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!emailForm.valid || processing\" aria-label=\"Next\">Далі</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n\r\n            <mat-step [stepControl]=\"codeForm\" editable=\"false\">\r\n\r\n              <form [formGroup]=\"codeForm\" (submit)=\"onCodeSubmit()\">\r\n                <!--<div *ngIf=\"codeForm.get('code').errors\">field {{codeForm.get('code').errors | json}}</div>-->\r\n                <!--<div *ngIf=\"codeForm.errors\">form {{codeForm.errors | json}}</div>-->\r\n\r\n                <ng-template matStepLabel>Введіть код, що надійшов на email</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">settings_ethernet</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Код підтвердження\" formControlName=\"code\" required>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.required &&\r\n                    codeForm.get('code').touched\">\r\n                      Введіть код\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.invalidCode &&\r\n                        codeForm.get('code').touched\">\r\n                      Код введено не вірно\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.maxTries\">\r\n                      Ви зробили максимальну кількість спроб\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.unrecognizedError &&\r\n                        codeForm.get('code').touched\">\r\n                      Сталася помилка\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!codeForm.valid || processing\" aria-label=\"Next\">Далі</button>\r\n                  <button *ngIf=\"codeForm.get('code').errors?.maxTries\" aria-label=\"Refresh\"\r\n                          mat-button (click)=\"refresh()\">Оновити сторінку</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n            <mat-step [stepControl]=\"passwordForm\" editable=\"false\">\r\n              <form [formGroup]=\"passwordForm\" (submit)=\"onPasswordSubmit()\">\r\n                <ng-template matStepLabel>Введіть новий пароль</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">lock_outline</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Пароль\" formControlName=\"password\"\r\n                           required [type]=\"hidePassword ? 'password' : 'text'\">\r\n                    <mat-icon class=\"muted\" matSuffix (click)=\"hidePassword = !hidePassword\">\r\n                      {{hidePassword ? 'visibility' : 'visibility_off'}}\r\n                    </mat-icon>\r\n                    <mat-error\r\n                      *ngIf=\"(passwordForm.get('password').errors?.minlength ||\r\n                          passwordForm.get('password').errors?.maxlength ||\r\n                          passwordForm.get('password').errors?.required) &&\r\n                          passwordForm.get('password').touched\">\r\n                      Довжина повинна бути від 6 до 15 символів\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"passwordForm.get('password').errors?.pattern &&\r\n                         passwordForm.get('password').touched\">\r\n                      Використовуйте тільки латинські символи та цифри\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <!--<mat-icon color=\"primary\">lock</mat-icon>-->\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Підтвердіть пароль\" formControlName=\"passwordConfirm\"\r\n                           required [type]=\"hidePassword ? 'password' : 'text'\">\r\n                    <mat-error\r\n                      *ngIf=\"passwordForm.get('passwordConfirm').errors?.mismatch &&\r\n                      passwordForm.get('passwordConfirm').touched\">\r\n                      Пароль не збігається\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!passwordForm.valid || processing\" aria-label=\"Finish\">Завершити</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n          </mat-vertical-stepper>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-profile/user-profile.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-profile/user-profile.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n\r\n<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div class=\"cell\" fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n\r\n    <div class=\"item centered-container\" *ngIf=\"user\">\r\n      <div class=\"info-block mat-elevation-z4\">\r\n\r\n        <div class=\"avatar-block\">\r\n          <form [formGroup]=\"changeAvatarForm\" (submit)=\"onSubmitChangeAvatarForm()\">\r\n\r\n          <div class=\"avatar-img-wrapper\">\r\n            <img *ngIf=\"!previewAvatarUrl\" src=\"{{user.role === 'google' ? \r\n              user.avatar :\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_180,h_180,f_auto/' +\r\n              user.avatar}}\" alt=\"avatar\">\r\n            <img *ngIf=\"previewAvatarUrl\"  src=\"{{previewAvatarUrl}}\" alt=\"avatar\">\r\n\r\n            <div *ngIf=\"processingChangeAvatar\" class=\"avatar-div-processing\">\r\n              <div class=\"spinner-wrapper\">\r\n                <mat-spinner [diameter]=\"24\"></mat-spinner>\r\n              </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"!editAvatar && !processingChangeAvatar && restrictTo(['google', 'facebook'])\" class=\"avatar-div-change\"></div>\r\n            <div *ngIf=\"!editAvatar && !processingChangeAvatar && restrictTo(['google', 'facebook'])\" class=\"avatar-button-change\">\r\n              <input type=\"file\" accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png, .gif\" (change)=\"changeAvatar($event)\" id=\"input-file\">\r\n              <label for=\"input-file\">Змінити\r\n              </label>\r\n            </div>\r\n\r\n\r\n            <div *ngIf=\"editAvatar && !processingChangeAvatar\">\r\n              <div class=\"avatar-div-ok\" >\r\n              </div>\r\n              <div class=\"avatar-div-cancel\">\r\n              </div>\r\n              <button class=\"avatar-button-ok\" [disabled]=\"!changeAvatarForm.valid\" aria-label=\"Done\">\r\n                <mat-icon>done</mat-icon>\r\n              </button>\r\n              <button type=\"button\" class=\"avatar-button-cancel\" (click)=\"cancelChangeAvatar()\" aria-label=\"Cancel\">\r\n                <mat-icon>cancel</mat-icon>\r\n              </button>\r\n            </div>\r\n          </div>\r\n          </form>\r\n\r\n        </div>\r\n\r\n        <div class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div class=\"info-block-row-title mat-title\">{{user.name}} {{user.surname}}</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"info-block-row-wrapper\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n              <!--<div fxFlex=\"100%\">-->\r\n                <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Email</div>\r\n                <div class=\"mat-body-1 muted\" fxFlex=\"60%\">{{user.email}}</div>\r\n                <!-- <mat-icon *ngIf=\"processing !== 'email'\" fxFlex=\"30px\"\r\n                          (click)=\"openDialog(makeEmailObject())\" class=\"muted\">edit</mat-icon> -->\r\n                <mat-spinner *ngIf=\"processing === 'email'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n              <!--</div>-->\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"user.role === 'guest' && !verificationSent\" class=\"info-block-row-wrapper border-0\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row mail-verification\">\r\n            <div class=\"mat-body-1\" fxFlex=\"100%\">\r\n              <p>Пошту не верифіковано, надіслати код.</p>\r\n              <p>Деякі функції будуть недоступні. Наприклад, відправка коментарів</p>\r\n            </div>\r\n            <mat-icon *ngIf=\"processing !== 'verification'\" fxFlex=\"30px\" (click)=\"onVerificationSend()\">mail</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'verification'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"user.role === 'guest' && verificationSent\" class=\"info-block-row-wrapper border-0\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row mail-verification\">\r\n            <div class=\"mat-body-1 muted\" fxFlex=\"100%\">На пошту надіслано посилання</div>\r\n            <mat-icon *ngIf=\"processing !== 'verification'\" fxFlex=\"30px\" class=\"muted\" (click)=\"onVerificationSend()\">refresh</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'verification'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Ім'я</div>\r\n            <!--<div fxFlex></div>-->\r\n            <div class=\"mat-subheading-2 muted\" fxFlex=\"60%\">{{user.name}}</div>\r\n            <mat-icon *ngIf=\"processing !== 'name' && restrictTo(['google', 'facebook'])\" fxFlex=\"30px\"\r\n                      (click)=\"openDialog(makeNameObject())\" class=\"muted\">edit</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'name'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Прізвище</div>\r\n            <!--<div fxFlex></div>-->\r\n            <div class=\"mat-subheading-2 muted\" fxFlex=\"60%\">{{user.surname}}</div>\r\n            <mat-icon *ngIf=\"processing !== 'surname' && restrictTo(['google', 'facebook'])\" fxFlex=\"30px\"\r\n                      (click)=\"openDialog(makeSurnameObject())\" class=\"muted\">edit</mat-icon>\r\n            <mat-spinner *ngIf=\"processing === 'surname'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"restrictTo(['google', 'facebook'])\" class=\"info-block-row-wrapper\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n            <div fxFlex=\"60%\"></div>\r\n            <div fxFlex=\"40%\">\r\n              <button mat-button (click)=\"openDialog(makePasswordObject())\" aria-label=\"Change password\">\r\n                <span *ngIf=\"processing !== 'password'\">Змінити пароль</span>\r\n                <mat-spinner *ngIf=\"processing === 'password'\" [diameter]=\"24\"></mat-spinner>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"user\">\r\n  <div class=\"container\">\r\n    <div class=\"app-container-h app-container-v\">\r\n        <router-outlet></router-outlet>\r\n\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci9yZWRpcmVjdGlvbi1hZnRlci1vYXV0aC9yZWRpcmVjdGlvbi1hZnRlci1vYXV0aC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: RedirectionAfterOauthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectionAfterOauthComponent", function() { return RedirectionAfterOauthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RedirectionAfterOauthComponent = class RedirectionAfterOauthComponent {
    constructor(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteConfigLoadEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe((event) => {
            this.userService.logging();
            this.router.navigate(['/user', 'profile']);
        }, (err) => console.log('err', err));
    }
};
RedirectionAfterOauthComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }
];
RedirectionAfterOauthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-redirection-after-oauth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./redirection-after-oauth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./redirection-after-oauth.component.scss */ "./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.scss")).default]
    })
], RedirectionAfterOauthComponent);



/***/ }),

/***/ "./src/app/components/user/user-create/user-create.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-create/user-create.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWNyZWF0ZS91c2VyLWNyZWF0ZS5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");









let UserCreateComponent = class UserCreateComponent {
    constructor(validateService, userService, matSnackBar, router) {
        this.validateService = validateService;
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_7__["config"];
        this.hidePassword = true;
    }
    ngOnInit() {
        const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.userCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9]+'),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9]+'),
            ]),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
            ]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(emailPattern),
            ]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        }, this.validateService.matchPassword);
    }
    onUserCreateSubmit() {
        this.user = {
            login: this.userCreateForm.get('login').value,
            password: this.userCreateForm.get('password').value,
            email: this.userCreateForm.get('email').value,
            name: this.userCreateForm.get('name').value,
            surname: this.userCreateForm.get('surname').value
        };
        // create user
        this.userService.userCreate(this.user, this.userCreateForm.get('recaptcha').value)
            .subscribe(result => {
            const token = result;
            this.resetForm();
            this.matSnackBar.open('Користувача створено, вхід виконано', '', { duration: 3000 });
            // login new user
            this.userService.logging();
            this.router.navigate(['/user', 'profile']);
        }, err => {
            // 422 or 400
            this.recaptchaRef.reset();
            this.matSnackBar.open(err.error.message || 'Сталася помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    }
    onUserCreateReset() {
        this.resetForm();
        // MAKE redirect
    }
    resetForm() {
        if (this.userCreateFormDirective) {
            this.userCreateFormDirective.resetForm();
        }
    }
};
UserCreateComponent.ctorParameters = () => [
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"] },
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], { static: false })
], UserCreateComponent.prototype, "userCreateFormDirective", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["RecaptchaComponent"], { static: false })
], UserCreateComponent.prototype, "recaptchaRef", void 0);
UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-create/user-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-create.component.scss */ "./src/app/components/user/user-create/user-create.component.scss")).default]
    })
], UserCreateComponent);



/***/ }),

/***/ "./src/app/components/user/user-dialog/user-dialog.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/user/user-dialog/user-dialog.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWRpYWxvZy91c2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let UserDialogComponent = class UserDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ngOnInit() {
        this.userEditForm = this.data.initForm();
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onSubmit() {
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
    }
};
UserDialogComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
UserDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-dialog',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-dialog/user-dialog.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-dialog.component.scss */ "./src/app/components/user/user-dialog/user-dialog.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], UserDialogComponent);



/***/ }),

/***/ "./src/app/components/user/user-login/user-login.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/user/user-login/user-login.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLWxvZ2luL3VzZXItbG9naW4uY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");








let UserLoginComponent = class UserLoginComponent {
    constructor(userService, sharedService, matSnackBar, router) {
        this.userService = userService;
        this.sharedService = sharedService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_6__["config"];
        this.hidePassword = true;
    }
    ngOnInit() {
        this.userLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            login: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
    }
    onUserLoginSubmit() {
        this.user = {
            login: this.userLoginForm.get('login').value,
            password: this.userLoginForm.get('password').value,
        };
        this.userService.userLogin(this.user)
            .subscribe(result => {
            if (result === 'logged in') {
                this.resetForm();
                this.userService.logging();
                this.sharedService.sharingEventToReloadComments();
                // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
                this.matSnackBar.open(`${this.user.login}, ви увійшли на сайт`, '', { duration: 5000 });
                this.router.navigate(['/user', 'profile']);
            }
        }, err => {
            this.matSnackBar.open(err.error.message || 'Сталася помилка', '', { duration: 5000, panelClass: 'snack-bar-danger' });
        });
    }
    resetForm() {
        if (this.userCreateFormDirective) {
            this.userCreateFormDirective.resetForm();
        }
    }
};
UserLoginComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], { static: false })
], UserLoginComponent.prototype, "userCreateFormDirective", void 0);
UserLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-login/user-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-login.component.scss */ "./src/app/components/user/user-login/user-login.component.scss")).default]
    })
], UserLoginComponent);



/***/ }),

/***/ "./src/app/components/user/user-password-reset/user-password-reset.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/user/user-password-reset/user-password-reset.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLXBhc3N3b3JkLXJlc2V0L3VzZXItcGFzc3dvcmQtcmVzZXQuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");









let UserPasswordResetComponent = class UserPasswordResetComponent {
    constructor(userService, validateService, matSnackBar, router, sharedService) {
        this.userService = userService;
        this.validateService = validateService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.sharedService = sharedService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_7__["config"];
        this.hidePassword = true;
        this.processing = false;
    }
    ngOnInit() {
        const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        this.emailForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(emailPattern),
            ]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])
        });
        this.codeForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        });
        this.passwordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(15),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9]+'),
            ]),
            passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ]),
        }, this.validateService.matchPassword);
    }
    onEmailSubmit(stepper) {
        this.processing = true;
        this.userService.userLocalRemoveToken('token');
        this.userService.userLocalRemoveToken('codeToken');
        this.userService.userLocalRemoveToken('passwordResetToken');
        const email = this.emailForm.get('email').value;
        const recaptcha = this.emailForm.get('recaptcha').value;
        this.userService.userPasswordResetEmail(email, recaptcha)
            .subscribe(result => {
            this.processing = false;
            this.emailForm.get('email').setErrors(null);
            this.matStepper.next();
            const codeToken = result;
            this.userService.userLocalSetToken('codeToken', codeToken);
        }, err => {
            this.processing = false;
            if (err.error.code === 'wrongCredentials') {
                this.emailForm.get('email').setErrors({ invalidEmail: true });
            }
            else {
                this.matStepper.reset();
                this.matSnackBar.open('Сталася помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            }
        });
    }
    onCodeSubmit() {
        this.processing = true;
        const code = this.codeForm.get('code').value;
        const codeToken = this.userService.userLocalGetToken('codeToken');
        this.userService.userPasswordResetCode(code, codeToken)
            .subscribe(passwordResetToken => {
            this.processing = false;
            this.codeForm.get('code').setErrors(null);
            this.matStepper.next();
            this.userService.userLocalRemoveToken('codeToken');
            this.userService.userLocalSetToken('passwordResetToken', passwordResetToken);
        }, err => {
            this.processing = false;
            if (err.error.code === 'wrongCredentials') {
                this.codeForm.get('code').setErrors({ invalidCode: true });
            }
            else if (err.error.code === 'maxTries') {
                this.codeForm.get('code').setErrors({ maxTries: true });
                this.codeForm.setValidators(this.validateService.maxTries);
                setTimeout(() => {
                    this.router.navigate(['/']);
                }, 3000);
                this.matSnackBar.open('Код невірний, спрпобуйте пізніше', '', { duration: 4000, panelClass: 'snack-bar-danger' });
            }
            else {
                this.codeForm.get('code').setErrors({ unrecognizedError: true });
            }
        });
    }
    refresh() {
        console.log('refresh');
    }
    onPasswordSubmit() {
        this.processing = true;
        const password = this.passwordForm.get('password').value;
        const passwordResetToken = this.userService.userLocalGetToken('passwordResetToken');
        this.userService.userPasswordReset(password, passwordResetToken)
            .subscribe(result => {
            // const token = result;
            this.processing = false;
            this.userService.userLocalRemoveToken('passwordResetToken');
            this.userService.logging();
            this.sharedService.sharingEventToReloadComments();
            this.router.navigate(['/user', 'profile']);
            this.matSnackBar.open('Пароль відновлено', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        }, err => {
            this.processing = false;
            this.matSnackBar.open(err.error.message || 'Сталася помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    }
    goHomePage() {
        this.router.navigate(['/']);
    }
};
UserPasswordResetComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _services_validate_service__WEBPACK_IMPORTED_MODULE_4__["ValidateService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stepper', { static: false })
], UserPasswordResetComponent.prototype, "matStepper", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recaptchaRef', { static: false })
], UserPasswordResetComponent.prototype, "recaptchaRef", void 0);
UserPasswordResetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-password-reset',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-password-reset.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-password-reset/user-password-reset.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-password-reset.component.scss */ "./src/app/components/user/user-password-reset/user-password-reset.component.scss")).default]
    })
], UserPasswordResetComponent);



/***/ }),

/***/ "./src/app/components/user/user-profile/user-profile.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/user/user-profile/user-profile.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user-dialog/user-dialog.component */ "./src/app/components/user/user-dialog/user-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");










let UserProfileComponent = class UserProfileComponent {
    constructor(userService, matSnackBar, router, dialog) {
        this.userService = userService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.dialog = dialog;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"];
        this.editAvatar = false;
        this.processingChangeAvatar = false;
        this.verificationSent = false;
    }
    ngOnInit() {
        this.getProfile();
        this.changeAvatarForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(4),
            ]),
        });
    }
    allowTo(permitedRole) {
        return this.userService.allowTo(permitedRole);
    }
    restrictTo(restrictedRoles) {
        return this.userService.restrictTo(restrictedRoles);
    }
    onVerificationSend() {
        this.verificationSent = true;
        this.processing = 'verification';
        this.userService.userEmailVerification()
            .subscribe((result) => {
            this.processing = '';
            this.matSnackBar.open(result, '', { duration: 3000 });
        }, (err) => {
            this.processing = '';
            this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    }
    onSubmitChangeAvatarForm() {
        this.processingChangeAvatar = true;
        this.userService.userEditAvatar(this.changeAvatarForm.get('file').value)
            .subscribe(result => {
            this.matSnackBar.open(result, '', { duration: 3000 });
            this.getProfile();
            this.previewAvatarUrl = null;
            this.processingChangeAvatar = false;
            this.editAvatar = false;
        }, err => this.matSnackBar.open(err.error.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' }));
    }
    changeAvatar(event) {
        this.editAvatar = true;
        const checkFile = this.userService.checkFile(event.target);
        if (!checkFile.success) {
            this.cancelChangeAvatar();
            this.matSnackBar.open(checkFile.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        }
        else {
            this.changeAvatarForm.get('file').setValue(event.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener('load', (readerEvent) => {
                // .jpg, .jpe, .jpeg, .bmp, .webp, .png
                this.previewAvatarUrl = readerEvent.target.result;
            });
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    cancelChangeAvatar() {
        this.changeAvatarForm.get('file').setValue(null);
        this.editAvatar = false;
        this.previewAvatarUrl = null;
    }
    getProfile() {
        this.userService.userGetProfile()
            .subscribe(user => {
            this.user = user;
        }, err => {
            this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' });
            this.router.navigate(['/user', 'login']);
        });
    }
    openDialog(object) {
        const dialogRef = this.dialog.open(_user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_6__["UserDialogComponent"], {
            width: '400px',
            data: object,
        });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(result => {
            if (result) {
                return this.userService.userEdit(result);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(null);
            }
        }))
            .subscribe(result => {
            this.processing = null;
            if (!result) {
                // didn't get data from dialog
                return;
            }
            else {
                this.matSnackBar.open(result, '', { duration: 3000 });
                this.getProfile();
            }
        }, err => {
            this.processing = null;
            this.matSnackBar.open(err.error.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
        });
    }
    makePasswordObject() {
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
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
                    password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(6),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(15),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[a-zA-Z0-9]+'),
                    ]),
                    passwordConfirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    ]),
                    passwordCurrent: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    ]),
                }, function matchPassword(abstractControl) {
                    const password = abstractControl.get('password').value;
                    const passwordConfirm = abstractControl.get('passwordConfirm').value;
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
    }
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
    makeNameObject() {
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
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
                    ]),
                    passwordCurrent: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    ]),
                });
            },
        };
    }
    makeSurnameObject() {
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
                return new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
                    surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(2),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(20),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
                    ]),
                    passwordCurrent: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required,
                    ]),
                });
            },
        };
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-profile/user-profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-profile.component.scss */ "./src/app/components/user/user-profile/user-profile.component.scss")).default]
    })
], UserProfileComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/components/user/user-create/user-create.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/components/user/user-login/user-login.component.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-password-reset/user-password-reset.component */ "./src/app/components/user/user-password-reset/user-password-reset.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../guards/no-auth.guard */ "./src/app/guards/no-auth.guard.ts");
/* harmony import */ var _shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
/* harmony import */ var _redirection_after_oauth_redirection_after_oauth_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./redirection-after-oauth/redirection-after-oauth.component */ "./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.ts");












const userRoutes = [
    {
        path: '',
        component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
        children: [
            {
                path: 'create',
                component: _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_4__["UserCreateComponent"],
            },
            {
                path: 'login',
                component: _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_5__["UserLoginComponent"],
                canActivate: [_guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_9__["NoAuthGuard"]],
                data: { auth: ['guest', 'user', 'manager', 'admin', 'google', 'facebook'] },
            },
            {
                path: 'profile',
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                data: { auth: 'guest' },
            },
            {
                path: 'password-reset',
                component: _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_7__["UserPasswordResetComponent"],
            },
            {
                path: 'redirection-after-oauth',
                component: _redirection_after_oauth_redirection_after_oauth_component__WEBPACK_IMPORTED_MODULE_11__["RedirectionAfterOauthComponent"],
            },
            { path: '', component: _shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_10__["Page404Component"] },
        ],
    },
];
let UserRoutingModule = class UserRoutingModule {
};
UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(userRoutes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], UserRoutingModule);



/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UserComponent = class UserComponent {
    constructor() { }
    ngOnInit() {
    }
};
UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")).default]
    })
], UserComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-routing.module */ "./src/app/components/user/user-routing.module.ts");
/* harmony import */ var _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-create/user-create.component */ "./src/app/components/user/user-create/user-create.component.ts");
/* harmony import */ var _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-login/user-login.component */ "./src/app/components/user/user-login/user-login.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-dialog/user-dialog.component */ "./src/app/components/user/user-dialog/user-dialog.component.ts");
/* harmony import */ var _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-password-reset/user-password-reset.component */ "./src/app/components/user/user-password-reset/user-password-reset.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _redirection_after_oauth_redirection_after_oauth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./redirection-after-oauth/redirection-after-oauth.component */ "./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.ts");
















let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
            _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
            _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
            _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_10__["UserDialogComponent"],
            _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_11__["UserPasswordResetComponent"],
            _redirection_after_oauth_redirection_after_oauth_component__WEBPACK_IMPORTED_MODULE_14__["RedirectionAfterOauthComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"]
        ],
        exports: [],
        entryComponents: [
            _user_dialog_user_dialog_component__WEBPACK_IMPORTED_MODULE_10__["UserDialogComponent"],
        ]
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=default~components-dashboard-dashboard-module~components-user-user-module.js.map