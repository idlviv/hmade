(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dashboard-dashboard-module"],{

/***/ "./src/app/components/dashboard/dashboard-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-sidenav/dashboard-sidenav.component */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts");
/* harmony import */ var _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user-profile/user-profile.component */ "./src/app/components/user/user-profile/user-profile.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/components/dashboard/tools/tools.component.ts");
/* harmony import */ var _user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/user-create/user-create.component */ "./src/app/components/user/user-create/user-create.component.ts");
/* harmony import */ var _product_editor_product_editor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product-editor/product-editor.component */ "./src/app/components/dashboard/product-editor/product-editor.component.ts");
/* harmony import */ var _product_editor_form_product_editor_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./product-editor-form/product-editor-form.component */ "./src/app/components/dashboard/product-editor-form/product-editor-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var dashboardRoutes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
        children: [
            {
                path: '',
                component: _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_3__["DashboardSidenavComponent"],
                outlet: 'dashboardSidenav',
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: '',
                component: _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'tools',
                component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_6__["ToolsComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'product-editor',
                component: _product_editor_product_editor_component__WEBPACK_IMPORTED_MODULE_8__["ProductEditorComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'product-editor-new/:parentCategory_id/:parentCategoryName',
                component: _product_editor_form_product_editor_form_component__WEBPACK_IMPORTED_MODULE_9__["ProductEditorFormComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'product-editor-edit/:parentCategory_id/:parentCategoryName/:_id',
                component: _product_editor_form_product_editor_form_component__WEBPACK_IMPORTED_MODULE_9__["ProductEditorFormComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            // {
            //   path: 'product-create',
            //   component: ProductCreateComponent,
            // },
            // {
            //   path: 'product-edit/:_id',
            //   component: ProductCreateComponent,
            //   canActivate: [AuthGuard],
            //   data: { auth: 'manager' },
            // },
            // {
            //   path: 'product-edit',
            //   component: ProductCreateComponent,
            //   canActivate: [AuthGuard],
            //   data: { auth: 'manager' },
            // },
            {
                path: 'dashboard-signup',
                component: _user_user_create_user_create_component__WEBPACK_IMPORTED_MODULE_7__["UserCreateComponent"],
                canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                data: { auth: 'manager' },
            },
            {
                path: 'profile',
                component: _user_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"],
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(dashboardRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!--<mat-toolbar class=\"mat-elevation-z2\">-->\r\n      <mat-toolbar-row *ngFor=\"let dashboardSidenavItem of dashboardSidenavItems\" class=\"sidenav-mat-toolbar-row\">\r\n        <a [routerLinkActive]=\"['primary-light']\" [routerLinkActiveOptions]=\"{exact: true}\" mat-button\r\n           [routerLink]=\"['/dashboard', dashboardSidenavItem._id]\">{{dashboardSidenavItem.name}}</a>\r\n      </mat-toolbar-row>\r\n    <!--</mat-toolbar>-->\r\n\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts ***!
  \***************************************************************************************/
/*! exports provided: DashboardSidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardSidenavComponent", function() { return DashboardSidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardSidenavComponent = /** @class */ (function () {
    function DashboardSidenavComponent(router, catalogService) {
        this.router = router;
        this.catalogService = catalogService;
    }
    DashboardSidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalogService.getChildren('dashboard')
            .subscribe(function (menuItems) {
            _this.dashboardSidenavItems = menuItems.data;
            // console.log('dashboardSidenavItems', this.dashboardSidenavItems);
        });
    };
    DashboardSidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-sidenav',
            template: __webpack_require__(/*! ./dashboard-sidenav.component.html */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-sidenav.component.scss */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"]])
    ], DashboardSidenavComponent);
    return DashboardSidenavComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\r\n  <mat-sidenav  class=\"sidenav\" #sidenav mode=\"side\" [opened]=\"media.isActive('gt-sm')\">\r\n    <!--<p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>-->\r\n    <!--<p>-->\r\n\r\n    <!--<div class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\">-->\r\n      <!--<button mat-button (click)=\"sidenav.toggle()\">-->\r\n        <!--<mat-icon>arrow_left</mat-icon>-->\r\n      <!--</button>-->\r\n    <!--</div>-->\r\n    <div class=\"container-sidenav\">\r\n      <mat-toolbar class=\"mat-elevation-z2\">\r\n        <mat-toolbar-row fxShow=\"true\" fxHide.gt-sm=\"true\" class=\"sidenav-mat-toolbar-row\">\r\n          <a  mat-button (click)=\"sidenav.toggle()\"><mat-icon>arrow_left</mat-icon></a>\r\n        </mat-toolbar-row>\r\n        <router-outlet name=\"dashboardSidenav\"></router-outlet>\r\n      </mat-toolbar>\r\n    </div>\r\n      <!--<mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">-->\r\n        <!--<label>Mode:</label>-->\r\n        <!--<mat-radio-button value=\"over\">Over</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"side\">Side</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"push\">Push</mat-radio-button>-->\r\n      <!--</mat-radio-group>-->\r\n    <!--</p>-->\r\n  </mat-sidenav>\r\n\r\n  <mat-sidenav-content>\r\n\r\n    <!--<p><button mat-button (click)=\"sidenav.toggle()\" >Меню</button></p>-->\r\n    <!--<p>-->\r\n\r\n    <!--*ngIf=\"!sidenav.opened\"-->\r\n    <div *ngIf=\"!sidenav.opened\" class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\">\r\n    <button mat-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon>arrow_right</mat-icon>\r\n    </button>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n      <!--<mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">-->\r\n        <!--<label>Mode:</label>-->\r\n        <!--<mat-radio-button value=\"over\">Over</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"side\">Side</mat-radio-button>-->\r\n        <!--<mat-radio-button value=\"push\">Push</mat-radio-button>-->\r\n      <!--</mat-radio-group>-->\r\n    <!--</p>-->\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(media) {
        this.media = media;
        this.state = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // this.media.asObservable()
        //   .subscribe((change: MediaChange) => {
        //     this.state = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
        //   });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/components/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["ObservableMedia"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.module.ts ***!
  \**********************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/components/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard-sidenav/dashboard-sidenav.component */ "./src/app/components/dashboard/dashboard-sidenav/dashboard-sidenav.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../user/user.module */ "./src/app/components/user/user.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/components/dashboard/tools/tools.component.ts");
/* harmony import */ var _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-create/product-create.component */ "./src/app/components/dashboard/product-create/product-create.component.ts");
/* harmony import */ var _product_editor_product_editor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./product-editor/product-editor.component */ "./src/app/components/dashboard/product-editor/product-editor.component.ts");
/* harmony import */ var _product_editor_form_product_editor_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-editor-form/product-editor-form.component */ "./src/app/components/dashboard/product-editor-form/product-editor-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_6__["UserModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            ],
            declarations: [
                _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
                _dashboard_sidenav_dashboard_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["DashboardSidenavComponent"],
                _tools_tools_component__WEBPACK_IMPORTED_MODULE_9__["ToolsComponent"],
                _product_create_product_create_component__WEBPACK_IMPORTED_MODULE_10__["ProductCreateComponent"],
                _product_editor_product_editor_component__WEBPACK_IMPORTED_MODULE_11__["ProductEditorComponent"],
                _product_editor_form_product_editor_form_component__WEBPACK_IMPORTED_MODULE_12__["ProductEditorFormComponent"]
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/components/dashboard/product-create/product-create.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/product-create/product-create.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <div class=\"item full-width-container\">\r\n      <mat-card  class=\"form-block\">\r\n        <mat-card-header></mat-card-header>\r\n        <mat-card-title></mat-card-title>\r\n\r\n        <mat-card-content>\r\n          <div class=\"container\">\r\n            <div class=\"row\">\r\n              <div class=\"cell\">\r\n                <h2 class=\"mat-h2\">Новий виріб</h2>\r\n              </div>\r\n            </div>\r\n\r\n          <form [formGroup]=\"productCreateForm\" #f=\"ngForm\" (submit)=\"onProductCreateSubmit()\">\r\n\r\n            <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n              <div class=\"cell\">\r\n                <button type=\"button\" mat-raised-button (click)=\"addCategory()\">Додати категорію</button>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n                <div formArrayName=\"parents\" class=\"cell\" fxFlex.gt-xs=\"50\"\r\n                     *ngFor=\"let categoryBlock of productCreateForm.get('parents')['controls']; let i = index\">\r\n                  <!--<div [formGroupName]=\"i\">-->\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Категорія\" formControlName=\"{{i}}\" required\r\n                                  (selectionChange)=\"onSelectParents($event)\">\r\n                        <mat-optgroup *ngFor=\"let category of categories\" [label]=\"category.name\">\r\n                          <mat-option *ngIf=\"category.numOfChildren === 0\" [value]=\"category._id\">\r\n                            {{ category.name }}\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let subCategory of category.children\" [value]=\"subCategory._id\">\r\n                            {{ subCategory.name }}\r\n                          </mat-option>\r\n                        </mat-optgroup>\r\n                      </mat-select>\r\n                      <mat-hint *ngIf=\"i > 0\" align=\"end\" class=\"remove-field\" (click)=\"removeCategory(i)\">Видалити категорію</mat-hint>\r\n                      <mat-error *ngIf=\"productCreateForm.get('parents').at(i).errors?.required &&\r\n                        productCreateForm.get('parents').at(i).touched\">\r\n                        Виберіть категорію\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  <!--</div>-->\r\n                </div>\r\n\r\n              <div class=\"cell\" fxFlex.gt-xs=\"50\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Найменування\" formControlName=\"name\" required>\r\n                    <mat-error\r\n                      *ngIf=\"(productCreateForm.get('name').errors?.minlength ||\r\n                      productCreateForm.get('name').errors?.maxlength ||\r\n                      productCreateForm.get('name').errors?.required) &&\r\n                      productCreateForm.get('name').touched\">\r\n                      Довжина повинна бути від 4 до 30 символів\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"cell\" fxLayout=\"row\" fxFlex=\"50\">\r\n\r\n              <div class=\"item\" fxFlex=\"30\">\r\n                <div formGroupName=\"dimensions\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Ширина\" formControlName=\"width\">\r\n                    <span matSuffix>см</span>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('dimensions.width').errors?.maxlength &&\r\n                      productCreateForm.get('dimensions').get('width').touched\">\r\n                      Використовуйте не більше ніж три символа\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('dimensions').get('width').errors?.pattern &&\r\n                      productCreateForm.get('dimensions').get('width').touched\">\r\n                      Використовуйте тількі цифри\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\" fxFlex=\"30\">\r\n                <div formGroupName=\"dimensions\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Висота\" formControlName=\"height\">\r\n                    <span matSuffix>см</span>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('dimensions.height').errors?.maxlength &&\r\n                      productCreateForm.get('dimensions').get('height').touched\">\r\n                      Використовуйте не більше ніж три символа\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('dimensions').get('height').errors?.pattern &&\r\n                      productCreateForm.get('dimensions').get('height').touched\">\r\n                      Використовуйте тількі цифри\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n                <div class=\"item\" fxFlex=\"40\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Артикул\" formControlName=\"_id\" required>\r\n                    <mat-error\r\n                      *ngIf=\"(productCreateForm.get('_id').errors?.minlength ||\r\n                        productCreateForm.get('_id').errors?.maxlength ||\r\n                        productCreateForm.get('_id').errors?.required) &&\r\n                        productCreateForm.get('_id').touched\">\r\n                      Довжина повинна бути 6 символів\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('_id').errors?.pattern &&\r\n                      productCreateForm.get('_id').touched\">\r\n                      Використовуйте тількі цифри і букви\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n            </div>\r\n\r\n              <div class=\"cell\" fxLayout=\"row\" fxFlex=\"50\">\r\n\r\n                <div class=\"item \" fxFlex=\"30\">\r\n                  <!--{{productCreateForm.get('price').errors | json}}-->\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Ціна\" formControlName=\"price\" >\r\n                    <span matSuffix>грн</span>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('price').errors?.pattern &&\r\n                      productCreateForm.get('price').touched\">\r\n                      Використовуйте тількі цифри більші 0\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"item\" fxFlex=\"30\">\r\n                  <mat-form-field>\r\n                    <input matInput placeholder=\"Знижка\" formControlName=\"discount\" >\r\n                    <span matSuffix>%</span>\r\n                    <mat-error\r\n                      *ngIf=\"productCreateForm.get('discount').errors?.pattern &&\r\n                      productCreateForm.get('discount').touched\">\r\n                      Знижка може бути від 0% до 99%\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"item\" fxFlex=\"40\">\r\n                  <div class=\"flex-left-container\">\r\n                    <mat-checkbox class=\"flex-left-item\" formControlName=\"onMainPage\">На головній</mat-checkbox>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"cell\" fxFlex.gt-xs=\"50\">\r\n                <mat-form-field>\r\n                  <textarea matInput placeholder=\"Опис\" formControlName=\"description\" required></textarea>\r\n                  <mat-error\r\n                    *ngIf=\"(productCreateForm.get('description').errors?.minlength ||\r\n                      productCreateForm.get('description').errors?.maxlength ||\r\n                      productCreateForm.get('description').errors?.required) &&\r\n                      productCreateForm.get('description').touched\">\r\n                    Довжина повинна бути від 4 до 200 символів\r\n                  </mat-error>\r\n                  <mat-error\r\n                    *ngIf=\"productCreateForm.get('description').errors?.pattern &&\r\n                      productCreateForm.get('description').touched\">\r\n                    Використовуйте тількі цифри і букви\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"row\" fxLayout=\"row\" fxFlex=\"100\">\r\n                <div formArrayName=\"assets\" class=\"cell\" fxFlex=\"25\" fxFlex.lt-md=\"50\"\r\n                     *ngFor=\"let fileBlock of productCreateForm.get('assets')['controls']; let i = index\">\r\n                  <div class=\"preview-img-wrapper\">\r\n\r\n                      <img *ngIf=\"processingLoadFile !== i class=\"responsive-image\" src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_180,h_180,f_auto/' +\r\n                        productCreateForm.get('assets').value[i] || defaultProductImgPath}}\"\r\n                                 alt=\"designImage\">\r\n\r\n                    <!--<img *ngIf=\"processingLoadFile !== i\" src=\"{{'https://res.cloudinary.com/hmm6pjfgk/image/upload/' +-->\r\n                    <!--productCreateForm.get('assets').value[i]}}\" alt=\"productImage\">-->\r\n                    <img *ngIf=\"processingLoadFile === i\" src=\"{{productCreateForm.get('assets').value[i]}}\" alt=\"productImage\">\r\n                    <div *ngIf=\"processingLoadFile === i\" class=\"preview-div-processing\">\r\n                      <div class=\"spinner-wrapper\">\r\n                        <mat-spinner [diameter]=\"24\"></mat-spinner>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <p *ngIf=\"processingLoadFile !== i\" class=\"remove-field text-center\" (click)=\"removeFile(i)\">\r\n                    Видалити зображення</p>\r\n\r\n                </div>\r\n                <div class=\"cell\" fxFlex=\"25\" fxFlex.lt-md=\"50\"\r\n                     *ngIf=\"productCreateForm.get('assets').value.length < 4\">\r\n                  <div class=\"preview-img-wrapper\">\r\n                    <img src=\"{{config.imgPath +\r\n                      config.cloudinary.cloud_name + '/c_fill,w_180,h_180,f_auto/' + config.defaultProductImg}}\" alt=\"productImage\">\r\n                    <input #inputFile type=\"file\" (change)=\"addPictures($event)\"\r\n                           accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png\" style=\"display:none;\">\r\n\r\n                    <div class=\"preview-div-processing\">\r\n                      <div class=\"button-wrapper\">\r\n                        <button mat-mini-fab color=\"primary\" type=\"button\"\r\n                                (click)=\"inputFile.click();\r\n                                this.productCreateForm.get('_id').disable();\r\n                                this.productCreateForm.get('parents').at(0).disable();\"\r\n                                [disabled]=\"!productCreateForm.get('_id').disabled &&\r\n                                !productCreateForm.get('_id').valid || processingLoadFile >= 0\">\r\n                          <mat-icon>add</mat-icon>\r\n                        </button>\r\n\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <div class=\"submit-button-wrapper\">\r\n              <!--<span fxFlex></span>-->\r\n              <button *ngIf=\"!editMode\" mat-raised-button class=\"full-width\" color=\"primary\"\r\n                      [disabled]=\"!productCreateForm.valid || processingLoadFile >= 0\">Створити</button>\r\n              <button *ngIf=\"editMode\" mat-raised-button class=\"full-width\" color=\"primary\"\r\n                      [disabled]=\"!productCreateForm.valid || processingLoadFile >= 0\">Зберегти</button>\r\n            </div>\r\n\r\n          </form>\r\n          </div>\r\n\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/product-create/product-create.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/product-create/product-create.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/product-create/product-create.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/product-create/product-create.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCreateComponent", function() { return ProductCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductCreateComponent = /** @class */ (function () {
    function ProductCreateComponent(catalogService, productService, matSnackBar, route) {
        this.catalogService = catalogService;
        this.productService = productService;
        this.matSnackBar = matSnackBar;
        this.route = route;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
        this.processingLoadFile = -1;
        this.editMode = false;
    }
    ProductCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productCreateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            parents: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([this.initParents()]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30),
            ]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(150),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
            ]),
            dimensions: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                width: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3),
                ]),
                height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(3),
                ]),
            }),
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ]+'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6),
            ]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^\\d*\\.?\\d+$'),
            ]),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^\\d*\\.?\\d+$'),
            ]),
            assets: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]),
            onMainPage: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            // Validators.required,
            ]),
        });
        this.catalogService.getDescendants('products', 0)
            .subscribe(function (descendants) {
            console.log('descendants.data', descendants.data);
            _this.categories = descendants.data;
        }, function (err) { return _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
        this.route.paramMap
            .subscribe(function (paramMap) {
            if (paramMap.get('_id')) {
                console.log('product editor(create) _id', paramMap.get('_id'));
                _this.edited_id = paramMap.get('_id');
                _this.editMode = true;
                _this.productService.getProductById(_this.edited_id, null)
                    .subscribe(function (product) {
                    for (var i = 1; i < product.data.categories.length; i++) {
                        _this.addParents();
                    }
                    for (var i = 0; i < product.data.files.length; i++) {
                        _this.addAssets();
                    }
                    _this.productCreateForm.patchValue(product.data);
                }, function (err) { return console.log('Помилка завантаження товару для редагування', err); });
            }
        });
    };
    ProductCreateComponent.prototype.resetForm = function () {
        if (this.productCreateFormDirective) {
            // enabling disabled fields
            this.productCreateForm.get('_id').enable();
            this.productCreateForm.get('parents')['controls'][0].enable();
            // deleting needless controls
            // categories controls array has one item on init
            for (var i = this.productCreateForm.get('parents')['controls'].length; i > 1; i--) {
                this.removeParents(i - 1);
            }
            // files controls array don't has elems on init
            for (var i = this.productCreateForm.get('assets')['controls'].length; i > 0; i--) {
                this.removeAssets(i - 1);
            }
            this.productCreateFormDirective.resetForm();
        }
    };
    ProductCreateComponent.prototype.addPictures = function (event) {
        var _this = this;
        this.processingLoadFile = this.productCreateForm.get('assets').value.length;
        var file = event.target.files[0];
        var checkFile = this.productService.checkFile(file);
        if (!checkFile.success) {
            this.matSnackBar.open(checkFile.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            this.processingLoadFile = -1;
        }
        else {
            var filesLinks_1 = this.productCreateForm.get('assets').value;
            filesLinks_1.push(_app_config__WEBPACK_IMPORTED_MODULE_5__["config"].imgPath + _app_config__WEBPACK_IMPORTED_MODULE_5__["config"].cloudinary + _app_config__WEBPACK_IMPORTED_MODULE_5__["config"].defaultProductImg);
            this.addAssets();
            this.productCreateForm.get('assets').setValue(filesLinks_1);
            this.productService.productAddImage(file, this.productCreateForm.get('_id').value)
                .subscribe(function (result) {
                // this.previewProductImages.pop();
                filesLinks_1.pop();
                filesLinks_1.push(result.data);
                _this.productCreateForm.get('assets').setValue(filesLinks_1);
                console.log('this.productCreateForm.get(\'files\').value', _this.productCreateForm.get('assets').value);
                // this.previewProductImages = filesLinks;
                // console.log('this.previewProductImages', this.previewProductImages);
                console.log(result);
                _this.processingLoadFile = -1;
            }, function (err) {
                _this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
                _this.removeAssets(_this.productCreateForm.get('assets').value.length - 1);
                // this.previewProductImages.pop();
                filesLinks_1.pop();
                _this.processingLoadFile = -1;
            });
        }
    };
    ProductCreateComponent.prototype.onProductCreateSubmit = function () {
        var _this = this;
        // remove duplicates
        var uniqueParents = [];
        this.productCreateForm.getRawValue().parents
            .forEach(function (item) {
            if (uniqueParents.indexOf(item) === -1) {
                uniqueParents.push(item);
            }
        });
        this.product = {
            parents: uniqueParents,
            _id: this.productCreateForm.getRawValue()._id,
            name: this.productCreateForm.get('name').value,
            price: this.productCreateForm.get('price').value,
            discount: this.productCreateForm.get('discount').value,
            assets: this.productCreateForm.get('assets').value,
            description: this.productCreateForm.get('description').value,
            onMainPage: this.productCreateForm.get('onMainPage').value || false,
            dimensions: {
                width: this.productCreateForm.get('dimensions.width').value,
                height: this.productCreateForm.get('dimensions.height').value,
            }
        };
        if (this.editMode) {
            // edit
            this.product._id = this.edited_id;
            this.productService.productEdit(this.product)
                .subscribe(function (result) {
                _this.matSnackBar.open(result.message, '', { duration: 3000 });
                _this.resetForm();
                _this.editMode = false;
            }, function (err) { return _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
        }
        else {
            this.productService.productCreate(this.product)
                .subscribe(function (result) {
                _this.matSnackBar.open(result.message, '', { duration: 3000 });
                _this.resetForm();
            }, function (err) { return _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
        }
    };
    ProductCreateComponent.prototype.onSelectParents = function (event) {
        if (event.source.ngControl.name === '0') {
            this.createSku(event.value);
        }
    };
    ProductCreateComponent.prototype.createSku = function (category) {
        // const getPrefix$ = this.catalogService.getPrefix(category);
        // const getSkuList$ = this.productService.getSkuList(category);
        // observableForkJoin(getPrefix$, getSkuList$).subscribe(result => {
        //   const prefix = result[0].data.prefix;
        //   const skuList = result[1].data
        //     .map(item => item.sku) // create [] from {}
        //     .filter(item => item.slice(0, 2) === prefix) // take elems with needed prefix
        //     .map(item => +item.slice(2)); // concat prefix, take only numbers
        //     console.log('skuList', skuList);
        //     let freeNumber = 1;
        //     for (let i = 0; i < skuList.length; i++) {
        //       if (skuList[i] - (i + 1) >= 1) {
        //         freeNumber = i + 1;
        //         break;
        //       }
        //       if (i === skuList.length - 1) {
        //         freeNumber = skuList.length + 1;
        //       }
        //     }
        //     let sku = freeNumber.toString();
        //     while (sku.length < 4) {
        //       sku = '0' + sku;
        //     }
        //     sku = prefix + sku;
        //     this.productCreateForm.patchValue({sku});
        // },
        //       err => this.matSnackBar.open(err.error, '',
        //         {duration: 3000, panelClass: 'snack-bar-danger'})
        //   );
    };
    ProductCreateComponent.prototype.addParents = function () {
        var control = this.productCreateForm.get('parents');
        control.push(this.initParents());
    };
    ProductCreateComponent.prototype.removeParents = function (i) {
        var control = this.productCreateForm.get('parents');
        control.removeAt(i);
    };
    ProductCreateComponent.prototype.initParents = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
        ]);
    };
    ProductCreateComponent.prototype.addAssets = function () {
        var control = this.productCreateForm.get('assets');
        control.push(this.initAssets());
    };
    ProductCreateComponent.prototype.removeAssets = function (i) {
        var control = this.productCreateForm.get('assets');
        control.removeAt(i);
    };
    ProductCreateComponent.prototype.initAssets = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('file', [
        // Validators.required,
        ]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"])
    ], ProductCreateComponent.prototype, "productCreateFormDirective", void 0);
    ProductCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-create',
            template: __webpack_require__(/*! ./product-create.component.html */ "./src/app/components/dashboard/product-create/product-create.component.html"),
            styles: [__webpack_require__(/*! ./product-create.component.scss */ "./src/app/components/dashboard/product-create/product-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ProductCreateComponent);
    return ProductCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/product-editor-form/product-editor-form.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboard/product-editor-form/product-editor-form.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <div class=\"full-width-container\">\r\n      <mat-card  class=\"form-block\">\r\n        <mat-card-header></mat-card-header>\r\n        <mat-card-title>\r\n          <h2 *ngIf=\"editMode\" class=\"mat-h2\">Редагувати колекцію\r\n            <span class=\"accent\">{{productForm.get('name').value}}</span> у розділі\r\n            <span class=\"accent\">{{paramParentName}}</span></h2>\r\n          <h2 *ngIf=\"!editMode\" class=\"mat-h2\">Створити колекцію у розділі <span class=\"accent\">{{paramParentName}}</span></h2>\r\n        </mat-card-title>\r\n\r\n        <mat-card-content>\r\n          <div class=\"container\">\r\n\r\n            <form [formGroup]=\"productForm\" #f=\"ngForm\" novalidate>\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                    <div class=\"cell\" fxFlex=\"100\" fxFlex.sm=\"50\" fxFlex.gt-sm=\"25\">\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Ідентифікатор\" formControlName=\"_id\" required>\r\n                        <mat-error\r\n                          *ngIf=\"(productForm.get('_id').errors?.minlength ||\r\n                                  productForm.get('_id').errors?.maxlength ||\r\n                                  productForm.get('_id').errors?.required) &&\r\n                                  productForm.get('_id').touched\">\r\n                          Довжина повинна бути 6 символів\r\n                        </mat-error>\r\n                        <mat-error\r\n                        *ngIf=\"productForm.get('_id').errors?.pattern &&\r\n                                productForm.get('_id').touched\">\r\n                        Довжина повинна бути 6 символів\r\n                      </mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cell\" fxFlex=\"100\" fxFlex.sm=\"50\" fxFlex.gt-sm=\"25\">\r\n                      <mat-form-field>\r\n                        <input matInput placeholder=\"Назва\" formControlName=\"name\" required>\r\n                        <mat-error\r\n                          *ngIf=\"(productForm.get('name').errors?.minlength ||\r\n                                  productForm.get('name').errors?.maxlength ||\r\n                                  productForm.get('name').errors?.required) &&\r\n                                  productForm.get('name').touched\">\r\n                          Довжина повинна бути від 4 до 50 символів\r\n                        </mat-error>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cell\" fxFlex=\"100\" fxFlex.sm=\"50\" fxFlex.gt-sm=\"25\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"Публікувати\" formControlName=\"display\">\r\n                          <mat-option [value]=\"true\">\r\n                            Так\r\n                          </mat-option>\r\n                          <mat-option [value]=\"false\">\r\n                            Ні\r\n                          </mat-option>\r\n                        </mat-select>\r\n                        <!-- <mat-error\r\n                          *ngIf=\"productForm.get('display').errors?.required &&\r\n                                  productForm.get('display').touched\">\r\n                          Обов'язкове поле\r\n                        </mat-error> -->\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"cell\" fxFlex=\"100\" fxFlex.sm=\"50\" fxFlex.gt-sm=\"25\">\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"На головній\" formControlName=\"onMainPage\">\r\n                            <mat-option [value]=\"true\">\r\n                              Так\r\n                            </mat-option>\r\n                            <mat-option [value]=\"false\">\r\n                              Ні\r\n                            </mat-option>\r\n                          </mat-select>\r\n                          <!-- <mat-error\r\n                            *ngIf=\"productForm.get('display').errors?.required &&\r\n                                    productForm.get('display').touched\">\r\n                            Обов'язкове поле\r\n                          </mat-error> -->\r\n                        </mat-form-field>\r\n                      </div>\r\n              </div>\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                <div class=\"cell\" fxFlex=\"100\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\">\r\n                  <mat-form-field>\r\n                    <textarea matInput placeholder=\"Опис\" formControlName=\"description\" required></textarea>\r\n                    <mat-error\r\n                      *ngIf=\"(productForm.get('description').errors?.minlength ||\r\n                        productForm.get('description').errors?.maxlength ||\r\n                        productForm.get('description').errors?.required) &&\r\n                        productForm.get('description').touched\">\r\n                      Довжина повинна бути від 4 до 200 символів\r\n                    </mat-error>\r\n                    <mat-error\r\n                      *ngIf=\"productForm.get('description').errors?.pattern &&\r\n                        productForm.get('description').touched\">\r\n                      Не використовуйте спецыальны символи\r\n                    </mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"cell wrap\" fxFlex=\"100\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" formGroupName=\"dimensions\">\r\n                    <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                        <mat-form-field>\r\n                          <input matInput placeholder=\"Ширина\" formControlName=\"width\">\r\n                          <span matSuffix>см</span>\r\n                          <mat-error\r\n                            *ngIf=\"productForm.get('dimensions.width').errors?.maxlength &&\r\n                            productForm.get('dimensions').get('width').touched\">\r\n                            Використовуйте не більше ніж три символа\r\n                          </mat-error>\r\n                          <mat-error\r\n                            *ngIf=\"productForm.get('dimensions').get('width').errors?.pattern &&\r\n                            productForm.get('dimensions').get('width').touched\">\r\n                            Використовуйте тількі цифри\r\n                          </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                  <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Висота\" formControlName=\"height\">\r\n                      <span matSuffix>см</span>\r\n                      <mat-error\r\n                        *ngIf=\"productForm.get('dimensions.height').errors?.maxlength &&\r\n                        productForm.get('dimensions').get('height').touched\">\r\n                        Використовуйте не більше ніж три символа\r\n                      </mat-error>\r\n                      <mat-error\r\n                        *ngIf=\"productForm.get('dimensions').get('height').errors?.pattern &&\r\n                        productForm.get('dimensions').get('height').touched\">\r\n                        Використовуйте тількі цифри\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"cell wrap\" fxFlex=\"100\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\">\r\n                    <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                        <mat-form-field>\r\n                            <input matInput placeholder=\"Ціна\" formControlName=\"price\" >\r\n                            <span matSuffix>грн</span>\r\n                            <mat-error\r\n                              *ngIf=\"productForm.get('price').errors?.pattern &&\r\n                              productForm.get('price').touched\">\r\n                              Використовуйте тількі цифри більші 0\r\n                            </mat-error>\r\n                        </mat-form-field>\r\n                      </div>\r\n                  <div class=\"item\" fxFlex=\"100\" fxFlex.gt-xs=\"50\">\r\n                      <mat-form-field>\r\n                          <input matInput placeholder=\"Знижка\" formControlName=\"discount\" >\r\n                          <span matSuffix>%</span>\r\n                          <mat-error\r\n                            *ngIf=\"productForm.get('discount').errors?.pattern &&\r\n                            productForm.get('discount').touched\">\r\n                            Використовуйте тількі цифри більші 0\r\n                          </mat-error>\r\n                      </mat-form-field>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n                    <div class=\"cell-header\" fxLayout=\"row\" fxFlex=\"100\">\r\n                        <h3 class=\"mat-h3 margin-0\">Головне зображення колекції</h3>\r\n                      </div>\r\n                      <div class=\"cell\" fxFlex.xs=\"100\" fxFlex=\"25\">\r\n                        <div class=\"preview-img-wrapper\" >\r\n                          <img *ngIf=\"productForm.get('mainImage').value\" src=\"{{\r\n                              config.imgPath +\r\n                              config.cloudinary.cloud_name +\r\n                               '/c_fill,w_260,h_170,f_auto/' + productForm.get('mainImage').value}}\"\r\n                               alt=\"Main Image\">\r\n        \r\n        \r\n        \r\n                          <img *ngIf=\"!productForm.get('mainImage').value\"\r\n                               src=\"{{\r\n                               config.imgPath +\r\n                              config.cloudinary.cloud_name +\r\n                               '/c_fill,w_180,h_180,f_auto/'+\r\n                               config.defaultProductImg}}\" alt=\"Main Image\">\r\n                          <input #inputMainImage type=\"file\" (change)=\"addMainImage($event)\"\r\n                                 accept=\".jpg, .jpe, .jpeg, .bmp, .webp, .png, .gif, .svg\" style=\"display:none;\">\r\n                          <div class=\"preview-div-processing\">\r\n                            <div *ngIf=\"processingLoadMainImage\" class=\"spinner-wrapper\">\r\n                              <mat-spinner [diameter]=\"24\"></mat-spinner>\r\n                            </div>\r\n        \r\n        \r\n                            <div *ngIf=\"!processingLoadMainImage\" class=\"button-wrapper\">\r\n                              <button mat-mini-fab color=\"primary\" type=\"button\"\r\n                                      (click)=\"inputMainImage.click();\"\r\n                                      [disabled]=\"processingLoadMainImage\">\r\n                                <mat-icon *ngIf=\"!productForm.get('mainImage').value && !processingLoadMainImage\">add</mat-icon>\r\n                                <mat-icon *ngIf=\"productForm.get('mainImage').value && !processingLoadMainImage\">redo</mat-icon>\r\n                              </button>\r\n        \r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        </div>\r\n              </div>\r\n\r\n              <div class=\"submit-button-wrapper row\" fxLayout=\"row\">\r\n                  <div class=\"cell\" fxFlex=\"40\">\r\n  \r\n                    <button mat-raised-button color=\"primary\" class=\"full-width\" type=\"button\" (click)=\"onProductFormSubmit(false)\"\r\n                            [disabled]=\"!productForm.valid || processingLoadAssets >=0\">\r\n                      Зберегти</button>\r\n                  </div>\r\n                  <div class=\"cell\" fxFlex=\"40\">\r\n  \r\n                    <button *ngIf=\"editMode\" mat-raised-button color=\"primary\" class=\"full-width\" type=\"button\" (click)=\"onProductFormSubmit(true)\"\r\n                              [disabled]=\"!productForm.valid || processingLoadAssets >=0\">\r\n                      Зберегти і повернутись</button>\r\n                    <button *ngIf=\"!editMode\" mat-raised-button color=\"primary\" class=\"full-width\" type=\"button\" (click)=\"onProductFormSubmit(true)\"\r\n                            [disabled]=\"!productForm.valid || processingLoadAssets >=0\">\r\n                      Створити і повернутись</button>\r\n                  </div>\r\n                    <div class=\"cell\" fxFlex=\"20\">\r\n                    <button mat-raised-button  type=\"button\" (click)=\"goBack()\" class=\"full-width\"\r\n                            [disabled]=\"processingLoadAssets >=0\">Повернутись</button>\r\n                  </div>\r\n  \r\n                </div>\r\n            </form>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/product-editor-form/product-editor-form.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/dashboard/product-editor-form/product-editor-form.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/product-editor-form/product-editor-form.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/dashboard/product-editor-form/product-editor-form.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProductEditorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditorFormComponent", function() { return ProductEditorFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProductEditorFormComponent = /** @class */ (function () {
    function ProductEditorFormComponent(matSnackBar, route, location, productService, catalogService) {
        this.matSnackBar = matSnackBar;
        this.route = route;
        this.location = location;
        this.productService = productService;
        this.catalogService = catalogService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_3__["config"];
        this.editMode = false;
        this.processingLoadAssets = -1;
        this.processingLoadMainImage = false;
    }
    ProductEditorFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            parents: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            assets: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArray"]([]),
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]({ value: '', disabled: false }, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9]+'),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(7),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(7),
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
            ]),
            display: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](true, []),
            onMainPage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false, []),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(200),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z0-9а-яА-ЯіїєІЇЄ,."@%-_\' ]+'),
            ]),
            dimensions: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                width: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3),
                ]),
                height: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]+'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(3),
                ]),
            }),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^\\d*\\.?\\d+$'),
            ]),
            discount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](0, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{1,2}'),
            ]),
            mainImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.config.defaultProductImg, []),
            menuImage: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.config.defaultProductImg, []),
        });
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["mergeMap"])(function (params) {
            _this.paramEdited_id = params.get('_id');
            _this.paramParent_id = params.get('parentCategory_id');
            _this.paramParentName = params.get('parentCategoryName');
            if (!_this.paramEdited_id) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(null);
            }
            return _this.productService.getProductById(_this.paramEdited_id, false);
        }))
            .subscribe(function (result) {
            if (result) {
                // edit product
                console.log('result edit', result);
                _this.editMode = true;
                // this.parents = result.data.parents;
                for (var i = 0; i < result.data.assets.length; i++) {
                    _this.addAssetsControl();
                }
                console.log(' result.data.parents.length', result.data.parents.length);
                for (var i = 0; i < result.data.parents.length; i++) {
                    _this.addParentsControl();
                }
                _this.productForm.patchValue(result.data);
                _this.productForm.get('_id').disable();
            }
            else {
                // new product
                console.log('result new', result);
                // this.parents = [this.paramParent_id];
                _this.addParentsControl();
                _this.productForm.get('parents').setValue([_this.paramParent_id]);
                _this._createSku(_this.paramParent_id);
            }
        }, function (err) { return console.log('Помилка', err); });
    };
    ProductEditorFormComponent.prototype._createSku = function (parent) {
        var _this = this;
        var getPrefix$ = this.catalogService.getPrefix(parent);
        var getSkuList$ = this.productService.getSkuList();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["forkJoin"])(getPrefix$, getSkuList$).subscribe(function (result) {
            var prefix = result[0].data.prefix;
            var skuList = result[1]
                .map(function (item) { return item._id; }) // create [] from {}
                .filter(function (item) { return item.slice(0, 3) === prefix; }) // take elems with needed prefix
                .map(function (item) { return +item.slice(3); }); // concat prefix, take only numbers
            var freeNumber = 1;
            for (var i = 0; i < skuList.length; i++) {
                if (skuList[i] - (i + 1) >= 1) {
                    freeNumber = i + 1;
                    break;
                }
                if (i === skuList.length - 1) {
                    freeNumber = skuList.length + 1;
                }
            }
            var sku = freeNumber.toString();
            while (sku.length < 4) {
                sku = '0' + sku;
            }
            sku = prefix + sku;
            _this.productForm.patchValue({ _id: sku });
        }, function (err) { return _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
    };
    ProductEditorFormComponent.prototype.addMainImage = function (event) {
        var _this = this;
        this.processingLoadMainImage = true;
        var file = event.target.files[0];
        var checkFile = this.productService.checkFile(file);
        if (!checkFile.success) {
            this.matSnackBar.open(checkFile.message || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
            this.processingLoadMainImage = false;
            // if (!this.editMode) {
            //   this.productForm.get('_id').enable();
            // }
            // this.designForm.get('structure').enable();
        }
        else {
            // this.designForm.get('image').setValue(file);
            console.log('added file', this.productForm.get('mainImage').value);
            this.productService.productAddMainImage(file, this.productForm.get('_id').value)
                .subscribe(function (result) {
                _this.productForm.get('mainImage').setValue(result.data);
                _this.processingLoadMainImage = false;
                // if (!this.editMode) {
                //   this.designForm.get('_id').enable();
                // }
                // this.designForm.get('structure').enable();
            }, function (err) {
                _this.matSnackBar.open(err.error || 'Помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' });
                _this.processingLoadMainImage = false;
                // if (!this.editMode) {
                //   this.designForm.get('_id').enable();
                // }
                // this.designForm.get('structure').enable();
            });
        }
    };
    ProductEditorFormComponent.prototype.onProductFormSubmit = function (goBackAndReset) {
        var _this = this;
        this.product = {
            parents: this.productForm.get('parents').value,
            _id: this.productForm.getRawValue()._id,
            name: this.productForm.get('name').value,
            price: this.productForm.get('price').value,
            discount: this.productForm.get('discount').value,
            // assets : this.productForm.get('assets').value,
            description: this.productForm.get('description').value,
            onMainPage: this.productForm.get('onMainPage').value,
            display: this.productForm.get('display').value,
            mainImage: this.productForm.get('mainImage').value,
            menuImage: this.productForm.get('menuImage').value,
            dimensions: {
                width: this.productForm.get('dimensions.width').value,
                height: this.productForm.get('dimensions.height').value,
            }
        };
        this.productService.productUpsert(this.product)
            .subscribe(function (result) {
            _this.matSnackBar.open(result.message, '', { duration: 3000 });
            if (goBackAndReset) {
                _this.goBack();
                _this.resetForm();
                _this.editMode = false;
            }
            else {
                _this.editMode = true;
            }
        }, function (err) { return _this.matSnackBar.open(err.error, '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
        // if (this.editMode) {
        //   // edit
        //   // this.product._id = this.paramEdited_id;
        //   this.productService.productEdit(this.product)
        //     .subscribe(result => {
        //         this.matSnackBar.open(result.message, '',
        //           {duration: 3000});
        //         this.resetForm();
        //         this.editMode = false;
        //       },
        //       err => this.matSnackBar.open(err.error, '',
        //         {duration: 3000, panelClass: 'snack-bar-danger'})
        //     );
        // } else {
        //   this.productService.productCreate(this.product)
        //     .subscribe(result => {
        //         this.matSnackBar.open(result.message, '',
        //           {duration: 3000});
        //         this.resetForm();
        //       },
        //       err => this.matSnackBar.open(err.error, '',
        //         {duration: 3000, panelClass: 'snack-bar-danger'})
        //     );
        // }
    };
    ProductEditorFormComponent.prototype.resetForm = function () {
        this.productFormDirective.resetForm();
    };
    ProductEditorFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    ProductEditorFormComponent.prototype.addParentsControl = function () {
        var control = this.productForm.get('parents');
        control.push(this.initParentsControl());
    };
    ProductEditorFormComponent.prototype.removeParentsControl = function (i) {
        var control = this.productForm.get('parents');
        control.removeAt(i);
    };
    ProductEditorFormComponent.prototype.initParentsControl = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
        ]);
    };
    ProductEditorFormComponent.prototype.addAssetsControl = function () {
        var control = this.productForm.get('assets');
        control.push(this.initAssetsControl());
    };
    ProductEditorFormComponent.prototype.removeAssetsControl = function (i) {
        var control = this.productForm.get('assets');
        control.removeAt(i);
    };
    ProductEditorFormComponent.prototype.initAssetsControl = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('file', [
        // Validators.required,
        ]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('f'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"])
    ], ProductEditorFormComponent.prototype, "productFormDirective", void 0);
    ProductEditorFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-editor-form',
            template: __webpack_require__(/*! ./product-editor-form.component.html */ "./src/app/components/dashboard/product-editor-form/product-editor-form.component.html"),
            styles: [__webpack_require__(/*! ./product-editor-form.component.scss */ "./src/app/components/dashboard/product-editor-form/product-editor-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_7__["CatalogService"]])
    ], ProductEditorFormComponent);
    return ProductEditorFormComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/product-editor/product-editor.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/product-editor/product-editor.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"cell\">\r\n          <h2 class=\"mat-h2\">Редактор виробів</h2>\r\n        </div>\r\n      </div>\r\n      <form [formGroup]=\"catalogForm\" #f=\"ngForm\" (submit)=\"onCatalogFormSubmit()\">\r\n        <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n          <div formArrayName=\"parents\" class=\"cell\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\"\r\n               *ngFor=\"let categoryBlock of catalogForm.get('parents')['controls']; let i = index\">\r\n\r\n                <mat-select placeholder=\"Виберіть категорію\" formControlName=\"{{i}}\" required\r\n                            (selectionChange)=\"onSelectCategory($event, i)\">\r\n                  <mat-option *ngFor=\"let child of children[i]\" [value]=\"child._id\">\r\n                    {{child.name}}\r\n                  </mat-option>\r\n            </mat-select>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n\r\n      <div *ngIf=\"noMoreChildren\" class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n        <div class=\"cell\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"20\">\r\n          <div class=\"preview-img-wrapper\">\r\n            <img src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_180,h_180,f_auto/' +\r\n                        config.defaultProductImg}}\" alt=\"product\">\r\n            <div class=\"preview-div-processing\">\r\n              <div class=\"button-wrapper\">\r\n                <button mat-mini-fab color=\"primary\" type=\"button\"\r\n                        [routerLink]=\"['/dashboard', 'product-editor-new', parentCategory_id, parentCategoryName]\"\r\n                        [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                  <mat-icon>add</mat-icon>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div *ngFor=\"let product of products\"  class=\"cell\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"20\">\r\n          <app-product-item-brief [product]=\"product\" [parentCategory_id]=\"parentCategory_id\" [parentCategoryName]=\"parentCategoryName\"></app-product-item-brief>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dashboard/product-editor/product-editor.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/dashboard/product-editor/product-editor.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/product-editor/product-editor.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/dashboard/product-editor/product-editor.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ProductEditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductEditorComponent", function() { return ProductEditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
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






var ProductEditorComponent = /** @class */ (function () {
    function ProductEditorComponent(catalogService, productService) {
        this.catalogService = catalogService;
        this.productService = productService;
        this.children = [];
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
        this.noMoreChildren = false;
    }
    ProductEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalogForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            parents: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([this.initParents()]),
        });
        this.catalogService.getChildren('products')
            .subscribe(function (result) { return _this.children[0] = result.data; }, function (err) { return console.log('помилка завантаження категорій', err); });
    };
    ProductEditorComponent.prototype.onSelectCategory = function (event, level) {
        var _this = this;
        while (level + 1 < this.catalogForm.get('parents')['controls'].length) {
            this.removeParents(this.catalogForm.get('parents')['controls'].length - 1);
        }
        this.catalogService.getChildren(event.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (children) {
            if (!children.data.length) {
                // if no children - show products
                _this.parentCategory_id = event.value;
                _this.parentCategoryName = event.source.triggerValue;
                _this.noMoreChildren = true;
                _this.children[level + 1] = children.data;
                return _this.productService.getProductsByParent(event.value, false);
            }
            else {
                _this.children[level + 1] = children.data;
                _this.noMoreChildren = false;
                _this.addParents();
                return _this.productService.getProductsByParent(null, true);
            }
        }))
            .subscribe(function (res) {
            _this.products = res.data;
        }, function (err) { return console.log('помилка завантаження категорій', err); });
        // this.catalogService.getChildren(event.value)
        //   .subscribe(result => {
        //     if (result.data.length) {
        //       this.products = null;
        //       this.children[level + 1] = result.data;
        //       this.noMoreChildren = false;
        //       this.addParents();
        //     } else {
        //       this.productService.getProductsByCategory(event.value, false)
        //         .subscribe(res => this.products = res.data,
        //           err => console.log('помилка завантаження категорій', err)
        //         );
        //       this.parentCategory_id = event.value;
        //       this.parentCategoryName = event.source.triggerValue;
        //       this.noMoreChildren = true;
        //     }
        //     this.children[level + 1] = result.data;
        //     },
        //     err => console.log('помилка завантаження категорій', err)
        //   );
    };
    ProductEditorComponent.prototype.onCatalogFormSubmit = function () {
        console.log('onCatalogFormSubmit');
    };
    ProductEditorComponent.prototype.addParents = function () {
        var control = this.catalogForm.get('parents');
        control.push(this.initParents());
    };
    ProductEditorComponent.prototype.removeParents = function (i) {
        var control = this.catalogForm.get('parents');
        control.removeAt(i);
    };
    ProductEditorComponent.prototype.initParents = function () {
        return new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
        ]);
    };
    ProductEditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-editor',
            template: __webpack_require__(/*! ./product-editor.component.html */ "./src/app/components/dashboard/product-editor/product-editor.component.html"),
            styles: [__webpack_require__(/*! ./product-editor.component.scss */ "./src/app/components/dashboard/product-editor/product-editor.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_catalog_service__WEBPACK_IMPORTED_MODULE_2__["CatalogService"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
    ], ProductEditorComponent);
    return ProductEditorComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/tools/tools.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/tools/tools.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\n  <div class=\"cell\" fxFlex=\"100\">\n\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"cell\">\n          <h2 class=\"mat-h2\">Інструменти</h2>\n        </div>\n      </div>\n\n      <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\n          <div fxFlex>\n            <h4 class=\"mat-h4\">favicon32x32</h4>\n          </div>\n          <div fxFlex fxLayoutAlign=\"center center\">\n            <img fxflex class=\"product-detail-image\" src=\"{{\n                config.imgPath +\n                config.cloudinary.cloud_name +\n                '/c_fill,w_32,h_32/' +\n                faviconFilename}}\"\n                 alt=\"icon\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\n          <div fxFlex>\n            <h4 class=\"mat-h4\">Grabo Logo 250x90</h4>\n          </div>\n          <div fxFlex fxLayoutAlign=\"center center\">\n            <img fxflex class=\"product-detail-image\" src=\"{{\n                config.imgPath +\n                config.cloudinary.cloud_name +\n                '/c_fill,w_250,h_90/' +\n                logoFilename}}\"\n                 alt=\"icon\">\n          </div>\n        </div>\n\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\n          <div fxFlex>\n            <h4 class=\"mat-h4\">Grabo Logo 140x50</h4>\n          </div>\n          <div fxFlex fxLayoutAlign=\"center center\">\n            <img fxflex class=\"product-detail-image\" src=\"{{\n                config.imgPath +\n                config.cloudinary.cloud_name +\n                '/c_fill,w_140,h_50/' +\n                logoFilename}}\"\n                 alt=\"icon\">\n          </div>\n        </div>\n\n      </div>\n\n      <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\n\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\n          <div fxFlex>\n            <h4 class=\"mat-h4\">512x512</h4>\n          </div>\n          <div fxFlex fxLayoutAlign=\"center center\">\n            <img fxflex class=\"product-detail-image\" src=\"{{\n              config.imgPath +\n              config.cloudinary.cloud_name +\n              '/c_fill,w_512,h_512/' +\n              iconFilename}}\"\n                 alt=\"icon\">\n          </div>\n        </div>\n\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\n          <div fxFlex>\n            <h4 class=\"mat-h4\">384x384</h4>\n          </div>\n          <div fxFlex fxLayoutAlign=\"center center\">\n            <img fxflex class=\"product-detail-image\" src=\"{{\n              config.imgPath +\n              config.cloudinary.cloud_name +\n              '/c_fill,w_384,h_384/' +\n              iconFilename}}\"\n                 alt=\"icon\">\n          </div>\n        </div>\n\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\n          <div fxFlex>\n            <h4 class=\"mat-h4\">192x192</h4>\n          </div>\n          <div fxFlex fxLayoutAlign=\"center center\">\n            <img fxflex class=\"product-detail-image\" src=\"{{\n              config.imgPath +\n              config.cloudinary.cloud_name +\n              '/c_fill,w_192,h_192/' +\n              iconFilename}}\"\n                 alt=\"icon\">\n          </div>\n        </div>\n\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\n          <div fxFlex>\n            <h4 class=\"mat-h4\">152x152</h4>\n          </div>\n          <div fxFlex fxLayoutAlign=\"center center\">\n            <img fxflex class=\"product-detail-image\" src=\"{{\n              config.imgPath +\n              config.cloudinary.cloud_name +\n              '/c_fill,w_152,h_152/' +\n              iconFilename}}\"\n                 alt=\"icon\">\n          </div>\n        </div>\n\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\n          <div fxFlex>\n            <h4 class=\"mat-h4\">144x144</h4>\n          </div>\n          <div fxFlex fxLayoutAlign=\"center center\">\n            <img fxflex class=\"product-detail-image\" src=\"{{\n              config.imgPath +\n              config.cloudinary.cloud_name +\n              '/c_fill,w_144,h_144/' +\n              iconFilename}}\"\n                 alt=\"icon\">\n          </div>\n        </div>\n\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\n          <div fxFlex>\n            <h4 class=\"mat-h4\">128x128</h4>\n          </div>\n          <div fxFlex fxLayoutAlign=\"center center\">\n            <img fxflex class=\"product-detail-image\" src=\"{{\n              config.imgPath +\n              config.cloudinary.cloud_name +\n              '/c_fill,w_128,h_128/' +\n              iconFilename}}\"\n                 alt=\"icon\">\n          </div>\n        </div>\n\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\n          <div fxFlex>\n            <h4 class=\"mat-h4\">96x96</h4>\n          </div>\n          <div fxFlex fxLayoutAlign=\"center center\">\n            <img fxflex class=\"product-detail-image\" src=\"{{\n              config.imgPath +\n              config.cloudinary.cloud_name +\n              '/c_fill,w_96,h_96/' +\n              iconFilename}}\"\n                 alt=\"icon\">\n          </div>\n        </div>\n\n        <div class=\"cell\" fxFlex.sm=\"100\" fxFlex.gt-sm=\"50\" fxLayout=\"column\" >\n          <div fxFlex>\n            <h4 class=\"mat-h4\">72x72</h4>\n          </div>\n          <div fxFlex fxLayoutAlign=\"center center\">\n            <img fxflex class=\"product-detail-image\" src=\"{{\n              config.imgPath +\n              config.cloudinary.cloud_name +\n              '/c_fill,w_72,h_72/' +\n              iconFilename}}\"\n                 alt=\"icon\">\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/dashboard/tools/tools.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/dashboard/tools/tools.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/tools/tools.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/tools/tools.component.ts ***!
  \***************************************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolsComponent = /** @class */ (function () {
    function ToolsComponent() {
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ToolsComponent.prototype.ngOnInit = function () {
        this.iconFilename = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"].logoLight + '.png';
        this.faviconFilename = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"].logoLight + '.png';
        this.logoFilename = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"].logoLight + '.png';
    };
    ToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.component.html */ "./src/app/components/dashboard/tools/tools.component.html"),
            styles: [__webpack_require__(/*! ./tools.component.scss */ "./src/app/components/dashboard/tools/tools.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=components-dashboard-dashboard-module.js.map