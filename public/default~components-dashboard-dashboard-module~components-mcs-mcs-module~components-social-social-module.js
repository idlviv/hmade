(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~components-dashboard-dashboard-module~components-mcs-mcs-module~components-social-social-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/comment/comment.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/comment/comment.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-card class=\"comments\"> -->\r\n  <div class=\"row comment animationAppear1s\" [ngClass]=\"{'muted-strong': !comment.display}\"\r\n    fxLayout=\"row\">\r\n    <div class=\"cell\" fxFlex=\"64px\" fxLayoutAlign=\"center center\">\r\n      <img *ngIf=\"comment.user && comment.user.avatar\" class=\"responsive-image\" src=\"{{comment.user.role === 'google' ? \r\n            comment.user.avatar :\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_50,h_50,f_auto/' +\r\n            comment.user.avatar}}\" alt=\"avatar\">\r\n      <img *ngIf=\"!comment.user\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_50,h_50,f_auto/' +\r\n            config.defaultAvatar}}\" alt=\"avatar\">\r\n    </div>\r\n    <div class=\"cell\" fxFlex=\"calc(90%-128px)\">\r\n      <p>\r\n        <span class=\"mat-body-2 bold\">\r\n          {{comment.user && comment.user.login ? comment.user.name + ' ' + comment.user.surname : 'Гість'}}\r\n        </span>\r\n        <span fxFlex></span>\r\n        <span class=\"mat-body-1\">{{comment.commentedAt | date: 'dd.MM.yyyy HH:mm'}}</span>\r\n      </p>\r\n      <p class=\"mat-body-1 text-align-justify\">{{comment.comment}}</p>\r\n    </div>\r\n    <div class=\"cell wrap\" fxFlex=\"64px\" fxLayoutAlign=\"center center\">\r\n      <p *ngIf=\"allowTo('manager')\" class=\"no-margin\">\r\n        <button class=\"mat-icon-button\" (click)=\"deleteComment(comment)\"\r\n          aria-label=\"Delete comment\">\r\n          <mat-icon class=\"mat-18\">delete_outline</mat-icon>\r\n        </button></p>\r\n      <p *ngIf=\"allowTo('manager') && !comment.display\" class=\"no-margin\">\r\n        <button class=\"mat-icon-button\" (click)=\"displayComment(true, comment._id)\" aria-label=\"Display comment\">\r\n          <mat-icon class=\"mat-18\">play_circle_outline</mat-icon>\r\n        </button>\r\n      </p>\r\n      <p *ngIf=\"allowTo('manager') && comment.display\" class=\"no-margin\">\r\n        <button class=\"mat-icon-button\" (click)=\"displayComment(false, comment._id)\" aria-label=\"Hide comment\">\r\n          <mat-icon class=\"mat-18\">pause_circle_outline</mat-icon>\r\n        </button>\r\n      </p>\r\n\r\n    </div>\r\n  </div>\r\n<!-- </mat-card> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/comments-list/comments-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/comments-list/comments-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"app-container-h\">\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div *ngIf=\"comments\" class=\"cell\">\r\n        <p></p>\r\n        <p class=\"mat-body-1\">Показано<span class=\"mat-body-2\"> {{comments.length}}\r\n          </span>коментарів з<span class=\"mat-body-2\"> {{commentsTotalLength || 0}}</span></p>\r\n      </div>\r\n    </div>\r\n    <mat-card class=\"comments\">\r\n      <app-comment class=\"comment-wrapper\" [comment]=\"comment\" (deleteCommentEmitter)=\"deleteComment($event)\"\r\n        (displayCommentEmitter)=\"displayComment($event)\" *ngFor=\"let comment of comments\"></app-comment>\r\n\r\n      <div *ngIf=\"processing\" class=\"row animationAppear1s\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div class=\"cell\" fxFlex=\"100\">\r\n          <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/comments/comments.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/comments/comments.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"app-container-h\">\r\n        <mat-card>\r\n            <form [formGroup]=\"commentForm\" #f=\"ngForm\" novalidate>\r\n                <div class=\"row\" fxLayout=\"row\">\r\n                  <div class=\"cell\" fxFlex=\"10\" fxLayoutAlign=\"center center\">\r\n\r\n                    <img *ngIf=\"allowTo('guest')\" class=\"responsive-image\"\r\n                      src=\"{{user.role === 'google' ? \r\n                        user.avatar :\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_50,h_50,f_auto/' +\r\n                        user.avatar}}\" alt=\"avatar\">\r\n                    <img *ngIf=\"!user\" class=\"responsive-image\"\r\n                      src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_50,h_50,f_auto/' +\r\n                        config.defaultAvatar}}\" alt=\"avatar\">\r\n\r\n                  </div>\r\n                    <mat-form-field class=\"cell\" fxFlex=\"80\">\r\n                      <textarea matInput\r\n                        [placeholder]=\"allowTo('user') ?\r\n                          'Коментар' :\r\n                          allowTo('guest') ?\r\n                            'Для відправки коментарів верифікуйте пошту' :\r\n                            'Коментарі можуть залишати лише зареєстровані користувачі'\"\r\n                        formControlName=\"comment\" required>\r\n                      </textarea>\r\n                      <mat-error\r\n                        *ngIf=\"(commentForm.get('comment').errors?.minlength ||\r\n                        commentForm.get('comment').errors?.maxlength ||\r\n                        commentForm.get('comment').errors?.required) &&\r\n                        commentForm.get('comment').touched\">\r\n                        Довжина повинна бути від 3 до 200 символів\r\n                      </mat-error>\r\n                      <mat-error\r\n                        *ngIf=\"commentForm.get('comment').errors?.pattern &&\r\n                        commentForm.get('comment').touched\">\r\n                        Не використовуйте спеціальні символи\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  <div class=\"cell\" fxFlex=\"10\">\r\n                    <button mat-icon-button (click)=\"sendComment()\" aria-label=\"Send\"\r\n                     [disabled]=\"!commentForm.valid || !allowTo('user')\">\r\n                      <mat-icon>send</mat-icon>\r\n                    </button>\r\n           \r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"end\">\r\n                  <re-captcha [ngClass]=\"{'display-none': !commentForm.get('comment').valid}\"\r\n                    [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                    siteKey=\"{{config.recaptchaSiteKey}}\">\r\n                  </re-captcha> \r\n                </div>\r\n              </form>\r\n        </mat-card>\r\n    <!-- </div> -->\r\n\r\n    \r\n    <!-- <div class=\"row\" fxLayout=\"row\">\r\n      <div *ngIf=\"comments\" class=\"cell\">\r\n        <p class=\"mat-body-1\">Показано<span class=\"mat-body-2\"> {{comments.length}} \r\n        </span>коментарів з<span class=\"mat-body-2\"> {{commentsTotalLength || 0}}</span></p>\r\n      </div>\r\n    </div>\r\n    <mat-card class=\"comments\">\r\n      <app-comment class=\"comment\" [comment]=\"comment\" \r\n      (deleteCommentEmitter)=\"deleteComment($event)\" (displayCommentEmitter)=\"displayComment($event)\"\r\n      *ngFor=\"let comment of comments\"></app-comment>\r\n    </mat-card> -->\r\n\r\n    <!-- <mat-card class=\"comments\">\r\n          <div class=\"row comment\" [ngClass]=\"{'muted-strong': !comment.display}\"\r\n     *ngFor=\"let comment of comments\" fxLayout=\"row\">\r\n      <div  class=\"cell\" fxFlex=\"10\" fxLayoutAlign=\"center center\">\r\n                <img *ngIf=\"comment.user && comment.user.avatar\" class=\"responsive-image\"\r\n                  src=\"{{comment.user.role === 'google' ? \r\n                    comment.user.avatar :\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_50,h_50,f_auto/' +\r\n                    comment.user.avatar}}\" alt=\"avatar\">\r\n                <img *ngIf=\"!comment.user\" class=\"responsive-image\"\r\n                  src=\"{{\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_50,h_50,f_auto/' +\r\n                    config.defaultAvatar}}\" alt=\"avatar\">\r\n      </div>\r\n      <div class=\"cell\" fxFlex=\"80\">\r\n        <p>\r\n          <span class=\"mat-body-2 bold\">\r\n            {{comment.user && comment.user.login ? comment.user.name + ' ' + comment.user.surname : 'Гість'}}\r\n          </span>\r\n          <span fxFlex></span>\r\n          <span class=\"mat-body-1\">{{comment.commentedAt | date: 'dd.MM.yyyy HH:mm'}}</span>\r\n        </p>\r\n        <p class=\"text-align-justify\">{{comment.comment}}</p>\r\n      </div>\r\n      <div class=\"cell\" fxFlex=\"10\">\r\n        <p *ngIf=\"allowTo('manager')\"><button class=\"mat-icon-button\" (click)=\"deleteComment(comment)\" aria-label=\"Delete comment\">\r\n          <mat-icon class=\"mat-18\">delete_outline</mat-icon></button></p>\r\n        <p *ngIf=\"allowTo('manager') && !comment.display\">\r\n          <button class=\"mat-icon-button\" (click)=\"displayComment(true, comment._id)\" aria-label=\"Display comment\">\r\n            <mat-icon class=\"mat-18\">play_circle_outline</mat-icon></button>\r\n        </p>\r\n        <p *ngIf=\"allowTo('manager') && comment.display\">\r\n          <button class=\"mat-icon-button\" (click)=\"displayComment(false, comment._id)\" aria-label=\"Hide comment\">\r\n            <mat-icon class=\"mat-18\">pause_circle_outline</mat-icon></button>\r\n        </p>\r\n\r\n      </div>\r\n    </div>\r\n  </mat-card> -->\r\n\r\n    <!-- <div *ngIf=\"processing\" class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/social.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/social.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"mcs\">\r\n  <div class=\"container\">\r\n    <div class=\"app-container-h app-container-v\">\r\n      <div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/unreaded-comments/unreaded-comments.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/unreaded-comments/unreaded-comments.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\" fxLayout=\"row\">\r\n    <h2 *ngIf=\"processedUnreadedCommentsParents?.length\" class=\"mat-h2\" fxflex>Нові коментарі</h2>\r\n    <h2 *ngIf=\"!processedUnreadedCommentsParents?.length && pageLoaded\" class=\"mat-h2 animationAppear2s\" fxflex>Нових коментарів немає</h2>\r\n    <div fxFlex></div>\r\n    <div>\r\n      <a *ngIf=\"processedUnreadedCommentsParents?.length\" color=\"accent\"\r\n        mat-flat-button (click)=\"markCommentsAsReaded()\" fxflex>Позначити всі прочитаними</a>\r\n    </div> \r\n  </div>\r\n</div>\r\n<div *ngIf=\"processedUnreadedCommentsParents?.length\" class=\"row\" fxLayout=\"row\">\r\n  <div *ngFor=\"let processedUnreadedCommentsParent of processedUnreadedCommentsParents; let i= index;\" class=\"cell\" fxFlex=\"100\">\r\n    <h3 class=\"mat-h3 no-margin\"><a aria-label=\"Open\" [routerLink]=\"['/mcs','show', processedUnreadedCommentsParent._id]\"\r\n      [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n      Майстер-клас {{processedUnreadedCommentsParent.name[0]}}</a></h3>\r\n    <app-comments-list [parent_id]=\"processedUnreadedCommentsParent._id\" [parentCategory]=\"'mc'\" [commentsReadedTillFilter]=\"true\"\r\n    (processedUnreadedComments)=\"onProcessedUnreadedComments($event)\"></app-comments-list>\r\n  </div>\r\n</div>\r\n     ");

/***/ }),

/***/ "./src/app/components/social/comment/comment.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/social/comment/comment.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/social/comment/comment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/social/comment/comment.component.ts ***!
  \****************************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");




let CommentComponent = class CommentComponent {
    constructor(userService) {
        this.userService = userService;
        this.deleteCommentEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayCommentEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"];
    }
    ngOnInit() {
    }
    deleteComment(comment) {
        this.deleteCommentEmitter.emit(comment);
    }
    displayComment(display, comment_id) {
        this.displayCommentEmitter.emit({ display, comment_id });
    }
    allowTo(permitedRole) {
        // this.user = this.userService.userCookieExtractor();
        return this.userService.allowTo(permitedRole);
    }
    restrictTo(restrictedRoles) {
        // this.user = this.userService.userCookieExtractor();
        return this.userService.restrictTo(restrictedRoles);
    }
};
CommentComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentComponent.prototype, "comment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CommentComponent.prototype, "deleteCommentEmitter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CommentComponent.prototype, "displayCommentEmitter", void 0);
CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/comment/comment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comment.component.scss */ "./src/app/components/social/comment/comment.component.scss")).default]
    })
], CommentComponent);



/***/ }),

/***/ "./src/app/components/social/comments-list/comments-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/social/comments-list/comments-list.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsL2NvbW1lbnRzLWxpc3QvY29tbWVudHMtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/social/comments-list/comments-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/social/comments-list/comments-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: CommentsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsListComponent", function() { return CommentsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_services_social_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/social.service */ "./src/app/services/social.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");









let CommentsListComponent = class CommentsListComponent {
    constructor(userService, socialService, dialog, sharedService) {
        this.userService = userService;
        this.socialService = socialService;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.comments = [];
        this.processedUnreadedComments = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.processing = false;
    }
    ngOnInit() {
        this.sharedService.getEventToReloadComments()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(result => {
            if (result) {
                console.log('reload-list', result);
                const { sort, skip, limit, displayFilter } = result;
                // this.loadComments(sort, skip, limit, displayFilter);
                return this.socialService.getComments(this.parent_id, this.parentCategory, sort, skip, limit, displayFilter, this.commentsReadedTillFilter);
            }
            else {
                // not needed to reload, do nothing
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ comments: [], commentsTotalLength: 0 });
            }
        }))
            .subscribe(result => {
            if (result.comments.length) {
                this.comments = result.comments;
                this.commentsTotalLength = result.commentsTotalLength;
            }
        }, err => console.log('add comment err', err));
        this.loadComments(-1, 0, 5, !this.allowTo('manager'));
    }
    // Listening of page bottom reached
    onScroll(event) {
        if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 2) {
            if (!this.processing &&
                this.commentsTotalLength !== this.comments.length &&
                this.commentsTotalLength) {
                this.loadComments(-1, this.comments.length, 5, !this.allowTo('manager'));
            }
        }
    }
    loadComments(sort, skip, limit, displayFilter) {
        this.processing = true;
        this.socialService.getComments(this.parent_id, this.parentCategory, sort, skip, limit, displayFilter, this.commentsReadedTillFilter)
            .subscribe(result => {
            this.comments.push(...result.comments);
            this.commentsTotalLength = result.commentsTotalLength;
            this.processing = false;
            this.checkAllCommentsLoaded();
        });
    }
    checkAllCommentsLoaded() {
        if (this.commentsTotalLength === this.comments.length) {
            this.processedUnreadedComments.emit(this.parent_id);
        }
    }
    deleteComment(event) {
        const comment = event;
        const confirmObject = {
            message: `Дійсно видалити коментар: ${comment.comment} ?`,
            payload: { _id: comment._id }
        };
        const dialogRef = this.dialog.open(_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmPopupComponent"], {
            data: confirmObject,
        });
        dialogRef.afterClosed()
            .subscribe(res => {
            if (res && res.choise) {
                this.socialService.deleteComment(this.parent_id, this.parentCategory, res.payload._id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(result => {
                    if (result) {
                        // successfuly delete
                        this.sharedService.sharingEventToReloadComments();
                        // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
                        return this.socialService.getComments(this.parent_id, this.parentCategory, -1, 0, this.comments.length, !this.allowTo('manager'), this.commentsReadedTillFilter);
                    }
                    else {
                        // not delete, do nothing
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
                    }
                }))
                    .subscribe(result => {
                    if (result) {
                        this.comments = result.comments;
                        this.commentsTotalLength = result.commentsTotalLength;
                        this.checkAllCommentsLoaded();
                    }
                }, err => console.log('add comment err', err));
            }
        }, err => console.log('err delete', err));
    }
    displayComment(event) {
        const display = event.display;
        const comment_id = event.comment_id;
        this.socialService.displayComment(this.parent_id, this.parentCategory, display, comment_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(result => {
            if (result) {
                // successfuly updated
                this.sharedService.sharingEventToReloadComments();
                // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
                return this.socialService.getComments(this.parent_id, this.parentCategory, -1, 0, this.comments.length, !this.allowTo('manager'), this.commentsReadedTillFilter);
            }
            else {
                // not added, do nothing
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ comments: [], commentsTotalLength: 0 });
            }
        }))
            .subscribe(result => {
            if (result.comments.length) {
                this.comments = result.comments;
                this.commentsTotalLength = result.commentsTotalLength;
                this.checkAllCommentsLoaded();
            }
        }, err => console.log('add comment err', err));
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
CommentsListComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
    { type: src_app_services_social_service__WEBPACK_IMPORTED_MODULE_3__["SocialService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: ng_user_man__WEBPACK_IMPORTED_MODULE_7__["SharedService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentsListComponent.prototype, "parent_id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentsListComponent.prototype, "parentCategory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentsListComponent.prototype, "commentsReadedTillFilter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CommentsListComponent.prototype, "processedUnreadedComments", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], CommentsListComponent.prototype, "onScroll", null);
CommentsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/comments-list/comments-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments-list.component.scss */ "./src/app/components/social/comments-list/comments-list.component.scss")).default]
    })
], CommentsListComponent);



/***/ }),

/***/ "./src/app/components/social/comments/comments.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/social/comments/comments.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsL2NvbW1lbnRzL2NvbW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/social/comments/comments.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/social/comments/comments.component.ts ***!
  \******************************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_social_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/social.service */ "./src/app/services/social.service.ts");
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");






// import { MatDialog } from '@angular/material';
// import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';

let CommentsComponent = class CommentsComponent {
    constructor(userService, socialService, 
    // public dialog: MatDialog,
    sharedService) {
        this.userService = userService;
        this.socialService = socialService;
        this.sharedService = sharedService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"];
        this.comments = [];
    }
    ngOnInit() {
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({
                value: '',
                disabled: !this.allowTo('user')
            }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(150),
            ]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ])
        });
    }
    sendComment() {
        const comment = this.commentForm.get('comment').value;
        const recaptcha = this.commentForm.get('recaptcha').value;
        this.socialService.addComment(this.parent_id, this.parentCategory, comment, recaptcha)
            .subscribe(result => {
            this.mcFormDirective.resetForm();
            this.sharedService.sharingEventToReloadComments({
                sort: -1,
                skip: 0,
                limit: 5,
                displayFilter: !this.allowTo('manager'),
            });
        }, err => console.log('add comment err', err));
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
CommentsComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_services_social_service__WEBPACK_IMPORTED_MODULE_5__["SocialService"] },
    { type: ng_user_man__WEBPACK_IMPORTED_MODULE_6__["SharedService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentsComponent.prototype, "parent_id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CommentsComponent.prototype, "parentCategory", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', { static: false })
], CommentsComponent.prototype, "mcFormDirective", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('recaptchaRef', { static: false })
], CommentsComponent.prototype, "recaptchaRef", void 0);
CommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/comments/comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./comments.component.scss */ "./src/app/components/social/comments/comments.component.scss")).default]
    })
], CommentsComponent);



/***/ }),

/***/ "./src/app/components/social/social-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/social/social-routing.module.ts ***!
  \************************************************************/
/*! exports provided: SocialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialRoutingModule", function() { return SocialRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social.component */ "./src/app/components/social/social.component.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _unreaded_comments_unreaded_comments_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./unreaded-comments/unreaded-comments.component */ "./src/app/components/social/unreaded-comments/unreaded-comments.component.ts");






const socialRoutes = [
    {
        path: '',
        component: _social_component__WEBPACK_IMPORTED_MODULE_3__["SocialComponent"],
        children: [
            {
                path: 'unreaded-comments',
                component: _unreaded_comments_unreaded_comments_component__WEBPACK_IMPORTED_MODULE_5__["UnreadedCommentsComponent"],
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                data: { auth: 'user' },
            },
        ]
    }
];
let SocialRoutingModule = class SocialRoutingModule {
};
SocialRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(socialRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], SocialRoutingModule);



/***/ }),

/***/ "./src/app/components/social/social.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/social/social.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsL3NvY2lhbC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/social/social.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/social/social.component.ts ***!
  \*******************************************************/
/*! exports provided: SocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SocialComponent = class SocialComponent {
    constructor() { }
    ngOnInit() {
    }
};
SocialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./social.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/social.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./social.component.scss */ "./src/app/components/social/social.component.scss")).default]
    })
], SocialComponent);



/***/ }),

/***/ "./src/app/components/social/social.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/social/social.module.ts ***!
  \****************************************************/
/*! exports provided: SocialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/fesm2015/ng-recaptcha.js");
/* harmony import */ var _unreaded_comments_unreaded_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unreaded-comments/unreaded-comments.component */ "./src/app/components/social/unreaded-comments/unreaded-comments.component.ts");
/* harmony import */ var _social_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./social-routing.module */ "./src/app/components/social/social-routing.module.ts");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./social.component */ "./src/app/components/social/social.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/components/social/comments/comments.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/components/social/comment/comment.component.ts");
/* harmony import */ var _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comments-list/comments-list.component */ "./src/app/components/social/comments-list/comments-list.component.ts");














let SocialModule = class SocialModule {
};
SocialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _social_routing_module__WEBPACK_IMPORTED_MODULE_7__["SocialRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaModule"]
        ],
        declarations: [
            _unreaded_comments_unreaded_comments_component__WEBPACK_IMPORTED_MODULE_6__["UnreadedCommentsComponent"],
            _social_component__WEBPACK_IMPORTED_MODULE_8__["SocialComponent"],
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__["CommentsComponent"],
            _comment_comment_component__WEBPACK_IMPORTED_MODULE_11__["CommentComponent"],
            _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_12__["CommentsListComponent"],
        ],
        exports: [
            _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__["CommentsComponent"],
            _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_12__["CommentsListComponent"],
        ]
    })
], SocialModule);



/***/ }),

/***/ "./src/app/components/social/unreaded-comments/unreaded-comments.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/social/unreaded-comments/unreaded-comments.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc29jaWFsL3VucmVhZGVkLWNvbW1lbnRzL3VucmVhZGVkLWNvbW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/social/unreaded-comments/unreaded-comments.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/social/unreaded-comments/unreaded-comments.component.ts ***!
  \************************************************************************************/
/*! exports provided: UnreadedCommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnreadedCommentsComponent", function() { return UnreadedCommentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_social_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/social.service */ "./src/app/services/social.service.ts");
/* harmony import */ var ng_user_man__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-user-man */ "./dist/ng-user-man/fesm2015/ng-user-man.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UnreadedCommentsComponent = class UnreadedCommentsComponent {
    constructor(userService, socialService, sharedService) {
        this.userService = userService;
        this.socialService = socialService;
        this.sharedService = sharedService;
        this.processedUnreadedCommentsParents = [];
        this.pageLoaded = false;
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        if (this.allowTo('user')) {
            this.socialService.getUnreadedCommentsCategories()
                .subscribe(result => {
                this.processedUnreadedCommentsParents = [];
                this.unreadedCommentsParents = [];
                if (result.length) {
                    this.unreadedCommentsParents = result;
                    this.processedUnreadedCommentsParents.push(result[0]);
                }
                this.pageLoaded = true;
            }, err => console.log('err', err));
            this.sharedService.getEventToReloadComments()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(() => this.socialService.getUnreadedCommentsCategories()))
                .subscribe(result => {
                this.processedUnreadedCommentsParents = [];
                this.unreadedCommentsParents = [];
                if (result.length) {
                    this.unreadedCommentsParents = result;
                    this.processedUnreadedCommentsParents.push(result[0]);
                }
                this.pageLoaded = true;
            }, err => console.log('err', err));
        }
    }
    markCommentsAsReaded() {
        this.userService.userEditUnsecure({ name: 'commentsReadedTill' })
            .subscribe(res => {
            this.sharedService.sharingEventToReloadComments();
        }, err => console.log('err', err));
    }
    onProcessedUnreadedComments(event) {
        if (this.processedUnreadedCommentsParents.map((value) => value._id).indexOf(event) > -1) {
            // event value (parent_id) is already in processed array
            for (let i = 0; i < this.unreadedCommentsParents.length; i++) {
                if (this.processedUnreadedCommentsParents.map((val) => val._id).indexOf(this.unreadedCommentsParents[i]._id) === -1) {
                    // mapping array of all unproceed _ids and add next unproceed _id to proceed array
                    console.log('in', this.processedUnreadedCommentsParents.map((value) => value._id).indexOf(this.unreadedCommentsParents[i]._id));
                    this.processedUnreadedCommentsParents.push(this.unreadedCommentsParents[i]);
                    break;
                }
            }
        }
        else {
            // this.processedUnreadedCommentsParents.push(event);
        }
    }
    allowTo(permitedRole) {
        this.user = this.userService.userCookieExtractor();
        return this.userService.allowTo(permitedRole);
    }
};
UnreadedCommentsComponent.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: src_app_services_social_service__WEBPACK_IMPORTED_MODULE_3__["SocialService"] },
    { type: ng_user_man__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
];
UnreadedCommentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-unreaded-comments',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./unreaded-comments.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/social/unreaded-comments/unreaded-comments.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./unreaded-comments.component.scss */ "./src/app/components/social/unreaded-comments/unreaded-comments.component.scss")).default]
    })
], UnreadedCommentsComponent);



/***/ })

}]);
//# sourceMappingURL=default~components-dashboard-dashboard-module~components-mcs-mcs-module~components-social-social-module.js.map