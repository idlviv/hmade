(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-products-products-module"],{

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"mat-elevation-z4\" id=\"breadcrumb\">\r\n  <!-- <mat-toolbar-row> -->\r\n    <div class=\"app-container-h\">\r\n      <div class=\"container\">\r\n        <div class=\"row\" fxLayout>\r\n          <div class=\"cell wrap\" fxFlex fxLayout=\"row\">\r\n            <div>\r\n              <a class=\"link animationAppear1s\"\r\n                 [routerLink]=\"['/products', 'ch']\"\r\n                 [routerLinkActive]=\"['primary-light']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                 <span class=\"type2\"><mat-icon class=\"mat-icon-aligner\">label_important</mat-icon></span> \r\n              </a>\r\n            </div>\r\n\r\n            <div *ngFor=\"let hierarchyCategoryItem of hierarchyCategory\">\r\n              <a class=\"link animationAppear1s\" *ngIf=\"!processing\"\r\n                 [routerLink]=\"['/products', 'ch', {outlets: {primary: [hierarchyCategoryItem._id], breadcrumb: [hierarchyCategoryItem._id]}}]\"\r\n                 [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                 <span class=\"type2\">{{hierarchyCategoryItem.name}}<mat-icon class=\"mat-icon-aligner\">keyboard_arrow_right</mat-icon></span></a>\r\n            </div>\r\n            <div *ngIf=\"!processing\" fxHide.lt-md>\r\n              <a *ngIf=\"productName\" disabled class=\"link animationAppear1s\">\r\n                 <span class=\"type2\">{{productName}}</span></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <!-- </mat-toolbar-row> -->\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.ts ***!
  \************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(route, catalogService) {
        this.route = route;
        this.catalogService = catalogService;
        this.processing = true;
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var $paramMap = this.route.paramMap;
        var $queryParamMap = this.route.queryParamMap;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])($paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (paramMap) {
            _this.processing = true;
            _this.category_id = paramMap.get('category_id');
            if (!_this.category_id) {
                return _this.catalogService.getAllParents('products');
            }
            return _this.catalogService.getAllParents(_this.category_id);
        })), $queryParamMap)
            .subscribe(function (result) {
            _this.productName = result[1].get('name');
            _this.hierarchyCategory = result[0].hierarchy;
            _this.hierarchyCategory.push(result[0]);
            _this.hierarchyCategory.splice(0, 3);
            _this.processing = false;
        }, function (err) { return console.log('Помилка breadcrumb', err); });
    };
    BreadcrumbComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__(/*! ./breadcrumb.component.html */ "./src/app/components/products/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/components/products/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_4__["CatalogService"]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"products\">\r\n  <div class=\"container\">\r\n    <div class=\"app-container-h app-container-v\">\r\n          <div class=\"container\">\r\n            <div class=\"row\" fxLayout=\"row\">\r\n\r\n                \r\n                <div *ngFor=\"let product of products; let i = index\" class=\"cell\" [ngClass]=\"{animationAppear1s: i <= skip + portionOfProducts}\"\r\n                  fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">\r\n                <app-product-item-brief [product]=\"product\" [category_id]=\"category_id\" (refreshProducts)=\"refreshProducts()\"></app-product-item-brief>\r\n              </div>\r\n              <div *ngFor=\"let child of children\" class=\"cell animationAppear1s\"\r\n                  fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">\r\n                <app-product-item-brief  [child]=\"child\"></app-product-item-brief>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"processing && products && products.length\" class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <mat-progress-bar mode=\"buffer\"></mat-progress-bar>\r\n              </div>\r\n            </div>\r\n          </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.ts ***!
  \******************************************************************************/
/*! exports provided: ProductsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsListComponent", function() { return ProductsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsListComponent = /** @class */ (function () {
    function ProductsListComponent(route, productService, catalogService, media) {
        this.route = route;
        this.productService = productService;
        this.catalogService = catalogService;
        this.media = media;
        this.products = [];
        this.processing = false;
        this.totalProductsLength = 0;
    }
    ProductsListComponent.prototype.ngOnChanges = function () {
    };
    ProductsListComponent.prototype.ngOnInit = function () {
        if (this.media.isActive('xs')) {
            this.portionOfProducts = 3;
            this.refreshProducts(-1, this.products.length, this.portionOfProducts);
        }
        else if (this.media.isActive('sm')) {
            this.portionOfProducts = 6;
            this.refreshProducts(-1, this.products.length, this.portionOfProducts);
        }
        else if (this.media.isActive('md')) {
            this.portionOfProducts = 6;
            this.refreshProducts(-1, this.products.length, this.portionOfProducts);
        }
        else if (this.media.isActive('gt-md')) {
            this.portionOfProducts = 8;
            this.refreshProducts(-1, this.products.length, this.portionOfProducts);
        }
    };
    // Listening of page bottom reached
    ProductsListComponent.prototype.onScroll = function (event) {
        if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 300) {
            console.log('this.totalProductsLength', this.totalProductsLength);
            if (!this.processing &&
                this.totalProductsLength > this.products.length &&
                this.totalProductsLength) {
                this.refreshProducts(-1, this.products.length, this.portionOfProducts);
            }
        }
    };
    ProductsListComponent.prototype.refreshProducts = function (sort, skip, limit) {
        var _this = this;
        this.processing = true;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (param) {
            _this.category_id = param.get('category_id');
            if (!_this.category_id) {
                // starting from root
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }
            // starting from selected category
            return _this.catalogService.getCategoryById(_this.category_id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (category) {
            if (!category) {
                // get children of root
                return _this.catalogService.getChildren('products');
            }
            else {
                _this.category = category.data;
                // get children of selected category
                return _this.catalogService.getChildren(_this.category_id);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (children) {
            _this.children = children.data;
            if (!_this.children.length) {
                // if no children - show products
                _this.skip = skip;
                return _this.productService.getProductsByParent(_this.category_id, 'products', true, sort, skip, limit);
            }
            else {
                _this.products = [];
                return _this.productService.getProductsByParent(null, 'products', true, sort, skip, limit);
            }
        }))
            .subscribe(function (result) {
            var _a;
            _this.totalProductsLength = result[0].total ? result[0].total.totalProductsLength : 0;
            (_a = _this.products).push.apply(_a, result[0].products);
            _this.processing = false;
        }, function (err) { return console.log('error', err.e); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ProductsListComponent.prototype, "onScroll", null);
    ProductsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products-list',
            template: __webpack_require__(/*! ./products-list.component.html */ "./src/app/components/products/products-list/products-list.component.html"),
            styles: [__webpack_require__(/*! ./products-list.component.scss */ "./src/app/components/products/products-list/products-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            _services_catalog_service__WEBPACK_IMPORTED_MODULE_5__["CatalogService"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["ObservableMedia"]])
    ], ProductsListComponent);
    return ProductsListComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/products/products-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: ProductsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsRoutingModule", function() { return ProductsRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var productsRoutes = [
    {
        path: 'ch',
        component: _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        children: [
            {
                path: '',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductsListComponent"],
            },
            {
                path: '',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            {
                path: ':category_id',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductsListComponent"],
            },
            {
                path: ':category_id',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            {
                path: ':category_id/details/:product_id',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
        ],
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(productsRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/products/products.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"app-container-h\">-->\r\n  <!--<div class=\"container\">-->\r\n    <router-outlet name=\"breadcrumb\"></router-outlet>\r\n  <!--</div>-->\r\n<!--</div>-->\r\n<!-- <div id=\"products\" class=\"app-container-h app-container-v\">\r\n  <div class=\"container\"> -->\r\n    <router-outlet></router-outlet>\r\n  <!-- </div>\r\n</div> -->"

/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/products/products.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/products/products.component.ts ***!
  \***********************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
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

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/products/products.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/products/products.module.ts ***!
  \********************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/components/products/products-routing.module.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _products_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProductsRoutingModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ],
            exports: [],
            declarations: [
                _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductsListComponent"],
                _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_6__["BreadcrumbComponent"],
                _products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-products-products-module.js.map