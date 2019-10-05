(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-products-products-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/breadcrumb/breadcrumb.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/breadcrumb/breadcrumb.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"mat-elevation-z4\" id=\"breadcrumb\">\r\n  <!-- <mat-toolbar-row> -->\r\n  <div class=\"app-container-h\">\r\n    <div class=\"container\">\r\n      <div class=\"row\" fxLayout>\r\n        <div class=\"cell wrap\" fxFlex fxLayout=\"row\">\r\n          <div>\r\n            <a class=\"link animationAppear1s\" [routerLink]=\"['/products', 'ch']\" [routerLinkActive]=\"['primary-light']\"\r\n              [routerLinkActiveOptions]=\"{exact: true}\">\r\n              <span class=\"type2\">\r\n                <mat-icon>label_important</mat-icon>\r\n              </span>\r\n            </a>\r\n          </div>\r\n\r\n          <div *ngFor=\"let hierarchyCategoryItem of hierarchyCategory\">\r\n            <a class=\"link animationAppear1s\" *ngIf=\"!processing\" [routerLink]=\"['/products', 'ch', \r\n                 {outlets: {primary: [hierarchyCategoryItem._id], breadcrumb: [hierarchyCategoryItem._id]}}]\" \r\n                 [queryParams]=\"{seoTitle: hierarchyCategoryItem.seoTitle, seoMeta: hierarchyCategoryItem.seoMeta}\"\r\n                 [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n              <span class=\"type2\">\r\n                <span>\r\n                  {{hierarchyCategoryItem.name}}\r\n                </span>\r\n                <mat-icon class=\"mat-icon-aligner\">keyboard_arrow_right</mat-icon>\r\n              </span>\r\n            </a>\r\n          </div>\r\n          <!-- <div *ngIf=\"!processing\" fxHide.lt-md>\r\n              <a *ngIf=\"productName\" disabled class=\"link animationAppear1s\">\r\n                 <span class=\"type2\">{{productName}}</span>\r\n                </a>\r\n            </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- </mat-toolbar-row> -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products-list/products-list.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products-list/products-list.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"products\">\r\n  <div class=\"container\">\r\n    <div class=\"app-container-h app-container-v\">\r\n      <div class=\"container\">\r\n        <div class=\"row\" fxLayout=\"row\">\r\n          <div class=\"cell\">\r\n            <h1 class=\"mat-h1 title\">Мої роботи</h1>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" fxLayout=\"row\">\r\n          <div *ngFor=\"let product of products; let i = index\" class=\"cell\"\r\n            [ngClass]=\"{animationAppear1s: i <= skip + portionOfProducts}\" fxFlex.xs=\"100\" fxFlex.sm=\"50\"\r\n            fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">\r\n            <app-product-item-brief [product]=\"product\" [category_id]=\"category_id\"\r\n              (refreshProducts)=\"refreshProducts()\"></app-product-item-brief>\r\n          </div>\r\n\r\n          <div *ngFor=\"let child of children\" class=\"cell animationAppear1s\" fxFlex.xs=\"100\" fxFlex.sm=\"50\"\r\n            fxFlex.md=\"33.3\" fxFlex.gt-md=\"25\">\r\n            <app-product-item-brief [child]=\"child\"></app-product-item-brief>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"processing && products && products.length\" class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n          <div class=\"cell\" fxFlex=\"100\">\r\n            <mat-progress-bar mode=\"query\" color=\"accent\"></mat-progress-bar>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"app-container-h\">-->\r\n  <!--<div class=\"container\">-->\r\n    <router-outlet name=\"breadcrumb\"></router-outlet>\r\n  <!--</div>-->\r\n<!--</div>-->\r\n<!-- <div id=\"products\" class=\"app-container-h app-container-v\">\r\n  <div class=\"container\"> -->\r\n    <router-outlet></router-outlet>\r\n  <!-- </div>\r\n</div> -->");

/***/ }),

/***/ "./src/app/components/products/breadcrumb/breadcrumb.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/products/breadcrumb/breadcrumb.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");






let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(route, catalogService) {
        this.route = route;
        this.catalogService = catalogService;
        this.processing = true;
    }
    ngOnInit() {
        const $paramMap = this.route.paramMap;
        const $queryParamMap = this.route.queryParamMap;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])($paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(paramMap => {
            this.processing = true;
            this.category_id = paramMap.get('category_id');
            if (!this.category_id) {
                return this.catalogService.getAllParents('products');
            }
            return this.catalogService.getAllParents(this.category_id);
        })), $queryParamMap)
            .subscribe(result => {
            this.productName = result[1].get('name');
            this.hierarchyCategory = result[0].hierarchy;
            this.hierarchyCategory.push(result[0]);
            this.hierarchyCategory.splice(0, 3);
            this.processing = false;
        }, err => console.log('Помилка breadcrumb', err));
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_catalog_service__WEBPACK_IMPORTED_MODULE_5__["CatalogService"] }
];
BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breadcrumb',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/breadcrumb/breadcrumb.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/components/products/breadcrumb/breadcrumb.component.scss")).default]
    })
], BreadcrumbComponent);



/***/ }),

/***/ "./src/app/components/products/products-list/products-list.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/components/products/products-list/products-list.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMtbGlzdC9wcm9kdWN0cy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_catalog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/catalog.service */ "./src/app/services/catalog.service.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");








// import { Title, Meta } from '@angular/platform-browser';
let ProductsListComponent = class ProductsListComponent {
    constructor(route, productService, catalogService, media) {
        this.route = route;
        this.productService = productService;
        this.catalogService = catalogService;
        this.media = media;
        this.products = [];
        this.processing = false;
        this.totalProductsLength = 0;
    }
    ngOnInit() {
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
    }
    // Listening of page bottom reached
    onScroll(event) {
        if ((window.innerHeight + pageYOffset) >= document.body.offsetHeight - 300) {
            if (!this.processing &&
                this.totalProductsLength > this.products.length &&
                this.totalProductsLength) {
                this.refreshProducts(-1, this.products.length, this.portionOfProducts);
            }
        }
    }
    refreshProducts(sort, skip, limit) {
        this.processing = true;
        // const $queryParamMap = this.route.queryParamMap;
        // const $paramMap = this.route.paramMap;
        this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(param => {
            this.category_id = param.get('category_id');
            if (!this.category_id) {
                // starting from root
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            }
            // starting from selected category
            return this.catalogService.getCategoryById(this.category_id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(category => {
            if (!category) {
                // get children of root
                return this.catalogService.getChildren('products');
            }
            else {
                this.category = category.data;
                // get children of selected category
                return this.catalogService.getChildren(this.category_id);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(children => {
            this.children = children.data;
            if (!this.children.length) {
                // if no children - show products
                this.skip = skip;
                return this.productService.getProductsByParent(this.category_id, 'products', true, sort, skip, limit);
            }
            else {
                this.products = [];
                return this.productService.getProductsByParent(null, 'products', true, sort, skip, limit);
            }
        }))
            .subscribe(result => {
            this.totalProductsLength = result[0].total ? result[0].total.totalProductsLength : 0;
            this.products.push(...result[0].products);
            this.processing = false;
        }, err => console.log('error', err.e));
    }
};
ProductsListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _services_catalog_service__WEBPACK_IMPORTED_MODULE_6__["CatalogService"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__["MediaObserver"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], ProductsListComponent.prototype, "onScroll", null);
ProductsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products-list/products-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products-list.component.scss */ "./src/app/components/products/products-list/products-list.component.scss")).default]
    })
], ProductsListComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");






const productsRoutes = [
    {
        path: 'ch',
        component: _products_component__WEBPACK_IMPORTED_MODULE_4__["ProductsComponent"],
        children: [
            {
                path: '',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListComponent"],
            },
            {
                path: '',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            {
                path: ':category_id',
                component: _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductsListComponent"],
            },
            {
                path: ':category_id',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
            // {
            //   path: ':category_id',
            //   children: [
            //     {
            //       path: '',
            //       component: ProductsListComponent,
            //     },
            //     {
            //       path: '',
            //       component: BreadcrumbComponent,
            //       outlet: 'breadcrumb',
            //     },
            //   ]
            // },
            {
                path: ':category_id/details/:product_id',
                component: _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_5__["BreadcrumbComponent"],
                outlet: 'breadcrumb',
            },
        ],
    },
];
let ProductsRoutingModule = class ProductsRoutingModule {
};
ProductsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(productsRoutes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    })
], ProductsRoutingModule);



/***/ }),

/***/ "./src/app/components/products/products.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/products/products.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductsComponent = class ProductsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.scss */ "./src/app/components/products/products.component.scss")).default]
    })
], ProductsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/components/shared/shared.module.ts");
/* harmony import */ var _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products-list/products-list.component */ "./src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var _products_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products-routing.module */ "./src/app/components/products/products-routing.module.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/components/products/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products.component */ "./src/app/components/products/products.component.ts");









let ProductsModule = class ProductsModule {
};
ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _products_routing_module__WEBPACK_IMPORTED_MODULE_6__["ProductsRoutingModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        ],
        exports: [],
        declarations: [
            _products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductsListComponent"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbComponent"],
            _products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
        ]
    })
], ProductsModule);



/***/ })

}]);
//# sourceMappingURL=components-products-products-module.js.map