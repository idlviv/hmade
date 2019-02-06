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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
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
    function AppComponent(userService) {
        this.userService = userService;
        this.showHeader = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userService.logging();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
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
    host: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].host,
    serverUrl: '/',
    defaultProductImg: 'default_product',
    defaultAvatar: 'default_avatar',
    logoLight: 'hmade_logo_light',
    logoDark: 'hmade_logo_dark',
    icon: 'hmade_icon',
    recaptchaSiteKey: '6Le5XoUUAAAAACCWkV0muQG0SFc75G_7udZzbqs1',
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
/* harmony import */ var _guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./guards/no-auth.guard */ "./src/app/guards/no-auth.guard.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _components_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/shared/confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var _components_shared_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/shared/design-popup/design-popup.component */ "./src/app/components/shared/design-popup/design-popup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_shared_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/shared/image-popup/image-popup.component */ "./src/app/components/shared/image-popup/image-popup.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// import { ScrollingDirective } from './directives/scrolling.directive';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
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
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_17__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].production }),
                _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"],
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
                _guards_no_auth_guard__WEBPACK_IMPORTED_MODULE_16__["NoAuthGuard"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_23__["CookieService"]
            ],
            exports: [],
            entryComponents: [
                _components_shared_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_19__["ConfirmPopupComponent"],
                _components_shared_design_popup_design_popup_component__WEBPACK_IMPORTED_MODULE_20__["DesignPopupComponent"],
                _components_shared_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_22__["ImagePopupComponent"],
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

module.exports = "<article id=\"about\">\r\n    <div class=\"container\">\r\n      <div class=\"app-container-h app-container-v\">\r\n        <div class=\"container\">\r\n          <div class=\"row\" fxLayout=\"row\">\r\n            <div class=\"cell\" fxFlex=\"100\">\r\n                <section>\r\n                  <h1 class=\"mat-display-2\">Вітаю в творчій майстерні!</h1>\r\n                  <p class=\"text-justify muted mat-body-1\">\r\n                    Мене звати Ірина, я мама чудової донечки, саме Вона надихає мене на нові цікаві витвори.\r\n                      Канікули у школі - творимо маленький театр ляльок. Вільна хвилинка -\r\n                      в'яжемо теплі шарфики для іграшок, шиємо та розмальовуємо кавові іграшки. \r\n                      Свято у школі - новий віночок.. Ще багато можна писати про себе та мої захоплення, але згодом.. \r\n                      Завітайте у мою майстерню.\r\n                  </p>\r\n                </section>\r\n                <section>             \r\n                  <h2 class=\"mat-h2\">Політика конфіденційності</h2>\r\n                  <p class=\"text-justify muted mat-body-1\">Політика конфіденційності</p></section>\r\n                <section>                \r\n                  <h2 class=\"mat-h2\">Умови використання</h2>\r\n                  <p class=\"text-justify muted mat-body-1\">Умови використання</p>\r\n                </section>\r\n            </div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n\r\n</article>"

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

module.exports = "<div class=\"container\">\r\n  <div class=\"app-container-h\">\r\n    <!-- <div class=\"padding-bottom-3\"> -->\r\n        <mat-card>\r\n            <form [formGroup]=\"commentForm\" #f=\"ngForm\" novalidate>\r\n                <div class=\"row\" fxLayout=\"row\">\r\n                  <div class=\"cell\" fxFlex=\"10\" fxLayoutAlign=\"center center\">\r\n\r\n                    <img *ngIf=\"allowTo('guest')\" class=\"responsive-image\"\r\n                      src=\"{{user.role === 'google' ? \r\n                        user.avatar :\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_50,h_50,f_auto/' +\r\n                        user.avatar}}\" alt=\"avatar\">\r\n                    <img *ngIf=\"!user\" class=\"responsive-image\"\r\n                      src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_50,h_50,f_auto/' +\r\n                        config.defaultAvatar}}\" alt=\"avatar\">\r\n\r\n                  </div>\r\n                    <mat-form-field class=\"cell\" fxFlex=\"80\">\r\n                      <textarea matInput\r\n                        [placeholder]=\"allowTo('user') ?\r\n                          'Коментар' :\r\n                          allowTo('guest') ?\r\n                            'Для відправки коментарів верифікуйте пошту' :\r\n                            'Коментарі можуть залишати лише зареєстровані користувачі'\"\r\n                        formControlName=\"comment\" required>\r\n                      </textarea>\r\n                      <mat-error\r\n                        *ngIf=\"(commentForm.get('comment').errors?.minlength ||\r\n                        commentForm.get('comment').errors?.maxlength ||\r\n                        commentForm.get('comment').errors?.required) &&\r\n                        commentForm.get('comment').touched\">\r\n                        Довжина повинна бути від 3 до 200 символів\r\n                      </mat-error>\r\n                      <mat-error\r\n                        *ngIf=\"commentForm.get('comment').errors?.pattern &&\r\n                        commentForm.get('comment').touched\">\r\n                        Не використовуйте спеціальні символи\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  <div class=\"cell\" fxFlex=\"10\">\r\n                    <button mat-icon-button (click)=\"sendComment()\" aria-label=\"Send\"\r\n                     [disabled]=\"!commentForm.valid || !allowTo('user')\">\r\n                      <mat-icon>send</mat-icon>\r\n                    </button>\r\n           \r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"end\">\r\n                  <re-captcha [ngClass]=\"{'display-none': !commentForm.get('comment').valid}\"\r\n                    [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                    siteKey=\"{{config.recaptchaSiteKey}}\">\r\n                  </re-captcha> \r\n                </div>\r\n              </form>\r\n        </mat-card>\r\n    <!-- </div> -->\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div *ngIf=\"comments\" class=\"cell\">\r\n        <p class=\"mat-body-1\">Показано<span class=\"mat-body-2\"> {{comments.length}} \r\n        </span>коментарів з<span class=\"mat-body-2\"> {{commentsTotalLength || 0}}</span></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row padding-bottom\" [ngClass]=\"{'muted-strong': !comment.display}\"\r\n     *ngFor=\"let comment of comments\" fxLayout=\"row\">\r\n      <div  class=\"cell\" fxFlex=\"10\" fxLayoutAlign=\"center center\">\r\n                <img *ngIf=\"comment.user && comment.user.avatar\" class=\"responsive-image\"\r\n                  src=\"{{comment.user.role === 'google' ? \r\n                    comment.user.avatar :\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_50,h_50,f_auto/' +\r\n                    comment.user.avatar}}\" alt=\"avatar\">\r\n                <img *ngIf=\"!comment.user\" class=\"responsive-image\"\r\n                  src=\"{{\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_50,h_50,f_auto/' +\r\n                    config.defaultAvatar}}\" alt=\"avatar\">\r\n      </div>\r\n      <div class=\"cell\" fxFlex=\"80\">\r\n        <p>\r\n          <span class=\"mat-body-2\">\r\n            {{comment.user && comment.user.login ? comment.user.name + ' ' + comment.user.surname : 'Гість'}}\r\n          </span>\r\n          <span fxFlex></span>\r\n          <span class=\"mat-body-1\">{{comment.commentedAt | date: 'dd.MM.yyyy HH:mm'}}</span>\r\n        </p>\r\n        <p class=\"text-align-justify\">{{comment.comment}}</p>\r\n      </div>\r\n      <div class=\"cell\" fxFlex=\"10\">\r\n        <p *ngIf=\"allowTo('manager')\"><button class=\"mat-icon-button\" (click)=\"deleteComment(comment)\" aria-label=\"Delete comment\">\r\n          <mat-icon class=\"mat-18\">delete_outline</mat-icon></button></p>\r\n        <p *ngIf=\"allowTo('manager') && !comment.display\">\r\n          <button class=\"mat-icon-button\" (click)=\"displayComment(true, comment._id)\" aria-label=\"Display comment\">\r\n            <mat-icon class=\"mat-18\">play_circle_outline</mat-icon></button>\r\n        </p>\r\n        <p *ngIf=\"allowTo('manager') && comment.display\">\r\n          <button class=\"mat-icon-button\" (click)=\"displayComment(false, comment._id)\" aria-label=\"Hide comment\">\r\n            <mat-icon class=\"mat-18\">pause_circle_outline</mat-icon></button>\r\n        </p>\r\n\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"processing\" class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        this.loadComments(-1, 0, 5, !this.allowTo('manager'));
    };
    // Listening of page bottom reached
    CommentsComponent.prototype.onScroll = function (event) {
        if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 2) {
            if (!this.processing &&
                this.commentsTotalLength !== this.comments.length &&
                this.commentsTotalLength) {
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
            payload: { _id: comment._id }
        };
        var dialogRef = this.dialog.open(_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmPopupComponent"], {
            data: confirmObject,
        });
        dialogRef.afterClosed()
            .subscribe(function (res) {
            console.log('resp', res);
            if (res && res.choise) {
                _this.socialService.deleteComment(_this.parent_id, _this.parentCategory, res.payload._id)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (result) {
                    console.log('result', result);
                    if (result) {
                        // successfuly delete
                        return _this.socialService.getComments(_this.parent_id, _this.parentCategory, -1, 0, _this.comments.length, !_this.allowTo('manager'));
                    }
                    else {
                        // not delete, do nothing
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
                    }
                }))
                    .subscribe(function (result) {
                    console.log('result', result);
                    if (result) {
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

module.exports = "<p>\r\n  {{data.message}}\r\n</p>\r\n<button mat-button color=\"danger\" (click)=\"onClose(true, data.payload)\" aria-label=\"Yes\">Так</button>aria-label=\"Add\"\r\n<button mat-button color=\"primary\" (click)=\"onClose(false, null)\" aria-label=\"No\">Ні</button>"

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
    ConfirmPopupComponent.prototype.onClose = function (choise, payload) {
        this.confirmPopupChoise = { choise: choise, payload: payload };
        this.dialogRef.close(this.confirmPopupChoise);
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

module.exports = "<nav id=\"toolbar\" class=\"mat-elevation-z4\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n  <div class=\"logo\" fxFlex.lt-md=\"80\" fxFlex=\"30\" fxLayoutAlign=\"start center\">\r\n    <a href=\"\">\r\n      <img src=\"./assets/images/hmade_logo_light.svg\" height=\"36px\" alt=\"HandMADE logo\">\r\n    </a>\r\n  </div>\r\n  <div fxShow=\"true\" fxHide.lt-md=\"true\" fxFlex=\"40\" fxLayoutAlign=\"center center\">\r\n    <a *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\" class=\"link\" [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\"\r\n      [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: false}\">\r\n      <span class=\"type1\">{{mainMenuCommonItem.name}}</span>\r\n    </a>\r\n  </div>\r\n\r\n  <div fxShow=\"true\" fxHide.lt-md=\"true\" fxFlex=\"30\" fxLayoutAlign=\"end center\">\r\n    <a *ngIf=\"allowTo('guest')\" class=\"link\" [matMenuTriggerFor]=\"settingsMenu\" #settingsMenuTrigger=\"matMenuTrigger\" (mouseover)=\"onSettingsMenuMouseover()\">\r\n      <span class=\"type2\">\r\n        <mat-icon class=\"mat-icon-aligner\">settings</mat-icon>{{user.name}} {{user.surname}}\r\n      </span>\r\n\r\n    </a>\r\n\r\n    <mat-menu #settingsMenu=\"matMenu\" xPosition=\"after\" yPosition=\"above\" [overlapTrigger]=\"false\">\r\n      <span (mouseleave)=\"onSettingsMenuMouseleave()\">\r\n        <a *ngIf=\"allowTo('guest')\" mat-menu-item [routerLink]=\"['/user/profile']\" [routerLinkActive]=\"['accent']\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <mat-icon>account_circle</mat-icon><span>Профіль</span>\r\n        </a>\r\n        <a *ngIf=\"allowTo('manager')\" mat-menu-item [routerLink]=\"['/dashboard']\"\r\n          [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <mat-icon>settings</mat-icon><span>Dashboard</span>\r\n        </a>\r\n      </span>\r\n    </mat-menu>\r\n\r\n    <a *ngIf=\"allowTo('notUser')\" class=\"link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n      [routerLink]=\"['/user/login']\"><span class=\"type1\">Вхід</span></a>\r\n    <a *ngIf=\"allowTo('guest')\" class=\"link\" (click)=\"userLogout()\"><span class=\"type2\">Вихід</span></a>\r\n  </div>\r\n\r\n  <div class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\" fxFlex=\"20\" fxLayoutAlign=\"end center\">\r\n    <button mat-button (click)=\"sidenav.toggle()\" aria-label=\"Menu\">\r\n      <mat-icon *ngIf=\"sidenav.opened\">format_indent_increase</mat-icon>\r\n      <mat-icon *ngIf=\"!sidenav.opened\">menu</mat-icon>\r\n    </button>\r\n  </div>\r\n\r\n</nav>\r\n\r\n<!-- <nav>\r\n  <ul>\r\n    <li *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\">\r\n      <a  class=\"link\" [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\"\r\n        [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: false}\">\r\n      <span class=\"type1\">{{mainMenuCommonItem.name}}</span>\r\n    </a>\r\n    </li>\r\n  </ul>\r\n</nav> -->\r\n\r\n<mat-sidenav-container fxFlexFill>\r\n  <mat-sidenav #sidenav fxLayout=\"column\" position=\"end\" class=\"sidenav mat-elevation-z4\" role=\"navigation\" mode=\"side\">\r\n    <div fxLayout=\"column\">\r\n      <mat-nav-list>\r\n        <mat-list-item *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\">\r\n          <a matLine [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\"\r\n            (click)=\"sidenav.toggle()\">\r\n            {{mainMenuCommonItem.name}}\r\n          </a>\r\n        </mat-list-item>\r\n\r\n        <mat-expansion-panel *ngIf=\"allowTo('guest')\" class=\"mat-elevation-z0\">\r\n          <mat-expansion-panel-header class=\"sidenav-expansion-panel\">\r\n            <!-- <mat-panel-title> -->\r\n              <!-- <mat-list-item> -->\r\n                \r\n                <span matLine><span><mat-icon class=\"mat-icon-aligner\">settings</mat-icon>{{user.name}} {{user.surname}}</span></span>\r\n              <!-- </mat-list-item> -->\r\n            <!-- </mat-panel-title> -->\r\n\r\n          </mat-expansion-panel-header>\r\n          <mat-list-item *ngIf=\"allowTo('guest')\">\r\n            <mat-icon matListIcon>account_circle</mat-icon>\r\n            <a matLine [routerLink]=\"['/user/profile']\" [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n              (click)=\"sidenav.toggle()\">\r\n              Профіль</a>\r\n          </mat-list-item>\r\n          <mat-list-item *ngIf=\"allowTo('manager')\">\r\n            <mat-icon matListIcon>settings</mat-icon>\r\n            <a matLine [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n              (click)=\"sidenav.toggle()\">\r\n              Dashboard</a>\r\n          </mat-list-item>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-list-item *ngIf=\"allowTo('notUser')\">\r\n          <a matLine [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/user/login']\"\r\n            (click)=\"sidenav.toggle()\">Вхід</a>\r\n        </mat-list-item>\r\n        <mat-list-item *ngIf=\"allowTo('guest')\">\r\n\r\n          <a matLine (click)=\"userLogout()\" (click)=\"sidenav.toggle()\">\r\n            Вихід\r\n          </a>\r\n          <mat-icon matListIcon>exit_to_app</mat-icon>\r\n        </mat-list-item>\r\n      </mat-nav-list>\r\n    </div>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

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
    function ContentComponent(sharedService, userService, router, catalogService, cd) {
        this.sharedService = sharedService;
        this.userService = userService;
        this.router = router;
        this.catalogService = catalogService;
        this.cd = cd;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
        this.hierarchyCategory = [];
    }
    ContentComponent.prototype.ngAfterViewInit = function () {
        // Solve error ExpressionChangedAfterItHasBeenCheckedError
        // After redirection from auth2 signin (server) view changes (*ngIf)
        // was user=null becomes user which logged
        this.cd.detectChanges();
    };
    ContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sharedService.getSharingEvent()
            .subscribe(function (event) {
            if (event[0] === 'closeSidenav') {
                _this.sidenav.close();
            }
        });
        // this.userService.getUserLocal()
        //   .subscribe((user) => {
        //     this.user = user;
        //     console.log('user');
        //   });
        // initial login user, token will be taken from localStorage
        // this.userService.userLocalLogin(null);
        // get main menu items
        this.catalogService.getMainMenu()
            .subscribe(function (menuItems) {
            _this.mainMenuCommonItems = menuItems.data.common;
            _this.mainMenuSystemItems = menuItems.data.system;
        }, function (err) {
            console.log(err.error);
        });
    };
    ContentComponent.prototype.userLogout = function () {
        var _this = this;
        this.userService.userLogout()
            .subscribe(function (message) {
            _this.userService.logging();
            console.log(message);
            _this.router.navigate(['/user', 'login']);
        }, function (err) {
            console.log(err.error);
        });
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
    ContentComponent.prototype.allowTo = function (permitedRole) {
        this.user = this.userService.userCookieExtractor();
        return this.userService.allowTo(permitedRole);
    };
    ContentComponent.prototype.restrictTo = function (restrictedRoles) {
        this.user = this.userService.userCookieExtractor();
        return this.userService.restrictTo(restrictedRoles);
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
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_3__["CatalogService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
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

module.exports = "<mat-horizontal-stepper class=\"crsl\" #stepper>\r\n  <ng-template matStepperIcon=\"edit\">\r\n  </ng-template>\r\n\r\n  <ng-template matStepperIcon=\"done\">\r\n  </ng-template>\r\n  <ng-template matStepperIcon=\"number\" let-index=\"index\">\r\n    <!--{{index + 10}}-->\r\n  </ng-template>\r\n\r\n  <mat-step *ngFor=\"let banner of homeBanner\">\r\n    <!--<img *ngIf=\"media.isActive('md')\" class=\"responsive-image-stretch\" src=\"{{-->\r\n    <img *ngIf=\"media.isActive('gt-md')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_760,h_350,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n    <img *ngIf=\"media.isActive('md')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_550,h_250,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n    <img *ngIf=\"media.isActive('sm')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_760,h_350,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n    <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_590,h_270,f_auto/' +\r\n            banner}}\"\r\n         alt=\"Image\">\r\n\r\n  </mat-step>\r\n\r\n</mat-horizontal-stepper>\r\n"

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

module.exports = "<div fxLayout=\"column\">\r\n  <div class=\"cell\" fxLayout>\r\n    <div fxFlex=\"calc(100%-40px)\" fxLayoutAlign=\"center center\">\r\n      <h3 class=\"h3 muted\">{{data.title}}</h3>\r\n    </div>\r\n\r\n    <div fxFlex=\"40px\" fxLayoutAlign=\"end center\">\r\n      <div>\r\n        <button mat-icon-button color=\"accent\" (click)=\"onClose()\" aria-label=\"Close\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"designProducts\" class=\"container\">\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\" fxLayout=\"row\" fxFill=\"center\">\r\n\r\n        <mat-form-field fxFlex=\"100\">\r\n        <mat-select placeholder=\"Колекції\" #productSelect (valueChange)=\"onProductSelect($event)\">\r\n          <mat-option *ngFor=\"let product of designProducts\" [value]=\"product\">\r\n              {{product.name}}\r\n          </mat-option>\r\n        </mat-select>\r\n          </mat-form-field>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"responsive-image-popup-container\">\r\n      <img class=\"responsive-image-popup\" src=\"{{\r\n          config.imgPath +\r\n          config.cloudinary.cloud_name +\r\n          cloudinaryOptions +\r\n          data.image}}\"\r\n           alt=\"design\">\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

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

module.exports = "<div id=\"feedback\">\r\n    <div class=\"container\">\r\n      <div class=\"app-container-h app-container-v\">\r\n\r\n<div class=\"container\">\r\n\r\n  <div class=\"row\" fxLayout=\"column\" fxLayout.gt-xs=\"row\">\r\n    <div fxFlex.gt-xs=\"10\" fxFlex.gt-md=\"15\"></div>\r\n\r\n    <div class=\"cell\" fxFlex.gt-xs=\"80\" fxFlex.gt-md=\"70\">\r\n\r\n      <div class=\"centered-container-600\">\r\n        <mat-card  class=\"form-block\">\r\n          <mat-card-content>\r\n              <div class=\"padding-bottom\" fxLayout fxLayoutAlign=\"center center\">\r\n                <img class=\"responsive-image\" src=\"./assets/images/hmade_logo_dark.svg\" width=\"367px\">\r\n              </div>\r\n            <form #fForm=\"ngForm\" [formGroup]=\"feedbackForm\" (submit)=\"onFeedbackFormSubmit()\">\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">textsms</mat-icon>\r\n                </div>\r\n              <mat-form-field>\r\n                <textarea rows=\"5\" matInput placeholder=\"Повідомлення\" formControlName=\"message\" required></textarea>\r\n                <mat-error\r\n                  *ngIf=\"(feedbackForm.get('message').errors?.minlength ||\r\n                                    feedbackForm.get('message').errors?.maxlength ||\r\n                                    feedbackForm.get('message').errors?.required) &&\r\n                                    feedbackForm.get('message').touched\">\r\n                  Довжина повинна бути від 3 до 500 символів\r\n                </mat-error>\r\n              </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">account_circle</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Ваше ім'я\" formControlName=\"name\" required>\r\n                  <mat-error\r\n                    *ngIf=\"feedbackForm.get('contacts').errors?.required &&\r\n                        feedbackForm.get('name').touched\">\r\n                    Введіть ім'я\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div fxLayout=\"row\">\r\n                <div fxFlexAlign=\"center\" class=\"mat-icon-wrapper\">\r\n                  <mat-icon color=\"primary\">contacts</mat-icon>\r\n                </div>\r\n                <mat-form-field>\r\n                  <input matInput placeholder=\"Контактний номер або email\" formControlName=\"contacts\" required>\r\n                  <mat-error\r\n                    *ngIf=\"feedbackForm.get('contacts').errors?.required &&\r\n                        feedbackForm.get('contacts').touched\">\r\n                    Введіть котактну інформацію\r\n                  </mat-error>\r\n                </mat-form-field>\r\n              </div>\r\n              <re-captcha [ngClass]=\"{'display-none':\r\n          !feedbackForm.get('contacts').valid || !feedbackForm.get('contacts').valid ||\r\n          !feedbackForm.get('message').valid}\"\r\n                          [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                          siteKey=\"{{config.recaptchaSiteKey}}\">\r\n              </re-captcha>\r\n              <!--<div *ngIf=\"!processing\" fxLayout=\"row\">-->\r\n                <!--<object type=\"image/svg+xml\" data=\"./assets/images/loading.svg\" width=\"50px\" height=\"20px\">-->\r\n                  <!--Loading..-->\r\n                <!--</object>-->\r\n              <!--</div>-->\r\n\r\n              <div class=\"submit-button-wrapper\">\r\n                <!--<span fxFlex></span>-->\r\n                <button mat-raised-button class=\"full-width\" color=\"primary\" aria-label=\"Send message\"\r\n                 [disabled]=\"!feedbackForm.valid || processing\">\r\n                  <mat-icon *ngIf=\"!processing\">message</mat-icon> Написати мені</button>\r\n              </div>\r\n\r\n            </form>\r\n          </mat-card-content>\r\n          <!--<img mat-card-image class=\"mat-card-image-bottom\" src=\"./assets/images/logo400x140-2.jpg\" alt=\"\">-->\r\n        </mat-card>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n</div>\r\n</div>"

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






var FeedbackComponent = /** @class */ (function () {
    function FeedbackComponent(location, sharedService, matSnackBar) {
        this.location = location;
        this.sharedService = sharedService;
        this.matSnackBar = matSnackBar;
        this.processing = false;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
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

module.exports = "<footer class=\"mat-elevation-z16\" id=\"footer\">\r\n  <div fxFlex></div>\r\n  <a mat-button [routerLink]=\"['/feedback']\" aria-label=\"Feedback\"\r\n     [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <mat-icon>question_answer</mat-icon> Зворотній зв'язок\r\n  </a>\r\n</footer>\r\n"

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

module.exports = "<div class=\"app-container-h\">\n  <div class=\"container\">\n\n    <div class=\"row\" fxLayout=\"row\">\n      <div class=\"cell\" fxFlex=\"100\">\n      <h1 class=\"mat-display-1\">Галерея</h1>\n      </div>\n    </div>\n\n    <div class=\"row\" fxLayout=\"row\">\n      <div class=\"cell\" fxFlex=\"100\" *ngFor=\"let product of productsWithGallery\">\n        <mat-card>\n          <mat-card-subtitle>\n            <a mat-button [attr.aria-label]=\"product.name\"\n               [routerLink]=\"['/products', 'ch', {outlets: {primary: [product.parent[0], 'details', product._id],\n                    breadcrumb: [product.parent[0], 'details', product._id]}}]\"\n               [queryParams]=\"{name: product.name}\"\n               [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\n              {{product.name}}\n            </a>\n          </mat-card-subtitle>\n          <div class=\"row\" fxLayout=\"row\">\n            <div fxFlex=\"100\" class=\"cell text-justify\" [innerHTML]=\"product.description\"></div>\n\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"33\" fxFlex.gt-sm=\"25\" class=\"cell\"\n                 fxLayout fxLayoutAlign=\"center center\"\n                 *ngFor=\"let productAsset of product.assets\">\n              <mat-card *ngIf=\"media.isActive('xs')\" class=\"no-padding\">\n                <mat-card-header fxLayoutAlign=\"center center\">\n                  <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\n                </mat-card-header>\n                <mat-card-content fxLayoutAlign=\"center center\">\n\n                  <img *ngIf=\"productAsset\" class=\"responsive-image hover-cursor\"\n                       (click)=\"openDialog(productAsset, product.name)\"\n                       src=\"{{\n                      config.imgPath +\n                      config.cloudinary.cloud_name +\n                      '/c_fill,w_590,h_295,f_auto/' +\n                      productAsset}}\"\n                       alt=\"design\">\n                </mat-card-content>\n              </mat-card>\n\n\n              <mat-card *ngIf=\"media.isActive('gt-xs')\" class=\"no-padding\" fxFlex.gt-xs=\"100\">\n                <mat-card-header fxLayoutAlign=\"center center\">\n                  <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\n                </mat-card-header>\n                <mat-card-content fxLayoutAlign=\"center center\">\n                  <img *ngIf=\"productAsset\" class=\"responsive-image-stretch hover-cursor\"\n                       (click)=\"openDialog(productAsset, product.name)\"\n                       src=\"{{\n                      config.imgPath +\n                      config.cloudinary.cloud_name +\n                      '/c_fill,w_350,h_175,f_auto/' +\n                      productAsset}}\"\n                       alt=\"design\">\n                </mat-card-content>\n              </mat-card>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n\n\n  </div>\n</div>\n\n"

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

module.exports = "<header class=\"app-container-h primary-background\" id=\"header\">\n\n  <div class=\"container\" fxHide.lt-md=\"true\">\n    <div class=\"row primary-background\">\n      <div class=\"cell\">\n        <a href=\"\">\n          <img src=\"./assets/images/hmade_logo_light.svg\" height=\"60px\">\n        </a>\n      </div>\n      <div fxFlex></div>\n    <div class=\"cell\">\n      <div class=\"row\" fxLayout=\"row\">\n        <div class=\"cell\" fxFlex=\"100\">\n          <a mat-button [routerLink]=\"['/feedback']\" class=\"muted\" aria-label=\"Ask\"\n             [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\n            <mat-icon>mail</mat-icon> Задати питання\n          </a>\n        </div>\n        <div class=\"cell\" fxFlex=\"100\">\n          <a mat-button class=\"muted\" aria-label=\"Call\"\n             href=\"tel:+380985443968\">\n            <mat-icon>phone</mat-icon> 098 544 39 68\n          </a>\n        </div>\n      </div>\n    </div>\n\n    </div>\n  </div>\n</header>\n"

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

/***/ "./src/app/components/shared/image-popup/image-popup.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/image-popup/image-popup.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\">\r\n  <div class=\"cell\" fxLayout>\r\n    <div fxFlex=\"calc(100%-40px)\" fxLayoutAlign=\"center center\">\r\n      <h3 class=\"h3 muted\">{{data.title}}</h3>\r\n    </div>\r\n\r\n    <div fxFlex=\"40px\" fxLayoutAlign=\"end center\">\r\n      <div>\r\n        <button mat-icon-button color=\"accent\" (click)=\"onClose()\" aria-label=\"Close\">\r\n          <mat-icon>close</mat-icon>\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"responsive-image-popup-container\">\r\n      <img class=\"responsive-image-popup\" src=\"{{\r\n          config.imgPath +\r\n          config.cloudinary.cloud_name +\r\n          data.cloudinaryOptions +\r\n          data.image}}\"\r\n           alt=\"design\">\r\n  </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/shared/image-popup/image-popup.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/image-popup/image-popup.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ImagePopupComponent = /** @class */ (function () {
    function ImagePopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    ImagePopupComponent.prototype.ngOnInit = function () {
        if (!this.data.cloudinaryOptions) {
            this.data.cloudinaryOptions = '/c_fill,w_590,h_443,f_auto/';
        }
        if (!this.data.title) {
            this.data.title = '';
        }
    };
    ImagePopupComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ImagePopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-popup',
            template: __webpack_require__(/*! ./image-popup.component.html */ "./src/app/components/shared/image-popup/image-popup.component.html"),
            styles: [__webpack_require__(/*! ./image-popup.component.scss */ "./src/app/components/shared/image-popup/image-popup.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ImagePopupComponent);
    return ImagePopupComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/landing/landing.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/landing/landing.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"landing\">\r\n    <div class=\"container\">\r\n          <div class=\"app-container-h app-container-v\">\r\n        <div class=\"container\">\r\n            <section class=\"row padding-bottom landing-block\" fxLayout=\"row\">\r\n  \r\n                <div id=\"landing-left\" class=\"container\" fxFlexOrder.lt-md=\"2\" fxFlex.xs=\"50\" fxFlex.sm=\"50\" fxFlex=\"35\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"row\" fxLayoutAlign=\"center center\">\r\n                      <div class=\"cell\">\r\n                        <a [routerLink]=\"['/products', 'ch']\">  \r\n                          <img class=\"responsive-image-stretch\" src=\"{{\r\n                            config.imgPath +\r\n                            config.cloudinary.cloud_name +\r\n                            '/c_fill,w_500,h_500,f_auto/' +\r\n                            'products-logo'}}\"\r\n                            alt=\"Вироби\">\r\n                          </a>\r\n                      </div>\r\n                      <a mat-stroked-button color=\"primary\" alt=\"Вироби\" class=\"hover-button\"\r\n                      [routerLink]=\"['/products', 'ch']\">Мої роботи</a>\r\n                    </div>\r\n                </div>\r\n            \r\n                  <div class=\"container\" fxFlexOrder.lt-md=\"1\" fxFlex.lt-md=\"100\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"row\" >\r\n                      <div class=\"cell\">\r\n                    \r\n                          <h2 class=\"mat-h2 text-align-center\">Вітаю в творчій майстерні!</h2>\r\n                          <div class=\"avatar-big-block\">\r\n                              <img class=\"avatar-big\" src=\"./assets/images/my-photo180x180.png\" alt=\"my photo\">\r\n                          </div>\r\n                          <p class=\"body-3 muted text-align-center\">Мене звати Ірина, я мама чудової донечки, саме Вона надихає мене на нові цікаві витвори.\r\n                          Канікули у школі - творимо маленький театр ляльок. Вільна хвилинка - в'яжемо теплі шарфики для іграшок,\r\n                          шиємо та розмальовуємо кавові іграшки. Свято у школі - новий віночок..\r\n                          Ще багато можна писати про себе та мої захоплення, але згодом..\r\n                            Завітайте у мою майстерню.</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n            \r\n                <div id=\"landing-right\" class=\"container\" fxFlexOrder.lt-md=\"3\" fxFlex.xs=\"50\" fxFlex.sm=\"50\" fxFlex=\"35\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"row\" fxLayoutAlign=\"center center\">\r\n                      <div class=\"cell\">\r\n                        <a [routerLink]=\"['/mcs', 'ch']\">  \r\n                          <img class=\"responsive-image-stretch\" src=\"{{\r\n                            config.imgPath +\r\n                            config.cloudinary.cloud_name +\r\n                            '/c_fill,w_500,h_500,f_auto/' +\r\n                            'mcs-logo'}}\"\r\n                           alt=\"Майстеркласи\">\r\n                        </a>\r\n                        \r\n                      </div>\r\n                      <a mat-stroked-button class=\"hover-button\" color=\"primary\" alt=\"Майстеркласи\" \r\n                      [routerLink]=\"['/mcs', 'ch']\">Майстеркласи</a>\r\n  \r\n                    </div>\r\n                </div>\r\n              </section>\r\n  \r\n            <section *ngIf=\"products\" class=\"row\">\r\n                <div class=\"cell\" fxFlex=\"100\" appScrolling>\r\n                  <h2 class=\"mat-h2\">Нові роботи</h2>\r\n                </div>\r\n\r\n  \r\n              <div *ngFor=\"let product of products; let i = index\" class=\"cell pr\" [attr.id]=\"'product' + i\"\r\n                  [ngClass]=\"{'landing-product': i < productsPoint && i >= productsPoint - portionOfProducts,\r\n                   'opacity0': i >= productsPoint}\"  \r\n                  fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">\r\n                  {{isElementScrolled('#product' + i)}}\r\n                <app-product-item-brief [product]=\"product\"></app-product-item-brief>\r\n              </div>\r\n            </section>\r\n        </div>\r\n           \r\n      </div>\r\n    </div>\r\n  \r\n  </div>\r\n  \r\n\r\n<!-- <div id=\"landing\" fxLayoutAlign=\"center center\">\r\n  <div class=\"container\">\r\n        <div class=\"app-container-h app-container-v\">\r\n      <div class=\"container\">\r\n          <section class=\"row padding-bottom landing-block\" fxLayout=\"row\">\r\n\r\n              <div id=\"landing-left\" class=\"container\" fxFlexOrder.lt-md=\"2\" fxFlex.xs=\"50\" fxFlex.sm=\"50\" fxFlex=\"35\" fxLayoutAlign=\"center center\">\r\n                  <div class=\"row\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"cell\">\r\n                      <a [routerLink]=\"['/products', 'ch']\">  \r\n                        <img class=\"responsive-image-stretch\" src=\"{{\r\n                          config.imgPath +\r\n                          config.cloudinary.cloud_name +\r\n                          '/c_fill,w_500,h_500,f_auto/' +\r\n                          'products-logo'}}\"\r\n                          alt=\"Вироби\">\r\n                        </a>\r\n                    </div>\r\n                    <a mat-stroked-button color=\"primary\" alt=\"Вироби\" class=\"hover-button\"\r\n                    [routerLink]=\"['/products', 'ch']\">Мої роботи</a>\r\n                  </div>\r\n              </div>\r\n          \r\n                <div class=\"container\" fxFlexOrder.lt-md=\"1\" fxFlex.lt-md=\"100\" fxFlex=\"30\" fxLayoutAlign=\"center center\">\r\n                  <div class=\"row\" >\r\n                    <div class=\"cell\">\r\n                  \r\n                        <h2 class=\"mat-h2 text-align-center\">Вітаю в творчій майстерні!</h2>\r\n                        <div class=\"avatar-big-block\">\r\n                            <img class=\"avatar-big\" src=\"./assets/images/my-photo180x180.png\" alt=\"my photo\">\r\n                        </div>\r\n                        <p class=\"mat-body-1 muted text-align-center\">Мене звати Ірина, я мама чудової донечки, саме Вона надихає мене на нові цікаві витвори.\r\n                        Канікули у школі - творимо маленький театр ляльок. Вільна хвилинка - в'яжемо теплі шарфики для іграшок,\r\n                        шиємо та розмальовуємо кавові іграшки. Свято у школі - новий віночок..\r\n                        Ще багато можна писати про себе та мої захоплення, але згодом..\r\n                          Завітайте у мою майстерню.</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n          \r\n              <div id=\"landing-right\" class=\"container\" fxFlexOrder.lt-md=\"3\" fxFlex.xs=\"50\" fxFlex.sm=\"50\" fxFlex=\"35\" fxLayoutAlign=\"center center\">\r\n                  <div class=\"row\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"cell\">\r\n                      <a [routerLink]=\"['/mcs', 'ch']\">  \r\n                        <img class=\"responsive-image-stretch\" src=\"{{\r\n                          config.imgPath +\r\n                          config.cloudinary.cloud_name +\r\n                          '/c_fill,w_500,h_500,f_auto/' +\r\n                          'mcs-logo'}}\"\r\n                         alt=\"Майстеркласи\">\r\n                      </a>\r\n                      \r\n                    </div>\r\n                    <a mat-stroked-button class=\"hover-button\" color=\"primary\" alt=\"Майстеркласи\" \r\n                    [routerLink]=\"['/mcs', 'ch']\">Майстеркласи</a>\r\n\r\n                  </div>\r\n              </div>\r\n            </section>\r\n\r\n          <section *ngIf=\"products\" class=\"row\">\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <h2 class=\"mat-h2\">Нові роботи</h2>\r\n              </div>\r\n\r\n            <div *ngFor=\"let product of products\" class=\"cell\"\r\n                fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">\r\n              <app-product-item-brief [product]=\"product\"></app-product-item-brief>\r\n            </div>\r\n          </section>\r\n      </div>\r\n         \r\n    </div>\r\n  </div>\r\n\r\n</div> -->\r\n"

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
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var src_app_services_mc_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/mc.service */ "./src/app/services/mc.service.ts");
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
    function LandingComponent(catalogService, media, productService, mcService, el) {
        this.catalogService = catalogService;
        this.media = media;
        this.productService = productService;
        this.mcService = mcService;
        this.el = el;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
        this.products = [];
        this.limit = 6;
        this.portionOfProducts = 3;
        this.productsPoint = 0;
        this.state = false;
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            .subscribe(function (result) { return _this.products = result; }, function (err) { return console.log('newProducts load error', err); });
        this.mcService.getMainPageMcs()
            .subscribe(function (result) { return _this.mcs = result; }, function (err) { return console.log('mainPageMcs load error', err); });
        // this.catalogService.getChildren('products')
        // .subscribe(
        //   result => this.descendants = result.data,
        //   err => console.log('mainPageProducts load error', err)
        // );
    };
    LandingComponent.prototype.isElementScrolled = function (id) {
        var elementPosition = this.el.nativeElement.querySelector(id).offsetTop;
        return elementPosition;
    };
    LandingComponent.prototype._getElementPosition = function (id) {
        var elementPosition = this.el.nativeElement.querySelector(id).offsetTop;
        return elementPosition;
    };
    LandingComponent.prototype.onScroll = function (event) {
        // if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 2) {
        //   this.productsPoint = this.products.length;
        //   console.log('positon', window.pageYOffset)
        //   // if (this.limit > this.products.length) {
        //   //   this.productService.getNewProducts(this.products.length + this.portionOfProducts)
        //   //     .subscribe(
        //   //       result => this.products = result,
        //   //       err => console.log('newProducts load error', err)
        //   //     );
        //   // }
        // }
        var elementPosition = this._getElementPosition('#product' + this.productsPoint);
        var componentPosition = this.el.nativeElement.querySelector('#product' + this.productsPoint).offsetTop;
        var scrollPosition = window.pageYOffset;
        if (scrollPosition + window.innerHeight >= componentPosition) {
            if (this.limit > this.productsPoint) {
                this.productsPoint >= this.limit - this.portionOfProducts ?
                    this.productsPoint += this.portionOfProducts :
                    this.productsPoint += this.portionOfProducts - 1;
            }
        }
        else {
            this.state = false;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('scrollPoint'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LandingComponent.prototype, "scrollPoint", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], LandingComponent.prototype, "onScroll", null);
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/components/shared/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.scss */ "./src/app/components/shared/landing/landing.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_catalog_service__WEBPACK_IMPORTED_MODULE_1__["CatalogService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["ObservableMedia"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            src_app_services_mc_service__WEBPACK_IMPORTED_MODULE_5__["McService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/mcs-item-brief/mcs-item-brief.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/mcs-item-brief/mcs-item-brief.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <article class=\"mcs-item mat-elevation-z2\">\r\n      <div class=\"container\">\r\n          <div class=\"row\" fxLayout=\"row\">\r\n              <div class=\"mc-social\" fxFlex=\"100\">\r\n                  <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                    <mat-icon>thumb_up_alt</mat-icon>\r\n                    <div class=\"mat-body-1 caption\">{{mc.likes.likedByLength || 0}}</div>\r\n                  </div>\r\n                  <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>thumb_down_alt</mat-icon>\r\n                      <div class=\"mat-body-1 caption\">{{mc.likes.dislikedByLength || 0}}</div>\r\n                  </div>\r\n                  <div *ngIf=\"config.social.showViews\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>remove_red_eye</mat-icon>\r\n                      <div class=\"mat-body-1 caption\">{{mc.views || 0}}</div>\r\n                  </div>\r\n                  <div *ngIf=\"config.social.showComments\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>comment</mat-icon>\r\n                      <div class=\"mat-body-1 caption\">{{mc.comments?.length || 0}}</div>\r\n                  </div>\r\n                   <div class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>calendar_today</mat-icon>\r\n                      <div class=\"mat-body-1 caption\">{{mc.updatedAt | date: 'dd-MM-yyyy'}}</div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n    \r\n        <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n          <div class=\"cell\" fxFlex=\"100\" fxFlex.sm=\"35\" fxFlex.md=\"30\" fxFlex.gt-md=\"30\" fxLayoutAlign=\"center center\">\r\n            <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image radius-5\" src=\"{{\r\n                config.imgPath +\r\n                config.cloudinary.cloud_name +\r\n                '/c_fill,w_535,h_350,f_auto/' +\r\n                'w_265,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/' +\r\n                mc.mainImage}}\"\r\n                alt=\"master class image\">\r\n            <img *ngIf=\"media.isActive('gt-xs')\" class=\"responsive-image radius-5\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_360,h_270,f_auto/' +\r\n              'w_265,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/' +\r\n              mc.mainImage}}\"\r\n              alt=\"master class image\">\r\n          </div>\r\n          <div class=\"cell\" fxFlex=\"100\" fxFlex.sm=\"65\" fxFlex.md=\"70\" fxFlex.gt-md=\"70\" fxLayoutAlign=\"center center\">\r\n              <div class=\"row\" fxLayout=\"row\">\r\n                <div class=\"cell\" fxFlex=\"100\" >\r\n                  <h1 class=\"mat-h1\">\r\n                    {{mc.name}}\r\n                  </h1>\r\n                <!-- </div>\r\n                   <div class=\"cell\" fxFlex=\"100\"> -->\r\n                  <p class=\"mat-body-1 text-align-justify\">\r\n                    {{mc.description}}\r\n                  </p>\r\n                </div>\r\n                <section class=\"cell-px0\" fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n                    <div class=\"item text-align-center muted\" fxFlex>\r\n                       <!-- (click)=\"goToMcsItemDetail(mc._id)\"> -->\r\n          \r\n                      <a mat-raised-button color=\"accent\" aria-label=\"Open\"\r\n                        [routerLink]=\"['/mcs','show', mc._id]\"\r\n                        [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                        Докладно\r\n                     </a>\r\n          \r\n                    </div>\r\n                    <div *ngIf=\"allowTo('manager')\" class=\"item text-align-center muted\" fxFlex aria-label=\"Edit\">\r\n                      <a mat-button (click)=\"editMcsItem(mc._id)\">\r\n                        <mat-icon>edit</mat-icon>\r\n                      </a>\r\n                    </div>\r\n                    <div *ngIf=\"allowTo('manager')\" class=\"item text-align-center muted\" fxFlex aria-label=\"Delete\">\r\n                      <a mat-button (click)=\"deleteMcsItem(mc._id, mc.name)\">\r\n                        <mat-icon>delete</mat-icon>\r\n                      </a>\r\n                    </div>\r\n          \r\n                  </section>\r\n              </div>\r\n    \r\n          </div>\r\n        </div>\r\n      <!-- </mat-card-content>\r\n      <mat-card-actions> -->\r\n          <!-- <div class=\"row\" fxLayout=\"row\">\r\n           \r\n        </div> -->\r\n      </div>\r\n      \r\n    </article>\r\n  \r\n"

/***/ }),

/***/ "./src/app/components/shared/mcs-item-brief/mcs-item-brief.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/mcs-item-brief/mcs-item-brief.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/mcs-item-brief/mcs-item-brief.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/shared/mcs-item-brief/mcs-item-brief.component.ts ***!
  \******************************************************************************/
/*! exports provided: McsItemBriefComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McsItemBriefComponent", function() { return McsItemBriefComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var src_app_services_mc_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/mc.service */ "./src/app/services/mc.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var McsItemBriefComponent = /** @class */ (function () {
    function McsItemBriefComponent(userService, mcService, router, dialog, matSnackBar, media) {
        this.userService = userService;
        this.mcService = mcService;
        this.router = router;
        this.dialog = dialog;
        this.matSnackBar = matSnackBar;
        this.media = media;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
        this.refreshMcs = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    McsItemBriefComponent.prototype.ngOnInit = function () {
    };
    McsItemBriefComponent.prototype.allowTo = function (permitedRole) {
        return this.userService.allowTo(permitedRole);
    };
    McsItemBriefComponent.prototype.ngOnChanges = function (changes) {
        var productChange = changes.mc;
        // console.log('prev value: ', productChange.previousValue);
        // console.log('got name: ', productChange.currentValue);
        // console.log('productChange: ', productChange);
        if (productChange) {
            // console.log('simple changes product');
            // this.getRecommendations();
        }
    };
    McsItemBriefComponent.prototype.goToMcsItemDetail = function (_id) {
        console.log("goToMcsItemDetail " + _id);
        this.router.navigate(['/mcs', 'show', _id]);
    };
    McsItemBriefComponent.prototype.editMcsItem = function (_id) {
        console.log("editMcsItem " + _id);
        this.router.navigate(['/dashboard', 'mc', 'edit', _id]);
    };
    McsItemBriefComponent.prototype.deleteMcsItem = function (_id, nmae) {
        var _this = this;
        console.log("deleteMcsItem " + _id);
        var confirmObject = {
            message: "\u0414\u0456\u0439\u0441\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043C\u0430\u0439\u0441\u0442\u0435\u0440\u043A\u043B\u0430\u0441: " + name + " ?",
            payload: { _id: _id }
        };
        var dialogRef = this.dialog.open(_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmPopupComponent"], {
            data: confirmObject,
        });
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["mergeMap"])(function (result) {
            if (result && result.choise) {
                return _this.mcService.deleteMc(result.payload._id);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["of"])(null);
        }))
            .subscribe(function (result) {
            if (result) {
                _this.refreshMcs.emit();
                _this.matSnackBar.open(result, '', { duration: 3000, panelClass: 'snack-bar-danger' });
            }
        }, function (err) { return _this.matSnackBar.open(err.error.message || 'Сталася помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], McsItemBriefComponent.prototype, "mc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], McsItemBriefComponent.prototype, "parentCategory_id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], McsItemBriefComponent.prototype, "refreshMcs", void 0);
    McsItemBriefComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mcs-item-brief',
            template: __webpack_require__(/*! ./mcs-item-brief.component.html */ "./src/app/components/shared/mcs-item-brief/mcs-item-brief.component.html"),
            styles: [__webpack_require__(/*! ./mcs-item-brief.component.scss */ "./src/app/components/shared/mcs-item-brief/mcs-item-brief.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            src_app_services_mc_service__WEBPACK_IMPORTED_MODULE_6__["McService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["ObservableMedia"]])
    ], McsItemBriefComponent);
    return McsItemBriefComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/mcs-item-detail/mcs-item-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/mcs-item-detail/mcs-item-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article *ngIf=\"mc\" class=\"mcs-item\">\r\n  <div class=\"app-container-v app-container-h\">\r\n    <div class=\"container\">\r\n      <div class=\"row\" fxLayout=\"row\">\r\n        <div class=\"cell\" fxFlex=\"100\">\r\n          <div class=\"container\">\r\n\r\n            <div class=\"row\" fxLayout=\"row\">\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <div class=\"row\" fxLayout=\"row\">\r\n                  <div class=\"mc-social mat-elevation-z2 radius-5\" fxFlex=\"100\">\r\n                    <div class=\"item\" fxFlex=\"50px\" fxLayoutAlign=\"end center\">\r\n                      <mat-icon class=\"hover-cursor\" (click)=\"goToMcs()\">reply_all</mat-icon>\r\n                    </div>\r\n                    <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon [ngClass]=\"{\r\n                        'disabled': !(mc.likes.canLike && allowTo('user')), \r\n                        'enabled': mc.likes.canLike && allowTo('user'), \r\n                        'hover-cursor': mc.likes.canLike && allowTo('user')}\"\r\n                        (click)=\"onLike(true, mc.likes.canLike && allowTo('user'))\">thumb_up_alt</mat-icon>\r\n                      <div class=\"mat-body-1 caption\">{{mc.likes.likedByLength || 0}}</div>\r\n                    </div>\r\n                    <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon [ngClass]=\"{\r\n                        'disabled': !(mc.likes.canDislike && allowTo('user')), \r\n                        'enabled': mc.likes.canDislike && allowTo('user'), \r\n                        'hover-cursor': mc.likes.canDislike && allowTo('user')}\"\r\n                        (click)=\"onLike(false, mc.likes.canDislike && allowTo('user'))\">thumb_down_alt</mat-icon>\r\n                      <div class=\"mat-body-1 caption\">{{mc.likes.dislikedByLength || 0}}</div>\r\n                    </div>\r\n                    <div *ngIf=\"config.social.showViews\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>remove_red_eye</mat-icon>\r\n                      <div class=\"mat-body-1 caption\">{{mc.views || 0}}</div>\r\n                    </div>\r\n                    <div *ngIf=\"config.social.showComments\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>comment</mat-icon>\r\n                      <div class=\"mat-body-1 caption\">{{mc.comments?.length || 0}}</div>\r\n                    </div>\r\n                    <div class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>calendar_today</mat-icon>\r\n                      <div class=\"mat-body-1 caption\">{{mc.updatedAt | date: 'dd-MM-yyyy'}}</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n<!-- \r\n              <div class=\"cell\" fxFlex=\"100\">\r\n              </div>   -->\r\n\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <div class=\"row padding-bottom-3\" fxLayout=\"row\">\r\n                  <div class=\"cell\" fxFlex.xs=\"100\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\r\n                    <div class=\"row\" fxLayout=\"row\">\r\n                      <div class=\"cell\" fxFlex=\"100\">\r\n                        \r\n                        <h1 class=\"mat-display-1\">{{mc.name}}</h1>\r\n\r\n                        <p class=\"body-3 text-align-center\">{{mc.description}}</p>\r\n                      </div>\r\n\r\n                      <div *ngIf=\"mc.materials?.length\" class=\"cell wrap\" fxFlex=\"100\">\r\n                        <div fxFlex=\"100\">\r\n                            <h2 class=\"mat-h2\">Необхідні матеріали</h2>\r\n                        </div>\r\n                        <table mat-table [dataSource]=\"mc.materials\" class=\"mat-elevation-z1 app-container-h radius-5\" fxFlex=\"100\">\r\n                          <ng-container matColumnDef=\"name\">\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                          </ng-container>\r\n                          <ng-container matColumnDef=\"value\">\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.value}} </td>\r\n                          </ng-container>\r\n                          <ng-container matColumnDef=\"units\">\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.units}} </td>\r\n                          </ng-container>\r\n                          <tr mat-row *matRowDef=\"let row; columns: ['name', 'value', 'units'];\"></tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"cell\" fxFlex.xs=\"100\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\r\n                    <img class=\"responsive-image mat-elevation-z2 alternative-background\" src=\"{{\r\n                            config.imgPath +\r\n                            config.cloudinary.cloud_name +\r\n                            '/c_fill,w_400,h_300,f_auto/' +\r\n                            'w_270,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/' +\r\n                            mc.mainImage}}\"\r\n                      alt=\"master class image\">\r\n                  </div>\r\n      \r\n                </div>\r\n              </div>  \r\n              <mat-divider></mat-divider>\r\n\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <div class=\"app-container-h\">\r\n                  <div class=\"row mcs-steps padding-bottom\" fxLayout=\"row\" *ngFor=\"let step of mc.steps\">\r\n                  <!-- <div class=\"cell\" fxFlex=\"5\"></div> -->\r\n                  <div class=\"cell mcs-steps-description\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayoutAlign=\"center center\">\r\n                    <p class=\"body-3 text-align-center muted\">\r\n                      {{step.description}}\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"cell\" fxFlex=\"100\" fxFlex.gt-xs=\"50\" fxLayoutAlign=\"center center\">\r\n                    <img class=\"responsive-image mat-elevation-z2 radius alternative-background\" src=\"{{\r\n                          config.imgPath +\r\n                          config.cloudinary.cloud_name +\r\n                          '/c_fill,w_400,h_300,f_auto/' +\r\n                          'w_270,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/' +\r\n                          step.pic}}\"\r\n                          alt=\"master class image\">\r\n                  </div>\r\n                  <!-- <div class=\"cell\" fxFlex=\"5\"></div>    -->\r\n                </div>\r\n                </div>\r\n\r\n              </div>  \r\n\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <app-comments *ngIf=\"config.social.showComments\" [parent_id]=\"mc._id\" [parentCategory]=\"'mc'\"></app-comments>\r\n              </div>  \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</article>"

/***/ }),

/***/ "./src/app/components/shared/mcs-item-detail/mcs-item-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/mcs-item-detail/mcs-item-detail.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/shared/mcs-item-detail/mcs-item-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/shared/mcs-item-detail/mcs-item-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: McsItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McsItemDetailComponent", function() { return McsItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_mc_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/mc.service */ "./src/app/services/mc.service.ts");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_social_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/social.service */ "./src/app/services/social.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var McsItemDetailComponent = /** @class */ (function () {
    function McsItemDetailComponent(route, router, mcService, userService, socialService) {
        this.route = route;
        this.router = router;
        this.mcService = mcService;
        this.userService = userService;
        this.socialService = socialService;
        this.config = src_app_app_config__WEBPACK_IMPORTED_MODULE_5__["config"];
    }
    McsItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (params) {
            return _this.mcService.getMcByIdAndIncViews(params._id);
        }))
            .subscribe(function (result) {
            _this.mc = result;
        }, function (err) { return console.log('err', err); });
    };
    McsItemDetailComponent.prototype.allowTo = function (permitedRole) {
        return this.userService.allowTo(permitedRole);
    };
    McsItemDetailComponent.prototype.goToMcs = function () {
        this.router.navigate(['/mcs', 'ch']);
    };
    McsItemDetailComponent.prototype.onLike = function (action, permission) {
        var _this = this;
        if (!permission) {
            return;
        }
        else {
            // action is true for like, is false for dislike
            var parent_id_1 = this.mc._id;
            var parentCategory = 'mc';
            this.socialService.likesSet(parent_id_1, parentCategory, action)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (result) {
                if (result) {
                    return _this.mcService.getMcById(parent_id_1);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
                }
            }))
                .subscribe(function (result) {
                if (result) {
                    _this.mc = result;
                }
            }, function (err) { return console.log('err', err); });
        }
    };
    McsItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mcs-item-detail',
            template: __webpack_require__(/*! ./mcs-item-detail.component.html */ "./src/app/components/shared/mcs-item-detail/mcs-item-detail.component.html"),
            styles: [__webpack_require__(/*! ./mcs-item-detail.component.scss */ "./src/app/components/shared/mcs-item-detail/mcs-item-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_mc_service__WEBPACK_IMPORTED_MODULE_4__["McService"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
            src_app_services_social_service__WEBPACK_IMPORTED_MODULE_7__["SocialService"]])
    ], McsItemDetailComponent);
    return McsItemDetailComponent;
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

module.exports = "<mat-card id=\"product-item-brief\" (click)=\"onCatalogRouting(child)\">\r\n  <mat-card-content class=\"wrap\">\r\n    <!-- <div *ngIf=\"product\" class=\"container-px0\" fxFlex=\"100\">\r\n      <div class=\"row\" fxLayout=\"row\">\r\n          <section class=\"cell-px0 social-feed-section\" fxFlex=\"100\" fxLayout=\"row\">\r\n              <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                <mat-icon>thumb_up_alt</mat-icon>\r\n                <span>{{product.likes}}</span>\r\n              </div>\r\n              <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                  <mat-icon>thumb_down_alt</mat-icon>\r\n                  <span>{{product.dislikes}}</span>\r\n              </div>\r\n              <div *ngIf=\"config.social.showViews\" class=\"item text-align-center muted\" fxFlex>\r\n                  <mat-icon>remove_red_eye</mat-icon>\r\n                  <span>{{product.views}}</span>\r\n              </div>\r\n              <div *ngIf=\"config.social.showComments\" class=\"item text-align-center muted\" fxFlex>\r\n                  <mat-icon>comment</mat-icon>\r\n                  <span>{{product.comments.length}}</span>\r\n              </div>\r\n          </section>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"mat-card-wide-image\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <!-- product level (no children)-->\r\n      <div *ngIf=\"product\" fxFlex=\"100\">\r\n\r\n        <img *ngIf=\"media.isActive('gt-sm')\" class=\"responsive-image-stretch \" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_400,h_300,f_auto/' +\r\n              'w_200,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/' +\r\n              product.menuImage}}\"\r\n             alt=\"Image\" (click)=\"openDialog(product.menuImage, \r\n             '/c_fill,w_1100,h_825,f_auto/w_550,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/', product.name)\">\r\n        <img *ngIf=\"media.isActive('sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_460,h_345,f_auto/' +\r\n              'w_230,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/' +\r\n              product.menuImage}}\"\r\n              alt=\"Image\" (click)=\"openDialog(product.menuImage,\r\n              '/c_fill,w_900,h_675,f_auto/w_450,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/', product.name)\">\r\n     \r\n        <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image-stretch\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_590,h_443,f_auto/' +\r\n            'w_295,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/' +\r\n            product.menuImage}}\"\r\n            alt=\"Image\" (click)=\"openDialog(product.menuImage, \r\n            '/c_fill,w_590,h_443,f_auto/w_295,g_south_east,x_5,y_5,l_hmade_logo_light_watermark/', product.name)\">\r\n          \r\n      </div>\r\n\r\n      <!-- catalog level -->\r\n      <div *ngIf=\"child\" fxFlex=\"100\" class=\"card\">\r\n        <img *ngIf=\"media.isActive('gt-sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_400,h_300,f_auto/' +\r\n              child.assets[0]}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_460,h_345,f_auto/' +\r\n              child.assets[0]}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image-stretch\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_590,h_443,f_auto/' +\r\n            child.assets[0]}}\"\r\n             alt=\"Image\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- product level (no children)-->\r\n    <section *ngIf=\"!child && product\" class=\"row product-brief-section\" fxFlex=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\" fxLayoutAlign=\"start center\">\r\n        <h3 class=\"mat-h3\">{{product.name}}</h3>\r\n       </div>\r\n      <div class=\"cell product-brief-description\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n        <p class=\"mat-body-1\">{{product.description}}</p>\r\n      </div>\r\n    </section>\r\n    <section *ngIf=\"!child && product && (product.dimensions.width || product.dimensions.height)\" \r\n     class=\"cell-px0 social-feed-section\" fxFlex=\"100\" fxLayout=\"row\">\r\n      <div class=\"item text-align-center\" fxFlex>\r\n        <mat-icon>swap_horiz</mat-icon>\r\n        <span> {{product?.dimensions?.width}}</span>\r\n        <span> см</span>\r\n      </div>\r\n      <div class=\"item text-align-center\" fxFlex>\r\n        <mat-icon>swap_vert</mat-icon>\r\n        <span> {{product?.dimensions?.height}}</span>\r\n        <span> см</span>\r\n      </div>\r\n      </section>\r\n\r\n  </mat-card-content>\r\n  <mat-card-actions fxLayout=\"row\">\r\n    <div fxFlex>\r\n      <!--using with catalog, when no children (product level)\r\n      category_id for breadcrumb-->\r\n      <!-- <a *ngIf=\"!child && category_id\" mat-button\r\n         [routerLink]=\"['/products', 'ch', {outlets: {primary: [category_id, 'details', product._id],\r\n         breadcrumb: [category_id, 'details', product._id]}}]\"\r\n         [queryParams]=\"{name: product.name}\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{product.name}}\r\n      </a> -->\r\n      <!--using with dashboard-->\r\n      <a *ngIf=\"!child && allowTo('manager')\" mat-button aria-label=\"Edit\"\r\n         [routerLink]=\"['/dashboard', 'product-editor-edit', parentCategory_id, parentCategoryName, product._id]\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        Редагувати\r\n      </a>\r\n      <a *ngIf=\"!child && allowTo('manager')\" mat-button aria-label=\"Delete\"\r\n        (click)=\"deleteProductItem(product._id, product.name)\">\r\n        Видалити\r\n      </a>\r\n      <!--using with catalog, when children present-->\r\n      <a *ngIf=\"child\" mat-button [attr.aria-label]=\"child.name\"\r\n         [routerLink]=\"['/products', 'ch', {outlets: {primary: [child._id], breadcrumb: [child._id]}}]\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n         {{child.name}}\r\n      </a>\r\n    </div>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

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
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-popup/image-popup.component */ "./src/app/components/shared/image-popup/image-popup.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../confirm-popup/confirm-popup.component */ "./src/app/components/shared/confirm-popup/confirm-popup.component.ts");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function ProductItemBriefComponent(media, userService, dialog, productService, matSnackBar, router) {
        this.media = media;
        this.userService = userService;
        this.dialog = dialog;
        this.productService = productService;
        this.matSnackBar = matSnackBar;
        this.router = router;
        this.refreshProducts = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ProductItemBriefComponent.prototype.ngOnInit = function () {
    };
    ProductItemBriefComponent.prototype.allowTo = function (permitedRole) {
        return this.userService.allowTo(permitedRole);
    };
    ProductItemBriefComponent.prototype.openDialog = function (image, cloudinaryOptions, title) {
        var imageObject = {
            image: image,
            cloudinaryOptions: cloudinaryOptions,
            title: title
        };
        var dialogRef = this.dialog.open(_image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_5__["ImagePopupComponent"], {
            data: imageObject,
            panelClass: 'custom-dialog-container'
        });
        dialogRef.afterClosed()
            .subscribe(function (result) {
        }, function (err) { return console.log('err delete', err); });
    };
    ProductItemBriefComponent.prototype.onCatalogRouting = function (child) {
        if (child) {
            this.router.navigate(['/products', 'ch', { outlets: { primary: [child._id], breadcrumb: [child._id] } }]);
        }
    };
    ProductItemBriefComponent.prototype.deleteProductItem = function (_id, name) {
        var _this = this;
        console.log('_id, name', _id, name);
        var confirmObject = {
            message: "\u0414\u0456\u0439\u0441\u043D\u043E \u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438: " + name + " ?",
            payload: { _id: _id }
        };
        var dialogRef = this.dialog.open(_confirm_popup_confirm_popup_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmPopupComponent"], {
            data: confirmObject,
        });
        dialogRef.afterClosed()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])(function (result) {
            if (result && result.choise) {
                return _this.productService.deleteProduct(result.payload._id);
            }
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_9__["of"])(null);
        }))
            .subscribe(function (result) {
            if (result) {
                _this.refreshProducts.emit();
                _this.matSnackBar.open(result, '', { duration: 3000, panelClass: 'snack-bar-danger' });
            }
        }, function (err) { return _this.matSnackBar.open(err.error.message || 'Сталася помилка', '', { duration: 3000, panelClass: 'snack-bar-danger' }); });
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
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProductItemBriefComponent.prototype, "refreshProducts", void 0);
    ProductItemBriefComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-item-brief',
            template: __webpack_require__(/*! ./product-item-brief.component.html */ "./src/app/components/shared/product-item-brief/product-item-brief.component.html"),
            styles: [__webpack_require__(/*! ./product-item-brief.component.scss */ "./src/app/components/shared/product-item-brief/product-item-brief.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"],
            src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
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

/***/ "./src/app/components/shared/product-item-feed/product-item-feed.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-feed/product-item-feed.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" fxLayout=\"row\">\r\n  <div class=\"cell\" fxFlex=\"100\">\r\n    <div class=\"item\" fxFlex=\"92px\" fxLayoutAlign=\"center center\">\r\n      <img class=\"responsive-image-stretch\" src=\"{{\r\n          config.imgPath +\r\n          config.cloudinary.cloud_name +\r\n          '/c_fill,w_80,h_60,f_auto/' +\r\n          product.menuImage}}\"\r\n         alt=\"Image\">\r\n    </div>\r\n    <div class=\"item\" fxFlex=\"100%-92px\">\r\n      <p class=\"body-1 muted\">{{product.name}}</p>\r\n      <p class=\"caption text-justify\">{{product.description}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n       "

/***/ }),

/***/ "./src/app/components/shared/product-item-feed/product-item-feed.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/product-item-feed/product-item-feed.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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


var ProductItemFeedComponent = /** @class */ (function () {
    function ProductItemFeedComponent() {
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    ProductItemFeedComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductItemFeedComponent.prototype, "product", void 0);
    ProductItemFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-item-feed',
            template: __webpack_require__(/*! ./product-item-feed.component.html */ "./src/app/components/shared/product-item-feed/product-item-feed.component.html"),
            styles: [__webpack_require__(/*! ./product-item-feed.component.scss */ "./src/app/components/shared/product-item-feed/product-item-feed.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductItemFeedComponent);
    return ProductItemFeedComponent;
}());



/***/ }),

/***/ "./src/app/components/shared/screen-test/screen-test.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/screen-test/screen-test.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <div class=\"cell\">\n      <p class=\"muted\">height {{height}}</p>\n      <p class=\"muted\"> width {{width}}</p>\n  \n    </div>\n  <div class=\"w393\">393</div>\n  <div class=\"w360\">360</div>\n  <div class=\"w350\">350</div>\n  <div class=\"w100\">100</div>\n  <div><img src=\"./assets/images/sample300x300.jpg\" alt=\"300\"></div>\n  <div><img src=\"./assets/images/sample350x350.jpg\" alt=\"300\"></div>\n"

/***/ }),

/***/ "./src/app/components/shared/screen-test/screen-test.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/screen-test/screen-test.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".w393 {\n  width: 393px;\n  background-color: beige; }\n\n.w100 {\n  width: 100px;\n  background-color: #424213; }\n\n.w360 {\n  width: 360px;\n  background-color: burlywood; }\n\n.w350 {\n  width: 350px;\n  background-color: cadetblue; }\n"

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

var ScreenTestComponent = /** @class */ (function () {
    function ScreenTestComponent() {
    }
    ScreenTestComponent.prototype.ngOnInit = function () {
        this.height = window.innerHeight;
        this.width = window.innerWidth;
    };
    ScreenTestComponent.prototype.ngOnChanges = function (changes) {
    };
    ScreenTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-screen-test',
            template: __webpack_require__(/*! ./screen-test.component.html */ "./src/app/components/shared/screen-test/screen-test.component.html"),
            styles: [__webpack_require__(/*! ./screen-test.component.scss */ "./src/app/components/shared/screen-test/screen-test.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScreenTestComponent);
    return ScreenTestComponent;
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
/* harmony import */ var _screen_test_screen_test_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./screen-test/screen-test.component */ "./src/app/components/shared/screen-test/screen-test.component.ts");
/* harmony import */ var _mcs_item_brief_mcs_item_brief_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./mcs-item-brief/mcs-item-brief.component */ "./src/app/components/shared/mcs-item-brief/mcs-item-brief.component.ts");
/* harmony import */ var _mcs_item_detail_mcs_item_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mcs-item-detail/mcs-item-detail.component */ "./src/app/components/shared/mcs-item-detail/mcs-item-detail.component.ts");
/* harmony import */ var _product_item_feed_product_item_feed_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./product-item-feed/product-item-feed.component */ "./src/app/components/shared/product-item-feed/product-item-feed.component.ts");
/* harmony import */ var _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./image-popup/image-popup.component */ "./src/app/components/shared/image-popup/image-popup.component.ts");
/* harmony import */ var src_app_directives_scrolling_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/directives/scrolling.directive */ "./src/app/directives/scrolling.directive.ts");
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
                ng_recaptcha_forms__WEBPACK_IMPORTED_MODULE_13__["RecaptchaFormsModule"],
            ],
            exports: [
                _page_404_page_404_component__WEBPACK_IMPORTED_MODULE_2__["Page404Component"],
                _product_item_brief_product_item_brief_component__WEBPACK_IMPORTED_MODULE_6__["ProductItemBriefComponent"],
                _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemDetailComponent"],
                _product_item_feed_product_item_feed_component__WEBPACK_IMPORTED_MODULE_24__["ProductItemFeedComponent"],
                _crsl_crsl_component__WEBPACK_IMPORTED_MODULE_9__["CrslComponent"],
                _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_10__["FeedbackComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_16__["LandingComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_18__["ContentComponent"],
                _comments_comments_component__WEBPACK_IMPORTED_MODULE_20__["CommentsComponent"],
                _mcs_item_brief_mcs_item_brief_component__WEBPACK_IMPORTED_MODULE_22__["McsItemBriefComponent"],
                _mcs_item_detail_mcs_item_detail_component__WEBPACK_IMPORTED_MODULE_23__["McsItemDetailComponent"]
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
                _screen_test_screen_test_component__WEBPACK_IMPORTED_MODULE_21__["ScreenTestComponent"],
                _mcs_item_brief_mcs_item_brief_component__WEBPACK_IMPORTED_MODULE_22__["McsItemBriefComponent"],
                _mcs_item_detail_mcs_item_detail_component__WEBPACK_IMPORTED_MODULE_23__["McsItemDetailComponent"],
                _product_item_feed_product_item_feed_component__WEBPACK_IMPORTED_MODULE_24__["ProductItemFeedComponent"],
                _image_popup_image_popup_component__WEBPACK_IMPORTED_MODULE_25__["ImagePopupComponent"],
                src_app_directives_scrolling_directive__WEBPACK_IMPORTED_MODULE_26__["ScrollingDirective"],
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
    function ScrollingDirective(el) {
        this.el = el;
    }
    //   ChangeBgColor(color: string) {
    //       this.renderer.setElementStyle(this.el.nativeElement, 'color', color);
    //   }
    //   @HostBinding('style.color') color: string;
    ScrollingDirective.prototype.onWindowScroll = function (event) {
        // this.color = 'red';
        // // do tracking
        var elementPosition = this.el.nativeElement.offsetTop;
        var elementHeight = this.el.nativeElement.offsetHeight;
        var scrollPosition = window.pageYOffset;
        var pointer = 0;
        if (scrollPosition + window.innerHeight >= elementPosition && scrollPosition + window.innerHeight <= elementPosition + 400) {
            console.log('directive', scrollPosition + window.innerHeight);
            console.log('elementPosition', elementPosition);
            console.log('elementPosition + elementHeight', elementPosition + elementHeight);
            console.log('classlist', this.el.nativeElement.classList.add('landing-product'));
            pointer = 1;
        }
        if (scrollPosition + window.innerHeight < elementPosition && pointer === 1) {
            console.log('classlist', this.el.nativeElement.classList.add('landing-product-out'));
            pointer = 0;
        }
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
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
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
        var requiredRoleForAuthorization = next.data.auth; // from routing.module
        return this.userService.userCheckAuthorization(requiredRoleForAuthorization)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (result) {
            // console.log('authguard');
            // // set token for local login every time when check canActivate for router
            // if (result.token) {
            //   this.userService.userLocalLogin(result.token);
            // } else {
            //   this.userService.userLocalRemoveToken('token');
            // }
            return result.permission;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false); }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/no-auth.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guards/no-auth.guard.ts ***!
  \*****************************************/
/*! exports provided: NoAuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoAuthGuard", function() { return NoAuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoAuthGuard = /** @class */ (function () {
    function NoAuthGuard(userService) {
        this.userService = userService;
    }
    NoAuthGuard.prototype.canActivate = function (next, state) {
        // access permitted for all roles included 'null'
        // access denied from next.data.auth
        var restrictedRoleForAuthorization = next.data.auth; // from routing.module
        var user = this.userService.userCookieExtractor();
        if (!user) {
            return true;
        }
        else {
            return !(restrictedRoleForAuthorization.indexOf(user.role) >= 0);
        }
    };
    NoAuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], NoAuthGuard);
    return NoAuthGuard;
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
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
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
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
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

/***/ "./src/app/services/mc.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/mc.service.ts ***!
  \****************************************/
/*! exports provided: McService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "McService", function() { return McService; });
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



var McService = /** @class */ (function () {
    function McService(http, userService) {
        this.http = http;
        this.userService = userService;
    }
    /**
     *
     *
     * @returns {Observable<[IMc]>}
     * @memberof McService
     */
    McService.prototype.getMainPageMcs = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/mc/get-main-page-mcs', httpOptions);
    };
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
    McService.prototype.mcUpsert = function (mc) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.post('api/mc/upsert', mc, httpOptions);
    };
    McService.prototype.deleteMc = function (_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.delete('api/mc/delete/' + _id, httpOptions);
    };
    /**
     *
     *
     * @param {string} _id
     * @returns {Observable<IMc>}
     * @memberof McService
     */
    McService.prototype.getMcById = function (_id) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
        };
        return this.http.get('api/mc/get-mc-by-id/' + _id, httpOptions);
    };
    /**
   *
   *
   * @param {string} _id
   * @returns {Observable<IMc>}
   * @memberof McService
   */
    McService.prototype.getMcByIdAndIncViews = function (_id) {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
        };
        return this.http.get('api/mc/get-mc-by-id-and-inc-views/' + _id, httpOptions);
    };
    /**
     *
     *
     * @param {string} parent
     * @param {boolean} [displayFilter]
     * @returns {Observable<IMc[]>}
     * @memberof McService
     */
    McService.prototype.getMcsByParent = function (parent, displayFilter) {
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
        };
        return this.http.get('api/mc/get-mcs-by-parent', httpOptions);
    };
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
    McService.prototype.getMcsByFilter = function (parent, sort, sortOrder, skip, limit, noMoreChildren) {
        if (parent === void 0) { parent = 'products'; }
        if (sortOrder === void 0) { sortOrder = 1; }
        if (skip === void 0) { skip = 0; }
        if (limit === void 0) { limit = 10; }
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    parent: parent, sort: sort, sortOrder: sortOrder + '', skip: skip + '', limit: limit + '', noMoreChildren: noMoreChildren
                } }),
        };
        return this.http.get('api/mc/get-mcs-by-filter', httpOptions);
    };
    /**
     *
     *
     * @param {File} file
     * @param {string} _id
     * @returns {Observable<string>}
     * @memberof McService
     */
    McService.prototype.addMainImage = function (file, _id) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/mc/add-main-image', formData, httpOptions);
    };
    /**
     *
     *
     * @param {File} file
     * @param {string} _id
     * @returns {Observable<string>}
     * @memberof McService
     */
    McService.prototype.addStepsPic = function (file, _id) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        formData.append('_id', _id);
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': token
            })
        };
        return this.http.post('api/mc/add-steps-pic', formData, httpOptions);
    };
    /**
     *
     *
     * @returns {Observable<{_id: string}[]>}
     * @memberof McService
     */
    McService.prototype.getSkuList = function () {
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.get('api/mc/get-sku-list', httpOptions);
    };
    McService.prototype.mcLocalSetFilter = function (filter) {
        localStorage.setItem('mcQueryParams', JSON.stringify(filter));
    };
    McService.prototype.mcLocalGetFilter = function () {
        return JSON.parse(localStorage.getItem('mcQueryParams'));
    };
    McService.prototype.mcLocalRemoveFilter = function () {
        localStorage.removeItem('mcQueryParams');
    };
    McService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], McService);
    return McService;
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
    ProductService.prototype.deleteProduct = function (_id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
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
     * @returns {Observable<[IProduct]>}
     * @memberof ProductService
     */
    ProductService.prototype.getMainPageProducts = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/product/get-main-page-products', httpOptions);
    };
    /**
     *
     *
     * @param {number} limit
     * @returns {Observable<[IProduct]>}
     * @memberof ProductService
     */
    ProductService.prototype.getNewProducts = function (limit) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
                .set('limit', limit + '')
        };
        return this.http.get('api/product/get-new-products', httpOptions);
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
        // const httpOptions = {
        //   headers: new HttpHeaders({
        //   })
        // };
        return this.http.post('api/product/add-menu-image', formData);
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
    };
    /**
     *
     *
     * @param {IProduct} product
     * @returns {Observable<string>}
     * @memberof ProductService
     */
    ProductService.prototype.productUpsert = function (product) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
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
    SocialService.prototype.likesSet = function (parent_id, parentCategory, action) {
        // action is true for like, is false for dislike
        var token = this.userService.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.put('api/social/likes-set', { parent_id: parent_id, parentCategory: parentCategory, action: action }, httpOptions);
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
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
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
    function UserService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this._logging = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.tokenSyncronizatonProgress = false;
    }
    /**
     * Create new user
     *
     * @param {IUser} user
     * @param {string} recaptcha
     * @returns {Observable<string>}
     * @memberof UserService
     */
    UserService.prototype.userCreate = function (user, recaptcha) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromObject: {
                    recaptcha: recaptcha
                } })
        };
        return this.http.post('api/user/create', user, httpOptions);
    };
    /**
     * Login with username and password
     *
     * @param {IUser} user
     * @returns {Observable<IUser>}
     * @memberof UserService
     */
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
        return this.http.get('api/user/Login', httpOptions);
    };
    /**
     * Login with google social sin in
     *
     * @returns {Observable<any>}
     * @memberof UserService
     */
    UserService.prototype.userGoogleLogin = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/user/auth/google', httpOptions);
    };
    /**
     * Get profile
     *
     * @returns {Observable<IResponse>}
     * @memberof UserService
     */
    UserService.prototype.userGetProfile = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
        return this.http.get('api/user/profile', httpOptions);
    };
    /** Session
     * User logout
     *
     * @returns {Observable<String>}
     * @memberof UserService
     */
    UserService.prototype.userLogout = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.get('api/user/logout', httpOptions);
    };
    /** Session
     * Used for router guard (canActivate)
     *
     * @param {string} requiredRoleForAuthentication
     * @returns {Observable<{permission: boolean, token: string}>}
     * @memberof UserService
     */
    UserService.prototype.userCheckAuthorization = function (requiredRoleForAuthentication) {
        // const token = this.userLocalGetToken('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: "role=" + requiredRoleForAuthentication })
        };
        return this.http.get('api/user/checkAuthorization', httpOptions);
    };
    /**
     * Extract user from cookie
     *
     * @returns {IUser|null}
     * @memberof UserService
     */
    UserService.prototype.userCookieExtractor = function () {
        if (this.cookieService.get('hmade')) {
            var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
            return helper.decodeToken(this.cookieService.get('hmade')).sub;
        }
        return null;
    };
    /**
     * Helper for frontend authorization
     * Check user permittion for some restricted actions
     * like menu displaying..
     *
     * @param {string} permitedRole
     * @returns {boolean}
     * @memberof UserService
     */
    UserService.prototype.allowTo = function (permitedRole) {
        var user = this.userCookieExtractor();
        var permissions = _app_config__WEBPACK_IMPORTED_MODULE_4__["config"].permissions;
        if (!user && permitedRole === 'notUser') {
            return true;
        }
        if (!user) {
            return false;
        }
        var roleFromCookie = user.role;
        if (permissions[roleFromCookie].indexOf(permitedRole) >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    UserService.prototype.restrictTo = function (restrictedRoles) {
        var user = this.userCookieExtractor();
        if (!user) {
            return true;
        }
        var roleFromCookie = user.role;
        if (restrictedRoles.indexOf(roleFromCookie) >= 0) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     * Helper for checking image file before uploading
     *
     * @param {*} eventTarget
     * @returns {IResponse}
     * @memberof UserService
     */
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
    /**
     * First step to reset password
     * Send reset code on email and write its hash in db
     *
     * @param {string} email
     * @param {string} recaptcha
     * @returns {Observable<string>}
     * @memberof UserService
     */
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
    /**
     * Second step to reset password
     * Compare code from email with one in db
     *
     * @param {string} code
     * @param {string} codeToken
     * @returns {Observable<string>}
     * @memberof UserService
     */
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
    /**
     *
     *
     * @param {string} password
     * @param {string} passwordResetToken
     * @returns {Observable<string>}
     * @memberof UserService
     */
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
        var token = localStorage.getItem('token');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': token
            })
        };
        return this.http.get('api/user/email-verification-send', httpOptions);
    };
    /**
     *
     *
     * @param {{name: string, value: string, password: string}} data
     * @returns {Observable<string>}
     * @memberof UserService
     */
    UserService.prototype.userEdit = function (data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
            })
        };
        return this.http.put('api/user/edit', data, httpOptions);
    };
    /**
     *
     *
     * @param {*} file
     * @returns {Observable<string>}
     * @memberof UserService
     */
    UserService.prototype.userEditAvatar = function (file) {
        var formData = new FormData();
        formData.append('file', file, file.name);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            // 'Content-Type':  'application/json',
            })
        };
        return this.http.put('api/user/edit-avatar', formData, httpOptions);
    };
    // syncTokenToSession(): Observable<string> {
    //   const httpOptions = {
    //     headers: new HttpHeaders({
    //       'Content-Type':  'application/json',
    //     })
    //   };
    //   return this.http.get<string>(
    //     'api/user/sync-token-to-session',
    //     httpOptions
    //   );
    // }
    UserService.prototype.logging = function () {
        var user = this.userCookieExtractor();
        this._logging.next(user);
    };
    // create Observable for user login watch
    // userLocalLogin(token) {
    //   user = this.userCookieExtractor();
    //   // if (token) {
    //   //   this.userLocalSetToken('token', token);
    //   // }
    //   // this.userLocalGetCredentials();
    //   this._logging.next(user);
    // }
    // userLocalLogout() {
    //   this.userLocalRemoveToken('token');
    //   const user = null;
    //   this._logging.next(user);
    // }
    UserService.prototype.getUserLocal = function () {
        // return this.userCookieExtractor();
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
    // userLocalGetCredentials() {
    //   return this.userCookieExtractor();
    //   const tokenFromStorage = localStorage.getItem('token');
    //   // if (!tokenFromStorage) {
    //   //   return null;
    //   // }
    //   if ((this.userLocalCheckExpiration('token') && !this.tokenSyncronizatonProgress) || !tokenFromStorage) {
    //     // if tokenSyncronizaton in Progress then wait for result
    //     // to prevent multi requests to server
    //     this.tokenSyncronizatonProgress = true;
    //     // this.syncTokenToSession()
    //     //   .subscribe((token) => {
    //     //     if (token) {
    //     //       this.userLocalSetToken('token', token);
    //     //       this.tokenSyncronizatonProgress = false;
    //     //       const helper = new JwtHelperService();
    //     //       this._logging.next(<IUser>helper.decodeToken(token).sub);
    //     //     } else {
    //     //       this.userLocalRemoveToken('token');
    //     //       this.tokenSyncronizatonProgress = false;
    //     //       this._logging.next(null);
    //     //     }
    //     //   },
    //     //   (err) => {
    //     //     this.userLocalRemoveToken('token');
    //     //     this.tokenSyncronizatonProgress = false;
    //     //     this._logging.next(null);
    //     //   }
    //     // );
    //   }
    // }
    UserService.prototype.userLocalGetExpirationDate = function (tokenKey) {
        var token = localStorage.getItem(tokenKey);
        var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__["JwtHelperService"]();
        return helper.getTokenExpirationDate(token);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
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
        // set error to form control
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
    cloud_name: 'hd1oejweg',
    host: 'http://localhost:8081'
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