(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dashboard-dashboard-module~components-mcs-mcs-module~components-social-social-module"],{

/***/ "./src/app/components/social/comment/comment.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/social/comment/comment.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-card class=\"comments\"> -->\n  <div class=\"row comment\" [ngClass]=\"{'muted-strong': !comment.display}\"\n    fxLayout=\"row\">\n    <div class=\"cell\" fxFlex=\"10\" fxLayoutAlign=\"center center\">\n      <img *ngIf=\"comment.user && comment.user.avatar\" class=\"responsive-image\" src=\"{{comment.user.role === 'google' ? \n            comment.user.avatar :\n            config.imgPath +\n            config.cloudinary.cloud_name +\n            '/c_fill,w_50,h_50,f_auto/' +\n            comment.user.avatar}}\" alt=\"avatar\">\n      <img *ngIf=\"!comment.user\" class=\"responsive-image\" src=\"{{\n            config.imgPath +\n            config.cloudinary.cloud_name +\n            '/c_fill,w_50,h_50,f_auto/' +\n            config.defaultAvatar}}\" alt=\"avatar\">\n    </div>\n    <div class=\"cell\" fxFlex=\"80\">\n      <p>\n        <span class=\"mat-body-2 bold\">\n          {{comment.user && comment.user.login ? comment.user.name + ' ' + comment.user.surname : 'Гість'}}\n        </span>\n        <span fxFlex></span>\n        <span class=\"mat-body-1\">{{comment.commentedAt | date: 'dd.MM.yyyy HH:mm'}}</span>\n      </p>\n      <p class=\"text-align-justify\">{{comment.comment}}</p>\n    </div>\n    <div class=\"cell\" fxFlex=\"10\">\n      <p *ngIf=\"allowTo('manager')\"><button class=\"mat-icon-button\" (click)=\"deleteComment(comment)\"\n          aria-label=\"Delete comment\">\n          <mat-icon class=\"mat-18\">delete_outline</mat-icon>\n        </button></p>\n      <p *ngIf=\"allowTo('manager') && !comment.display\">\n        <button class=\"mat-icon-button\" (click)=\"displayComment(true, comment._id)\" aria-label=\"Display comment\">\n          <mat-icon class=\"mat-18\">play_circle_outline</mat-icon>\n        </button>\n      </p>\n      <p *ngIf=\"allowTo('manager') && comment.display\">\n        <button class=\"mat-icon-button\" (click)=\"displayComment(false, comment._id)\" aria-label=\"Hide comment\">\n          <mat-icon class=\"mat-18\">pause_circle_outline</mat-icon>\n        </button>\n      </p>\n\n    </div>\n  </div>\n<!-- </mat-card> -->"

/***/ }),

/***/ "./src/app/components/social/comment/comment.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/social/comment/comment.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentComponent = /** @class */ (function () {
    function CommentComponent(userService) {
        this.userService = userService;
        this.deleteCommentEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayCommentEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    CommentComponent.prototype.ngOnInit = function () {
    };
    CommentComponent.prototype.deleteComment = function (comment) {
        this.deleteCommentEmitter.emit(comment);
    };
    CommentComponent.prototype.displayComment = function (display, comment_id) {
        this.displayCommentEmitter.emit({ display: display, comment_id: comment_id });
    };
    CommentComponent.prototype.allowTo = function (permitedRole) {
        // this.user = this.userService.userCookieExtractor();
        return this.userService.allowTo(permitedRole);
    };
    CommentComponent.prototype.restrictTo = function (restrictedRoles) {
        // this.user = this.userService.userCookieExtractor();
        return this.userService.restrictTo(restrictedRoles);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "comment", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "deleteCommentEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "displayCommentEmitter", void 0);
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/components/social/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.scss */ "./src/app/components/social/comment/comment.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/components/social/comments-list/comments-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/social/comments-list/comments-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"app-container-h\">\n    <div class=\"row\" fxLayout=\"row\">\n      <div *ngIf=\"comments\" class=\"cell\">\n        <p class=\"mat-body-1\">Показано<span class=\"mat-body-2\"> {{comments.length}}\n          </span>коментарів з<span class=\"mat-body-2\"> {{commentsTotalLength || 0}}</span></p>\n      </div>\n    </div>\n    <mat-card class=\"comments\">\n      <app-comment class=\"comment-wrapper\" [comment]=\"comment\" (deleteCommentEmitter)=\"deleteComment($event)\"\n        (displayCommentEmitter)=\"displayComment($event)\" *ngFor=\"let comment of comments\"></app-comment>\n    </mat-card>\n    <div *ngIf=\"processing\" class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n      <div class=\"cell\" fxFlex=\"100\">\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/social/comments-list/comments-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/social/comments-list/comments-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_social_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/social.service */ "./src/app/services/social.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CommentsListComponent = /** @class */ (function () {
    function CommentsListComponent(userService, socialService, dialog, sharedService) {
        this.userService = userService;
        this.socialService = socialService;
        this.dialog = dialog;
        this.sharedService = sharedService;
        this.comments = [];
        this.unreadedCommentsOfCategorieDownloaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.processing = false;
    }
    CommentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getEventToReloadComments()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (result) {
            if (result) {
                var sort = result.sort, skip = result.skip, limit = result.limit, displayFilter = result.displayFilter;
                // this.loadComments(sort, skip, limit, displayFilter);
                return _this.socialService.getComments(_this.parent_id, _this.parentCategory, sort, skip, limit, displayFilter, _this.commentsReadedTillFilter);
            }
            else {
                // not needed to reload, do nothing
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ comments: [], commentsTotalLength: 0 });
            }
        }))
            .subscribe(function (result) {
            if (result.comments.length) {
                _this.comments = result.comments;
                _this.commentsTotalLength = result.commentsTotalLength;
            }
        }, function (err) { return console.log('add comment err', err); });
        this.loadComments(-1, 0, 5, !this.allowTo('manager'));
    };
    // Listening of page bottom reached
    CommentsListComponent.prototype.onScroll = function (event) {
        if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 2) {
            if (!this.processing &&
                this.commentsTotalLength !== this.comments.length &&
                this.commentsTotalLength) {
                this.loadComments(-1, this.comments.length, 5, !this.allowTo('manager'));
            }
        }
    };
    CommentsListComponent.prototype.loadComments = function (sort, skip, limit, displayFilter) {
        var _this = this;
        console.log('this.commentsReadedTillFilter', this.commentsReadedTillFilter);
        this.processing = true;
        this.socialService.getComments(this.parent_id, this.parentCategory, sort, skip, limit, displayFilter, this.commentsReadedTillFilter)
            .subscribe(function (result) {
            var _a;
            (_a = _this.comments).push.apply(_a, result.comments);
            _this.commentsTotalLength = result.commentsTotalLength;
            _this.processing = false;
            _this.checkAllCommentsLoaded();
        });
    };
    CommentsListComponent.prototype.checkAllCommentsLoaded = function () {
        if (this.commentsTotalLength === this.comments.length) {
            this.unreadedCommentsOfCategorieDownloaded.emit(this.parent_id);
            console.log('emit');
        }
    };
    CommentsListComponent.prototype.deleteComment = function (event) {
        var _this = this;
        var comment = event.comment;
        var confirmObject = {
            message: "\u0414\u0456\u0439\u0441\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440: " + comment.comment + " ?",
            payload: { _id: comment._id }
        };
        var dialogRef = this.dialog.open(_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmPopupComponent"], {
            data: confirmObject,
        });
        dialogRef.afterClosed()
            .subscribe(function (res) {
            if (res && res.choise) {
                _this.socialService.deleteComment(_this.parent_id, _this.parentCategory, res.payload._id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (result) {
                    if (result) {
                        // successfuly delete
                        _this.sharedService.sharingEventToReloadComments();
                        // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
                        return _this.socialService.getComments(_this.parent_id, _this.parentCategory, -1, 0, _this.comments.length, !_this.allowTo('manager'), _this.commentsReadedTillFilter);
                    }
                    else {
                        // not delete, do nothing
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(null);
                    }
                }))
                    .subscribe(function (result) {
                    if (result) {
                        _this.comments = result.comments;
                        _this.commentsTotalLength = result.commentsTotalLength;
                        _this.checkAllCommentsLoaded();
                    }
                }, function (err) { return console.log('add comment err', err); });
            }
        }, function (err) { return console.log('err delete', err); });
    };
    CommentsListComponent.prototype.displayComment = function (event) {
        var _this = this;
        var display = event.display;
        var comment_id = event.comment_id;
        this.socialService.displayComment(this.parent_id, this.parentCategory, display, comment_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(function (result) {
            if (result) {
                // successfuly updated
                _this.sharedService.sharingEventToReloadComments();
                // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
                return _this.socialService.getComments(_this.parent_id, _this.parentCategory, -1, 0, _this.comments.length, !_this.allowTo('manager'), _this.commentsReadedTillFilter);
            }
            else {
                // not added, do nothing
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ comments: [], commentsTotalLength: 0 });
            }
        }))
            .subscribe(function (result) {
            if (result.comments.length) {
                _this.comments = result.comments;
                _this.commentsTotalLength = result.commentsTotalLength;
                _this.checkAllCommentsLoaded();
            }
        }, function (err) { return console.log('add comment err', err); });
    };
    CommentsListComponent.prototype.allowTo = function (permitedRole) {
        this.user = this.userService.userCookieExtractor();
        return this.userService.allowTo(permitedRole);
    };
    CommentsListComponent.prototype.restrictTo = function (restrictedRoles) {
        this.user = this.userService.userCookieExtractor();
        return this.userService.restrictTo(restrictedRoles);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentsListComponent.prototype, "parent_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentsListComponent.prototype, "parentCategory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], CommentsListComponent.prototype, "commentsReadedTillFilter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CommentsListComponent.prototype, "unreadedCommentsOfCategorieDownloaded", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CommentsListComponent.prototype, "onScroll", null);
    CommentsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments-list',
            template: __webpack_require__(/*! ./comments-list.component.html */ "./src/app/components/social/comments-list/comments-list.component.html"),
            styles: [__webpack_require__(/*! ./comments-list.component.scss */ "./src/app/components/social/comments-list/comments-list.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            src_app_services_social_service__WEBPACK_IMPORTED_MODULE_2__["SocialService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]])
    ], CommentsListComponent);
    return CommentsListComponent;
}());



/***/ }),

/***/ "./src/app/components/social/comments/comments.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/social/comments/comments.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"app-container-h\">\r\n        <mat-card>\r\n            <form [formGroup]=\"commentForm\" #f=\"ngForm\" novalidate>\r\n                <div class=\"row\" fxLayout=\"row\">\r\n                  <div class=\"cell\" fxFlex=\"10\" fxLayoutAlign=\"center center\">\r\n\r\n                    <img *ngIf=\"allowTo('guest')\" class=\"responsive-image\"\r\n                      src=\"{{user.role === 'google' ? \r\n                        user.avatar :\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_50,h_50,f_auto/' +\r\n                        user.avatar}}\" alt=\"avatar\">\r\n                    <img *ngIf=\"!user\" class=\"responsive-image\"\r\n                      src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_50,h_50,f_auto/' +\r\n                        config.defaultAvatar}}\" alt=\"avatar\">\r\n\r\n                  </div>\r\n                    <mat-form-field class=\"cell\" fxFlex=\"80\">\r\n                      <textarea matInput\r\n                        [placeholder]=\"allowTo('user') ?\r\n                          'Коментар' :\r\n                          allowTo('guest') ?\r\n                            'Для відправки коментарів верифікуйте пошту' :\r\n                            'Коментарі можуть залишати лише зареєстровані користувачі'\"\r\n                        formControlName=\"comment\" required>\r\n                      </textarea>\r\n                      <mat-error\r\n                        *ngIf=\"(commentForm.get('comment').errors?.minlength ||\r\n                        commentForm.get('comment').errors?.maxlength ||\r\n                        commentForm.get('comment').errors?.required) &&\r\n                        commentForm.get('comment').touched\">\r\n                        Довжина повинна бути від 3 до 200 символів\r\n                      </mat-error>\r\n                      <mat-error\r\n                        *ngIf=\"commentForm.get('comment').errors?.pattern &&\r\n                        commentForm.get('comment').touched\">\r\n                        Не використовуйте спеціальні символи\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  <div class=\"cell\" fxFlex=\"10\">\r\n                    <button mat-icon-button (click)=\"sendComment()\" aria-label=\"Send\"\r\n                     [disabled]=\"!commentForm.valid || !allowTo('user')\">\r\n                      <mat-icon>send</mat-icon>\r\n                    </button>\r\n           \r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"end\">\r\n                  <re-captcha [ngClass]=\"{'display-none': !commentForm.get('comment').valid}\"\r\n                    [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                    siteKey=\"{{config.recaptchaSiteKey}}\">\r\n                  </re-captcha> \r\n                </div>\r\n              </form>\r\n        </mat-card>\r\n    <!-- </div> -->\r\n\r\n    \r\n    <!-- <div class=\"row\" fxLayout=\"row\">\r\n      <div *ngIf=\"comments\" class=\"cell\">\r\n        <p class=\"mat-body-1\">Показано<span class=\"mat-body-2\"> {{comments.length}} \r\n        </span>коментарів з<span class=\"mat-body-2\"> {{commentsTotalLength || 0}}</span></p>\r\n      </div>\r\n    </div>\r\n    <mat-card class=\"comments\">\r\n      <app-comment class=\"comment\" [comment]=\"comment\" \r\n      (deleteCommentEmitter)=\"deleteComment($event)\" (displayCommentEmitter)=\"displayComment($event)\"\r\n      *ngFor=\"let comment of comments\"></app-comment>\r\n    </mat-card> -->\r\n\r\n    <!-- <mat-card class=\"comments\">\r\n          <div class=\"row comment\" [ngClass]=\"{'muted-strong': !comment.display}\"\r\n     *ngFor=\"let comment of comments\" fxLayout=\"row\">\r\n      <div  class=\"cell\" fxFlex=\"10\" fxLayoutAlign=\"center center\">\r\n                <img *ngIf=\"comment.user && comment.user.avatar\" class=\"responsive-image\"\r\n                  src=\"{{comment.user.role === 'google' ? \r\n                    comment.user.avatar :\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_50,h_50,f_auto/' +\r\n                    comment.user.avatar}}\" alt=\"avatar\">\r\n                <img *ngIf=\"!comment.user\" class=\"responsive-image\"\r\n                  src=\"{{\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_50,h_50,f_auto/' +\r\n                    config.defaultAvatar}}\" alt=\"avatar\">\r\n      </div>\r\n      <div class=\"cell\" fxFlex=\"80\">\r\n        <p>\r\n          <span class=\"mat-body-2 bold\">\r\n            {{comment.user && comment.user.login ? comment.user.name + ' ' + comment.user.surname : 'Гість'}}\r\n          </span>\r\n          <span fxFlex></span>\r\n          <span class=\"mat-body-1\">{{comment.commentedAt | date: 'dd.MM.yyyy HH:mm'}}</span>\r\n        </p>\r\n        <p class=\"text-align-justify\">{{comment.comment}}</p>\r\n      </div>\r\n      <div class=\"cell\" fxFlex=\"10\">\r\n        <p *ngIf=\"allowTo('manager')\"><button class=\"mat-icon-button\" (click)=\"deleteComment(comment)\" aria-label=\"Delete comment\">\r\n          <mat-icon class=\"mat-18\">delete_outline</mat-icon></button></p>\r\n        <p *ngIf=\"allowTo('manager') && !comment.display\">\r\n          <button class=\"mat-icon-button\" (click)=\"displayComment(true, comment._id)\" aria-label=\"Display comment\">\r\n            <mat-icon class=\"mat-18\">play_circle_outline</mat-icon></button>\r\n        </p>\r\n        <p *ngIf=\"allowTo('manager') && comment.display\">\r\n          <button class=\"mat-icon-button\" (click)=\"displayComment(false, comment._id)\" aria-label=\"Hide comment\">\r\n            <mat-icon class=\"mat-18\">pause_circle_outline</mat-icon></button>\r\n        </p>\r\n\r\n      </div>\r\n    </div>\r\n  </mat-card> -->\r\n\r\n    <!-- <div *ngIf=\"processing\" class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n      </div>\r\n    </div> -->\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/social/comments/comments.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/social/comments/comments.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_social_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/social.service */ "./src/app/services/social.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { MatDialog } from '@angular/material';
// import { ConfirmPopupComponent } from '../../shared/confirm-popup/confirm-popup.component';

var CommentsComponent = /** @class */ (function () {
    // processing = false;
    function CommentsComponent(userService, socialService, 
    // public dialog: MatDialog,
    sharedService) {
        this.userService = userService;
        this.socialService = socialService;
        this.sharedService = sharedService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
        this.comments = [];
    }
    CommentsComponent.prototype.ngOnInit = function () {
        this.commentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            comment: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]({
                value: '',
                disabled: !this.allowTo('user')
            }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(150),
            ]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
        // this.loadComments(-1, 0, 5, !this.allowTo('manager'));
    };
    // // Listening of page bottom reached
    // @HostListener('window:scroll', ['$event'])
    // onScroll(event): void {
    //   if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 2) {
    //     if (
    //       !this.processing &&
    //       this.commentsTotalLength !== this.comments.length &&
    //       this.commentsTotalLength
    //       ) {
    //       this.loadComments(-1, this.comments.length, 5, !this.allowTo('manager'));
    //     }
    //   }
    // }
    // loadComments(sort: number, skip: number, limit: number, displayFilter: boolean) {
    //   this.processing = true;
    //   this.socialService.getComments(this.parent_id, this.parentCategory, sort, skip, limit, displayFilter)
    //     .subscribe(result => {
    //       this.comments.push(...result.comments);
    //       this.commentsTotalLength = result.commentsTotalLength;
    //       this.processing = false;
    //     });
    // }
    CommentsComponent.prototype.sendComment = function () {
        var _this = this;
        var comment = this.commentForm.get('comment').value;
        var recaptcha = this.commentForm.get('recaptcha').value;
        this.socialService.addComment(this.parent_id, this.parentCategory, comment, recaptcha)
            .subscribe(function (result) {
            _this.mcFormDirective.resetForm();
            _this.sharedService.sharingEventToReloadComments({
                sort: -1,
                skip: 0,
                limit: 5,
                displayFilter: !_this.allowTo('manager'),
            });
        }, function (err) { return console.log('add comment err', err); });
        // this.socialService.addComment(this.parent_id, this.parentCategory, comment, recaptcha)
        //   .pipe(
        //     mergeMap(result => {
        //       if (result) {
        //         // successfuly added
        //         this.mcFormDirective.resetForm();
        //         this.sharedService.sharingEventToReloadComments();
        //         return this.socialService.getComments(this.parent_id, this.parentCategory, -1, 0, 5, !this.allowTo('manager'));
        //       } else {
        //         // not added, do nothing
        //         return of({comments: [], commentsTotalLength: 0});
        //       }
        //     }
        //     )
        //   )
        //   .subscribe(result => {
        //     if (result.comments.length) {
        //       this.comments = result.comments;
        //       this.commentsTotalLength = result.commentsTotalLength;
        //     }
        //   },
        //     err => console.log('add comment err', err)
        //   );
    };
    // deleteComment(event): void {
    //   const comment = event.comment;
    //   const confirmObject = <IConfirmPopupData>{
    //     message: `Дійсно видалити коментар: ${comment.comment} ?`,
    //     payload: {_id: comment._id}
    //   };
    //   const dialogRef = this.dialog.open(ConfirmPopupComponent, {
    //     data: confirmObject,
    //     // panelClass: 'custom-dialog-container'
    //   });
    //   dialogRef.afterClosed()
    //     .subscribe(res => {
    //         if (res && res.choise) {
    //           this.socialService.deleteComment(this.parent_id, this.parentCategory, res.payload._id)
    //             .pipe(
    //               mergeMap(result => {
    //                 if (result) {
    //                   // successfuly delete
    //                   this.sharedService.sharingEventToReloadComments();
    //                   // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
    //                   return this.socialService.getComments(
    //                     this.parent_id, this.parentCategory, -1, 0, this.comments.length, !this.allowTo('manager')
    //                     );
    //                 } else {
    //                   // not delete, do nothing
    //                   return of(null);
    //                 }
    //               }
    //               )
    //             )
    //             .subscribe(result => {
    //               if (result) {
    //                 this.comments = result.comments;
    //                 this.commentsTotalLength = result.commentsTotalLength;
    //               }
    //             },
    //               err => console.log('add comment err', err)
    //             );
    //         }
    //       },
    //       err => console.log('err delete', err)
    //     );
    // }
    // displayComment(event) {
    //   const display = event.display;
    //   const comment_id = event.comment_id;
    //   this.socialService.displayComment(this.parent_id, this.parentCategory, display, comment_id)
    //     .pipe(
    //       mergeMap(result => {
    //         if (result) {
    //           // successfuly updated
    //           this.sharedService.sharingEventToReloadComments();
    //           // this.sharedService.sharingEvent(['userChangeStatusEmitter']);
    //           return this.socialService.getComments(
    //             this.parent_id, this.parentCategory, -1, 0, this.comments.length, !this.allowTo('manager')
    //             );
    //         } else {
    //           // not added, do nothing
    //           return of({comments: [], commentsTotalLength: 0});
    //         }
    //       }
    //       )
    //     )
    //     .subscribe(result => {
    //       if (result.comments.length) {
    //         this.comments = result.comments;
    //         this.commentsTotalLength = result.commentsTotalLength;
    //       }
    //     },
    //       err => console.log('add comment err', err)
    //     );
    // }
    CommentsComponent.prototype.allowTo = function (permitedRole) {
        this.user = this.userService.userCookieExtractor();
        return this.userService.allowTo(permitedRole);
    };
    CommentsComponent.prototype.restrictTo = function (restrictedRoles) {
        this.user = this.userService.userCookieExtractor();
        return this.userService.restrictTo(restrictedRoles);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentsComponent.prototype, "parent_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], CommentsComponent.prototype, "parentCategory", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"])
    ], CommentsComponent.prototype, "mcFormDirective", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('recaptchaRef'),
        __metadata("design:type", Object)
    ], CommentsComponent.prototype, "recaptchaRef", void 0);
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/components/social/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.scss */ "./src/app/components/social/comments/comments.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            src_app_services_social_service__WEBPACK_IMPORTED_MODULE_4__["SocialService"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./social.component */ "./src/app/components/social/social.component.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _unreaded_comments_unreaded_comments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unreaded-comments/unreaded-comments.component */ "./src/app/components/social/unreaded-comments/unreaded-comments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var socialRoutes = [
    {
        path: '',
        component: _social_component__WEBPACK_IMPORTED_MODULE_2__["SocialComponent"],
        children: [
            {
                path: 'unreaded-comments',
                component: _unreaded_comments_unreaded_comments_component__WEBPACK_IMPORTED_MODULE_4__["UnreadedCommentsComponent"],
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
                data: { auth: 'user' },
            },
        ]
    }
];
var SocialRoutingModule = /** @class */ (function () {
    function SocialRoutingModule() {
    }
    SocialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(socialRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], SocialRoutingModule);
    return SocialRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/social/social.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/social/social.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mcs\">\r\n  <div class=\"container\">\r\n    <div class=\"app-container-h app-container-v\">\r\n      <div class=\"container\">\r\n        <router-outlet></router-outlet>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/social/social.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/social/social.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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

var SocialComponent = /** @class */ (function () {
    function SocialComponent() {
    }
    SocialComponent.prototype.ngOnInit = function () {
    };
    SocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-social',
            template: __webpack_require__(/*! ./social.component.html */ "./src/app/components/social/social.component.html"),
            styles: [__webpack_require__(/*! ./social.component.scss */ "./src/app/components/social/social.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _unreaded_comments_unreaded_comments_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./unreaded-comments/unreaded-comments.component */ "./src/app/components/social/unreaded-comments/unreaded-comments.component.ts");
/* harmony import */ var _social_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./social-routing.module */ "./src/app/components/social/social-routing.module.ts");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./social.component */ "./src/app/components/social/social.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/components/social/comments/comments.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _comment_comment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./comment/comment.component */ "./src/app/components/social/comment/comment.component.ts");
/* harmony import */ var _comments_list_comments_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comments-list/comments-list.component */ "./src/app/components/social/comments-list/comments-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var SocialModule = /** @class */ (function () {
    function SocialModule() {
    }
    SocialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _social_routing_module__WEBPACK_IMPORTED_MODULE_7__["SocialRoutingModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_4__["RecaptchaFormsModule"],
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
    return SocialModule;
}());



/***/ }),

/***/ "./src/app/components/social/unreaded-comments/unreaded-comments.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/social/unreaded-comments/unreaded-comments.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" FxLayout=\"row\">\r\n  <div *ngFor=\"let downloadedUnreadedCommentsCategorie of downloadedUnreadedCommentsCategories; let i= index;\" class=\"cell\" fxFlex=\"100\">\r\n    <h2 class=\"mat-h2\">{{downloadedUnreadedCommentsCategorie.name[0]}}</h2>\r\n    <app-comments-list [parent_id]=\"downloadedUnreadedCommentsCategorie._id\" [parentCategory]=\"'mc'\" [commentsReadedTillFilter]=\"true\"\r\n    (unreadedCommentsOfCategorieDownloaded)=\"onUnreadedCommentsOfCategorieDownloaded($event)\"></app-comments-list>\r\n  </div>\r\n</div>\r\n     "

/***/ }),

/***/ "./src/app/components/social/unreaded-comments/unreaded-comments.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/social/unreaded-comments/unreaded-comments.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_social_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/social.service */ "./src/app/services/social.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnreadedCommentsComponent = /** @class */ (function () {
    function UnreadedCommentsComponent(userService, socialService) {
        this.userService = userService;
        this.socialService = socialService;
        this.downloadedUnreadedCommentsCategories = [];
    }
    UnreadedCommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.allowTo('user')) {
            this.socialService.getUnreadedCommentsCategories()
                .subscribe(function (result) {
                _this.unreadedCommentsCategories = result;
                _this.downloadedUnreadedCommentsCategories.push(result[0]);
            }, function (err) { return console.log('err', err); });
        }
    };
    UnreadedCommentsComponent.prototype.onUnreadedCommentsOfCategorieDownloaded = function (event) {
        var _this = this;
        this.unreadedCommentsCategories.map(function (el, index) {
            if (el._id === event) {
                _this.downloadedUnreadedCommentsCategories.push(_this.unreadedCommentsCategories[index + 1]);
            }
        });
        console.log('onUnreadedCommentsOfCategorieDownloaded-event', event);
    };
    UnreadedCommentsComponent.prototype.allowTo = function (permitedRole) {
        this.user = this.userService.userCookieExtractor();
        return this.userService.allowTo(permitedRole);
    };
    UnreadedCommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unreaded-comments',
            template: __webpack_require__(/*! ./unreaded-comments.component.html */ "./src/app/components/social/unreaded-comments/unreaded-comments.component.html"),
            styles: [__webpack_require__(/*! ./unreaded-comments.component.scss */ "./src/app/components/social/unreaded-comments/unreaded-comments.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            src_app_services_social_service__WEBPACK_IMPORTED_MODULE_2__["SocialService"]])
    ], UnreadedCommentsComponent);
    return UnreadedCommentsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-dashboard-dashboard-module~components-mcs-mcs-module~components-social-social-module.js.map