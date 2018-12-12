(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-dashboard-dashboard-module~components-user-user-module"],{

/***/ "./node_modules/@angular/flex-layout/esm5/core.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/core.es5.js ***!
  \************************************************************/
/*! exports provided: removeStyles, BROWSER_PROVIDER, CLASS_NAME, CoreModule, MediaChange, StylesheetMap, STYLESHEET_MAP_PROVIDER_FACTORY, STYLESHEET_MAP_PROVIDER, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, BaseDirective, BaseDirectiveAdapter, BaseFxDirective, RESPONSIVE_ALIASES, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MatchMedia, MockMatchMedia, MockMediaQueryList, MockMatchMediaProvider, ServerMediaQueryList, ServerMatchMedia, MediaMonitor, MEDIA_MONITOR_PROVIDER_FACTORY, MEDIA_MONITOR_PROVIDER, ObservableMedia, MediaService, ObservableMediaProvider, OBSERVABLE_MEDIA_PROVIDER_FACTORY, OBSERVABLE_MEDIA_PROVIDER, KeyOptions, ResponsiveActivation, StyleUtils, validateBasis */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeStyles", function() { return removeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function() { return BROWSER_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return CLASS_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaChange", function() { return MediaChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StylesheetMap", function() { return StylesheetMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLESHEET_MAP_PROVIDER_FACTORY", function() { return STYLESHEET_MAP_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STYLESHEET_MAP_PROVIDER", function() { return STYLESHEET_MAP_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function() { return DEFAULT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function() { return LAYOUT_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function() { return SERVER_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function() { return BREAKPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDirective", function() { return BaseDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDirectiveAdapter", function() { return BaseDirectiveAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseFxDirective", function() { return BaseFxDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESPONSIVE_ALIASES", function() { return RESPONSIVE_ALIASES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function() { return DEFAULT_BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return ScreenTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function() { return ORIENTATION_BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function() { return BreakPointRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return BREAKPOINTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return MatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMatchMedia", function() { return MockMatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMediaQueryList", function() { return MockMediaQueryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockMatchMediaProvider", function() { return MockMatchMediaProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMediaQueryList", function() { return ServerMediaQueryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerMatchMedia", function() { return ServerMatchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaMonitor", function() { return MediaMonitor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_MONITOR_PROVIDER_FACTORY", function() { return MEDIA_MONITOR_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_MONITOR_PROVIDER", function() { return MEDIA_MONITOR_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMedia", function() { return ObservableMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservableMediaProvider", function() { return ObservableMediaProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBSERVABLE_MEDIA_PROVIDER_FACTORY", function() { return OBSERVABLE_MEDIA_PROVIDER_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OBSERVABLE_MEDIA_PROVIDER", function() { return OBSERVABLE_MEDIA_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyOptions", function() { return KeyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveActivation", function() { return ResponsiveActivation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleUtils", function() { return StyleUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateBasis", function() { return validateBasis; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Find all of the server-generated stylings, if any, and remove them
 * This will be in the form of inline classes and the style block in the
 * head of the DOM
 * @param {?} _document
 * @param {?} platformId
 * @return {?}
 */
function removeStyles(_document, platformId) {
    return function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId)) {
            /** @type {?} */
            var elements = Array.from(_document.querySelectorAll("[class*=" + CLASS_NAME + "]"));
            /** @type {?} */
            var classRegex_1 = /\bflex-layout-.+?\b/g;
            elements.forEach(function (el) {
                el.classList.contains(CLASS_NAME + "ssr") && el.parentNode ?
                    el.parentNode.removeChild(el) : el.className.replace(classRegex_1, '');
            });
        }
    };
}
/** *
 *  Provider to remove SSR styles on the browser
  @type {?} */
var BROWSER_PROVIDER = {
    provide: /** @type {?} */ (_angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"]),
    useFactory: removeStyles,
    deps: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]],
    multi: true
};
/** @type {?} */
var CLASS_NAME = 'flex-layout-';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var BREAKPOINT = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, collect all breakpoints into one provider', {
    providedIn: 'root',
    factory: function () { return null; }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var RESPONSIVE_ALIASES = [
    'xs', 'gt-xs', 'sm', 'gt-sm', 'md', 'gt-md', 'lg', 'gt-lg', 'xl'
];
/** @type {?} */
var DEFAULT_BREAKPOINTS = [
    {
        alias: 'xs',
        mediaQuery: '(min-width: 0px) and (max-width: 599px)'
    },
    {
        alias: 'gt-xs',
        overlapping: true,
        mediaQuery: '(min-width: 600px)'
    },
    {
        alias: 'lt-sm',
        overlapping: true,
        mediaQuery: '(max-width: 599px)'
    },
    {
        alias: 'sm',
        mediaQuery: '(min-width: 600px) and (max-width: 959px)'
    },
    {
        alias: 'gt-sm',
        overlapping: true,
        mediaQuery: '(min-width: 960px)'
    },
    {
        alias: 'lt-md',
        overlapping: true,
        mediaQuery: '(max-width: 959px)'
    },
    {
        alias: 'md',
        mediaQuery: '(min-width: 960px) and (max-width: 1279px)'
    },
    {
        alias: 'gt-md',
        overlapping: true,
        mediaQuery: '(min-width: 1280px)'
    },
    {
        alias: 'lt-lg',
        overlapping: true,
        mediaQuery: '(max-width: 1279px)'
    },
    {
        alias: 'lg',
        mediaQuery: '(min-width: 1280px) and (max-width: 1919px)'
    },
    {
        alias: 'gt-lg',
        overlapping: true,
        mediaQuery: '(min-width: 1920px)'
    },
    {
        alias: 'lt-xl',
        overlapping: true,
        mediaQuery: '(max-width: 1919px)'
    },
    {
        alias: 'xl',
        mediaQuery: '(min-width: 1920px) and (max-width: 5000px)'
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/** @type {?} */
var HANDSET_PORTRAIT = '(orientation: portrait) and (max-width: 599px)';
/** @type {?} */
var HANDSET_LANDSCAPE = '(orientation: landscape) and (max-width: 959px)';
/** @type {?} */
var TABLET_LANDSCAPE = '(orientation: landscape) and (min-width: 960px) and (max-width: 1279px)';
/** @type {?} */
var TABLET_PORTRAIT = '(orientation: portrait) and (min-width: 600px) and (max-width: 839px)';
/** @type {?} */
var WEB_PORTRAIT = '(orientation: portrait) and (min-width: 840px)';
/** @type {?} */
var WEB_LANDSCAPE = '(orientation: landscape) and (min-width: 1280px)';
/** @type {?} */
var ScreenTypes = {
    'HANDSET': HANDSET_PORTRAIT + ", " + HANDSET_LANDSCAPE,
    'TABLET': TABLET_PORTRAIT + " , " + TABLET_LANDSCAPE,
    'WEB': WEB_PORTRAIT + ", " + WEB_LANDSCAPE + " ",
    'HANDSET_PORTRAIT': "" + HANDSET_PORTRAIT,
    'TABLET_PORTRAIT': TABLET_PORTRAIT + " ",
    'WEB_PORTRAIT': "" + WEB_PORTRAIT,
    'HANDSET_LANDSCAPE': HANDSET_LANDSCAPE + "]",
    'TABLET_LANDSCAPE': "" + TABLET_LANDSCAPE,
    'WEB_LANDSCAPE': "" + WEB_LANDSCAPE
};
/** *
 * Extended Breakpoints for handset/tablets with landscape or portrait orientations
  @type {?} */
var ORIENTATION_BREAKPOINTS = [
    { 'alias': 'handset', 'mediaQuery': ScreenTypes.HANDSET },
    { 'alias': 'handset.landscape', 'mediaQuery': ScreenTypes.HANDSET_LANDSCAPE },
    { 'alias': 'handset.portrait', 'mediaQuery': ScreenTypes.HANDSET_PORTRAIT },
    { 'alias': 'tablet', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.landscape', 'mediaQuery': ScreenTypes.TABLET },
    { 'alias': 'tablet.portrait', 'mediaQuery': ScreenTypes.TABLET_PORTRAIT },
    { 'alias': 'web', 'mediaQuery': ScreenTypes.WEB, overlapping: true },
    { 'alias': 'web.landscape', 'mediaQuery': ScreenTypes.WEB_LANDSCAPE, overlapping: true },
    { 'alias': 'web.portrait', 'mediaQuery': ScreenTypes.WEB_PORTRAIT, overlapping: true }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALIAS_DELIMITERS = /(\.|-|_)/g;
/**
 * @param {?} part
 * @return {?}
 */
function firstUpperCase(part) {
    /** @type {?} */
    var first = part.length > 0 ? part.charAt(0) : '';
    /** @type {?} */
    var remainder = (part.length > 1) ? part.slice(1) : '';
    return first.toUpperCase() + remainder;
}
/**
 * Converts snake-case to SnakeCase.
 * @param {?} name Text to UpperCamelCase
 * @return {?}
 */
function camelCase(name) {
    return name
        .replace(ALIAS_DELIMITERS, '|')
        .split('|')
        .map(firstUpperCase)
        .join('');
}
/**
 * For each breakpoint, ensure that a Suffix is defined;
 * fallback to UpperCamelCase the unique Alias value
 * @param {?} list
 * @return {?}
 */
function validateSuffixes(list) {
    list.forEach(function (bp) {
        if (!bp.suffix) {
            bp.suffix = camelCase(bp.alias); // create Suffix value based on alias
            bp.overlapping = !!bp.overlapping; // ensure default value
        }
    });
    return list;
}
/**
 * Merge a custom breakpoint list with the default list based on unique alias values
 *  - Items are added if the alias is not in the default list
 *  - Items are merged with the custom override if the alias exists in the default list
 * @param {?} defaults
 * @param {?=} custom
 * @return {?}
 */
function mergeByAlias(defaults, custom) {
    if (custom === void 0) { custom = []; }
    /** @type {?} */
    var dict = {};
    defaults.forEach(function (bp) {
        dict[bp.alias] = bp;
    });
    // Merge custom breakpoints
    custom.forEach(function (bp) {
        if (dict[bp.alias]) {
            extendObject(dict[bp.alias], bp);
        }
        else {
            dict[bp.alias] = bp;
        }
    });
    return validateSuffixes(Object.keys(dict).map(function (k) { return dict[k]; }));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_CONFIG = {
    addFlexToParent: true,
    addOrientationBps: false,
    disableDefaultBps: false,
    disableVendorPrefixes: false,
    serverLoaded: false,
    useColumnBasisZero: true,
};
/** @type {?} */
var LAYOUT_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Flex Layout token, config options for the library', {
    providedIn: 'root',
    factory: function () { return DEFAULT_CONFIG; }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 *  Injection token unique to the flex-layout library.
 *  Use this token when build a custom provider (see below).
  @type {?} */
var BREAKPOINTS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('Token (@angular/flex-layout) Breakpoints', {
    providedIn: 'root',
    factory: function () {
        /** @type {?} */
        var breakpoints = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINT);
        /** @type {?} */
        var layoutConfig = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG);
        /** @type {?} */
        var bpFlattenArray = [].concat.apply([], (breakpoints || [])
            .map(function (v) { return Array.isArray(v) ? v : [v]; }));
        /** @type {?} */
        var builtIns = (layoutConfig.disableDefaultBps ? [] : DEFAULT_BREAKPOINTS)
            .concat(layoutConfig.addOrientationBps ? ORIENTATION_BREAKPOINTS : []);
        return mergeByAlias(builtIns, bpFlattenArray);
    }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Registry of 1..n MediaQuery breakpoint ranges
 * This is published as a provider and may be overridden from custom, application-specific ranges
 *
 */
var BreakPointRegistry = /** @class */ (function () {
    function BreakPointRegistry(_registry) {
        this._registry = _registry;
    }
    Object.defineProperty(BreakPointRegistry.prototype, "items", {
        /**
         * Accessor to raw list
         */
        get: /**
         * Accessor to raw list
         * @return {?}
         */
        function () {
            return this._registry.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "sortedItems", {
        /**
         * Accessor to sorted list used for registration with matchMedia API
         *
         * NOTE: During breakpoint registration, we want to register the overlaps FIRST
         *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
         *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
         */
        get: /**
         * Accessor to sorted list used for registration with matchMedia API
         *
         * NOTE: During breakpoint registration, we want to register the overlaps FIRST
         *       so the non-overlaps will trigger the MatchMedia:BehaviorSubject last!
         *       And the largest, non-overlap, matching breakpoint should be the lastReplay value
         * @return {?}
         */
        function () {
            /** @type {?} */
            var overlaps = this._registry.filter(function (it) { return it.overlapping === true; });
            /** @type {?} */
            var nonOverlaps = this._registry.filter(function (it) { return it.overlapping !== true; });
            return overlaps.concat(nonOverlaps);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     */
    /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    BreakPointRegistry.prototype.findByAlias = /**
     * Search breakpoints by alias (e.g. gt-xs)
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this._registry.find(function (bp) { return bp.alias == alias; }) || null;
    };
    /**
     * @param {?} query
     * @return {?}
     */
    BreakPointRegistry.prototype.findByQuery = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this._registry.find(function (bp) { return bp.mediaQuery == query; }) || null;
    };
    Object.defineProperty(BreakPointRegistry.prototype, "overlappings", {
        /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         */
        get: /**
         * Get all the breakpoints whose ranges could overlapping `normal` ranges;
         * e.g. gt-sm overlaps md, lg, and xl
         * @return {?}
         */
        function () {
            return this._registry.filter(function (it) { return it.overlapping == true; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "aliases", {
        /**
         * Get list of all registered (non-empty) breakpoint aliases
         */
        get: /**
         * Get list of all registered (non-empty) breakpoint aliases
         * @return {?}
         */
        function () {
            return this._registry.map(function (it) { return it.alias; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BreakPointRegistry.prototype, "suffixes", {
        /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         */
        get: /**
         * Aliases are mapped to properties using suffixes
         * e.g.  'gt-sm' for property 'layout'  uses suffix 'GtSm'
         * for property layoutGtSM.
         * @return {?}
         */
        function () {
            return this._registry.map(function (it) { return !!it.suffix ? it.suffix : ''; });
        },
        enumerable: true,
        configurable: true
    });
    BreakPointRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    BreakPointRegistry.ctorParameters = function () { return [
        { type: Array, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [BREAKPOINTS,] }] }
    ]; };
    /** @nocollapse */ BreakPointRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function BreakPointRegistry_Factory() { return new BreakPointRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BREAKPOINTS)); }, token: BreakPointRegistry, providedIn: "root" });
    return BreakPointRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Class instances emitted [to observers] for each mql notification
 */
var  /**
 * Class instances emitted [to observers] for each mql notification
 */
MediaChange = /** @class */ (function () {
    function MediaChange(matches, mediaQuery, mqAlias, suffix // e.g.   GtSM, Md, GtLg
    ) {
        if (matches === void 0) { matches = false; }
        if (mediaQuery === void 0) { mediaQuery = 'all'; }
        if (mqAlias === void 0) { mqAlias = ''; }
        if (suffix === void 0) { suffix = ''; }
        this.matches = matches;
        this.mediaQuery = mediaQuery;
        this.mqAlias = mqAlias;
        this.suffix = suffix;
    }
    /**
     * @return {?}
     */
    MediaChange.prototype.clone = /**
     * @return {?}
     */
    function () {
        return new MediaChange(this.matches, this.mediaQuery, this.mqAlias, this.suffix);
    };
    return MediaChange;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MediaMonitor configures listeners to mediaQuery changes and publishes an Observable facade to
 * convert mediaQuery change callbacks to subscriber notifications. These notifications will be
 * performed within the ng Zone to trigger change detections and component updates.
 *
 * NOTE: both mediaQuery activations and de-activations are announced in notifications
 */
var MatchMedia = /** @class */ (function () {
    function MatchMedia(_zone, _platformId, _document) {
        this._zone = _zone;
        this._platformId = _platformId;
        this._document = _document;
        this._registry = new Map();
        this._source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
        this._observable$ = this._source.asObservable();
    }
    /**
     * For the specified mediaQuery?
     */
    /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.isActive = /**
     * For the specified mediaQuery?
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        /** @type {?} */
        var mql = this._registry.get(mediaQuery);
        return !!mql ? mql.matches : false;
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     */
    /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.observe = /**
     * External observers can watch for all (or a specific) mql changes.
     * Typically used by the MediaQueryAdaptor; optionally available to components
     * who wish to use the MediaMonitor as mediaMonitor$ observable service.
     *
     * NOTE: if a mediaQuery is not specified, then ALL mediaQuery activations will
     *       be announced.
     * @param {?=} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        if (mediaQuery) {
            this.registerQuery(mediaQuery);
        }
        return this._observable$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (change) {
            return mediaQuery ? (change.mediaQuery === mediaQuery) : true;
        }));
    };
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     */
    /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    MatchMedia.prototype.registerQuery = /**
     * Based on the BreakPointRegistry provider, register internal listeners for each unique
     * mediaQuery. Each listener emits specific MediaChange data to observers
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        var _this = this;
        /** @type {?} */
        var list = normalizeQuery(mediaQuery);
        if (list.length > 0) {
            this._prepareQueryCSS(list, this._document);
            list.forEach(function (query) {
                /** @type {?} */
                var mql = _this._registry.get(query);
                /** @type {?} */
                var onMQLEvent = function (e) {
                    _this._zone.run(function () {
                        /** @type {?} */
                        var change = new MediaChange(e.matches, query);
                        _this._source.next(change);
                    });
                };
                if (!mql) {
                    mql = _this._buildMQL(query);
                    mql.addListener(onMQLEvent);
                    _this._registry.set(query, mql);
                }
                if (mql.matches) {
                    onMQLEvent(mql); // Announce activate range for initial subscribers
                }
            });
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    MatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        /** @type {?} */
        var canListen = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) &&
            !!(/** @type {?} */ (window)).matchMedia('all').addListener;
        return canListen ? (/** @type {?} */ (window)).matchMedia(query) : /** @type {?} */ ({
            matches: query === 'all' || query === '',
            media: query,
            addListener: function () {
            },
            removeListener: function () {
            }
        });
    };
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param query string The mediaQuery used to create a faux CSS selector
     *
     */
    /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    MatchMedia.prototype._prepareQueryCSS = /**
     * For Webkit engines that only trigger the MediaQueryList Listener
     * when there is at least one CSS selector for the respective media query.
     *
     * @param {?} mediaQueries
     * @param {?} _document
     * @return {?}
     */
    function (mediaQueries, _document) {
        /** @type {?} */
        var list = mediaQueries.filter(function (it) { return !ALL_STYLES[it]; });
        if (list.length > 0) {
            /** @type {?} */
            var query = list.join(', ');
            try {
                /** @type {?} */
                var styleEl_1 = _document.createElement('style');
                styleEl_1.setAttribute('type', 'text/css');
                if (!styleEl_1['styleSheet']) {
                    /** @type {?} */
                    var cssText = "\n/*\n  @angular/flex-layout - workaround for possible browser quirk with mediaQuery listeners\n  see http://bit.ly/2sd4HMP\n*/\n@media " + query + " {.fx-query-test{ }}\n";
                    styleEl_1.appendChild(_document.createTextNode(cssText));
                }
                _document.head.appendChild(styleEl_1);
                // Store in private global registry
                list.forEach(function (mq) { return ALL_STYLES[mq] = styleEl_1; });
            }
            catch (e) {
                console.error(e);
            }
        }
    };
    MatchMedia.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MatchMedia.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ MatchMedia.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MatchMedia_Factory() { return new MatchMedia(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); }, token: MatchMedia, providedIn: "root" });
    return MatchMedia;
}());
/** *
 * Private global registry for all dynamically-created, injected style tags
 * @see prepare(query)
  @type {?} */
var ALL_STYLES = {};
/**
 * Always convert to unique list of queries; for iteration in ::registerQuery()
 * @param {?} mediaQuery
 * @return {?}
 */
function normalizeQuery(mediaQuery) {
    return (typeof mediaQuery === 'undefined') ? [] :
        (typeof mediaQuery === 'string') ? [mediaQuery] : unique(/** @type {?} */ (mediaQuery));
}
/**
 * Filter duplicate mediaQueries in the list
 * @param {?} list
 * @return {?}
 */
function unique(list) {
    /** @type {?} */
    var seen = {};
    return list.filter(function (item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * For the specified MediaChange, make sure it contains the breakpoint alias
 * and suffix (if available).
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function mergeAlias(dest, source) {
    return extendObject(dest, source ? {
        mqAlias: source.alias,
        suffix: source.suffix
    } : {});
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
var  /**
 * Base class for MediaService and pseudo-token for
 * @abstract
 */
ObservableMedia = /** @class */ (function () {
    function ObservableMedia() {
    }
    return ObservableMedia;
}());
/**
 * Class internalizes a MatchMedia service and exposes an Subscribable and Observable interface.
 * This an Observable with that exposes a feature to subscribe to mediaQuery
 * changes and a validator method (`isActive(<alias>)`) to test if a mediaQuery (or alias) is
 * currently active.
 *
 * !! Only mediaChange activations (not de-activations) are announced by the ObservableMedia
 *
 * This class uses the BreakPoint Registry to inject alias information into the raw MediaChange
 * notification. For custom mediaQuery notifications, alias information will not be injected and
 * those fields will be ''.
 *
 * !! This is not an actual Observable. It is a wrapper of an Observable used to publish additional
 * methods like `isActive(<alias>). To access the Observable and use RxJS operators, use
 * `.asObservable()` with syntax like media.asObservable().map(....).
 *
 * \@usage
 *
 *  // RxJS
 *  import {filter} from 'rxjs/operators/filter';
 *  import { ObservableMedia } from '\@angular/flex-layout';
 *
 * \@Component({ ... })
 *  export class AppComponent {
 *    status : string = '';
 *
 *    constructor(  media:ObservableMedia ) {
 *      let onChange = (change:MediaChange) => {
 *        this.status = change ? `'${change.mqAlias}' = (${change.mediaQuery})` : '';
 *      };
 *
 *      // Subscribe directly or access observable to use filter/map operators
 *      // e.g.
 *      //      media.subscribe(onChange);
 *
 *      media.asObservable()
 *        .pipe(
 *          filter((change:MediaChange) => true)   // silly noop filter
 *        ).subscribe(onChange);
 *    }
 *  }
 */
var MediaService = /** @class */ (function () {
    function MediaService(breakpoints, mediaWatcher) {
        this.breakpoints = breakpoints;
        this.mediaWatcher = mediaWatcher;
        /**
         * Should we announce gt-<xxx> breakpoint activations ?
         */
        this.filterOverlaps = true;
        this._registerBreakPoints();
        this.observable$ = this._buildObservable();
    }
    /**
     * Test if specified query/alias is active.
     */
    /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    MediaService.prototype.isActive = /**
     * Test if specified query/alias is active.
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        /** @type {?} */
        var query = this._toMediaQuery(alias);
        return this.mediaWatcher.isActive(query);
    };
    /**
     * Proxy to the Observable subscribe method
     */
    /**
     * Proxy to the Observable subscribe method
     * @param {?=} observerOrNext
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    MediaService.prototype.subscribe = /**
     * Proxy to the Observable subscribe method
     * @param {?=} observerOrNext
     * @param {?=} error
     * @param {?=} complete
     * @return {?}
     */
    function (observerOrNext, error, complete) {
        if (observerOrNext) {
            if (typeof observerOrNext === 'object') {
                return this.observable$.subscribe(observerOrNext.next, observerOrNext.error, observerOrNext.complete);
            }
        }
        return this.observable$.subscribe(observerOrNext, error, complete);
    };
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     */
    /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    MediaService.prototype.asObservable = /**
     * Access to observable for use with operators like
     * .filter(), .map(), etc.
     * @return {?}
     */
    function () {
        return this.observable$;
    };
    /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    MediaService.prototype._registerBreakPoints = /**
     * Register all the mediaQueries registered in the BreakPointRegistry
     * This is needed so subscribers can be auto-notified of all standard, registered
     * mediaQuery activations
     * @return {?}
     */
    function () {
        /** @type {?} */
        var queries = this.breakpoints.sortedItems.map(function (bp) { return bp.mediaQuery; });
        this.mediaWatcher.registerQuery(queries);
    };
    /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    MediaService.prototype._buildObservable = /**
     * Prepare internal observable
     *
     * NOTE: the raw MediaChange events [from MatchMedia] do not
     *       contain important alias information; as such this info
     *       must be injected into the MediaChange
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var self = this;
        /** @type {?} */
        var media$ = this.mediaWatcher.observe();
        /** @type {?} */
        var activationsOnly = function (change) {
            return change.matches === true;
        };
        /** @type {?} */
        var addAliasInformation = function (change) {
            return mergeAlias(change, _this._findByQuery(change.mediaQuery));
        };
        /** @type {?} */
        var excludeOverlaps = function (change) {
            /** @type {?} */
            var bp = _this.breakpoints.findByQuery(change.mediaQuery);
            return !bp ? true : !(self.filterOverlaps && bp.overlapping);
        };
        /**
             * Only pass/announce activations (not de-activations)
             * Inject associated (if any) alias information into the MediaChange event
             * Exclude mediaQuery activations for overlapping mQs. List bounded mQ ranges only
             */
        return media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(activationsOnly), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(excludeOverlaps), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(addAliasInformation));
    };
    /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    MediaService.prototype._findByAlias = /**
     * Breakpoint locator by alias
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        return this.breakpoints.findByAlias(alias);
    };
    /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    MediaService.prototype._findByQuery = /**
     * Breakpoint locator by mediaQuery
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return this.breakpoints.findByQuery(query);
    };
    /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    MediaService.prototype._toMediaQuery = /**
     * Find associated breakpoint (if any)
     * @param {?} query
     * @return {?}
     */
    function (query) {
        /** @type {?} */
        var bp = this._findByAlias(query) || this._findByQuery(query);
        return bp ? bp.mediaQuery : query;
    };
    MediaService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MediaService.ctorParameters = function () { return [
        { type: BreakPointRegistry },
        { type: MatchMedia }
    ]; };
    /** @nocollapse */ MediaService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MediaService_Factory() { return new MediaService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MatchMedia)); }, token: MediaService, providedIn: "root" });
    return MediaService;
}());
/** @type {?} */
var ObservableMediaProvider = {
    // tslint:disable-line:variable-name
    provide: ObservableMedia,
    useClass: MediaService
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * *****************************************************************
 * Define module for the MediaQuery API
 * *****************************************************************
 */
var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    providers: [ObservableMediaProvider, BROWSER_PROVIDER]
                },] },
    ];
    return CoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Utility to emulate a CSS stylesheet
 *
 * This utility class stores all of the styles for a given HTML element
 * as a readonly `stylesheet` map.
 */
var StylesheetMap = /** @class */ (function () {
    function StylesheetMap() {
        this.stylesheet = new Map();
    }
    /**
     * Add an individual style to an HTML element
     */
    /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    StylesheetMap.prototype.addStyleToElement = /**
     * Add an individual style to an HTML element
     * @param {?} element
     * @param {?} style
     * @param {?} value
     * @return {?}
     */
    function (element, style, value) {
        /** @type {?} */
        var stylesheet = this.stylesheet.get(element);
        if (stylesheet) {
            stylesheet.set(style, value);
        }
        else {
            this.stylesheet.set(element, new Map([[style, value]]));
        }
    };
    /**
     * Clear the virtual stylesheet
     */
    /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    StylesheetMap.prototype.clearStyles = /**
     * Clear the virtual stylesheet
     * @return {?}
     */
    function () {
        this.stylesheet.clear();
    };
    /**
     * Retrieve a given style for an HTML element
     */
    /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    StylesheetMap.prototype.getStyleForElement = /**
     * Retrieve a given style for an HTML element
     * @param {?} el
     * @param {?} styleName
     * @return {?}
     */
    function (el, styleName) {
        /** @type {?} */
        var styles = this.stylesheet.get(el);
        /** @type {?} */
        var value = '';
        if (styles) {
            /** @type {?} */
            var style = styles.get(styleName);
            if (typeof style === 'number' || typeof style === 'string') {
                value = style + '';
            }
        }
        return value;
    };
    StylesheetMap.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */ StylesheetMap.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function StylesheetMap_Factory() { return new StylesheetMap(); }, token: StylesheetMap, providedIn: "root" });
    return StylesheetMap;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
 * @param {?} parentSheet
 * @return {?}
 */
function STYLESHEET_MAP_PROVIDER_FACTORY(parentSheet) {
    return parentSheet || new StylesheetMap();
}
/** *
 * Export provider that uses a global service factory (above)
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
  @type {?} */
var STYLESHEET_MAP_PROVIDER = {
    provide: StylesheetMap,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), StylesheetMap],
    ],
    useFactory: STYLESHEET_MAP_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Token that is provided to tell whether the FlexLayoutServerModule
 * has been included in the bundle
 *
 * NOTE: This can be manually provided to disable styles when using SSR
  @type {?} */
var SERVER_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('FlexLayoutServerLoaded', {
    providedIn: 'root',
    factory: function () { return false; }
});

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
  @type {?} */
var INLINE = 'inline';
/** @type {?} */
var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(function (x) { return x === direction; })) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var KeyOptions = /** @class */ (function () {
    function KeyOptions(baseKey, defaultValue, inputKeys) {
        this.baseKey = baseKey;
        this.defaultValue = defaultValue;
        this.inputKeys = inputKeys;
    }
    return KeyOptions;
}());
/**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
var  /**
 * ResponsiveActivation acts as a proxy between the MonitorMedia service (which emits mediaQuery
 * changes) and the fx API directives. The MQA proxies mediaQuery change events and notifies the
 * directive via the specified callback.
 *
 * - The MQA also determines which directive property should be used to determine the
 *   current change 'value'... BEFORE the original `onMediaQueryChanges()` method is called.
 * - The `ngOnDestroy()` method is also head-hooked to enable auto-unsubscribe from the
 *   MediaQueryServices.
 *
 * NOTE: these interceptions enables the logic in the fx API directives to remain terse and clean.
 */
ResponsiveActivation = /** @class */ (function () {
    /**
     * Constructor
     */
    function ResponsiveActivation(_options, _mediaMonitor, _onMediaChanges) {
        this._options = _options;
        this._mediaMonitor = _mediaMonitor;
        this._onMediaChanges = _onMediaChanges;
        this._subscribers = [];
        this._registryMap = this._buildRegistryMap();
        this._subscribers = this._configureChangeObservers();
    }
    Object.defineProperty(ResponsiveActivation.prototype, "registryFromLargest", {
        /**
         * Get a readonly sorted list of the breakpoints corresponding to the directive properties
         * defined in the HTML markup: the sorting is done from largest to smallest. The order is
         * important when several media queries are 'registered' and from which, the browser uses the
         * first matching media query.
         */
        get: /**
         * Get a readonly sorted list of the breakpoints corresponding to the directive properties
         * defined in the HTML markup: the sorting is done from largest to smallest. The order is
         * important when several media queries are 'registered' and from which, the browser uses the
         * first matching media query.
         * @return {?}
         */
        function () {
            return this._registryMap.slice().reverse();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "mediaMonitor", {
        /**
         * Accessor to the DI'ed directive property
         * Each directive instance has a reference to the MediaMonitor which is
         * used HERE to subscribe to mediaQuery change notifications.
         */
        get: /**
         * Accessor to the DI'ed directive property
         * Each directive instance has a reference to the MediaMonitor which is
         * used HERE to subscribe to mediaQuery change notifications.
         * @return {?}
         */
        function () {
            return this._mediaMonitor;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInputKey", {
        /**
         * Determine which directive @Input() property is currently active (for the viewport size):
         * The key must be defined (in use) or fallback to the 'closest' overlapping property key
         * that is defined; otherwise the default property key will be used.
         * e.g.
         *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
         *      key is `.md` then `.gt-sm` should be used instead
         */
        get: /**
         * Determine which directive \@Input() property is currently active (for the viewport size):
         * The key must be defined (in use) or fallback to the 'closest' overlapping property key
         * that is defined; otherwise the default property key will be used.
         * e.g.
         *      if `<div fxHide fxHide.gt-sm="false">` is used but the current activated mediaQuery alias
         *      key is `.md` then `.gt-sm` should be used instead
         * @return {?}
         */
        function () {
            return this._activatedInputKey || this._options.baseKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ResponsiveActivation.prototype, "activatedInput", {
        /**
         * Get the currently activated @Input value or the fallback default @Input value
         */
        get: /**
         * Get the currently activated \@Input value or the fallback default \@Input value
         * @return {?}
         */
        function () {
            /** @type {?} */
            var key = this.activatedInputKey;
            return this.hasKeyValue(key) ? this._lookupKeyValue(key) : this._options.defaultValue;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Fast validator for presence of attribute on the host element
     */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        /** @type {?} */
        var value = this._options.inputKeys[key];
        return typeof value !== 'undefined';
    };
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     */
    /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    ResponsiveActivation.prototype.destroy = /**
     * Remove interceptors, restore original functions, and forward the onDestroy() call
     * @return {?}
     */
    function () {
        this._subscribers.forEach(function (link) {
            link.unsubscribe();
        });
        this._subscribers = [];
    };
    /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    ResponsiveActivation.prototype._configureChangeObservers = /**
     * For each *defined* API property, register a callback to `_onMonitorEvents( )`
     * Cache 1..n subscriptions for internal auto-unsubscribes when the the directive destructs
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var subscriptions = [];
        this._registryMap.forEach(function (bp) {
            if (_this._keyInUse(bp.key)) {
                /** @type {?} */
                var buildChanges = function (change) {
                    change = change.clone();
                    change.property = _this._options.baseKey;
                    return change;
                };
                subscriptions.push(_this.mediaMonitor
                    .observe(bp.alias)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(buildChanges))
                    .subscribe(function (change) {
                    _this._onMonitorEvents(change);
                }));
            }
        });
        return subscriptions;
    };
    /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    ResponsiveActivation.prototype._buildRegistryMap = /**
     * Build mediaQuery key-hashmap; only for the directive properties that are actually defined/used
     * in the HTML markup
     * @return {?}
     */
    function () {
        var _this = this;
        return this.mediaMonitor.breakpoints
            .map(function (bp) {
            return /** @type {?} */ (extendObject({}, bp, {
                baseKey: _this._options.baseKey,
                // e.g. layout, hide, self-align, flex-wrap
                key: _this._options.baseKey + bp.suffix // e.g.  layoutGtSm, layoutMd, layoutGtLg
            }));
        })
            .filter(function (bp) { return _this._keyInUse(bp.key); });
    };
    /**
     * Synchronizes change notifications with the current mq-activated @Input and calculates the
     * mq-activated input value or the default value
     */
    /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    ResponsiveActivation.prototype._onMonitorEvents = /**
     * Synchronizes change notifications with the current mq-activated \@Input and calculates the
     * mq-activated input value or the default value
     * @param {?} change
     * @return {?}
     */
    function (change) {
        if (change.property == this._options.baseKey) {
            change.value = this._calculateActivatedValue(change);
            this._onMediaChanges(change);
        }
    };
    /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype._keyInUse = /**
     * Has the key been specified in the HTML markup and thus is intended
     * to participate in activation processes.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._lookupKeyValue(key) !== undefined;
    };
    /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    ResponsiveActivation.prototype._calculateActivatedValue = /**
     *  Map input key associated with mediaQuery activation to closest defined input key
     *  then return the values associated with the targeted input property
     *
     *  !! change events may arrive out-of-order (activate before deactivate)
     *     so make sure the deactivate is used ONLY when the keys match
     *     (since a different activate may be in use)
     * @param {?} current
     * @return {?}
     */
    function (current) {
        /** @type {?} */
        var currentKey = this._options.baseKey + current.suffix;
        /** @type {?} */
        var newKey = this._activatedInputKey; // e.g. newKey == hideGtSm
        newKey = current.matches ? currentKey : ((newKey == currentKey) ? '' : newKey);
        this._activatedInputKey = this._validateInputKey(newKey);
        return this.activatedInput;
    };
    /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    ResponsiveActivation.prototype._validateInputKey = /**
     * For the specified input property key, validate it is defined (used in the markup)
     * If not see if a overlapping mediaQuery-related input key fallback has been defined
     *
     * NOTE: scans in the order defined by activeOverLaps (largest viewport ranges -> smallest ranges)
     * @param {?} inputKey
     * @return {?}
     */
    function (inputKey) {
        var _this = this;
        /** @type {?} */
        var isMissingKey = function (key) { return !_this._keyInUse(key); };
        if (isMissingKey(inputKey)) {
            this.mediaMonitor.activeOverlaps.some(function (bp) {
                /** @type {?} */
                var key = _this._options.baseKey + bp.suffix;
                if (!isMissingKey(key)) {
                    inputKey = key;
                    return true; // exit .some()
                }
                return false;
            });
        }
        return inputKey;
    };
    /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    ResponsiveActivation.prototype._lookupKeyValue = /**
     * Get the value (if any) for the directive instances \@Input property (aka key)
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._options.inputKeys[key];
    };
    return ResponsiveActivation;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
var  /**
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
BaseDirective = /** @class */ (function () {
    function BaseDirective(_mediaMonitor, _elementRef, _styler) {
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._styler = _styler;
        /**
         * Dictionary of input keys with associated values
         */
        this._inputMap = {};
        /**
         * Has the `ngOnInit()` method fired
         *
         * Used to allow *ngFor tasks to finish and support queries like
         * getComputedStyle() during ngOnInit().
         */
        this._hasInitialized = false;
    }
    Object.defineProperty(BaseDirective.prototype, "hasMediaQueryListener", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirective.prototype, "activatedValue", {
        /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         */
        get: /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         * @return {?}
         */
        function () {
            return this._mqActivation ? this._mqActivation.activatedInput : undefined;
        },
        /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         */
        set: /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _a;
            /** @type {?} */
            var key = 'baseKey';
            /** @type {?} */
            var previousVal;
            if (this._mqActivation) {
                key = this._mqActivation.activatedInputKey;
                previousVal = this._inputMap[key];
                this._inputMap[key] = value;
            }
            /** @type {?} */
            var change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](previousVal, value, false);
            this.ngOnChanges(/** @type {?} */ (_a = {}, _a[key] = change, _a));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    BaseDirective.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    function (baseKey) {
        /** @type {?} */
        var totalKeys = Object.keys(this._inputMap).length;
        /** @type {?} */
        var baseValue = this._inputMap[baseKey];
        return (totalKeys - (!!baseValue ? 1 : 0)) > 0;
    };
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     */
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    BaseDirective.prototype.ngOnInit = /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    function () {
        this._hasInitialized = true;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    BaseDirective.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        throw new Error("BaseDirective::ngOnChanges should be overridden in subclass: " + change);
    };
    /**
     * @return {?}
     */
    BaseDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._mqActivation) {
            this._mqActivation.destroy();
        }
        delete this._mediaMonitor;
    };
    Object.defineProperty(BaseDirective.prototype, "parentElement", {
        // *********************************************
        // Protected Methods
        // *********************************************
        /** Access to host element's parent DOM node */
        get: /**
         * Access to host element's parent DOM node
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement.parentNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirective.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /** Access the current value (if any) of the @Input property */
    /**
     * Access the current value (if any) of the \@Input property
     * @param {?} key
     * @return {?}
     */
    BaseDirective.prototype._queryInput = /**
     * Access the current value (if any) of the \@Input property
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._inputMap[key];
    };
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     */
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    BaseDirective.prototype._getDefaultVal = /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    function (key, fallbackVal) {
        /** @type {?} */
        var val = this._queryInput(key);
        /** @type {?} */
        var hasDefaultVal = (val !== undefined && val !== null);
        return (hasDefaultVal && val !== '') ? val : fallbackVal;
    };
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     */
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    BaseDirective.prototype._getDisplayStyle = /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    function (source) {
        if (source === void 0) { source = this.nativeElement; }
        /** @type {?} */
        var query = 'display';
        return this._styler.lookupStyle(source, query);
    };
    /** Quick accessor to raw attribute value on the target DOM element */
    /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    BaseDirective.prototype._getAttributeValue = /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    function (attribute, source) {
        if (source === void 0) { source = this.nativeElement; }
        return this._styler.lookupAttributeValue(source, attribute);
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    BaseDirective.prototype._getFlexFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    function (target, addIfMissing) {
        if (addIfMissing === void 0) { addIfMissing = false; }
        var _a;
        /** @type {?} */
        var value = 'row';
        /** @type {?} */
        var hasInlineValue = '';
        if (target) {
            _a = this._styler.getFlowDirection(target), value = _a[0], hasInlineValue = _a[1];
            if (!hasInlineValue && addIfMissing) {
                /** @type {?} */
                var style = buildLayoutCSS(value);
                /** @type {?} */
                var elements = [target];
                this._styler.applyStyleToElements(style, elements);
            }
        }
        return value.trim() || 'row';
    };
    /** Applies styles given via string pair or object map to the directive element */
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    BaseDirective.prototype._applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    function (style, value, element) {
        if (element === void 0) { element = this.nativeElement; }
        this._styler.applyStyleToElement(element, style, value);
    };
    /** Applies styles given via string pair or object map to the directive's element */
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    BaseDirective.prototype._applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    function (style, elements) {
        this._styler.applyStyleToElements(style, elements);
    };
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     */
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirective.prototype._cacheInput = /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (typeof source === 'object') {
            for (var prop in source) {
                this._inputMap[prop] = source[prop];
            }
        }
        else {
            if (!!key) {
                this._inputMap[key] = source;
            }
        }
    };
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     */
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseDirective.prototype._listenForMediaQueryChanges = /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        // tslint:disable-line:max-line-length
        if (!this._mqActivation) {
            /** @type {?} */
            var keyOptions = new KeyOptions(key, defaultValue, this._inputMap);
            this._mqActivation = new ResponsiveActivation(keyOptions, this._mediaMonitor, function (change) { return onMediaQueryChange(change); });
        }
        return this._mqActivation;
    };
    Object.defineProperty(BaseDirective.prototype, "childrenNodes", {
        /** Special accessor to query for all child 'element' nodes regardless of type, class, etc */
        get: /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc
         * @return {?}
         */
        function () {
            /** @type {?} */
            var obj = this.nativeElement.children;
            /** @type {?} */
            var buffer = [];
            // iterate backwards ensuring that length is an UInt32
            for (var i = obj.length; i--;) {
                buffer[i] = obj[i];
            }
            return buffer;
        },
        enumerable: true,
        configurable: true
    });
    /** Fast validator for presence of attribute on the host element */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    BaseDirective.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._mqActivation.hasKeyValue(key);
    };
    Object.defineProperty(BaseDirective.prototype, "hasInitialized", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasInitialized;
        },
        enumerable: true,
        configurable: true
    });
    return BaseDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Adapter to the BaseDirective abstract class so it can be used via composition.
 * @see BaseDirective
 */
var  /**
 * Adapter to the BaseDirective abstract class so it can be used via composition.
 * @see BaseDirective
 */
BaseDirectiveAdapter = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(BaseDirectiveAdapter, _super);
    /**
     * BaseDirectiveAdapter constructor
     */
    function BaseDirectiveAdapter(_baseKey, // non-responsive @Input property name
    // non-responsive @Input property name
    _mediaMonitor, _elementRef, _styler) {
        var _this = _super.call(this, _mediaMonitor, _elementRef, _styler) || this;
        _this._baseKey = _baseKey;
        _this._mediaMonitor = _mediaMonitor;
        _this._elementRef = _elementRef;
        _this._styler = _styler;
        return _this;
    }
    Object.defineProperty(BaseDirectiveAdapter.prototype, "activeKey", {
        /**
         * Accessor to determine which @Input property is "active"
         * e.g. which property value will be used.
         */
        get: /**
         * Accessor to determine which \@Input property is "active"
         * e.g. which property value will be used.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var mqa = this._mqActivation;
            /** @type {?} */
            var key = mqa ? mqa.activatedInputKey : this._baseKey;
            // Note: ClassDirective::SimpleChanges uses 'klazz' instead of 'class' as a key
            return (key === 'class') ? 'klazz' : key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirectiveAdapter.prototype, "inputMap", {
        /** Hash map of all @Input keys/values defined/used */
        get: /**
         * Hash map of all \@Input keys/values defined/used
         * @return {?}
         */
        function () {
            return this._inputMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDirectiveAdapter.prototype, "mqActivation", {
        /**
         * @see BaseDirective._mqActivation
         */
        get: /**
         * @see BaseDirective._mqActivation
         * @return {?}
         */
        function () {
            return this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    /**
      * Does this directive have 1 or more responsive keys defined
      * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
      */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @return {?}
     */
    function () {
        return _super.prototype.hasResponsiveAPI.call(this, this._baseKey);
    };
    /**
     * @see BaseDirective._queryInput
     */
    /**
     * @see BaseDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.queryInput = /**
     * @see BaseDirective._queryInput
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return key ? this._queryInput(key) : undefined;
    };
    /**
     *  Save the property value.
     */
    /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.cacheInput = /**
     *  Save the property value.
     * @param {?=} key
     * @param {?=} source
     * @param {?=} cacheRaw
     * @return {?}
     */
    function (key, source, cacheRaw) {
        if (cacheRaw === void 0) { cacheRaw = false; }
        if (cacheRaw) {
            this._cacheInputRaw(key, source);
        }
        else if (Array.isArray(source)) {
            this._cacheInputArray(key, source);
        }
        else if (typeof source === 'object') {
            this._cacheInputObject(key, source);
        }
        else if (typeof source === 'string') {
            this._cacheInputString(key, source);
        }
        else {
            throw new Error("Invalid class value '" + key + "' provided. Did you want to cache the raw value?");
        }
    };
    /**
     * @see BaseDirective._listenForMediaQueryChanges
     */
    /**
     * @see BaseDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseDirectiveAdapter.prototype.listenForMediaQueryChanges = /**
     * @see BaseDirective._listenForMediaQueryChanges
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        return this._listenForMediaQueryChanges(key, defaultValue, onMediaQueryChange);
    };
    // ************************************************************
    // Protected Methods
    // ************************************************************
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     */
    /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputRaw = /**
     * No implicit transforms of the source.
     * Required when caching values expected later for KeyValueDiffers
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key) {
            this._inputMap[key] = source;
        }
    };
    /**
     *  Save the property value for Array values.
     */
    /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputArray = /**
     *  Save the property value for Array values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        this._inputMap[key] = source ? source.join(' ') : '';
    };
    /**
     *  Save the property value for key/value pair values.
     */
    /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputObject = /**
     *  Save the property value for key/value pair values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        /** @type {?} */
        var classes = [];
        if (source) {
            for (var prop in source) {
                if (!!source[prop]) {
                    classes.push(prop);
                }
            }
        }
        this._inputMap[key] = classes.join(' ');
    };
    /**
     *  Save the property value for string values.
     */
    /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseDirectiveAdapter.prototype._cacheInputString = /**
     *  Save the property value for string values.
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (key === void 0) { key = ''; }
        this._inputMap[key] = source;
    };
    return BaseDirectiveAdapter;
}(BaseDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @deprecated
 * \@deletion-target v6.0.0-beta.17
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
var  /**
 * @deprecated
 * \@deletion-target v6.0.0-beta.17
 * Abstract base class for the Layout API styling directives.
 * @abstract
 */
BaseFxDirective = /** @class */ (function () {
    /**
     * Constructor
     */
    function BaseFxDirective(_mediaMonitor, _elementRef, _styler) {
        this._mediaMonitor = _mediaMonitor;
        this._elementRef = _elementRef;
        this._styler = _styler;
        /**
         *  Dictionary of input keys with associated values
         */
        this._inputMap = {};
        /**
         * Has the `ngOnInit()` method fired
         *
         * Used to allow *ngFor tasks to finish and support queries like
         * getComputedStyle() during ngOnInit().
         */
        this._hasInitialized = false;
    }
    Object.defineProperty(BaseFxDirective.prototype, "hasMediaQueryListener", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this._mqActivation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "activatedValue", {
        /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         */
        get: /**
         * Imperatively determine the current activated [input] value;
         * if called before ngOnInit() this will return `undefined`
         * @return {?}
         */
        function () {
            return this._mqActivation ? this._mqActivation.activatedInput : undefined;
        },
        /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         */
        set: /**
         * Change the currently activated input value and force-update
         * the injected CSS (by-passing change detection).
         *
         * NOTE: Only the currently activated input value will be modified;
         *       other input values will NOT be affected.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _a;
            /** @type {?} */
            var key = 'baseKey';
            /** @type {?} */
            var previousVal;
            if (this._mqActivation) {
                key = this._mqActivation.activatedInputKey;
                previousVal = this._inputMap[key];
                this._inputMap[key] = value;
            }
            /** @type {?} */
            var change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SimpleChange"](previousVal, value, false);
            this.ngOnChanges(/** @type {?} */ (_a = {}, _a[key] = change, _a));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "parentElement", {
        // *********************************************
        // Accessor Methods
        // *********************************************
        /**
         * Access to host element's parent DOM node
         */
        get: /**
         * Access to host element's parent DOM node
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement.parentNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseFxDirective.prototype, "nativeElement", {
        get: /**
         * @return {?}
         */
        function () {
            return this._elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Access the current value (if any) of the @Input property.
     */
    /**
     * Access the current value (if any) of the \@Input property.
     * @param {?} key
     * @return {?}
     */
    BaseFxDirective.prototype._queryInput = /**
     * Access the current value (if any) of the \@Input property.
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._inputMap[key];
    };
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     */
    /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnInit = /**
     * Use post-component-initialization event to perform extra
     * querying such as computed Display style
     * @return {?}
     */
    function () {
        this._display = this._getDisplayStyle();
        this._hasInitialized = true;
    };
    /**
     * @param {?} change
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnChanges = /**
     * @param {?} change
     * @return {?}
     */
    function (change) {
        throw new Error("BaseFxDirective::ngOnChanges should be overridden in subclass: " + change);
    };
    /**
     * @return {?}
     */
    BaseFxDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._mqActivation) {
            this._mqActivation.destroy();
        }
        delete this._mediaMonitor;
    };
    // *********************************************
    // Protected Methods
    // *********************************************
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     */
    /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    BaseFxDirective.prototype._getDefaultVal = /**
     * Was the directive's default selector used ?
     * If not, use the fallback value!
     * @param {?} key
     * @param {?} fallbackVal
     * @return {?}
     */
    function (key, fallbackVal) {
        /** @type {?} */
        var val = this._queryInput(key);
        /** @type {?} */
        var hasDefaultVal = (val !== undefined && val !== null);
        return (hasDefaultVal && val !== '') ? val : fallbackVal;
    };
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     */
    /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._getDisplayStyle = /**
     * Quick accessor to the current HTMLElement's `display` style
     * Note: this allows us to preserve the original style
     * and optional restore it when the mediaQueries deactivate
     * @param {?=} source
     * @return {?}
     */
    function (source) {
        if (source === void 0) { source = this.nativeElement; }
        /** @type {?} */
        var query = 'display';
        return this._styler.lookupStyle(source, query);
    };
    /**
     * Quick accessor to raw attribute value on the target DOM element
     */
    /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._getAttributeValue = /**
     * Quick accessor to raw attribute value on the target DOM element
     * @param {?} attribute
     * @param {?=} source
     * @return {?}
     */
    function (attribute, source) {
        if (source === void 0) { source = this.nativeElement; }
        return this._styler.lookupAttributeValue(source, attribute);
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    BaseFxDirective.prototype._getFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction).
     *
     * Check inline style first then check computed (stylesheet) style.
     * And optionally add the flow value to element's inline style.
     * @param {?} target
     * @param {?=} addIfMissing
     * @return {?}
     */
    function (target, addIfMissing) {
        if (addIfMissing === void 0) { addIfMissing = false; }
        var _a;
        /** @type {?} */
        var value = 'row';
        /** @type {?} */
        var hasInlineValue = '';
        if (target) {
            _a = this._styler.getFlowDirection(target), value = _a[0], hasInlineValue = _a[1];
            if (!hasInlineValue && addIfMissing) {
                /** @type {?} */
                var style = buildLayoutCSS(value);
                /** @type {?} */
                var elements = [target];
                this._styler.applyStyleToElements(style, elements);
            }
        }
        return value.trim() || 'row';
    };
    /**
     * Applies styles given via string pair or object map to the directive element.
     */
    /**
     * Applies styles given via string pair or object map to the directive element.
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    BaseFxDirective.prototype._applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element.
     * @param {?} style
     * @param {?=} value
     * @param {?=} element
     * @return {?}
     */
    function (style, value, element) {
        if (element === void 0) { element = this.nativeElement; }
        this._styler.applyStyleToElement(element, style, value);
    };
    /**
     * Applies styles given via string pair or object map to the directive's element.
     */
    /**
     * Applies styles given via string pair or object map to the directive's element.
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    BaseFxDirective.prototype._applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element.
     * @param {?} style
     * @param {?} elements
     * @return {?}
     */
    function (style, elements) {
        this._styler.applyStyleToElements(style, elements);
    };
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     */
    /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    BaseFxDirective.prototype._cacheInput = /**
     *  Save the property value; which may be a complex object.
     *  Complex objects support property chains
     * @param {?=} key
     * @param {?=} source
     * @return {?}
     */
    function (key, source) {
        if (typeof source === 'object') {
            for (var prop in source) {
                this._inputMap[prop] = source[prop];
            }
        }
        else {
            if (!!key) {
                this._inputMap[key] = source;
            }
        }
    };
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     */
    /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    BaseFxDirective.prototype._listenForMediaQueryChanges = /**
     *  Build a ResponsiveActivation object used to manage subscriptions to mediaChange notifications
     *  and intelligent lookup of the directive's property value that corresponds to that mediaQuery
     *  (or closest match).
     * @param {?} key
     * @param {?} defaultValue
     * @param {?} onMediaQueryChange
     * @return {?}
     */
    function (key, defaultValue, onMediaQueryChange) {
        // tslint:disable-line:max-line-length
        if (!this._mqActivation) {
            /** @type {?} */
            var keyOptions = new KeyOptions(key, defaultValue, this._inputMap);
            this._mqActivation = new ResponsiveActivation(keyOptions, this._mediaMonitor, function (change) { return onMediaQueryChange(change); });
        }
        return this._mqActivation;
    };
    Object.defineProperty(BaseFxDirective.prototype, "childrenNodes", {
        /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc.
         */
        get: /**
         * Special accessor to query for all child 'element' nodes regardless of type, class, etc.
         * @return {?}
         */
        function () {
            /** @type {?} */
            var obj = this.nativeElement.children;
            /** @type {?} */
            var buffer = [];
            // iterate backwards ensuring that length is an UInt32
            for (var i = obj.length; i--;) {
                buffer[i] = obj[i];
            }
            return buffer;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     */
    /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    BaseFxDirective.prototype.hasResponsiveAPI = /**
     * Does this directive have 1 or more responsive keys defined
     * Note: we exclude the 'baseKey' key (which is NOT considered responsive)
     * @param {?} baseKey
     * @return {?}
     */
    function (baseKey) {
        /** @type {?} */
        var totalKeys = Object.keys(this._inputMap).length;
        /** @type {?} */
        var baseValue = this._inputMap[baseKey];
        return (totalKeys - (!!baseValue ? 1 : 0)) > 0;
    };
    /**
     * Fast validator for presence of attribute on the host element
     */
    /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    BaseFxDirective.prototype.hasKeyValue = /**
     * Fast validator for presence of attribute on the host element
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._mqActivation.hasKeyValue(key);
    };
    Object.defineProperty(BaseFxDirective.prototype, "hasInitialized", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasInitialized;
        },
        enumerable: true,
        configurable: true
    });
    return BaseFxDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MockMatchMedia mocks calls to the Window API matchMedia with a build of a simulated
 * MockMediaQueryListener. Methods are available to simulate an activation of a mediaQuery
 * range and to clearAll mediaQuery listeners.
 */
var MockMatchMedia = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(MockMatchMedia, _super);
    function MockMatchMedia(_zone, _platformId, _document, _breakpoints) {
        var _this = _super.call(this, _zone, _platformId, _document) || this;
        _this._breakpoints = _breakpoints;
        /**
         * Special flag used to test BreakPoint registrations with MatchMedia
         */
        _this.autoRegisterQueries = true;
        /**
         * Allow fallback to overlapping mediaQueries to determine
         * activatedInput(s).
         */
        _this.useOverlaps = false;
        _this._actives = [];
        _this._actives = [];
        return _this;
    }
    /** Easy method to clear all listeners for all mediaQueries */
    /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    MockMatchMedia.prototype.clearAll = /**
     * Easy method to clear all listeners for all mediaQueries
     * @return {?}
     */
    function () {
        this._registry.forEach(function (mql) {
            mql.destroy();
        });
        this._registry.clear();
        this.useOverlaps = false;
    };
    /** Feature to support manual, simulated activation of a mediaQuery. */
    /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype.activate = /**
     * Feature to support manual, simulated activation of a mediaQuery.
     * @param {?} mediaQuery
     * @param {?=} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps === void 0) { useOverlaps = false; }
        useOverlaps = useOverlaps || this.useOverlaps;
        mediaQuery = this._validateQuery(mediaQuery);
        if (useOverlaps || !this.isActive(mediaQuery)) {
            this._deactivateAll();
            this._registerMediaQuery(mediaQuery);
            this._activateWithOverlaps(mediaQuery, useOverlaps);
        }
        return this.hasActivated;
    };
    /** Converts an optional mediaQuery alias to a specific, valid mediaQuery */
    /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    MockMatchMedia.prototype._validateQuery = /**
     * Converts an optional mediaQuery alias to a specific, valid mediaQuery
     * @param {?} queryOrAlias
     * @return {?}
     */
    function (queryOrAlias) {
        /** @type {?} */
        var bp = this._breakpoints.findByAlias(queryOrAlias);
        if (bp) {
            queryOrAlias = bp.mediaQuery;
        }
        return queryOrAlias;
    };
    /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    MockMatchMedia.prototype._activateWithOverlaps = /**
     * Manually activate any overlapping mediaQueries to simulate
     * similar functionality in the window.matchMedia()
     * @param {?} mediaQuery
     * @param {?} useOverlaps
     * @return {?}
     */
    function (mediaQuery, useOverlaps) {
        if (useOverlaps) {
            /** @type {?} */
            var bp = this._breakpoints.findByQuery(mediaQuery);
            /** @type {?} */
            var alias = bp ? bp.alias : 'unknown';
            // Simulate activation of overlapping lt-<XXX> ranges
            switch (alias) {
                case 'lg':
                    this._activateByAlias('lt-xl');
                    break;
                case 'md':
                    this._activateByAlias('lt-xl, lt-lg');
                    break;
                case 'sm':
                    this._activateByAlias('lt-xl, lt-lg, lt-md');
                    break;
                case 'xs':
                    this._activateByAlias('lt-xl, lt-lg, lt-md, lt-sm');
                    break;
            }
            // Simulate activate of overlapping gt-<xxxx> mediaQuery ranges
            switch (alias) {
                case 'xl':
                    this._activateByAlias('gt-lg, gt-md, gt-sm, gt-xs');
                    break;
                case 'lg':
                    this._activateByAlias('gt-md, gt-sm, gt-xs');
                    break;
                case 'md':
                    this._activateByAlias('gt-sm, gt-xs');
                    break;
                case 'sm':
                    this._activateByAlias('gt-xs');
                    break;
            }
        }
        // Activate last since the responsiveActivation is watching *this* mediaQuery
        return this._activateByQuery(mediaQuery);
    };
    /**
     *
     * @param {?} aliases
     * @return {?}
     */
    MockMatchMedia.prototype._activateByAlias = /**
     *
     * @param {?} aliases
     * @return {?}
     */
    function (aliases) {
        var _this = this;
        /** @type {?} */
        var activate = function (alias) {
            /** @type {?} */
            var bp = _this._breakpoints.findByAlias(alias);
            _this._activateByQuery(bp ? bp.mediaQuery : alias);
        };
        aliases.split(',').forEach(function (alias) { return activate(alias.trim()); });
    };
    /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._activateByQuery = /**
     *
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        /** @type {?} */
        var mql = /** @type {?} */ (this._registry.get(mediaQuery));
        /** @type {?} */
        var alreadyAdded = this._actives.reduce(function (found, it) {
            return found || (mql && (it.media === mql.media));
        }, false);
        if (mql && !alreadyAdded) {
            this._actives.push(mql.activate());
        }
        return this.hasActivated;
    };
    /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    MockMatchMedia.prototype._deactivateAll = /**
     * Deactivate all current Mock MQLs
     * @return {?}
     */
    function () {
        if (this._actives.length) {
            // Deactivate all current MQLs and reset the buffer
            for (var _i = 0, _a = this._actives; _i < _a.length; _i++) {
                var it = _a[_i];
                it.deactivate();
            }
            this._actives = [];
        }
        return this;
    };
    /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    MockMatchMedia.prototype._registerMediaQuery = /**
     * Insure the mediaQuery is registered with MatchMedia
     * @param {?} mediaQuery
     * @return {?}
     */
    function (mediaQuery) {
        if (!this._registry.has(mediaQuery) && this.autoRegisterQueries) {
            this.registerQuery(mediaQuery);
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    MockMatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return new MockMediaQueryList(query);
    };
    Object.defineProperty(MockMatchMedia.prototype, "hasActivated", {
        get: /**
         * @return {?}
         */
        function () {
            return (this._actives.length > 0);
        },
        enumerable: true,
        configurable: true
    });
    MockMatchMedia.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    MockMatchMedia.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] },
        { type: BreakPointRegistry }
    ]; };
    return MockMatchMedia;
}(MatchMedia));
/**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
var  /**
 * Special internal class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
MockMediaQueryList = /** @class */ (function () {
    function MockMediaQueryList(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
    }
    Object.defineProperty(MockMediaQueryList.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MockMediaQueryList.prototype, "media", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     */
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    MockMediaQueryList.prototype.destroy = /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    function () {
        this.deactivate();
        this._listeners = [];
    };
    /** Notify all listeners that 'matches === TRUE' */
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    MockMediaQueryList.prototype.activate = /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Notify all listeners that 'matches === false' */
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    MockMediaQueryList.prototype.deactivate = /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Add a listener to our internal list to activate later */
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    MockMediaQueryList.prototype.addListener = /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            listener(this);
        }
    };
    /** Don't need to remove listeners in the testing environment */
    /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    MockMediaQueryList.prototype.removeListener = /**
     * Don't need to remove listeners in the testing environment
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    return MockMediaQueryList;
}());
/** *
 * Pre-configured provider for MockMatchMedia
  @type {?} */
var MockMatchMediaProvider = {
    // tslint:disable-line:variable-name
    provide: MatchMedia,
    useClass: MockMatchMedia
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
var  /**
 * Special server-only class to simulate a MediaQueryList and
 * - supports manual activation to simulate mediaQuery matching
 * - manages listeners
 */
ServerMediaQueryList = /** @class */ (function () {
    function ServerMediaQueryList(_mediaQuery) {
        this._mediaQuery = _mediaQuery;
        this._isActive = false;
        this._listeners = [];
    }
    Object.defineProperty(ServerMediaQueryList.prototype, "matches", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isActive;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ServerMediaQueryList.prototype, "media", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mediaQuery;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     */
    /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    ServerMediaQueryList.prototype.destroy = /**
     * Destroy the current list by deactivating the
     * listeners and clearing the internal list
     * @return {?}
     */
    function () {
        this.deactivate();
        this._listeners = [];
    };
    /** Notify all listeners that 'matches === TRUE' */
    /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    ServerMediaQueryList.prototype.activate = /**
     * Notify all listeners that 'matches === TRUE'
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this._isActive) {
            this._isActive = true;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Notify all listeners that 'matches === false' */
    /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    ServerMediaQueryList.prototype.deactivate = /**
     * Notify all listeners that 'matches === false'
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._isActive) {
            this._isActive = false;
            this._listeners.forEach(function (callback) {
                callback(_this);
            });
        }
        return this;
    };
    /** Add a listener to our internal list to activate later */
    /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    ServerMediaQueryList.prototype.addListener = /**
     * Add a listener to our internal list to activate later
     * @param {?} listener
     * @return {?}
     */
    function (listener) {
        if (this._listeners.indexOf(listener) === -1) {
            this._listeners.push(listener);
        }
        if (this._isActive) {
            listener(this);
        }
    };
    /** Don't need to remove listeners in the server environment */
    /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    ServerMediaQueryList.prototype.removeListener = /**
     * Don't need to remove listeners in the server environment
     * @param {?} _
     * @return {?}
     */
    function (_) {
    };
    return ServerMediaQueryList;
}());
/**
 * Special server-only implementation of MatchMedia that uses the above
 * ServerMediaQueryList as its internal representation
 *
 * Also contains methods to activate and deactivate breakpoints
 */
var ServerMatchMedia = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_4__["__extends"])(ServerMatchMedia, _super);
    function ServerMatchMedia(_zone, _platformId, _document) {
        var _this = _super.call(this, _zone, _platformId, _document) || this;
        _this._zone = _zone;
        _this._platformId = _platformId;
        _this._document = _document;
        _this._registry = new Map();
        _this._source = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](new MediaChange(true));
        _this._observable$ = _this._source.asObservable();
        return _this;
    }
    /** Activate the specified breakpoint if we're on the server, no-op otherwise */
    /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    ServerMatchMedia.prototype.activateBreakpoint = /**
     * Activate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        /** @type {?} */
        var lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.activate();
        }
    };
    /** Deactivate the specified breakpoint if we're on the server, no-op otherwise */
    /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    ServerMatchMedia.prototype.deactivateBreakpoint = /**
     * Deactivate the specified breakpoint if we're on the server, no-op otherwise
     * @param {?} bp
     * @return {?}
     */
    function (bp) {
        /** @type {?} */
        var lookupBreakpoint = this._registry.get(bp.mediaQuery);
        if (lookupBreakpoint) {
            lookupBreakpoint.deactivate();
        }
    };
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     */
    /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    ServerMatchMedia.prototype._buildMQL = /**
     * Call window.matchMedia() to build a MediaQueryList; which
     * supports 0..n listeners for activation/deactivation
     * @param {?} query
     * @return {?}
     */
    function (query) {
        return new ServerMediaQueryList(query);
    };
    ServerMatchMedia.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    ServerMatchMedia.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
    ]; };
    return ServerMatchMedia;
}(MatchMedia));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * MediaMonitor uses the MatchMedia service to observe mediaQuery changes (both activations and
 * deactivations). These changes are are published as MediaChange notifications.
 *
 * Note: all notifications will be performed within the
 * ng Zone to trigger change detections and component updates.
 *
 * It is the MediaMonitor that:
 *  - auto registers all known breakpoints
 *  - injects alias information into each raw MediaChange event
 *  - provides accessor to the currently active BreakPoint
 *  - publish list of overlapping BreakPoint(s); used by ResponsiveActivation
 */
var MediaMonitor = /** @class */ (function () {
    function MediaMonitor(_breakpoints, _matchMedia) {
        this._breakpoints = _breakpoints;
        this._matchMedia = _matchMedia;
        this._registerBreakpoints();
    }
    Object.defineProperty(MediaMonitor.prototype, "breakpoints", {
        /**
         * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
         */
        get: /**
         * Read-only accessor to the list of breakpoints configured in the BreakPointRegistry provider
         * @return {?}
         */
        function () {
            return this._breakpoints.items.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "activeOverlaps", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var items = this._breakpoints.overlappings.reverse();
            return items.filter(function (bp) {
                return _this._matchMedia.isActive(bp.mediaQuery);
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MediaMonitor.prototype, "active", {
        get: /**
         * @return {?}
         */
        function () {
            var _this = this;
            /** @type {?} */
            var found = null;
            /** @type {?} */
            var items = this.breakpoints.reverse();
            items.forEach(function (bp) {
                if (bp.alias !== '') {
                    if (!found && _this._matchMedia.isActive(bp.mediaQuery)) {
                        found = bp;
                    }
                }
            });
            /** @type {?} */
            var first = this.breakpoints[0];
            return found || (this._matchMedia.isActive(first.mediaQuery) ? first : null);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     */
    /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    MediaMonitor.prototype.isActive = /**
     * For the specified mediaQuery alias, is the mediaQuery range active?
     * @param {?} alias
     * @return {?}
     */
    function (alias) {
        /** @type {?} */
        var bp = this._breakpoints.findByAlias(alias) || this._breakpoints.findByQuery(alias);
        return this._matchMedia.isActive(bp ? bp.mediaQuery : alias);
    };
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     */
    /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    MediaMonitor.prototype.observe = /**
     * External observers can watch for all (or a specific) mql changes.
     * If specific breakpoint is observed, only return *activated* events
     * otherwise return all events for BOTH activated + deactivated changes.
     * @param {?=} alias
     * @return {?}
     */
    function (alias) {
        /** @type {?} */
        var bp = this._breakpoints.findByAlias(alias || '') ||
            this._breakpoints.findByQuery(alias || '');
        /** @type {?} */
        var hasAlias = function (change) { return (bp ? change.mqAlias !== '' : true); };
        /** @type {?} */
        var media$ = this._matchMedia.observe(bp ? bp.mediaQuery : alias);
        return media$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (change) { return mergeAlias(change, bp); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(hasAlias));
    };
    /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    MediaMonitor.prototype._registerBreakpoints = /**
     * Immediate calls to matchMedia() to establish listeners
     * and prepare for immediate subscription notifications
     * @return {?}
     */
    function () {
        /** @type {?} */
        var queries = this._breakpoints.sortedItems.map(function (bp) { return bp.mediaQuery; });
        this._matchMedia.registerQuery(queries);
    };
    MediaMonitor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    MediaMonitor.ctorParameters = function () { return [
        { type: BreakPointRegistry },
        { type: MatchMedia }
    ]; };
    /** @nocollapse */ MediaMonitor.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function MediaMonitor_Factory() { return new MediaMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(BreakPointRegistry), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(MatchMedia)); }, token: MediaMonitor, providedIn: "root" });
    return MediaMonitor;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Ensure a single global service provider
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
 * @param {?} parentMonitor
 * @param {?} breakpoints
 * @param {?} matchMedia
 * @return {?}
 */
function MEDIA_MONITOR_PROVIDER_FACTORY(parentMonitor, breakpoints, matchMedia) {
    return parentMonitor || new MediaMonitor(breakpoints, matchMedia);
}
/** *
 * Export provider that uses a global service factory (above)
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
  @type {?} */
var MEDIA_MONITOR_PROVIDER = {
    provide: MediaMonitor,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), MediaMonitor],
        BreakPointRegistry,
        MatchMedia,
    ],
    useFactory: MEDIA_MONITOR_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Ensure a single global ObservableMedia service provider
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
 * @param {?} parentService
 * @param {?} matchMedia
 * @param {?} breakpoints
 * @return {?}
 */
function OBSERVABLE_MEDIA_PROVIDER_FACTORY(parentService, matchMedia, breakpoints) {
    return parentService || new MediaService(breakpoints, matchMedia);
}
/** *
 *  Provider to return global service for observable service for all MediaQuery activations
 * @deprecated
 * \@deletion-target v6.0.0-beta.16
  @type {?} */
var OBSERVABLE_MEDIA_PROVIDER = {
    // tslint:disable-line:variable-name
    provide: ObservableMedia,
    deps: [
        [new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"](), new _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"](), ObservableMedia],
        MatchMedia,
        BreakPointRegistry
    ],
    useFactory: OBSERVABLE_MEDIA_PROVIDER_FACTORY
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * Applies CSS prefixes to appropriate style keys.
 *
 * Note: `-ms-`, `-moz` and `-webkit-box` are no longer supported. e.g.
 *    {
 *      display: -webkit-flex;     NEW - Safari 6.1+. iOS 7.1+, BB10
 *      display: flex;             NEW, Spec - Firefox, Chrome, Opera
 *      // display: -webkit-box;   OLD - iOS 6-, Safari 3.1-6, BB7
 *      // display: -ms-flexbox;   TWEENER - IE 10
 *      // display: -moz-flexbox;  OLD - Firefox
 *    }
 * @param {?} target
 * @return {?}
 */
function applyCssPrefixes(target) {
    for (var key in target) {
        /** @type {?} */
        var value = target[key] || '';
        switch (key) {
            case 'display':
                if (value === 'flex') {
                    target['display'] = [
                        '-webkit-flex',
                        'flex'
                    ];
                }
                else if (value === 'inline-flex') {
                    target['display'] = [
                        '-webkit-inline-flex',
                        'inline-flex'
                    ];
                }
                else {
                    target['display'] = value;
                }
                break;
            case 'align-items':
            case 'align-self':
            case 'align-content':
            case 'flex':
            case 'flex-basis':
            case 'flex-flow':
            case 'flex-grow':
            case 'flex-shrink':
            case 'flex-wrap':
            case 'justify-content':
                target['-webkit-' + key] = value;
                break;
            case 'flex-direction':
                value = value || 'row';
                target['-webkit-flex-direction'] = value;
                target['flex-direction'] = value;
                break;
            case 'order':
                target['order'] = target['-webkit-' + key] = isNaN(value) ? '0' : value;
                break;
        }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var StyleUtils = /** @class */ (function () {
    function StyleUtils(_serverStylesheet, _serverModuleLoaded, _platformId, layoutConfig) {
        this._serverStylesheet = _serverStylesheet;
        this._serverModuleLoaded = _serverModuleLoaded;
        this._platformId = _platformId;
        this.layoutConfig = layoutConfig;
    }
    /**
     * Applies styles given via string pair or object map to the directive element
     */
    /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElement = /**
     * Applies styles given via string pair or object map to the directive element
     * @param {?} element
     * @param {?} style
     * @param {?=} value
     * @return {?}
     */
    function (element, style, value) {
        /** @type {?} */
        var styles = {};
        if (typeof style === 'string') {
            styles[style] = value;
            style = styles;
        }
        styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        this._applyMultiValueStyleToElement(styles, element);
    };
    /**
     * Applies styles given via string pair or object map to the directive's element
     */
    /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    StyleUtils.prototype.applyStyleToElements = /**
     * Applies styles given via string pair or object map to the directive's element
     * @param {?} style
     * @param {?=} elements
     * @return {?}
     */
    function (style, elements) {
        var _this = this;
        if (elements === void 0) { elements = []; }
        /** @type {?} */
        var styles = this.layoutConfig.disableVendorPrefixes ? style : applyCssPrefixes(style);
        elements.forEach(function (el) {
            _this._applyMultiValueStyleToElement(styles, el);
        });
    };
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     */
    /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    StyleUtils.prototype.getFlowDirection = /**
     * Determine the DOM element's Flexbox flow (flex-direction)
     *
     * Check inline style first then check computed (stylesheet) style
     * @param {?} target
     * @return {?}
     */
    function (target) {
        /** @type {?} */
        var query = 'flex-direction';
        /** @type {?} */
        var value = this.lookupStyle(target, query);
        if (value === FALLBACK_STYLE) {
            value = '';
        }
        /** @type {?} */
        var hasInlineValue = this.lookupInlineStyle(target, query) ||
            (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded) ? value : '';
        return [value || 'row', hasInlineValue];
    };
    /**
     * Find the DOM element's raw attribute value (if any)
     */
    /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    StyleUtils.prototype.lookupAttributeValue = /**
     * Find the DOM element's raw attribute value (if any)
     * @param {?} element
     * @param {?} attribute
     * @return {?}
     */
    function (element, attribute) {
        return element.getAttribute(attribute) || '';
    };
    /**
     * Find the DOM element's inline style value (if any)
     */
    /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    StyleUtils.prototype.lookupInlineStyle = /**
     * Find the DOM element's inline style value (if any)
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    function (element, styleName) {
        return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId) ?
            element.style[styleName] : this._getServerStyle(element, styleName);
    };
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     */
    /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    StyleUtils.prototype.lookupStyle = /**
     * Determine the inline or inherited CSS style
     * NOTE: platform-server has no implementation for getComputedStyle
     * @param {?} element
     * @param {?} styleName
     * @param {?=} inlineOnly
     * @return {?}
     */
    function (element, styleName, inlineOnly) {
        if (inlineOnly === void 0) { inlineOnly = false; }
        /** @type {?} */
        var value = '';
        if (element) {
            /** @type {?} */
            var immediateValue = value = this.lookupInlineStyle(element, styleName);
            if (!immediateValue) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
                    if (!inlineOnly) {
                        value = getComputedStyle(element).getPropertyValue(styleName);
                    }
                }
                else {
                    if (this._serverModuleLoaded) {
                        value = this._serverStylesheet.getStyleForElement(element, styleName);
                    }
                }
            }
        }
        // Note: 'inline' is the default of all elements, unless UA stylesheet overrides;
        //       in which case getComputedStyle() should determine a valid value.
        return value ? value.trim() : FALLBACK_STYLE;
    };
    /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    StyleUtils.prototype._applyMultiValueStyleToElement = /**
     * Applies the styles to the element. The styles object map may contain an array of values
     * Each value will be added as element style
     * Keys are sorted to add prefixed styles (like -webkit-x) first, before the standard ones
     * @param {?} styles
     * @param {?} element
     * @return {?}
     */
    function (styles, element) {
        var _this = this;
        Object.keys(styles).sort().forEach(function (key) {
            /** @type {?} */
            var values = Array.isArray(styles[key]) ? styles[key] : [styles[key]];
            values.sort();
            for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
                var value = values_1[_i];
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this._platformId) || !_this._serverModuleLoaded) {
                    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this._platformId) ?
                        element.style.setProperty(key, value) : _this._setServerStyle(element, key, value);
                }
                else {
                    _this._serverStylesheet.addStyleToElement(element, key, value);
                }
            }
        });
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    StyleUtils.prototype._setServerStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @param {?=} styleValue
     * @return {?}
     */
    function (element, styleName, styleValue) {
        styleName = styleName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        /** @type {?} */
        var styleMap = this._readStyleAttribute(element);
        styleMap[styleName] = styleValue || '';
        this._writeStyleAttribute(element, styleMap);
    };
    /**
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    StyleUtils.prototype._getServerStyle = /**
     * @param {?} element
     * @param {?} styleName
     * @return {?}
     */
    function (element, styleName) {
        /** @type {?} */
        var styleMap = this._readStyleAttribute(element);
        return styleMap[styleName] || '';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    StyleUtils.prototype._readStyleAttribute = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        /** @type {?} */
        var styleMap = {};
        /** @type {?} */
        var styleAttribute = element.getAttribute('style');
        if (styleAttribute) {
            /** @type {?} */
            var styleList = styleAttribute.split(/;+/g);
            for (var i = 0; i < styleList.length; i++) {
                /** @type {?} */
                var style = styleList[i].trim();
                if (style.length > 0) {
                    /** @type {?} */
                    var colonIndex = style.indexOf(':');
                    if (colonIndex === -1) {
                        throw new Error("Invalid CSS style: " + style);
                    }
                    /** @type {?} */
                    var name_1 = style.substr(0, colonIndex).trim();
                    styleMap[name_1] = style.substr(colonIndex + 1).trim();
                }
            }
        }
        return styleMap;
    };
    /**
     * @param {?} element
     * @param {?} styleMap
     * @return {?}
     */
    StyleUtils.prototype._writeStyleAttribute = /**
     * @param {?} element
     * @param {?} styleMap
     * @return {?}
     */
    function (element, styleMap) {
        /** @type {?} */
        var styleAttrValue = '';
        for (var key in styleMap) {
            /** @type {?} */
            var newValue = styleMap[key];
            if (newValue) {
                styleAttrValue += key + ':' + styleMap[key] + ';';
            }
        }
        element.setAttribute('style', styleAttrValue);
    };
    StyleUtils.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    StyleUtils.ctorParameters = function () { return [
        { type: StylesheetMap, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [SERVER_TOKEN,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [LAYOUT_CONFIG,] }] }
    ]; };
    /** @nocollapse */ StyleUtils.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function StyleUtils_Factory() { return new StyleUtils(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(StylesheetMap, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(SERVER_TOKEN, 8), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(LAYOUT_CONFIG)); }, token: StyleUtils, providedIn: "root" });
    return StyleUtils;
}());
/** @type {?} */
var FALLBACK_STYLE = 'block';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * The flex API permits 3 or 1 parts of the value:
 *    - `flex-grow flex-shrink flex-basis`, or
 *    - `flex-basis`
 * @param {?} basis
 * @param {?=} grow
 * @param {?=} shrink
 * @return {?}
 */
function validateBasis(basis, grow, shrink) {
    if (grow === void 0) { grow = '1'; }
    if (shrink === void 0) { shrink = '1'; }
    /** @type {?} */
    var parts = [grow, shrink, basis];
    /** @type {?} */
    var j = basis.indexOf('calc');
    if (j > 0) {
        parts[2] = _validateCalcValue(basis.substring(j).trim());
        /** @type {?} */
        var matches = basis.substr(0, j).trim().split(' ');
        if (matches.length == 2) {
            parts[0] = matches[0];
            parts[1] = matches[1];
        }
    }
    else if (j == 0) {
        parts[2] = _validateCalcValue(basis.trim());
    }
    else {
        /** @type {?} */
        var matches = basis.split(' ');
        parts = (matches.length === 3) ? matches : [
            grow, shrink, basis
        ];
    }
    return parts;
}
/**
 * Calc expressions require whitespace before & after any expression operators
 * This is a simple, crude whitespace padding solution.
 *   - '3 3 calc(15em + 20px)'
 *   - calc(100% / 7 * 2)
 *   - 'calc(15em + 20px)'
 *   - 'calc(15em+20px)'
 *   - '37px'
 *   = '43%'
 * @param {?} calc
 * @return {?}
 */
function _validateCalcValue(calc) {
    return calc.replace(/[\s]/g, '').replace(/[\/\*\+\-]/g, ' $& ');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=core.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/extended.es5.js":
/*!****************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/extended.es5.js ***!
  \****************************************************************/
/*! exports provided: ExtendedModule, ClassDirective, ImgSrcDirective, negativeOf, ShowHideDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtendedModule", function() { return ExtendedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return ClassDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function() { return ImgSrcDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "negativeOf", function() { return negativeOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function() { return ShowHideDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return StyleDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * This directive provides a responsive API for the HTML <img> 'src' attribute
 * and will update the img.src property upon each responsive activation.
 *
 * e.g.
 *      <img src="defaultScene.jpg" src.xs="mobileScene.jpg"></img>
 *
 * @see https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-src/
 */
var ImgSrcDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImgSrcDirective, _super);
    /* tslint:enable */
    function ImgSrcDirective(_elRef, _monitor, _styler, _platformId, _serverModuleLoaded) {
        var _this = _super.call(this, _monitor, _elRef, _styler) || this;
        _this._elRef = _elRef;
        _this._monitor = _monitor;
        _this._styler = _styler;
        _this._platformId = _platformId;
        _this._serverModuleLoaded = _serverModuleLoaded;
        _this._cacheInput('src', _elRef.nativeElement.getAttribute('src') || '');
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(_this._platformId) && _this._serverModuleLoaded) {
            _this.nativeElement.setAttribute('src', '');
        }
        return _this;
    }
    Object.defineProperty(ImgSrcDirective.prototype, "srcBase", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this.cacheDefaultSrc(val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "srcGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('srcGtLg', val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Listen for responsive changes to update the img.src attribute
     */
    /**
     * Listen for responsive changes to update the img.src attribute
     * @return {?}
     */
    ImgSrcDirective.prototype.ngOnInit = /**
     * Listen for responsive changes to update the img.src attribute
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        if (this.hasResponsiveKeys) {
            // Listen for responsive changes
            this._listenForMediaQueryChanges('src', this.defaultSrc, function () {
                _this._updateSrcFor();
            });
        }
        this._updateSrcFor();
    };
    /**
     * Update the 'src' property of the host <img> element
     */
    /**
     * Update the 'src' property of the host <img> element
     * @return {?}
     */
    ImgSrcDirective.prototype.ngOnChanges = /**
     * Update the 'src' property of the host <img> element
     * @return {?}
     */
    function () {
        if (this.hasInitialized) {
            this._updateSrcFor();
        }
    };
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     */
    /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @return {?}
     */
    ImgSrcDirective.prototype._updateSrcFor = /**
     * Use the [responsively] activated input value to update
     * the host img src attribute or assign a default `img.src=''`
     * if the src has not been defined.
     *
     * Do nothing to standard `<img src="">` usages, only when responsive
     * keys are present do we actually call `setAttribute()`
     * @return {?}
     */
    function () {
        if (this.hasResponsiveKeys) {
            /** @type {?} */
            var url = this.activatedValue || this.defaultSrc;
            if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this._platformId) && this._serverModuleLoaded) {
                this._styler.applyStyleToElement(this.nativeElement, { 'content': url ? "url(" + url + ")" : '' });
            }
            else {
                this.nativeElement.setAttribute('src', String(url));
            }
        }
    };
    /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using @Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     */
    /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using \@Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     * @param {?=} value
     * @return {?}
     */
    ImgSrcDirective.prototype.cacheDefaultSrc = /**
     * Cache initial value of 'src', this will be used as fallback when breakpoint
     * activations change.
     * NOTE: The default 'src' property is not bound using \@Input(), so perform
     * a post-ngOnInit() lookup of the default src value (if any).
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        this._cacheInput('src', value || '');
    };
    Object.defineProperty(ImgSrcDirective.prototype, "defaultSrc", {
        /**
         * Empty values are maintained, undefined values are exposed as ''
         */
        get: /**
         * Empty values are maintained, undefined values are exposed as ''
         * @return {?}
         */
        function () {
            return this._queryInput('src') || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImgSrcDirective.prototype, "hasResponsiveKeys", {
        /**
         * Does the <img> have 1 or more src.<xxx> responsive inputs
         * defined... these will be mapped to activated breakpoints.
         */
        get: /**
         * Does the <img> have 1 or more src.<xxx> responsive inputs
         * defined... these will be mapped to activated breakpoints.
         * @return {?}
         */
        function () {
            return Object.keys(this._inputMap).length > 1;
        },
        enumerable: true,
        configurable: true
    });
    ImgSrcDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],\n  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],\n  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    ImgSrcDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"],] }] }
    ]; };
    ImgSrcDirective.propDecorators = {
        srcBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src',] }],
        srcXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.xs',] }],
        srcSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.sm',] }],
        srcMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.md',] }],
        srcLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lg',] }],
        srcXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.xl',] }],
        srcLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-sm',] }],
        srcLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-md',] }],
        srcLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-lg',] }],
        srcLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.lt-xl',] }],
        srcGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-xs',] }],
        srcGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-sm',] }],
        srcGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-md',] }],
        srcGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['src.gt-lg',] }]
    };
    return ImgSrcDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to add responsive support for ngClass.
 * This maintains the core functionality of 'ngClass' and adds responsive API
 * Note: this class is a no-op when rendered on the server
 */
var ClassDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ClassDirective, _super);
    /* tslint:enable */
    function ClassDirective(monitor, _iterableDiffers, _keyValueDiffers, _ngEl, _renderer, _ngClassInstance, _styler) {
        var _this = _super.call(this, monitor, _ngEl, _styler) || this;
        _this.monitor = monitor;
        _this._iterableDiffers = _iterableDiffers;
        _this._keyValueDiffers = _keyValueDiffers;
        _this._ngEl = _ngEl;
        _this._renderer = _renderer;
        _this._ngClassInstance = _ngClassInstance;
        _this._styler = _styler;
        _this._configureAdapters();
        return _this;
    }
    Object.defineProperty(ClassDirective.prototype, "ngClassBase", {
        /**
         * Intercept ngClass assignments so we cache the default classes
         * which are merged with activated styles or used as fallbacks.
         * Note: Base ngClass values are applied during ngDoCheck()
         */
        set: /**
         * Intercept ngClass assignments so we cache the default classes
         * which are merged with activated styles or used as fallbacks.
         * Note: Base ngClass values are applied during ngDoCheck()
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var key = 'ngClass';
            this._base.cacheInput(key, val, true);
            this._ngClassInstance.ngClass = this._base.queryInput(key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "klazz", {
        /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         */
        set: /**
         * Capture class assignments so we cache the default classes
         * which are merged with activated styles and used as fallbacks.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var key = 'class';
            this._base.cacheInput(key, val);
            this._ngClassInstance.klass = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXs", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassDirective.prototype, "ngClassGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngClassGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /**
     * For @Input changes on the current mq activation property
     */
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    ClassDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._base.activeKey in changes) {
            this._ngClassInstance.ngClass = this._base.mqActivation.activatedInput || '';
        }
    };
    /**
     * @return {?}
     */
    ClassDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._configureMQListener();
    };
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     */
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    ClassDirective.prototype.ngDoCheck = /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this._ngClassInstance.ngDoCheck();
    };
    /**
     * @return {?}
     */
    ClassDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._base.ngOnDestroy();
        delete this._ngClassInstance;
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     */
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    ClassDirective.prototype._configureAdapters = /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    function () {
        this._base = new _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirectiveAdapter"]('ngClass', this.monitor, this._ngEl, this._styler);
        if (!this._ngClassInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been defined on
            // the same host element; since the responsive variations may be defined...
            this._ngClassInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"](this._iterableDiffers, this._keyValueDiffers, this._ngEl, this._renderer);
        }
    };
    /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     */
    /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     * @param {?=} baseKey
     * @return {?}
     */
    ClassDirective.prototype._configureMQListener = /**
     * Build an mqActivation object that bridges mql change events to onMediaQueryChange handlers
     * NOTE: We delegate subsequent activity to the NgClass logic
     *       Identify the activated input value and update the ngClass iterables...
     *       Use ngDoCheck() to actually apply the values to the element
     * @param {?=} baseKey
     * @return {?}
     */
    function (baseKey) {
        var _this = this;
        if (baseKey === void 0) { baseKey = 'ngClass'; }
        /** @type {?} */
        var fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, function (changes) {
            _this._ngClassInstance.ngClass = changes.value || '';
            _this._ngClassInstance.ngDoCheck();
        });
    };
    ClassDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n    [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],\n    [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],\n    [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]\n  "
                },] },
    ];
    /** @nocollapse */
    ClassDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] }
    ]; };
    ClassDirective.propDecorators = {
        ngClassBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass',] }],
        klazz: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['class',] }],
        ngClassXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.xs',] }],
        ngClassSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.sm',] }],
        ngClassMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.md',] }],
        ngClassLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lg',] }],
        ngClassXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.xl',] }],
        ngClassLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-sm',] }],
        ngClassLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-md',] }],
        ngClassLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-lg',] }],
        ngClassLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.lt-xl',] }],
        ngClassGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-xs',] }],
        ngClassGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-sm',] }],
        ngClassGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-md',] }],
        ngClassGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngClass.gt-lg',] }]
    };
    return ClassDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var FALSY = ['false', false, 0];
/**
 * For fxHide selectors, we invert the 'value'
 * and assign to the equivalent fxShow selector cache
 *  - When 'hide' === '' === true, do NOT show the element
 *  - When 'hide' === false or 0... we WILL show the element
 * @param {?} hide
 * @return {?}
 */
function negativeOf(hide) {
    return (hide === '') ? false :
        ((hide === 'false') || (hide === 0)) ? true : !hide;
}
/**
 * 'show' Layout API directive
 *
 */
var ShowHideDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShowHideDirective, _super);
    /* tslint:enable */
    function ShowHideDirective(monitor, layout, elRef, styleUtils, platformId, serverModuleLoaded) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this.layout = layout;
        _this.elRef = elRef;
        _this.styleUtils = styleUtils;
        _this.platformId = platformId;
        _this.serverModuleLoaded = serverModuleLoaded;
        if (layout) {
            /**
                   * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
                   * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
                   */
            /**
             * The Layout can set the display:flex (and incorrectly affect the Hide/Show directives.
             * Whenever Layout [on the same element] resets its CSS, then update the Hide/Show CSS
             */
            _this._layoutWatcher = layout.layout$.subscribe(function () { return _this._updateWithValue(); });
        }
        return _this;
    }
    Object.defineProperty(ShowHideDirective.prototype, "show", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('show', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "showGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hide", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('show', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXs', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showLtXl', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtXs', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtSm', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtMd', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowHideDirective.prototype, "hideGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('showGtLg', negativeOf(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     */
    /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @return {?}
     */
    ShowHideDirective.prototype._getDisplayStyle = /**
     * Override accessor to the current HTMLElement's `display` style
     * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
     * unless it was already explicitly specified inline or in a CSS stylesheet.
     * @return {?}
     */
    function () {
        return this.layout ? 'flex' : _super.prototype._getDisplayStyle.call(this);
    };
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     */
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnChanges = /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxShow')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.hasInitialized && (changes['show'] != null || this._mqActivation)) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._display = this._getDisplayStyle();
        /** @type {?} */
        var value = this._getDefaultVal('show', true);
        // Build _mqActivation controller
        this._listenForMediaQueryChanges('show', value, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    ShowHideDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /** Validate the visibility value and then update the host's inline display style */
    /**
     * Validate the visibility value and then update the host's inline display style
     * @param {?=} value
     * @return {?}
     */
    ShowHideDirective.prototype._updateWithValue = /**
     * Validate the visibility value and then update the host's inline display style
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._getDefaultVal('show', true);
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var shouldShow = this._validateTruthy(value);
        this._applyStyleToElement(this._buildCSS(shouldShow));
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformServer"])(this.platformId) && this.serverModuleLoaded) {
            this.nativeElement.style.setProperty('display', '');
        }
    };
    /** Build the CSS that should be assigned to the element instance */
    /**
     * Build the CSS that should be assigned to the element instance
     * @param {?} show
     * @return {?}
     */
    ShowHideDirective.prototype._buildCSS = /**
     * Build the CSS that should be assigned to the element instance
     * @param {?} show
     * @return {?}
     */
    function (show) {
        return { 'display': show ? this._display : 'none' };
    };
    /**  Validate the to be not FALSY */
    /**
     * Validate the to be not FALSY
     * @param {?} show
     * @return {?}
     */
    ShowHideDirective.prototype._validateTruthy = /**
     * Validate the to be not FALSY
     * @param {?} show
     * @return {?}
     */
    function (show) {
        return (FALSY.indexOf(show) == -1);
    };
    ShowHideDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  [fxShow],\n  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],\n  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],\n  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],\n  [fxHide],\n  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],\n  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],\n  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    ShowHideDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] }] },
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["SERVER_TOKEN"],] }] }
    ]; };
    ShowHideDirective.propDecorators = {
        show: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow',] }],
        showXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.xs',] }],
        showSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.sm',] }],
        showMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.md',] }],
        showLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lg',] }],
        showXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.xl',] }],
        showLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-sm',] }],
        showLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-md',] }],
        showLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-lg',] }],
        showLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.lt-xl',] }],
        showGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-xs',] }],
        showGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-sm',] }],
        showGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-md',] }],
        showGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShow.gt-lg',] }],
        hide: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide',] }],
        hideXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.xs',] }],
        hideSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.sm',] }],
        hideMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.md',] }],
        hideLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lg',] }],
        hideXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.xl',] }],
        hideLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-sm',] }],
        hideLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-md',] }],
        hideLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-lg',] }],
        hideLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.lt-xl',] }],
        hideGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-xs',] }],
        hideGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-sm',] }],
        hideGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-md',] }],
        hideGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxHide.gt-lg',] }]
    };
    return ShowHideDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * NgStyle allowed inputs
 */
var /**
 * NgStyle allowed inputs
 */
NgStyleKeyValue = /** @class */ (function () {
    function NgStyleKeyValue(key, value, noQuotes) {
        if (noQuotes === void 0) { noQuotes = true; }
        this.key = key;
        this.value = value;
        this.key = noQuotes ? key.replace(/['"]/g, '').trim() : key.trim();
        this.value = noQuotes ? value.replace(/['"]/g, '').trim() : value.trim();
        this.value = this.value.replace(/;/, '');
    }
    return NgStyleKeyValue;
}());
/** *
 * Transform Operators for \@angular/flex-layout NgStyle Directive
  @type {?} */
var ngStyleUtils = {
    getType: getType,
    buildRawList: buildRawList,
    buildMapFromList: buildMapFromList,
    buildMapFromSet: buildMapFromSet
};
/**
 * @param {?} target
 * @return {?}
 */
function getType(target) {
    /** @type {?} */
    var what = typeof target;
    if (what === 'object') {
        return (target.constructor === Array) ? 'array' :
            (target.constructor === Set) ? 'set' : 'object';
    }
    return what;
}
/**
 * Split string of key:value pairs into Array of k-v pairs
 * e.g.  'key:value; key:value; key:value;' -> ['key:value',...]
 * @param {?} source
 * @param {?=} delimiter
 * @return {?}
 */
function buildRawList(source, delimiter) {
    if (delimiter === void 0) { delimiter = ';'; }
    return String(source)
        .trim()
        .split(delimiter)
        .map(function (val) { return val.trim(); })
        .filter(function (val) { return val !== ''; });
}
/**
 * Convert array of key:value strings to a iterable map object
 * @param {?} styles
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromList(styles, sanitize) {
    /** @type {?} */
    var sanitizeValue = function (it) {
        if (sanitize) {
            it.value = sanitize(it.value);
        }
        return it;
    };
    return styles
        .map(stringToKeyValue)
        .filter(function (entry) { return !!entry; })
        .map(sanitizeValue)
        .reduce(keyValuesToMap, {});
}
/**
 * Convert Set<string> or raw Object to an iterable NgStyleMap
 * @param {?} source
 * @param {?=} sanitize
 * @return {?}
 */
function buildMapFromSet(source, sanitize) {
    /** @type {?} */
    var list = new Array();
    if (getType(source) == 'set') {
        source.forEach(function (entry) { return list.push(entry); });
    }
    else { // simple hashmap
        // simple hashmap
        Object.keys(source).forEach(function (key) {
            list.push(key + ":" + source[key]);
        });
    }
    return buildMapFromList(list, sanitize);
}
/**
 * Convert 'key:value' -> [key, value]
 * @param {?} it
 * @return {?}
 */
function stringToKeyValue(it) {
    var _a = it.split(':'), key = _a[0], val = _a[1];
    return new NgStyleKeyValue(key, val);
}
/**
 * Convert [ [key,value] ] -> { key : value }
 * @param {?} map
 * @param {?} entry
 * @return {?}
 */
function keyValuesToMap(map, entry) {
    if (!!entry.key) {
        map[entry.key] = entry.value;
    }
    return map;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to add responsive support for ngStyle.
 *
 */
var StyleDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StyleDirective, _super);
    /* tslint:enable */
    /**
     *  Constructor for the ngStyle subclass; which adds selectors and
     *  a MediaQuery Activation Adapter
     */
    function StyleDirective(monitor, _sanitizer, _ngEl, _renderer, _differs, _ngStyleInstance, _styler) {
        var _this = _super.call(this, monitor, _ngEl, _styler) || this;
        _this.monitor = monitor;
        _this._sanitizer = _sanitizer;
        _this._ngEl = _ngEl;
        _this._renderer = _renderer;
        _this._differs = _differs;
        _this._ngStyleInstance = _ngStyleInstance;
        _this._styler = _styler;
        _this._configureAdapters();
        return _this;
    }
    Object.defineProperty(StyleDirective.prototype, "ngStyleBase", {
        /**
         * Intercept ngStyle assignments so we cache the default styles
         * which are merged with activated styles or used as fallbacks.
         */
        set: /**
         * Intercept ngStyle assignments so we cache the default styles
         * which are merged with activated styles or used as fallbacks.
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var key = 'ngStyle';
            this._base.cacheInput(key, val, true); // convert val to hashmap
            this._ngStyleInstance.ngStyle = this._base.queryInput(key);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXs", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleLtXl', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtXs', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtSm', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtMd', val, true); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StyleDirective.prototype, "ngStyleGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._base.cacheInput('ngStyleGtLg', val, true); },
        enumerable: true,
        configurable: true
    });
    // ******************************************************************
    // Lifecycle Hooks
    // ******************************************************************
    /** For @Input changes on the current mq activation property */
    /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    StyleDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._base.activeKey in changes) {
            this._ngStyleInstance.ngStyle = this._base.mqActivation.activatedInput || '';
        }
    };
    /**
     * @return {?}
     */
    StyleDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._configureMQListener();
    };
    /** For ChangeDetectionStrategy.onPush and ngOnChanges() updates */
    /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    StyleDirective.prototype.ngDoCheck = /**
     * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
     * @return {?}
     */
    function () {
        this._ngStyleInstance.ngDoCheck();
    };
    /**
     * @return {?}
     */
    StyleDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._base.ngOnDestroy();
        delete this._ngStyleInstance;
    };
    // ******************************************************************
    // Internal Methods
    // ******************************************************************
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     */
    /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    StyleDirective.prototype._configureAdapters = /**
     * Configure adapters (that delegate to an internal ngClass instance) if responsive
     * keys have been defined.
     * @return {?}
     */
    function () {
        this._base = new _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirectiveAdapter"]('ngStyle', this.monitor, this._ngEl, this._styler);
        if (!this._ngStyleInstance) {
            // Create an instance NgClass Directive instance only if `ngClass=""` has NOT been
            // defined on the same host element; since the responsive variations may be defined...
            this._ngStyleInstance = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"](this._differs, this._ngEl, this._renderer);
        }
        this._buildCacheInterceptor();
        this._fallbackToStyle();
    };
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @param {?=} baseKey
     * @return {?}
     */
    StyleDirective.prototype._configureMQListener = /**
     * Build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @param {?=} baseKey
     * @return {?}
     */
    function (baseKey) {
        var _this = this;
        if (baseKey === void 0) { baseKey = 'ngStyle'; }
        /** @type {?} */
        var fallbackValue = this._base.queryInput(baseKey);
        this._base.listenForMediaQueryChanges(baseKey, fallbackValue, function (changes) {
            _this._ngStyleInstance.ngStyle = changes.value || '';
            _this._ngStyleInstance.ngDoCheck();
        });
    };
    // ************************************************************************
    // Private Internal Methods
    // ************************************************************************
    /** Build intercept to convert raw strings to ngStyleMap */
    /**
     * Build intercept to convert raw strings to ngStyleMap
     * @return {?}
     */
    StyleDirective.prototype._buildCacheInterceptor = /**
     * Build intercept to convert raw strings to ngStyleMap
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var cacheInput = this._base.cacheInput.bind(this._base);
        this._base.cacheInput = function (key, source, cacheRaw, merge) {
            if (cacheRaw === void 0) { cacheRaw = false; }
            if (merge === void 0) { merge = true; }
            /** @type {?} */
            var styles = _this._buildStyleMap(source);
            if (merge) {
                styles = extendObject({}, _this._base.inputMap['ngStyle'], styles);
            }
            cacheInput(key, styles, cacheRaw);
        };
    };
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     */
    /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @param {?} styles
     * @return {?}
     */
    StyleDirective.prototype._buildStyleMap = /**
     * Convert raw strings to ngStyleMap; which is required by ngStyle
     * NOTE: Raw string key-value pairs MUST be delimited by `;`
     *       Comma-delimiters are not supported due to complexities of
     *       possible style values such as `rgba(x,x,x,x)` and others
     * @param {?} styles
     * @return {?}
     */
    function (styles) {
        var _this = this;
        /** @type {?} */
        var sanitizer = function (val) {
            // Always safe-guard (aka sanitize) style property values
            return _this._sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].STYLE, val) || '';
        };
        if (styles) {
            switch (ngStyleUtils.getType(styles)) {
                case 'string': return ngStyleUtils.buildMapFromList(ngStyleUtils.buildRawList(styles), sanitizer);
                case 'array': return ngStyleUtils.buildMapFromList(/** @type {?} */ (styles), sanitizer);
                case 'set': return ngStyleUtils.buildMapFromSet(styles, sanitizer);
                default: return ngStyleUtils.buildMapFromSet(styles, sanitizer);
            }
        }
        return styles;
    };
    /** Initial lookup of raw 'class' value (if any) */
    /**
     * Initial lookup of raw 'class' value (if any)
     * @return {?}
     */
    StyleDirective.prototype._fallbackToStyle = /**
     * Initial lookup of raw 'class' value (if any)
     * @return {?}
     */
    function () {
        if (!this._base.queryInput('ngStyle')) {
            this.ngStyleBase = this._getAttributeValue('style') || '';
        }
    };
    StyleDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n    [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],\n    [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],\n    [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]\n  "
                },] },
    ];
    /** @nocollapse */
    StyleDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["MediaMonitor"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["KeyValueDiffers"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["StyleUtils"] }
    ]; };
    StyleDirective.propDecorators = {
        ngStyleBase: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle',] }],
        ngStyleXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.xs',] }],
        ngStyleSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.sm',] }],
        ngStyleMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.md',] }],
        ngStyleLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lg',] }],
        ngStyleXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.xl',] }],
        ngStyleLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-sm',] }],
        ngStyleLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-md',] }],
        ngStyleLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-lg',] }],
        ngStyleLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.lt-xl',] }],
        ngStyleGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-xs',] }],
        ngStyleGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-sm',] }],
        ngStyleGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-md',] }],
        ngStyleGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['ngStyle.gt-lg',] }]
    };
    return StyleDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    ShowHideDirective,
    ClassDirective,
    StyleDirective,
    ImgSrcDirective
];
/**
 * *****************************************************************
 * Define module for the Extended API
 * *****************************************************************
 */
var ExtendedModule = /** @class */ (function () {
    function ExtendedModule() {
    }
    ExtendedModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_3__["CoreModule"]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    return ExtendedModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=extended.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js ***!
  \*******************************************************************/
/*! exports provided: removeStyles, BROWSER_PROVIDER, CLASS_NAME, CoreModule, MediaChange, StylesheetMap, STYLESHEET_MAP_PROVIDER_FACTORY, STYLESHEET_MAP_PROVIDER, DEFAULT_CONFIG, LAYOUT_CONFIG, SERVER_TOKEN, BREAKPOINT, BaseDirective, BaseDirectiveAdapter, BaseFxDirective, RESPONSIVE_ALIASES, DEFAULT_BREAKPOINTS, ScreenTypes, ORIENTATION_BREAKPOINTS, BreakPointRegistry, BREAKPOINTS, MatchMedia, MockMatchMedia, MockMediaQueryList, MockMatchMediaProvider, ServerMediaQueryList, ServerMatchMedia, MediaMonitor, MEDIA_MONITOR_PROVIDER_FACTORY, MEDIA_MONITOR_PROVIDER, ObservableMedia, MediaService, ObservableMediaProvider, OBSERVABLE_MEDIA_PROVIDER_FACTORY, OBSERVABLE_MEDIA_PROVIDER, KeyOptions, ResponsiveActivation, StyleUtils, validateBasis, ExtendedModule, ClassDirective, ImgSrcDirective, negativeOf, ShowHideDirective, StyleDirective, FlexModule, FlexDirective, FlexAlignDirective, FlexFillDirective, FlexOffsetDirective, FlexOrderDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵa, ɵj, ɵk, GridModule, VERSION, FlexLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexLayoutModule", function() { return FlexLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "removeStyles", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["removeStyles"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BROWSER_PROVIDER", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BROWSER_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CLASS_NAME", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CLASS_NAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaChange", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaChange"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StylesheetMap", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StylesheetMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STYLESHEET_MAP_PROVIDER_FACTORY", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["STYLESHEET_MAP_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "STYLESHEET_MAP_PROVIDER", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["STYLESHEET_MAP_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_CONFIG", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SERVER_TOKEN", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINT", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDirective", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseDirectiveAdapter", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirectiveAdapter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseFxDirective", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseFxDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RESPONSIVE_ALIASES", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["RESPONSIVE_ALIASES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["DEFAULT_BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScreenTypes", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ScreenTypes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ORIENTATION_BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ORIENTATION_BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreakPointRegistry", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BreakPointRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BREAKPOINTS", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMediaQueryList", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMediaQueryList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockMatchMediaProvider", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MockMatchMediaProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerMediaQueryList", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ServerMediaQueryList"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ServerMatchMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ServerMatchMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaMonitor", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEDIA_MONITOR_PROVIDER_FACTORY", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MEDIA_MONITOR_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MEDIA_MONITOR_PROVIDER", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MEDIA_MONITOR_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableMedia", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObservableMediaProvider", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ObservableMediaProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OBSERVABLE_MEDIA_PROVIDER_FACTORY", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["OBSERVABLE_MEDIA_PROVIDER_FACTORY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OBSERVABLE_MEDIA_PROVIDER", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["OBSERVABLE_MEDIA_PROVIDER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "KeyOptions", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["KeyOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResponsiveActivation", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["ResponsiveActivation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleUtils", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "validateBasis", function() { return _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"]; });

/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/esm5/extended.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExtendedModule", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImgSrcDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ImgSrcDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "negativeOf", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["negativeOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowHideDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ShowHideDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"]; });

/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/esm5/flex.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexModule", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexFillDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOffsetDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexOrderDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutAlignDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function() { return _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["LayoutGapDirective"]; });

/* harmony import */ var _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/grid */ "./node_modules/@angular/flex-layout/esm5/grid.es5.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵg"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵh"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵi"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵj"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["ɵk"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]; });

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */











/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * Current version of Angular Flex-Layout.
  @type {?} */
var VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["Version"]('6.0.0-beta.18');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * FlexLayoutModule -- the main import for all utilities in the Angular Layout library
 * * Will automatically provide Flex, Grid, and Extended modules for use in the application
 * * Can be configured using the static withConfig method, options viewable on the Wiki's
 *   Configuration page
 */
var FlexLayoutModule = /** @class */ (function () {
    function FlexLayoutModule(serverModuleLoaded, platformId) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformServer"])(platformId) && !serverModuleLoaded) {
            console.warn('Warning: Flex Layout loaded on the server without FlexLayoutServerModule');
        }
    }
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     */
    /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    FlexLayoutModule.withConfig = /**
     * Initialize the FlexLayoutModule with a set of config options,
     * which sets the corresponding tokens accordingly
     * @param {?} configOptions
     * @param {?=} breakpoints
     * @return {?}
     */
    function (configOptions, breakpoints) {
        return {
            ngModule: FlexLayoutModule,
            providers: Array.isArray(breakpoints) ?
                configOptions.serverLoaded ?
                    [
                        { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                        { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"], useValue: breakpoints, multi: true },
                        { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"], useValue: true },
                    ] : [
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                    { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BREAKPOINT"], useValue: breakpoints, multi: true },
                ]
                :
                    configOptions.serverLoaded ?
                        [
                            { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                            { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"], useValue: true },
                        ] :
                        [
                            { provide: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"], useValue: configOptions },
                        ]
        };
    };
    FlexLayoutModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]],
                    exports: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["FlexModule"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["ExtendedModule"], _angular_flex_layout_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"]]
                },] },
    ];
    /** @nocollapse */
    FlexLayoutModule.ctorParameters = function () { return [
        { type: Boolean, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["SERVER_TOKEN"],] }] },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
    ]; };
    return FlexLayoutModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=flex-layout.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/flex.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/flex.es5.js ***!
  \************************************************************/
/*! exports provided: FlexModule, FlexDirective, FlexAlignDirective, FlexFillDirective, FlexOffsetDirective, FlexOrderDirective, LayoutDirective, LayoutAlignDirective, LayoutGapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexModule", function() { return FlexModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexDirective", function() { return FlexDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexAlignDirective", function() { return FlexAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexFillDirective", function() { return FlexFillDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOffsetDirective", function() { return FlexOffsetDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlexOrderDirective", function() { return FlexOrderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDirective", function() { return LayoutDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutAlignDirective", function() { return LayoutAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGapDirective", function() { return LayoutGapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** *
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
  @type {?} */
var INLINE = 'inline';
/** @type {?} */
var LAYOUT_VALUES = ['row', 'column', 'row-reverse', 'column-reverse'];
/**
 * Validate the direction|'direction wrap' value and then update the host's inline flexbox styles
 * @param {?} value
 * @return {?}
 */
function buildLayoutCSS(value) {
    var _a = validateValue(value), direction = _a[0], wrap = _a[1], isInline = _a[2];
    return buildCSS(direction, wrap, isInline);
}
/**
 * Validate the value to be one of the acceptable value options
 * Use default fallback of 'row'
 * @param {?} value
 * @return {?}
 */
function validateValue(value) {
    value = value ? value.toLowerCase() : '';
    var _a = value.split(' '), direction = _a[0], wrap = _a[1], inline = _a[2];
    // First value must be the `flex-direction`
    if (!LAYOUT_VALUES.find(function (x) { return x === direction; })) {
        direction = LAYOUT_VALUES[0];
    }
    if (wrap === INLINE) {
        wrap = (inline !== INLINE) ? inline : '';
        inline = INLINE;
    }
    return [direction, validateWrapValue(wrap), !!inline];
}
/**
 * Determine if the validated, flex-direction value specifies
 * a horizontal/row flow.
 * @param {?} value
 * @return {?}
 */
function isFlowHorizontal(value) {
    var flow = validateValue(value)[0];
    return flow.indexOf('row') > -1;
}
/**
 * Convert layout-wrap='<value>' to expected flex-wrap style
 * @param {?} value
 * @return {?}
 */
function validateWrapValue(value) {
    if (!!value) {
        switch (value.toLowerCase()) {
            case 'reverse':
            case 'wrap-reverse':
            case 'reverse-wrap':
                value = 'wrap-reverse';
                break;
            case 'no':
            case 'none':
            case 'nowrap':
                value = 'nowrap';
                break;
            // All other values fallback to 'wrap'
            default:
                value = 'wrap';
                break;
        }
    }
    return value;
}
/**
 * Build the CSS that should be assigned to the element instance
 * BUG:
 *   1) min-height on a column flex container won’t apply to its flex item children in IE 10-11.
 *      Use height instead if possible; height : <xxx>vh;
 *
 *  This way any padding or border specified on the child elements are
 *  laid out and drawn inside that element's specified width and height.
 * @param {?} direction
 * @param {?=} wrap
 * @param {?=} inline
 * @return {?}
 */
function buildCSS(direction, wrap, inline) {
    if (wrap === void 0) { wrap = null; }
    if (inline === void 0) { inline = false; }
    return {
        'display': inline ? 'inline-flex' : 'flex',
        'box-sizing': 'border-box',
        'flex-direction': direction,
        'flex-wrap': !!wrap ? wrap : null
    };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout' flexbox styling directive
 * Defines the positioning flow direction for the child elements: row or column
 * Optional values: column or row (default)
 * @see https://css-tricks.com/almanac/properties/f/flex-direction/
 *
 */
var LayoutDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutDirective, _super);
    /* tslint:enable */
    function LayoutDirective(monitor, elRef, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._announcer = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        _this.layout$ = _this._announcer.asObservable();
        return _this;
    }
    Object.defineProperty(LayoutDirective.prototype, "layout", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layout', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutDirective.prototype, "layoutLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('layoutLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * On changes to any @Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     */
    /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    LayoutDirective.prototype.ngOnChanges = /**
     * On changes to any \@Input properties...
     * Default to use the non-responsive Input value ('fxLayout')
     * Then conditionally override with the mq-activated Input's current value
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['layout'] != null || this._mqActivation) {
            this._updateWithDirection();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('layout', 'row', function (changes) {
            _this._updateWithDirection(changes.value);
        });
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /** Validate the direction value and then update the host's inline flexbox styles */
    /**
     * Validate the direction value and then update the host's inline flexbox styles
     * @param {?=} value
     * @return {?}
     */
    LayoutDirective.prototype._updateWithDirection = /**
     * Validate the direction value and then update the host's inline flexbox styles
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('layout') || 'row';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var css = buildLayoutCSS(!!value ? value : '');
        this._applyStyleToElement(css);
        this._announcer.next({
            direction: css['flex-direction'],
            wrap: !!css['flex-wrap'] && css['flex-wrap'] !== 'nowrap'
        });
    };
    LayoutDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxLayout],\n  [fxLayout.xs], [fxLayout.sm], [fxLayout.md], [fxLayout.lg], [fxLayout.xl],\n  [fxLayout.lt-sm], [fxLayout.lt-md], [fxLayout.lt-lg], [fxLayout.lt-xl],\n  [fxLayout.gt-xs], [fxLayout.gt-sm], [fxLayout.gt-md], [fxLayout.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    LayoutDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    LayoutDirective.propDecorators = {
        layout: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout',] }],
        layoutXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.xs',] }],
        layoutSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.sm',] }],
        layoutMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.md',] }],
        layoutLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lg',] }],
        layoutXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.xl',] }],
        layoutGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-xs',] }],
        layoutGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-sm',] }],
        layoutGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-md',] }],
        layoutGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.gt-lg',] }],
        layoutLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-sm',] }],
        layoutLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-md',] }],
        layoutLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-lg',] }],
        layoutLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayout.lt-xl',] }]
    };
    return LayoutDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout-padding' styling directive
 *  Defines padding of child elements in a layout container
 */
var LayoutGapDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutGapDirective, _super);
    /* tslint:enable */
    function LayoutGapDirective(monitor, elRef, container, _zone, _directionality, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._zone = _zone;
        _this._directionality = _directionality;
        _this._layout = 'row';
        if (container) { // Subscribe to layout direction changes
            // Subscribe to layout direction changes
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        _this._directionWatcher =
            _this._directionality.change.subscribe(_this._updateWithValue.bind(_this));
        return _this;
    }
    Object.defineProperty(LayoutGapDirective.prototype, "gap", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gap', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutGapDirective.prototype, "gapLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('gapLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    LayoutGapDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['gap'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutGapDirective.prototype.ngAfterContentInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        this._watchContentChanges();
        this._listenForMediaQueryChanges('gap', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    /**
     * @return {?}
     */
    LayoutGapDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._observer) {
            this._observer.disconnect();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     */
    /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     * @return {?}
     */
    LayoutGapDirective.prototype._watchContentChanges = /**
     * Watch for child nodes to be added... and apply the layout gap styles to each.
     * NOTE: this does NOT! differentiate between viewChildren and contentChildren
     * @return {?}
     */
    function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            if (typeof MutationObserver !== 'undefined') {
                _this._observer = new MutationObserver(function (mutations) {
                    /** @type {?} */
                    var validatedChanges = function (it) {
                        return (it.addedNodes && it.addedNodes.length > 0) ||
                            (it.removedNodes && it.removedNodes.length > 0);
                    };
                    // update gap styles only for child 'added' or 'removed' events
                    if (mutations.some(validatedChanges)) {
                        _this._updateWithValue();
                    }
                });
                _this._observer.observe(_this.nativeElement, { childList: true });
            }
        });
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     */
    /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @param {?} layout
     * @return {?}
     */
    LayoutGapDirective.prototype._onLayoutChange = /**
     * Cache the parent container 'flex-direction' and update the 'margin' styles
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        var _this = this;
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        this._updateWithValue();
    };
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    LayoutGapDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var gapValue = value || this._queryInput('gap') || '0';
        if (this._mqActivation) {
            gapValue = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var items = this.childrenNodes
            .filter(function (el) { return el.nodeType === 1 && _this._getDisplayStyle(el) != 'none'; })
            .sort(function (a, b) {
            /** @type {?} */
            var orderA = +_this._styler.lookupStyle(a, 'order');
            /** @type {?} */
            var orderB = +_this._styler.lookupStyle(b, 'order');
            if (isNaN(orderA) || isNaN(orderB) || orderA === orderB) {
                return 0;
            }
            else {
                return orderA > orderB ? 1 : -1;
            }
        });
        if (items.length > 0) {
            if (gapValue.endsWith(GRID_SPECIFIER)) {
                gapValue = gapValue.substring(0, gapValue.indexOf(GRID_SPECIFIER));
                // For each `element` children, set the padding
                this._applyStyleToElements(this._buildGridPadding(gapValue), items);
                // Add the margin to the host element
                this._applyStyleToElement(this._buildGridMargin(gapValue));
            }
            else {
                /** @type {?} */
                var lastItem = items.pop();
                // For each `element` children EXCEPT the last,
                // set the margin right/bottom styles...
                this._applyStyleToElements(this._buildCSS(gapValue), items);
                // Clear all gaps for all visible elements
                this._applyStyleToElements(this._buildCSS(), [lastItem]);
            }
        }
    };
    /**
     *
     * @param {?} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildGridPadding = /**
     *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var paddingTop = '0px';
        /** @type {?} */
        var paddingRight = '0px';
        /** @type {?} */
        var paddingBottom = value;
        /** @type {?} */
        var paddingLeft = '0px';
        if (this._directionality.value === 'rtl') {
            paddingLeft = value;
        }
        else {
            paddingRight = value;
        }
        return { 'padding': paddingTop + " " + paddingRight + " " + paddingBottom + " " + paddingLeft };
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * Note: this will not work with calc values (negative calc values are invalid)
     * @param {?} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildGridMargin = /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * Note: this will not work with calc values (negative calc values are invalid)
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var marginTop = '0px';
        /** @type {?} */
        var marginRight = '0px';
        /** @type {?} */
        var marginBottom = '-' + value;
        /** @type {?} */
        var marginLeft = '0px';
        if (this._directionality.value === 'rtl') {
            marginLeft = '-' + value;
        }
        else {
            marginRight = '-' + value;
        }
        return { 'margin': marginTop + " " + marginRight + " " + marginBottom + " " + marginLeft };
    };
    /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * @param {?=} value
     * @return {?}
     */
    LayoutGapDirective.prototype._buildCSS = /**
     * Prepare margin CSS, remove any previous explicitly
     * assigned margin assignments
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        if (value === void 0) { value = null; }
        /** @type {?} */
        var key;
        /** @type {?} */
        var margins = {
            'margin-left': null,
            'margin-right': null,
            'margin-top': null,
            'margin-bottom': null
        };
        switch (this._layout) {
            case 'column':
                key = 'margin-bottom';
                break;
            case 'column-reverse':
                key = 'margin-top';
                break;
            case 'row':
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
            case 'row-reverse':
                key = this._directionality.value === 'rtl' ? 'margin-right' : 'margin-left';
                break;
            default:
                key = this._directionality.value === 'rtl' ? 'margin-left' : 'margin-right';
                break;
        }
        margins[key] = value;
        return margins;
    };
    LayoutGapDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  [fxLayoutGap],\n  [fxLayoutGap.xs], [fxLayoutGap.sm], [fxLayoutGap.md], [fxLayoutGap.lg], [fxLayoutGap.xl],\n  [fxLayoutGap.lt-sm], [fxLayoutGap.lt-md], [fxLayoutGap.lt-lg], [fxLayoutGap.lt-xl],\n  [fxLayoutGap.gt-xs], [fxLayoutGap.gt-sm], [fxLayoutGap.gt-md], [fxLayoutGap.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    LayoutGapDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    LayoutGapDirective.propDecorators = {
        gap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap',] }],
        gapXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.xs',] }],
        gapSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.sm',] }],
        gapMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.md',] }],
        gapLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lg',] }],
        gapXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.xl',] }],
        gapGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-xs',] }],
        gapGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-sm',] }],
        gapGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-md',] }],
        gapGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.gt-lg',] }],
        gapLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-sm',] }],
        gapLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-md',] }],
        gapLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-lg',] }],
        gapLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutGap.lt-xl',] }]
    };
    return LayoutGapDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));
/** @type {?} */
var GRID_SPECIFIER = ' grid';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Directive to control the size of a flex item using flex-basis, flex-grow, and flex-shrink.
 * Corresponds to the css `flex` shorthand property.
 *
 * @see https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */
var FlexDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexDirective, _super);
    /* tslint:enable */
    // Note: Explicitly @SkipSelf on LayoutDirective because we are looking
    //       for the parent flex container for this flex item.
    function FlexDirective(monitor, elRef, _container, styleUtils, layoutConfig) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._container = _container;
        _this.styleUtils = styleUtils;
        _this.layoutConfig = layoutConfig;
        _this._cacheInput('flex', '');
        _this._cacheInput('shrink', 1);
        _this._cacheInput('grow', 1);
        return _this;
    }
    Object.defineProperty(FlexDirective.prototype, "shrink", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('shrink', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "grow", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('grow', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flex", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flex', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexDirective.prototype, "flexLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('flexLtXl', val); },
        enumerable: true,
        configurable: true
    });
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['flex'] != null || this._mqActivation) {
            this._updateStyle();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('flex', '', function (changes) {
            _this._updateStyle(changes.value);
        });
        if (this._container) {
            // If this flex item is inside of a flex container marked with
            // Subscribe to layout immediate parent direction changes
            this._layoutWatcher = this._container.layout$.subscribe(function (layout) {
                // `direction` === null if parent container does not have a `fxLayout`
                // `direction` === null if parent container does not have a `fxLayout`
                _this._onLayoutChange(layout);
            });
        }
    };
    /**
     * @return {?}
     */
    FlexDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    FlexDirective.prototype._onLayoutChange = /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    function (layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateStyle();
    };
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexDirective.prototype._updateStyle = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var flexBasis = value || this._queryInput('flex') || '';
        if (this._mqActivation) {
            flexBasis = this._mqActivation.activatedInput;
        }
        /** @type {?} */
        var basis = String(flexBasis).replace(';', '');
        /** @type {?} */
        var parts = Object(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["validateBasis"])(basis, this._queryInput('grow'), this._queryInput('shrink'));
        this._applyStyleToElement(this._validateValue.apply(this, parts));
    };
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     */
    /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @return {?}
     */
    FlexDirective.prototype._validateValue = /**
     * Validate the value to be one of the acceptable value options
     * Use default fallback of 'row'
     * @param {?} grow
     * @param {?} shrink
     * @param {?} basis
     * @return {?}
     */
    function (grow, shrink, basis) {
        /** @type {?} */
        var addFlexToParent = this.layoutConfig.addFlexToParent !== false;
        /** @type {?} */
        var layout = this._getFlexFlowDirection(this.parentElement, addFlexToParent);
        /** @type {?} */
        var direction = (layout.indexOf('column') > -1) ? 'column' : 'row';
        /** @type {?} */
        var max = isFlowHorizontal(direction) ? 'max-width' : 'max-height';
        /** @type {?} */
        var min = isFlowHorizontal(direction) ? 'min-width' : 'min-height';
        /** @type {?} */
        var hasCalc = String(basis).indexOf('calc') > -1;
        /** @type {?} */
        var usingCalc = hasCalc || (basis == 'auto');
        /** @type {?} */
        var isPercent = String(basis).indexOf('%') > -1 && !hasCalc;
        /** @type {?} */
        var hasUnits = String(basis).indexOf('px') > -1 || String(basis).indexOf('em') > -1 ||
            String(basis).indexOf('vw') > -1 || String(basis).indexOf('vh') > -1;
        /** @type {?} */
        var isPx = String(basis).indexOf('px') > -1 || usingCalc;
        /** @type {?} */
        var isValue = (hasCalc || hasUnits);
        grow = (grow == '0') ? 0 : grow;
        shrink = (shrink == '0') ? 0 : shrink;
        /** @type {?} */
        var isFixed = !grow && !shrink;
        /** @type {?} */
        var css = {};
        /** @type {?} */
        var clearStyles = {
            'max-width': null,
            'max-height': null,
            'min-width': null,
            'min-height': null
        };
        switch (basis || '') {
            case '':
                /** @type {?} */
                var useColumnBasisZero = this.layoutConfig.useColumnBasisZero !== false;
                basis = direction === 'row' ? '0%' : (useColumnBasisZero ? '0.000000001px' : 'auto');
                break;
            case 'initial': // default
            case 'nogrow':
                grow = 0;
                basis = 'auto';
                break;
            case 'grow':
                basis = '100%';
                break;
            case 'noshrink':
                shrink = 0;
                basis = 'auto';
                break;
            case 'auto':
                break;
            case 'none':
                grow = 0;
                shrink = 0;
                basis = 'auto';
                break;
            default:
                // Defaults to percentage sizing unless `px` is explicitly set
                if (!isValue && !isPercent && !isNaN(/** @type {?} */ (basis))) {
                    basis = basis + '%';
                }
                // Fix for issue 280
                if (basis === '0%') {
                    isValue = true;
                }
                if (basis === '0px') {
                    basis = '0%';
                }
                // fix issue #5345
                if (hasCalc) {
                    css = extendObject(clearStyles, {
                        'flex-grow': grow,
                        'flex-shrink': shrink,
                        'flex-basis': isValue ? basis : '100%'
                    });
                }
                else {
                    css = extendObject(clearStyles, {
                        'flex': grow + " " + shrink + " " + (isValue ? basis : '100%')
                    });
                }
                break;
        }
        if (!(css['flex'] || css['flex-grow'])) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        // Fix for issues 277, 534, and 728
        if (basis !== '0%' && basis !== '0px' && basis !== '0.000000001px' && basis !== 'auto') {
            css[min] = isFixed || (isPx && grow) ? basis : null;
            css[max] = isFixed || (!usingCalc && shrink) ? basis : null;
        }
        // Fix for issue 528
        if (!css[min] && !css[max]) {
            if (hasCalc) {
                css = extendObject(clearStyles, {
                    'flex-grow': grow,
                    'flex-shrink': shrink,
                    'flex-basis': basis
                });
            }
            else {
                css = extendObject(clearStyles, {
                    'flex': grow + " " + shrink + " " + basis
                });
            }
        }
        else {
            // Fix for issue 660
            if (this._layout && this._layout.wrap) {
                css[hasCalc ? 'flex-basis' : 'flex'] = css[max] ?
                    (hasCalc ? css[max] : grow + " " + shrink + " " + css[max]) :
                    (hasCalc ? css[min] : grow + " " + shrink + " " + css[min]);
            }
        }
        return extendObject(css, { 'box-sizing': 'border-box' });
    };
    FlexDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFlex],\n  [fxFlex.xs], [fxFlex.sm], [fxFlex.md], [fxFlex.lg], [fxFlex.xl],\n  [fxFlex.lt-sm], [fxFlex.lt-md], [fxFlex.lt-lg], [fxFlex.lt-xl],\n  [fxFlex.gt-xs], [fxFlex.gt-sm], [fxFlex.gt-md], [fxFlex.gt-lg],\n"
                },] },
    ];
    /** @nocollapse */
    FlexDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["LAYOUT_CONFIG"],] }] }
    ]; };
    FlexDirective.propDecorators = {
        shrink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxShrink',] }],
        grow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxGrow',] }],
        flex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex',] }],
        flexXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.xs',] }],
        flexSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.sm',] }],
        flexMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.md',] }],
        flexLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lg',] }],
        flexXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.xl',] }],
        flexGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-xs',] }],
        flexGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-sm',] }],
        flexGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-md',] }],
        flexGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.gt-lg',] }],
        flexLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-sm',] }],
        flexLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-md',] }],
        flexLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-lg',] }],
        flexLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlex.lt-xl',] }]
    };
    return FlexDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-order' flexbox styling directive
 * Configures the positional ordering of the element in a sorted layout container
 * @see https://css-tricks.com/almanac/properties/o/order/
 */
var FlexOrderDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexOrderDirective, _super);
    /* tslint:enable */
    function FlexOrderDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(FlexOrderDirective.prototype, "order", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('order', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOrderDirective.prototype, "orderLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('orderLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexOrderDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['order'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexOrderDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('order', '0', function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexOrderDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('order') || '0';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    FlexOrderDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        value = parseInt(value, 10);
        return { order: isNaN(value) ? 0 : value };
    };
    FlexOrderDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFlexOrder],\n  [fxFlexOrder.xs], [fxFlexOrder.sm], [fxFlexOrder.md], [fxFlexOrder.lg], [fxFlexOrder.xl],\n  [fxFlexOrder.lt-sm], [fxFlexOrder.lt-md], [fxFlexOrder.lt-lg], [fxFlexOrder.lt-xl],\n  [fxFlexOrder.gt-xs], [fxFlexOrder.gt-sm], [fxFlexOrder.gt-md], [fxFlexOrder.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    FlexOrderDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    FlexOrderDirective.propDecorators = {
        order: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder',] }],
        orderXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.xs',] }],
        orderSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.sm',] }],
        orderMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.md',] }],
        orderLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lg',] }],
        orderXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.xl',] }],
        orderGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-xs',] }],
        orderGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-sm',] }],
        orderGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-md',] }],
        orderGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.gt-lg',] }],
        orderLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-sm',] }],
        orderLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-md',] }],
        orderLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-lg',] }],
        orderLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOrder.lt-xl',] }]
    };
    return FlexOrderDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-offset' flexbox styling directive
 * Configures the 'margin-left' of the element in a layout container
 */
var FlexOffsetDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexOffsetDirective, _super);
    /* tslint:enable */
    function FlexOffsetDirective(monitor, elRef, _container, _directionality, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._container = _container;
        _this._directionality = _directionality;
        /**
         * The flex-direction of this element's host container. Defaults to 'row'.
         */
        _this._layout = { direction: 'row', wrap: false };
        _this._directionWatcher =
            _this._directionality.change.subscribe(_this._updateWithValue.bind(_this));
        _this.watchParentFlow();
        return _this;
    }
    Object.defineProperty(FlexOffsetDirective.prototype, "offset", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offset', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexOffsetDirective.prototype, "offsetGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('offsetGtLg', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['offset'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * Cleanup
     */
    /**
     * Cleanup
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnDestroy = /**
     * Cleanup
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
        if (this._directionWatcher) {
            this._directionWatcher.unsubscribe();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexOffsetDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('offset', 0, function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     */
    /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     * @return {?}
     */
    FlexOffsetDirective.prototype.watchParentFlow = /**
     * If parent flow-direction changes, then update the margin property
     * used to offset
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._container) {
            // Subscribe to layout immediate parent direction changes (if any)
            this._layoutWatcher = this._container.layout$.subscribe(function (layout) {
                // `direction` === null if parent container does not have a `fxLayout`
                // `direction` === null if parent container does not have a `fxLayout`
                _this._onLayoutChange(layout);
            });
        }
    };
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     */
    /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    FlexOffsetDirective.prototype._onLayoutChange = /**
     * Caches the parent container's 'flex-direction' and updates the element's style.
     * Used as a handler for layout change events from the parent flex container.
     * @param {?=} layout
     * @return {?}
     */
    function (layout) {
        this._layout = layout || this._layout || { direction: 'row', wrap: false };
        this._updateWithValue();
    };
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     */
    /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @param {?=} value
     * @return {?}
     */
    FlexOffsetDirective.prototype._updateWithValue = /**
     * Using the current fxFlexOffset value, update the inline CSS
     * NOTE: this will assign `margin-left` if the parent flex-direction == 'row',
     *       otherwise `margin-top` is used for the offset.
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('offset') || 0;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    FlexOffsetDirective.prototype._buildCSS = /**
     * @param {?} offset
     * @return {?}
     */
    function (offset) {
        var _a;
        /** @type {?} */
        var isPercent = String(offset).indexOf('%') > -1;
        /** @type {?} */
        var isPx = String(offset).indexOf('px') > -1;
        if (!isPx && !isPercent && !isNaN(offset)) {
            offset = offset + '%';
        }
        /** @type {?} */
        var isRtl = this._directionality.value === 'rtl';
        /** @type {?} */
        var layout = this._getFlexFlowDirection(this.parentElement, true);
        /** @type {?} */
        var horizontalLayoutKey = isRtl ? 'margin-right' : 'margin-left';
        return isFlowHorizontal(layout) ? (_a = {}, _a[horizontalLayoutKey] = "" + offset, _a) :
            { 'margin-top': "" + offset };
    };
    FlexOffsetDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFlexOffset],\n  [fxFlexOffset.xs], [fxFlexOffset.sm], [fxFlexOffset.md], [fxFlexOffset.lg], [fxFlexOffset.xl],\n  [fxFlexOffset.lt-sm], [fxFlexOffset.lt-md], [fxFlexOffset.lt-lg], [fxFlexOffset.lt-xl],\n  [fxFlexOffset.gt-xs], [fxFlexOffset.gt-sm], [fxFlexOffset.gt-md], [fxFlexOffset.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    FlexOffsetDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    FlexOffsetDirective.propDecorators = {
        offset: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset',] }],
        offsetXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.xs',] }],
        offsetSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.sm',] }],
        offsetMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.md',] }],
        offsetLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lg',] }],
        offsetXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.xl',] }],
        offsetLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-sm',] }],
        offsetLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-md',] }],
        offsetLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-lg',] }],
        offsetLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.lt-xl',] }],
        offsetGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-xs',] }],
        offsetGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-sm',] }],
        offsetGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-md',] }],
        offsetGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexOffset.gt-lg',] }]
    };
    return FlexOffsetDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'flex-align' flexbox styling directive
 * Allows element-specific overrides for cross-axis alignments in a layout container
 * @see https://css-tricks.com/almanac/properties/a/align-self/
 */
var FlexAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexAlignDirective, _super);
    /* tslint:enable */
    function FlexAlignDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(FlexAlignDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FlexAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    FlexAlignDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    FlexAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('align', 'stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    FlexAlignDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('align') || 'stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} align
     * @return {?}
     */
    FlexAlignDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        /** @type {?} */
        var css = {};
        // Cross-axis
        switch (align) {
            case 'start':
                css['align-self'] = 'flex-start';
                break;
            case 'end':
                css['align-self'] = 'flex-end';
                break;
            default:
                css['align-self'] = align;
                break;
        }
        return css;
    };
    FlexAlignDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                    selector: "\n  [fxFlexAlign],\n  [fxFlexAlign.xs], [fxFlexAlign.sm], [fxFlexAlign.md], [fxFlexAlign.lg], [fxFlexAlign.xl],\n  [fxFlexAlign.lt-sm], [fxFlexAlign.lt-md], [fxFlexAlign.lt-lg], [fxFlexAlign.lt-xl],\n  [fxFlexAlign.gt-xs], [fxFlexAlign.gt-sm], [fxFlexAlign.gt-md], [fxFlexAlign.gt-lg]\n"
                },] },
    ];
    /** @nocollapse */
    FlexAlignDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    FlexAlignDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.xl',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.lt-xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxFlexAlign.gt-lg',] }]
    };
    return FlexAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var FLEX_FILL_CSS = {
    'margin': 0,
    'width': '100%',
    'height': '100%',
    'min-width': '100%',
    'min-height': '100%'
};
/**
 * 'fxFill' flexbox styling directive
 *  Maximizes width and height of element in a layout container
 *
 *  NOTE: fxFill is NOT responsive API!!
 */
var FlexFillDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FlexFillDirective, _super);
    function FlexFillDirective(monitor, elRef, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this.elRef = elRef;
        _this._applyStyleToElement(FLEX_FILL_CSS);
        return _this;
    }
    FlexFillDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxFill],\n  [fxFlexFill]\n" },] },
    ];
    /** @nocollapse */
    FlexFillDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    return FlexFillDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * 'layout-align' flexbox styling directive
 *  Defines positioning of child elements along main and cross axis in a layout container
 *  Optional values: {main-axis} values or {main-axis cross-axis} value pairs
 *
 * @see https://css-tricks.com/almanac/properties/j/justify-content/
 * @see https://css-tricks.com/almanac/properties/a/align-items/
 * @see https://css-tricks.com/almanac/properties/a/align-content/
 */
var LayoutAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(LayoutAlignDirective, _super);
    /* tslint:enable */
    function LayoutAlignDirective(monitor, elRef, container, styleUtils) {
        var _this = _super.call(this, monitor, elRef, styleUtils) || this;
        _this._layout = 'row';
        if (container) { // Subscribe to layout direction changes
            // Subscribe to layout direction changes
            _this._layoutWatcher = container.layout$.subscribe(_this._onLayoutChange.bind(_this));
        }
        return _this;
    }
    Object.defineProperty(LayoutAlignDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('align', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignXl', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtXs', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignGtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtSm', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtMd', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtLg', val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('alignLtXl', val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes['align'] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges('align', 'start stretch', function (changes) {
            _this._updateWithValue(changes.value);
        });
    };
    /**
     * @return {?}
     */
    LayoutAlignDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnDestroy.call(this);
        if (this._layoutWatcher) {
            this._layoutWatcher.unsubscribe();
        }
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    LayoutAlignDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
        this._allowStretching(value, !this._layout ? 'row' : this._layout);
    };
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     */
    /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @param {?} layout
     * @return {?}
     */
    LayoutAlignDirective.prototype._onLayoutChange = /**
     * Cache the parent container 'flex-direction' and update the 'flex' styles
     * @param {?} layout
     * @return {?}
     */
    function (layout) {
        var _this = this;
        this._layout = (layout.direction || '').toLowerCase();
        if (!LAYOUT_VALUES.find(function (x) { return x === _this._layout; })) {
            this._layout = 'row';
        }
        /** @type {?} */
        var value = this._queryInput('align') || 'start stretch';
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._allowStretching(value, this._layout || 'row');
    };
    /**
     * @param {?} align
     * @return {?}
     */
    LayoutAlignDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), main_axis = _a[0], cross_axis = _a[1]; // tslint:disable-line:variable-name
        // Main axis
        switch (main_axis) {
            case 'center':
                css['justify-content'] = 'center';
                break;
            case 'space-around':
                css['justify-content'] = 'space-around';
                break;
            case 'space-between':
                css['justify-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['justify-content'] = 'space-evenly';
                break;
            case 'end':
            case 'flex-end':
                css['justify-content'] = 'flex-end';
                break;
            case 'start':
            case 'flex-start':
            default:
                css['justify-content'] = 'flex-start'; // default main axis
                break;
        }
        // Cross-axis
        switch (cross_axis) {
            case 'start':
            case 'flex-start':
                css['align-items'] = css['align-content'] = 'flex-start';
                break;
            case 'baseline':
                css['align-items'] = 'baseline';
                break;
            case 'center':
                css['align-items'] = css['align-content'] = 'center';
                break;
            case 'end':
            case 'flex-end':
                css['align-items'] = css['align-content'] = 'flex-end';
                break;
            case 'stretch':
            default: // 'stretch'
                // 'stretch'
                css['align-items'] = css['align-content'] = 'stretch'; // default cross axis
                break;
        }
        return extendObject(css, {
            'display': 'flex',
            'flex-direction': this._layout || 'row',
            'box-sizing': 'border-box'
        });
    };
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     */
    /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     * @param {?} align
     * @param {?} layout
     * @return {?}
     */
    LayoutAlignDirective.prototype._allowStretching = /**
     * Update container element to 'stretch' as needed...
     * NOTE: this is only done if the crossAxis is explicitly set to 'stretch'
     * @param {?} align
     * @param {?} layout
     * @return {?}
     */
    function (align, layout) {
        var _a = align.split(' '), cross_axis = _a[1]; // tslint:disable-line:variable-name
        if (cross_axis == 'stretch') {
            // Use `null` values to remove style
            this._applyStyleToElement({
                'box-sizing': 'border-box',
                'max-width': !isFlowHorizontal(layout) ? '100%' : null,
                'max-height': isFlowHorizontal(layout) ? '100%' : null
            });
        }
    };
    LayoutAlignDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [fxLayoutAlign],\n  [fxLayoutAlign.xs], [fxLayoutAlign.sm], [fxLayoutAlign.md], [fxLayoutAlign.lg],[fxLayoutAlign.xl],\n  [fxLayoutAlign.lt-sm], [fxLayoutAlign.lt-md], [fxLayoutAlign.lt-lg], [fxLayoutAlign.lt-xl],\n  [fxLayoutAlign.gt-xs], [fxLayoutAlign.gt-sm], [fxLayoutAlign.gt-md], [fxLayoutAlign.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    LayoutAlignDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: LayoutDirective, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    LayoutAlignDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['fxLayoutAlign.lt-xl',] }]
    };
    return LayoutAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    LayoutDirective,
    LayoutGapDirective,
    LayoutAlignDirective,
    FlexDirective,
    FlexOrderDirective,
    FlexOffsetDirective,
    FlexFillDirective,
    FlexAlignDirective,
];
/**
 * *****************************************************************
 * Define module for the Flex API
 * *****************************************************************
 */
var FlexModule = /** @class */ (function () {
    function FlexModule() {
    }
    FlexModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    return FlexModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=flex.es5.js.map


/***/ }),

/***/ "./node_modules/@angular/flex-layout/esm5/grid.es5.js":
/*!************************************************************!*\
  !*** ./node_modules/@angular/flex-layout/esm5/grid.es5.js ***!
  \************************************************************/
/*! exports provided: GridModule, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵa, ɵj, ɵk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridModule", function() { return GridModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return GridAlignColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return GridAlignRowsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GridAreaDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return GridAreasDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return GridAutoDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return GridColumnDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return GridColumnsDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return GridGapDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GridAlignDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return GridRowDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return GridRowsDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/core */ "./node_modules/@angular/flex-layout/esm5/core.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY = 'align';
/** @type {?} */
var ROW_DEFAULT = 'stretch';
/** @type {?} */
var COL_DEFAULT = 'stretch';
/**
 * 'align' CSS Grid styling directive for grid children
 *  Defines positioning of child elements along row and column axis in a grid container
 *  Optional values: {row-axis} values or {row-axis column-axis} value pairs
 *
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-justify-self
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#prop-align-self
 */
var GridAlignDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignDirective, _super);
    /* tslint:enable */
    function GridAlignDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAlignDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * @param {?} changes
     * @return {?}
     */
    GridAlignDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAlignDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY, ROW_DEFAULT, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     *
     */
    /**
     *
     * @param {?=} value
     * @return {?}
     */
    GridAlignDirective.prototype._updateWithValue = /**
     *
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY) || ROW_DEFAULT;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} align
     * @return {?}
     */
    GridAlignDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), rowAxis = _a[0], columnAxis = _a[1];
        // Row axis
        switch (rowAxis) {
            case 'end':
                css['justify-self'] = 'end';
                break;
            case 'center':
                css['justify-self'] = 'center';
                break;
            case 'stretch':
                css['justify-self'] = 'stretch';
                break;
            case 'start':
                css['justify-self'] = 'start';
                break;
            default:
                css['justify-self'] = ROW_DEFAULT; // default row axis
                break;
        }
        // Column axis
        switch (columnAxis) {
            case 'end':
                css['align-self'] = 'end';
                break;
            case 'center':
                css['align-self'] = 'center';
                break;
            case 'stretch':
                css['align-self'] = 'stretch';
                break;
            case 'start':
                css['align-self'] = 'start';
                break;
            default:
                css['align-self'] = COL_DEFAULT; // default column axis
                break;
        }
        return css;
    };
    GridAlignDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdGridAlign],\n  [gdGridAlign.xs], [gdGridAlign.sm], [gdGridAlign.md], [gdGridAlign.lg],[gdGridAlign.xl],\n  [gdGridAlign.lt-sm], [gdGridAlign.lt-md], [gdGridAlign.lt-lg], [gdGridAlign.lt-xl],\n  [gdGridAlign.gt-xs], [gdGridAlign.gt-sm], [gdGridAlign.gt-md], [gdGridAlign.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAlignDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAlignDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGridAlign.lt-xl',] }]
    };
    return GridAlignDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param {?} dest The object which will have properties copied to it.
 * @param {...?} sources The source objects from which properties will be copied.
 * @return {?}
 */
function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$1 = 'alignColumns';
/** @type {?} */
var DEFAULT_MAIN = 'start';
/** @type {?} */
var DEFAULT_CROSS = 'stretch';
/**
 * 'column alignment' CSS Grid styling directive
 * Configures the alignment in the column direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-19
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-21
 */
var GridAlignColumnsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignColumnsDirective, _super);
    /* tslint:enable */
    function GridAlignColumnsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAlignColumnsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$1, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$1 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignColumnsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAlignColumnsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$1] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAlignColumnsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$1, DEFAULT_MAIN + " " + DEFAULT_CROSS, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAlignColumnsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$1) || DEFAULT_MAIN + " " + DEFAULT_CROSS;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} align
     * @return {?}
     */
    GridAlignColumnsDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), mainAxis = _a[0], crossAxis = _a[1];
        // Main axis
        switch (mainAxis) {
            case 'center':
                css['align-content'] = 'center';
                break;
            case 'space-around':
                css['align-content'] = 'space-around';
                break;
            case 'space-between':
                css['align-content'] = 'space-between';
                break;
            case 'space-evenly':
                css['align-content'] = 'space-evenly';
                break;
            case 'end':
                css['align-content'] = 'end';
                break;
            case 'start':
                css['align-content'] = 'start';
                break;
            case 'stretch':
                css['align-content'] = 'stretch';
                break;
            default:
                css['align-content'] = DEFAULT_MAIN; // default main axis
                break;
        }
        // Cross-axis
        switch (crossAxis) {
            case 'start':
                css['align-items'] = 'start';
                break;
            case 'center':
                css['align-items'] = 'center';
                break;
            case 'end':
                css['align-items'] = 'end';
                break;
            case 'stretch':
                css['align-items'] = 'stretch';
                break;
            default: // 'stretch'
                // 'stretch'
                css['align-items'] = DEFAULT_CROSS; // default cross axis
                break;
        }
        return extendObject(css, { 'display': this._queryInput('inline') ? 'inline-grid' : 'grid' });
    };
    GridAlignColumnsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAlignColumns],\n  [gdAlignColumns.xs], [gdAlignColumns.sm], [gdAlignColumns.md],\n  [gdAlignColumns.lg], [gdAlignColumns.xl], [gdAlignColumns.lt-sm],\n  [gdAlignColumns.lt-md], [gdAlignColumns.lt-lg], [gdAlignColumns.lt-xl],\n  [gdAlignColumns.gt-xs], [gdAlignColumns.gt-sm], [gdAlignColumns.gt-md],\n  [gdAlignColumns.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAlignColumnsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAlignColumnsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignColumns.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAlignColumnsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$2 = 'alignRows';
/** @type {?} */
var DEFAULT_MAIN$1 = 'start';
/** @type {?} */
var DEFAULT_CROSS$1 = 'stretch';
/**
 * 'row alignment' CSS Grid styling directive
 * Configures the alignment in the row direction
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-18
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-20
 */
var GridAlignRowsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAlignRowsDirective, _super);
    /* tslint:enable */
    function GridAlignRowsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAlignRowsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$2, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$2 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAlignRowsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAlignRowsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$2] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAlignRowsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$2, DEFAULT_MAIN$1 + " " + DEFAULT_CROSS$1, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAlignRowsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$2) || DEFAULT_MAIN$1 + " " + DEFAULT_CROSS$1;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} align
     * @return {?}
     */
    GridAlignRowsDirective.prototype._buildCSS = /**
     * @param {?} align
     * @return {?}
     */
    function (align) {
        /** @type {?} */
        var css = {};
        var _a = align.split(' '), mainAxis = _a[0], crossAxis = _a[1];
        // Main axis
        switch (mainAxis) {
            case 'center':
            case 'space-around':
            case 'space-between':
            case 'space-evenly':
            case 'end':
            case 'start':
            case 'stretch':
                css['justify-content'] = mainAxis;
                break;
            default:
                css['justify-content'] = DEFAULT_MAIN$1; // default main axis
                break;
        }
        // Cross-axis
        switch (crossAxis) {
            case 'start':
            case 'center':
            case 'end':
            case 'stretch':
                css['justify-items'] = crossAxis;
                break;
            default: // 'stretch'
                // 'stretch'
                css['justify-items'] = DEFAULT_CROSS$1; // default cross axis
                break;
        }
        return extendObject(css, { 'display': this._queryInput('inline') ? 'inline-grid' : 'grid' });
    };
    GridAlignRowsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAlignRows],\n  [gdAlignRows.xs], [gdAlignRows.sm], [gdAlignRows.md],\n  [gdAlignRows.lg], [gdAlignRows.xl], [gdAlignRows.lt-sm],\n  [gdAlignRows.lt-md], [gdAlignRows.lt-lg], [gdAlignRows.lt-xl],\n  [gdAlignRows.gt-xs], [gdAlignRows.gt-sm], [gdAlignRows.gt-md],\n  [gdAlignRows.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAlignRowsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAlignRowsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAlignRows.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAlignRowsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$3 = 'area';
/** @type {?} */
var DEFAULT_VALUE = 'auto';
/**
 * 'grid-area' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-27
 */
var GridAreaDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAreaDirective, _super);
    /* tslint:enable */
    function GridAreaDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAreaDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$3, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreaDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$3 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAreaDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$3] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAreaDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$3, DEFAULT_VALUE, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAreaDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$3) || DEFAULT_VALUE;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridAreaDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return { 'grid-area': value };
    };
    GridAreaDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdArea],\n  [gdArea.xs], [gdArea.sm], [gdArea.md], [gdArea.lg], [gdArea.xl],\n  [gdArea.lt-sm], [gdArea.lt-md], [gdArea.lt-lg], [gdArea.lt-xl],\n  [gdArea.gt-xs], [gdArea.gt-sm], [gdArea.gt-md], [gdArea.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAreaDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAreaDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdArea.lt-xl',] }]
    };
    return GridAreaDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$4 = 'areas';
/** @type {?} */
var DEFAULT_VALUE$1 = 'none';
/** @type {?} */
var DELIMETER = '|';
/**
 * 'grid-template-areas' CSS Grid styling directive
 * Configures the names of elements within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-14
 */
var GridAreasDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAreasDirective, _super);
    /* tslint:enable */
    function GridAreasDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAreasDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$4, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$4 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAreasDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAreasDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$4] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAreasDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$4, DEFAULT_VALUE$1, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAreasDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$4) || DEFAULT_VALUE$1;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridAreasDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var areas = value.split(DELIMETER).map(function (v) { return "\"" + v.trim() + "\""; });
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-template-areas': areas.join(' ')
        };
    };
    GridAreasDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAreas],\n  [gdAreas.xs], [gdAreas.sm], [gdAreas.md], [gdAreas.lg], [gdAreas.xl],\n  [gdAreas.lt-sm], [gdAreas.lt-md], [gdAreas.lt-lg], [gdAreas.lt-xl],\n  [gdAreas.gt-xs], [gdAreas.gt-sm], [gdAreas.gt-md], [gdAreas.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAreasDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAreasDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAreas.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAreasDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$5 = 'autoFlow';
/** @type {?} */
var DEFAULT_VALUE$2 = 'initial';
/**
 * 'grid-auto-flow' CSS Grid styling directive
 * Configures the auto placement algorithm for the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-23
 */
var GridAutoDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridAutoDirective, _super);
    /* tslint:enable */
    function GridAutoDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridAutoDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$5, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$5 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridAutoDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridAutoDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$5] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridAutoDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$5, DEFAULT_VALUE$2, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridAutoDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$5) || DEFAULT_VALUE$2;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridAutoDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _a = value.split(' '), direction = _a[0], dense = _a[1];
        if (direction !== 'column' && direction !== 'row' && direction !== 'dense') {
            direction = 'row';
        }
        dense = (dense === 'dense' && direction !== 'dense') ? ' dense' : '';
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-flow': direction + dense
        };
    };
    GridAutoDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdAuto],\n  [gdAuto.xs], [gdAuto.sm], [gdAuto.md], [gdAuto.lg], [gdAuto.xl],\n  [gdAuto.lt-sm], [gdAuto.lt-md], [gdAuto.lt-lg], [gdAuto.lt-xl],\n  [gdAuto.gt-xs], [gdAuto.gt-sm], [gdAuto.gt-md], [gdAuto.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridAutoDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridAutoDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdAuto.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridAutoDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$6 = 'column';
/** @type {?} */
var DEFAULT_VALUE$3 = 'auto';
/**
 * 'grid-column' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
var GridColumnDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridColumnDirective, _super);
    /* tslint:enable */
    function GridColumnDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridColumnDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$6, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$6 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridColumnDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$6] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridColumnDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$6, DEFAULT_VALUE$3, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridColumnDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$6) || DEFAULT_VALUE$3;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridColumnDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return { 'grid-column': value };
    };
    GridColumnDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdColumn],\n  [gdColumn.xs], [gdColumn.sm], [gdColumn.md], [gdColumn.lg], [gdColumn.xl],\n  [gdColumn.lt-sm], [gdColumn.lt-md], [gdColumn.lt-lg], [gdColumn.lt-xl],\n  [gdColumn.gt-xs], [gdColumn.gt-sm], [gdColumn.gt-md], [gdColumn.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridColumnDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridColumnDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumn.lt-xl',] }]
    };
    return GridColumnDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$7 = 'columns';
/** @type {?} */
var DEFAULT_VALUE$4 = 'none';
/** @type {?} */
var AUTO_SPECIFIER = '!';
/**
 * 'grid-template-columns' CSS Grid styling directive
 * Configures the sizing for the columns in the grid
 * Syntax: <column value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
var GridColumnsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridColumnsDirective, _super);
    /* tslint:enable */
    function GridColumnsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridColumnsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$7, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$7 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridColumnsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridColumnsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$7] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridColumnsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$7, DEFAULT_VALUE$4, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridColumnsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$7) || DEFAULT_VALUE$4;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridColumnsDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var auto = false;
        if (value.endsWith(AUTO_SPECIFIER)) {
            value = value.substring(0, value.indexOf(AUTO_SPECIFIER));
            auto = true;
        }
        /** @type {?} */
        var css = {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-columns': '',
            'grid-template-columns': '',
        };
        /** @type {?} */
        var key = (auto ? 'grid-auto-columns' : 'grid-template-columns');
        css[key] = value;
        return css;
    };
    GridColumnsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdColumns],\n  [gdColumns.xs], [gdColumns.sm], [gdColumns.md], [gdColumns.lg], [gdColumns.xl],\n  [gdColumns.lt-sm], [gdColumns.lt-md], [gdColumns.lt-lg], [gdColumns.lt-xl],\n  [gdColumns.gt-xs], [gdColumns.gt-sm], [gdColumns.gt-md], [gdColumns.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridColumnsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridColumnsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdColumns.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridColumnsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$8 = 'gap';
/** @type {?} */
var DEFAULT_VALUE$5 = '0';
/**
 * 'grid-gap' CSS Grid styling directive
 * Configures the gap between items in the grid
 * Syntax: <row gap> [<column-gap>]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-17
 */
var GridGapDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridGapDirective, _super);
    /* tslint:enable */
    function GridGapDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridGapDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$8, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$8 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridGapDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridGapDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$8] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridGapDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$8, DEFAULT_VALUE$5, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridGapDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$8) || DEFAULT_VALUE$5;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridGapDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-gap': value
        };
    };
    GridGapDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdGap],\n  [gdGap.xs], [gdGap.sm], [gdGap.md], [gdGap.lg], [gdGap.xl],\n  [gdGap.lt-sm], [gdGap.lt-md], [gdGap.lt-lg], [gdGap.lt-xl],\n  [gdGap.gt-xs], [gdGap.gt-sm], [gdGap.gt-md], [gdGap.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridGapDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridGapDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdGap.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridGapDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$9 = 'row';
/** @type {?} */
var DEFAULT_VALUE$6 = 'auto';
/**
 * 'grid-row' CSS Grid styling directive
 * Configures the name or position of an element within the grid
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-26
 */
var GridRowDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridRowDirective, _super);
    /* tslint:enable */
    function GridRowDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridRowDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$9, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$9 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridRowDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$9] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridRowDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$9, DEFAULT_VALUE$6, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridRowDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$9) || DEFAULT_VALUE$6;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridRowDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return { 'grid-row': value };
    };
    GridRowDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdRow],\n  [gdRow.xs], [gdRow.sm], [gdRow.md], [gdRow.lg], [gdRow.xl],\n  [gdRow.lt-sm], [gdRow.lt-md], [gdRow.lt-lg], [gdRow.lt-xl],\n  [gdRow.gt-xs], [gdRow.gt-sm], [gdRow.gt-md], [gdRow.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridRowDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridRowDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRow.lt-xl',] }]
    };
    return GridRowDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var CACHE_KEY$10 = 'rows';
/** @type {?} */
var DEFAULT_VALUE$7 = 'none';
/** @type {?} */
var AUTO_SPECIFIER$1 = '!';
/**
 * 'grid-template-rows' CSS Grid styling directive
 * Configures the sizing for the rows in the grid
 * Syntax: <row value> [auto]
 * @see https://css-tricks.com/snippets/css/complete-guide-grid/#article-header-id-13
 */
var GridRowsDirective = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GridRowsDirective, _super);
    /* tslint:enable */
    function GridRowsDirective(monitor, elRef, styleUtils) {
        return _super.call(this, monitor, elRef, styleUtils) || this;
    }
    Object.defineProperty(GridRowsDirective.prototype, "align", {
        /* tslint:disable */
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput("" + CACHE_KEY$10, val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Xs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Sm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Md", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Lg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "Xl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtXs", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtXs", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignGtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "GtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtSm", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtSm", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtMd", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtMd", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtLg", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtLg", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "alignLtXl", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput(CACHE_KEY$10 + "LtXl", val); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridRowsDirective.prototype, "inline", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._cacheInput('inline', Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__["coerceBooleanProperty"])(val)); },
        enumerable: true,
        configurable: true
    });
    // *********************************************
    // Lifecycle Methods
    // *********************************************
    /**
     * For @Input changes on the current mq activation property, see onMediaQueryChanges()
     */
    /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    GridRowsDirective.prototype.ngOnChanges = /**
     * For \@Input changes on the current mq activation property, see onMediaQueryChanges()
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes[CACHE_KEY$10] != null || this._mqActivation) {
            this._updateWithValue();
        }
    };
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     */
    /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    GridRowsDirective.prototype.ngOnInit = /**
     * After the initial onChanges, build an mqActivation object that bridges
     * mql change events to onMediaQueryChange handlers
     * @return {?}
     */
    function () {
        var _this = this;
        _super.prototype.ngOnInit.call(this);
        this._listenForMediaQueryChanges(CACHE_KEY$10, DEFAULT_VALUE$7, function (changes) {
            _this._updateWithValue(changes.value);
        });
        this._updateWithValue();
    };
    // *********************************************
    // Protected methods
    // *********************************************
    /**
     * @param {?=} value
     * @return {?}
     */
    GridRowsDirective.prototype._updateWithValue = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        value = value || this._queryInput(CACHE_KEY$10) || DEFAULT_VALUE$7;
        if (this._mqActivation) {
            value = this._mqActivation.activatedInput;
        }
        this._applyStyleToElement(this._buildCSS(value));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    GridRowsDirective.prototype._buildCSS = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var auto = false;
        if (value.endsWith(AUTO_SPECIFIER$1)) {
            value = value.substring(0, value.indexOf(AUTO_SPECIFIER$1));
            auto = true;
        }
        /** @type {?} */
        var css = {
            'display': this._queryInput('inline') ? 'inline-grid' : 'grid',
            'grid-auto-rows': '',
            'grid-template-rows': '',
        };
        /** @type {?} */
        var key = (auto ? 'grid-auto-rows' : 'grid-template-rows');
        css[key] = value;
        return css;
    };
    GridRowsDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{ selector: "\n  [gdRows],\n  [gdRows.xs], [gdRows.sm], [gdRows.md], [gdRows.lg], [gdRows.xl],\n  [gdRows.lt-sm], [gdRows.lt-md], [gdRows.lt-lg], [gdRows.lt-xl],\n  [gdRows.gt-xs], [gdRows.gt-sm], [gdRows.gt-md], [gdRows.gt-lg]\n" },] },
    ];
    /** @nocollapse */
    GridRowsDirective.ctorParameters = function () { return [
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["MediaMonitor"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["StyleUtils"] }
    ]; };
    GridRowsDirective.propDecorators = {
        align: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows',] }],
        alignXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.xs',] }],
        alignSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.sm',] }],
        alignMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.md',] }],
        alignLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lg',] }],
        alignXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.xl',] }],
        alignGtXs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-xs',] }],
        alignGtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-sm',] }],
        alignGtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-md',] }],
        alignGtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.gt-lg',] }],
        alignLtSm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-sm',] }],
        alignLtMd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-md',] }],
        alignLtLg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-lg',] }],
        alignLtXl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdRows.lt-xl',] }],
        inline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['gdInline',] }]
    };
    return GridRowsDirective;
}(_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @type {?} */
var ALL_DIRECTIVES = [
    GridAlignDirective,
    GridAlignColumnsDirective,
    GridAlignRowsDirective,
    GridAreaDirective,
    GridAreasDirective,
    GridAutoDirective,
    GridColumnDirective,
    GridColumnsDirective,
    GridGapDirective,
    GridRowDirective,
    GridRowsDirective,
];
/**
 * *****************************************************************
 * Define module for the CSS Grid API
 * *****************************************************************
 */
var GridModule = /** @class */ (function () {
    function GridModule() {
    }
    GridModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_flex_layout_core__WEBPACK_IMPORTED_MODULE_2__["CoreModule"]],
                    declarations: ALL_DIRECTIVES.slice(),
                    exports: ALL_DIRECTIVES.slice()
                },] },
    ];
    return GridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */


//# sourceMappingURL=grid.es5.js.map


/***/ }),

/***/ "./node_modules/@auth0/angular-jwt/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@auth0/angular-jwt/index.js ***!
  \**************************************************/
/*! exports provided: JwtModule, JwtInterceptor, JwtHelperService, JWT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtModule", function() { return JwtModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _src_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/jwt.interceptor */ "./node_modules/@auth0/angular-jwt/src/jwt.interceptor.js");
/* harmony import */ var _src_jwthelper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/jwthelper.service */ "./node_modules/@auth0/angular-jwt/src/jwthelper.service.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _src_jwtoptions_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/jwtoptions.token */ "./node_modules/@auth0/angular-jwt/src/jwtoptions.token.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _src_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtHelperService", function() { return _src_jwthelper_service__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JWT_OPTIONS", function() { return _src_jwtoptions_token__WEBPACK_IMPORTED_MODULE_4__["JWT_OPTIONS"]; });









var JwtModule = /** @class */ (function () {
    function JwtModule(parentModule) {
        if (parentModule) {
            throw new Error('JwtModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    JwtModule.forRoot = function (options) {
        return {
            ngModule: JwtModule,
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _src_jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"],
                    multi: true
                },
                options.jwtOptionsProvider ||
                    {
                        provide: _src_jwtoptions_token__WEBPACK_IMPORTED_MODULE_4__["JWT_OPTIONS"],
                        useValue: options.config
                    },
                _src_jwthelper_service__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]
            ]
        };
    };
    JwtModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"] },
    ];
    /** @nocollapse */
    JwtModule.ctorParameters = function () { return [
        { type: JwtModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] },] },
    ]; };
    return JwtModule;
}());



/***/ }),

/***/ "./node_modules/@auth0/angular-jwt/src/jwt.interceptor.js":
/*!****************************************************************!*\
  !*** ./node_modules/@auth0/angular-jwt/src/jwt.interceptor.js ***!
  \****************************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jwthelper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwthelper.service */ "./node_modules/@auth0/angular-jwt/src/jwthelper.service.js");
/* harmony import */ var _jwtoptions_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jwtoptions.token */ "./node_modules/@auth0/angular-jwt/src/jwtoptions.token.js");
/* harmony import */ var rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/observable/from */ "./node_modules/rxjs/internal/observable/from.js");
/* harmony import */ var rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_5__);






var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(config, jwtHelper) {
        this.jwtHelper = jwtHelper;
        this.tokenGetter = config.tokenGetter;
        this.headerName = config.headerName || 'Authorization';
        this.authScheme =
            config.authScheme || config.authScheme === ''
                ? config.authScheme
                : 'Bearer ';
        this.whitelistedDomains = config.whitelistedDomains || [];
        this.blacklistedRoutes = config.blacklistedRoutes || [];
        this.throwNoTokenError = config.throwNoTokenError || false;
        this.skipWhenExpired = config.skipWhenExpired;
    }
    JwtInterceptor.prototype.isWhitelistedDomain = function (request) {
        var requestUrl = Object(url__WEBPACK_IMPORTED_MODULE_5__["parse"])(request.url, false, true);
        return (requestUrl.host === null ||
            this.whitelistedDomains.findIndex(function (domain) {
                return typeof domain === 'string'
                    ? domain === requestUrl.host
                    : domain instanceof RegExp
                        ? domain.test(requestUrl.host)
                        : false;
            }) > -1);
    };
    JwtInterceptor.prototype.isBlacklistedRoute = function (request) {
        var url = request.url;
        return (this.blacklistedRoutes.findIndex(function (route) {
            return typeof route === 'string'
                ? route === url
                : route instanceof RegExp
                    ? route.test(url)
                    : false;
        }) > -1);
    };
    JwtInterceptor.prototype.handleInterception = function (token, request, next) {
        var tokenIsExpired = false;
        if (!token && this.throwNoTokenError) {
            throw new Error('Could not get token from tokenGetter function.');
        }
        if (this.skipWhenExpired) {
            tokenIsExpired = token ? this.jwtHelper.isTokenExpired(token) : true;
        }
        if (token && tokenIsExpired && this.skipWhenExpired) {
            request = request.clone();
        }
        else if (token &&
            this.isWhitelistedDomain(request) &&
            !this.isBlacklistedRoute(request)) {
            request = request.clone({
                setHeaders: (_a = {},
                    _a[this.headerName] = "" + this.authScheme + token,
                    _a)
            });
        }
        return next.handle(request);
        var _a;
    };
    JwtInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        var token = this.tokenGetter();
        if (token instanceof Promise) {
            return Object(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_3__["from"])(token).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (asyncToken) {
                return _this.handleInterception(asyncToken, request, next);
            }));
        }
        else {
            return this.handleInterception(token, request, next);
        }
    };
    JwtInterceptor.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    JwtInterceptor.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_jwtoptions_token__WEBPACK_IMPORTED_MODULE_2__["JWT_OPTIONS"],] },] },
        { type: _jwthelper_service__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"], },
    ]; };
    return JwtInterceptor;
}());



/***/ }),

/***/ "./node_modules/@auth0/angular-jwt/src/jwthelper.service.js":
/*!******************************************************************!*\
  !*** ./node_modules/@auth0/angular-jwt/src/jwthelper.service.js ***!
  \******************************************************************/
/*! exports provided: JwtHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtHelperService", function() { return JwtHelperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _jwtoptions_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwtoptions.token */ "./node_modules/@auth0/angular-jwt/src/jwtoptions.token.js");
// tslint:disable:no-bitwise


var JwtHelperService = /** @class */ (function () {
    function JwtHelperService(config) {
        if (config === void 0) { config = null; }
        this.tokenGetter = config && config.tokenGetter || function () { };
    }
    JwtHelperService.prototype.urlBase64Decode = function (str) {
        var output = str.replace(/-/g, '+').replace(/_/g, '/');
        switch (output.length % 4) {
            case 0: {
                break;
            }
            case 2: {
                output += '==';
                break;
            }
            case 3: {
                output += '=';
                break;
            }
            default: {
                throw 'Illegal base64url string!';
            }
        }
        return this.b64DecodeUnicode(output);
    };
    // credits for decoder goes to https://github.com/atk
    // credits for decoder goes to https://github.com/atk
    JwtHelperService.prototype.b64decode = 
    // credits for decoder goes to https://github.com/atk
    function (str) {
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        var output = '';
        str = String(str).replace(/=+$/, '');
        if (str.length % 4 === 1) {
            throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
        }
        for (
        // initialize result and counters
        var bc = 0, bs = void 0, buffer = void 0, idx = 0; 
        // get next character
        (buffer = str.charAt(idx++)); 
        // character found in table? initialize bit storage and add its ascii value;
        ~buffer &&
            ((bs = bc % 4 ? bs * 64 + buffer : buffer),
                // and if not first of each 4 characters,
                // convert the first 8 bits to one ascii character
                bc++ % 4)
            ? (output += String.fromCharCode(255 & (bs >> ((-2 * bc) & 6))))
            : 0) {
            // try to find character in table (0-63, not found => -1)
            buffer = chars.indexOf(buffer);
        }
        return output;
    };
    JwtHelperService.prototype.b64DecodeUnicode = function (str) {
        return decodeURIComponent(Array.prototype.map
            .call(this.b64decode(str), function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
            .join(''));
    };
    JwtHelperService.prototype.decodeToken = function (token) {
        if (token === void 0) { token = this.tokenGetter(); }
        if (token === null) {
            return null;
        }
        var parts = token.split('.');
        if (parts.length !== 3) {
            throw new Error('The inspected token doesn\'t appear to be a JWT. Check to make sure it has three parts and see https://jwt.io for more.');
        }
        var decoded = this.urlBase64Decode(parts[1]);
        if (!decoded) {
            throw new Error('Cannot decode the token.');
        }
        return JSON.parse(decoded);
    };
    JwtHelperService.prototype.getTokenExpirationDate = function (token) {
        if (token === void 0) { token = this.tokenGetter(); }
        var decoded;
        decoded = this.decodeToken(token);
        if (!decoded.hasOwnProperty('exp')) {
            return null;
        }
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    JwtHelperService.prototype.isTokenExpired = function (token, offsetSeconds) {
        if (token === void 0) { token = this.tokenGetter(); }
        if (token === null || token === '') {
            return true;
        }
        var date = this.getTokenExpirationDate(token);
        offsetSeconds = offsetSeconds || 0;
        if (date === null) {
            return true;
        }
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    };
    JwtHelperService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    /** @nocollapse */
    JwtHelperService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_jwtoptions_token__WEBPACK_IMPORTED_MODULE_1__["JWT_OPTIONS"],] },] },
    ]; };
    return JwtHelperService;
}());



/***/ }),

/***/ "./node_modules/@auth0/angular-jwt/src/jwtoptions.token.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@auth0/angular-jwt/src/jwtoptions.token.js ***!
  \*****************************************************************/
/*! exports provided: JWT_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JWT_OPTIONS", function() { return JWT_OPTIONS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var JWT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('JWT_OPTIONS');


/***/ }),

/***/ "./node_modules/ng-recaptcha/forms.js":
/*!********************************************!*\
  !*** ./node_modules/ng-recaptcha/forms.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var recaptcha_forms_module_1 = __webpack_require__(/*! ./recaptcha/recaptcha-forms.module */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-forms.module.js");
exports.RecaptchaFormsModule = recaptcha_forms_module_1.RecaptchaFormsModule;
var recaptcha_value_accessor_directive_1 = __webpack_require__(/*! ./recaptcha/recaptcha-value-accessor.directive */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-value-accessor.directive.js");
exports.RecaptchaValueAccessorDirective = recaptcha_value_accessor_directive_1.RecaptchaValueAccessorDirective;


/***/ }),

/***/ "./node_modules/ng-recaptcha/index.js":
/*!********************************************!*\
  !*** ./node_modules/ng-recaptcha/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var recaptcha_component_1 = __webpack_require__(/*! ./recaptcha/recaptcha.component */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
exports.RecaptchaComponent = recaptcha_component_1.RecaptchaComponent;
var recaptcha_loader_service_1 = __webpack_require__(/*! ./recaptcha/recaptcha-loader.service */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
exports.RecaptchaLoaderService = recaptcha_loader_service_1.RecaptchaLoaderService;
exports.RECAPTCHA_LANGUAGE = recaptcha_loader_service_1.RECAPTCHA_LANGUAGE;
var recaptcha_module_1 = __webpack_require__(/*! ./recaptcha/recaptcha.module */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.module.js");
exports.RecaptchaModule = recaptcha_module_1.RecaptchaModule;
var recaptcha_settings_1 = __webpack_require__(/*! ./recaptcha/recaptcha-settings */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js");
exports.RECAPTCHA_SETTINGS = recaptcha_settings_1.RECAPTCHA_SETTINGS;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js":
/*!************************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var recaptcha_component_1 = __webpack_require__(/*! ./recaptcha.component */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
var RecaptchaCommonModule = /** @class */ (function () {
    function RecaptchaCommonModule() {
    }
    RecaptchaCommonModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [recaptcha_component_1.RecaptchaComponent],
                    exports: [recaptcha_component_1.RecaptchaComponent],
                },] },
    ];
    /** @nocollapse */
    RecaptchaCommonModule.ctorParameters = function () { return []; };
    return RecaptchaCommonModule;
}());
exports.RecaptchaCommonModule = RecaptchaCommonModule;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-forms.module.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-forms.module.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var recaptcha_common_module_1 = __webpack_require__(/*! ./recaptcha-common.module */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js");
var recaptcha_value_accessor_directive_1 = __webpack_require__(/*! ./recaptcha-value-accessor.directive */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-value-accessor.directive.js");
var RecaptchaFormsModule = /** @class */ (function () {
    function RecaptchaFormsModule() {
    }
    RecaptchaFormsModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [
                        recaptcha_value_accessor_directive_1.RecaptchaValueAccessorDirective,
                    ],
                    exports: [recaptcha_value_accessor_directive_1.RecaptchaValueAccessorDirective],
                    imports: [forms_1.FormsModule, recaptcha_common_module_1.RecaptchaCommonModule],
                },] },
    ];
    /** @nocollapse */
    RecaptchaFormsModule.ctorParameters = function () { return []; };
    return RecaptchaFormsModule;
}());
exports.RecaptchaFormsModule = RecaptchaFormsModule;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var BehaviorSubject_1 = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var of_1 = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
exports.RECAPTCHA_LANGUAGE = new core_1.InjectionToken('recaptcha-language');
var RecaptchaLoaderService = /** @class */ (function () {
    function RecaptchaLoaderService(
        // tslint:disable-next-line:no-any
        platformId, language) {
        this.platformId = platformId;
        this.language = language;
        this.init();
        this.ready = common_1.isPlatformBrowser(this.platformId) ? RecaptchaLoaderService.ready.asObservable() : of_1.of();
    }
    /** @internal */
    RecaptchaLoaderService.prototype.init = function () {
        if (RecaptchaLoaderService.ready) {
            return;
        }
        if (common_1.isPlatformBrowser(this.platformId)) {
            window.ng2recaptchaloaded = function () {
                RecaptchaLoaderService.ready.next(grecaptcha);
            };
            RecaptchaLoaderService.ready = new BehaviorSubject_1.BehaviorSubject(null);
            var script = document.createElement('script');
            script.innerHTML = '';
            var langParam = this.language ? '&hl=' + this.language : '';
            script.src = "https://www.google.com/recaptcha/api.js?render=explicit&onload=ng2recaptchaloaded" + langParam;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
        }
    };
    /**
     * @internal
     * @nocollapse
     */
    RecaptchaLoaderService.ready = null;
    RecaptchaLoaderService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    RecaptchaLoaderService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: core_1.Inject, args: [core_1.PLATFORM_ID,] },] },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [exports.RECAPTCHA_LANGUAGE,] },] },
    ]; };
    return RecaptchaLoaderService;
}());
exports.RecaptchaLoaderService = RecaptchaLoaderService;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
exports.RECAPTCHA_SETTINGS = new core_1.InjectionToken('recaptcha-settings');


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha-value-accessor.directive.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha-value-accessor.directive.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var recaptcha_component_1 = __webpack_require__(/*! ./recaptcha.component */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
var RecaptchaValueAccessorDirective = /** @class */ (function () {
    function RecaptchaValueAccessorDirective(host) {
        this.host = host;
    }
    RecaptchaValueAccessorDirective.prototype.writeValue = function (value) {
        if (!value) {
            this.host.reset();
        }
    };
    RecaptchaValueAccessorDirective.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    RecaptchaValueAccessorDirective.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    RecaptchaValueAccessorDirective.prototype.onResolve = function ($event) {
        if (this.onChange) {
            this.onChange($event);
        }
        if (this.onTouched) {
            this.onTouched();
        }
    };
    RecaptchaValueAccessorDirective.decorators = [
        { type: core_1.Directive, args: [{
                    providers: [
                        {
                            multi: true,
                            provide: forms_1.NG_VALUE_ACCESSOR,
                            // tslint:disable-next-line:no-forward-ref
                            useExisting: core_1.forwardRef(function () { return RecaptchaValueAccessorDirective; }),
                        },
                    ],
                    // tslint:disable-next-line:directive-selector
                    selector: 're-captcha[formControlName],re-captcha[formControl],re-captcha[ngModel]',
                },] },
    ];
    /** @nocollapse */
    RecaptchaValueAccessorDirective.ctorParameters = function () { return [
        { type: recaptcha_component_1.RecaptchaComponent, },
    ]; };
    RecaptchaValueAccessorDirective.propDecorators = {
        'onResolve': [{ type: core_1.HostListener, args: ['resolved', ['$event'],] },],
    };
    return RecaptchaValueAccessorDirective;
}());
exports.RecaptchaValueAccessorDirective = RecaptchaValueAccessorDirective;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var recaptcha_loader_service_1 = __webpack_require__(/*! ./recaptcha-loader.service */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
var recaptcha_settings_1 = __webpack_require__(/*! ./recaptcha-settings */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-settings.js");
var nextId = 0;
var RecaptchaComponent = /** @class */ (function () {
    function RecaptchaComponent(elementRef, loader, zone, settings) {
        this.elementRef = elementRef;
        this.loader = loader;
        this.zone = zone;
        this.id = "ngrecaptcha-" + nextId++;
        this.resolved = new core_1.EventEmitter();
        if (settings) {
            this.siteKey = settings.siteKey;
            this.theme = settings.theme;
            this.type = settings.type;
            this.size = settings.size;
            this.badge = settings.badge;
        }
    }
    RecaptchaComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.subscription = this.loader.ready.subscribe(function (grecaptcha) {
            if (grecaptcha != null) {
                _this.grecaptcha = grecaptcha;
                _this.renderRecaptcha();
            }
        });
    };
    RecaptchaComponent.prototype.ngOnDestroy = function () {
        // reset the captcha to ensure it does not leave anything behind
        // after the component is no longer needed
        this.grecaptchaReset();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    /**
     * Executes the invisible recaptcha.
     * Does nothing if component's size is not set to "invisible".
     */
    RecaptchaComponent.prototype.execute = function () {
        if (this.size !== 'invisible') {
            return;
        }
        if (this.widget != null) {
            this.grecaptcha.execute(this.widget);
        }
    };
    RecaptchaComponent.prototype.reset = function () {
        if (this.widget != null) {
            if (this.grecaptcha.getResponse(this.widget)) {
                // Only emit an event in case if something would actually change.
                // That way we do not trigger "touching" of the control if someone does a "reset"
                // on a non-resolved captcha.
                this.resolved.emit(null);
            }
            this.grecaptchaReset();
        }
    };
    /** @internal */
    RecaptchaComponent.prototype.expired = function () {
        this.resolved.emit(null);
    };
    /** @internal */
    RecaptchaComponent.prototype.captchaReponseCallback = function (response) {
        this.resolved.emit(response);
    };
    /** @internal */
    RecaptchaComponent.prototype.grecaptchaReset = function () {
        var _this = this;
        if (this.widget != null) {
            this.zone.runOutsideAngular(function () { return _this.grecaptcha.reset(_this.widget); });
        }
    };
    /** @internal */
    RecaptchaComponent.prototype.renderRecaptcha = function () {
        var _this = this;
        this.widget = this.grecaptcha.render(this.elementRef.nativeElement, {
            badge: this.badge,
            callback: function (response) {
                _this.zone.run(function () { return _this.captchaReponseCallback(response); });
            },
            'expired-callback': function () {
                _this.zone.run(function () { return _this.expired(); });
            },
            sitekey: this.siteKey,
            size: this.size,
            tabindex: this.tabIndex,
            theme: this.theme,
            type: this.type,
        });
    };
    RecaptchaComponent.decorators = [
        { type: core_1.Component, args: [{
                    exportAs: 'reCaptcha',
                    selector: 're-captcha',
                    template: "",
                },] },
    ];
    /** @nocollapse */
    RecaptchaComponent.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
        { type: recaptcha_loader_service_1.RecaptchaLoaderService, },
        { type: core_1.NgZone, },
        { type: undefined, decorators: [{ type: core_1.Optional }, { type: core_1.Inject, args: [recaptcha_settings_1.RECAPTCHA_SETTINGS,] },] },
    ]; };
    RecaptchaComponent.propDecorators = {
        'id': [{ type: core_1.Input }, { type: core_1.HostBinding, args: ['attr.id',] },],
        'siteKey': [{ type: core_1.Input },],
        'theme': [{ type: core_1.Input },],
        'type': [{ type: core_1.Input },],
        'size': [{ type: core_1.Input },],
        'tabIndex': [{ type: core_1.Input },],
        'badge': [{ type: core_1.Input },],
        'resolved': [{ type: core_1.Output },],
    };
    return RecaptchaComponent;
}());
exports.RecaptchaComponent = RecaptchaComponent;


/***/ }),

/***/ "./node_modules/ng-recaptcha/recaptcha/recaptcha.module.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ng-recaptcha/recaptcha/recaptcha.module.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var recaptcha_common_module_1 = __webpack_require__(/*! ./recaptcha-common.module */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-common.module.js");
var recaptcha_loader_service_1 = __webpack_require__(/*! ./recaptcha-loader.service */ "./node_modules/ng-recaptcha/recaptcha/recaptcha-loader.service.js");
var recaptcha_component_1 = __webpack_require__(/*! ./recaptcha.component */ "./node_modules/ng-recaptcha/recaptcha/recaptcha.component.js");
var RecaptchaModule = /** @class */ (function () {
    function RecaptchaModule() {
    }
    RecaptchaModule.forRoot = function () {
        return {
            ngModule: RecaptchaModule,
            providers: [
                recaptcha_loader_service_1.RecaptchaLoaderService,
            ],
        };
    };
    RecaptchaModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [recaptcha_component_1.RecaptchaComponent],
                    imports: [recaptcha_common_module_1.RecaptchaCommonModule],
                },] },
    ];
    /** @nocollapse */
    RecaptchaModule.ctorParameters = function () { return []; };
    return RecaptchaModule;
}());
exports.RecaptchaModule = RecaptchaModule;


/***/ }),

/***/ "./node_modules/querystring/decode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/decode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),

/***/ "./node_modules/querystring/encode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/encode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),

/***/ "./node_modules/querystring/index.js":
/*!*******************************************!*\
  !*** ./node_modules/querystring/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring/encode.js");


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/BehaviorSubject.js ***!
  \***********************************************************/
/*! exports provided: BehaviorSubject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BehaviorSubject", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]; });


//# sourceMappingURL=BehaviorSubject.js.map

/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/of.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/of.js ***!
  \*********************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"]; });


//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ../internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            operator.call(sink, this.source);
        }
        else {
            sink._addParentTeardownLogic(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        _this._parentSubscription = null;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (isTrustedSubscriber(destinationOrNext)) {
                        var trustedSubscriber = destinationOrNext[rxSubscriber_1.rxSubscriber]();
                        _this.syncErrorThrowable = trustedSubscriber.syncErrorThrowable;
                        _this.destination = trustedSubscriber;
                        trustedSubscriber._addParentTeardownLogic(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
            this._unsubscribeParentSubscription();
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
            this._unsubscribeParentSubscription();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._addParentTeardownLogic = function (parentTeardownLogic) {
        if (parentTeardownLogic !== this) {
            this._parentSubscription = this.add(parentTeardownLogic);
        }
    };
    Subscriber.prototype._unsubscribeParentSubscription = function () {
        if (this._parentSubscription !== null) {
            this._parentSubscription.unsubscribe();
        }
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        this._parentSubscription = null;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
function isTrustedSubscriber(obj) {
    return obj instanceof Subscriber || ('_addParentTeardownLogic' in obj && obj[rxSubscriber_1.rxSubscriber]);
}
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var tryCatch_1 = __webpack_require__(/*! ./util/tryCatch */ "./node_modules/rxjs/internal/util/tryCatch.js");
var errorObject_1 = __webpack_require__(/*! ./util/errorObject */ "./node_modules/rxjs/internal/util/errorObject.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
            if (trial === errorObject_1.errorObject) {
                hasErrors = true;
                errors = errors || (errorObject_1.errorObject.e instanceof UnsubscriptionError_1.UnsubscriptionError ?
                    flattenUnsubscriptionErrors(errorObject_1.errorObject.e.errors) : [errorObject_1.errorObject.e]);
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
                    if (trial === errorObject_1.errorObject) {
                        hasErrors = true;
                        errors = errors || [];
                        var err = errorObject_1.errorObject.e;
                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(err.errors));
                        }
                        else {
                            errors.push(err);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        if (!teardown || (teardown === Subscription.EMPTY)) {
            return Subscription.EMPTY;
        }
        if (teardown === this) {
            return this;
        }
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (typeof subscription._addParent !== 'function') {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default:
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
        }
        var subscriptions = this._subscriptions || (this._subscriptions = []);
        subscriptions.push(subscription);
        subscription._addParent(this);
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (!_parent || _parent === parent) {
            this._parent = parent;
        }
        else if (!_parents) {
            this._parents = [parent];
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
        }
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/from.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var isPromise_1 = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isArrayLike_1 = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isInteropObservable_1 = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/internal/util/isInteropObservable.js");
var isIterable_1 = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/internal/util/isIterable.js");
var fromArray_1 = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/internal/observable/fromArray.js");
var fromPromise_1 = __webpack_require__(/*! ./fromPromise */ "./node_modules/rxjs/internal/observable/fromPromise.js");
var fromIterable_1 = __webpack_require__(/*! ./fromIterable */ "./node_modules/rxjs/internal/observable/fromIterable.js");
var fromObservable_1 = __webpack_require__(/*! ./fromObservable */ "./node_modules/rxjs/internal/observable/fromObservable.js");
var subscribeTo_1 = __webpack_require__(/*! ../util/subscribeTo */ "./node_modules/rxjs/internal/util/subscribeTo.js");
function from(input, scheduler) {
    if (!scheduler) {
        if (input instanceof Observable_1.Observable) {
            return input;
        }
        return new Observable_1.Observable(subscribeTo_1.subscribeTo(input));
    }
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
            return fromObservable_1.fromObservable(input, scheduler);
        }
        else if (isPromise_1.isPromise(input)) {
            return fromPromise_1.fromPromise(input, scheduler);
        }
        else if (isArrayLike_1.isArrayLike(input)) {
            return fromArray_1.fromArray(input, scheduler);
        }
        else if (isIterable_1.isIterable(input) || typeof input === 'string') {
            return fromIterable_1.fromIterable(input, scheduler);
        }
    }
    throw new TypeError((input !== null && typeof input || input) + ' is not observable');
}
exports.from = from;
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromArray.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromArray.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var subscribeToArray_1 = __webpack_require__(/*! ../util/subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
function fromArray(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToArray_1.subscribeToArray(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            var i = 0;
            sub.add(scheduler.schedule(function () {
                if (i === input.length) {
                    subscriber.complete();
                    return;
                }
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    sub.add(this.schedule());
                }
            }));
            return sub;
        });
    }
}
exports.fromArray = fromArray;
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromIterable.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromIterable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var subscribeToIterable_1 = __webpack_require__(/*! ../util/subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
function fromIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToIterable_1.subscribeToIterable(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            var iterator;
            sub.add(function () {
                if (iterator && typeof iterator.return === 'function') {
                    iterator.return();
                }
            });
            sub.add(scheduler.schedule(function () {
                iterator = input[iterator_1.iterator]();
                sub.add(scheduler.schedule(function () {
                    if (subscriber.closed) {
                        return;
                    }
                    var value;
                    var done;
                    try {
                        var result = iterator.next();
                        value = result.value;
                        done = result.done;
                    }
                    catch (err) {
                        subscriber.error(err);
                        return;
                    }
                    if (done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(value);
                        this.schedule();
                    }
                }));
            }));
            return sub;
        });
    }
}
exports.fromIterable = fromIterable;
//# sourceMappingURL=fromIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromObservable.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromObservable.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ../util/subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
function fromObservable(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToObservable_1.subscribeToObservable(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            sub.add(scheduler.schedule(function () {
                var observable = input[observable_1.observable]();
                sub.add(observable.subscribe({
                    next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                    error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                    complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
                }));
            }));
            return sub;
        });
    }
}
exports.fromObservable = fromObservable;
//# sourceMappingURL=fromObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/observable/fromPromise.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/internal/observable/fromPromise.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var Subscription_1 = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var subscribeToPromise_1 = __webpack_require__(/*! ../util/subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
function fromPromise(input, scheduler) {
    if (!scheduler) {
        return new Observable_1.Observable(subscribeToPromise_1.subscribeToPromise(input));
    }
    else {
        return new Observable_1.Observable(function (subscriber) {
            var sub = new Subscription_1.Subscription();
            sub.add(scheduler.schedule(function () { return input.then(function (value) {
                sub.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    sub.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                sub.add(scheduler.schedule(function () { return subscriber.error(err); }));
            }); }));
            return sub;
        });
    }
}
exports.fromPromise = fromPromise;
//# sourceMappingURL=fromPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/iterator.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/iterator.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();
exports.$$iterator = exports.iterator;
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function')
    ? Symbol.for('rxSubscriber')
    : '@@rxSubscriber';
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/errorObject.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/errorObject.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.errorObject = { e: {} };
//# sourceMappingURL=errorObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArrayLike.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArrayLike.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isInteropObservable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isInteropObservable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
function isInteropObservable(input) {
    return input && typeof input[observable_1.observable] === 'function';
}
exports.isInteropObservable = isInteropObservable;
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isIterable.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isIterable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
function isIterable(input) {
    return input && typeof input[iterator_1.iterator] === 'function';
}
exports.isIterable = isIterable;
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x != null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isPromise.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isPromise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isPromise(value) {
    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
}
exports.isPromise = isPromise;
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/noop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = __webpack_require__(/*! ./noop */ "./node_modules/rxjs/internal/util/noop.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeTo.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeTo.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Observable_1 = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/internal/Observable.js");
var subscribeToArray_1 = __webpack_require__(/*! ./subscribeToArray */ "./node_modules/rxjs/internal/util/subscribeToArray.js");
var subscribeToPromise_1 = __webpack_require__(/*! ./subscribeToPromise */ "./node_modules/rxjs/internal/util/subscribeToPromise.js");
var subscribeToIterable_1 = __webpack_require__(/*! ./subscribeToIterable */ "./node_modules/rxjs/internal/util/subscribeToIterable.js");
var subscribeToObservable_1 = __webpack_require__(/*! ./subscribeToObservable */ "./node_modules/rxjs/internal/util/subscribeToObservable.js");
var isArrayLike_1 = __webpack_require__(/*! ./isArrayLike */ "./node_modules/rxjs/internal/util/isArrayLike.js");
var isPromise_1 = __webpack_require__(/*! ./isPromise */ "./node_modules/rxjs/internal/util/isPromise.js");
var isObject_1 = __webpack_require__(/*! ./isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeTo = function (result) {
    if (result instanceof Observable_1.Observable) {
        return function (subscriber) {
            if (result._isScalar) {
                subscriber.next(result.value);
                subscriber.complete();
                return undefined;
            }
            else {
                return result.subscribe(subscriber);
            }
        };
    }
    else if (result && typeof result[observable_1.observable] === 'function') {
        return subscribeToObservable_1.subscribeToObservable(result);
    }
    else if (isArrayLike_1.isArrayLike(result)) {
        return subscribeToArray_1.subscribeToArray(result);
    }
    else if (isPromise_1.isPromise(result)) {
        return subscribeToPromise_1.subscribeToPromise(result);
    }
    else if (result && typeof result[iterator_1.iterator] === 'function') {
        return subscribeToIterable_1.subscribeToIterable(result);
    }
    else {
        var value = isObject_1.isObject(result) ? 'an invalid object' : "'" + result + "'";
        var msg = "You provided " + value + " where a stream was expected."
            + ' You can provide an Observable, Promise, Array, or Iterable.';
        throw new TypeError(msg);
    }
};
//# sourceMappingURL=subscribeTo.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToArray.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.subscribeToArray = function (array) { return function (subscriber) {
    for (var i = 0, len = array.length; i < len && !subscriber.closed; i++) {
        subscriber.next(array[i]);
    }
    if (!subscriber.closed) {
        subscriber.complete();
    }
}; };
//# sourceMappingURL=subscribeToArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToIterable.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToIterable.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var iterator_1 = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/internal/symbol/iterator.js");
exports.subscribeToIterable = function (iterable) { return function (subscriber) {
    var iterator = iterable[iterator_1.iterator]();
    do {
        var item = iterator.next();
        if (item.done) {
            subscriber.complete();
            break;
        }
        subscriber.next(item.value);
        if (subscriber.closed) {
            break;
        }
    } while (true);
    if (typeof iterator.return === 'function') {
        subscriber.add(function () {
            if (iterator.return) {
                iterator.return();
            }
        });
    }
    return subscriber;
}; };
//# sourceMappingURL=subscribeToIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToObservable.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToObservable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
exports.subscribeToObservable = function (obj) { return function (subscriber) {
    var obs = obj[observable_1.observable]();
    if (typeof obs.subscribe !== 'function') {
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    }
    else {
        return obs.subscribe(subscriber);
    }
}; };
//# sourceMappingURL=subscribeToObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/subscribeToPromise.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/subscribeToPromise.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hostReportError_1 = __webpack_require__(/*! ./hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.subscribeToPromise = function (promise) { return function (subscriber) {
    promise.then(function (value) {
        if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
        }
    }, function (err) { return subscriber.error(err); })
        .then(null, hostReportError_1.hostReportError);
    return subscriber;
}; };
//# sourceMappingURL=subscribeToPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/tryCatch.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/tryCatch.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var errorObject_1 = __webpack_require__(/*! ./errorObject */ "./node_modules/rxjs/internal/util/errorObject.js");
var tryCatchTarget;
function tryCatcher() {
    try {
        return tryCatchTarget.apply(this, arguments);
    }
    catch (e) {
        errorObject_1.errorObject.e = e;
        return errorObject_1.errorObject;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;
//# sourceMappingURL=tryCatch.js.map

/***/ }),

/***/ "./node_modules/url/node_modules/punycode/punycode.js":
/*!************************************************************!*\
  !*** ./node_modules/url/node_modules/punycode/punycode.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.3.2 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * http://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.3.2',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/url/url.js":
/*!*********************************!*\
  !*** ./node_modules/url/url.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "./node_modules/url/node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "./node_modules/url/util.js":
/*!**********************************!*\
  !*** ./node_modules/url/util.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/components/shared/about/about.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/about/about.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-container-h app-container-v\">\r\n  <div class=\"container\">\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n          <h1 class=\"mat-display-2\">Вітаємо на сайті!</h1>\r\n\r\n            <p class=\"text-justify muted mat-body-1\">\r\n           \r\n              Запрошуємо Вас до співпраці!\r\n            </p>\r\n\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

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

module.exports = "<div class=\"container\">\r\n  <div class=\"app-container-h\">\r\n    <!-- <div class=\"padding-bottom-3\"> -->\r\n        <mat-card>\r\n            <form [formGroup]=\"commentForm\" #f=\"ngForm\" novalidate>\r\n                <div class=\"row\" fxLayout=\"row\">\r\n                  <div class=\"cell\" fxFlex=\"10\" fxLayoutAlign=\"center center\">\r\n\r\n                    <img *ngIf=\"user\" class=\"responsive-image\"\r\n                      src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_50,h_50,f_auto/' +\r\n                        user.avatar}}\" alt=\"avatar\">\r\n                    <img *ngIf=\"!user\" class=\"responsive-image\"\r\n                      src=\"{{\r\n                        config.imgPath +\r\n                        config.cloudinary.cloud_name +\r\n                        '/c_fill,w_50,h_50,f_auto/' +\r\n                        config.defaultAvatar}}\" alt=\"avatar\">\r\n\r\n                  </div>\r\n                    <mat-form-field class=\"cell\" fxFlex=\"80\">\r\n                      <textarea matInput\r\n                        [placeholder]=\"allowTo('user') ?\r\n                          'Коментар' :\r\n                          allowTo('guest') ?\r\n                            'Для відправки коментарів верифікуйте пошту' :\r\n                            'Коментарі можуть залишати лише зареєстровані користувачі'\"\r\n                        formControlName=\"comment\" required>\r\n                      </textarea>\r\n                      <mat-error\r\n                        *ngIf=\"(commentForm.get('comment').errors?.minlength ||\r\n                        commentForm.get('comment').errors?.maxlength ||\r\n                        commentForm.get('comment').errors?.required) &&\r\n                        commentForm.get('comment').touched\">\r\n                        Довжина повинна бути від 3 до 200 символів\r\n                      </mat-error>\r\n                      <mat-error\r\n                        *ngIf=\"commentForm.get('comment').errors?.pattern &&\r\n                        commentForm.get('comment').touched\">\r\n                        Не використовуйте спеціальні символи\r\n                      </mat-error>\r\n                    </mat-form-field>\r\n                  <div class=\"cell\" fxFlex=\"10\">\r\n                    <button mat-icon-button (click)=\"sendComment()\"  [disabled]=\"!commentForm.valid || !allowTo('user')\">\r\n                      <mat-icon>send</mat-icon>\r\n                    </button>\r\n           \r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"end\">\r\n                  <re-captcha [ngClass]=\"{'display-none': !commentForm.get('comment').valid}\"\r\n                    [formControlName]=\"'recaptcha'\" #recaptchaRef\r\n                    siteKey=\"6Lc0uE8UAAAAAKyekxrsdhSdrgV9zhPW-lMY-srm\">\r\n                  </re-captcha> \r\n                </div>\r\n              </form>\r\n        </mat-card>\r\n    <!-- </div> -->\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div *ngIf=\"comments\" class=\"cell\">\r\n        <p class=\"mat-body-1\">Показано<span class=\"mat-body-2\"> {{comments.length}} \r\n        </span>коментарів з<span class=\"mat-body-2\"> {{commentsTotalLength || 0}}</span></p>\r\n      </div>\r\n    </div>\r\n    <div class=\"row padding-bottom\" [ngClass]=\"{'muted-strong': !comment.display}\"\r\n     *ngFor=\"let comment of comments\" fxLayout=\"row\">\r\n      <div  class=\"cell\" fxFlex=\"10\" fxLayoutAlign=\"center center\">\r\n\r\n                <img *ngIf=\"comment.user && comment.user.avatar\" class=\"responsive-image\"\r\n                  src=\"{{\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_50,h_50,f_auto/' +\r\n                    comment.user.avatar}}\" alt=\"avatar\">\r\n                <img *ngIf=\"!comment.user\" class=\"responsive-image\"\r\n                  src=\"{{\r\n                    config.imgPath +\r\n                    config.cloudinary.cloud_name +\r\n                    '/c_fill,w_50,h_50,f_auto/' +\r\n                    config.defaultAvatar}}\" alt=\"avatar\">\r\n      </div>\r\n      <div class=\"cell\" fxFlex=\"80\">\r\n        <p>\r\n          <span class=\"mat-body-2\">{{comment.user && comment.user.login ? comment.user.login : 'Гість'}}</span>\r\n          <span fxFlex></span>\r\n          <span class=\"mat-body-1\">{{comment.commentedAt | date: 'dd.MM.yyyy HH:mm'}}</span>\r\n        </p>\r\n        <p class=\"text-align-justify\">{{comment.comment}} {{comment | json}}</p>\r\n      </div>\r\n      <div class=\"cell\" fxFlex=\"10\">\r\n        <p *ngIf=\"allowTo('manager')\"><button class=\"mat-icon-button\" (click)=\"deleteComment(comment)\"><mat-icon class=\"mat-18\">delete_outline</mat-icon></button></p>\r\n        <p *ngIf=\"allowTo('manager') && !comment.display\">\r\n          <button class=\"mat-icon-button\" (click)=\"displayComment(true, comment._id)\"><mat-icon class=\"mat-18\">play_circle_outline</mat-icon></button>\r\n        </p>\r\n        <p *ngIf=\"allowTo('manager') && comment.display\">\r\n          <button class=\"mat-icon-button\" (click)=\"displayComment(false, comment._id)\"><mat-icon class=\"mat-18\">pause_circle_outline</mat-icon></button>\r\n        </p>\r\n\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"processing\" class=\"row\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n        <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
            _this.user = user;
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
        console.log('display', display);
        console.log('comment_id', comment_id);
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

/***/ "./src/app/components/shared/content/content.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/content/content.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"toolbar\" class=\"mat-elevation-z4\">\r\n  <div class=\"logo\">\r\n    <a href=\"\">\r\n      <img src=\"./assets/images/hmade_logo_light.svg\" height=\"36px\" alt=\"HandMADE logo\">\r\n    </a>\r\n  </div>\r\n\r\n  <div fxFlex></div>\r\n\r\n  <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n    <a *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\" class=\"link\" [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\"\r\n      [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: false}\">\r\n      <span class=\"type1\">{{mainMenuCommonItem.name}}</span>\r\n    </a>\r\n  </div>\r\n  <div fxFlex></div>\r\n\r\n  <div fxShow=\"true\" fxHide.lt-md=\"true\">\r\n    <a *ngIf=\"user\" class=\"link\" [matMenuTriggerFor]=\"settingsMenu\" #settingsMenuTrigger=\"matMenuTrigger\" (mouseover)=\"onSettingsMenuMouseover()\">\r\n      <span class=\"type2\">\r\n        <mat-icon class=\"mat-icon-aligner\">settings</mat-icon>{{user.login}}\r\n      </span>\r\n\r\n    </a>\r\n\r\n    <mat-menu #settingsMenu=\"matMenu\" xPosition=\"after\" yPosition=\"above\" [overlapTrigger]=\"false\">\r\n      <span (mouseleave)=\"onSettingsMenuMouseleave()\">\r\n        <a *ngIf=\"user\" mat-menu-item [routerLink]=\"['/user/profile']\" [routerLinkActive]=\"['accent']\"\r\n          [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <mat-icon>account_circle</mat-icon><span>Профіль</span>\r\n        </a>\r\n        <a *ngIf=\"user && (user?.role === 'manager' || user?.role === 'admin')\" mat-menu-item [routerLink]=\"['/dashboard']\"\r\n          [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n          <mat-icon>settings</mat-icon><span>Dashboard</span>\r\n        </a>\r\n      </span>\r\n    </mat-menu>\r\n\r\n    <a *ngIf='!user' class=\"link\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n      [routerLink]=\"['/user/login']\"><span class=\"type1\">Вхід</span></a>\r\n    <a *ngIf='user' class=\"link\" (click)=\"userLocalLogout()\"><span class=\"type2\">Вихід</span></a>\r\n  </div>\r\n\r\n  <div class=\"menu-button\" fxShow=\"true\" fxHide.gt-sm=\"true\">\r\n    <button mat-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon *ngIf=\"sidenav.opened\">format_indent_increase</mat-icon>\r\n      <mat-icon *ngIf=\"!sidenav.opened\">menu</mat-icon>\r\n    </button>\r\n  </div>\r\n  <!-- </mat-toolbar-row> -->\r\n  <!-- </mat-toolbar> -->\r\n</div>\r\n<!-- <div class=\"toolbar\" fxLayoutAlign=\"center end\">\r\n    <div fxShow=\"true\" fxHide.lt-md=\"true\" fxLayout=\"row\" fxLayoutAlign=\"center\">\r\n      <a *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\" mat-button\r\n          [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\"\r\n          [routerLinkActive]=\"['primary-light']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{mainMenuCommonItem.name}}\r\n      </a>\r\n    </div>\r\n</div> -->\r\n\r\n<mat-sidenav-container fxFlexFill>\r\n  <mat-sidenav #sidenav fxLayout=\"column\" position=\"end\" class=\"sidenav mat-elevation-z4\" role=\"navigation\" mode=\"side\">\r\n    <div fxLayout=\"column\">\r\n      <mat-nav-list>\r\n        <mat-list-item *ngFor=\"let mainMenuCommonItem of mainMenuCommonItems\">\r\n          <a matLine [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/', mainMenuCommonItem._id, 'ch']\"\r\n            (click)=\"sidenav.toggle()\">\r\n            {{mainMenuCommonItem.name}}\r\n          </a>\r\n        </mat-list-item>\r\n\r\n        <mat-expansion-panel *ngIf=\"user\" class=\"mat-elevation-z0\">\r\n          <mat-expansion-panel-header class=\"sidenav-expansion-panel\">\r\n            <!-- <mat-panel-title> -->\r\n              <!-- <mat-list-item> -->\r\n                \r\n                <span matLine><span><mat-icon class=\"mat-icon-aligner\">settings</mat-icon>{{user.login}}</span></span>\r\n              <!-- </mat-list-item> -->\r\n            <!-- </mat-panel-title> -->\r\n\r\n          </mat-expansion-panel-header>\r\n          <mat-list-item *ngIf=\"user\">\r\n            <mat-icon matListIcon>account_circle</mat-icon>\r\n            <a matLine [routerLink]=\"['/user/profile']\" [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n              (click)=\"sidenav.toggle()\">\r\n              Профіль</a>\r\n          </mat-list-item>\r\n          <mat-list-item *ngIf=\"user && user?.role === 'manager' || user?.role === 'admin'\">\r\n            <mat-icon matListIcon>settings</mat-icon>\r\n            <a matLine [routerLink]=\"['/dashboard']\" [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n              (click)=\"sidenav.toggle()\">\r\n              Dashboard</a>\r\n          </mat-list-item>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-list-item *ngIf='!user'>\r\n          <a matLine [routerLinkActive]=\"['muted']\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"['/user/login']\"\r\n            (click)=\"sidenav.toggle()\">Вхід</a>\r\n        </mat-list-item>\r\n        <mat-list-item *ngIf='user'>\r\n          <a matLine (click)=\"userLocalLogout()\" (click)=\"sidenav.toggle()\">\r\n            Вихід\r\n          </a>\r\n          <mat-icon matListIcon>exit_to_app</mat-icon>\r\n        </mat-list-item>\r\n      </mat-nav-list>\r\n    </div>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <router-outlet></router-outlet>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

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

module.exports = "<div class=\"mat-elevation-z16\" id=\"footer\">\r\n  <div fxFlex></div>\r\n  <a mat-button [routerLink]=\"['/feedback']\" class=\"primary-light\"\r\n     [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n    <mat-icon>mail</mat-icon> Задати питання\r\n  </a>\r\n</div>\r\n"

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

module.exports = "<div class=\"app-container-h\">\r\n  <div class=\"container\">\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n      <h1 class=\"mat-display-1\">Галерея</h1>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" fxLayout=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\" *ngFor=\"let product of productsWithGallery\">\r\n        <mat-card>\r\n          <mat-card-subtitle>\r\n            <a mat-button\r\n               [routerLink]=\"['/products', 'ch', {outlets: {primary: [product.parent[0], 'details', product._id],\r\n                    breadcrumb: [product.parent[0], 'details', product._id]}}]\"\r\n               [queryParams]=\"{name: product.name}\"\r\n               [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n              {{product.name}}\r\n            </a>\r\n          </mat-card-subtitle>\r\n          <div class=\"row\" fxLayout=\"row\">\r\n            <div fxFlex=\"100\" class=\"cell text-justify\" [innerHTML]=\"product.description\"></div>\r\n\r\n            <div fxFlex.xs=\"100\" fxFlex.sm=\"33\" fxFlex.gt-sm=\"25\" class=\"cell\"\r\n                 fxLayout fxLayoutAlign=\"center center\"\r\n                 *ngFor=\"let productAsset of product.assets\">\r\n              <mat-card *ngIf=\"media.isActive('xs')\" class=\"no-padding\">\r\n                <mat-card-header fxLayoutAlign=\"center center\">\r\n                  <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\r\n                </mat-card-header>\r\n                <mat-card-content fxLayoutAlign=\"center center\">\r\n\r\n                  <img *ngIf=\"productAsset\" class=\"responsive-image hover-cursor\"\r\n                       (click)=\"openDialog(productAsset, product.name)\"\r\n                       src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_590,h_295,f_auto/' +\r\n                      productAsset}}\"\r\n                       alt=\"design\">\r\n                </mat-card-content>\r\n              </mat-card>\r\n\r\n\r\n              <mat-card *ngIf=\"media.isActive('gt-xs')\" class=\"no-padding\" fxFlex.gt-xs=\"100\">\r\n                <mat-card-header fxLayoutAlign=\"center center\">\r\n                  <!--<mat-card-subtitle class=\"design-image-title\">{{galleryItem}}</mat-card-subtitle>-->\r\n                </mat-card-header>\r\n                <mat-card-content fxLayoutAlign=\"center center\">\r\n                  <img *ngIf=\"productAsset\" class=\"responsive-image-stretch hover-cursor\"\r\n                       (click)=\"openDialog(productAsset, product.name)\"\r\n                       src=\"{{\r\n                      config.imgPath +\r\n                      config.cloudinary.cloud_name +\r\n                      '/c_fill,w_350,h_175,f_auto/' +\r\n                      productAsset}}\"\r\n                       alt=\"design\">\r\n                </mat-card-content>\r\n              </mat-card>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n"

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

module.exports = "<div class=\"app-container-h primary-background\" id=\"header\">\r\n\r\n  <div class=\"container\" fxHide.lt-md=\"true\">\r\n    <div class=\"row primary-background\">\r\n      <div class=\"cell\">\r\n        <a href=\"\">\r\n          <img src=\"./assets/images/hmade_logo_light.svg\" height=\"60px\">\r\n        </a>\r\n      </div>\r\n      <div fxFlex></div>\r\n    <div class=\"cell\">\r\n      <div class=\"row\" fxLayout=\"row\">\r\n        <div class=\"cell\" fxFlex=\"100\">\r\n          <a mat-button [routerLink]=\"['/feedback']\" class=\"muted\"\r\n             [routerLinkActive]=\"['accent']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <mat-icon>mail</mat-icon> Задати питання\r\n          </a>\r\n        </div>\r\n        <div class=\"cell\" fxFlex=\"100\">\r\n          <a mat-button class=\"muted\"\r\n             href=\"tel:+380985443968\">\r\n            <mat-icon>phone</mat-icon> 098 544 39 68\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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

module.exports = "<div id=\"landing\" class=\"container\">\r\n  <div class=\"row\" fxLayout=\"row\">\r\n    <div class=\"app-container-v left-side-container\" fxFlex=\"20\">\r\n      <div class=\"container\">\r\n        <div class=\"row\">\r\n          <div class=\"cell\">\r\n            <div class=\"avatar-big-block\">\r\n              <img class=\"avatar-big\" src=\"./assets/images/my-photo180x180.png\" alt=\"my photo\">\r\n            </div>\r\n              <h3 class=\"mat-h3\">Про себе</h3>\r\n              <p class=\"mat-body-1 text-justify\">Мене звати Ірина, я мама чудової донечки, саме Вона надихає мене на нові цікаві витвори.\r\n              Канікули у школі - творимо маленький театр ляльок. Вільна хвилинка - в'яжемо теплі шарфики для іграшок,\r\n              шиємо та розмальовуємо кавові іграшки. Свято у школі - новий віночок..\r\n              Ще багато можна писати про себе та мої захоплення, але згодом..\r\n                Завітайте у мою майстерню.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"app-container-v main-container\" fxFlex=\"60\">\r\n      <div class=\"container\">\r\n        <div class=\"row\" fxLayout=\"row\">\r\n          <div *ngFor=\"let mc of mcs\" class=\"cell\" fxFlex=\"100\">\r\n            <app-mcs-item-brief [mc]=\"mc\"></app-mcs-item-brief>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"app-container-v right-side-container\" fxFlex=\"20\">\r\n        <div class=\"container\">\r\n          <div class=\"row\" fxLayout=\"row\">\r\n            <div *ngFor=\"let product of products\" class=\"cell\" fxFlex=\"100\">\r\n              <app-product-item-brief [product]=\"product\"></app-product-item-brief>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n    <!-- <app-screen-test></app-screen-test>  -->\r\n  \r\n \r\n  <!-- <div id=\"home-left\">\r\n    <img src=\"./assets/images/hmade_logo_dark.svg\" id=\"home-logo\" alt=\"logo\">\r\n    <div>\r\n      <a mat-flat-button class=\"radius-5\" href=\"/products/ch\" id=\"home-action\">Перейти</a>\r\n      <button mat-fab-button class=\"radius-5\" (click)=\"onScroll()\">Down</button>\r\n      <button color=\"primary\" mat-mini-fab (click)=\"onScroll()\" id=\"scroll-down-btn\">\r\n        <mat-icon>keyboard_arrow_down</mat-icon></button>\r\n    </div>\r\n  </div>\r\n  <div id=\"home-right\" #scrollPoint>\r\n    <p>right</p>\r\n  </div>\r\n  <div id=\"home-bottom\">\r\n    <div fxLayout=\"row full-width\">\r\n      <div fxFlex=\"10\"></div>\r\n      <div class=\"row wrap full-width\" fxFlex=\"80\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n        <div class=\"cell-padding\" fxFlex=\"1 1 auto\" *ngFor=\"let descendant of descendants\" fxLayout=\"row\">\r\n          <a fxFlex=\"1 1 auto\" mat-stroked-button class=\"radius-5 text-center\" color=\"accent\"\r\n             [routerLink]=\"['/products', 'ch', {outlets: {primary: [descendant._id], breadcrumb: [descendant._id]}}]\"\r\n             [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n             {{descendant.name}}\r\n          </a>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div> -->\r\n\r\n"

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
    // descendants: any;
    function LandingComponent(catalogService, media, productService, mcService) {
        this.catalogService = catalogService;
        this.media = media;
        this.productService = productService;
        this.mcService = mcService;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_2__["config"];
    }
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getMainPageProducts()
            .subscribe(function (result) { return _this.products = result; }, function (err) { return console.log('mainPageProducts load error', err); });
        this.mcService.getMainPageMcs()
            .subscribe(function (result) { return _this.mcs = result; }, function (err) { return console.log('mainPageMcs load error', err); });
        // this.catalogService.getChildren('products')
        // .subscribe(
        //   result => this.descendants = result.data,
        //   err => console.log('mainPageProducts load error', err)
        // );
    };
    LandingComponent.prototype.onScroll = function () {
        // this.scrollPoint.nativeElement.scrollIntoView({behavior: 'smooth', block: 'start'});
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
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["ObservableMedia"],
            src_app_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"],
            src_app_services_mc_service__WEBPACK_IMPORTED_MODULE_5__["McService"]])
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

module.exports = "    <div class=\"mcs-item\">\r\n      <div class=\"container mat-elevation-z4\">\r\n          <div class=\"row\" fxLayout=\"row\">\r\n              <div class=\"mc-social\" fxFlex=\"100\">\r\n                    <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                    <mat-icon>thumb_up_alt</mat-icon>\r\n                    <span>{{mc.likes.likedByLength || 0}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>thumb_down_alt</mat-icon>\r\n                      <span>{{mc.likes.dislikedByLength || 0}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"config.social.showViews\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>remove_red_eye</mat-icon>\r\n                      <span>{{mc.views || 0}}</span>\r\n                  </div>\r\n                  <div *ngIf=\"config.social.showComments\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>comment</mat-icon>\r\n                      <span>{{mc.comments?.length || 0}}</span>\r\n                  </div>\r\n                   <div class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>calendar_today</mat-icon>\r\n                      <span>{{mc.updatedAt | date: 'dd-MM-yyyy'}}</span>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n    \r\n          <!-- </div>\r\n        </div> -->\r\n    \r\n        <div class=\"row padding-bottom\" fxLayout=\"row\">\r\n          <div class=\"cell\" fxFlex=\"20\" fxLayoutAlign=\"center center\">\r\n              <img class=\"responsive-image\" src=\"{{\r\n                config.imgPath +\r\n                config.cloudinary.cloud_name +\r\n                '/c_fill,w_535,h_350,f_auto/' +\r\n                mc.mainImage}}\"\r\n                alt=\"master class image\">\r\n          </div>\r\n          <div class=\"cell\" fxFlex=\"80\">\r\n              <div class=\"row\" fxLayout=\"row\">\r\n                <div class=\"cell\" fxFlex=\"100\" fxLayoutAlign=\"center\">\r\n                  <h2 class=\"mat-h1\">\r\n                    {{mc.name}}\r\n                  </h2>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" fxLayout=\"row\">\r\n                <div class=\"cell\" fxFlex=\"100\">\r\n                  <p class=\"mat-body\">\r\n                    {{mc.description}}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n    \r\n          </div>\r\n        </div>\r\n      <!-- </mat-card-content>\r\n      <mat-card-actions> -->\r\n          <div class=\"row\" fxLayout=\"row\">\r\n            <section class=\"cell-px0\" fxFlex=\"100\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\">\r\n              <div class=\"item text-align-center muted\" fxFlex>\r\n                 <!-- (click)=\"goToMcsItemDetail(mc._id)\"> -->\r\n    \r\n                <a mat-raised-button color=\"accent\"\r\n                  [routerLink]=\"['/mcs','show', mc._id]\"\r\n                  [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n                  Докладно\r\n               </a>\r\n    \r\n              </div>\r\n              <div *ngIf=\"allowTo('manager')\" class=\"item text-align-center muted\" fxFlex>\r\n                <a mat-button (click)=\"editMcsItem(mc._id)\">\r\n                  <mat-icon>edit</mat-icon>\r\n                </a>\r\n              </div>\r\n              <div *ngIf=\"allowTo('manager')\" class=\"item text-align-center muted\" fxFlex>\r\n                <a mat-button (click)=\"deleteMcsItem(mc._id)\">\r\n                  <mat-icon>delete</mat-icon>\r\n                </a>\r\n              </div>\r\n    \r\n            </section>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n    \r\n  <!-- </mat-card-actions>\r\n</mat-card> -->\r\n\r\n"

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
    function McsItemBriefComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.config = _app_config__WEBPACK_IMPORTED_MODULE_1__["config"];
    }
    McsItemBriefComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUserLocal()
            .subscribe(function (user) { return _this.user = user; });
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
    McsItemBriefComponent.prototype.deleteMcsItem = function (_id) {
        console.log("deleteMcsItem " + _id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], McsItemBriefComponent.prototype, "mc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], McsItemBriefComponent.prototype, "parentCategory_id", void 0);
    McsItemBriefComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mcs-item-brief',
            template: __webpack_require__(/*! ./mcs-item-brief.component.html */ "./src/app/components/shared/mcs-item-brief/mcs-item-brief.component.html"),
            styles: [__webpack_require__(/*! ./mcs-item-brief.component.scss */ "./src/app/components/shared/mcs-item-brief/mcs-item-brief.component.scss")]
        }),
        __metadata("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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

module.exports = "<div *ngIf=\"mc\" class=\"mcs-item\">\r\n  <div class=\"app-container-v app-container-h\">\r\n    <div class=\"container\">\r\n      <div class=\"row\" fxLayout=\"row\">\r\n        <div class=\"cell\" fxFlex=\"100\">\r\n          <div class=\"container mat-elevation-z4\">\r\n\r\n            <div class=\"row\" fxLayout=\"row\">\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <div class=\"row\" fxLayout=\"row\">\r\n                  <div class=\"mc-social\" fxFlex=\"100\">\r\n                    <div class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon class=\"hover-cursor\" (click)=\"goToMcs()\">reply_all</mat-icon>\r\n                    </div>\r\n                    <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon [ngClass]=\"{\r\n                        'disabled': !(mc.likes.canLike && allowTo('user')), \r\n                        'enabled': mc.likes.canLike && allowTo('user'), \r\n                        'hover-cursor': mc.likes.canLike && allowTo('user')}\"\r\n                        (click)=\"onLike(true, mc.likes.canLike && allowTo('user'))\">thumb_up_alt</mat-icon>\r\n                      <span>{{mc.likes.likedByLength || 0}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon [ngClass]=\"{\r\n                        'disabled': !(mc.likes.canDislike && allowTo('user')), \r\n                        'enabled': mc.likes.canDislike && allowTo('user'), \r\n                        'hover-cursor': mc.likes.canDislike && allowTo('user')}\"\r\n                        (click)=\"onLike(false, mc.likes.canDislike && allowTo('user'))\">thumb_down_alt</mat-icon>\r\n                      <span>{{mc.likes.dislikedByLength || 0}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"config.social.showViews\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>remove_red_eye</mat-icon>\r\n                      <span>{{mc.views || 0}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"config.social.showComments\" class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>comment</mat-icon>\r\n                      <span>{{mc.comments?.length || 0}}</span>\r\n                    </div>\r\n                    <div class=\"item text-align-center\" fxFlex>\r\n                      <mat-icon>calendar_today</mat-icon>\r\n                      <span>{{mc.updatedAt | date: 'dd-MM-yyyy'}}</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <div class=\"row\" fxLayout=\"row\">\r\n                  <div class=\"cell\" fxFlex=\"100\">\r\n                    <h1 class=\"mat-display-1\">{{mc.name}}</h1>\r\n                  </div>\r\n                  <div class=\"cell\" fxFlex=\"100\">\r\n                    <p class=\"mat-body-2 text-justify\">{{mc.description}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>  \r\n\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <div class=\"row padding-bottom-3\" fxLayout=\"row\">\r\n                  <div class=\"cell\" fxFlex=\"50\">\r\n                    <div class=\"row\" fxLayout=\"row\">\r\n                      <div class=\"cell\" fxFlex=\"100\" fxLayoutAlign=\"center start\">\r\n                        <table mat-table [dataSource]=\"mc.materials\" class=\"mat-elevation-z0\" fxFlex=\"100\">\r\n                          <!-- Position Column -->\r\n                          <ng-container matColumnDef=\"name\">\r\n                            <!-- <th mat-header-cell *matHeaderCellDef> No. </th> -->\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n                          </ng-container>\r\n      \r\n                          <!-- Name Column -->\r\n                          <ng-container matColumnDef=\"value\">\r\n                            <!-- <th mat-header-cell *matHeaderCellDef> Name </th> -->\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.value}} </td>\r\n                          </ng-container>\r\n      \r\n                          <!-- Weight Column -->\r\n                          <ng-container matColumnDef=\"units\">\r\n                            <!-- <th mat-header-cell *matHeaderCellDef> Weight </th> -->\r\n                            <td mat-cell *matCellDef=\"let element\"> {{element.units}} </td>\r\n                          </ng-container>\r\n      \r\n                          <!-- <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr> -->\r\n                          <tr mat-row *matRowDef=\"let row; columns: ['name', 'value', 'units'];\"></tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"cell\" fxFlex=\"50\" fxLayoutAlign=\"center center\">\r\n                    <img class=\"responsive-image mat-elevation-z10\" src=\"{{\r\n                            config.imgPath +\r\n                            config.cloudinary.cloud_name +\r\n                            '/c_fill,w_535,h_350,f_auto/' +\r\n                            mc.mainImage}}\"\r\n                      alt=\"master class image\">\r\n                  </div>\r\n      \r\n                </div>\r\n              </div>  \r\n\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <div class=\"row padding-bottom-3\" fxLayout=\"row\" *ngFor=\"let step of mc.steps\">\r\n                  <div class=\"cell\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n                    <img class=\"responsive-image mat-elevation-z10\" src=\"{{\r\n                          config.imgPath +\r\n                          config.cloudinary.cloud_name +\r\n                          '/c_fill,w_535,h_350,f_auto/' +\r\n                          step.pic}}\"\r\n                      alt=\"master class image\">\r\n                  </div>\r\n                  <div class=\"cell\" fxFlex=\"5\"></div>\r\n                  <div class=\"cell\" fxFlex=\"90\" fxLayoutAlign=\"center center\">\r\n                    <p class=\"mat-body text-justify muted\">\r\n                      {{step.description}}\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"cell\" fxFlex=\"5\"></div>\r\n                </div>\r\n              </div>  \r\n\r\n              <div class=\"cell\" fxFlex=\"100\">\r\n                <app-comments *ngIf=\"config.social.showComments\" [parent_id]=\"mc._id\" [parentCategory]=\"'mc'\"></app-comments>\r\n              </div>  \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
        this.userService.getUserLocal()
            .subscribe(function (user) {
            _this.user = user;
        }, function (err) { return console.log('err', err); });
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
                console.log('result', result);
                if (result) {
                    return _this.mcService.getMcById(parent_id_1);
                }
                else {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
                }
            }))
                .subscribe(function (result) {
                if (result) {
                    console.log('result2', result);
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

module.exports = "<mat-card id=\"product-item-brief\">\r\n  <mat-card-content class=\"wrap\" fxLayot=\"row\">\r\n    <!-- <div *ngIf=\"product\" class=\"container-px0\" fxFlex=\"100\">\r\n      <div class=\"row\" fxLayout=\"row\">\r\n          <section class=\"cell-px0 social-feed-section\" fxFlex=\"100\" fxLayout=\"row\">\r\n              <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                <mat-icon>thumb_up_alt</mat-icon>\r\n                <span>{{product.likes}}</span>\r\n              </div>\r\n              <div *ngIf=\"config.social.showLikes\" class=\"item text-align-center\" fxFlex>\r\n                  <mat-icon>thumb_down_alt</mat-icon>\r\n                  <span>{{product.dislikes}}</span>\r\n              </div>\r\n              <div *ngIf=\"config.social.showViews\" class=\"item text-align-center muted\" fxFlex>\r\n                  <mat-icon>remove_red_eye</mat-icon>\r\n                  <span>{{product.views}}</span>\r\n              </div>\r\n              <div *ngIf=\"config.social.showComments\" class=\"item text-align-center muted\" fxFlex>\r\n                  <mat-icon>comment</mat-icon>\r\n                  <span>{{product.comments.length}}</span>\r\n              </div>\r\n          </section>\r\n        </div>\r\n    </div> -->\r\n\r\n    <div class=\"mat-card-wide-image\" fxLayout=\"row\">\r\n\r\n      <!-- product level (no children)-->\r\n      <div *ngIf=\"product\" fxFlex=\"100\">\r\n\r\n        <img *ngIf=\"media.isActive('gt-sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_400,h_200,f_auto/' +\r\n              product.menuImage}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_460,h_230,f_auto/' +\r\n              product.menuImage}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image-stretch\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_590,h_295,f_auto/' +\r\n            product.menuImage}}\"\r\n             alt=\"Image\">\r\n      </div>\r\n\r\n      <!-- catalog level -->\r\n      <div *ngIf=\"child\" fxFlex=\"100\">\r\n        <img *ngIf=\"media.isActive('gt-sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_400,h_200,f_auto/' +\r\n              child.assets[0]}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('sm')\" class=\"responsive-image-stretch\" src=\"{{\r\n              config.imgPath +\r\n              config.cloudinary.cloud_name +\r\n              '/c_fill,w_460,h_230,f_auto/' +\r\n              child.assets[0]}}\"\r\n             alt=\"Image\">\r\n        <img *ngIf=\"media.isActive('xs')\" class=\"responsive-image-stretch\" src=\"{{\r\n            config.imgPath +\r\n            config.cloudinary.cloud_name +\r\n            '/c_fill,w_590,h_295,f_auto/' +\r\n            child.assets[0]}}\"\r\n             alt=\"Image\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- product level (no children)-->\r\n    <section *ngIf=\"!child && product\" class=\"row product-brief-section\" fxFlex=\"row\">\r\n      <div class=\"cell\" fxFlex=\"100\">\r\n        <h2 class=\"mat-h2 title\">{{product.name}}</h2>\r\n       </div>\r\n      <div class=\"cell product-brief-description\" fxFlex=\"100\" fxLayoutAlign=\"center center\">\r\n        <p class=\"mat-body\">{{product.description}}</p>\r\n      </div>\r\n    </section>\r\n    <section *ngIf=\"!child && product\" class=\"cell-px0 social-feed-section\" fxFlex=\"100\" fxLayout=\"row\">\r\n      <div class=\"item text-align-center\" fxFlex>\r\n        <mat-icon>swap_horiz</mat-icon>\r\n        <span> {{product?.dimensions?.width}}</span>\r\n        <span> см</span>\r\n      </div>\r\n      <div class=\"item text-align-center\" fxFlex>\r\n        <mat-icon>swap_vert</mat-icon>\r\n        <span> {{product?.dimensions?.height}}</span>\r\n        <span> см</span>\r\n      </div>\r\n      </section>\r\n\r\n  </mat-card-content>\r\n  <mat-card-actions fxLayout=\"row\">\r\n    <div fxFlex>\r\n      <!--using with catalog, when no children (product level)\r\n      category_id for breadcrumb-->\r\n      <!-- <a *ngIf=\"!child && category_id\" mat-button\r\n         [routerLink]=\"['/products', 'ch', {outlets: {primary: [category_id, 'details', product._id],\r\n         breadcrumb: [category_id, 'details', product._id]}}]\"\r\n         [queryParams]=\"{name: product.name}\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{product.name}}\r\n      </a> -->\r\n      <!--using with dashboard-->\r\n      <!-- <a *ngIf=\"!child && !category_id\" mat-button\r\n         [routerLink]=\"['/dashboard', 'product-editor-edit', parentCategory_id, parentCategoryName, product._id]\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{product.name}}\r\n      </a> -->\r\n      <!--using with catalog, when children present-->\r\n      <a *ngIf=\"child\" mat-button\r\n         [routerLink]=\"['/products', 'ch', {outlets: {primary: [child._id], breadcrumb: [child._id]}}]\"\r\n         [routerLinkActive]=\"['accent-background']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        {{child.name}}\r\n      </a>\r\n    </div>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

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

/***/ "./src/app/components/shared/screen-test/screen-test.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/shared/screen-test/screen-test.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"cell\">\r\n      <p class=\"muted\">height {{height}}</p>\r\n      <p class=\"muted\"> width {{width}}</p>\r\n  \r\n    </div>\r\n  <div class=\"w393\">393</div>\r\n  <div class=\"w360\">360</div>\r\n  <div class=\"w350\">350</div>\r\n  <div class=\"w100\">100</div>\r\n  <div><img src=\"./assets/images/sample300x300.jpg\" alt=\"300\"></div>\r\n  <div><img src=\"./assets/images/sample350x350.jpg\" alt=\"300\"></div>\r\n"

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
                _mcs_item_detail_mcs_item_detail_component__WEBPACK_IMPORTED_MODULE_23__["McsItemDetailComponent"]
            ],
        })
    ], SharedModule);
    return SharedModule;
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
    UserService.prototype.userGoogleLogin = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
            }),
        };
        return this.http.get('api/user/auth/google', httpOptions);
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



/***/ })

}]);
//# sourceMappingURL=components-dashboard-dashboard-module~components-mcs-mcs-module~components-products-products-module~~377b6a4e.js.map