(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/dashboard/dashboard.module": [
		"./src/app/components/dashboard/dashboard.module.ts",
		"components-dashboard-dashboard-module~components-user-user-module",
		"components-dashboard-dashboard-module~components-mcs-mcs-module",
		"components-dashboard-dashboard-module"
	],
	"./components/mcs/mcs.module": [
		"./src/app/components/mcs/mcs.module.ts",
		"components-dashboard-dashboard-module~components-mcs-mcs-module"
	],
	"./components/products/products.module": [
		"./src/app/components/products/products.module.ts",
		"components-products-products-module"
	],
	"./components/user/user.module": [
		"./src/app/components/user/user.module.ts",
		"components-dashboard-dashboard-module~components-user-user-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/shared/page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _components_shared_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/feedback/feedback.component */ "./src/app/components/shared/feedback/feedback.component.ts");
/* harmony import */ var _components_shared_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/landing/landing.component */ "./src/app/components/shared/landing/landing.component.ts");
/* harmony import */ var _components_shared_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/about/about.component */ "./src/app/components/shared/about/about.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var appRoutes = [
    {
        path: 'products',
        loadChildren: './components/products/products.module#ProductsModule',
    },
    {
        path: 'mcs',
        loadChildren: './components/mcs/mcs.module#McsModule',
    },
    {
        path: 'about/ch',
        component: _components_shared_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"]
    },
    {
        path: 'dashboard',
        loadChildren: './components/dashboard/dashboard.module#DashboardModule',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: { auth: 'user' },
    },
    {
        path: 'user',
        loadChildren: './components/user/user.module#UserModule'
    },
    {
        path: 'feedback',
        component: _components_shared_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackComponent"]
    },
    { path: 'page-404', component: _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"] },
    { path: '', component: _components_shared_landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"], pathMatch: 'full' },
    // { path: '', loadChildren: './components/home/home.module#HomeModule', pathMatch: 'full' },
    { path: '**', component: _components_shared_page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header *ngIf=\"showHeader\"></app-header>\r\n<app-content></app-content>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.showHeader = false;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");

var config = {
    serverUrl: '/',
    defaultProductImg: 'default_product',
    defaultAvatar: 'default_avatar',
    logoLight: 'hmade_logo_light',
    logoDark: 'hmade_logo_dark',
    icon: 'hmade_icon',
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
        admin: ['casual', 'guest', 'user', 'manager', 'admin'],
        manager: ['casual', 'guest', 'user', 'manager'],
        user: ['casual', 'guest', 'user'],
        guest: ['casual', 'guest'],
        casual: ['casual']
    },
    imgPath: 'https://res.cloudinary.com/',
    cloudinary: {
        cloud_name: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].cloud_name
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/shared/confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var _components_shared_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/shared/design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _directives_scrolling_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./directives/scrolling.directive */ "./src/app/directives/scrolling.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _directives_scrolling_directive__WEBPACK_IMPORTED_MODULE_21__["ScrollingDirective"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _components_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaModule"].forRoot(),
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6__["RecaptchaFormsModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_17__["environment"].production }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
            ],
            providers: [
                _services_validate_service__WEBPACK_IMPORTED_MODULE_10__["ValidateService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_6__["RecaptchaFormsModule"],
                _services_catalog_service__WEBPACK_IMPORTED_MODULE_12__["CatalogService"],
                _services_product_service__WEBPACK_IMPORTED_MODULE_13__["ProductService"],
                _services_shared_service__WEBPACK_IMPORTED_MODULE_14__["SharedService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_15__["AuthGuard"],
            ],
            exports: [],
            entryComponents: [
                _components_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_18__["ConfirmPopupComponent"],
                _components_shared_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_19__["DesignPopupComponent"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/shared/about/about.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/about/about.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\r\n  <div class=\"container\">\r\n    <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n        <mat-card>\r\n          <mat-card-header>\r\n                <h1 class=\"mat-display-2\">Вітаємо на сайті!</h1>\r\n\r\n\r\n          </mat-card-header>\r\n          <mat-card-content>\r\n            <p class=\"text-justify muted mat-body-1\">\r\n            \r\n              Запрошуємо Вас до співпраці!\r\n            </p>\r\n          </mat-card-content>\r\n        </mat-card>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/about/about.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/about/about.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/shared/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/shared/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/comments/comments.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/comments/comments.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"app-container\">\r\n    <!-- <div class=\"padding-bottom-3\"> -->\r\n        <mat-card>\r\n            <form [formGroup]=\"commentForm\" #f=\"ngForm\" novalidate>\r\n                <div class=\"row\" fxLayout=\"row\">\r\n                  <div class=\"cell\" fxFlex=\"10\" fxLayoutAlign=\"center center\">\r\n\r\n                    <img *ngIf=\"user\" class=\"responsive-image\"\r\n                      src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_50,h_50,f_auto/' +\r\n                        user.avatar}}\" alt=\"avatar\">\r\n                    <img *ngIf=\"!user\" class=\"responsive-image\"\r\n                      src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_50,h_50,f_auto/' +\r\n                        config.defaultAvatar}}\" alt=\"avatar\">\r\n\r\n                  </div>\r\n                    <mat-form-field class=\"cell\" fxFlex=\"80\">\r\n                      <textarea matInput\r\n                        [placeholder]=\"allowTo('user') ?\r\n                          'Коментар' :\r\n                          allowTo('guest') ?\r\n                            'Для відправки коментарів верифікуйте пошту' :\r\n                            'Коментарі можуть залишати лише зареєстровані користувачі'\"\r\n                        formControlName=\"comment\" required>\r\n                      </textarea>\r\n                      <mat-error\r\n                        *ngIf=\"(commentForm.get('comment').errors?.minlength ||\r\n                        commentForm.get('comment').errors?.maxlength ||\r\n                        commentForm.get('comment').errors?.required) &&\r\n                        commentForm.get('comment').touched\">\r\n                        Довжина повинна бути від 3 до 200 символів\r\n                      </mat-error>\r\n                      <mat-error\r\n                        *ngIf=\"commentForm.get('comment').errors?.pattern &&\r\n                        commentForm.get('comment').touched\">\r\n                        Не використовуйте спеціальні символи\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  <div class=\"cell\" fxFlex=\"10\">\r\n                    <button mat-icon-button (click)=\"sendComment()\"  [disabled]=\"!commentForm.valid || !allowTo('user')\">\r\n                      <mat-icon>send</mat-icon>\r\n                    </button>\r\n           \r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"end\">\r\n                  <re-captcha [ngClass]=\"{'display-none': !commentForm.get('comment').valid}\"\r\n                    [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                    siteKey=\"6Lc0uE8UAAAAAKyekxrsdhSdrgV9zhPW-lMY-srm\">\r\n                  </re-captcha> \r\n                </div>\r\n              </form>\r\n        </mat-card>\r\n    <!-- </div> -->\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div *ngIf=\"comments\" class=\"cell\">\r\n        <p class=\"mat-body-1\">Показано<span class=\"mat-body-2\"> {{comments.length}} </span>коментарів з<span class=\"mat-body-2\"> {{commentsTotalLength}}</span></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row padding-bottom\" [ngClass]=\"{'muted-strong': !comment.display}\"\r\n     *ngFor=\"let comment of comments\" fxLayout=\"row\">\r\n      <div  class=\"cell\" fxFlex=\"10\" fxLayoutAlign=\"center center\">\r\n\r\n                <img *ngIf=\"comment.user && comment.user.avatar\" class=\"responsive-image\"\r\n                  src=\"{{\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_50,h_50,f_auto/' +\r\n                    comment.user.avatar}}\" alt=\"avatar\">\r\n                <img *ngIf=\"!comment.user\" class=\"responsive-image\"\r\n                  src=\"{{\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_50,h_50,f_auto/' +\r\n                    config.defaultAvatar}}\" alt=\"avatar\">\r\n      </div>\r\n      <div class=\"cell\" fxFlex=\"80\">\r\n        <p>\r\n          <span class=\"mat-body-2\">{{comment.user && comment.user.login ? comment.user.login : 'Гість'}}</span>\r\n          <span fxFlex></span>\r\n          <span class=\"mat-body-1\">{{comment.commentedAt | date: 'dd.MM.yyyy HH:mm'}}</span>\r\n        </p>\r\n        <p class=\"text-align-justify\">{{comment.comment}} {{comment | json}}</p>\r\n      </div>\r\n      <div class=\"cell\" fxFlex=\"10\">\r\n        <p *ngIf=\"allowTo('manager')\"><button class=\"mat-icon-button\" (click)=\"deleteComment(comment)\"><mat-icon class=\"mat-18\">delete_outline</mat-icon></button></p>\r\n        <p *ngIf=\"allowTo('manager') && !comment.display\">\r\n          <button class=\"mat-icon-button\" (click)=\"displayComment(true, comment._id)\"><mat-icon class=\"mat-18\">play_circle_outline</mat-icon></button>\r\n        </p>\r\n        <p *ngIf=\"allowTo('manager') && comment.display\">\r\n          <button class=\"mat-icon-button\" (click)=\"displayComment(false, comment._id)\"><mat-icon class=\"mat-18\">pause_circle_outline</mat-icon></button>\r\n        </p>\r\n\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"processing\" class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/comments/comments.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/comments/comments.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/comments/comments.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/comments/comments.component.ts ***!
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_social_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/social.service */ "./src/app/services/social.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(userService, socialService, dialog) {
        this.userService = userService;
        this.socialService = socialService;
        this.dialog = dialog;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
        this.comments = [];
        this.processing = false;
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
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
        this.userService.getUserLocal()
            .subscribe(function (user) {
            console.log('user', user);
            _this.user = user;
        });
        this.loadComments(-1, 0, 5, !this.allowTo('manager'));
    };
    // Listening of page bottom reached
    CommentsComponent.prototype.onScroll = function (event) {
        if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 2) {
            if (!this.processing && this.commentsTotalLength !== this.comments.length) {
                this.loadComments(-1, this.comments.length, 5, !this.allowTo('manager'));
            }
        }
    };
    CommentsComponent.prototype.loadComments = function (sort, skip, limit, displayFilter) {
        var _this = this;
        this.processing = true;
        this.socialService.getComments(this.parent_id, this.parentCategory, sort, skip, limit, displayFilter)
            .subscribe(function (result) {
            var _a;
            console.log('res', result);
            (_a = _this.comments).push.apply(_a, result.comments);
            _this.commentsTotalLength = result.commentsTotalLength;
            _this.processing = false;
        });
    };
    CommentsComponent.prototype.allowTo = function (permitedRole) {
        return this.userService.allowTo(permitedRole);
    };
    CommentsComponent.prototype.sendComment = function () {
        var _this = this;
        var comment = this.commentForm.get('comment').value;
        var recaptcha = this.commentForm.get('recaptcha').value;
        this.socialService.addComment(this.parent_id, this.parentCategory, comment, recaptcha)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (result) {
            if (result) {
                // successfuly added
                _this.mcFormDirective.resetForm();
                return _this.socialService.getComments(_this.parent_id, _this.parentCategory, -1, 0, 5, !_this.allowTo('manager'));
            }
            else {
                // not added, do nothing
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ comments: [], commentsTotalLength: 0 });
            }
        }))
            .subscribe(function (result) {
            if (result.comments.length) {
                _this.comments = result.comments;
                _this.commentsTotalLength = result.commentsTotalLength;
            }
        }, function (err) { return console.log('add comment err', err); });
    };
    CommentsComponent.prototype.deleteComment = function (comment) {
        var _this = this;
        var confirmObject = {
            message: "\u0414\u0456\u0439\u0441\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043A\u043E\u043C\u0435\u043D\u0442\u0430\u0440: " + comment.comment + " ?",
            data: { _id: comment._id }
        };
        var dialogRef = this.dialog.open(_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmPopupComponent"], {
            data: confirmObject,
        });
        dialogRef.afterClosed()
            .subscribe(function (res) {
            if (res.data.choice) {
                _this.socialService.deleteComment(_this.parent_id, _this.parentCategory, res.data._id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (result) {
                    if (result) {
                        // successfuly delete
                        return _this.socialService.getComments(_this.parent_id, _this.parentCategory, -1, 0, _this.comments.length, !_this.allowTo('manager'));
                    }
                    else {
                        // not delete, do nothing
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ comments: [], commentsTotalLength: 0 });
                    }
                }))
                    .subscribe(function (result) {
                    if (result.comments.length) {
                        _this.comments = result.comments;
                        _this.commentsTotalLength = result.commentsTotalLength;
                    }
                }, function (err) { return console.log('add comment err', err); });
            }
        }, function (err) { return console.log('err delete', err); });
    };
    CommentsComponent.prototype.displayComment = function (display, comment_id) {
        var _this = this;
        this.socialService.displayComment(this.parent_id, this.parentCategory, display, comment_id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (result) {
            if (result) {
                // successfuly updated
                return _this.socialService.getComments(_this.parent_id, _this.parentCategory, -1, 0, _this.comments.length, !_this.allowTo('manager'));
            }
            else {
                // not added, do nothing
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ comments: [], commentsTotalLength: 0 });
            }
        }))
            .subscribe(function (result) {
            if (result.comments.length) {
                _this.comments = result.comments;
                _this.commentsTotalLength = result.commentsTotalLength;
            }
        }, function (err) { return console.log('add comment err', err); });
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CommentsComponent.prototype, "onScroll", null);
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/components/shared/comments/comments.component.html"),
            styles: [__webpack_require__(/*! ./comments.component.scss */ "./src/app/components/shared/comments/comments.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            src_app_services_social_service__WEBPACK_IMPORTED_MODULE_5__["SocialService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/confirm-popup/confirm-popup.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/confirm-popup/confirm-popup.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  {{data.message}}\r\n</p>\r\n<button mat-button color=\"danger\" (click)=\"onClose(true, data.data)\">Так</button>\r\n<button mat-button color=\"primary\" (click)=\"onClose(false, null)\">Ні</button>"

/***/ }),

/***/ "./src/app/components/shared/confirm-popup/confirm-popup.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/confirm-popup/confirm-popup.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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


var ConfirmPopupComponent = /** @class */ (function () {
    function ConfirmPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmPopupComponent.prototype.ngOnInit = function () {
    };
    ConfirmPopupComponent.prototype.onClose = function (choice, _id) {
        this.confirmPopupData = { data: { choice: choice, _id: _id } };
        this.dialogRef.close(this.confirmPopupData);
    };
    ConfirmPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-popup',
            template: __webpack_require__(/*! ./confirm-popup.component.html */ "./src/app/components/shared/confirm-popup/confirm-popup.component.html"),
            styles: [__webpack_require__(/*! ./confirm-popup.component.scss */ "./src/app/components/shared/confirm-popup/confirm-popup.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ConfirmPopupComponent);
    return ConfirmPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/content/content.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/content/content.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-elevation-z4\" color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <a mat-button href=\"\">\r\n      <img src=\"./assets/images/hmade_logo_light.svg\" height=\"40px\">\r\n    </a>\r\n\r\n    <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n      <a *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\" mat-button\r\n         [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\"\r\n         [routerLinkActive]=\"['primary-light']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{mainMenuCommonItem.name}}\r\n      </a>\r\n    </div>\r\n    <div fxFlex></div>\r\n\r\n    <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n      <button *ngIf=\"user\"\r\n              mat-button [matMenuTriggerFor]=\"settingsMenu\" #settingsMenuTrigger=\"matMenuTrigger\"\r\n              (mouseover)=\"onSettingsMenuMouseover()\">\r\n        <mat-icon>settings</mat-icon><span> {{user.login}}</span>\r\n      </button>\r\n\r\n      <mat-menu #settingsMenu=\"matMenu\" xPosition=\"after\" yPosition=\"above\" [overlapTrigger]=\"false\">\r\n      <span (mouseleave)=\"onSettingsMenuMouseleave()\">\r\n      <a *ngIf=\"user\"\r\n         mat-menu-item [routerLink]=\"['/user/profile']\"\r\n         [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <mat-icon>account_circle</mat-icon><span>Профіль</span></a>\r\n      <a *ngIf=\"user && (user?.role === 'manager' || user?.role === 'admin')\"\r\n         mat-menu-item [routerLink]=\"['/dashboard']\"\r\n         [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <mat-icon>settings</mat-icon><span>Dashboard</span></a>\r\n      </span>\r\n      </mat-menu>\r\n      <a *ngIf='!user'\r\n      [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n      mat-button [routerLink]=\"['/user/login']\">Вхід</a>\r\n      <a *ngIf='user' mat-button (click)=\"userLocalLogout()\"><mat-icon>exit_to_app</mat-icon> Вихід</a>\r\n    </div>\r\n\r\n    <div class=\"cell\" fxShow=\"hide\" fxHide.lt-md=\"true\">\r\n      <a mat-button class=\"primary-light\"\r\n         href=\"tel:+380985443968\">\r\n        <mat-icon>phone</mat-icon> 098 544 39 68\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\">\r\n      <button mat-button (click)=\"sidenav.toggle()\">\r\n        <mat-icon *ngIf=\"sidenav.opened\">format_indent_increase</mat-icon>\r\n        <mat-icon *ngIf=\"!sidenav.opened\">menu</mat-icon>\r\n      </button>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>\r\n\r\n<mat-sidenav-container fxFlexFill>\r\n  <mat-sidenav #sidenav fxLayout=\"column\" class=\"theme-dark\"\r\n               position=\"end\" class=\"sidenav\" role=\"navigation\" mode=\"side\">\r\n    <div fxLayout=\"column\">\r\n      <mat-nav-list>\r\n        <mat-list-item *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\">\r\n          <a matLine\r\n             [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n             [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\" (click)=\"sidenav.toggle()\">\r\n            {{mainMenuCommonItem.name}}\r\n          </a>\r\n        </mat-list-item>\r\n\r\n        <mat-expansion-panel *ngIf=\"user\" class=\"mat-elevation-z0\">\r\n          <mat-expansion-panel-header class=\"sidenav-expansion-panel\">\r\n            <mat-panel-title>\r\n              <mat-list-item>\r\n                <mat-icon matListIcon>settings</mat-icon>\r\n                <span matLine>{{user.login}}</span>\r\n              </mat-list-item>\r\n            </mat-panel-title>\r\n\r\n          </mat-expansion-panel-header>\r\n          <mat-list-item *ngIf=\"user\">\r\n            <mat-icon matListIcon>account_circle</mat-icon>\r\n            <a matLine [routerLink]=\"['/user/profile']\"\r\n               [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"sidenav.toggle()\">\r\n              Профіль</a>\r\n          </mat-list-item>\r\n          <mat-list-item *ngIf=\"user && user?.role === 'manager' || user?.role === 'admin'\">\r\n            <mat-icon matListIcon>settings</mat-icon>\r\n            <a matLine [routerLink]=\"['/dashboard']\"\r\n               [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\" (click)=\"sidenav.toggle()\">\r\n              Dashboard</a>\r\n          </mat-list-item>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-list-item *ngIf='!user'>\r\n          <a matLine\r\n             [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n             [routerLink]=\"['/user/login']\" (click)=\"sidenav.toggle()\">Вхід</a>\r\n        </mat-list-item>\r\n        <mat-list-item *ngIf='user'>\r\n          <a matLine\r\n             (click)=\"userLocalLogout()\" (click)=\"sidenav.toggle()\">\r\n            Вихід\r\n          </a>\r\n          <mat-icon matListIcon>exit_to_app</mat-icon>\r\n        </mat-list-item>\r\n      </mat-nav-list>\r\n    </div>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

/***/ }),

/***/ "./src/app/components/shared/content/content.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/content/content.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ContentComponent = /** @class */ (function () {
    function ContentComponent(sharedService, userService, router, catalogService) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.catalogService = catalogService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
        this.hierarchyCategory = [];
    }
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getSharingEvent()
            .subscribe(function (event) {
            if (event[0] === 'closeSidenav') {
                _this.sidenav.close();
            }
        });
        // initial subscribe on user
        this.userService.getUserLocal()
            .subscribe(function (user) { return _this.user = user; });
        // initial login user, token will be taken from localStorage
        this.userService.userLocalLogin(null);
        // get main menu items
        this.catalogService.getMainMenu()
            .subscribe(function (menuItems) {
            _this.mainMenuCommonItems = menuItems.data.common;
            _this.mainMenuSystemItems = menuItems.data.system;
        }, function (err) {
            console.log(err.error);
        });
    };
    ContentComponent.prototype.userLocalLogout = function () {
        this.userService.userLocalLogout();
        this.router.navigate(['/user', 'login']);
    };
    ContentComponent.prototype.onSettingsMenuMouseover = function () {
        this.settingsMenuTrigger.openMenu();
    };
    ContentComponent.prototype.onSettingsMenuMouseleave = function () {
        this.settingsMenuTrigger.closeMenu();
    };
    ContentComponent.prototype.onSettingsSideMenuMouseover = function () {
        this.settingsSideMenuTrigger.openMenu();
    };
    ContentComponent.prototype.onSettingsSideMenuMouseleave = function () {
        this.settingsSideMenuTrigger.closeMenu();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('settingsMenuTrigger'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"])
    ], ContentComponent.prototype, "settingsMenuTrigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('settingsSideMenuTrigger'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"])
    ], ContentComponent.prototype, "settingsSideMenuTrigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"])
    ], ContentComponent.prototype, "sidenav", void 0);
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/components/shared/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/components/shared/content/content.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__["CatalogService"]])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/crsl/crsl.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/shared/crsl/crsl.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-horizontal-stepper class=\"crsl\" #stepper>\r\n  <ng-template matStepperIcon=\"edit\">\r\n  </ng-template>\r\n\r\n  <ng-template matStepperIcon=\"done\">\r\n  </ng-template>\r\n  <ng-template matStepperIcon=\"number\" let-index=\"index\">\r\n    <!--{{index + 10}}-->\r\n  </ng-template>\r\n\r\n  <mat-step *ngFor=\"let banner of homeBanner\">\r\n    <!--<img *ngIf=\"media.isActive('md')\" class=\"responsive-image-stretch\" src=\"{{-->\r\n    <img *ngIf=\"media.isActive('gt-md')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_760,h_350,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n    <img *ngIf=\"media.isActive('md')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_550,h_250,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n    <img *ngIf=\"media.isActive('sm')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_760,h_350,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n    <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_590,h_270,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n      <!--<div>-->\r\n        <!--<button mat-icon-button matStepperNext>-->\r\n          <!--<mat-icon>navigate_next</mat-icon></button>-->\r\n      <!--</div>-->\r\n  </mat-step>\r\n\r\n</mat-horizontal-stepper>\r\n"

/***/ }),

/***/ "./src/app/components/shared/crsl/crsl.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/shared/crsl/crsl.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CrslComponent = /** @class */ (function () {
    function CrslComponent(media) {
        this.media = media;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
        this.homeBanner = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"].homeBanner;
    }
    CrslComponent.prototype.ngOnInit = function () {
        // this.matStepper.selectionChange
        //   .subscribe(st => {
        //     // this.stepperIndex = st.selectedIndex;
        //     // clearInterval(this.interval);
        //     // this.setInterval();
        //     console.log('st', st);
        //   });
        this.setInterval();
        // console.log('matStepper', this.matStepper);
    };
    CrslComponent.prototype.setInterval = function () {
        var _this = this;
        return this.interval = setInterval(function () {
            if (_this.matStepper.selectedIndex === _this.stepperIndex) {
                _this.stepperIndex = _this.matStepper.selectedIndex;
                _this.matStepper.reset();
            }
            else {
                _this.stepperIndex = _this.matStepper.selectedIndex;
                _this.matStepper.next();
            }
        }, 4000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepper'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepper"])
    ], CrslComponent.prototype, "matStepper", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('stepperHeader'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepper"])
    ], CrslComponent.prototype, "matStepperHeader", void 0);
    CrslComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-crsl',
            template: __webpack_require__(/*! ./crsl.component.html */ "./src/app/components/shared/crsl/crsl.component.html"),
            styles: [__webpack_require__(/*! ./crsl.component.scss */ "./src/app/components/shared/crsl/crsl.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["ObservableMedia"]])
    ], CrslComponent);
    return CrslComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/design-popup/design-popup.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/design-popup/design-popup.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n  <div class=\"cell\" fxLayout>\r\n    <div fxFlex=\"calc(100%-40px)\" fxLayoutAlign=\"center center\">\r\n      <h3 class=\"h3 muted\">{{data.title}}</h3>\r\n    </div>\r\n\r\n    <div fxFlex=\"40px\" fxLayoutAlign=\"end center\">\r\n      <div>\r\n        <button mat-icon-button color=\"accent\" (click)=\"onClose()\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"designProducts\" class=\"container\">\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\" fxLayout=\"row\" fxFill=\"center\">\r\n\r\n        <mat-form-field fxFlex=\"100\">\r\n        <mat-select placeholder=\"Колекції\" #productSelect (valueChange)=\"onProductSelect($event)\">\r\n          <mat-option *ngFor=\"let product of designProducts\" [value]=\"product\">\r\n              {{product.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n          </mat-form-field>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"responsive-image-popup-container\">\r\n      <img class=\"responsive-image-popup\" src=\"{{\r\n          config.imgPath +\r\n          config.cloudinary.cloud_name +\r\n          cloudinaryOptions +\r\n          data.image}}\"\r\n           alt=\"design\">\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shared/design-popup/design-popup.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/components/shared/design-popup/design-popup.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
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





var DesignPopupComponent = /** @class */ (function () {
    // productForm: FormGroup;
    function DesignPopupComponent(sharedService, router, dialogRef, data) {
        this.sharedService = sharedService;
        this.router = router;
        this.dialogRef = dialogRef;
        this.data = data;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    DesignPopupComponent.prototype.ngOnInit = function () {
        this.data.cloudinaryOptions ?
            this.cloudinaryOptions = this.data.cloudinaryOptions :
            this.cloudinaryOptions = '/c_fill,w_650,h_650,f_auto/';
        this.designProducts = this.data.designProducts;
    };
    DesignPopupComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    DesignPopupComponent.prototype.onProductSelect = function (product) {
        if (this.data.closer) {
            this.sharedService.sharingEvent(['closeSidenav']);
        }
        this.onClose();
        this.router.navigate(['/products', 'ch', { outlets: { primary: [product.category_id[0], 'details', product._id],
                    breadcrumb: [product.category_id[0], 'details', product._id] } }], { queryParams: { name: product.name } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('productSelect'),
        __metadata("design:type", Object)
    ], DesignPopupComponent.prototype, "productSelect", void 0);
    DesignPopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-design-popup',
            template: __webpack_require__(/*! ./design-popup.component.html */ "./src/app/components/shared/design-popup/design-popup.component.html"),
            styles: [__webpack_require__(/*! ./design-popup.component.scss */ "./src/app/components/shared/design-popup/design-popup.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], DesignPopupComponent);
    return DesignPopupComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/feedback/feedback.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/feedback/feedback.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n    <div fxFlex.gt-xs=\"10\" fxFlex.gt-md=\"15\"></div>\r\n\r\n    <div class=\"cell\" fxFlex.gt-xs=\"80\" fxFlex.gt-md=\"70\">\r\n\r\n      <div class=\"centered-container-600\">\r\n        <mat-card  class=\"form-block\">\r\n          <mat-card-content>\r\n            <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n              <img class=\"responsive-image\" src=\"./assets/images/graboplast_logo.svg\" width=\"367px\">\r\n            </div>\r\n            <form #fForm=\"ngForm\" [formGroup]=\"feedbackForm\" (submit)=\"onFeedbackFormSubmit()\">\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">textsms</mat-icon>\r\n                </div>\r\n              <mat-form-field>\r\n                <textarea rows=\"5\" matInput placeholder=\"Повідомлення\" formControlName=\"message\" required></textarea>\r\n                <mat-error\r\n                  *ngIf=\"(feedbackForm.get('message').errors?.minlength ||\r\n                                    feedbackForm.get('message').errors?.maxlength ||\r\n                                    feedbackForm.get('message').errors?.required) &&\r\n                                    feedbackForm.get('message').touched\">\r\n                  Довжина повинна бути від 3 до 500 символів\r\n                </mat-error>\r\n              </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">account_circle</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Ваше ім'я\" formControlName=\"name\" required>\r\n                  <mat-error\r\n                    *ngIf=\"feedbackForm.get('contacts').errors?.required &&\r\n                        feedbackForm.get('name').touched\">\r\n                    Введіть ім'я\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">contacts</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Контактний номер або email\" formControlName=\"contacts\" required>\r\n                  <mat-error\r\n                    *ngIf=\"feedbackForm.get('contacts').errors?.required &&\r\n                        feedbackForm.get('contacts').touched\">\r\n                    Введіть котактну інформацію\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <re-captcha [ngClass]=\"{'display-none':\r\n          !feedbackForm.get('contacts').valid || !feedbackForm.get('contacts').valid ||\r\n          !feedbackForm.get('message').valid}\"\r\n                          [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                          siteKey=\"6Lc0uE8UAAAAAKyekxrsdhSdrgV9zhPW-lMY-srm\">\r\n              </re-captcha>\r\n              <!--<div *ngIf=\"!processing\" fxLayout=\"row\">-->\r\n                <!--<object type=\"image/svg+xml\" data=\"./assets/images/loading.svg\" width=\"50px\" height=\"20px\">-->\r\n                  <!--Loading..-->\r\n                <!--</object>-->\r\n              <!--</div>-->\r\n\r\n              <div class=\"submit-button-wrapper\">\r\n                <!--<span fxFlex></span>-->\r\n                <button mat-raised-button class=\"full-width\" color=\"primary\" [disabled]=\"!feedbackForm.valid || processing\">\r\n                  <mat-icon *ngIf=\"!processing\">message</mat-icon> Написати нам</button>\r\n              </div>\r\n\r\n            </form>\r\n          </mat-card-content>\r\n          <!--<img mat-card-image class=\"mat-card-image-bottom\" src=\"./assets/images/logo400x140-2.jpg\" alt=\"\">-->\r\n        </mat-card>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/feedback/feedback.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/feedback/feedback.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(location, sharedService, matSnackBar) {
        this.location = location;
        this.sharedService = sharedService;
        this.matSnackBar = matSnackBar;
        this.processing = false;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.feedbackForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500),
            ]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            contacts: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
            ]),
            recaptcha: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
            ])
        });
    };
    FeedbackComponent.prototype.onFeedbackFormSubmit = function () {
        var _this = this;
        this.processing = true;
        this.feedback = this.feedbackForm.value;
        this.sharedService.sendFeedbackMessage(this.feedback, this.feedbackForm.get('recaptcha').value)
            .subscribe(function (res) {
            // console.log('feedback ', res);
            _this.matSnackBar.open('Повідомлення надіслано. Ми зв\'яжемось з вами найближчим часом', '', { duration: 5000 });
            _this.processing = false;
            _this.resetForm();
            _this.location.back();
        }, function (err) {
            _this.processing = false;
            _this.matSnackBar.open('Сталася помилка. Повідомлення не надіслано. Спробуйте пізнше', '', { duration: 3000, panelClass: 'warn' });
            // console.log('feedback err ', err);
        });
    };
    FeedbackComponent.prototype.resetForm = function () {
        if (this.fFormDirective) {
            this.fFormDirective.resetForm();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('fForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"])
    ], FeedbackComponent.prototype, "fFormDirective", void 0);
    FeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__(/*! ./feedback.component.html */ "./src/app/components/shared/feedback/feedback.component.html"),
            styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/app/components/shared/feedback/feedback.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-elevation-z16 footer\" color=\"primary\">\r\n  <a fxHide.gt-sm=\"true\" mat-button class=\"primary-light\"\r\n     href=\"tel:+380985443968\">\r\n    <mat-icon>phone</mat-icon> 098 544 39 68\r\n  </a>\r\n  <div fxFlex></div>\r\n  <a mat-button [routerLink]=\"['/feedback']\" class=\"primary-light\"\r\n     [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <mat-icon>mail</mat-icon> Задати питання\r\n  </a>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/gallery/gallery.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/gallery/gallery.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n      <h1 class=\"mat-display-1\">Галерея</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\" *ngFor=\"let product of productsWithGallery\">\r\n        <mat-card>\r\n          <mat-card-subtitle>\r\n            <a mat-button\r\n               [routerLink]=\"['/products', 'ch', {outlets: {primary: [product.parent[0], 'details', product._id],\r\n                    breadcrumb: [product.parent[0], 'details', product._id]}}]\"\r\n               [queryParams]=\"{name: product.name}\"\r\n               [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n              {{product.name}}\r\n            </a>\r\n          </mat-card-subtitle>\r\n          <div class=\"row\" fxLayout=\"row\">\r\n            <div fxFlex=\"100\" class=\"cell text-justify\" [innerHTML]=\"product.description\"></div>\r\n\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"33\" fxFlex.gt-sm=\"25\" class=\"cell\"\r\n                 fxLayout fxLayoutAlign=\"center center\"\r\n                 *ngFor=\"let productAsset of product.assets\">\r\n              <mat-card *ngIf=\"media.isActive('xs')\" class=\"no-padding\">\r\n                <mat-card-header fxLayoutAlign=\"center center\">\r\n                  <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\r\n                </mat-card-header>\r\n                <mat-card-content fxLayoutAlign=\"center center\">\r\n\r\n                  <img *ngIf=\"productAsset\" class=\"responsive-image hover-cursor\"\r\n                       (click)=\"openDialog(productAsset, product.name)\"\r\n                       src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_590,h_295,f_auto/' +\r\n                      productAsset}}\"\r\n                       alt=\"design\">\r\n                </mat-card-content>\r\n              </mat-card>\r\n\r\n\r\n              <mat-card *ngIf=\"media.isActive('gt-xs')\" class=\"no-padding\" fxFlex.gt-xs=\"100\">\r\n                <mat-card-header fxLayoutAlign=\"center center\">\r\n                  <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\r\n                </mat-card-header>\r\n                <mat-card-content fxLayoutAlign=\"center center\">\r\n                  <img *ngIf=\"productAsset\" class=\"responsive-image-stretch hover-cursor\"\r\n                       (click)=\"openDialog(productAsset, product.name)\"\r\n                       src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_350,h_175,f_auto/' +\r\n                      productAsset}}\"\r\n                       alt=\"design\">\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shared/gallery/gallery.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/gallery/gallery.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
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






var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(dialog, media, productService) {
        this.dialog = dialog;
        this.media = media;
        this.productService = productService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
    }
    GalleryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProductsWithGallery()
            .subscribe(function (result) { return _this.productsWithGallery = result.data; }, function (err) { return console.log('getProductsWithGallery error'); });
    };
    GalleryComponent.prototype.openDialog = function (image, title) {
        var imageObject = {
            image: image,
            cloudinaryOptions: '/c_fill,w_1100,h_550,f_auto/',
            title: title
        };
        var dialogRef = this.dialog.open(_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_2__["DesignPopupComponent"], {
            // width: '400px',
            data: imageObject,
            panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
            console.log('result popup', result);
        }, function (err) { return console.log('err delete', err); });
    };
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery',
            template: __webpack_require__(/*! ./gallery.component.html */ "./src/app/components/shared/gallery/gallery.component.html"),
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/app/components/shared/gallery/gallery.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["ObservableMedia"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container primary-background\" id=\"header\">\r\n\r\n  <div class=\"container\" fxHide.lt-md=\"true\">\r\n    <div class=\"row primary-background\">\r\n      <div class=\"cell\">\r\n        <a href=\"\">\r\n          <img src=\"./assets/images/hmade_logo_light.svg\" height=\"60px\">\r\n        </a>\r\n      </div>\r\n      <div fxFlex></div>\r\n    <div class=\"cell\">\r\n      <div class=\"row\" fxLayout=\"row\">\r\n        <div class=\"cell\" fxFlex=\"100\">\r\n          <a mat-button [routerLink]=\"['/feedback']\" class=\"muted\"\r\n             [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <mat-icon>mail</mat-icon> Задати питання\r\n          </a>\r\n        </div>\r\n        <div class=\"cell\" fxFlex=\"100\">\r\n          <a mat-button class=\"muted\"\r\n             href=\"tel:+380985443968\">\r\n            <mat-icon>phone</mat-icon> 098 544 39 68\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/shared/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/shared/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/landing/landing.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/landing/landing.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home-container\">\r\n  <div id=\"home-left\">\r\n    <img src=\"./assets/images/hmade_logo_dark.svg\" id=\"home-logo\" alt=\"logo\">\r\n    <div>\r\n      <!--<a mat-flat-button class=\"radius-5\" href=\"/products/ch\" id=\"home-action\">Перейти</a>-->\r\n      <!--<button mat-fab-button class=\"radius-5\" (click)=\"onScroll()\">Down</button>-->\r\n      <button\r\n\r\n        color=\"primary\" mat-mini-fab (click)=\"onScroll()\" id=\"scroll-down-btn\"><mat-icon>keyboard_arrow_down</mat-icon></button> <!--*ngIf=\"media.isActive('lt-md')\" -->\r\n    </div>\r\n  </div>\r\n  <div id=\"home-right\" #scrollPoint>\r\n    <p>right</p>\r\n  </div>\r\n  <div id=\"home-bottom\">\r\n    <div fxLayout=\"row full-width\">\r\n      <div fxFlex=\"10\"></div>\r\n      <div class=\"row wrap full-width\" fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n        <div class=\"cell-padding\" fxFlex=\"1 1 auto\" *ngFor=\"let descendant of descendants\" fxLayout=\"row\">\r\n          <a fxFlex=\"1 1 auto\" mat-stroked-button class=\"radius-5 text-center\" color=\"accent\"\r\n             [routerLink]=\"['/products', 'ch', {outlets: {primary: [descendant._id], breadcrumb: [descendant._id]}}]\"\r\n             [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n             {{descendant.name}}\r\n          </a>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/shared/landing/landing.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/landing/landing.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LandingComponent = /** @class */ (function () {
    function LandingComponent(catalogService, media) {
        this.catalogService = catalogService;
        this.media = media;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalogService.getChildren('products')
            .subscribe(function (result) { return _this.descendants = result.data; }, function (err) { return console.log('mainPageProducts load error', err); });
    };
    LandingComponent.prototype.onScroll = function () {
        this.scrollPoint.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollPoint'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LandingComponent.prototype, "scrollPoint", void 0);
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/shared/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/components/shared/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_catalog_service__WEBPACK_IMPORTED_MODULE_1__["CatalogService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["ObservableMedia"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/page-404/page-404.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/page-404/page-404.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-404 works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/shared/page-404/page-404.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/shared/page-404/page-404.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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

var Page404Component = /** @class */ (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-404',
            template: __webpack_require__(/*! ./page-404.component.html */ "./src/app/components/shared/page-404/page-404.component.html"),
            styles: [__webpack_require__(/*! ./page-404.component.scss */ "./src/app/components/shared/page-404/page-404.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "./src/app/components/shared/product-item-brief/product-item-brief.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-brief/product-item-brief.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-content class=\"wrap\" fxLayot=\"row\">\r\n    <div *ngIf=\"product\" class=\"container-px0\" fxFlex=\"100\">\r\n      <div class=\"row\" fxLayout=\"row\">\r\n          <section class=\"cell-px0 social-feed-section\" fxFlex=\"100\" fxLayout=\"row\">\r\n              <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                <mat-icon>thumb_up_alt</mat-icon>\r\n                <span>{{product.likes}}</span>\r\n              </div>\r\n              <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                  <mat-icon>thumb_down_alt</mat-icon>\r\n                  <span>{{product.dislikes}}</span>\r\n              </div>\r\n              <div *ngIf=\"config.social.showViews\" class=\"item text-align-center muted\" fxFlex>\r\n                  <mat-icon>remove_red_eye</mat-icon>\r\n                  <span>{{product.views}}</span>\r\n              </div>\r\n              <div *ngIf=\"config.social.showComments\" class=\"item text-align-center muted\" fxFlex>\r\n                  <mat-icon>comment</mat-icon>\r\n                  <span>{{product.comments.length}}</span>\r\n              </div>\r\n          </section>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"mat-card-wide-image\" fxLayout=\"row\">\r\n\r\n      <!-- product level (no children)-->\r\n      <div *ngIf=\"product\" fxFlex=\"100\">\r\n\r\n        <img *ngIf=\"media.isActive('gt-sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_400,h_200,f_auto/' +\r\n              product.menuImage}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_460,h_230,f_auto/' +\r\n              product.menuImage}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image-stretch\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_590,h_295,f_auto/' +\r\n            product.menuImage}}\"\r\n             alt=\"Image\">\r\n      </div>\r\n\r\n      <!-- catalog level -->\r\n      <div *ngIf=\"child\" fxFlex=\"100\">\r\n        <img *ngIf=\"media.isActive('gt-sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_400,h_200,f_auto/' +\r\n              child.assets[0]}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_460,h_230,f_auto/' +\r\n              child.assets[0]}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image-stretch\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_590,h_295,f_auto/' +\r\n            child.assets[0]}}\"\r\n             alt=\"Image\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- product level (no children)-->\r\n    <section *ngIf=\"!child && category_id && product\" class=\"row product-brief-section\" fxFlex=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n        <h2 class=\"mat-h2\">{{product.name}}</h2>\r\n      </div>\r\n      <div class=\"cell product-brief-description\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n        <p class=\"mat-body\">{{product.description}}</p>\r\n      </div>\r\n    </section>\r\n    <section *ngIf=\"!child && category_id && product\" class=\"cell-px0 social-feed-section\" fxFlex=\"100\" fxLayout=\"row\">\r\n      <div class=\"item text-align-center\" fxFlex>\r\n        <mat-icon>swap_horiz</mat-icon>\r\n        <span> {{product?.dimensions?.width}}</span>\r\n        <span> см</span>\r\n      </div>\r\n      <div class=\"item text-align-center\" fxFlex>\r\n        <mat-icon>swap_vert</mat-icon>\r\n        <span> {{product?.dimensions?.height}}</span>\r\n        <span> см</span>\r\n      </div>\r\n      </section>\r\n\r\n  </mat-card-content>\r\n  <mat-card-actions fxLayout=\"row\">\r\n    <div fxFlex>\r\n      <!--using with catalog, when no children (product level)\r\n      category_id for breadcrumb-->\r\n      <!-- <a *ngIf=\"!child && category_id\" mat-button\r\n         [routerLink]=\"['/products', 'ch', {outlets: {primary: [category_id, 'details', product._id],\r\n         breadcrumb: [category_id, 'details', product._id]}}]\"\r\n         [queryParams]=\"{name: product.name}\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{product.name}}\r\n      </a> -->\r\n      <!--using with dashboard-->\r\n      <a *ngIf=\"!child && !category_id\" mat-button\r\n         [routerLink]=\"['/dashboard', 'product-editor-edit', parentCategory_id, parentCategoryName, product._id]\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{product.name}}\r\n      </a>\r\n      <!--using with catalog, when children present-->\r\n      <a *ngIf=\"child\" mat-button\r\n         [routerLink]=\"['/products', 'ch', {outlets: {primary: [child._id], breadcrumb: [child._id]}}]\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{child.name}}\r\n      </a>\r\n    </div>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/shared/product-item-brief/product-item-brief.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-brief/product-item-brief.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductItemBriefComponent = /** @class */ (function () {
    function ProductItemBriefComponent(media) {
        this.media = media;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ProductItemBriefComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemBriefComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemBriefComponent.prototype, "category_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemBriefComponent.prototype, "parentCategory_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemBriefComponent.prototype, "parentCategoryName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemBriefComponent.prototype, "child", void 0);
    ProductItemBriefComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-item-brief',
            template: __webpack_require__(/*! ./product-item-brief.component.html */ "./src/app/components/shared/product-item-brief/product-item-brief.component.html"),
            styles: [__webpack_require__(/*! ./product-item-brief.component.scss */ "./src/app/components/shared/product-item-brief/product-item-brief.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], ProductItemBriefComponent);
    return ProductItemBriefComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/product-item-detail/product-item-detail.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-detail/product-item-detail.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n  <!--<div class=\"item\" fxFlex>-->\r\n    <mat-card *ngIf=\"product\" [ngClass]=\"{'mat-elevation-z0': media.isActive('gt-sm')}\">\r\n      <mat-card-header>\r\n        <h1 class=\"mat-display-2\">{{product.name}}</h1>\r\n        <p>{{product | json}}</p>\r\n      </mat-card-header>\r\n      <mat-card-content>\r\n          <h2 class=\"mat-h2\">Created at: {{product.createdAt | date:'dd MM yyyy HH:mm:ss'}}</h2>\r\n          <h2 class=\"mat-h2\">Updated at: {{product.updatedAt | date:'dd MM yyyy HH:mm:ss'}}</h2>\r\n\r\n        <div class=\"row\" fxLayout>\r\n          <div class=\"cell margin-bottom\" fxFlex>\r\n            <p class=\"mat-body text-justify\" [innerHTML]=\"product.description\"></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" fxLayout=\"row\">\r\n\r\n          <div class=\"cell\" fxFlex.lt-xl=\"100\" fxFlex.gt-md=\"65\" fxLayout=\"column\">\r\n\r\n            <div class=\"row margin-bottom\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <!--<div fxFlex=\"100\">-->\r\n                  <img class=\"responsive-image\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_535,h_350,f_auto/' +\r\n              product.mainImage}}\"\r\n                       alt=\"designImage\">\r\n                <!--</div>-->\r\n\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row margin-bottom\" fxLayout=\"column\" fxLayout.gt-xs=\"row\" fxLayoutAlign=\"center center\">\r\n                <div fxFlex.gt-xs=\"33\" class=\"cell\" *ngFor=\"let asset of product.assets\">\r\n                  <div fxFlex=\"100\">\r\n                    <img *ngIf=\"media.isActive('gt-xs')\" (click)=\"openDialog(asset, '/c_fill,w_1100,h_550,f_auto/', null)\"\r\n                         class=\"responsive-image hover-cursor\" src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_260,h_170,f_auto/' +\r\n                        asset}}\"\r\n                                       alt=\"designImage\">\r\n                    <img *ngIf=\"media.isActive('xs')\" (click)=\"openDialog(asset, '/c_fill,w_1100,h_550,f_auto/', null)\"\r\n                         class=\"responsive-image hover-cursor\" src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_535,h_350,f_auto/' +\r\n                        asset}}\"\r\n                         alt=\"designImage\">\r\n\r\n                  </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n          \r\n          </div>\r\n\r\n          <div class=\"cell\" fxFlex.gt-md=\"35\" fxFlex.lt-xl=\"100\">\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </mat-card-content>\r\n      <!--<mat-card-actions>-->\r\n      <!--</mat-card-actions>-->\r\n    </mat-card>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/shared/product-item-detail/product-item-detail.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-detail/product-item-detail.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
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







var ProductItemDetailComponent = /** @class */ (function () {
    function ProductItemDetailComponent(dialog, media, productService, route) {
        this.dialog = dialog;
        this.media = media;
        this.productService = productService;
        this.route = route;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ProductItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.increaseViews(this.product._id).subscribe(function (result) { return _this.product = result.data; });
    };
    ProductItemDetailComponent.prototype.ngOnChanges = function (changes) {
        var productChange = changes.product;
        // console.log('prev value: ', productChange.previousValue);
        // console.log('got name: ', productChange.currentValue);
        // console.log('productChange: ', productChange);
        if (productChange) {
            console.log('simple changes product');
            // this.getRecommendations();
        }
    };
    // takes design object (from local designs array) by design_id
    // getDesign(_id) {
    //   return this.designs.filter(design => design._id === _id)[0];
    // }
    ProductItemDetailComponent.prototype.openDialog = function (image, cloudinaryOptions, title) {
        var imageObject = {
            image: image,
            cloudinaryOptions: cloudinaryOptions,
            title: title
        };
        var dialogRef = this.dialog.open(_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_3__["DesignPopupComponent"], {
            // height: '80vh',
            data: imageObject,
            panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
        }, function (err) { return console.log('err delete', err); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemDetailComponent.prototype, "product", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemDetailComponent.prototype, "category_id", void 0);
    ProductItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-item-detail',
            template: __webpack_require__(/*! ./product-item-detail.component.html */ "./src/app/components/shared/product-item-detail/product-item-detail.component.html"),
            styles: [__webpack_require__(/*! ./product-item-detail.component.scss */ "./src/app/components/shared/product-item-detail/product-item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["ObservableMedia"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], ProductItemDetailComponent);
    return ProductItemDetailComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-404/page-404.component */ "./src/app/components/shared/page-404/page-404.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var _product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-item-brief/product-item-brief.component */ "./src/app/components/shared/product-item-brief/product-item-brief.component.ts");
/* harmony import */ var _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-item-detail/product-item-detail.component */ "./src/app/components/shared/product-item-detail/product-item-detail.component.ts");
/* harmony import */ var _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _crsl_crsl_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./crsl/crsl.component */ "./src/app/components/shared/crsl/crsl.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/components/shared/feedback/feedback.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-recaptcha/forms */ "./node_modules/ng-recaptcha/forms.js");
/* harmony import */ var ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/components/shared/gallery/gallery.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/components/shared/header/header.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/components/shared/landing/landing.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./content/content.component */ "./src/app/components/shared/content/content.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./about/about.component */ "./src/app/components/shared/about/about.component.ts");
/* harmony import */ var _comments_comments_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./comments/comments.component */ "./src/app/components/shared/comments/comments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_12__["RecaptchaModule"],
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_13__["RecaptchaFormsModule"]
            ],
            exports: [
                _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"],
                _product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_6__["ProductItemBriefComponent"],
                _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemDetailComponent"],
                _crsl_crsl_component__WEBPACK_IMPORTED_MODULE_9__["CrslComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__["LandingComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_18__["ContentComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_20__["CommentsComponent"],
            ],
            declarations: [
                _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"],
                _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmPopupComponent"],
                _product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_6__["ProductItemBriefComponent"],
                _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemDetailComponent"],
                _design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_8__["DesignPopupComponent"],
                _crsl_crsl_component__WEBPACK_IMPORTED_MODULE_9__["CrslComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_14__["GalleryComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__["LandingComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_18__["ContentComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_20__["CommentsComponent"],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



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

var ScrollingDirective = /** @class */ (function () {
    function ScrollingDirective() {
    }
    ScrollingDirective.prototype.onWindowScroll = function (event) {
        // console.log('directive');
        // // do tracking
        // const tracker = event.target;
        // if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight) {
        //   console.log('youre at the bottom of the page');
        // }
        // const limit = tracker.scrollHeight - tracker.clientHeight;
        // console.log(event.target.scrollTop, limit);
        // if (event.target.scrollTop === limit) {
        //   console.log('end reached');
        // }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollingDirective.prototype, "onWindowScroll", null);
    ScrollingDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appScrolling]'
        }),
        __metadata("design:paramtypes", [])
    ], ScrollingDirective);
    return ScrollingDirective;
}());



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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService) {
        this.userService = userService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var requiredRole = next.data.auth; // from routing.module
        return this.userService.userCheckRole(requiredRole).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (permission) { return permission.data; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false); }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { MatIconModule } from '@angular/material/icon';

var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CatalogService = /** @class */ (function () {
    function CatalogService(http) {
        this.http = http;
    }
    CatalogService.prototype.getMainMenu = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/catalog/get-main-menu', httpOptions);
    };
    CatalogService.prototype.getAllParents = function (category_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category_id', category_id)
        };
        return this.http.get('api/catalog/get-all-parents', httpOptions);
    };
    /**
     *
     *
     * @param {string} _id
     * @returns {Observable<IResponse>}
     * @memberof CatalogService
     */
    CatalogService.prototype.getPrefix = function (_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    _id: _id
                } })
        };
        return this.http.get('api/catalog/get-prefix', httpOptions);
    };
    /**
   *
   *
   * @param {string} _id
   * @returns {Observable<IResponse>}
   * @memberof CatalogService
   */
    CatalogService.prototype.getSiblings = function (_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    _id: _id
                } })
        };
        return this.http.get('api/catalog/get-siblings', httpOptions);
    };
    /**
     *
     *
     * @param {string} parent
     * @param {number} depth
     * @returns {Observable<IResponse>}
     * @memberof CatalogService
     */
    CatalogService.prototype.getDescendants = function (parent, depth) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    parent: parent,
                    depth: depth + ''
                } })
        };
        return this.http.get('api/catalog/get-descendants', httpOptions);
    };
    /**
     *
     *
     * @param {string} parent
     * @returns {Observable<IResponse>}
     * @memberof CatalogService
     */
    CatalogService.prototype.getChildren = function (parent) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    parent: parent
                } })
        };
        return this.http.get('api/catalog/get-Children', httpOptions);
    };
    /**
     *
     *
     * @param {string} _id
     * @returns {Observable<IResponse>}
     * @memberof CatalogService
     */
    CatalogService.prototype.getCategoryById = function (_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    _id: _id
                } })
        };
        return this.http.get('api/catalog/get-category-by-id', httpOptions);
    };
    CatalogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CatalogService);
    return CatalogService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductService = /** @class */ (function () {
    function ProductService(http, userService) {
        this.http = http;
        this.userService = userService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_4__["config"];
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
    ProductService.prototype.getProductsWithGallery = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-products-with-gallery', httpOptions);
    };
    ProductService.prototype.getProductsByDesignId = function (design_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('design_id', design_id)
        };
        return this.http.get('api/product/get-products-by-design-id', httpOptions);
    };
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
    ProductService.prototype.getProducts = function (category) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('category', category)
        };
        return this.http.get('api/product/get-products', httpOptions);
    };
    ProductService.prototype.getMainPageProducts = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-main-page-products', httpOptions);
    };
    ProductService.prototype.productAddImage = function (file, sku) {
        console.log('file', file);
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('sku', sku);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-image', formData, httpOptions);
    };
    ProductService.prototype.productCreate = function (product) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.post('api/product/create', product, httpOptions);
    };
    ProductService.prototype.productEdit = function (product) {
        console.log('prodEdit', product);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/product/edit', product, httpOptions);
    };
    ProductService.prototype.productDelete = function (_id) {
        console.log('config', _app_config__WEBPACK_IMPORTED_MODULE_4__["config"].serverUrl);
        console.log('this.config', this.config.serverUrl);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.delete('api/product/delete/' + _id, httpOptions);
    };
    ProductService.prototype.productAddBriefImage = function (file, _id) {
        console.log('file', file);
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-brief-image', formData, httpOptions);
    };
    ProductService.prototype.productAddAssets = function (file, _id) {
        console.log('file', file);
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-assets', formData, httpOptions);
    };
    ProductService.prototype.getTechAssets = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ success: true, message: '', data: this.config.techAssets });
    };
    ProductService.prototype.getCertAssets = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ success: true, message: '', data: this.config.certAssets });
    };
    ProductService.prototype.productAddTechAssets = function (file, _id) {
        console.log('file', file);
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-techassets', formData, httpOptions);
    };
    /**
     *
     *
     * @param {File} file
     * @param {string} _id
     * @returns {Observable<IResponse>}
     * @memberof ProductService
     */
    ProductService.prototype.productAddMenuImage = function (file, _id) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-menu-image', formData, httpOptions);
    };
    /**
     *
     *
     * @param {string} _id
     * @returns {Observable<IResponse>}
     * @memberof ProductService
     */
    ProductService.prototype.increaseViews = function (_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('_id', _id)
        };
        return this.http.get('api/product/increase-views', httpOptions);
    };
    /**
     *
     *
     * @param {File} file
     * @param {string} _id
     * @returns {Observable<IResponse>}
     * @memberof ProductService
     */
    ProductService.prototype.productAddMainImage = function (file, _id) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/product/add-main-image', formData, httpOptions);
    };
    /**
     *
     *
     * @param {File} file
     * @returns {IResponse}
     * @memberof ProductService
     */
    ProductService.prototype.checkFile = function (file) {
        if (!file) {
            return ({ success: false, message: 'Файл не вибрано' });
        }
        else if (file.size > 10485760) { // 10 * 1024 * 1024
            return ({ success: false, message: 'Розмір файлу повинен бути менше 10Мб' });
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
    };
    /**
     *
     *
     * @param {IProduct} product
     * @returns {Observable<IResponse>}
     * @memberof ProductService
     */
    ProductService.prototype.productUpsert = function (product) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.post('api/product/upsert', product, httpOptions);
    };
    /**
     *
     *
     * @returns {Observable<{_id: string}[]>}
     * @memberof ProductService
     */
    ProductService.prototype.getSkuList = function () {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.get('api/product/get-sku-list', httpOptions);
    };
    /**
     *
     *
     * @param {string} _id
     * @param {string} collection
     * @param {boolean} [displayFilter]
     * @returns {Observable<IResponse>}
     * @memberof ProductService
     */
    ProductService.prototype.getProductById = function (_id, collection, displayFilter) {
        if (!displayFilter) {
            displayFilter = false;
        }
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('_id', _id)
                .set('displayFilter', displayFilter + '')
                .set('collection', collection)
        };
        return this.http.get('api/product/get-product-by-id', httpOptions);
    };
    /**
     *
     *
     * @param {string} parent
     * @param {string} collection
     * @param {boolean} [displayFilter]
     * @returns {Observable<IResponse>}
     * @memberof ProductService
     */
    ProductService.prototype.getProductsByParent = function (parent, collection, displayFilter) {
        if (!displayFilter) {
            displayFilter = false;
        }
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('parent', parent)
                .set('displayFilter', displayFilter + '')
                .set('collection', collection)
        };
        return this.http.get('api/product/get-products-by-parent', httpOptions);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SharedService = /** @class */ (function () {
    function SharedService(http) {
        this.http = http;
        this._shareEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.shareEvent$ = this._shareEvent.asObservable();
    }
    // sharing data between components
    SharedService.prototype.sharingEvent = function (x) {
        this._shareEvent.next(x);
    };
    SharedService.prototype.getSharingEvent = function () {
        return this.shareEvent$;
    };
    // ['updateDesigns'] design-item-component => design-editor-component
    // ['closeSidenav'] design-popup-component => app-component
    // sending feedback message
    SharedService.prototype.sendFeedbackMessage = function (feedback, recaptcha) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({ fromObject: {
                    recaptcha: recaptcha
                } })
        };
        return this.http.post('api/shared/send-feedback-message', feedback, httpOptions);
    };
    SharedService.prototype.checkFile = function (file) {
        if (!file) {
            return ({ success: false, message: 'Файл не вибрано' });
        }
        else if (file.size > 10485760) { // 10 * 1024 * 1024
            return ({ success: false, message: 'Розмір файлу повинен бути менше 10Мб' });
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
    };
    SharedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SharedService);
    return SharedService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SocialService = /** @class */ (function () {
    function SocialService(userService, http) {
        this.userService = userService;
        this.http = http;
    }
    SocialService.prototype.deleteComment = function (parent_id, parentCategory, comment_id) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('parent_id', parent_id)
                .set('parentCategory', parentCategory)
                .set('comment_id', comment_id)
        };
        return this.http.delete('api/social/delete-comment/', httpOptions);
    };
    SocialService.prototype.addComment = function (parent_id, parentCategory, comment, recaptcha) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    recaptcha: recaptcha
                } })
        };
        return this.http.post('api/social/add-comment', { parent_id: parent_id, parentCategory: parentCategory, comment: comment }, httpOptions);
    };
    SocialService.prototype.getComments = function (parent_id, parentCategory, sort, skip, limit, displayFilter) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('parent_id', parent_id)
                .set('parentCategory', parentCategory)
                .set('sort', sort + '')
                .set('skip', skip + '')
                .set('limit', limit + '')
                .set('displayFilter', displayFilter + '')
        };
        return this.http.get('api/social/get-comments', httpOptions);
    };
    SocialService.prototype.displayComment = function (parent_id, parentCategory, display, comment_id) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/social/display-comment', { parent_id: parent_id, parentCategory: parentCategory, display: display, comment_id: comment_id }, httpOptions);
    };
    SocialService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SocialService);
    return SocialService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this._logging = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    UserService.prototype.userPasswordResetEmail = function (email, recaptcha) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    email: email, recaptcha: recaptcha
                } })
        };
        return this.http.get('api/user/password-reset-check-email', httpOptions);
    };
    UserService.prototype.userPasswordResetCode = function (code, codeToken) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': codeToken
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    code: code,
                } })
        };
        return this.http.get('api/user/password-reset-check-code', httpOptions);
    };
    UserService.prototype.userPasswordReset = function (password, passwordResetToken) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': passwordResetToken
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    password: password,
                } })
        };
        return this.http.get('api/user/password-reset', httpOptions);
    };
    UserService.prototype.userEmailVerification = function () {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.get('api/user/email-verification-send', httpOptions);
    };
    UserService.prototype.userCreate = function (user, recaptcha) {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    recaptcha: recaptcha
                } })
        };
        return this.http.post('api/user/create', user, httpOptions);
    };
    UserService.prototype.userLogin = function (user) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    login: user.login,
                    password: user.password
                } })
        };
        return this.http.get('api/user/login', httpOptions);
    };
    UserService.prototype.userGetProfile = function () {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
        };
        return this.http.get('api/user/profile', httpOptions);
    };
    UserService.prototype.allowTo = function (permitedRole) {
        var permissions = _app_config__WEBPACK_IMPORTED_MODULE_4__["config"].permissions;
        var user = this.userLocalGetCredentials('token');
        if (!user) {
            return false;
        }
        var roleFromLocalStorage = user.role;
        if (permissions[roleFromLocalStorage].indexOf(permitedRole) >= 0) {
            return true;
        }
        else {
            return false;
        }
        // return this.getUserLocal().pipe(
        //   mergeMap(
        //       user => {
        //         if (!user) {
        //           return of(false);
        //         }
        //         const roleFromLocalStorage = user.role;
        //         if (permissions[roleFromLocalStorage].indexOf(permitedRole) >= 0) {
        //           return of(true);
        //         } else {
        //           return of(false);
        //         }
        //     }
        //   )
        // );
    };
    UserService.prototype.userCheckRole = function (role) {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: "role=" + role })
        };
        return this.http.get('api/user/role', httpOptions);
    };
    UserService.prototype.userEdit = function (data) {
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/user/edit', data, httpOptions);
    };
    UserService.prototype.userEditAvatar = function (file) {
        // uploadPic(file, user) {
        var formData = new FormData();
        // for (let i = 0; i < files.length; i++) {
        //   formData.append('file[]', files[i]);
        // }
        formData.append('file', file, file.name);
        // if role manager or admin, allow to change avatar for user_id
        // if not, user changes it for itself
        // let user_id = user._id;
        // formData.append('user_id', user_id);
        var token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                // 'Content-Type':  'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/user/edit-avatar', formData, httpOptions);
    };
    UserService.prototype.checkFile = function (eventTarget) {
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
    };
    // create Observable for user login watch
    UserService.prototype.userLocalLogin = function (token) {
        if (token) {
            this.userLocalSetToken('token', token);
        }
        var user = this.userLocalGetCredentials('token');
        this._logging.next(user);
    };
    UserService.prototype.userLocalLogout = function () {
        this.userLocalRemoveToken('token');
        var user = null;
        this._logging.next(user);
    };
    UserService.prototype.getUserLocal = function () {
        return this._logging.asObservable();
    };
    // end of observable
    /**
    * Token manipulations
    */
    UserService.prototype.userLocalSetToken = function (tokenKey, token) {
        localStorage.setItem(tokenKey, token);
    };
    UserService.prototype.userLocalRemoveToken = function (tokenKey) {
        localStorage.removeItem(tokenKey);
    };
    UserService.prototype.userLocalCheckExpiration = function (tokenKey) {
        var token = localStorage.getItem(tokenKey);
        if (!token) {
            return true;
        }
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        if (helper.isTokenExpired(token)) {
            this.userLocalRemoveToken(tokenKey);
        }
        return helper.isTokenExpired(token);
    };
    UserService.prototype.userLocalGetToken = function (tokenKey) {
        var token = localStorage.getItem(tokenKey);
        if (!token) {
            return '';
        }
        if (this.userLocalCheckExpiration(tokenKey)) {
            return '';
        }
        return token;
    };
    UserService.prototype.userLocalGetCredentials = function (tokenKey) {
        var token = this.userLocalGetToken(tokenKey);
        if (!token) {
            return null;
        }
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        return helper.decodeToken(token).sub;
    };
    UserService.prototype.userLocalGetExpirationDate = function (tokenKey) {
        var token = localStorage.getItem(tokenKey);
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        return helper.getTokenExpirationDate(token);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
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

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.matchPassword = function (abstractControl) {
        var password = abstractControl.get('password').value;
        var passwordConfirm = abstractControl.get('passwordConfirm').value;
        if (password === passwordConfirm) {
            abstractControl.get('passwordConfirm').setErrors(null);
            return null;
        }
        else {
            /**
             * set error to 'passwordConfirm' element
             */
            abstractControl.get('passwordConfirm').setErrors({ mismatch: true });
            /**
             * and don't set error (null) to formGroup
             */
            return null;
        }
    };
    ValidateService.prototype.maxTries = function (abstractControl) {
        // set error  to form control
        // !! abstractControl.value
        abstractControl.get('code').setErrors({ maxTries: true });
        return null; // set no errors to form
        // return {maxTries: true};
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    cloud_name: 'hmm6pjfgk',
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




// import 'hammerjs';
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log('bootstrapModule error', err); });


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