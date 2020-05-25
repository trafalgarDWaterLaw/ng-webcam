/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
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
                this.paramObj = tslib_1.__assign({}, mediaOptionsParsed);
            }
            else {
                if (this.frameRate) {
                    /** @type {?} */
                    var frameRateParsed = JSON.parse(this.frameRate);
                    this.frameRateObj = tslib_1.__assign({}, frameRateParsed);
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
export { NgWebCamComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2ViLWNhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy13ZWItY2FtLyIsInNvdXJjZXMiOlsibGliL25nLXdlYi1jYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBb0MsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFaEQ7SUE2SUU7Ozs7O1FBcElTLGFBQVEsR0FBVyxFQUFFLENBQUM7Ozs7O1FBS3RCLGlCQUFZLEdBQVcsRUFBRSxDQUFDOzs7OztRQUsxQixpQkFBWSxHQUFRLElBQUksQ0FBQzs7Ozs7UUFLekIsZ0JBQVcsR0FBWSxLQUFLLENBQUM7Ozs7O1FBSzdCLGNBQVMsR0FBUSxJQUFJLENBQUM7Ozs7O1FBS3RCLGFBQVEsR0FBVyxXQUFXLENBQUM7Ozs7O1FBc0Y5QixrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7Ozs7OztRQU0zQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7Ozs7OztRQU14QyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFNaEQsWUFBTyxHQUFHLEdBQUcsQ0FBQztRQUNkLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFHWixJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUNwQixDQUFDO0lBL0ZGLHNCQUNJLDZDQUFjO1FBSmxCOztXQUVHOzs7Ozs7O1FBQ0gsVUFDbUIsY0FBZ0M7WUFEbkQsaUJBU0M7WUFQQyxJQUFJLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQzNDO1lBRUQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGNBQWMsQ0FBQyxT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WUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDN0I7SUFDSCxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7Z0JBL09GLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIseU1BQTBDOztpQkFFM0M7Ozs7OzJCQUtFLEtBQUs7K0JBS0wsS0FBSzsrQkFLTCxLQUFLOzhCQUtMLEtBQUs7NEJBS0wsS0FBSzsyQkFLTCxLQUFLO2lDQWVMLEtBQUssU0FBQyxnQkFBZ0I7Z0NBY3RCLEtBQUssU0FBQyxlQUFlO3lCQStCckIsS0FBSyxTQUFDLFFBQVE7d0JBaUJkLEtBQUssU0FBQyxPQUFPO2dDQVNiLE1BQU07Z0NBTU4sTUFBTTs4QkFNTixNQUFNOztJQTZHVCx3QkFBQztDQUFBLEFBalBELElBaVBDO1NBNU9ZLGlCQUFpQjs7Ozs7OztJQUk1QixxQ0FBK0I7Ozs7OztJQUsvQix5Q0FBbUM7Ozs7OztJQUtuQyx5Q0FBa0M7Ozs7OztJQUtsQyx3Q0FBc0M7Ozs7OztJQUt0QyxzQ0FBK0I7Ozs7OztJQUsvQixxQ0FBd0M7Ozs7OztJQUt4QywyQ0FBNkI7Ozs7OztJQUs3QixtREFBcUM7Ozs7OztJQTRFckMsMENBQXFEOzs7Ozs7O0lBTXJELDBDQUFrRDs7Ozs7OztJQU1sRCx3Q0FBZ0Q7O0lBRWhELGtDQUFXOztJQUNYLG1DQUFZOztJQUNaLHFDQUFjOztJQUNkLHlDQUFrQjs7SUFDbEIsb0NBQWM7O0lBQ2QsbUNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZy13ZWJjYW0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmctd2ViLWNhbS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL25nLXdlYi1jYW0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5nV2ViQ2FtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICAvKipDc3MgdG8gc3R5bGUgeW91ciB3ZWJjYW1cbiAgICogVGhpcyB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGRlZmF1bHQgQ3NzXG4gICAqL1xuICBASW5wdXQoKSBzdHlsZUNzczogc3RyaW5nID0gJyc7XG5cbiAgLyoqQ3NzIHRvIHN0eWxlIHlvdXIgd2ViY2FtIGNvbnRhaW5lclxuICAgKiBUaGlzIHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgZGVmYXVsdCBDc3NcbiAgICovXG4gIEBJbnB1dCgpIGNvbnRhaW5lckNzczogc3RyaW5nID0gJyc7XG5cbiAgLyoqVGhpcyBpcyBhbiBvYmplY3QgcmVhZCBieSBVc2VyIG1lZGlhXG4gICAqIFRoaXMgd2lsbCBzZXQgeW91ciBpbml0aWFsIG1lZGlhIFBhcmFtZXRlcnNcbiAgICovXG4gIEBJbnB1dCgpIG1lZGlhT3B0aW9uczogYW55ID0gbnVsbDtcblxuICAvKipFbmFibGVzIEF1ZGlvIHRvbyB3aXRoIHdlYmNhbVxuICAgKiBCdWlsZCB5b3VyIG93biBwYXJhbWV0ZXJcbiAgICovXG4gIEBJbnB1dCgpIGVuYWJsZUF1ZGlvOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqRW5hYmxlcyBmcmFtZSByYXRlIGNvbmZpZ3VyYXRpb25cbiAgICogQnVpbGQgeW91ciBvd24gcGFyYW1ldGVyXG4gICAqL1xuICBASW5wdXQoKSBmcmFtZVJhdGU6IGFueSA9IG51bGw7XG5cbiAgLyoqVHlwZSBvZiB0aGUgY2FwdHVyZWQgaW1hZ2VcbiAgICogQnVpbGQgeW91ciBvd24gaW1hZ2UgZXh0ZW50aW9uXG4gICAqL1xuICBASW5wdXQoKSBtaW1lVHlwZTogc3RyaW5nID0gJ2ltYWdlL3BuZyc7XG5cbiAgLyoqVG8gc3Vic2NyaWJlIHRvIHdlYmNhbSBjaGFuZ2VzXG4gICAqIFN1YnNjcmlwdGlvbiBvYmplY3RcbiAgICovXG4gIHdlYmNhbVN1YnNjcmliOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqVG8gc3Vic2NyaWJlIHNuYXAgY2FwdHVyZVxuICAgKiBTdWJzY3JpcHRpb24gb2JqZWN0XG4gICAqL1xuICB0cmlnZ2VyQ2FwdHVyZVN1YnNjcmliOiBTdWJzY3JpcHRpb247XG5cbiAgLyoqSW5wdXQgcGFyYW1ldGVyIHRvIGhhbmRsZSBzbmFwIGNhcHR1cmVcbiAgICogSW5wdXQgZGVjb3JhdG9yXG4gICAqL1xuICBASW5wdXQoJ3RyaWdnZXJDYXB0dXJlJylcbiAgc2V0IHRyaWdnZXJDYXB0dXJlKHRyaWdnZXJDYXB0dXJlOiBPYnNlcnZhYmxlPHZvaWQ+KSB7XG4gICAgaWYgKHRoaXMudHJpZ2dlckNhcHR1cmVTdWJzY3JpYikge1xuICAgICAgdGhpcy50cmlnZ2VyQ2FwdHVyZVN1YnNjcmliLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgdGhpcy50cmlnZ2VyQ2FwdHVyZVN1YnNjcmliID0gdHJpZ2dlckNhcHR1cmUuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMudGFrZXBpY3R1cmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKklucHV0IHBhcmFtZXRlciB0byBoYW5kbGUgd2ViY2FtIHN0YXJ0L3N0b3BcbiAgICogSW5wdXQgZGVjb3JhdG9yXG4gICAqL1xuICBASW5wdXQoJ3dlYkNhbUNvbnRyb2wnKVxuICBzZXQgd2ViQ2FtQ29udHJvbCh3ZWJDYW1Db250cm9sOiBPYnNlcnZhYmxlPGJvb2xlYW4+KSB7XG4gICAgaWYgKHRoaXMud2ViY2FtU3Vic2NyaWIpIHtcbiAgICAgIHRoaXMud2ViY2FtU3Vic2NyaWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLndlYmNhbVN1YnNjcmliID0gd2ViQ2FtQ29udHJvbC5zdWJzY3JpYmUoY29udHJvbCA9PiB7XG4gICAgICBpZiAoY29udHJvbCkge1xuICAgICAgICBpZiAodGhpcy52aWRlbyAmJiB0aGlzLnZpZGVvLnNyY09iamVjdCkge1xuICAgICAgICAgIC8vKiBhbHJlYWR5IG9uXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlBhcmFtZXRlciB0byBnZXQgaGVpZ2h0IG9mIHRoZSB2aWRlb1xuICAgKiBnZXR0ZXIgb2YgSW5wdXQgZGVjb3JhdG9yXG4gICAqL1xuICBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIC8qKklucHV0IHBhcmFtZXRlciB0byBnZXQgaGVpZ2h0IG9mIHRoZSB2aWRlb1xuICAgKiBOb3QgcmVxdWlyZWQgaWYgbWVkaWFPcHRpb25zIElucHV0IGRlY29yYXRvciBpcyBzZXRcbiAgICogSW5wdXQgZGVjb3JhdG9yXG4gICAqL1xuICBASW5wdXQoJ2hlaWdodCcpXG4gIHNldCBoZWlnaHQodmFsdWU6IG51bWJlcikge1xuICAgICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIC8qKlBhcmFtZXRlciB0byBnZXQgd2lkdGggb2YgdGhlIHZpZGVvXG4gICAqIGdldHRlciBvZiBJbnB1dCBkZWNvcmF0b3JcbiAgICovXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIC8qKklucHV0IHBhcmFtZXRlciB0byBnZXQgd2lkdGggb2YgdGhlIHZpZGVvXG4gICAqIE5vdCByZXF1aXJlZCBpZiBtZWRpYU9wdGlvbnMgSW5wdXQgZGVjb3JhdG9yIGlzIHNldFxuICAgKiBJbnB1dCBkZWNvcmF0b3JcbiAgICovXG4gIEBJbnB1dCgnd2lkdGgnKVxuICBzZXQgd2lkdGgodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVWaWV3KCk7XG4gIH1cblxuICAvKipPdXRwdXQgcGFyYW1ldGVyIHRvIGVtaXQgaW1hZ2Ugc3JjIG9mIGNhcHR1cmVkIGltYWdlXG4gICAqIE91dHB1dCBkZWNvcmF0b3JcbiAgICovXG4gIEBPdXRwdXQoKSBjYXB0dXJlZEltYWdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgLyoqT3V0cHV0IHBhcmFtZXRlciB0byBlbWl0IHZpZGVvIHRhZyBvZiB3ZWJjYW1cbiAgICogVGhpcyBjYW4gYmUgdXNlZCBieSBwZW9wbGUgd29ya2luZyBhcm91bmQgTWFjaGluZSBsZWFybmluZyBmb3IgdHJhaW5pbmcgcHVycG9zZXNcbiAgICogT3V0cHV0IGRlY29yYXRvclxuICAgKi9cbiAgQE91dHB1dCgpIHdlYkNhbUVsZW1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICAvKipPdXRwdXQgcGFyYW1ldGVyIHRvIGVtaXQgZXJyb3IgY2F1c2VkIGR1cmluZyBsaWJyYXJ5IHJ1blxuICAgKiBUaGlzIGNhbiBiZSB1c2VmdWwgdG8gZGV0ZXJtaW5lIGVycm9yXG4gICAqIE91dHB1dCBkZWNvcmF0b3JcbiAgICovXG4gIEBPdXRwdXQoKSBoYW5kbGVFcnJvciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIHZpZGVvOiBhbnk7XG4gIGNhbnZhczogYW55O1xuICBwYXJhbU9iajogYW55O1xuICBmcmFtZVJhdGVPYmo6IGFueTtcbiAgX2hlaWdodCA9IDcyMDtcbiAgX3dpZHRoID0gMTI4MDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSA3MjA7XG4gICAgdGhpcy5fd2lkdGggPSAxMjgwO1xuICAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmdXZWJDYW1WaWRlb0VsZW1lbnQnKTtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZ1dlYkNhbUNhbnZhcycpO1xuICAgIGxldCBjdHggPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMudmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVkbWV0YWRhdGEnLCBmdW5jdGlvbigpIHtcbiAgICAgIGxldCB2aWQ6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZ1dlYkNhbVZpZGVvRWxlbWVudCcpO1xuICAgICAgY3R4LnRyYW5zbGF0ZSh2aWQudmlkZW9XaWR0aCwgMCk7XG4gICAgICBjdHguc2NhbGUoLTEsIDEpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICh0aGlzLnN0eWxlQ3NzKSB7XG4gICAgICB0aGlzLnZpZGVvLnN0eWxlID0gdGhpcy5zdHlsZUNzcztcbiAgICB9XG4gICAgaWYgKHRoaXMuY29udGFpbmVyQ3NzKSB7XG4gICAgICBsZXQgY29udGFpbmVyOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmdXZWJDYW1Db250YWluZXInKTtcbiAgICAgIGNvbnRhaW5lci5zdHlsZSA9IHRoaXMuY29udGFpbmVyQ3NzO1xuICAgIH1cbiAgfVxuXG5cbiAgdGFrZXBpY3R1cmUoKSB7XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy53aWR0aDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodDtcbiAgICBsZXQgdmlkOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmdXZWJDYW1WaWRlb0VsZW1lbnQnKTtcbiAgICBjb250ZXh0LmRyYXdJbWFnZSh2aWQsIDAsIDAsIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblxuICAgIGxldCBkYXRhOiBzdHJpbmcgPSB0aGlzLmNhbnZhcy50b0RhdGFVUkwodGhpcy5taW1lVHlwZSk7XG4gICAgdGhpcy5jYXB0dXJlZEltYWdlLmVtaXQoZGF0YSk7XG4gIH1cblxuICB1cGRhdGVWaWV3KCkge1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgICAgaWYgKHRoaXMubWVkaWFPcHRpb25zKSB7XG4gICAgICAgIGxldCBtZWRpYU9wdGlvbnNQYXJzZWQgPSBKU09OLnBhcnNlKHRoaXMubWVkaWFPcHRpb25zKTtcbiAgICAgICAgdGhpcy5wYXJhbU9iaiA9IHtcbiAgICAgICAgICAuLi5tZWRpYU9wdGlvbnNQYXJzZWRcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuZnJhbWVSYXRlKSB7XG4gICAgICAgICAgbGV0IGZyYW1lUmF0ZVBhcnNlZCA9IEpTT04ucGFyc2UodGhpcy5mcmFtZVJhdGUpO1xuICAgICAgICAgIHRoaXMuZnJhbWVSYXRlT2JqID0ge1xuICAgICAgICAgICAgLi4uZnJhbWVSYXRlUGFyc2VkXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZnJhbWVSYXRlT2JqID0geyBpZGVhbDogMTAsIG1heDogMzAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhcmFtT2JqID0ge2F1ZGlvOiB0aGlzLmVuYWJsZUF1ZGlvLCB2aWRlbzoge1xuICAgICAgICAgICAgICB3aWR0aDogeyBpZGVhbDogdGhpcy53aWR0aH0sXG4gICAgICAgICAgICAgIGhlaWdodDogeyBpZGVhbDogdGhpcy5oZWlnaHR9LFxuICAgICAgICAgICAgICBmcmFtZVJhdGU6IHRoaXMuZnJhbWVSYXRlT2JqXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHRoaXMucGFyYW1PYmopXG4gICAgICAgIC50aGVuKHN0cmVhbSA9PiB7XG4gICAgICAgICAgdGhpcy52aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgICAgICAgbGV0IHZpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZ1dlYkNhbVZpZGVvRWxlbWVudCcpO1xuICAgICAgICAgIHRoaXMud2ViQ2FtRWxlbWVudC5lbWl0KHZpZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IuZW1pdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzdG9wKCkge1xuICAgIGlmICh0aGlzLnZpZGVvICYmIHRoaXMudmlkZW8uc3JjT2JqZWN0KSB7XG4gICAgICBsZXQgc3RyZWFtID0gdGhpcy52aWRlby5zcmNPYmplY3Q7XG4gICAgICBsZXQgdHJhY2tzID0gc3RyZWFtLmdldFRyYWNrcygpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRyYWNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgdHJhY2sgPSB0cmFja3NbaV07XG4gICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmlkZW8uc3JjT2JqZWN0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnZpZGVvID0gbnVsbDtcbiAgICB0aGlzLmNhbnZhcyA9IG51bGw7XG4gICAgdGhpcy53ZWJjYW1TdWJzY3JpYi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMudHJpZ2dlckNhcHR1cmVTdWJzY3JpYi51bnN1YnNjcmliZSgpO1xuICB9XG5cbn1cbiJdfQ==