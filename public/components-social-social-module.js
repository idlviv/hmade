(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-social-social-module"],{

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
            //    {
            //     path: '',
            //     component: DashboardSidenavComponent,
            //     outlet: 'dashboardSidenav',
            //     canActivate: [AuthGuard],
            //     data: { auth: 'manager' },
            //   },
            {
                path: '',
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
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(socialRoutes)
            ],
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

module.exports = "<p>\n  comments works!\n</p>\n"

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
/* harmony import */ var _unreaded_comments_unreaded_comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unreaded-comments/unreaded-comments.component */ "./src/app/components/social/unreaded-comments/unreaded-comments.component.ts");
/* harmony import */ var _social_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./social-routing.module */ "./src/app/components/social/social-routing.module.ts");
/* harmony import */ var _social_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./social.component */ "./src/app/components/social/social.component.ts");
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
                _social_routing_module__WEBPACK_IMPORTED_MODULE_3__["SocialRoutingModule"],
            ],
            declarations: [
                _unreaded_comments_unreaded_comments_component__WEBPACK_IMPORTED_MODULE_2__["UnreadedCommentsComponent"],
                _social_component__WEBPACK_IMPORTED_MODULE_4__["SocialComponent"]
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

module.exports = "<p>\n  unreaded-comments works!\n</p>\n"

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
    function UnreadedCommentsComponent() {
    }
    UnreadedCommentsComponent.prototype.ngOnInit = function () {
    };
    UnreadedCommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unreaded-comments',
            template: __webpack_require__(/*! ./unreaded-comments.component.html */ "./src/app/components/social/unreaded-comments/unreaded-comments.component.html"),
            styles: [__webpack_require__(/*! ./unreaded-comments.component.scss */ "./src/app/components/social/unreaded-comments/unreaded-comments.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UnreadedCommentsComponent);
    return UnreadedCommentsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-social-social-module.js.map