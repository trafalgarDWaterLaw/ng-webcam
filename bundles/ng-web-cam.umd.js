(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ng-web-cam', ['exports', '@angular/core', 'rxjs'], factory) :
    (global = global || self, factory(global['ng-web-cam'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgWebCamService = /** @class */ (function () {
        function NgWebCamService() {
        }
        NgWebCamService.decorators = [
            { type: core.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgWebCamService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgWebCamService.ngInjectableDef = core.ɵɵdefineInjectable({ factory: function NgWebCamService_Factory() { return new NgWebCamService(); }, token: NgWebCamService, providedIn: "root" });
        return NgWebCamService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgWebCamComponent = /** @class */ (function () {
        function NgWebCamComponent() {
            /**
             * Css to style your webcam
             * This will override existing default Css
             */
            this.styleCss = '';
            /**
             * Css to style your webcam container
             * This will override existing default Css
             */
            this.containerCss = '';
            /**
             * This is an object read by User media
             * This will set your initial media Parameters
             */
            this.mediaOptions = null;
            /**
             * Enables Audio too with webcam
             * Build your own parameter
             */
            this.enableAudio = false;
            /**
             * Enables frame rate configuration
             * Build your own parameter
             */
            this.frameRate = null;
            /**
             * Type of the captured image
             * Build your own image extention
             */
            this.mimeType = 'image/png';
            /**
             * Output parameter to emit image src of captured image
             * Output decorator
             */
            this.capturedImage = new core.EventEmitter();
            /**
             * Output parameter to emit video tag of webcam
             * This can be used by people working around Machine learning for training purposes
             * Output decorator
             */
            this.webCamElement = new core.EventEmitter();
            /**
             * Output parameter to emit error caused during library run
             * This can be useful to determine error
             * Output decorator
             */
            this.handleError = new core.EventEmitter();
            this._height = 720;
            this._width = 1280;
            this._height = 720;
            this._width = 1280;
        }
        Object.defineProperty(NgWebCamComponent.prototype, "triggerCapture", {
            /**Input parameter to handle snap capture
             * Input decorator
             */
            set: /**
             * Input parameter to handle snap capture
             * Input decorator
             * @param {?} triggerCapture
             * @return {?}
             */
            function (triggerCapture) {
                var _this = this;
                if (this.triggerCaptureSubscrib) {
                    this.triggerCaptureSubscrib.unsubscribe();
                }
                this.triggerCaptureSubscrib = triggerCapture.subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.takepicture();
                }));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgWebCamComponent.prototype, "webCamControl", {
            /**Input parameter to handle webcam start/stop
             * Input decorator
             */
            set: /**
             * Input parameter to handle webcam start/stop
             * Input decorator
             * @param {?} webCamControl
             * @return {?}
             */
            function (webCamControl) {
                var _this = this;
                if (this.webcamSubscrib) {
                    this.webcamSubscrib.unsubscribe();
                }
                this.webcamSubscrib = webCamControl.subscribe((/**
                 * @param {?} control
                 * @return {?}
                 */
                function (control) {
                    if (control) {
                        if (_this.video && _this.video.srcObject) {
                            //* already on
                        }
                        else {
                            _this.stop();
                            _this.start();
                        }
                    }
                    else {
                        _this.stop();
                    }
                }));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgWebCamComponent.prototype, "height", {
            /**Parameter to get height of the video
             * getter of Input decorator
             */
            get: /**
             * Parameter to get height of the video
             * getter of Input decorator
             * @return {?}
             */
            function () {
                return this._height;
            },
            /**Input parameter to get height of the video
             * Not required if mediaOptions Input decorator is set
             * Input decorator
             */
            set: /**
             * Input parameter to get height of the video
             * Not required if mediaOptions Input decorator is set
             * Input decorator
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._height = value;
                this.updateView();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NgWebCamComponent.prototype, "width", {
            /**Parameter to get width of the video
             * getter of Input decorator
             */
            get: /**
             * Parameter to get width of the video
             * getter of Input decorator
             * @return {?}
             */
            function () {
                return this._width;
            },
            /**Input parameter to get width of the video
             * Not required if mediaOptions Input decorator is set
             * Input decorator
             */
            set: /**
             * Input parameter to get width of the video
             * Not required if mediaOptions Input decorator is set
             * Input decorator
             * @param {?} value
             * @return {?}
             */
            function (value) {
                this._width = value;
                this.updateView();
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NgWebCamComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.video = document.querySelector('#ngWebCamVideoElement');
            this.canvas = document.getElementById('ngWebCamCanvas');
            /** @type {?} */
            var ctx = this.canvas.getContext('2d');
            this.video.addEventListener('loadedmetadata', (/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var vid = document.querySelector('#ngWebCamVideoElement');
                ctx.translate(vid.videoWidth, 0);
                ctx.scale(-1, 1);
            }));
            this.start();
        };
        /**
         * @return {?}
         */
        NgWebCamComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            if (this.styleCss) {
                this.video.style = this.styleCss;
            }
            if (this.containerCss) {
                /** @type {?} */
                var container = document.getElementById('ngWebCamContainer');
                container.style = this.containerCss;
            }
        };
        /**
         * @return {?}
         */
        NgWebCamComponent.prototype.takepicture = /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var context = this.canvas.getContext('2d');
            this.canvas.width = this.width;
            this.canvas.height = this.height;
            /** @type {?} */
            var vid = document.querySelector('#ngWebCamVideoElement');
            context.drawImage(vid, 0, 0, this.width, this.height);
            /** @type {?} */
            var data = this.canvas.toDataURL(this.mimeType);
            this.capturedImage.emit(data);
        };
        /**
         * @return {?}
         */
        NgWebCamComponent.prototype.updateView = /**
         * @return {?}
         */
        function () {
            this.stop();
            this.start();
        };
        /**
         * @return {?}
         */
        NgWebCamComponent.prototype.start = /**
         * @return {?}
         */
        function () {
            var _this = this;
            if (navigator.mediaDevices.getUserMedia) {
                if (this.mediaOptions) {
                    /** @type {?} */
                    var mediaOptionsParsed = JSON.parse(this.mediaOptions);
                    this.paramObj = __assign({}, mediaOptionsParsed);
                }
                else {
                    if (this.frameRate) {
                        /** @type {?} */
                        var frameRateParsed = JSON.parse(this.frameRate);
                        this.frameRateObj = __assign({}, frameRateParsed);
                    }
                    else {
                        this.frameRateObj = { ideal: 10, max: 30 };
                    }
                    this.paramObj = { audio: this.enableAudio, video: {
                            width: { ideal: this.width },
                            height: { ideal: this.height },
                            frameRate: this.frameRateObj
                        }
                    };
                }
                navigator.mediaDevices.getUserMedia(this.paramObj)
                    .then((/**
                 * @param {?} stream
                 * @return {?}
                 */
                function (stream) {
                    _this.video.srcObject = stream;
                    /** @type {?} */
                    var vid = document.querySelector('#ngWebCamVideoElement');
                    _this.webCamElement.emit(vid);
                }))
                    .catch((/**
                 * @param {?} err
                 * @return {?}
                 */
                function (err) {
                    _this.handleError.emit(err);
                }));
            }
        };
        /**
         * @return {?}
         */
        NgWebCamComponent.prototype.stop = /**
         * @return {?}
         */
        function () {
            if (this.video && this.video.srcObject) {
                /** @type {?} */
                var stream = this.video.srcObject;
                /** @type {?} */
                var tracks = stream.getTracks();
                for (var i = 0; i < tracks.length; i++) {
                    /** @type {?} */
                    var track = tracks[i];
                    track.stop();
                }
                this.video.srcObject = null;
            }
        };
        /**
         * @return {?}
         */
        NgWebCamComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this.video = null;
            this.canvas = null;
            this.webcamSubscrib.unsubscribe();
            this.triggerCaptureSubscrib.unsubscribe();
        };
        NgWebCamComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ng-webcam',
                        template: "<div id=\"ngWebCamContainer\">\r\n    <video autoplay=\"true\" id=\"ngWebCamVideoElement\">\r\n\t  </video>\r\n</div>\r\n\r\n<canvas id=\"ngWebCamCanvas\" style=\"display: none;\"></canvas>",
                        styles: ["#ngWebCamContainer{margin:0 auto;width:500px;height:375px;border:10px solid #333}#ngWebCamVideoElement{width:500px;height:375px;background-color:#666;transform:scaleX(-1)}"]
                    }] }
        ];
        /** @nocollapse */
        NgWebCamComponent.ctorParameters = function () { return []; };
        NgWebCamComponent.propDecorators = {
            styleCss: [{ type: core.Input }],
            containerCss: [{ type: core.Input }],
            mediaOptions: [{ type: core.Input }],
            enableAudio: [{ type: core.Input }],
            frameRate: [{ type: core.Input }],
            mimeType: [{ type: core.Input }],
            triggerCapture: [{ type: core.Input, args: ['triggerCapture',] }],
            webCamControl: [{ type: core.Input, args: ['webCamControl',] }],
            height: [{ type: core.Input, args: ['height',] }],
            width: [{ type: core.Input, args: ['width',] }],
            capturedImage: [{ type: core.Output }],
            webCamElement: [{ type: core.Output }],
            handleError: [{ type: core.Output }]
        };
        return NgWebCamComponent;
    }());
    if (false) {
        /**
         * Css to style your webcam
         * This will override existing default Css
         * @type {?}
         */
        NgWebCamComponent.prototype.styleCss;
        /**
         * Css to style your webcam container
         * This will override existing default Css
         * @type {?}
         */
        NgWebCamComponent.prototype.containerCss;
        /**
         * This is an object read by User media
         * This will set your initial media Parameters
         * @type {?}
         */
        NgWebCamComponent.prototype.mediaOptions;
        /**
         * Enables Audio too with webcam
         * Build your own parameter
         * @type {?}
         */
        NgWebCamComponent.prototype.enableAudio;
        /**
         * Enables frame rate configuration
         * Build your own parameter
         * @type {?}
         */
        NgWebCamComponent.prototype.frameRate;
        /**
         * Type of the captured image
         * Build your own image extention
         * @type {?}
         */
        NgWebCamComponent.prototype.mimeType;
        /**
         * To subscribe to webcam changes
         * Subscription object
         * @type {?}
         */
        NgWebCamComponent.prototype.webcamSubscrib;
        /**
         * To subscribe snap capture
         * Subscription object
         * @type {?}
         */
        NgWebCamComponent.prototype.triggerCaptureSubscrib;
        /**
         * Output parameter to emit image src of captured image
         * Output decorator
         * @type {?}
         */
        NgWebCamComponent.prototype.capturedImage;
        /**
         * Output parameter to emit video tag of webcam
         * This can be used by people working around Machine learning for training purposes
         * Output decorator
         * @type {?}
         */
        NgWebCamComponent.prototype.webCamElement;
        /**
         * Output parameter to emit error caused during library run
         * This can be useful to determine error
         * Output decorator
         * @type {?}
         */
        NgWebCamComponent.prototype.handleError;
        /** @type {?} */
        NgWebCamComponent.prototype.video;
        /** @type {?} */
        NgWebCamComponent.prototype.canvas;
        /** @type {?} */
        NgWebCamComponent.prototype.paramObj;
        /** @type {?} */
        NgWebCamComponent.prototype.frameRateObj;
        /** @type {?} */
        NgWebCamComponent.prototype._height;
        /** @type {?} */
        NgWebCamComponent.prototype._width;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgWebCamModule = /** @class */ (function () {
        function NgWebCamModule() {
        }
        NgWebCamModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NgWebCamComponent],
                        imports: [],
                        exports: [NgWebCamComponent]
                    },] }
        ];
        return NgWebCamModule;
    }());

    exports.NgWebCamComponent = NgWebCamComponent;
    exports.NgWebCamModule = NgWebCamModule;
    exports.NgWebCamService = NgWebCamService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-web-cam.umd.js.map
