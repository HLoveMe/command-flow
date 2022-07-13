(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("rxjs"), require("qrcode-generator"), require("axios"), require("uuid"), require("rxjs/operators"), require("js-base64"));
	else if(typeof define === 'function' && define.amd)
		define(["rxjs", "qrcode-generator", "axios", "uuid", "rxjs/operators", "js-base64"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("rxjs"), require("qrcode-generator"), require("axios"), require("uuid"), require("rxjs/operators"), require("js-base64")) : factory(root["rxjs"], root["qrcode-generator"], root["axios"], root["uuid"], root["rxjs/operators"], root["js-base64"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, (__WEBPACK_EXTERNAL_MODULE_rxjs__, __WEBPACK_EXTERNAL_MODULE_qrcode_generator__, __WEBPACK_EXTERNAL_MODULE_axios__, __WEBPACK_EXTERNAL_MODULE_uuid__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__, __WEBPACK_EXTERNAL_MODULE_js_base64__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Bridge/ConfigTypes.ts":
/*!***********************************!*\
  !*** ./src/Bridge/ConfigTypes.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileType": () => (/* binding */ FileType),
/* harmony export */   "SupportContentType": () => (/* binding */ SupportContentType)
/* harmony export */ });
var FileType;
(function (FileType) {
    FileType["Audio"] = "audio/*";
    FileType["Video"] = "video/*";
    FileType["HTML"] = "text/html";
    FileType["Txt"] = "text/plain";
    FileType["Image"] = "image/*";
    FileType["Csv"] = ".csv";
    FileType["Pdf"] = "application/pdf";
    FileType["Word"] = "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword\uFF0Capplication/vnd.openxmlformats-officedocument.wordprocessingml.document";
    FileType["All"] = "*";
})(FileType || (FileType = {}));
var SupportContentType;
(function (SupportContentType) {
    SupportContentType["JSON"] = "application/json";
    SupportContentType["TEXT"] = "text/plain";
})(SupportContentType || (SupportContentType = {}));


/***/ }),

/***/ "./src/Bridge/Difference/index.ts":
/*!****************************************!*\
  !*** ./src/Bridge/Difference/index.ts ***!
  \****************************************/
/***/ (() => {



/***/ }),

/***/ "./src/Bridge/Index.ts":
/*!*****************************!*\
  !*** ./src/Bridge/Index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Platform_Node_Mobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Platform/Node/Mobile */ "./src/Bridge/Platform/Node/Mobile.ts");
/* harmony import */ var _Platform_Node_PC__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Platform/Node/PC */ "./src/Bridge/Platform/Node/PC.ts");
/* harmony import */ var _Platform_Web_Mobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Platform/Web/Mobile */ "./src/Bridge/Platform/Web/Mobile.ts");
/* harmony import */ var _Platform_Web_PC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Platform/Web/PC */ "./src/Bridge/Platform/Web/PC.ts");
/* harmony import */ var _Difference_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Difference/index */ "./src/Bridge/Difference/index.ts");
/* harmony import */ var _Difference_index__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Difference_index__WEBPACK_IMPORTED_MODULE_5__);






var runConfig = (0,_Util_Equipment__WEBPACK_IMPORTED_MODULE_0__.PlatformSelect)({
    web: { pc: _Platform_Web_PC__WEBPACK_IMPORTED_MODULE_4__.PCWebBridge, mobile: _Platform_Web_Mobile__WEBPACK_IMPORTED_MODULE_3__.MobileWebBridge },
    node: { pc: _Platform_Node_PC__WEBPACK_IMPORTED_MODULE_2__.PCNodejsBridge, mobile: _Platform_Node_Mobile__WEBPACK_IMPORTED_MODULE_1__.MobileNodejsBridge },
});
var Target = runConfig[_Util_Equipment__WEBPACK_IMPORTED_MODULE_0__.isPC ? 'pc' : 'mobile'];
var Platform = Reflect.construct(Target, []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Platform);


/***/ }),

/***/ "./src/Bridge/Platform/BasePlatform.ts":
/*!*********************************************!*\
  !*** ./src/Bridge/Platform/BasePlatform.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlatformBridge": () => (/* binding */ PlatformBridge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode-generator */ "qrcode-generator");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Hardware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hardware */ "./src/Bridge/Platform/Hardware.ts");






var PlatformBridge = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(PlatformBridge, _super);
    function PlatformBridge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlatformBridge.prototype.createQrCode = function (context, option) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (sub) {
            var _a;
            var width = (_a = option === null || option === void 0 ? void 0 : option.SideLength) !== null && _a !== void 0 ? _a : 200;
            var margin = 2;
            var qrCode = qrcode_generator__WEBPACK_IMPORTED_MODULE_2__((option === null || option === void 0 ? void 0 : option.type) || 4, (option === null || option === void 0 ? void 0 : option.Level) || "H");
            qrCode.addData((context !== null && context !== void 0 ? context : ""));
            qrCode.make();
            var moduleCount = qrCode.getModuleCount();
            var cellSize = (width - margin * 2) / moduleCount;
            var base64 = qrCode.createDataURL(cellSize, margin);
            sub.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.StringObject(base64));
            sub.complete();
            return {
                unsubscribe: function () { return sub.unsubscribe(); },
            };
        });
    };
    PlatformBridge.prototype.loadRunInfo = function () {
        throw new Error("Method not implemented.");
    };
    PlatformBridge.prototype.runCommand = function (command, option) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
            var result = null;
            var error = null;
            var status = false;
            try {
                result = eval(command === null || command === void 0 ? void 0 : command.toString());
                status = true;
            }
            catch (_error) {
                error = _error;
                status = false;
            }
            finally {
                subscriber.next({
                    result: result,
                    status: status,
                    error: error,
                    command: command
                });
                subscriber.complete();
            }
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); }
            };
        });
    };
    PlatformBridge.prototype.open = function (url, option) {
        throw new Error("Method not implemented.");
    };
    PlatformBridge.prototype.loadFile = function (url, option) {
        throw new Error("Method not implemented.");
    };
    PlatformBridge.prototype.fetch = function (req) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
            axios__WEBPACK_IMPORTED_MODULE_3___default().request(req)
                .then(function (response) {
                var error = null;
                var data = null;
                var content = {};
                if (response.status !== 200) {
                    error = new Error("".concat(response.status, " ").concat(response.statusText));
                }
                else {
                    data = response.data;
                }
                content.data = data;
                content.error = error;
                content.response = response;
                subscriber.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget(content));
                subscriber.complete();
            })
                .catch(function (error) {
                subscriber.error(error);
            });
            return {
                unsubscribe: function () {
                    subscriber.unsubscribe();
                }
            };
        });
    };
    return PlatformBridge;
}(_Hardware__WEBPACK_IMPORTED_MODULE_4__.HardwareBase));



/***/ }),

/***/ "./src/Bridge/Platform/Hardware.ts":
/*!*****************************************!*\
  !*** ./src/Bridge/Platform/Hardware.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HardwareBase": () => (/* binding */ HardwareBase)
/* harmony export */ });
var HardwareBase = (function () {
    function HardwareBase() {
    }
    HardwareBase.prototype.takePhoto = function (option) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.recordVideo = function (option) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.getPhotos = function () {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.getCurrentPosition = function () {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.watchPosition = function (option) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.closePosition = function () {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.recordAudio = function () {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.stopAudio = function () {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.getFile = function (option) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.startVibrator = function (option) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.stopVibrator = function () {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.getSystemInfo = function () {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.getVolume = function () {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.setVolume = function (volume) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.getBrightness = function () {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.setBrightness = function (brightness) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.scanBluetooth = function () {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.connectBluetooth = function (device) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.bluetoothSendData = function (data) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.bluetoothReceiveData = function (device) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.bluetoothClose = function (device) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.speechInit = function (option) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.speak = function (text) {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.stopSpeak = function () {
        throw new Error("Method not implemented.");
    };
    HardwareBase.prototype.clearSpeech = function () {
        throw new Error("Method not implemented.");
    };
    return HardwareBase;
}());



/***/ }),

/***/ "./src/Bridge/Platform/Node/Mobile.ts":
/*!********************************************!*\
  !*** ./src/Bridge/Platform/Node/Mobile.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileNodejsBridge": () => (/* binding */ MobileNodejsBridge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Object */ "./src/Object/index.ts");
/* harmony import */ var _BasePlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasePlatform */ "./src/Bridge/Platform/BasePlatform.ts");




var MobileNodejsBridge = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(MobileNodejsBridge, _super);
    function MobileNodejsBridge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileNodejsBridge.prototype.open = function (url) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _Object__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(false));
    };
    MobileNodejsBridge.prototype.loadFile = function (url, option) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _Object__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget({
            total: 0,
            loaded: 0,
            data: new ArrayBuffer(0),
            finish: true,
            file: undefined,
        }));
    };
    return MobileNodejsBridge;
}(_BasePlatform__WEBPACK_IMPORTED_MODULE_2__.PlatformBridge));



/***/ }),

/***/ "./src/Bridge/Platform/Node/PC.ts":
/*!****************************************!*\
  !*** ./src/Bridge/Platform/Node/PC.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PCNodejsBridge": () => (/* binding */ PCNodejsBridge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _BasePlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BasePlatform */ "./src/Bridge/Platform/BasePlatform.ts");


var PCNodejsBridge = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PCNodejsBridge, _super);
    function PCNodejsBridge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PCNodejsBridge;
}(_BasePlatform__WEBPACK_IMPORTED_MODULE_0__.PlatformBridge));



/***/ }),

/***/ "./src/Bridge/Platform/Web/Mobile.ts":
/*!*******************************************!*\
  !*** ./src/Bridge/Platform/Web/Mobile.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileWebBridge": () => (/* binding */ MobileWebBridge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _WebBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebBase */ "./src/Bridge/Platform/Web/WebBase.ts");


var MobileWebBridge = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(MobileWebBridge, _super);
    function MobileWebBridge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MobileWebBridge;
}(_WebBase__WEBPACK_IMPORTED_MODULE_0__.WebBridge));



/***/ }),

/***/ "./src/Bridge/Platform/Web/PC.ts":
/*!***************************************!*\
  !*** ./src/Bridge/Platform/Web/PC.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PCWebBridge": () => (/* binding */ PCWebBridge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _WebBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebBase */ "./src/Bridge/Platform/Web/WebBase.ts");


var PCWebBridge = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PCWebBridge, _super);
    function PCWebBridge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PCWebBridge;
}(_WebBase__WEBPACK_IMPORTED_MODULE_0__.WebBridge));



/***/ }),

/***/ "./src/Bridge/Platform/Web/WebBase.ts":
/*!********************************************!*\
  !*** ./src/Bridge/Platform/Web/WebBase.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebBridge": () => (/* binding */ WebBridge)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Object */ "./src/Object/index.ts");
/* harmony import */ var _BasePlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasePlatform */ "./src/Bridge/Platform/BasePlatform.ts");




var WebBridge = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(WebBridge, _super);
    function WebBridge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebBridge.prototype.open = function (url) {
        var result = window.open(url, "__blank");
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _Object__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(result !== null));
    };
    WebBridge.prototype.loadFile = function (url, option) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
            var input = document.createElement("input");
            input.type = "file";
            input.id = "_temp_input_select";
            input.accept = (option === null || option === void 0 ? void 0 : option.type) || "*";
            input.style.display = "none";
            document.body.append(input);
            input.addEventListener("change", function (_) {
                var reader = new FileReader();
                var file = input.files[0];
                reader.onprogress = function (info) {
                    var total = info.total, loaded = info.loaded;
                    var data = reader.result;
                    subscriber.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget({
                        total: total,
                        loaded: loaded,
                        data: data,
                        finish: false,
                        file: file
                    }));
                };
                reader.onload = function (info) {
                    var data = reader.result;
                    var total = info.total, loaded = info.loaded;
                    subscriber.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget({ total: total, loaded: loaded, data: data, finish: true, file: file }));
                    subscriber.complete();
                };
                reader.onerror = function (ev) {
                    subscriber.error(ev);
                };
                reader.readAsArrayBuffer(file);
            });
            input.click();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    return WebBridge;
}(_BasePlatform__WEBPACK_IMPORTED_MODULE_2__.PlatformBridge));



/***/ }),

/***/ "./src/Configs/index.ts":
/*!******************************!*\
  !*** ./src/Configs/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultRunConfig": () => (/* binding */ DefaultRunConfig)
/* harmony export */ });
/* harmony import */ var _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Bridge/ConfigTypes */ "./src/Bridge/ConfigTypes.ts");

var DefaultRunConfig = {
    development: true,
    environment: {},
    workConfig: {
        QRCodeWork: {
            type: 4,
            Level: "H",
            SideLength: 100,
        },
        RunCommandWork: {},
        LoadFileWork: {
            type: _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_0__.FileType.All
        },
        FetchWork: {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        },
    },
};


/***/ }),

/***/ "./src/Context.ts":
/*!************************!*\
  !*** ./src/Context.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types */ "./src/Types.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Configs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Configs */ "./src/Configs/index.ts");
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Object */ "./src/Object/index.ts");
/* harmony import */ var _Bridge_Index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Bridge/Index */ "./src/Bridge/Index.ts");
/* harmony import */ var _Works_ExtendsWorks_BeginWork__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Works/ExtendsWorks/BeginWork */ "./src/Works/ExtendsWorks/BeginWork.ts");
/* harmony import */ var _Object_valueUtil__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Object/valueUtil */ "./src/Object/valueUtil.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__);









var Context = (function () {
    function Context(runOptions) {
        var _this = this;
        this.status = _Types__WEBPACK_IMPORTED_MODULE_0__.WorkType.WorkRunStatus.INIT;
        this.platform = _Bridge_Index__WEBPACK_IMPORTED_MODULE_4__["default"];
        this.runConstant = new Map();
        this.works = [];
        this.msgChannel = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.pools = [];
        this.runOptions = (runOptions || _Configs__WEBPACK_IMPORTED_MODULE_2__.DefaultRunConfig);
        var sub = this.msgChannel.subscribe({
            next: function (value) { return _this.workMessage(value); },
            error: function (error) { return _this.workError(error); },
        });
        this.pools.push(sub);
        this.addWork(new _Works_ExtendsWorks_BeginWork__WEBPACK_IMPORTED_MODULE_5__.BeginWork());
    }
    Context.prototype.addVariable = function (from, name, value) {
        var w_map = this.runConstant.get(from.uuid);
        !w_map && this.runConstant.set(from.uuid, new Map());
        this.runConstant.get(from.uuid).set(name, value);
    };
    Context.prototype.workMessage = function (input) {
        console.log('msgChannel', input);
    };
    Context.prototype.workError = function (error) {
        console.log('msgChannelError', error);
        this.stopWorkChain();
    };
    Context.prototype.addWorkLog = function (tap) {
        return this.msgChannel.subscribe(tap);
    };
    Context.prototype.sendLog = function (status) {
        var log = {
            date: new Date(),
            work: status.work.filter(function ($1) { return $1 === null || $1 === void 0 ? void 0 : $1.name; }),
            desc: status.desc,
            value: status.value,
            error: status.error,
        };
        this.msgChannel.next(log);
    };
    Context.prototype.addWork = function (work) {
        if (work.constructor.isAble &&
            work.constructor.isAble() === false) {
            var desc = '[content][Func:addWork][work isAble is false]';
            return this.sendLog({
                content: this,
                work: [],
                desc: desc,
                value: null,
                error: new Error(desc),
            });
        }
        if (this.status !== _Types__WEBPACK_IMPORTED_MODULE_0__.WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: [],
                desc: '[content][Func:addWork][context status is not init]',
                value: new _Object__WEBPACK_IMPORTED_MODULE_3__.BooleanObject(false),
            });
        }
        work.context = this;
        this.works.push(work);
    };
    Context.prototype.addWorks = function () {
        var works = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            works[_i] = arguments[_i];
        }
        works.forEach(this.addWork);
    };
    Context.prototype.prepareWorks = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.status !== _Types__WEBPACK_IMPORTED_MODULE_0__.WorkType.WorkRunStatus.INIT) {
                            return [2, this.sendLog({
                                    content: this,
                                    work: [],
                                    desc: '[content][Func:prepareWorks][context status is not init]',
                                    value: new _Object__WEBPACK_IMPORTED_MODULE_3__.BooleanObject(false),
                                })];
                        }
                        return [4, Promise.all(this.works.map(function ($1, index, source) {
                                var before = source[index - 1];
                                var after = source[index + 1];
                                return $1.prepare(before, after);
                            }))];
                    case 1:
                        _a.sent();
                        this.status = _Types__WEBPACK_IMPORTED_MODULE_0__.WorkType.WorkRunStatus.READY;
                        return [2];
                }
            });
        });
    };
    Context.prototype.dispatch = function (input) {
        if (this.status === _Types__WEBPACK_IMPORTED_MODULE_0__.WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: [],
                desc: '[context][Func:run][run status is not ready  or 已经初始化]',
                value: new _Object__WEBPACK_IMPORTED_MODULE_3__.BooleanObject(false),
            });
        }
        var inputWork = this.works[0];
        if (inputWork) {
            inputWork.startRun((0,_Object_valueUtil__WEBPACK_IMPORTED_MODULE_6__.decide)(input));
        }
        this.status = _Types__WEBPACK_IMPORTED_MODULE_0__.WorkType.WorkRunStatus.RUNNING;
    };
    Context.prototype.stopWorkChain = function () {
        var _this = this;
        var that = this;
        return new Promise(function (resolve, reject) {
            var taskUns = _this.works.map(function ($1) {
                return $1.stopWork();
            });
            var isSuccess = false;
            var errors = [];
            (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.forkJoin)(taskUns)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1))
                .subscribe({
                next: function (values) {
                    isSuccess = values.every(function ($1, index) {
                        if ($1 === true)
                            return true;
                        errors.push(_this.works[index]);
                        return false;
                    });
                    resolve(isSuccess);
                },
                error: function (error) {
                    reject(error);
                },
                complete: function () {
                    _this.sendLog({
                        content: that,
                        work: errors,
                        desc: '[content][Func:stopWorkChain]',
                        value: new _Object__WEBPACK_IMPORTED_MODULE_3__.ObjectTarget({
                            id: 'stopWorkChain',
                            value: (0,_Object_valueUtil__WEBPACK_IMPORTED_MODULE_6__.decide)(isSuccess),
                            option: {},
                        }),
                    });
                },
            });
        });
    };
    Context.prototype.clear = function () {
        this.pools.forEach(function ($1) { return $1.unsubscribe(); });
    };
    return Context;
}());



/***/ }),

/***/ "./src/Object/Able/Base/ArrayObject.ts":
/*!*********************************************!*\
  !*** ./src/Object/Able/Base/ArrayObject.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayObject": () => (/* binding */ ArrayObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");



var ArrayWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Array, ['length']);
var _ArrayObject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(_ArrayObject, _super);
    function _ArrayObject() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var _this = this;
        var first = values[0];
        var firstIsArray = first instanceof Array;
        var init = null;
        if (firstIsArray && values.length === 1) {
            init = first;
        }
        else {
            init = new (Array.bind.apply(Array, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([void 0], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(values), false)))();
        }
        _this = _super.call(this, init) || this;
        _this._value = init;
        return _this;
    }
    _ArrayObject.prototype.len = function () {
        return this._value.length;
    };
    _ArrayObject.prototype.first = function () {
        return this._value[0];
    };
    _ArrayObject.prototype.last = function () {
        return this._value[this._value.length - 1];
    };
    _ArrayObject.prototype.valueOfIndex = function (index) {
        return this._value[index];
    };
    _ArrayObject.prototype.valueOf = function () {
        return this._value;
    };
    Object.defineProperty(_ArrayObject.prototype, "length", {
        get: function () {
            return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.length);
        },
        enumerable: false,
        configurable: true
    });
    return _ArrayObject;
}(ArrayWrapper));
var ArrayObject = _ArrayObject;



/***/ }),

/***/ "./src/Object/Able/Base/BooleanObject.ts":
/*!***********************************************!*\
  !*** ./src/Object/Able/Base/BooleanObject.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BooleanObject": () => (/* binding */ BooleanObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");


var BooleanObject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(BooleanObject, _super);
    function BooleanObject(value) {
        if (value === void 0) { value = false; }
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    BooleanObject.prototype.valueOf = function () {
        return !!this._value;
    };
    return BooleanObject;
}(_ObjectTarget__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget));



/***/ }),

/***/ "./src/Object/Able/Base/DataObject.ts":
/*!********************************************!*\
  !*** ./src/Object/Able/Base/DataObject.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataObject": () => (/* binding */ DataObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");


var DataObject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(DataObject, _super);
    function DataObject(value) {
        if (value === void 0) { value = new ArrayBuffer(0); }
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    DataObject.prototype.data = function () {
        return this.valueOf();
    };
    DataObject.prototype.valueOf = function () {
        return this._value;
    };
    return DataObject;
}(_ObjectTarget__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget));



/***/ }),

/***/ "./src/Object/Able/Base/DateObject.ts":
/*!********************************************!*\
  !*** ./src/Object/Able/Base/DateObject.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DateObject": () => (/* binding */ DateObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");



var DateWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Date);
var _DateObject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(_DateObject, _super);
    function _DateObject(value) {
        if (value === void 0) { value = new Date(); }
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    _DateObject.prototype.valueOf = function () {
        return this._value;
    };
    _DateObject.prototype.toLocaleString = function () {
        return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.toLocaleDateString());
    };
    _DateObject.prototype.timestamp = function () {
        return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.getDate());
    };
    return _DateObject;
}(DateWrapper));
var DateObject = _DateObject;



/***/ }),

/***/ "./src/Object/Able/Base/MapObject.ts":
/*!*******************************************!*\
  !*** ./src/Object/Able/Base/MapObject.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MapObject": () => (/* binding */ MapObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");



var MapWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Map, ['size']);
var _MapObject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(_MapObject, _super);
    function _MapObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    _MapObject.prototype.valueOf = function () {
        return this._value;
    };
    _MapObject.prototype.len = function () {
        return this._value.size;
    };
    Object.defineProperty(_MapObject.prototype, "size", {
        get: function () {
            return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.size);
        },
        enumerable: false,
        configurable: true
    });
    return _MapObject;
}(MapWrapper));
var MapObject = _MapObject;



/***/ }),

/***/ "./src/Object/Able/Base/NULLObject.ts":
/*!********************************************!*\
  !*** ./src/Object/Able/Base/NULLObject.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NULLObject": () => (/* binding */ NULLObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");


var NULLObject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(NULLObject, _super);
    function NULLObject(value) {
        if (value === void 0) { value = null; }
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    NULLObject.prototype.valueOf = function () {
        return this._value;
    };
    NULLObject.prototype.merge = function (target) {
        return new NULLObject(null);
    };
    NULLObject.prototype.isTruly = function () {
        return !!this._value;
    };
    NULLObject.prototype.isNull = function () {
        return this._value === null;
    };
    NULLObject.prototype.isUndefined = function () {
        return this._value === undefined;
    };
    return NULLObject;
}(_ObjectTarget__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget));



/***/ }),

/***/ "./src/Object/Able/Base/NumberObject.ts":
/*!**********************************************!*\
  !*** ./src/Object/Able/Base/NumberObject.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberObject": () => (/* binding */ NumberObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/Object/util.ts");
/* harmony import */ var _BooleanObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BooleanObject */ "./src/Object/Able/Base/BooleanObject.ts");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");




var NumberWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_2__.createExtendsConstruct)(Number);
var _NumberObject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(_NumberObject, _super);
    function _NumberObject(value) {
        if (value === void 0) { value = 1; }
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    _NumberObject_1 = _NumberObject;
    Object.defineProperty(_NumberObject.prototype, Symbol.toStringTag, {
        get: function () {
            return _super.prototype[Symbol.toStringTag];
        },
        enumerable: false,
        configurable: true
    });
    _NumberObject.prototype.valueOf = function () {
        return this._value;
    };
    _NumberObject.prototype.json = function () {
        return _super.prototype.json.call(this);
    };
    _NumberObject.prototype.compare = function (type, target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(false);
    };
    _NumberObject.prototype.more = function (target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value > target._value);
    };
    _NumberObject.prototype.equal = function (target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value === target._value);
    };
    _NumberObject.prototype.less = function (target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value < target._value);
    };
    _NumberObject.prototype.moreEqual = function (target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value >= target._value);
    };
    _NumberObject.prototype.lessEqual = function (target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value <= target._value);
    };
    _NumberObject.prototype.calc = function (type, target) {
        return new _NumberObject_1(0);
    };
    _NumberObject.prototype.plus = function (target) {
        return new _NumberObject_1(this._value + target._value);
    };
    _NumberObject.prototype.reduce = function (target) {
        return new _NumberObject_1(this._value - target._value);
    };
    _NumberObject.prototype.multi = function (target) {
        return new _NumberObject_1(this._value * target._value);
    };
    _NumberObject.prototype.divide = function (target) {
        return new _NumberObject_1(target._value === 0 ? Infinity : this._value / target._value);
    };
    var _NumberObject_1;
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        _util__WEBPACK_IMPORTED_MODULE_0__.onlyDeclaration,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [String, Object]),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject)
    ], _NumberObject.prototype, "compare", null);
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        _util__WEBPACK_IMPORTED_MODULE_0__.onlyDeclaration,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:type", Function),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [String, Object]),
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:returntype", _NumberObject)
    ], _NumberObject.prototype, "calc", null);
    _NumberObject = _NumberObject_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
        _util__WEBPACK_IMPORTED_MODULE_0__.CalcUnit,
        _util__WEBPACK_IMPORTED_MODULE_0__.CompareUnit,
        (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [Number])
    ], _NumberObject);
    return _NumberObject;
}(NumberWrapper));
var NumberObject = _NumberObject;



/***/ }),

/***/ "./src/Object/Able/Base/ObjectTarget.ts":
/*!**********************************************!*\
  !*** ./src/Object/Able/Base/ObjectTarget.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ObjectTarget": () => (/* binding */ ObjectTarget)
/* harmony export */ });
var ObjectTarget = (function () {
    function ObjectTarget(value) {
        if (value === void 0) { value = {}; }
        this._value = value;
    }
    Object.defineProperty(ObjectTarget.prototype, Symbol.toStringTag, {
        get: function () {
            return 'flow-object';
        },
        enumerable: false,
        configurable: true
    });
    ObjectTarget.prototype.valueOf = function () {
        return this._value;
    };
    ObjectTarget.prototype.json = function () {
        var StringObject = (__webpack_require__(/*! ./StringObject */ "./src/Object/Able/Base/StringObject.ts").StringObject);
        try {
            return new StringObject(JSON.stringify(this._value));
        }
        catch (error) {
            return new StringObject("{}");
        }
    };
    return ObjectTarget;
}());



/***/ }),

/***/ "./src/Object/Able/Base/SetObject.ts":
/*!*******************************************!*\
  !*** ./src/Object/Able/Base/SetObject.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetObject": () => (/* binding */ SetObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");



var SetWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Set, ['size']);
var _SetObject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(_SetObject, _super);
    function _SetObject(source) {
        var _this = _super.call(this) || this;
        _this._value = new Set(source);
        return _this;
    }
    _SetObject.prototype.len = function () {
        return this._value.size;
    };
    _SetObject.prototype.valueOf = function () {
        return this._value;
    };
    Object.defineProperty(_SetObject.prototype, "size", {
        get: function () {
            return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.size);
        },
        enumerable: false,
        configurable: true
    });
    return _SetObject;
}(SetWrapper));
var SetObject = _SetObject;



/***/ }),

/***/ "./src/Object/Able/Base/StringObject.ts":
/*!**********************************************!*\
  !*** ./src/Object/Able/Base/StringObject.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StringObject": () => (/* binding */ StringObject)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");



var StringWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(String, ['length']);
var _StringObject = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(_StringObject, _super);
    function _StringObject(value) {
        var _this = _super.call(this) || this;
        _this._value = value;
        return _this;
    }
    _StringObject.prototype.valueOf = function () {
        return this._value;
    };
    Object.defineProperty(_StringObject.prototype, "length", {
        get: function () {
            return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.length);
        },
        enumerable: false,
        configurable: true
    });
    return _StringObject;
}(StringWrapper));
var StringObject = _StringObject;



/***/ }),

/***/ "./src/Object/Able/Control.ts":
/*!************************************!*\
  !*** ./src/Object/Able/Control.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ControlFlow": () => (/* binding */ ControlFlow)
/* harmony export */ });
var ControlFlow;
(function (ControlFlow) {
    var CompareEnum;
    (function (CompareEnum) {
        CompareEnum["More"] = "more";
        CompareEnum["Equal"] = "equal";
        CompareEnum["Less"] = "less";
        CompareEnum["MoreEqual"] = "moreEqual";
        CompareEnum["LessEqual"] = "lessEqual";
    })(CompareEnum = ControlFlow.CompareEnum || (ControlFlow.CompareEnum = {}));
    var CalcEnum;
    (function (CalcEnum) {
        CalcEnum["Plus"] = "plus";
        CalcEnum["Reduce"] = "reduce";
        CalcEnum["Multi"] = "multi";
        CalcEnum["Divide"] = "divide";
    })(CalcEnum = ControlFlow.CalcEnum || (ControlFlow.CalcEnum = {}));
})(ControlFlow || (ControlFlow = {}));


/***/ }),

/***/ "./src/Object/Able/index.ts":
/*!**********************************!*\
  !*** ./src/Object/Able/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayObject": () => (/* reexport safe */ _Base_ArrayObject__WEBPACK_IMPORTED_MODULE_1__.ArrayObject),
/* harmony export */   "BooleanObject": () => (/* reexport safe */ _Base_BooleanObject__WEBPACK_IMPORTED_MODULE_6__.BooleanObject),
/* harmony export */   "DataObject": () => (/* reexport safe */ _Base_DataObject__WEBPACK_IMPORTED_MODULE_8__.DataObject),
/* harmony export */   "DateObject": () => (/* reexport safe */ _Base_DateObject__WEBPACK_IMPORTED_MODULE_7__.DateObject),
/* harmony export */   "MapObject": () => (/* reexport safe */ _Base_MapObject__WEBPACK_IMPORTED_MODULE_2__.MapObject),
/* harmony export */   "NULLObject": () => (/* reexport safe */ _Base_NULLObject__WEBPACK_IMPORTED_MODULE_9__.NULLObject),
/* harmony export */   "NumberObject": () => (/* reexport safe */ _Base_NumberObject__WEBPACK_IMPORTED_MODULE_4__.NumberObject),
/* harmony export */   "ObjectTarget": () => (/* reexport safe */ _Base_ObjectTarget__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget),
/* harmony export */   "SetObject": () => (/* reexport safe */ _Base_SetObject__WEBPACK_IMPORTED_MODULE_3__.SetObject),
/* harmony export */   "StringObject": () => (/* reexport safe */ _Base_StringObject__WEBPACK_IMPORTED_MODULE_5__.StringObject),
/* harmony export */   "createExtendsConstruct": () => (/* reexport safe */ _extend_util__WEBPACK_IMPORTED_MODULE_10__.createExtendsConstruct),
/* harmony export */   "createExtendsInstance": () => (/* reexport safe */ _extend_util__WEBPACK_IMPORTED_MODULE_10__.createExtendsInstance)
/* harmony export */ });
/* harmony import */ var _Base_ObjectTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Base/ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");
/* harmony import */ var _Base_ArrayObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Base/ArrayObject */ "./src/Object/Able/Base/ArrayObject.ts");
/* harmony import */ var _Base_MapObject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base/MapObject */ "./src/Object/Able/Base/MapObject.ts");
/* harmony import */ var _Base_SetObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Base/SetObject */ "./src/Object/Able/Base/SetObject.ts");
/* harmony import */ var _Base_NumberObject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Base/NumberObject */ "./src/Object/Able/Base/NumberObject.ts");
/* harmony import */ var _Base_StringObject__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Base/StringObject */ "./src/Object/Able/Base/StringObject.ts");
/* harmony import */ var _Base_BooleanObject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Base/BooleanObject */ "./src/Object/Able/Base/BooleanObject.ts");
/* harmony import */ var _Base_DateObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Base/DateObject */ "./src/Object/Able/Base/DateObject.ts");
/* harmony import */ var _Base_DataObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Base/DataObject */ "./src/Object/Able/Base/DataObject.ts");
/* harmony import */ var _Base_NULLObject__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Base/NULLObject */ "./src/Object/Able/Base/NULLObject.ts");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../extend-util */ "./src/Object/extend-util.ts");














/***/ }),

/***/ "./src/Object/extend-util.ts":
/*!***********************************!*\
  !*** ./src/Object/extend-util.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createExtendsConstruct": () => (/* binding */ createExtendsConstruct),
/* harmony export */   "createExtendsInstance": () => (/* binding */ createExtendsInstance)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/Object/util.ts");
/* harmony import */ var _Able__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Able */ "./src/Object/Able/index.ts");



var ExtendsMap;
function createExtendsConstruct(target, exclude) {
    if (exclude === void 0) { exclude = []; }
    if (!ExtendsMap)
        ExtendsMap = new Map();
    if (ExtendsMap.has(target))
        return ExtendsMap.get(target);
    var Enum = {};
    exclude = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(exclude), false), ['constructor', 'valueOf'], false);
    Object.keys(Object.getOwnPropertyDescriptors(target.prototype)).forEach(function ($1) {
        if (!exclude.includes($1) && typeof $1 !== 'symbol') {
            Enum[$1] = $1;
        }
    });
    var KV = (function (_super) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(KV, _super);
        function KV(value) {
            if (value === void 0) { value = {}; }
            var _this = _super.call(this) || this;
            _this._value = value !== null && value !== void 0 ? value : {};
            return _this;
        }
        KV = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
            (0,_util__WEBPACK_IMPORTED_MODULE_0__.Unit)(Enum),
            (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Object])
        ], KV);
        return KV;
    }(_Able__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget));
    ExtendsMap.set(target, KV);
    return KV;
}
function createExtendsInstance(target, construct, exclude) {
    if (exclude === void 0) { exclude = []; }
    var DateDome = createExtendsConstruct(target, exclude);
    return Reflect.construct(DateDome, construct);
}


/***/ }),

/***/ "./src/Object/index.ts":
/*!*****************************!*\
  !*** ./src/Object/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.ArrayObject),
/* harmony export */   "BooleanObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.BooleanObject),
/* harmony export */   "DataObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.DataObject),
/* harmony export */   "DateObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.DateObject),
/* harmony export */   "MapObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.MapObject),
/* harmony export */   "NULLObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.NULLObject),
/* harmony export */   "NumberObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.NumberObject),
/* harmony export */   "ObjectTarget": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget),
/* harmony export */   "SetObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.SetObject),
/* harmony export */   "StringObject": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.StringObject),
/* harmony export */   "createExtendsConstruct": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.createExtendsConstruct),
/* harmony export */   "createExtendsInstance": () => (/* reexport safe */ _Able__WEBPACK_IMPORTED_MODULE_1__.createExtendsInstance)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/Object/types.ts");
/* harmony import */ var _Able__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Able */ "./src/Object/Able/index.ts");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend-util */ "./src/Object/extend-util.ts");





/***/ }),

/***/ "./src/Object/types.ts":
/*!*****************************!*\
  !*** ./src/Object/types.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./src/Object/util.ts":
/*!****************************!*\
  !*** ./src/Object/util.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalcUnit": () => (/* binding */ CalcUnit),
/* harmony export */   "CompareUnit": () => (/* binding */ CompareUnit),
/* harmony export */   "Unit": () => (/* binding */ Unit),
/* harmony export */   "onlyDeclaration": () => (/* binding */ onlyDeclaration),
/* harmony export */   "onlyDeclarationTag": () => (/* binding */ onlyDeclarationTag)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Able__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Able */ "./src/Object/Able/index.ts");
/* harmony import */ var _Able_Control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Able/Control */ "./src/Object/Able/Control.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valueUtil */ "./src/Object/valueUtil.ts");




var onlyDeclarationTag = 'onlyDeclaration';
function onlyDeclaration(target, name, dec) {
    dec.value.declaration = onlyDeclarationTag;
}
function CompareUnit(host) {
    var _a;
    Object.keys(_Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CompareEnum).forEach(function (item) {
        var key = _Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CompareEnum[item];
        var comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
            host.prototype[key] = function () { return new _Able__WEBPACK_IMPORTED_MODULE_0__.BooleanObject(false); };
        }
    });
    if (((_a = host.prototype.compare) === null || _a === void 0 ? void 0 : _a.declaration) === onlyDeclarationTag ||
        !!host.prototype.compare === false)
        host.prototype.compare = function (type, target) {
            var _a;
            var execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
function CalcUnit(host) {
    var _a;
    Object.keys(_Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CalcEnum).forEach(function (item) {
        var key = _Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CalcEnum[item];
        var comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
            host.prototype[key] = function () { return new _Able__WEBPACK_IMPORTED_MODULE_0__.NumberObject(0); };
        }
    });
    if (((_a = host.prototype.calc) === null || _a === void 0 ? void 0 : _a.declaration) === onlyDeclarationTag ||
        !!host.prototype.calc === false)
        host.prototype.calc = function (type, target) {
            var _a;
            var execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
function Unit(target) {
    var execName = 'execFunction';
    return function (host) {
        var _a;
        Object.keys(target).forEach(function (item) {
            var key = target[item];
            var comFunction = host.prototype[key];
            if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
                host.prototype[key] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var value = this.valueOf();
                    var execFunc = value[key];
                    var result;
                    if (typeof execFunc === 'function') {
                        result = execFunc.bind(value).apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(args), false));
                    }
                    else
                        result = value;
                    return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_2__.decide)(result);
                };
            }
        });
        if (((_a = host.prototype[execName]) === null || _a === void 0 ? void 0 : _a.declaration) === onlyDeclarationTag ||
            !!host.prototype[execName] === false)
            host.prototype[execName] = function (type) {
                var _a;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
                if (execFunc && typeof execFunc === 'function')
                    return execFunc.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__read)(args), false));
                return false;
            };
    };
}


/***/ }),

/***/ "./src/Object/valueUtil.ts":
/*!*********************************!*\
  !*** ./src/Object/valueUtil.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decide": () => (/* binding */ decide),
/* harmony export */   "isAbleType": () => (/* binding */ isAbleType)
/* harmony export */ });
/* harmony import */ var _Able__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Able */ "./src/Object/Able/index.ts");

var ObjectMap = null;
var init = function () {
    if (ObjectMap === null) {
        ObjectMap = {
            '[object Object]': _Able__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget,
            '[object Map]': _Able__WEBPACK_IMPORTED_MODULE_0__.MapObject,
            '[object Set]': _Able__WEBPACK_IMPORTED_MODULE_0__.SetObject,
            '[object Array]': _Able__WEBPACK_IMPORTED_MODULE_0__.ArrayObject,
            '[object Boolean]': _Able__WEBPACK_IMPORTED_MODULE_0__.BooleanObject,
            '[object Date]': _Able__WEBPACK_IMPORTED_MODULE_0__.DateObject,
            '[object Number]': _Able__WEBPACK_IMPORTED_MODULE_0__.NumberObject,
            '[object String]': _Able__WEBPACK_IMPORTED_MODULE_0__.StringObject,
            '[object ArrayBuffer]': _Able__WEBPACK_IMPORTED_MODULE_0__.DataObject,
            '[object Uint8Array]': _Able__WEBPACK_IMPORTED_MODULE_0__.DataObject,
            '[object Promise]': _Able__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget,
            '[object Null]': _Able__WEBPACK_IMPORTED_MODULE_0__.NULLObject,
            '[object Undefined]': _Able__WEBPACK_IMPORTED_MODULE_0__.NULLObject,
        };
    }
    return ObjectMap;
};
var isAbleType = function (value) {
    init();
    return Object.prototype.toString.call(value) === '[object flow-object]';
};
function decide(value, force) {
    if (force === void 0) { force = false; }
    init();
    if (isAbleType(value) && force === false)
        return value;
    var key = Object.prototype.toString.call(value);
    var Target = ObjectMap[key];
    if (Target) {
        return new Target(value !== null && value !== void 0 ? value : {});
    }
    return new _Able__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget(value);
}
;


/***/ }),

/***/ "./src/Types.ts":
/*!**********************!*\
  !*** ./src/Types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkType": () => (/* binding */ WorkType)
/* harmony export */ });
var WorkType;
(function (WorkType) {
    var WorkRunStatus;
    (function (WorkRunStatus) {
        WorkRunStatus[WorkRunStatus["INIT"] = 0] = "INIT";
        WorkRunStatus[WorkRunStatus["READY"] = 1] = "READY";
        WorkRunStatus[WorkRunStatus["RUNNING"] = 2] = "RUNNING";
        WorkRunStatus[WorkRunStatus["COMPLETE"] = 3] = "COMPLETE";
    })(WorkRunStatus = WorkType.WorkRunStatus || (WorkType.WorkRunStatus = {}));
})(WorkType || (WorkType = {}));


/***/ }),

/***/ "./src/Util/Equipment.ts":
/*!*******************************!*\
  !*** ./src/Util/Equipment.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JSRUNEnvirType": () => (/* binding */ JSRUNEnvirType),
/* harmony export */   "PlatformSelect": () => (/* binding */ PlatformSelect),
/* harmony export */   "currentEnir": () => (/* binding */ currentEnir),
/* harmony export */   "getJSEnvironment": () => (/* binding */ getJSEnvironment),
/* harmony export */   "isJS": () => (/* binding */ isJS),
/* harmony export */   "isMobile": () => (/* binding */ isMobile),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isPC": () => (/* binding */ isPC),
/* harmony export */   "isReactNative": () => (/* binding */ isReactNative),
/* harmony export */   "isWeb": () => (/* binding */ isWeb)
/* harmony export */ });
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools */ "./src/Util/tools.ts");
var _a;

var JSRUNEnvirType;
(function (JSRUNEnvirType) {
    JSRUNEnvirType[JSRUNEnvirType["NODE_PC"] = 10] = "NODE_PC";
    JSRUNEnvirType[JSRUNEnvirType["WEB_PC"] = 20] = "WEB_PC";
    JSRUNEnvirType[JSRUNEnvirType["WEB_MOBILE"] = 26] = "WEB_MOBILE";
    JSRUNEnvirType[JSRUNEnvirType["OTHER"] = 100] = "OTHER";
})(JSRUNEnvirType || (JSRUNEnvirType = {}));
var EnvirType = {
    WINDOWS: 'win',
    MACINTOSH: 'mac',
    LINUX: 'linux',
    IOS: 'iOS',
    ANDROID: 'Android',
    BLACKBERRY: 'bb',
    WINDOWS_PHONE: 'winphone',
    Other: 'other',
};
function isReactNative() {
    var GLOBAL;
    try {
        GLOBAL = window;
    }
    catch (error) {
        GLOBAL = __webpack_require__.g || globalThis;
    }
    return (GLOBAL &&
        GLOBAL.ReactNative &&
        GLOBAL.ReactNative.NativeModules);
}
function getJSEnvironment() {
    if (navigator.userAgent) {
        var userAgent = navigator.userAgent;
        var platform, result;
        var getDesktopOS = function () {
            var pf = navigator.platform;
            if (pf.indexOf('Win') != -1) {
                var rVersion = /Windows NT (\d+).(\d)/i;
                var uaResult = userAgent.match(rVersion);
                var sVersionStr = '';
                if (uaResult[1] == '6') {
                    if (uaResult[2] == 1) {
                        sVersionStr = '7';
                    }
                    else if (uaResult[2] > 1) {
                        sVersionStr = '8';
                    }
                }
                else {
                    sVersionStr = uaResult[1];
                }
                return { name: EnvirType.WINDOWS, versionStr: sVersionStr };
            }
            else if (pf.indexOf('Mac') != -1) {
                return { name: EnvirType.MACINTOSH, versionStr: '' };
            }
            else if (pf.indexOf('Linux') != -1) {
                return { name: EnvirType.LINUX, versionStr: '' };
            }
            return null;
        };
        platform = /Windows Phone (?:OS )?([\d.]*)/;
        result = userAgent.match(platform);
        if (result) {
            return { name: EnvirType.WINDOWS_PHONE, versionStr: result[1] };
        }
        if (userAgent.indexOf('(BB10;') > 0) {
            platform = /\sVersion\/([\d.]+)\s/;
            result = userAgent.match(platform);
            if (result) {
                return { name: EnvirType.BLACKBERRY, versionStr: result[1] };
            }
            else {
                return { name: EnvirType.BLACKBERRY, versionStr: '10' };
            }
        }
        platform =
            /\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;
        result = userAgent.match(platform);
        if (result) {
            var appleDevices = /iPhone|iPad|iPod/;
            var bbDevices = /PlayBook|BlackBerry/;
            if (result[0].match(appleDevices)) {
                result[3] = result[3].replace(/_/g, '.');
                return { name: EnvirType.IOS, versionStr: result[3] };
            }
            else if (result[2].match(/Android/)) {
                result[2] = result[2].replace(/\s/g, '');
                return { name: EnvirType.ANDROID, versionStr: result[3] };
            }
            else if (result[0].match(bbDevices)) {
                return { name: EnvirType.BLACKBERRY, versionStr: result[4] };
            }
        }
        platform = /\((Android)[\s]?([\d][.\d]*)?;.*Firefox\/[\d][.\d]*/;
        result = userAgent.match(platform);
        if (result) {
            return {
                name: EnvirType.ANDROID,
                versionStr: result.length == 3 ? result[2] : '',
            };
        }
        return getDesktopOS();
    }
    else {
        return { name: EnvirType.Other, versionStr: '' };
    }
}
var topThis = Function('return this')();
var currentEnir;
if (topThis.process && (0,_tools__WEBPACK_IMPORTED_MODULE_0__.getObjectType)(topThis.process) === '[object process]') {
    currentEnir = JSRUNEnvirType.NODE_PC;
}
else {
    var typeName = (_a = getJSEnvironment()) === null || _a === void 0 ? void 0 : _a.name;
    switch (typeName) {
        case EnvirType.WINDOWS:
            currentEnir = JSRUNEnvirType.WEB_PC;
            break;
        case EnvirType.MACINTOSH:
            currentEnir = JSRUNEnvirType.WEB_PC;
            break;
        case EnvirType.IOS:
            currentEnir = JSRUNEnvirType.WEB_MOBILE;
            break;
        case EnvirType.ANDROID:
            currentEnir = JSRUNEnvirType.WEB_MOBILE;
            break;
        case EnvirType.LINUX:
            currentEnir = JSRUNEnvirType.WEB_PC;
            break;
        default:
            currentEnir = JSRUNEnvirType.OTHER;
            break;
    }
}
var isWeb = currentEnir === JSRUNEnvirType.WEB_MOBILE ||
    currentEnir === JSRUNEnvirType.WEB_PC;
var isNode = currentEnir === JSRUNEnvirType.NODE_PC;
var isPC = currentEnir === JSRUNEnvirType.NODE_PC ||
    currentEnir === JSRUNEnvirType.WEB_PC;
var isMobile = currentEnir === JSRUNEnvirType.WEB_MOBILE;
var isJS = true;
var PlatformSelect = function (select) {
    var target;
    if (isWeb) {
        target = select.web;
    }
    else if (isNode) {
        target = select.node;
    }
    return target;
};



/***/ }),

/***/ "./src/Util/channel-value-util.ts":
/*!****************************************!*\
  !*** ./src/Util/channel-value-util.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unpackValue": () => (/* binding */ unpackValue),
/* harmony export */   "wrapperValue": () => (/* binding */ wrapperValue)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Object_valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Object/valueUtil */ "./src/Object/valueUtil.ts");



function unpackValue(value) {
    if (!!value === false)
        return '';
    return (value === null || value === void 0 ? void 0 : value._value).value.valueOf();
}
function wrapperValue(input, value) {
    var nextValue = (0,_Object_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(value);
    return new ___WEBPACK_IMPORTED_MODULE_0__.ObjectTarget((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, input._value), { value: nextValue }));
}


/***/ }),

/***/ "./src/Util/tools.ts":
/*!***************************!*\
  !*** ./src/Util/tools.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getObjectType": () => (/* binding */ getObjectType),
/* harmony export */   "has": () => (/* binding */ has),
/* harmony export */   "noop": () => (/* binding */ noop),
/* harmony export */   "replaceAll": () => (/* binding */ replaceAll)
/* harmony export */ });
var isURL = function (url) {
    var strRegex = '^((https|http|ftp)://)?' +
        "(([\\w_!~*'()\\.&=+$%-]+: )?[\\w_!~*'()\\.&=+$%-]+@)?" +
        '(([0-9]{1,3}\\.){3}[0-9]{1,3}' +
        '|' +
        '(localhost)|' +
        "([\\w_!~*'()-]+\\.)*" +
        '\\w+\\.' +
        '[a-zA-Z]{1,6})' +
        '(:[0-9]{1,5})?' +
        '((/?)|' +
        "(/[\\w_!~*'()\\.;?:@&=+$,%#-]+)+/?)$";
    var re = new RegExp(strRegex, 'i');
    if (re.test(encodeURI(url))) {
        return true;
    }
    else {
        return false;
    }
};
var isWindowFilePath = function (url) {
    return url.startsWith('file://');
};
var replaceAll = function (source, string, replaceValue) {
    if (source.indexOf(string) >= 0) {
        source = source.replace(string, replaceValue);
        return replaceAll(source, string, replaceValue);
    }
    return source;
};
var has = Function.call.bind(Object.prototype.hasOwnProperty);
var getObjectType = function (source) { return Object.prototype.toString.call(source); };
function noop() { }



/***/ }),

/***/ "./src/Works/ExtendsWorks/Base64Work.ts":
/*!**********************************************!*\
  !*** ./src/Works/ExtendsWorks/Base64Work.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base64DecodeWork": () => (/* binding */ Base64DecodeWork),
/* harmony export */   "Base64EnCodeWork": () => (/* binding */ Base64EnCodeWork)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-base64 */ "js-base64");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");






var Base64EnCodeWork = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(Base64EnCodeWork, _super);
    function Base64EnCodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Base64EnCodeWork";
        return _this;
    }
    Base64EnCodeWork.prototype.run = function (input) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(function (subscriber) {
            var target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.unpackValue)(input);
            }
            subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.wrapperValue)(input, js_base64__WEBPACK_IMPORTED_MODULE_0__.Base64.encode(target)));
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    Base64EnCodeWork.isAble = function () {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    };
    return Base64EnCodeWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_1__.InstructionMTM));
var Base64DecodeWork = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(Base64DecodeWork, _super);
    function Base64DecodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Base64DecodeWork";
        return _this;
    }
    Base64DecodeWork.prototype.run = function (input) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable(function (subscriber) {
            var target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.unpackValue)(input);
            }
            subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.wrapperValue)(input, js_base64__WEBPACK_IMPORTED_MODULE_0__.Base64.decode(target)));
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    Base64DecodeWork.isAble = function () {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    };
    return Base64DecodeWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_1__.InstructionMTM));



/***/ }),

/***/ "./src/Works/ExtendsWorks/BeginWork.ts":
/*!*********************************************!*\
  !*** ./src/Works/ExtendsWorks/BeginWork.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BeginWork": () => (/* binding */ BeginWork)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
/* harmony import */ var _Object_valueUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Object/valueUtil */ "./src/Object/valueUtil.ts");






var BeginWork = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(BeginWork, _super);
    function BeginWork() {
        var _this = _super.call(this) || this;
        _this.name = "BeginWork";
        _this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
        return _this;
    }
    BeginWork.prototype.startRun = function (value, runId) {
        var id = runId !== null && runId !== void 0 ? runId : (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
        this.nextWork.next(new _Object__WEBPACK_IMPORTED_MODULE_3__.ObjectTarget({
            id: id,
            value: (0,_Object_valueUtil__WEBPACK_IMPORTED_MODULE_4__.decide)(value),
            option: {},
        }));
    };
    BeginWork.prototype.completeOneLoop = function () { };
    BeginWork.isAble = function () {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
    };
    BeginWork._id = 0;
    return BeginWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_1__.InstructionOTO));



/***/ }),

/***/ "./src/Works/ExtendsWorks/FetchWork.ts":
/*!*********************************************!*\
  !*** ./src/Works/ExtendsWorks/FetchWork.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.. */ "./src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);






var FetchWork = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(FetchWork, _super);
    function FetchWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'FetchWork';
        return _this;
    }
    FetchWork.prototype._getInitOption = function (input, baseOption) {
        if (baseOption === void 0) { baseOption = {}; }
        var initParams = input.valueOf();
        var url = initParams.url, method = initParams.method, timeout = initParams.timeout, data = initParams.data;
        var request = {
            url: url,
            method: initParams.method || baseOption.method || 'GET',
            timeout: timeout || baseOption.timeout || 10000,
            headers: (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, (baseOption.headers || {})), (initParams.headers || {})),
        };
        request.data = data;
        if (method && method.toLocaleUpperCase() === 'GET') {
            request.headers['Content-Type'] =
                request.headers['Content-Type'] || 'application/json';
        }
        request.timeoutErrorMessage = '请求超时';
        return request;
    };
    FetchWork.prototype.run = function (input, baseOption) {
        var _this = this;
        var that = this;
        var options = this._getInitOption(input._value.value, baseOption);
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
            var fetchSub = that.context.platform
                .fetch(options)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(function (result) {
                var data = result.valueOf().data;
                _this.logMsg("[FetchWork][load:data]".concat(data), input);
            }))
                .subscribe({
                next: function (data) {
                    var result = data.valueOf();
                    if (result.error) {
                        subscriber.error(result.error);
                    }
                    else {
                        subscriber.next(new ___WEBPACK_IMPORTED_MODULE_3__.ObjectTarget((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_5__.__assign)({}, input._value), { value: result.data })));
                        subscriber.complete();
                    }
                },
                error: function (error) { return subscriber.error(error); },
                complete: function () { return subscriber.complete(); },
            });
            return {
                unsubscribe: function () {
                    subscriber.unsubscribe();
                    fetchSub.unsubscribe();
                },
            };
        });
    };
    FetchWork.isAble = function () {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
    };
    return FetchWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FetchWork);


/***/ }),

/***/ "./src/Works/ExtendsWorks/LoadFileWork.ts":
/*!************************************************!*\
  !*** ./src/Works/ExtendsWorks/LoadFileWork.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Bridge/ConfigTypes */ "./src/Bridge/ConfigTypes.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");








var LoadFileWork = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__extends)(LoadFileWork, _super);
    function LoadFileWork(config) {
        var _this = _super.call(this) || this;
        _this.name = 'LoadFileWork';
        _this.currentConfig = { type: _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_4__.FileType.All };
        _this.currentConfig = config || { type: _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_4__.FileType.All };
        return _this;
    }
    LoadFileWork.prototype.run = function (input, option) {
        var _this = this;
        var that = this;
        var runOption = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, option), this.currentConfig);
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
            var target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__.unpackValue)(input);
            var sub = that.context.platform
                .loadFile(target, runOption)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(function (data) {
                var obj = data;
                var _a = obj.valueOf(), loaded = _a.loaded, total = _a.total, finish = _a.finish;
                _this.logMsg("\u52A0\u8F7D\u8FDB\u5EA6[load:progress]---\uFF1A".concat(loaded, "/").concat(total, " \u662F\u5426\u5B8C\u6210\uFF1A").concat(finish), input);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeLast)(1))
                .subscribe({
                next: function (obj) {
                    var _a = obj.valueOf(), data = _a.data, file = _a.file;
                    subscriber.next(new _Object__WEBPACK_IMPORTED_MODULE_2__.ObjectTarget((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_7__.__assign)({}, input._value), { value: new _Object__WEBPACK_IMPORTED_MODULE_2__.DataObject(data), option: { file: file } })));
                    subscriber.complete();
                },
                complete: function () { return subscriber.complete(); },
                error: function (err) { return subscriber.error(err); },
            });
            return {
                unsubscribe: function () {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    };
    LoadFileWork.isAble = function () {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    };
    return LoadFileWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadFileWork);


/***/ }),

/***/ "./src/Works/ExtendsWorks/OpenURLWork.ts":
/*!***********************************************!*\
  !*** ./src/Works/ExtendsWorks/OpenURLWork.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");






var OpenURLWork = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(OpenURLWork, _super);
    function OpenURLWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "OpenURLWork";
        return _this;
    }
    OpenURLWork.prototype.run = function (input, option) {
        var that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
            var target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.unpackValue)(input);
            var sub = that.context.platform
                .open(target, option)
                .subscribe({
                next: function (_) { return subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.wrapperValue)(input, new _Object__WEBPACK_IMPORTED_MODULE_2__.BooleanObject(true))); },
                complete: function () { return subscriber.complete(); },
                error: function (err) { return subscriber.error(err); }
            });
            return {
                unsubscribe: function () {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    };
    OpenURLWork.isAble = function () {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    };
    return OpenURLWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OpenURLWork);


/***/ }),

/***/ "./src/Works/ExtendsWorks/QRCodeWork.ts":
/*!**********************************************!*\
  !*** ./src/Works/ExtendsWorks/QRCodeWork.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QRCodeWork": () => (/* binding */ QRCodeWork)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");





var QRCodeWork = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__extends)(QRCodeWork, _super);
    function QRCodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "QRCodeWork";
        return _this;
    }
    QRCodeWork.prototype.run = function (input, option) {
        var that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
            var target;
            if (input === null || input === undefined)
                target = "";
            else {
                target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input);
            }
            var sub = that.context.platform
                .createQrCode(target, option)
                .subscribe({
                next: function (res) { return subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, res._value)); },
                complete: function () { return subscriber.complete(); },
                error: function (err) { return subscriber.error(err); },
            });
            return {
                unsubscribe: function () {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    };
    QRCodeWork.isAble = function () {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
    };
    return QRCodeWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO));



/***/ }),

/***/ "./src/Works/ExtendsWorks/RunCommandWork.ts":
/*!**************************************************!*\
  !*** ./src/Works/ExtendsWorks/RunCommandWork.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");
/* harmony import */ var _Util_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Util/tools */ "./src/Util/tools.ts");






function handleEvalCommand(template, params, config, runOption) {
    var input = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(params);
    var runCommand = template;
    if (typeof input === 'string') {
        var placeholder = config['*'];
        if (placeholder) {
            runCommand = (0,_Util_tools__WEBPACK_IMPORTED_MODULE_4__.replaceAll)(runCommand, placeholder, input);
        }
    }
    else {
        Object.keys(config).forEach(function (key) {
            var placeholder = config[key];
            var value = input[key];
            runCommand = (0,_Util_tools__WEBPACK_IMPORTED_MODULE_4__.replaceAll)(runCommand, placeholder, value);
        });
    }
    return runCommand;
}
var RunCommandWork = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(RunCommandWork, _super);
    function RunCommandWork() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this) || this;
        _this.template = '';
        _this.name = 'RunCommandWork';
        _this.paramsConfig = {};
        _this.callBack = undefined;
        if (typeof args[0] === 'string') {
            var template = args[0] || '$I$';
            var paramsConfig = args[1] || { '*': '$I$' };
            _this.template = template;
            _this.paramsConfig = paramsConfig;
        }
        else if (typeof args[0] === 'function') {
            _this.callBack = args[0];
        }
        return _this;
    }
    RunCommandWork.prototype.run = function (command, option) {
        var _this = this;
        var that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
            var target;
            if (that.callBack && typeof that.callBack === 'function') {
                target = _this.callBack((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(command), option);
            }
            else
                target = handleEvalCommand(that.template, command, _this.paramsConfig, option);
            var sub = that.context.platform
                .runCommand(target)
                .subscribe({
                next: function (info) {
                    _this.logMsg("\u6267\u884Ccommand\uFF1A".concat(info.error ? '失败' : '成功', "\u3002\u7ED3\u679C\uFF1A").concat(info.result), command);
                    subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(command, (info.error ? undefined : info.result)));
                },
                complete: function () { return subscriber.complete(); },
                error: function (err) { return subscriber.error(err); },
            });
            return {
                unsubscribe: function () {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    };
    RunCommandWork.isAble = function () {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
    };
    return RunCommandWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RunCommandWork);


/***/ }),

/***/ "./src/Works/ExtendsWorks/UtilWork.ts":
/*!********************************************!*\
  !*** ./src/Works/ExtendsWorks/UtilWork.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DelayIntervalWork": () => (/* binding */ DelayIntervalWork),
/* harmony export */   "IntervalWork": () => (/* binding */ IntervalWork),
/* harmony export */   "TimeoutWork": () => (/* binding */ TimeoutWork)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Object_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object/index */ "./src/Object/index.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");






var IntervalWork = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(IntervalWork, _super);
    function IntervalWork(interval, max, notifier) {
        if (max === void 0) { max = Infinity; }
        var _this = _super.call(this) || this;
        _this.name = "IntervalWork";
        _this.intervalTime = interval || 1000;
        _this.maxCount = max;
        _this.notifier = notifier || rxjs__WEBPACK_IMPORTED_MODULE_0__.NEVER;
        return _this;
    }
    IntervalWork.prototype.run = function (input) {
        var _this = this;
        var intervalTime = parseInt((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input)) || this.intervalTime || 1000;
        var that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
            var sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(intervalTime, rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(that.maxCount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(_this.notifier)).subscribe({
                next: function (value) { return observer.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, value)); },
                error: function (error) { return observer.error(error); },
                complete: function () { return observer.complete(); }
            });
            return {
                unsubscribe: function () {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    };
    return IntervalWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTM));
var TimeoutWork = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(TimeoutWork, _super);
    function TimeoutWork(interval) {
        var _this = _super.call(this) || this;
        _this.name = "TimeoutWork";
        _this.intervalTime = interval || 1000;
        return _this;
    }
    TimeoutWork.prototype.run = function (input) {
        var intervalTime = parseInt((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input)) || this.intervalTime || 1000;
        var that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
            var sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(intervalTime, rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe({
                next: function (value) {
                    observer.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, value));
                },
                error: function (error) { return observer.error(error); },
                complete: function () { return observer.complete(); }
            });
            return {
                unsubscribe: function () {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    };
    return TimeoutWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTO));
var DelayIntervalWork = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__extends)(DelayIntervalWork, _super);
    function DelayIntervalWork(delay, interval, max, notifier) {
        if (delay === void 0) { delay = 0; }
        if (interval === void 0) { interval = 1000; }
        if (max === void 0) { max = Infinity; }
        var _this = _super.call(this) || this;
        _this.name = 'DelayIntervalWork';
        _this.intervalTime = interval || 1000;
        _this.maxCount = max;
        _this.delayTime = delay || 0;
        _this.notifier = notifier || rxjs__WEBPACK_IMPORTED_MODULE_0__.NEVER;
        return _this;
    }
    DelayIntervalWork.prototype.run = function (input) {
        var _this = this;
        var intervalTime = parseInt((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input)) || this.intervalTime || 1000;
        var that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(function (observer) {
            var sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(that.delayTime, intervalTime, rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(that.maxCount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(_this.notifier))
                .subscribe({
                next: function (value) { return observer.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, new _Object_index__WEBPACK_IMPORTED_MODULE_2__.NumberObject(value))); },
                error: function (error) { return observer.error(error); },
                complete: function () { return observer.complete(); }
            });
            return {
                unsubscribe: function () {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    };
    return DelayIntervalWork;
}(_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTM));



/***/ }),

/***/ "./src/Works/Instruction.ts":
/*!**********************************!*\
  !*** ./src/Works/Instruction.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Instruction": () => (/* binding */ Instruction),
/* harmony export */   "InstructionMTM": () => (/* binding */ InstructionMTM),
/* harmony export */   "InstructionOTM": () => (/* binding */ InstructionOTM),
/* harmony export */   "InstructionOTO": () => (/* binding */ InstructionOTO)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Object */ "./src/Object/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _WorkUnit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WorkUnit */ "./src/Works/WorkUnit.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Util/channel-value-util */ "./src/Util/channel-value-util.ts");
/* harmony import */ var _Util_tools__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Util/tools */ "./src/Util/tools.ts");










var Instruction = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__extends)(Instruction, _super);
    function Instruction() {
        var _this = _super.call(this) || this;
        _this.name = 'Instruction';
        _this.id = Instruction._id++;
        _this.runSubscriptions = new Map();
        _this.pools = [];
        _this.config = { development: true };
        _this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)();
        return _this;
    }
    Instruction.prototype.prepare = function (before, next) {
        var _a;
        this.beforeWork = before;
        this.nextWork = next;
        this.config = ((_a = this.context) === null || _a === void 0 ? void 0 : _a.runOptions) || {};
        this._connectChannel();
        return Promise.resolve();
    };
    Instruction.prototype._connectChannel = function () {
        var _this = this;
        var that = this;
        var sub2 = this.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (value) {
            var _a, _b;
            ((_a = _this.config) === null || _a === void 0 ? void 0 : _a.development) &&
                ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                    work: [that],
                    content: _this.context,
                    desc: '[Work:preRun]->接受到数据',
                    value: value,
                }));
        })).subscribe({
            complete: function () { },
            error: function (error) { return that.error(error); },
            next: function (value) { return that._run(value); },
        });
        this.pools.push(sub2);
    };
    Instruction.prototype._run = function (value) {
        var _this = this;
        var _a;
        var sendLog = function (desc, _value, _error) {
            var _a, _b;
            ((_a = that.config) === null || _a === void 0 ? void 0 : _a.development) &&
                ((_b = that.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                    work: [that],
                    content: _this.context,
                    desc: desc,
                    value: _value || value,
                    error: _error,
                }));
        };
        value = this.nextValue(value) || value;
        var that = this;
        var nextOption = (((_a = this.config) === null || _a === void 0 ? void 0 : _a.workConfig) || {})[this.name] || {};
        var execFunc = (0,_Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.PlatformSelect)({
            web: function () {
                var _a;
                return ((_a = that.web_run) !== null && _a !== void 0 ? _a : (that.run || _Util_tools__WEBPACK_IMPORTED_MODULE_7__.noop)).bind(that)(value, nextOption);
            },
            node: function () {
                var _a;
                return ((_a = that.node_run) !== null && _a !== void 0 ? _a : (that.run || _Util_tools__WEBPACK_IMPORTED_MODULE_7__.noop)).bind(that)(value, nextOption);
            },
            other: function () {
                return (that.run || _Util_tools__WEBPACK_IMPORTED_MODULE_7__.noop).bind(that)(value, nextOption);
            },
        });
        sendLog('[Work][Func:run]->入口', value);
        var uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)();
        var runSub = execFunc(value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (_value) {
            sendLog('[Work][Func:run]->结果', _value);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_1__.asyncScheduler))
            .subscribe({
            complete: function () {
                var unit = that.runSubscriptions.get(uuid);
                unit === null || unit === void 0 ? void 0 : unit.sub.unsubscribe();
                that.runSubscriptions.delete(uuid);
            },
            error: function (err) {
                sendLog('[Work][Func:run]->执行错误', value, err);
                that.completeOneLoop(value, new _Object__WEBPACK_IMPORTED_MODULE_0__.NULLObject(), false);
            },
            next: function (res) {
                var _a;
                sendLog('[Work][Func:run]->将执行下一个Work', res);
                that.completeOneLoop(value, res, true);
                (_a = that.nextWork) === null || _a === void 0 ? void 0 : _a.next(res);
            },
        });
        var unit = new _WorkUnit__WEBPACK_IMPORTED_MODULE_5__.WorkUnit(that.context, that, runSub, uuid);
        this.runSubscriptions.set(unit.uuid, unit);
    };
    Instruction.prototype.stopWork = function () {
        var that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscribe) {
            that.runSubscriptions.forEach(function (value) {
                value === null || value === void 0 ? void 0 : value.sub.unsubscribe();
            });
            subscribe.next(true);
            subscribe.complete();
            return {
                unsubscribe: function () { return subscribe.unsubscribe(); },
            };
        });
    };
    Instruction.prototype.clear = function () {
        this.pools && this.pools.forEach(function ($1) { return $1.unsubscribe(); });
        this.pools.length = 0;
        this.unsubscribe();
    };
    Instruction.prototype.error = function (err) {
        this.context &&
            this.context.sendLog({
                work: [this],
                content: this.context,
                desc: '[Work:preRun]-接受上一个消息错误',
                date: new Date(),
                value: new _Object__WEBPACK_IMPORTED_MODULE_0__.StringObject(err.message),
            });
    };
    Instruction.prototype.addVariable = function (name, value) {
        this.context && this.context.addVariable(this, name, value);
    };
    Instruction.prototype.logMsg = function (msg, input) {
        var _a, _b;
        ((_a = this.config) === null || _a === void 0 ? void 0 : _a.development) &&
            ((_b = this.context) === null || _b === void 0 ? void 0 : _b.sendLog({
                work: [this],
                content: this.context,
                desc: msg,
                value: (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__.wrapperValue)(input, null),
            }));
    };
    Instruction.prototype.next = function (value) {
        if (this.closed === false) {
            _super.prototype.next.call(this, value);
        }
        else {
            this.context.sendLog({
                work: [this],
                content: this.context,
                desc: this.toString() + ' 已经关闭',
                value: (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__.wrapperValue)(value, null),
            });
        }
    };
    Instruction.prototype.nextValue = function (input) {
        return input;
    };
    Instruction.prototype.completeOneLoop = function (input, toValue, success) { };
    Instruction.prototype.toString = function () {
        return "[".concat(this.name, ":").concat(this.id, "]");
    };
    Instruction.prototype.isAble = function () {
        return this.__proto__.isAble();
    };
    Instruction.isAble = function () {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
    };
    Instruction._id = 0;
    return Instruction;
}(rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject));

var InstructionOTO = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__extends)(InstructionOTO, _super);
    function InstructionOTO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstructionOTO.prototype.nextValue = function (input) {
        return input;
    };
    InstructionOTO.prototype.completeOneLoop = function (input, toValue, success) { };
    InstructionOTO.prototype.run = function (input) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    return InstructionOTO;
}(Instruction));

var InstructionOTM = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__extends)(InstructionOTM, _super);
    function InstructionOTM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'MultipleInstruction';
        return _this;
    }
    InstructionOTM.prototype.nextValue = function (input) {
        return input;
    };
    InstructionOTM.prototype.completeOneLoop = function (input, next, success) { };
    InstructionOTM.prototype.run = function (input) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    return InstructionOTM;
}(Instruction));

var InstructionMTM = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__extends)(InstructionMTM, _super);
    function InstructionMTM() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'MultipleInstruction';
        return _this;
    }
    InstructionMTM.prototype.nextValue = function (input) {
        return input;
    };
    InstructionMTM.prototype.completeOneLoop = function (input, next, success) { };
    InstructionMTM.prototype.run = function (input) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: function () { return subscriber.unsubscribe(); },
            };
        });
    };
    return InstructionMTM;
}(Instruction));



/***/ }),

/***/ "./src/Works/WorkUnit.ts":
/*!*******************************!*\
  !*** ./src/Works/WorkUnit.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WorkUnit": () => (/* binding */ WorkUnit)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);

var WorkUnit = (function () {
    function WorkUnit(context, work, sub, uuid) {
        this.context = context;
        this.work = work;
        this.sub = sub;
        this.uuid = uuid !== null && uuid !== void 0 ? uuid : (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
    }
    return WorkUnit;
}());



/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrayObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.ArrayObject),
/* harmony export */   "Base64DecodeWork": () => (/* reexport safe */ _Works_ExtendsWorks_Base64Work__WEBPACK_IMPORTED_MODULE_5__.Base64DecodeWork),
/* harmony export */   "Base64EnCodeWork": () => (/* reexport safe */ _Works_ExtendsWorks_Base64Work__WEBPACK_IMPORTED_MODULE_5__.Base64EnCodeWork),
/* harmony export */   "BooleanObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.BooleanObject),
/* harmony export */   "Context": () => (/* reexport safe */ _Context__WEBPACK_IMPORTED_MODULE_3__.Context),
/* harmony export */   "ControlFlow": () => (/* reexport safe */ _Object_Able_Control__WEBPACK_IMPORTED_MODULE_2__.ControlFlow),
/* harmony export */   "DataObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.DataObject),
/* harmony export */   "DateObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.DateObject),
/* harmony export */   "DelayIntervalWork": () => (/* reexport safe */ _Works_ExtendsWorks_UtilWork__WEBPACK_IMPORTED_MODULE_11__.DelayIntervalWork),
/* harmony export */   "FetchWork": () => (/* reexport safe */ _Works_ExtendsWorks_FetchWork__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "InstructionMTM": () => (/* reexport safe */ _Works_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionMTM),
/* harmony export */   "InstructionOTM": () => (/* reexport safe */ _Works_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTM),
/* harmony export */   "InstructionOTO": () => (/* reexport safe */ _Works_Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTO),
/* harmony export */   "IntervalWork": () => (/* reexport safe */ _Works_ExtendsWorks_UtilWork__WEBPACK_IMPORTED_MODULE_11__.IntervalWork),
/* harmony export */   "LoadFileWork": () => (/* reexport safe */ _Works_ExtendsWorks_LoadFileWork__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "MapObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.MapObject),
/* harmony export */   "NULLObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.NULLObject),
/* harmony export */   "NumberObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.NumberObject),
/* harmony export */   "ObjectTarget": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget),
/* harmony export */   "OpenURLWork": () => (/* reexport safe */ _Works_ExtendsWorks_OpenURLWork__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "QRCodeWork": () => (/* reexport safe */ _Works_ExtendsWorks_QRCodeWork__WEBPACK_IMPORTED_MODULE_8__.QRCodeWork),
/* harmony export */   "RunCommandWork": () => (/* reexport safe */ _Works_ExtendsWorks_RunCommandWork__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "SetObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.SetObject),
/* harmony export */   "StringObject": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.StringObject),
/* harmony export */   "TimeoutWork": () => (/* reexport safe */ _Works_ExtendsWorks_UtilWork__WEBPACK_IMPORTED_MODULE_11__.TimeoutWork),
/* harmony export */   "WorkType": () => (/* reexport safe */ _Types__WEBPACK_IMPORTED_MODULE_1__.WorkType),
/* harmony export */   "createExtendsConstruct": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct),
/* harmony export */   "createExtendsInstance": () => (/* reexport safe */ _Object__WEBPACK_IMPORTED_MODULE_0__.createExtendsInstance),
/* harmony export */   "decide": () => (/* reexport safe */ _Object_valueUtil__WEBPACK_IMPORTED_MODULE_13__.decide),
/* harmony export */   "isAbleType": () => (/* reexport safe */ _Object_valueUtil__WEBPACK_IMPORTED_MODULE_13__.isAbleType),
/* harmony export */   "unpackValue": () => (/* reexport safe */ _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_12__.unpackValue),
/* harmony export */   "wrapperValue": () => (/* reexport safe */ _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_12__.wrapperValue)
/* harmony export */ });
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Object */ "./src/Object/index.ts");
/* harmony import */ var _Types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types */ "./src/Types.ts");
/* harmony import */ var _Object_Able_Control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Object/Able/Control */ "./src/Object/Able/Control.ts");
/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Context */ "./src/Context.ts");
/* harmony import */ var _Works_Instruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Works/Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var _Works_ExtendsWorks_Base64Work__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Works/ExtendsWorks/Base64Work */ "./src/Works/ExtendsWorks/Base64Work.ts");
/* harmony import */ var _Works_ExtendsWorks_LoadFileWork__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Works/ExtendsWorks/LoadFileWork */ "./src/Works/ExtendsWorks/LoadFileWork.ts");
/* harmony import */ var _Works_ExtendsWorks_OpenURLWork__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Works/ExtendsWorks/OpenURLWork */ "./src/Works/ExtendsWorks/OpenURLWork.ts");
/* harmony import */ var _Works_ExtendsWorks_QRCodeWork__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Works/ExtendsWorks/QRCodeWork */ "./src/Works/ExtendsWorks/QRCodeWork.ts");
/* harmony import */ var _Works_ExtendsWorks_FetchWork__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Works/ExtendsWorks/FetchWork */ "./src/Works/ExtendsWorks/FetchWork.ts");
/* harmony import */ var _Works_ExtendsWorks_RunCommandWork__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Works/ExtendsWorks/RunCommandWork */ "./src/Works/ExtendsWorks/RunCommandWork.ts");
/* harmony import */ var _Works_ExtendsWorks_UtilWork__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Works/ExtendsWorks/UtilWork */ "./src/Works/ExtendsWorks/UtilWork.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Util/channel-value-util */ "./src/Util/channel-value-util.ts");
/* harmony import */ var _Object_valueUtil__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Object/valueUtil */ "./src/Object/valueUtil.ts");

















/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
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
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
    }
    return __assign.apply(this, arguments);
}

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

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
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

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

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

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_axios__;

/***/ }),

/***/ "js-base64":
/*!****************************!*\
  !*** external "js-base64" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_js_base64__;

/***/ }),

/***/ "qrcode-generator":
/*!***********************************!*\
  !*** external "qrcode-generator" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_qrcode_generator__;

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_operators__;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_uuid__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.dev.js.map