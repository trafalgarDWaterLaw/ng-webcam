/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
export class NgWebCamComponent {
    constructor() {
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
    /**
     * Input parameter to handle snap capture
     * Input decorator
     * @param {?} triggerCapture
     * @return {?}
     */
    set triggerCapture(triggerCapture) {
        if (this.triggerCaptureSubscrib) {
            this.triggerCaptureSubscrib.unsubscribe();
        }
        this.triggerCaptureSubscrib = triggerCapture.subscribe((/**
         * @return {?}
         */
        () => {
            this.takepicture();
        }));
    }
    /**
     * Input parameter to handle webcam start/stop
     * Input decorator
     * @param {?} webCamControl
     * @return {?}
     */
    set webCamControl(webCamControl) {
        if (this.webcamSubscrib) {
            this.webcamSubscrib.unsubscribe();
        }
        this.webcamSubscrib = webCamControl.subscribe((/**
         * @param {?} control
         * @return {?}
         */
        control => {
            if (control) {
                if (this.video && this.video.srcObject) {
                    //* already on
                }
                else {
                    this.stop();
                    this.start();
                }
            }
            else {
                this.stop();
            }
        }));
    }
    /**
     * Parameter to get height of the video
     * getter of Input decorator
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * Input parameter to get height of the video
     * Not required if mediaOptions Input decorator is set
     * Input decorator
     * @param {?} value
     * @return {?}
     */
    set height(value) {
        this._height = value;
        this.updateView();
    }
    /**
     * Parameter to get width of the video
     * getter of Input decorator
     * @return {?}
     */
    get width() {
        return this._width;
    }
    /**
     * Input parameter to get width of the video
     * Not required if mediaOptions Input decorator is set
     * Input decorator
     * @param {?} value
     * @return {?}
     */
    set width(value) {
        this._width = value;
        this.updateView();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.video = document.querySelector('#ngWebCamVideoElement');
        this.canvas = document.getElementById('ngWebCamCanvas');
        /** @type {?} */
        let ctx = this.canvas.getContext('2d');
        this.video.addEventListener('loadedmetadata', (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            let vid = document.querySelector('#ngWebCamVideoElement');
            ctx.translate(vid.videoWidth, 0);
            ctx.scale(-1, 1);
        }));
        this.start();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.styleCss) {
            this.video.style = this.styleCss;
        }
        if (this.containerCss) {
            /** @type {?} */
            let container = document.getElementById('ngWebCamContainer');
            container.style = this.containerCss;
        }
    }
    /**
     * @return {?}
     */
    takepicture() {
        /** @type {?} */
        let context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        /** @type {?} */
        let vid = document.querySelector('#ngWebCamVideoElement');
        context.drawImage(vid, 0, 0, this.width, this.height);
        /** @type {?} */
        let data = this.canvas.toDataURL(this.mimeType);
        this.capturedImage.emit(data);
    }
    /**
     * @return {?}
     */
    updateView() {
        this.stop();
        this.start();
    }
    /**
     * @return {?}
     */
    start() {
        if (navigator.mediaDevices.getUserMedia) {
            if (this.mediaOptions) {
                /** @type {?} */
                let mediaOptionsParsed = JSON.parse(this.mediaOptions);
                this.paramObj = Object.assign({}, mediaOptionsParsed);
            }
            else {
                if (this.frameRate) {
                    /** @type {?} */
                    let frameRateParsed = JSON.parse(this.frameRate);
                    this.frameRateObj = Object.assign({}, frameRateParsed);
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
            stream => {
                this.video.srcObject = stream;
                /** @type {?} */
                let vid = document.querySelector('#ngWebCamVideoElement');
                this.webCamElement.emit(vid);
            }))
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            err => {
                this.handleError.emit(err);
            }));
        }
    }
    /**
     * @return {?}
     */
    stop() {
        if (this.video && this.video.srcObject) {
            /** @type {?} */
            let stream = this.video.srcObject;
            /** @type {?} */
            let tracks = stream.getTracks();
            for (let i = 0; i < tracks.length; i++) {
                /** @type {?} */
                let track = tracks[i];
                track.stop();
            }
            this.video.srcObject = null;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.video = null;
        this.canvas = null;
        this.webcamSubscrib.unsubscribe();
        this.triggerCaptureSubscrib.unsubscribe();
    }
}
NgWebCamComponent.decorators = [
    { type: Component, args: [{
                selector: 'ng-webcam',
                template: "<div id=\"ngWebCamContainer\">\r\n    <video autoplay=\"true\" id=\"ngWebCamVideoElement\">\r\n\t  </video>\r\n</div>\r\n\r\n<canvas id=\"ngWebCamCanvas\" style=\"display: none;\"></canvas>",
                styles: ["#ngWebCamContainer{margin:0 auto;width:500px;height:375px;border:10px solid #333}#ngWebCamVideoElement{width:500px;height:375px;background-color:#666;transform:scaleX(-1)}"]
            }] }
];
/** @nocollapse */
NgWebCamComponent.ctorParameters = () => [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctd2ViLWNhbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy13ZWItY2FtLyIsInNvdXJjZXMiOlsibGliL25nLXdlYi1jYW0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQyxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RyxPQUFPLEVBQUUsVUFBVSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQU9oRCxNQUFNLE9BQU8saUJBQWlCO0lBd0k1Qjs7Ozs7UUFwSVMsYUFBUSxHQUFXLEVBQUUsQ0FBQzs7Ozs7UUFLdEIsaUJBQVksR0FBVyxFQUFFLENBQUM7Ozs7O1FBSzFCLGlCQUFZLEdBQVEsSUFBSSxDQUFDOzs7OztRQUt6QixnQkFBVyxHQUFZLEtBQUssQ0FBQzs7Ozs7UUFLN0IsY0FBUyxHQUFRLElBQUksQ0FBQzs7Ozs7UUFLdEIsYUFBUSxHQUFXLFdBQVcsQ0FBQzs7Ozs7UUFzRjlCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQzs7Ozs7O1FBTTNDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7Ozs7O1FBTXhDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQU1oRCxZQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2QsV0FBTSxHQUFHLElBQUksQ0FBQztRQUdaLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Ozs7Ozs7SUEvRkYsSUFDSSxjQUFjLENBQUMsY0FBZ0M7UUFDakQsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDL0IsSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzNDO1FBRUQsSUFBSSxDQUFDLHNCQUFzQixHQUFHLGNBQWMsQ0FBQyxTQUFTOzs7UUFBQyxHQUFH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QUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDNUMsQ0FBQzs7O1lBL09GLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIseU1BQTBDOzthQUUzQzs7Ozs7dUJBS0UsS0FBSzsyQkFLTCxLQUFLOzJCQUtMLEtBQUs7MEJBS0wsS0FBSzt3QkFLTCxLQUFLO3VCQUtMLEtBQUs7NkJBZUwsS0FBSyxTQUFDLGdCQUFnQjs0QkFjdEIsS0FBSyxTQUFDLGVBQWU7cUJBK0JyQixLQUFLLFNBQUMsUUFBUTtvQkFpQmQsS0FBSyxTQUFDLE9BQU87NEJBU2IsTUFBTTs0QkFNTixNQUFNOzBCQU1OLE1BQU07Ozs7Ozs7O0lBM0hQLHFDQUErQjs7Ozs7O0lBSy9CLHlDQUFtQzs7Ozs7O0lBS25DLHlDQUFrQzs7Ozs7O0lBS2xDLHdDQUFzQzs7Ozs7O0lBS3RDLHNDQUErQjs7Ozs7O0lBSy9CLHFDQUF3Qzs7Ozs7O0lBS3hDLDJDQUE2Qjs7Ozs7O0lBSzdCLG1EQUFxQzs7Ozs7O0lBNEVyQywwQ0FBcUQ7Ozs7Ozs7SUFNckQsMENBQWtEOzs7Ozs7O0lBTWxELHdDQUFnRDs7SUFFaEQsa0NBQVc7O0lBQ1gsbUNBQVk7O0lBQ1oscUNBQWM7O0lBQ2QseUNBQWtCOztJQUNsQixvQ0FBYzs7SUFDZCxtQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25nLXdlYmNhbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZy13ZWItY2FtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmctd2ViLWNhbS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTmdXZWJDYW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIC8qKkNzcyB0byBzdHlsZSB5b3VyIHdlYmNhbVxuICAgKiBUaGlzIHdpbGwgb3ZlcnJpZGUgZXhpc3RpbmcgZGVmYXVsdCBDc3NcbiAgICovXG4gIEBJbnB1dCgpIHN0eWxlQ3NzOiBzdHJpbmcgPSAnJztcblxuICAvKipDc3MgdG8gc3R5bGUgeW91ciB3ZWJjYW0gY29udGFpbmVyXG4gICAqIFRoaXMgd2lsbCBvdmVycmlkZSBleGlzdGluZyBkZWZhdWx0IENzc1xuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyQ3NzOiBzdHJpbmcgPSAnJztcblxuICAvKipUaGlzIGlzIGFuIG9iamVjdCByZWFkIGJ5IFVzZXIgbWVkaWFcbiAgICogVGhpcyB3aWxsIHNldCB5b3VyIGluaXRpYWwgbWVkaWEgUGFyYW1ldGVyc1xuICAgKi9cbiAgQElucHV0KCkgbWVkaWFPcHRpb25zOiBhbnkgPSBudWxsO1xuXG4gIC8qKkVuYWJsZXMgQXVkaW8gdG9vIHdpdGggd2ViY2FtXG4gICAqIEJ1aWxkIHlvdXIgb3duIHBhcmFtZXRlclxuICAgKi9cbiAgQElucHV0KCkgZW5hYmxlQXVkaW86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipFbmFibGVzIGZyYW1lIHJhdGUgY29uZmlndXJhdGlvblxuICAgKiBCdWlsZCB5b3VyIG93biBwYXJhbWV0ZXJcbiAgICovXG4gIEBJbnB1dCgpIGZyYW1lUmF0ZTogYW55ID0gbnVsbDtcblxuICAvKipUeXBlIG9mIHRoZSBjYXB0dXJlZCBpbWFnZVxuICAgKiBCdWlsZCB5b3VyIG93biBpbWFnZSBleHRlbnRpb25cbiAgICovXG4gIEBJbnB1dCgpIG1pbWVUeXBlOiBzdHJpbmcgPSAnaW1hZ2UvcG5nJztcblxuICAvKipUbyBzdWJzY3JpYmUgdG8gd2ViY2FtIGNoYW5nZXNcbiAgICogU3Vic2NyaXB0aW9uIG9iamVjdFxuICAgKi9cbiAgd2ViY2FtU3Vic2NyaWI6IFN1YnNjcmlwdGlvbjtcblxuICAvKipUbyBzdWJzY3JpYmUgc25hcCBjYXB0dXJlXG4gICAqIFN1YnNjcmlwdGlvbiBvYmplY3RcbiAgICovXG4gIHRyaWdnZXJDYXB0dXJlU3Vic2NyaWI6IFN1YnNjcmlwdGlvbjtcblxuICAvKipJbnB1dCBwYXJhbWV0ZXIgdG8gaGFuZGxlIHNuYXAgY2FwdHVyZVxuICAgKiBJbnB1dCBkZWNvcmF0b3JcbiAgICovXG4gIEBJbnB1dCgndHJpZ2dlckNhcHR1cmUnKVxuICBzZXQgdHJpZ2dlckNhcHR1cmUodHJpZ2dlckNhcHR1cmU6IE9ic2VydmFibGU8dm9pZD4pIHtcbiAgICBpZiAodGhpcy50cmlnZ2VyQ2FwdHVyZVN1YnNjcmliKSB7XG4gICAgICB0aGlzLnRyaWdnZXJDYXB0dXJlU3Vic2NyaWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXJDYXB0dXJlU3Vic2NyaWIgPSB0cmlnZ2VyQ2FwdHVyZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy50YWtlcGljdHVyZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqSW5wdXQgcGFyYW1ldGVyIHRvIGhhbmRsZSB3ZWJjYW0gc3RhcnQvc3RvcFxuICAgKiBJbnB1dCBkZWNvcmF0b3JcbiAgICovXG4gIEBJbnB1dCgnd2ViQ2FtQ29udHJvbCcpXG4gIHNldCB3ZWJDYW1Db250cm9sKHdlYkNhbUNvbnRyb2w6IE9ic2VydmFibGU8Ym9vbGVhbj4pIHtcbiAgICBpZiAodGhpcy53ZWJjYW1TdWJzY3JpYikge1xuICAgICAgdGhpcy53ZWJjYW1TdWJzY3JpYi51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHRoaXMud2ViY2FtU3Vic2NyaWIgPSB3ZWJDYW1Db250cm9sLnN1YnNjcmliZShjb250cm9sID0+IHtcbiAgICAgIGlmIChjb250cm9sKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZGVvICYmIHRoaXMudmlkZW8uc3JjT2JqZWN0KSB7XG4gICAgICAgICAgLy8qIGFscmVhZHkgb25cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqUGFyYW1ldGVyIHRvIGdldCBoZWlnaHQgb2YgdGhlIHZpZGVvXG4gICAqIGdldHRlciBvZiBJbnB1dCBkZWNvcmF0b3JcbiAgICovXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG5cbiAgLyoqSW5wdXQgcGFyYW1ldGVyIHRvIGdldCBoZWlnaHQgb2YgdGhlIHZpZGVvXG4gICAqIE5vdCByZXF1aXJlZCBpZiBtZWRpYU9wdGlvbnMgSW5wdXQgZGVjb3JhdG9yIGlzIHNldFxuICAgKiBJbnB1dCBkZWNvcmF0b3JcbiAgICovXG4gIEBJbnB1dCgnaGVpZ2h0JylcbiAgc2V0IGhlaWdodCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICB0aGlzLl9oZWlnaHQgPSB2YWx1ZTtcbiAgICAgIHRoaXMudXBkYXRlVmlldygpO1xuICB9XG5cbiAgLyoqUGFyYW1ldGVyIHRvIGdldCB3aWR0aCBvZiB0aGUgdmlkZW9cbiAgICogZ2V0dGVyIG9mIElucHV0IGRlY29yYXRvclxuICAgKi9cbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xuICB9XG5cbiAgLyoqSW5wdXQgcGFyYW1ldGVyIHRvIGdldCB3aWR0aCBvZiB0aGUgdmlkZW9cbiAgICogTm90IHJlcXVpcmVkIGlmIG1lZGlhT3B0aW9ucyBJbnB1dCBkZWNvcmF0b3IgaXMgc2V0XG4gICAqIElucHV0IGRlY29yYXRvclxuICAgKi9cbiAgQElucHV0KCd3aWR0aCcpXG4gIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgfVxuXG4gIC8qKk91dHB1dCBwYXJhbWV0ZXIgdG8gZW1pdCBpbWFnZSBzcmMgb2YgY2FwdHVyZWQgaW1hZ2VcbiAgICogT3V0cHV0IGRlY29yYXRvclxuICAgKi9cbiAgQE91dHB1dCgpIGNhcHR1cmVkSW1hZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAvKipPdXRwdXQgcGFyYW1ldGVyIHRvIGVtaXQgdmlkZW8gdGFnIG9mIHdlYmNhbVxuICAgKiBUaGlzIGNhbiBiZSB1c2VkIGJ5IHBlb3BsZSB3b3JraW5nIGFyb3VuZCBNYWNoaW5lIGxlYXJuaW5nIGZvciB0cmFpbmluZyBwdXJwb3Nlc1xuICAgKiBPdXRwdXQgZGVjb3JhdG9yXG4gICAqL1xuICBAT3V0cHV0KCkgd2ViQ2FtRWxlbWVudCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIC8qKk91dHB1dCBwYXJhbWV0ZXIgdG8gZW1pdCBlcnJvciBjYXVzZWQgZHVyaW5nIGxpYnJhcnkgcnVuXG4gICAqIFRoaXMgY2FuIGJlIHVzZWZ1bCB0byBkZXRlcm1pbmUgZXJyb3JcbiAgICogT3V0cHV0IGRlY29yYXRvclxuICAgKi9cbiAgQE91dHB1dCgpIGhhbmRsZUVycm9yID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgdmlkZW86IGFueTtcbiAgY2FudmFzOiBhbnk7XG4gIHBhcmFtT2JqOiBhbnk7XG4gIGZyYW1lUmF0ZU9iajogYW55O1xuICBfaGVpZ2h0ID0gNzIwO1xuICBfd2lkdGggPSAxMjgwO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX2hlaWdodCA9IDcyMDtcbiAgICB0aGlzLl93aWR0aCA9IDEyODA7XG4gICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy52aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZ1dlYkNhbVZpZGVvRWxlbWVudCcpO1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25nV2ViQ2FtQ2FudmFzJyk7XG4gICAgbGV0IGN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy52aWRlby5hZGRFdmVudExpc3RlbmVyKCdsb2FkZWRtZXRhZGF0YScsIGZ1bmN0aW9uKCkge1xuICAgICAgbGV0IHZpZDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25nV2ViQ2FtVmlkZW9FbGVtZW50Jyk7XG4gICAgICBjdHgudHJhbnNsYXRlKHZpZC52aWRlb1dpZHRoLCAwKTtcbiAgICAgIGN0eC5zY2FsZSgtMSwgMSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXJ0KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKHRoaXMuc3R5bGVDc3MpIHtcbiAgICAgIHRoaXMudmlkZW8uc3R5bGUgPSB0aGlzLnN0eWxlQ3NzO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250YWluZXJDc3MpIHtcbiAgICAgIGxldCBjb250YWluZXI6IGFueSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZ1dlYkNhbUNvbnRhaW5lcicpO1xuICAgICAgY29udGFpbmVyLnN0eWxlID0gdGhpcy5jb250YWluZXJDc3M7XG4gICAgfVxuICB9XG5cblxuICB0YWtlcGljdHVyZSgpIHtcbiAgICBsZXQgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLndpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0O1xuICAgIGxldCB2aWQ6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZ1dlYkNhbVZpZGVvRWxlbWVudCcpO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKHZpZCwgMCwgMCwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xuXG4gICAgbGV0IGRhdGE6IHN0cmluZyA9IHRoaXMuY2FudmFzLnRvRGF0YVVSTCh0aGlzLm1pbWVUeXBlKTtcbiAgICB0aGlzLmNhcHR1cmVkSW1hZ2UuZW1pdChkYXRhKTtcbiAgfVxuXG4gIHVwZGF0ZVZpZXcoKSB7XG4gICAgdGhpcy5zdG9wKCk7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgaWYgKG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKSB7XG4gICAgICBpZiAodGhpcy5tZWRpYU9wdGlvbnMpIHtcbiAgICAgICAgbGV0IG1lZGlhT3B0aW9uc1BhcnNlZCA9IEpTT04ucGFyc2UodGhpcy5tZWRpYU9wdGlvbnMpO1xuICAgICAgICB0aGlzLnBhcmFtT2JqID0ge1xuICAgICAgICAgIC4uLm1lZGlhT3B0aW9uc1BhcnNlZFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5mcmFtZVJhdGUpIHtcbiAgICAgICAgICBsZXQgZnJhbWVSYXRlUGFyc2VkID0gSlNPTi5wYXJzZSh0aGlzLmZyYW1lUmF0ZSk7XG4gICAgICAgICAgdGhpcy5mcmFtZVJhdGVPYmogPSB7XG4gICAgICAgICAgICAuLi5mcmFtZVJhdGVQYXJzZWRcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mcmFtZVJhdGVPYmogPSB7IGlkZWFsOiAxMCwgbWF4OiAzMCB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGFyYW1PYmogPSB7YXVkaW86IHRoaXMuZW5hYmxlQXVkaW8sIHZpZGVvOiB7XG4gICAgICAgICAgICAgIHdpZHRoOiB7IGlkZWFsOiB0aGlzLndpZHRofSxcbiAgICAgICAgICAgICAgaGVpZ2h0OiB7IGlkZWFsOiB0aGlzLmhlaWdodH0sXG4gICAgICAgICAgICAgIGZyYW1lUmF0ZTogdGhpcy5mcmFtZVJhdGVPYmpcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEodGhpcy5wYXJhbU9iailcbiAgICAgICAgLnRoZW4oc3RyZWFtID0+IHtcbiAgICAgICAgICB0aGlzLnZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcbiAgICAgICAgICBsZXQgdmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25nV2ViQ2FtVmlkZW9FbGVtZW50Jyk7XG4gICAgICAgICAgdGhpcy53ZWJDYW1FbGVtZW50LmVtaXQodmlkKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVFcnJvci5lbWl0KGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgaWYgKHRoaXMudmlkZW8gJiYgdGhpcy52aWRlby5zcmNPYmplY3QpIHtcbiAgICAgIGxldCBzdHJlYW0gPSB0aGlzLnZpZGVvLnNyY09iamVjdDtcbiAgICAgIGxldCB0cmFja3MgPSBzdHJlYW0uZ2V0VHJhY2tzKCk7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdHJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCB0cmFjayA9IHRyYWNrc1tpXTtcbiAgICAgICAgdHJhY2suc3RvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy52aWRlby5zcmNPYmplY3QgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMudmlkZW8gPSBudWxsO1xuICAgIHRoaXMuY2FudmFzID0gbnVsbDtcbiAgICB0aGlzLndlYmNhbVN1YnNjcmliLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy50cmlnZ2VyQ2FwdHVyZVN1YnNjcmliLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxufVxuIl19