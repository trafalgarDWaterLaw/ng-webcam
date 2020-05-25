import { Injectable, ɵɵdefineInjectable, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { __assign } from 'tslib';
import 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgWebCamService = /** @class */ (function () {
    function NgWebCamService() {
    }
    NgWebCamService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgWebCamService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgWebCamService.ngInjectableDef = ɵɵdefineInjectable({ factory: function NgWebCamService_Factory() { return new NgWebCamService(); }, token: NgWebCamService, providedIn: "root" });
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
        this.capturedImage = new EventEmitter();
        /**
         * Output parameter to emit video tag of webcam
         * This can be used by people working around Machine learning for training purposes
         * Output decorator
         */
        this.webCamElement = new EventEmitter();
        /**
         * Output parameter to emit error caused during library run
         * This can be useful to determine error
         * Output decorator
         */
        this.handleError = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'ng-webcam',
                    template: "<div id=\"ngWebCamContainer\">\r\n    <video autoplay=\"true\" id=\"ngWebCamVideoElement\">\r\n\t  </video>\r\n</div>\r\n\r\n<canvas id=\"ngWebCamCanvas\" style=\"display: none;\"></canvas>",
                    styles: ["#ngWebCamContainer{margin:0 auto;width:500px;height:375px;border:10px solid #333}#ngWebCamVideoElement{width:500px;height:375px;background-color:#666;transform:scaleX(-1)}"]
                }] }
    ];
    /** @nocollapse */
    NgWebCamComponent.ctorParameters = function () { return []; };
    NgWebCamComponent.propDecorators = {
        styleCss: [{ type: Input }],
        containerCss: [{ type: Input }],
        mediaOptions: [{ type: Input }],
        enableAudio: [{ type: Input }],
        frameRate: [{ type: Input }],
        mimeType: [{ type: Input }],
        triggerCapture: [{ type: Input, args: ['triggerCapture',] }],
        webCamControl: [{ type: Input, args: ['webCamControl',] }],
        height: [{ type: Input, args: ['height',] }],
        width: [{ type: Input, args: ['width',] }],
        capturedImage: [{ type: Output }],
        webCamElement: [{ type: Output }],
        handleError: [{ type: Output }]
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
        { type: NgModule, args: [{
                    declarations: [NgWebCamComponent],
                    imports: [],
                    exports: [NgWebCamComponent]
                },] }
    ];
    return NgWebCamModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgWebCamComponent, NgWebCamModule, NgWebCamService };
//# sourceMappingURL=ng-web-cam.js.map
