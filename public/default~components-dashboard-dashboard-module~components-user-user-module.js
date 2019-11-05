(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-dashboard-dashboard-module~components-user-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<lib-redir-after-oauth></lib-redir-after-oauth>\r\n<!-- <div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n  </div>\r\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-create/user-create.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-create/user-create.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<lib-create></lib-create>\r\n\r\n<!-- <div class=\"container\">\r\n\r\n  <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n    <div fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n    <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n\r\n      <div class=\"centered-container\">\r\n        <mat-card class=\"form-block\">\r\n          <mat-card-content>\r\n            <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n              <img class=\"responsive-image\" src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\" alt=\"HandMADE\">\r\n            </div>\r\n\r\n            <form [formGroup]=\"userCreateForm\" (submit)=\"onUserCreateSubmit()\">\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">account_box</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Логін\" formControlName=\"login\" required>\r\n                  <mat-error *ngIf=\"(userCreateForm.get('login').errors?.minlength ||\r\n                      userCreateForm.get('login').errors?.maxlength ||\r\n                      userCreateForm.get('login').errors?.required) &&\r\n                      userCreateForm.get('login').touched\">\r\n                    Довжина повинна бути від 4 до 15 символів\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"userCreateForm.get('login').errors?.pattern &&\r\n                     userCreateForm.get('login').touched\">\r\n                    Використовуйте тільки латинські символи і цифри\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">account_circle</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Ім'я\" formControlName=\"name\" required>\r\n                  <mat-error *ngIf=\"(userCreateForm.get('name').errors?.minlength ||\r\n                      userCreateForm.get('name').errors?.maxlength ||\r\n                      userCreateForm.get('name').errors?.required) &&\r\n                      userCreateForm.get('name').touched\">\r\n                    Довжина повинна бути від 2 до 20 символів\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"userCreateForm.get('name').errors?.pattern &&\r\n                     userCreateForm.get('name').touched\">\r\n                    Використовуйте тільки букви і цифри\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">supervised_user_circle</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Прізвище\" formControlName=\"surname\" required>\r\n                  <mat-error *ngIf=\"(userCreateForm.get('surname').errors?.minlength ||\r\n                      userCreateForm.get('surname').errors?.maxlength ||\r\n                      userCreateForm.get('surname').errors?.required) &&\r\n                      userCreateForm.get('surname').touched\">\r\n                    Довжина повинна бути від 2 до 20 символів\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"userCreateForm.get('surname').errors?.pattern &&\r\n                     userCreateForm.get('surname').touched\">\r\n                    Використовуйте тільки букви і цифри\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">lock_outline</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Пароль\" formControlName=\"password\" required\r\n                    [type]=\"hidePassword ? 'password' : 'text'\">\r\n                  <mat-icon color=\"accent\" matSuffix (click)=\"hidePassword = !hidePassword\">\r\n                    {{hidePassword ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n                  <mat-error *ngIf=\"(userCreateForm.get('password').errors?.minlength ||\r\n                          userCreateForm.get('password').errors?.maxlength ||\r\n                          userCreateForm.get('password').errors?.required) &&\r\n                          userCreateForm.get('password').touched\">\r\n                    Довжина повинна бути від 6 до 15 символів\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"userCreateForm.get('password').errors?.pattern &&\r\n                         userCreateForm.get('password').touched\">\r\n                    Використовуйте тільки латинські символи та цифри\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Підтвердіть пароль\" formControlName=\"passwordConfirm\" required\r\n                    [type]=\"hidePassword ? 'password' : 'text'\">\r\n\r\n                  <mat-icon\r\n                    *ngIf=\"!userCreateForm.get('passwordConfirm').errors?.mismatch && !userCreateForm.get('password').errors\"\r\n                    matSuffix color=\"accent\">verified_user</mat-icon>\r\n\r\n                  <mat-error *ngIf=\"userCreateForm.get('passwordConfirm').errors?.mismatch &&\r\n                      userCreateForm.get('passwordConfirm').touched\">\r\n                    Пароль не збігається\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">mail_outline</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required>\r\n                  <mat-error *ngIf=\"(userCreateForm.get('email').errors?.minlength ||\r\n                        userCreateForm.get('email').errors?.maxlength ||\r\n                        userCreateForm.get('email').errors?.required) &&\r\n                        userCreateForm.get('email').touched\">\r\n                    Довжина повинна бути від 5 до 50 символів\r\n                  </mat-error>\r\n                  <mat-error *ngIf=\"userCreateForm.get('email').errors?.pattern &&\r\n                       userCreateForm.get('email').touched\">\r\n                    Введіть правільну адресу\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <re-captcha [ngClass]=\"{'display-none':\r\n          !userCreateForm.get('email').valid || !userCreateForm.get('login').valid ||\r\n          !userCreateForm.get('password').valid || !userCreateForm.get('passwordConfirm').valid}\"\r\n                [formControlName]=\"'recaptcha'\" #recaptchaRef siteKey=\"{{config.recaptchaSiteKey}}\">\r\n              </re-captcha>\r\n\r\n              <div class=\"submit-button-wrapper\">\r\n                <span fxFlex></span>\r\n                <button mat-raised-button color=\"primary\" [disabled]=\"!userCreateForm.valid\"\r\n                  aria-label=\"Register\">Зареєструватись</button>\r\n              </div>\r\n\r\n            </form>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-login/user-login.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-login/user-login.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<lib-login></lib-login>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-password-reset/user-password-reset.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-password-reset/user-password-reset.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<lib-password-reset></lib-password-reset>\r\n<!-- <div class=\"container\">\r\n\r\n<div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n  <div class=\"cell\" fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n  <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n\r\n    <div class=\"item centered-container\">\r\n      <mat-card class=\"form-block\">\r\n        <mat-card-header>\r\n          <mat-card-title>\r\n            <h2 class=\"mat-h2\">Відновлення паролю</h2>\r\n          </mat-card-title>\r\n        </mat-card-header>\r\n\r\n        <mat-card-content>\r\n          <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n            <img class=\"responsive-image\" src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\" alt=\"HandMADE\">\r\n          </div>\r\n          <div *ngIf=\"processing\" class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <div class=\"cell\" fxFlex=\"100\">\r\n              <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n            </div>\r\n          </div>\r\n          <mat-vertical-stepper #stepper linear>\r\n            <mat-step [stepControl]=\"emailForm\" editable=\"false\" >\r\n              <form [formGroup]=\"emailForm\" validate (submit)=\"onEmailSubmit(stepper)\">\r\n                <ng-template matStepLabel>Введіть свій email</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">mail_outline</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Email\" formControlName=\"email\" type=\"email\" required>\r\n\r\n                    <mat-error\r\n                      *ngIf=\"(emailForm.get('email').errors?.minlength ||\r\n                        emailForm.get('email').errors?.maxlength ||\r\n                        emailForm.get('email').errors?.required) &&\r\n                        emailForm.get('email').touched\">\r\n                      Довжина повинна бути від 5 до 30 символів\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.pattern &&\r\n                        emailForm.get('email').touched\">\r\n                      Введіть правільну адресу\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.invalidEmail &&\r\n                        emailForm.get('email').touched\">\r\n                      Користувач з такою поштою не зареєстрований\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"emailForm.get('email').errors?.unrecognizedError &&\r\n                        emailForm.get('email').touched\">\r\n                        'Сталася помилка'\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <re-captcha [ngClass]=\"{'display-none': !emailForm.get('email').valid}\"\r\n                  [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                            siteKey=\"{{config.recaptchaSiteKey}}\">\r\n                </re-captcha>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!emailForm.valid || processing\" aria-label=\"Next\">Далі</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n\r\n            <mat-step [stepControl]=\"codeForm\" editable=\"false\">\r\n\r\n              <form [formGroup]=\"codeForm\" (submit)=\"onCodeSubmit()\">\r\n                <ng-template matStepLabel>Введіть код, що надійшов на email</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">settings_ethernet</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Код підтвердження\" formControlName=\"code\" required>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.required &&\r\n                    codeForm.get('code').touched\">\r\n                      Введіть код\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.invalidCode &&\r\n                        codeForm.get('code').touched\">\r\n                      Код введено не вірно\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.maxTries\">\r\n                      Ви зробили максимальну кількість спроб\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"codeForm.get('code').errors?.unrecognizedError &&\r\n                        codeForm.get('code').touched\">\r\n                      Сталася помилка\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!codeForm.valid || processing\" aria-label=\"Next\">Далі</button>\r\n                  <button *ngIf=\"codeForm.get('code').errors?.maxTries\" aria-label=\"Refresh\"\r\n                          mat-button (click)=\"refresh()\">Оновити сторінку</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n            <mat-step [stepControl]=\"passwordForm\" editable=\"false\">\r\n              <form [formGroup]=\"passwordForm\" (submit)=\"onPasswordSubmit()\">\r\n                <ng-template matStepLabel>Введіть новий пароль</ng-template>\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                    <mat-icon color=\"primary\">lock_outline</mat-icon>\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Пароль\" formControlName=\"password\"\r\n                           required [type]=\"hidePassword ? 'password' : 'text'\">\r\n                    <mat-icon class=\"muted\" matSuffix (click)=\"hidePassword = !hidePassword\">\r\n                      {{hidePassword ? 'visibility' : 'visibility_off'}}\r\n                    </mat-icon>\r\n                    <mat-error\r\n                      *ngIf=\"(passwordForm.get('password').errors?.minlength ||\r\n                          passwordForm.get('password').errors?.maxlength ||\r\n                          passwordForm.get('password').errors?.required) &&\r\n                          passwordForm.get('password').touched\">\r\n                      Довжина повинна бути від 6 до 15 символів\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"passwordForm.get('password').errors?.pattern &&\r\n                         passwordForm.get('password').touched\">\r\n                      Використовуйте тільки латинські символи та цифри\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div fxLayout=\"row\">\r\n                  <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  </div>\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Підтвердіть пароль\" formControlName=\"passwordConfirm\"\r\n                           required [type]=\"hidePassword ? 'password' : 'text'\">\r\n                    <mat-error\r\n                      *ngIf=\"passwordForm.get('passwordConfirm').errors?.mismatch &&\r\n                      passwordForm.get('passwordConfirm').touched\">\r\n                      Пароль не збігається\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div>\r\n                  <button mat-button [disabled]=\"!passwordForm.valid || processing\" aria-label=\"Finish\">Завершити</button>\r\n                </div>\r\n              </form>\r\n            </mat-step>\r\n          </mat-vertical-stepper>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-profile/user-profile.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-profile/user-profile.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<lib-profile></lib-profile>\r\n<!-- <div class=\"container\">\r\n\r\n  <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n    <div class=\"cell\" fxFlex.gt-xs=\"20\" fxFlex.gt-md=\"30\"></div>\r\n\r\n    <div class=\"cell\" fxFlex.gt-xs=\"60\" fxFlex.gt-md=\"40\">\r\n\r\n      <div class=\"item centered-container\" *ngIf=\"user\">\r\n        <div class=\"info-block mat-elevation-z4\">\r\n\r\n          <div class=\"avatar-block\">\r\n            <form [formGroup]=\"changeAvatarForm\" (submit)=\"onSubmitChangeAvatarForm()\">\r\n\r\n              <div class=\"avatar-img-wrapper\">\r\n                <img *ngIf=\"!previewAvatarUrl\" src=\"{{user.role === 'google' ? \r\n              user.avatar :\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_180,h_180,f_auto/' +\r\n              user.avatar}}\" alt=\"avatar\">\r\n                <img *ngIf=\"previewAvatarUrl\" src=\"{{previewAvatarUrl}}\" alt=\"avatar\">\r\n\r\n                <div *ngIf=\"processingChangeAvatar\" class=\"avatar-div-processing\">\r\n                  <div class=\"spinner-wrapper\">\r\n                    <mat-spinner [diameter]=\"24\"></mat-spinner>\r\n                  </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"!editAvatar && !processingChangeAvatar && restrictTo(['google', 'facebook'])\"\r\n                  class=\"avatar-div-change\"></div>\r\n                <div *ngIf=\"!editAvatar && !processingChangeAvatar && restrictTo(['google', 'facebook'])\"\r\n                  class=\"avatar-button-change\">\r\n                  <input type=\"file\" accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png, .gif\" (change)=\"changeAvatar($event)\"\r\n                    id=\"input-file\">\r\n                  <label for=\"input-file\">Змінити\r\n                  </label>\r\n                </div>\r\n\r\n                <div *ngIf=\"editAvatar && !processingChangeAvatar\">\r\n                  <div class=\"avatar-div-ok\">\r\n                  </div>\r\n                  <div class=\"avatar-div-cancel\">\r\n                  </div>\r\n                  <button class=\"avatar-button-ok\" [disabled]=\"!changeAvatarForm.valid\" aria-label=\"Done\">\r\n                    <mat-icon>done</mat-icon>\r\n                  </button>\r\n                  <button type=\"button\" class=\"avatar-button-cancel\" (click)=\"cancelChangeAvatar()\" aria-label=\"Cancel\">\r\n                    <mat-icon>cancel</mat-icon>\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n          <div class=\"info-block-row-wrapper\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n              <div class=\"info-block-row-title mat-title\">{{user.name}} {{user.surname}}</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"info-block-row-wrapper\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n              <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Email</div>\r\n              <div class=\"mat-body-1 muted\" fxFlex=\"60%\">{{user.email}}</div>\r\n              <mat-spinner *ngIf=\"processing === 'email'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"user.role === 'guest' && !verificationSent\" class=\"info-block-row-wrapper border-0\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row mail-verification\">\r\n              <div class=\"mat-body-1\" fxFlex=\"100%\">\r\n                <p>Пошту не верифіковано, надіслати код.</p>\r\n                <p>Деякі функції будуть недоступні. Наприклад, відправка коментарів</p>\r\n              </div>\r\n              <mat-icon *ngIf=\"processing !== 'verification'\" fxFlex=\"30px\" (click)=\"onVerificationSend()\">mail\r\n              </mat-icon>\r\n              <mat-spinner *ngIf=\"processing === 'verification'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n            </div>\r\n          </div>\r\n\r\n          <div *ngIf=\"user.role === 'guest' && verificationSent\" class=\"info-block-row-wrapper border-0\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row mail-verification\">\r\n              <div class=\"mat-body-1 muted\" fxFlex=\"100%\">На пошту надіслано посилання</div>\r\n              <mat-icon *ngIf=\"processing !== 'verification'\" fxFlex=\"30px\" class=\"muted\"\r\n                (click)=\"onVerificationSend()\">refresh</mat-icon>\r\n              <mat-spinner *ngIf=\"processing === 'verification'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"info-block-row-wrapper\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n              <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Ім'я</div>\r\n              <div class=\"mat-subheading-2 muted\" fxFlex=\"60%\">{{user.name}}</div>\r\n              <mat-icon *ngIf=\"processing !== 'name' && restrictTo(['google', 'facebook'])\" fxFlex=\"30px\"\r\n                (click)=\"openDialog(makeNameObject())\" class=\"muted\">edit</mat-icon>\r\n              <mat-spinner *ngIf=\"processing === 'name'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n\r\n            </div>\r\n          </div>\r\n          <div class=\"info-block-row-wrapper\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n              <div class=\"info-block-row-title mat-subheading-1\" fxFlex=\"40%\">Прізвище</div>\r\n              <div class=\"mat-subheading-2 muted\" fxFlex=\"60%\">{{user.surname}}</div>\r\n              <mat-icon *ngIf=\"processing !== 'surname' && restrictTo(['google', 'facebook'])\" fxFlex=\"30px\"\r\n                (click)=\"openDialog(makeSurnameObject())\" class=\"muted\">edit</mat-icon>\r\n              <mat-spinner *ngIf=\"processing === 'surname'\" fxFlex=\"30px\" [diameter]=\"24\"></mat-spinner>\r\n\r\n            </div>\r\n          </div>\r\n          <div *ngIf=\"restrictTo(['google', 'facebook'])\" class=\"info-block-row-wrapper\">\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"center\" class=\"info-block-row\">\r\n              <div fxFlex=\"60%\"></div>\r\n              <div fxFlex=\"40%\">\r\n                <button mat-button (click)=\"openDialog(makePasswordObject())\" aria-label=\"Change password\">\r\n                  <span *ngIf=\"processing !== 'password'\">Змінити пароль</span>\r\n                  <mat-spinner *ngIf=\"processing === 'password'\" [diameter]=\"24\"></mat-spinner>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->");

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
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");


// import { Router, RouteConfigLoadEnd } from '@angular/router';
// import { NgUserManService } from 'ng-user-man';
// import { filter, take } from 'rxjs/operators';

let RedirectionAfterOauthComponent = class RedirectionAfterOauthComponent extends ng_user_man__WEBPACK_IMPORTED_MODULE_2__["RedirAfterOauthComponent"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    ngOnInit() {
        super.ngOnInit();
        // this.router.events.pipe(
        //   filter((event) => event instanceof RouteConfigLoadEnd),
        //   take(1)
        // )
        //   .subscribe(
        //     (event) => {
        //       this.userService.logging();
        //       this.router.navigate(['/user', 'profile']);
        //     },
        //     (err) => console.log('err', err)
        //   );
    }
};
RedirectionAfterOauthComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
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
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");


// import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
// import { ValidateService } from '../../../services/validate.service';
// import { IUser } from '../../../interfaces/user-interface';
// import { UserService } from '../../../services/user.service';
// import { MatSnackBar } from '@angular/material';
// import { Router } from '@angular/router';
// import { SharedService, ValidateService, NgUserManService } from 'ng-user-man';;
// import { config } from '../../../app.config';
// import { RecaptchaComponent } from 'ng-recaptcha';

let UserCreateComponent = class UserCreateComponent extends ng_user_man__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"] {
    // config = config;
    // userCreateForm: FormGroup;
    // hidePassword = true;
    // user: IUser;
    // /**
    //  * directive for reset form (invalid status)
    //  */
    // @ViewChild(FormGroupDirective, { static: false }) userCreateFormDirective: FormGroupDirective;
    // @ViewChild(RecaptchaComponent, { static: false }) recaptchaRef: RecaptchaComponent;
    constructor(
    // protected validateService: ValidateService,
    // protected ngUserManService: NgUserManService,
    // protected matSnackBar: MatSnackBar,
    // protected router: Router,
    injector) {
        super(
        // validateService,
        // ngUserManService,
        // matSnackBar,
        // router,
        injector);
        this.injector = injector;
    }
    ngOnInit() {
        super.ngOnInit();
        // const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // this.userCreateForm = new FormGroup({
        //   login: new FormControl('', [
        //     Validators.required,
        //     Validators.minLength(4),
        //     Validators.maxLength(15),
        //     Validators.pattern('[a-zA-Z0-9]+'),
        //   ]),
        //   password: new FormControl('', [
        //     Validators.required,
        //     Validators.minLength(6),
        //     Validators.maxLength(15),
        //     Validators.pattern('[a-zA-Z0-9]+'),
        //   ]),
        //   passwordConfirm: new FormControl('', [
        //     Validators.required,
        //   ]),
        //   name: new FormControl('', [
        //     Validators.required,
        //     Validators.minLength(2),
        //     Validators.maxLength(20),
        //     Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
        //   ]),
        //   surname: new FormControl('', [
        //     Validators.required,
        //     Validators.minLength(2),
        //     Validators.maxLength(20),
        //     Validators.pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ\' ]+'),
        //   ]),
        //   email: new FormControl('', [
        //     Validators.required,
        //     Validators.minLength(5),
        //     Validators.maxLength(50),
        //     Validators.pattern(emailPattern),
        //   ]),
        //   recaptcha: new FormControl('', [
        //     Validators.required
        //   ])
        // },
        //   this.validateService.matchPassword
        // );
    }
};
UserCreateComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
UserCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/user/user-create/user-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-create.component.scss */ "./src/app/components/user/user-create/user-create.component.scss")).default]
    })
], UserCreateComponent);



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
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");



// import { NgUserManService } from 'ng-user-man';
let UserLoginComponent = class UserLoginComponent extends ng_user_man__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] {
    constructor(
    // protected sharedService: SharedService,
    // protected matSnackBar: MatSnackBar,
    // protected router: Router,
    injector) {
        super(
        // matSnackBar,
        // ngUserManService,
        // sharedService,
        injector);
        this.injector = injector;
    }
    ngOnInit() {
        super.ngOnInit();
    }
};
UserLoginComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
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
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");


// import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../../../services/user.service';
// import { ValidateService } from '../../../services/validate.service';
// import { MatSnackBar, MatStepper } from '@angular/material';
// import { Router } from '@angular/router';
// import { config } from '../../../app.config';

let UserPasswordResetComponent = class UserPasswordResetComponent extends ng_user_man__WEBPACK_IMPORTED_MODULE_2__["PasswordResetComponent"] {
    // config = config;
    // emailForm: FormGroup;
    // codeForm: FormGroup;
    // passwordForm: FormGroup;
    // hidePassword = true;
    // processing = false;
    // // result = false;
    // error: {};
    // @ViewChild('stepper', { static: false }) matStepper: MatStepper;
    // @ViewChild('recaptchaRef', { static: false }) recaptchaRef;
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    ngOnInit() {
        super.ngOnInit();
        // const emailPattern = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        // this.emailForm = new FormGroup({
        //   email: new FormControl('', [
        //     Validators.required,
        //     Validators.minLength(5),
        //     Validators.maxLength(30),
        //     Validators.pattern(emailPattern),
        //   ]),
        //   recaptcha: new FormControl('', [
        //     Validators.required
        //   ])
        //   },
        // );
        // this.codeForm = new FormGroup({
        //     code: new FormControl('', [
        //       Validators.required,
        //     ]),
        //   },
        // );
        // this.passwordForm = new FormGroup({
        //     password: new FormControl('', [
        //       Validators.required,
        //       Validators.minLength(6),
        //       Validators.maxLength(15),
        //       Validators.pattern('[a-zA-Z0-9]+'),
        //     ]),
        //     passwordConfirm: new FormControl('', [
        //       Validators.required,
        //     ]),
        //   },
        //   this.validateService.matchPassword
        // );
    }
};
UserPasswordResetComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
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
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");


// import { UserService } from '../../../services/user.service';
// import { IUser } from '../../../interfaces/user-interface';
// import { config } from '../../../app.config';
// import { MatDialog, MatSnackBar } from '@angular/material';
// import { Router } from '@angular/router';
// import { UserDialogComponent } from '../user-dialog/user-dialog.component';
// import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
// import { of } from 'rxjs';
// import { mergeMap } from 'rxjs/operators';

let UserProfileComponent = class UserProfileComponent extends ng_user_man__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] {
    // config = config;
    // user: IUser;
    // processing: string;
    // changeAvatarForm: FormGroup;
    // editAvatar = false;
    // previewAvatarUrl;
    // processingChangeAvatar = false;
    // verificationSent = false;
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    ngOnInit() {
        super.ngOnInit();
        // this.getProfile();
        // this.changeAvatarForm = new FormGroup({
        //   file : new FormControl('', [
        //     Validators.required,
        //     Validators.minLength(4),
        //   ]),
        // });
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
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
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");
/* harmony import */ var _shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
/* harmony import */ var _redirection_after_oauth_redirection_after_oauth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./redirection-after-oauth/redirection-after-oauth.component */ "./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.ts");












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
                canActivate: [ng_user_man__WEBPACK_IMPORTED_MODULE_8__["NoAuthGuard"]],
                data: { auth: ['guest', 'user', 'manager', 'admin', 'google', 'facebook'] },
            },
            {
                path: 'profile',
                component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_6__["UserProfileComponent"],
                canActivate: [ng_user_man__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]],
                data: { auth: 'guest' },
            },
            {
                path: 'password-reset',
                component: _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_7__["UserPasswordResetComponent"],
            },
            {
                path: 'redirection-after-oauth',
                component: _redirection_after_oauth_redirection_after_oauth_component__WEBPACK_IMPORTED_MODULE_10__["RedirectionAfterOauthComponent"],
            },
            { path: '', component: _shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_9__["Page404Component"] },
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
/* harmony import */ var _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-password-reset/user-password-reset.component */ "./src/app/components/user/user-password-reset/user-password-reset.component.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _redirection_after_oauth_redirection_after_oauth_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./redirection-after-oauth/redirection-after-oauth.component */ "./src/app/components/user/redirection-after-oauth/redirection-after-oauth.component.ts");
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");










// import { UserDialogComponent } from './user-dialog/user-dialog.component';





let UserModule = class UserModule {
};
UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"],
            _user_create_user_create_component__WEBPACK_IMPORTED_MODULE_5__["UserCreateComponent"],
            _user_login_user_login_component__WEBPACK_IMPORTED_MODULE_6__["UserLoginComponent"],
            _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_9__["UserProfileComponent"],
            // UserDialogComponent,
            _user_password_reset_user_password_reset_component__WEBPACK_IMPORTED_MODULE_10__["UserPasswordResetComponent"],
            _redirection_after_oauth_redirection_after_oauth_component__WEBPACK_IMPORTED_MODULE_13__["RedirectionAfterOauthComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _user_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__["RecaptchaModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__["RecaptchaFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
            ng_user_man__WEBPACK_IMPORTED_MODULE_14__["NgUserManModule"]
        ],
        exports: [],
    })
], UserModule);



/***/ })

}]);
//# sourceMappingURL=default~components-dashboard-dashboard-module~components-user-user-module.js.map