import { OnInit, AfterViewInit, OnDestroy, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
export declare class NgWebCamComponent implements OnInit, AfterViewInit, OnDestroy {
    /**Css to style your webcam
     * This will override existing default Css
     */
    styleCss: string;
    /**Css to style your webcam container
     * This will override existing default Css
     */
    containerCss: string;
    /**This is an object read by User media
     * This will set your initial media Parameters
     */
    mediaOptions: any;
    /**Enables Audio too with webcam
     * Build your own parameter
     */
    enableAudio: boolean;
    /**Enables frame rate configuration
     * Build your own parameter
     */
    frameRate: any;
    /**Type of the captured image
     * Build your own image extention
     */
    mimeType: string;
    /**To subscribe to webcam changes
     * Subscription object
     */
    webcamSubscrib: Subscription;
    /**To subscribe snap capture
     * Subscription object
     */
    triggerCaptureSubscrib: Subscription;
    /**Input parameter to handle snap capture
     * Input decorator
     */
    triggerCapture: Observable<void>;
    /**Input parameter to handle webcam start/stop
     * Input decorator
     */
    webCamControl: Observable<boolean>;
    /**Parameter to get height of the video
     * getter of Input decorator
     */
    /**Input parameter to get height of the video
    * Not required if mediaOptions Input decorator is set
    * Input decorator
    */
    height: number;
    /**Parameter to get width of the video
     * getter of Input decorator
     */
    /**Input parameter to get width of the video
    * Not required if mediaOptions Input decorator is set
    * Input decorator
    */
    width: number;
    /**Output parameter to emit image src of captured image
     * Output decorator
     */
    capturedImage: EventEmitter<string>;
    /**Output parameter to emit video tag of webcam
     * This can be used by people working around Machine learning for training purposes
     * Output decorator
     */
    webCamElement: EventEmitter<any>;
    /**Output parameter to emit error caused during library run
     * This can be useful to determine error
     * Output decorator
     */
    handleError: EventEmitter<any>;
    video: any;
    canvas: any;
    paramObj: any;
    frameRateObj: any;
    _height: number;
    _width: number;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    takepicture(): void;
    updateView(): void;
    start(): void;
    stop(): void;
    ngOnDestroy(): void;
}
