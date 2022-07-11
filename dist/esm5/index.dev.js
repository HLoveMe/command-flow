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
// export interface BasePlatformBridgeAble extends PlatformBridgeAble { }
// export interface WebBridgeAble extends BasePlatformBridgeAble { }
// export interface NodejsBridgeAble extends BasePlatformBridgeAble { }
// export interface MobilePlatformBridgeAble extends PlatformBridgeAble { }
// export interface MobileWebBridgeAble extends MobilePlatformBridgeAble { }
// export interface MobileNodejsBridgeAble extends MobilePlatformBridgeAble { }


/***/ }),

/***/ "./src/Bridge/Difference/index.ts":
/*!****************************************!*\
  !*** ./src/Bridge/Difference/index.ts ***!
  \****************************************/
/***/ (() => {

// import './Fetch/index'


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






const runConfig = (0,_Util_Equipment__WEBPACK_IMPORTED_MODULE_0__.PlatformSelect)({
    web: { pc: _Platform_Web_PC__WEBPACK_IMPORTED_MODULE_4__.PCWebBridge, mobile: _Platform_Web_Mobile__WEBPACK_IMPORTED_MODULE_3__.MobileWebBridge },
    node: { pc: _Platform_Node_PC__WEBPACK_IMPORTED_MODULE_2__.PCNodejsBridge, mobile: _Platform_Node_Mobile__WEBPACK_IMPORTED_MODULE_1__.MobileNodejsBridge },
});
const Target = runConfig[_Util_Equipment__WEBPACK_IMPORTED_MODULE_0__.isPC ? 'pc' : 'mobile'];
const Platform = Reflect.construct(Target, []);
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! qrcode-generator */ "qrcode-generator");
/* harmony import */ var qrcode_generator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(qrcode_generator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Hardware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Hardware */ "./src/Bridge/Platform/Hardware.ts");





class PlatformBridge extends _Hardware__WEBPACK_IMPORTED_MODULE_4__.HardwareBase {
    createQrCode(context, option) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((sub) => {
            let width = option?.SideLength ?? 200;
            let margin = 2;
            const qrCode = qrcode_generator__WEBPACK_IMPORTED_MODULE_2__(option?.type || 4, option?.Level || "H");
            qrCode.addData((context ?? ""));
            qrCode.make();
            const moduleCount = qrCode.getModuleCount();
            const cellSize = (width - margin * 2) / moduleCount;
            const base64 = qrCode.createDataURL(cellSize, margin);
            // const base64 = qrcode.createDataURL(cellSize, margin).replace('data:image/gif;base64', 'data:image/png;base64');
            sub.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.StringObject(base64));
            sub.complete();
            return {
                unsubscribe: () => sub.unsubscribe(),
            };
        });
    }
    loadRunInfo() {
        throw new Error("Method not implemented.");
    }
    runCommand(command, option) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => {
            let result = null;
            let error = null;
            let status = false;
            try {
                result = eval(command?.toString());
                status = true;
            }
            catch (_error) {
                error = _error;
                status = false;
            }
            finally {
                subscriber.next({
                    result,
                    status,
                    error,
                    command
                });
                subscriber.complete();
            }
            return {
                unsubscribe: () => subscriber.unsubscribe()
            };
        });
    }
    open(url, option) {
        throw new Error("Method not implemented.");
    }
    loadFile(url, option) {
        throw new Error("Method not implemented.");
    }
    fetch(req) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => {
            axios__WEBPACK_IMPORTED_MODULE_3___default().request(req)
                .then((response) => {
                let error = null;
                let data = null;
                const content = {};
                if (response.status !== 200) {
                    error = new Error(`${response.status} ${response.statusText}`);
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
                .catch((error) => {
                subscriber.error(error);
            });
            return {
                unsubscribe: () => {
                    subscriber.unsubscribe();
                }
            };
        });
    }
}


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
class HardwareBase {
    takePhoto(option) {
        throw new Error("Method not implemented.");
    }
    recordVideo(option) {
        throw new Error("Method not implemented.");
    }
    getPhotos() {
        throw new Error("Method not implemented.");
    }
    getCurrentPosition() {
        throw new Error("Method not implemented.");
    }
    watchPosition(option) {
        throw new Error("Method not implemented.");
    }
    closePosition() {
        throw new Error("Method not implemented.");
    }
    recordAudio() {
        throw new Error("Method not implemented.");
    }
    stopAudio() {
        throw new Error("Method not implemented.");
    }
    getFile(option) {
        throw new Error("Method not implemented.");
    }
    startVibrator(option) {
        throw new Error("Method not implemented.");
    }
    stopVibrator() {
        throw new Error("Method not implemented.");
    }
    getSystemInfo() {
        throw new Error("Method not implemented.");
    }
    getVolume() {
        throw new Error("Method not implemented.");
    }
    setVolume(volume) {
        throw new Error("Method not implemented.");
    }
    getBrightness() {
        throw new Error("Method not implemented.");
    }
    setBrightness(brightness) {
        throw new Error("Method not implemented.");
    }
    scanBluetooth() {
        throw new Error("Method not implemented.");
    }
    connectBluetooth(device) {
        throw new Error("Method not implemented.");
    }
    bluetoothSendData(data) {
        throw new Error("Method not implemented.");
    }
    bluetoothReceiveData(device) {
        throw new Error("Method not implemented.");
    }
    bluetoothClose(device) {
        throw new Error("Method not implemented.");
    }
    speechInit(option) {
        throw new Error("Method not implemented.");
    }
    speak(text) {
        throw new Error("Method not implemented.");
    }
    stopSpeak() {
        throw new Error("Method not implemented.");
    }
    clearSpeech() {
        throw new Error("Method not implemented.");
    }
}


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Object */ "./src/Object/index.ts");
/* harmony import */ var _BasePlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasePlatform */ "./src/Bridge/Platform/BasePlatform.ts");



class MobileNodejsBridge extends _BasePlatform__WEBPACK_IMPORTED_MODULE_2__.PlatformBridge {
    open(url) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _Object__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(false));
    }
    loadFile(url, option) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _Object__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget({
            total: 0,
            loaded: 0,
            data: new ArrayBuffer(0),
            finish: true,
            file: undefined,
        }));
    }
}


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
/* harmony import */ var _BasePlatform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BasePlatform */ "./src/Bridge/Platform/BasePlatform.ts");

class PCNodejsBridge extends _BasePlatform__WEBPACK_IMPORTED_MODULE_0__.PlatformBridge {
}


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
/* harmony import */ var _WebBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebBase */ "./src/Bridge/Platform/Web/WebBase.ts");

class MobileWebBridge extends _WebBase__WEBPACK_IMPORTED_MODULE_0__.WebBridge {
}


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
/* harmony import */ var _WebBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebBase */ "./src/Bridge/Platform/Web/WebBase.ts");

class PCWebBridge extends _WebBase__WEBPACK_IMPORTED_MODULE_0__.WebBridge {
}


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../Object */ "./src/Object/index.ts");
/* harmony import */ var _BasePlatform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BasePlatform */ "./src/Bridge/Platform/BasePlatform.ts");



class WebBridge extends _BasePlatform__WEBPACK_IMPORTED_MODULE_2__.PlatformBridge {
    open(url) {
        const result = window.open(url, "__blank");
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _Object__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(result !== null));
    }
    /**
     * 打开文件路径
     * @param url
     * @param option
     * @returns
     */
    loadFile(url, option) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable((subscriber) => {
            const input = document.createElement("input");
            //input.value = url.toString();
            input.type = "file";
            input.id = "_temp_input_select";
            input.accept = option?.type || "*";
            input.style.display = "none";
            document.body.append(input);
            input.addEventListener("change", (_) => {
                const reader = new FileReader();
                const file = input.files[0];
                reader.onprogress = (info) => {
                    const { total, loaded } = info;
                    const data = reader.result;
                    subscriber.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget({
                        total,
                        loaded,
                        data: data,
                        finish: false,
                        file
                    }));
                };
                reader.onload = (info) => {
                    const data = reader.result;
                    const { total, loaded } = info;
                    subscriber.next(new _Object__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget({ total, loaded, data, finish: true, file }));
                    subscriber.complete();
                };
                reader.onerror = (ev) => {
                    subscriber.error(ev);
                };
                reader.readAsArrayBuffer(file);
            });
            input.click();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
}


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

/**
 * 默认的配置
 */
const DefaultRunConfig = {
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








class Context {
    status = _Types__WEBPACK_IMPORTED_MODULE_0__.WorkType.WorkRunStatus.INIT;
    platform = _Bridge_Index__WEBPACK_IMPORTED_MODULE_4__["default"];
    /**
     * 运行配置文件 todo
     */
    runOptions;
    /**
     * 上下文变量
     */
    runConstant = new Map();
    /**
     * 所有work
     */
    works = [];
    /**
     * 消息传输通道
     */
    msgChannel = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    constructor(runOptions) {
        this.runOptions = (runOptions || _Configs__WEBPACK_IMPORTED_MODULE_2__.DefaultRunConfig);
        const sub = this.msgChannel.subscribe({
            next: (value) => this.workMessage(value),
            error: (error) => this.workError(error),
        });
        this.pools.push(sub);
        this.addWork(new _Works_ExtendsWorks_BeginWork__WEBPACK_IMPORTED_MODULE_5__.BeginWork());
    }
    /**
     * 需要销毁的Subscription
     */
    pools = [];
    /**
     * 增加上下文变量
     * @param from
     * @param name
     * @param value
     */
    addVariable(from, name, value) {
        const w_map = this.runConstant.get(from.uuid);
        !w_map && this.runConstant.set(from.uuid, new Map());
        this.runConstant.get(from.uuid).set(name, value);
    }
    workMessage(input) {
        console.log('msgChannel', input);
    }
    workError(error) {
        console.log('msgChannelError', error);
        this.stopWorkChain();
    }
    addWorkLog(tap) {
        return this.msgChannel.subscribe(tap);
    }
    sendLog(status) {
        const log = {
            date: new Date(),
            work: status.work.filter(($1) => $1?.name),
            desc: status.desc,
            value: status.value,
            error: status.error,
        };
        this.msgChannel.next(log);
    }
    addWork(work) {
        if (work.constructor.isAble &&
            work.constructor.isAble() === false) {
            const desc = '[content][Func:addWork][work isAble is false]';
            return this.sendLog({
                content: this,
                work: [],
                desc,
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
    }
    addWorks(...works) {
        works.forEach(this.addWork);
    }
    async prepareWorks() {
        if (this.status !== _Types__WEBPACK_IMPORTED_MODULE_0__.WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: [],
                desc: '[content][Func:prepareWorks][context status is not init]',
                value: new _Object__WEBPACK_IMPORTED_MODULE_3__.BooleanObject(false),
            });
        }
        await Promise.all(this.works.map(($1, index, source) => {
            const before = source[index - 1];
            const after = source[index + 1];
            return $1.prepare(before, after);
        }));
        this.status = _Types__WEBPACK_IMPORTED_MODULE_0__.WorkType.WorkRunStatus.READY;
    }
    dispatch(input) {
        if (this.status === _Types__WEBPACK_IMPORTED_MODULE_0__.WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: [],
                desc: '[context][Func:run][run status is not ready  or 已经初始化]',
                value: new _Object__WEBPACK_IMPORTED_MODULE_3__.BooleanObject(false),
            });
        }
        const inputWork = this.works[0];
        if (inputWork) {
            inputWork.startRun((0,_Object_valueUtil__WEBPACK_IMPORTED_MODULE_6__.decide)(input));
        }
        this.status = _Types__WEBPACK_IMPORTED_MODULE_0__.WorkType.WorkRunStatus.RUNNING;
    }
    /**
     * 停止执行
     * 关闭
     */
    stopWorkChain() {
        const that = this;
        return new Promise((resolve, reject) => {
            const taskUns = this.works.map(($1) => $1.stopWork());
            let isSuccess = false;
            let errors = [];
            (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.forkJoin)(taskUns)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.take)(1))
                .subscribe({
                next: (values) => {
                    isSuccess = values.every(($1, index) => {
                        if ($1 === true)
                            return true;
                        errors.push(this.works[index]);
                        return false;
                    });
                    resolve(isSuccess);
                },
                error: (error) => {
                    // 关闭报错
                    reject(error);
                },
                complete: () => {
                    this.sendLog({
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
    }
    clear() {
        this.pools.forEach(($1) => $1.unsubscribe());
    }
}


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
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");
// import { ControlFlow } from '../Control';
// import {
//   onlyDeclaration, Unit
// } from '../../util';
// import { ObjectTarget } from './ObjectTarget';
// import { NumberObject } from './NumberObject';
// import { StringObject } from './StringObject';
// import { BooleanObject } from './BooleanObject';
// import { decide } from '../../valueUtil';
// import { Value } from "../../../Object";
// @Unit(ControlFlow.ArrayEnum, 'execArray')
// export class ArrayObject<T>
//   extends ObjectTarget<Array<T>>
//   implements Value.ArrayAble<T>, ControlFlow.CollectionArray<T>
// {
//   declare _value: Array<T>;
//   constructor(...values: Array<Array<T> | number>) {
//     const first = values[0];
//     const firstIsArray = first instanceof Array;
//     var init: any = null;
//     if (firstIsArray && values.length === 1) {
//       init = first;
//     } else {
//       init = new Array(...values);
//     }
//     super(init);
//     this._value = init;
//   }
//   len(): number {
//     return this._value.length;
//   }
//   first(): T {
//     return this[0];
//   }
//   last(): T {
//     return this[this._value.length - 1];
//   }
//   // @attribute()@Params('index')
//   valueOfIndex(index: number): T {
//     return this[index];
//   }
//   valueOf(): Array<T> {
//     return this._value;
//   }
//   merge(target: ArrayObject<T>): ArrayObject<T> {
//     return new ArrayObject([...this._value, ...target._value]);
//   }
//   @onlyDeclaration
//   execArray(key: ControlFlow.ArrayEnum, ...args: any[]): any {
//     return null as any;
//   }
//   // array function
//   @onlyDeclaration
//   concat(...items: (T | ArrayObject<T>)[]): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   copyWithin(target: number, start: number, end?: number): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   fill(value: number, start?: number, end?: number): this {
//     return null as any;
//   }
//   @onlyDeclaration
//   find(
//     predicate: (value: number, index: number, obj: Uint8Array) => boolean,
//     thisArg?: any
//   ): Value.Mixins<Value.ObjectAble<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   findIndex(
//     predicate: (value: number, index: number, obj: Uint8Array) => boolean,
//     thisArg?: any
//   ): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   lastIndexOf(searchElement: number, fromIndex?: number): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   pop(): ObjectTarget<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   push(...items: T[]): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   reverse(): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   shift(): Value.Mixins {
//     return null as any;
//   }
//   @onlyDeclaration
//   unshift(...items: T[]): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   slice(start?: number, end?: number): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   sort(compareFn?: (a: number, b: number) => number): this {
//     return null as any;
//   }
//   @onlyDeclaration
//   splice(start: number, deleteCount?: number, ...items: any[]): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   includes(searchElement: T, fromIndex?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   indexOf(searchElement: T, fromIndex?: number): NumberObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   join(separator?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   entries(): ObjectTarget<IterableIterator<[T, T]>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   values(): ObjectTarget<IterableIterator<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   keys(): ObjectTarget<IterableIterator<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   forEach(
//     callbackfn: (value: T, index: number, array: readonly T[]) => void,
//     thisArg?: any
//   ): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   filter<S extends T>(
//     predicate: (value: T, index: number, array: readonly T[]) => value is S,
//     thisArg?: any
//   ): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   map<U>(
//     callbackfn: (value: T, index: number, array: T[]) => U,
//     thisArg?: any
//   ): ArrayObject<U> {
//     return null as any;
//   }
//   @onlyDeclaration
//   every<S extends T>(
//     predicate: (value: T, index: number, array: T[]) => value is S,
//     thisArg?: any
//   ): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   some(
//     predicate: (value: T, index: number, array: T[]) => unknown,
//     thisArg?: any
//   ): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   reduce(
//     callbackfn: (
//       previousValue: T,
//       currentValue: T,
//       currentIndex: number,
//       array: T[]
//     ) => T,
//     initialValue?: T
//   ): ArrayObject<T> {
//     return null as any;
//   }
//   @onlyDeclaration
//   reduceRight(
//     callbackfn: (
//       previousValue: T,
//       currentValue: T,
//       currentIndex: number,
//       array: T[]
//     ) => T,
//     initialValue?: T
//   ): ArrayObject<T> {
//     return null as any;
//   }
//   get length(): NumberObject {
//     return decide(this._value.length) as NumberObject;
//   }
// }


const ArrayWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Array, ['length']);
class _ArrayObject extends ArrayWrapper {
    constructor(...values) {
        const first = values[0];
        const firstIsArray = first instanceof Array;
        var init = null;
        if (firstIsArray && values.length === 1) {
            init = first;
        }
        else {
            init = new Array(...values);
        }
        super(init);
        this._value = init;
    }
    len() {
        return this._value.length;
    }
    first() {
        return this._value[0];
    }
    last() {
        return this._value[this._value.length - 1];
    }
    valueOfIndex(index) {
        return this._value[index];
    }
    valueOf() {
        return this._value;
    }
    get length() {
        return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.length);
    }
}
const ArrayObject = _ArrayObject;



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
/* harmony import */ var _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");

class BooleanObject extends _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget {
    static type;
    constructor(value = false) {
        super(value);
        this._value = value;
    }
    valueOf() {
        return !!this._value;
    }
}


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
/* harmony import */ var _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");

class DataObject extends _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget {
    constructor(value = new ArrayBuffer(0)) {
        super(value);
        this._value = value;
    }
    data() {
        return this.valueOf();
    }
    // @attribute()
    valueOf() {
        return this._value;
    }
}


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
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");
// import { ControlFlow } from '../Control';
// import { Value } from '../../../Object';
// import { ObjectTarget } from './ObjectTarget';
// import { StringObject } from './StringObject';
// import { NumberObject } from './NumberObject';
// import { Unit, onlyDeclaration } from '../../util';
// @Unit(ControlFlow.DateEnum)
// export class DateObject extends ObjectTarget<Date>
//   implements Value.DateAble, ControlFlow.DateFunction, ControlFlow.ObjectDate {
//   declare _value: Date;
//   constructor(value: Date = new Date()) {
//     super(value);
//     this._value = value;
//   }
//   // @attribute()
//   timestamp(): number {
//     return this.valueOf().getTime();
//   }
//   // @attribute()
//   valueOf(): Date {
//     return new Date(this._value);
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.DateEnum, ...args: any[]) {
//     throw new Error('Method not implemented.');
//   }
//   @onlyDeclaration
//   toDateString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toTimeString(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLocaleString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toLocaleDateString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toLocaleTimeString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getTime(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getFullYear(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCFullYear(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getMonth(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCMonth(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getDate(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCDate(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getDay(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCDay(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getHours(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCHours(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getMinutes(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCMinutes(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getSeconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCSeconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getMilliseconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getUTCMilliseconds(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   getTimezoneOffset(): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setTime(time: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setMilliseconds(ms: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCMilliseconds(ms: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setSeconds(sec: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCSeconds(sec: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setMinutes(min: number, sec?: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCMinutes(min: number, sec?: number, ms?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setHours(
//     hours: number,
//     min?: number,
//     sec?: number,
//     ms?: number
//   ): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCHours(
//     hours: number,
//     min?: number,
//     sec?: number,
//     ms?: number
//   ): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setDate(date: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCDate(date: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setMonth(month: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCMonth(month: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setFullYear(year: number, month?: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   setUTCFullYear(year: number, month?: number, date?: number): NumberObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toUTCString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toISOString(): StringObject {
//     return null as any
//   }
//   @onlyDeclaration
//   toJSON(key?: any): StringObject {
//     return null as any
//   }
// }


const DateWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Date);
class _DateObject extends DateWrapper {
    constructor(value = new Date()) {
        super(value);
        this._value = value;
    }
    valueOf() {
        return this._value;
    }
    toLocaleString() {
        return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.toLocaleDateString());
    }
    timestamp() {
        return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.getDate());
    }
}
const DateObject = _DateObject;



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
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");
// import { ControlFlow } from '../Control';
// import { onlyDeclaration, Unit } from '../../util';
// import { BaseType } from '../../../Types';
// import { Value } from '../../../Object'
// import { ObjectTarget } from './ObjectTarget';
// import { decide } from '../../valueUtil';
// import { NumberObject } from './NumberObject';
// // @MapUint
// @Unit(ControlFlow.MapEnum)
// export class MapObject<T, U>
//   extends ObjectTarget<Map<T, U>>
//   implements Value.MapAble<T, U>, ControlFlow.CollectionMap<T, U>
// {
//   declare _value: Map<T, U>;
//   constructor(value: Map<T, U> = new Map()) {
//     super(value);
//     this._value = new Map(value);
//   }
//   // @attribute()
//   len(): number {
//     return this._value.size;
//   }
//   valueOf(): Map<T, U> {
//     return this._value;
//   }
//   merge(target: MapObject<T, U>): MapObject<T, U> {
//     const newMap = new Map<T, U>(this._value);
//     target._value.forEach(($1, key) => newMap.set(key, $1));
//     return new MapObject(newMap);
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.MapEnum, ...args: any[]): U | void {
//     return null as any;
//   }
//   @onlyDeclaration
//   get(key: string): U | void {
//     return null as any;
//   }
//   @onlyDeclaration
//   set(key: string, value: BaseType): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   has(key: string): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   delete(key: string): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   clear(): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   entries(): Value.ObjectAble<IterableIterator<[T, U]>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   forEach(
//     callback: (value: U, key: T, map: Map<T, U>) => void,
//     thisArg?: any
//   ): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   values(): Value.ObjectAble<IterableIterator<U>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   keys(): Value.ObjectAble<IterableIterator<T>> {
//     return null as any;
//   }
//   get size(): Value.NumberAble {
//     return decide(this._value.size) as NumberObject;
//   }
// }


const MapWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Map, ['size']);
class _MapObject extends MapWrapper {
    valueOf() {
        return this._value;
    }
    len() {
        return this._value.size;
    }
    get size() {
        return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.size);
    }
}
const MapObject = _MapObject;



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
/* harmony import */ var _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");

class NULLObject extends _ObjectTarget__WEBPACK_IMPORTED_MODULE_0__.ObjectTarget {
    constructor(value = null) {
        super(value);
        this._value = value;
    }
    // @attribute()
    valueOf() {
        return this._value;
    }
    merge(target) {
        return new NULLObject(null);
    }
    isTruly() {
        return !!this._value;
    }
    isNull() {
        return this._value === null;
    }
    isUndefined() {
        return this._value === undefined;
    }
}


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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util */ "./src/Object/util.ts");
/* harmony import */ var _BooleanObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BooleanObject */ "./src/Object/Able/Base/BooleanObject.ts");
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _NumberObject_1;



const NumberWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_2__.createExtendsConstruct)(Number);
let _NumberObject = _NumberObject_1 = class _NumberObject extends NumberWrapper {
    static type;
    constructor(value = 1) {
        super(value);
        this._value = value;
    }
    get [Symbol.toStringTag]() {
        return super[Symbol.toStringTag];
    }
    valueOf() {
        return this._value;
    }
    json() {
        return super.json();
    }
    compare(type, target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(false);
    }
    more(target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value > target._value);
    }
    equal(target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value === target._value);
    }
    less(target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value < target._value);
    }
    moreEqual(target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value >= target._value);
    }
    lessEqual(target) {
        return new _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject(this._value <= target._value);
    }
    calc(type, target) {
        return new _NumberObject_1(0);
    }
    plus(target) {
        return new _NumberObject_1(this._value + target._value);
    }
    reduce(target) {
        return new _NumberObject_1(this._value - target._value);
    }
    multi(target) {
        return new _NumberObject_1(this._value * target._value);
    }
    divide(target) {
        return new _NumberObject_1(target._value === 0 ? Infinity : this._value / target._value);
    }
};
__decorate([
    _util__WEBPACK_IMPORTED_MODULE_0__.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", _BooleanObject__WEBPACK_IMPORTED_MODULE_1__.BooleanObject)
], _NumberObject.prototype, "compare", null);
__decorate([
    _util__WEBPACK_IMPORTED_MODULE_0__.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", _NumberObject)
], _NumberObject.prototype, "calc", null);
_NumberObject = _NumberObject_1 = __decorate([
    _util__WEBPACK_IMPORTED_MODULE_0__.CalcUnit,
    _util__WEBPACK_IMPORTED_MODULE_0__.CompareUnit,
    __metadata("design:paramtypes", [Number])
], _NumberObject);
const NumberObject = _NumberObject;



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
class ObjectTarget {
    get [Symbol.toStringTag]() {
        return 'flow-object';
    }
    constructor(value = {}) {
        this._value = value;
    }
    valueOf() {
        return this._value;
    }
    json() {
        const { StringObject } = __webpack_require__(/*! ./StringObject */ "./src/Object/Able/Base/StringObject.ts");
        try {
            return new StringObject(JSON.stringify(this._value));
        }
        catch (error) {
            return new StringObject("{}");
        }
    }
}


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
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");
// import { ControlFlow } from '../Control';
// import { onlyDeclaration, Unit } from '../../util';
// import { Value } from '../../../Object';
// import { ObjectTarget } from './ObjectTarget';
// import { NumberObject } from './NumberObject';
// import { decide } from '../../valueUtil';
// @Unit(ControlFlow.SetEnum)
// export class SetObject<T>
//   extends ObjectTarget<Set<T>>
//   implements Value.SetAble<T>, ControlFlow.CollectionSet<T>
// {
//   constructor(value?: Set<T> | Array<T>) {
//     const init = !!value
//       ? Array.isArray(value)
//         ? new Set(value)
//         : value
//       : new Set<T>();
//     super(init);
//     this._value = init;
//   }
//   // @attribute()
//   len(): number {
//     return this._value.size;
//   }
//   valueOf(): Set<T> {
//     return this._value;
//   }
//   merge(target: SetObject<T>): SetObject<T> {
//     const newSet = new Set<T>();
//     this._value.forEach(($1) => newSet.add($1));
//     target.forEach(($1) => newSet.add($1));
//     new Set().keys;
//     return new SetObject(newSet);
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.SetEnum, ...args: any[]): any {
//     return null as any;
//   }
//   @onlyDeclaration
//   has(value: T): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   add(value: T): this {
//     return this;
//   }
//   @onlyDeclaration
//   delete(value: T): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   clear(): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   forEach(
//     callbackfn: (value: T, value2: T, set: Set<T>) => void,
//     thisArg?: any
//   ): void {
//     return null as any;
//   }
//   @onlyDeclaration
//   entries(): Value.ObjectAble<IterableIterator<[T, T]>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   values(): Value.ObjectAble<IterableIterator<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   keys(): Value.ObjectAble<IterableIterator<T>> {
//     return null as any;
//   }
//   get size(): Value.NumberAble {
//     return decide(this._value.size) as NumberObject;
//   }
// }


const SetWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(Set, ['size']);
class _SetObject extends SetWrapper {
    constructor(source) {
        super();
        this._value = new Set(source);
    }
    len() {
        return this._value.size;
    }
    valueOf() {
        return this._value;
    }
    get size() {
        return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.size);
    }
}
const SetObject = _SetObject;



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
/* harmony import */ var _extend_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");
// import { ControlFlow } from '../Control';
// import { Value } from '../../../Object';
// import { ObjectTarget } from './ObjectTarget';
// import { onlyDeclaration, Unit } from '../../util';
// import { NumberObjectAble, NumberObject } from './NumberObject';
// import { BooleanObject } from './BooleanObject'
// @Unit(ControlFlow.StringEnum)
// export class StringObject
//   extends ObjectTarget<string>
//   implements Value.StringAble, ControlFlow.ObjectString {
//   static type: string;
//   declare _value: string;
//   constructor(value: string = '') {
//     super(value);
//     this._value = value;
//   }
//   // @attribute()
//   valueOf(): string {
//     return this._value;
//   }
//   @onlyDeclaration
//   execFunction(key: ControlFlow.StringEnum, ...args: any[]) {
//     // throw new Error('Method not implemented.');
//     return null as any;
//   }
//   get length(): NumberObjectAble {
//     return new NumberObject(this._value.length);
//   }
//   @onlyDeclaration
//   anchor(name: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   big(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   blink(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   bold(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   charAt(pos: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   charCodeAt(index: number): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   codePointAt(pos: number): Value.Mixins<Value.NumberAble> {
//     return null as any;
//   }
//   @onlyDeclaration
//   concat(...args: string[]): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   endsWith(searchString: string, endPosition?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   fixed(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   fontcolor(color: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   fontsize(size: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   includes(searchString: string, position?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   indexOf(searchString: string, position?: number): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   italics(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   lastIndexOf(searchString: string, position?: number): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   link(url: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   localeCompare(that: string): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   match(regexp: RegExp): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   matchAll(regexp: RegExp): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   normalize(form?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   padEnd(targetLength: number, padString?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   padStart(targetLength: number, padString?: string): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   repeat(count: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   replace(
//     searchValue: string | RegExp,
//     replaceValue: string | ((substring: string, ...args: any[]) => string)
//   ): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   replaceAll(
//     searchValue: string | RegExp,
//     replaceValue: string | ((substring: string, ...args: any[]) => string)
//   ): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   search(regexp: RegExp): NumberObjectAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   slice(start: number, end?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   small(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   split(separator?: string | RegExp, limit?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   strike(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   sub(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   substr(start: number, length?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   substring(start: number, end?: number): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLocaleLowerCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLocaleUpperCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toLowerCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toUpperCase(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trim(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimLeft(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimRight(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   toString(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   sup(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   startsWith(searchString: string, position?: number): BooleanObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimStart(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   trimEnd(): StringObject {
//     return null as any;
//   }
//   @onlyDeclaration
//   at(index: number): StringObject {
//     return null as any;
//   }
// }


const StringWrapper = (0,_extend_util__WEBPACK_IMPORTED_MODULE_0__.createExtendsConstruct)(String, ['length']);
class _StringObject extends StringWrapper {
    constructor(value) {
        super();
        this._value = value;
    }
    valueOf() {
        return this._value;
    }
    get length() {
        return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(this._value.length);
    }
}
const StringObject = _StringObject;



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
    // 比较属性 compare
    let CompareEnum;
    (function (CompareEnum) {
        CompareEnum["More"] = "more";
        CompareEnum["Equal"] = "equal";
        CompareEnum["Less"] = "less";
        CompareEnum["MoreEqual"] = "moreEqual";
        CompareEnum["LessEqual"] = "lessEqual";
    })(CompareEnum = ControlFlow.CompareEnum || (ControlFlow.CompareEnum = {}));
    // 计算属性
    let CalcEnum;
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











// import { MixinsObject } from './Targets/Mixins'



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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/Object/util.ts");
/* harmony import */ var _Able__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Able */ "./src/Object/Able/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExtendsMap;
/***
  创建新的包装对象

  type PromiseWrapper = ValueExtends.ExtendsType<Promise<number>>
  const PromiseConstruct = createExtendsConstruct(Promise<number>)
  const instance: PromiseWrapper = Reflect.construct(PromiseConstruct, [(res, rej) => { res(111)}])
  instance.then(()=>{})

 */
function createExtendsConstruct(target, exclude = []) {
    if (!ExtendsMap)
        ExtendsMap = new Map();
    if (ExtendsMap.has(target))
        return ExtendsMap.get(target);
    const Enum = {};
    exclude = [...exclude, 'constructor', 'valueOf'];
    Object.keys(Object.getOwnPropertyDescriptors(target.prototype)).forEach(($1) => {
        if (!exclude.includes($1) && typeof $1 !== 'symbol') {
            Enum[$1] = $1;
        }
    });
    let KV = class KV extends _Able__WEBPACK_IMPORTED_MODULE_1__.ObjectTarget {
        constructor(value = {}) {
            super();
            this._value = value ?? {};
        }
    };
    KV = __decorate([
        (0,_util__WEBPACK_IMPORTED_MODULE_0__.Unit)(Enum),
        __metadata("design:paramtypes", [Object])
    ], KV);
    ExtendsMap.set(target, KV);
    return KV;
}
/**
 * @param target  Date
 * @param construct ['2021-06-23']
 * @param exclude
 * @returns
 *
 *
  简化 createExtendsConstruct

  type PromiseWrapper = ValueExtends.ExtendsType<Promise<number>>
  const aa: PromiseWrapper = createExtendsInstance<Promise<number>>(Promise, [(res, rej) => { setTimeout(() => res(111), 2000) }])
  aa.then(res => { })

 */
function createExtendsInstance(target, construct, exclude = []) {
    const DateDome = createExtendsConstruct(target, exclude);
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
/* harmony import */ var _Able__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Able */ "./src/Object/Able/index.ts");
/* harmony import */ var _Able_Control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Able/Control */ "./src/Object/Able/Control.ts");
/* harmony import */ var _valueUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./valueUtil */ "./src/Object/valueUtil.ts");



const onlyDeclarationTag = 'onlyDeclaration';
// export function attribute() {
//   return function ($1: any, $2: string, descriptor: PropertyDescriptor) {
//     ($1.constructor.attributes as Set<string>).add($2);
//   };
// }
// export function Params(params: any) {
//   return function (target: any, methodName: any, paramsIndex: any) {
//     !target.$Meta && (target.$Meta = {});
//     !target.$Meta[methodName] && (target.$Meta[methodName] = {});
//     target.$Meta[methodName][paramsIndex] = params;
//   };
// }
// export class ObjectManager {
//   static types: Set<string> = new Set();
// }
// export function DefaultValue(value: string) {
//   return function (target: any, propertyName: string) {
//     target[propertyName] = value;
//     ObjectManager.types.add(value);
//   };
// }
/**
 * 声明 方式无效 仅仅作为标记
 */
function onlyDeclaration(target, name, dec) {
    dec.value.declaration = onlyDeclarationTag;
}
function CompareUnit(host) {
    Object.keys(_Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CompareEnum).forEach((item) => {
        const key = _Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CompareEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
            host.prototype[key] = () => new _Able__WEBPACK_IMPORTED_MODULE_0__.BooleanObject(false);
        }
    });
    if (host.prototype.compare?.declaration === onlyDeclarationTag ||
        !!host.prototype.compare === false)
        host.prototype.compare = function (type, target) {
            const execFunc = host.prototype[type]?.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
function CalcUnit(host) {
    Object.keys(_Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CalcEnum).forEach((item) => {
        const key = _Able_Control__WEBPACK_IMPORTED_MODULE_1__.ControlFlow.CalcEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
            host.prototype[key] = () => new _Able__WEBPACK_IMPORTED_MODULE_0__.NumberObject(0);
        }
    });
    if (host.prototype.calc?.declaration === onlyDeclarationTag ||
        !!host.prototype.calc === false)
        host.prototype.calc = function (type, target) {
            const execFunc = host.prototype[type]?.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
function Unit(target) {
    const execName = 'execFunction';
    return function (host) {
        Object.keys(target).forEach((item) => {
            const key = target[item];
            const comFunction = host.prototype[key];
            if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
                host.prototype[key] = function (...args) {
                    const value = this.valueOf();
                    const execFunc = value[key];
                    let result;
                    if (typeof execFunc === 'function') {
                        result = execFunc.bind(value)(...args);
                    }
                    else
                        result = value;
                    return (0,_valueUtil__WEBPACK_IMPORTED_MODULE_2__.decide)(result);
                };
            }
        });
        if (host.prototype[execName]?.declaration === onlyDeclarationTag ||
            !!host.prototype[execName] === false)
            host.prototype[execName] = function (type, ...args) {
                const execFunc = host.prototype[type]?.bind(this);
                if (execFunc && typeof execFunc === 'function')
                    return execFunc(...args);
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

// type Detail<T> = ValueExtends.IsValue<T> extends true ? T : ValueExtends.GetDeepAchieve<T>
let ObjectMap = null;
const init = () => {
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
const isAbleType = (value) => {
    init();
    return Object.prototype.toString.call(value) === '[object flow-object]';
};
/**
 * 将js 数据转为 BaseType
 * 如果是BaseType类型 将不会包装。见[force]
 * @param value
 * @param force 是否强制包装
 * @returns
 */
function decide(value, force = false) {
    init();
    if (isAbleType(value) && force === false)
        return value;
    const key = Object.prototype.toString.call(value);
    const Target = ObjectMap[key];
    if (Target) {
        return new Target(value ?? {});
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
    let WorkRunStatus;
    (function (WorkRunStatus) {
        WorkRunStatus[WorkRunStatus["INIT"] = 0] = "INIT";
        // FROZEN,//冻结状态
        WorkRunStatus[WorkRunStatus["READY"] = 1] = "READY";
        // PRE_RUN,//预运行状态 已经初始化
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
/* eslint-disable */

var JSRUNEnvirType;
(function (JSRUNEnvirType) {
    JSRUNEnvirType[JSRUNEnvirType["NODE_PC"] = 10] = "NODE_PC";
    JSRUNEnvirType[JSRUNEnvirType["WEB_PC"] = 20] = "WEB_PC";
    JSRUNEnvirType[JSRUNEnvirType["WEB_MOBILE"] = 26] = "WEB_MOBILE";
    JSRUNEnvirType[JSRUNEnvirType["OTHER"] = 100] = "OTHER";
})(JSRUNEnvirType || (JSRUNEnvirType = {}));
const EnvirType = {
    /**
     * WIndow 浏览器 运行环境
     */
    WINDOWS: 'win',
    /**
     * MAC 浏览器 运行环境
     */
    MACINTOSH: 'mac',
    /***
     * Linux 浏览器 运行环境
     */
    LINUX: 'linux',
    /***
     * ios 浏览器  运行环境
     */
    IOS: 'iOS',
    /**
     * 安卓 浏览器 运行环境
     */
    ANDROID: 'Android',
    /**
     * 黑莓 运行环境
     */
    BLACKBERRY: 'bb',
    /***
     * Win iphone 运行环境
     */
    WINDOWS_PHONE: 'winphone',
    Other: 'other',
};
/**
 * 是否为 rn 代码
 */
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
        const getDesktopOS = () => {
            var pf = navigator.platform;
            if (pf.indexOf('Win') != -1) {
                // 说明当前是Windows操作系统
                var rVersion = /Windows NT (\d+).(\d)/i;
                var uaResult = userAgent.match(rVersion);
                var sVersionStr = '';
                if (uaResult[1] == '6') {
                    if (uaResult[2] == 1) {
                        sVersionStr = '7'; // 说明当前运行在Windows 7 中
                    }
                    else if (uaResult[2] > 1) {
                        sVersionStr = '8'; // 说明当前运行在Windows 8 中
                    }
                }
                else {
                    sVersionStr = uaResult[1];
                }
                return { name: EnvirType.WINDOWS, versionStr: sVersionStr };
            }
            else if (pf.indexOf('Mac') != -1) {
                return { name: EnvirType.MACINTOSH, versionStr: '' }; // Macintosh操作系统
            }
            else if (pf.indexOf('Linux') != -1) {
                return { name: EnvirType.LINUX, versionStr: '' }; // 说明当前运行在Linux操作系统
            }
            return null;
        };
        platform = /Windows Phone (?:OS )?([\d.]*)/; // windows phone的正则表达式
        result = userAgent.match(platform);
        if (result) {
            return { name: EnvirType.WINDOWS_PHONE, versionStr: result[1] };
        }
        // BlackBerry 10
        if (userAgent.indexOf('(BB10;') > 0) {
            platform = /\sVersion\/([\d.]+)\s/; // BlackBerry的regular expression
            result = userAgent.match(platform);
            if (result) {
                return { name: EnvirType.BLACKBERRY, versionStr: result[1] };
            }
            else {
                return { name: EnvirType.BLACKBERRY, versionStr: '10' };
            }
        }
        // iOS, Android, BlackBerry 6.0+:
        platform =
            /\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;
        result = userAgent.match(platform);
        if (result) {
            var appleDevices = /iPhone|iPad|iPod/;
            var bbDevices = /PlayBook|BlackBerry/;
            if (result[0].match(appleDevices)) {
                result[3] = result[3].replace(/_/g, '.');
                return { name: EnvirType.IOS, versionStr: result[3] }; // iOS操作系统
            }
            else if (result[2].match(/Android/)) {
                result[2] = result[2].replace(/\s/g, '');
                return { name: EnvirType.ANDROID, versionStr: result[3] }; // Android操作系统
            }
            else if (result[0].match(bbDevices)) {
                return { name: EnvirType.BLACKBERRY, versionStr: result[4] }; // Blackberry
            }
        }
        //Android平台上的Firefox浏览器
        platform = /\((Android)[\s]?([\d][.\d]*)?;.*Firefox\/[\d][.\d]*/;
        result = userAgent.match(platform);
        if (result) {
            return {
                name: EnvirType.ANDROID,
                versionStr: result.length == 3 ? result[2] : '',
            };
        }
        // Desktop
        return getDesktopOS();
    }
    else {
        return { name: EnvirType.Other, versionStr: '' };
    }
}
const topThis = Function('return this')();
var currentEnir;
if (topThis.process && (0,_tools__WEBPACK_IMPORTED_MODULE_0__.getObjectType)(topThis.process) === '[object process]') {
    currentEnir = JSRUNEnvirType.NODE_PC;
}
else {
    const typeName = getJSEnvironment()?.name;
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
const isWeb = currentEnir === JSRUNEnvirType.WEB_MOBILE ||
    currentEnir === JSRUNEnvirType.WEB_PC;
const isNode = currentEnir === JSRUNEnvirType.NODE_PC;
const isPC = currentEnir === JSRUNEnvirType.NODE_PC ||
    currentEnir === JSRUNEnvirType.WEB_PC;
const isMobile = currentEnir === JSRUNEnvirType.WEB_MOBILE;
const isJS = true;
const PlatformSelect = (select) => {
    let target;
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ "./src/index.ts");
/* harmony import */ var _Object_valueUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Object/valueUtil */ "./src/Object/valueUtil.ts");


/**
 * 解包
 * @param value
 * @returns
 */
function unpackValue(value) {
    if (!!value === false)
        return '';
    return value?._value.value.valueOf();
}
/**
 * 组合包装
 * @param input
 * @param value
 * @returns
 * wrapperValue(null,string) = wrapperValue<string>(null,StringObject) => ChannelObject<StringObject>
 */
function wrapperValue(input, value) {
    const nextValue = (0,_Object_valueUtil__WEBPACK_IMPORTED_MODULE_1__.decide)(value);
    return new ___WEBPACK_IMPORTED_MODULE_0__.ObjectTarget({
        ...input._value,
        value: nextValue,
    });
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
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
/*
 * @Author:
 * @Date: 2022-06-08 19:31:16
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-07-06 15:53:56
 * @desc : undefined
 */
const isURL = (url) => {
    var strRegex = '^((https|http|ftp)://)?' + //(https或http或ftp):// 可有可无
        "(([\\w_!~*'()\\.&=+$%-]+: )?[\\w_!~*'()\\.&=+$%-]+@)?" + //ftp的user@  可有可无
        '(([0-9]{1,3}\\.){3}[0-9]{1,3}' + // IP形式的URL- 3位数字.3位数字.3位数字.3位数字
        '|' + // 允许IP和DOMAIN（域名）
        '(localhost)|' + //匹配localhost
        "([\\w_!~*'()-]+\\.)*" + // 域名- 至少一个[英文或数字_!~*\'()-]加上.
        '\\w+\\.' + // 一级域名 -英文或数字  加上.
        '[a-zA-Z]{1,6})' + // 顶级域名- 1-6位英文
        '(:[0-9]{1,5})?' + // 端口- :80 ,1-5位数字
        '((/?)|' + // url无参数结尾 - 斜杆或这没有
        "(/[\\w_!~*'()\\.;?:@&=+$,%#-]+)+/?)$"; //请求参数结尾- 英文或数字和[]内的各种字符
    var re = new RegExp(strRegex, 'i'); //i不区分大小写
    //将url做uri转码后再匹配，解除请求参数中的中文和空字符影响
    if (re.test(encodeURI(url))) {
        return true;
    }
    else {
        return false;
    }
};
const isWindowFilePath = (url) => {
    return url.startsWith('file://');
};
const has = Function.call.bind(Object.prototype.hasOwnProperty);
const getObjectType = (source) => Object.prototype.toString.call(source);
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
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-base64 */ "js-base64");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");





//编码
class Base64EnCodeWork extends _Instruction__WEBPACK_IMPORTED_MODULE_1__.InstructionMTM {
    name = "Base64EnCodeWork";
    run(input) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.unpackValue)(input);
            }
            subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.wrapperValue)(input, js_base64__WEBPACK_IMPORTED_MODULE_0__.Base64.encode(target)));
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
    static isAble() {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    }
}
//解码
class Base64DecodeWork extends _Instruction__WEBPACK_IMPORTED_MODULE_1__.InstructionMTM {
    name = "Base64DecodeWork";
    run(input) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__.Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.unpackValue)(input);
            }
            subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.wrapperValue)(input, js_base64__WEBPACK_IMPORTED_MODULE_0__.Base64.decode(target)));
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
    static isAble() {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    }
}



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
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
/* harmony import */ var _Object_valueUtil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Object/valueUtil */ "./src/Object/valueUtil.ts");





class BeginWork extends _Instruction__WEBPACK_IMPORTED_MODULE_1__.InstructionOTO {
    static OPTION;
    name = "BeginWork";
    static _id = 0;
    // 输入 头部work
    // inputSubject: Subject<BaseType> = new Subject<BaseType>();
    inputSubscription;
    constructor() {
        super();
        this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
    }
    // // 处理上一个的传入
    // _connectChannel() {
    //   const that = this;
    //   // 处理启动指令 仅仅头部work会触发
    //   var sub1: Subscription =
    //     this.inputSubject
    //       .pipe(
    //         take(Infinity)
    //       ).subscribe({
    //         next: (value: BaseType) => that._run(value),
    //         error: (error) => that.error(error),
    //         complete: null,
    //       })
    //   this.inputSubscription = sub1;
    //   this.pools.push(sub1);
    // }
    // _run(input?: BaseType, initOption?: any): void {
    //   // this.nextWork?.next(input);
    //   this.nextWork.next(input);
    // }
    /**
     * 运行 头部
     * @param value
     */
    startRun(value, runId) {
        const id = runId ?? (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
        this.nextWork.next(new _Object__WEBPACK_IMPORTED_MODULE_3__.ObjectTarget({
            id,
            value: (0,_Object_valueUtil__WEBPACK_IMPORTED_MODULE_4__.decide)(value),
            option: {},
        }));
    }
    completeOneLoop() { }
    static isAble() {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
    }
}


/***/ }),

/***/ "./src/Works/ExtendsWorks/FetchWork.ts":
/*!*********************************************!*\
  !*** ./src/Works/ExtendsWorks/FetchWork.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FetchWork)
/* harmony export */ });
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../.. */ "./src/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);





class FetchWork extends _Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO {
    name = 'FetchWork';
    _getInitOption(input, baseOption = {}) {
        const initParams = input.valueOf();
        const { url, method, timeout, data } = initParams;
        const request = {
            url,
            method: initParams.method || baseOption.method || 'GET',
            timeout: timeout || baseOption.timeout || 10000,
            headers: {
                ...(baseOption.headers || {}),
                ...(initParams.headers || {}),
            },
        };
        request.data = data;
        if (method && method.toLocaleUpperCase() === 'GET') {
            request.headers['Content-Type'] =
                request.headers['Content-Type'] || 'application/json';
        }
        request.timeoutErrorMessage = '请求超时';
        return request;
    }
    run(input, baseOption) {
        const that = this;
        const options = this._getInitOption(input._value.value, baseOption);
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
            const fetchSub = that.context.platform
                .fetch(options)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((result) => {
                const { data } = result.valueOf();
                this.logMsg(`[FetchWork][load:data]${data}`, input);
            }))
                .subscribe({
                next: (data) => {
                    const result = data.valueOf();
                    if (result.error) {
                        subscriber.error(result.error);
                    }
                    else {
                        subscriber.next(new ___WEBPACK_IMPORTED_MODULE_3__.ObjectTarget({
                            ...input._value,
                            value: result.data,
                        }));
                        subscriber.complete();
                    }
                },
                error: (error) => subscriber.error(error),
                complete: () => subscriber.complete(),
            });
            return {
                unsubscribe: () => {
                    subscriber.unsubscribe();
                    fetchSub.unsubscribe();
                },
            };
        });
    }
    static isAble() {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
    }
}


/***/ }),

/***/ "./src/Works/ExtendsWorks/LoadFileWork.ts":
/*!************************************************!*\
  !*** ./src/Works/ExtendsWorks/LoadFileWork.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoadFileWork)
/* harmony export */ });
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Bridge/ConfigTypes */ "./src/Bridge/ConfigTypes.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");







class LoadFileWork extends _Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO {
    name = 'LoadFileWork';
    currentConfig = { type: _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_4__.FileType.All };
    constructor(config) {
        super();
        this.currentConfig = config || { type: _Bridge_ConfigTypes__WEBPACK_IMPORTED_MODULE_4__.FileType.All };
    }
    run(input, option) {
        const that = this;
        const runOption = { ...option, ...this.currentConfig };
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
            const target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__.unpackValue)(input);
            const sub = that.context.platform
                .loadFile(target, runOption)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((data) => {
                const obj = data;
                const { loaded, total, finish } = obj.valueOf();
                this.logMsg(`加载进度[load:progress]---：${loaded}/${total} 是否完成：${finish}`, input);
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeLast)(1))
                .subscribe({
                next: (obj) => {
                    const { data, file } = obj.valueOf();
                    subscriber.next(new _Object__WEBPACK_IMPORTED_MODULE_2__.ObjectTarget({
                        ...input._value,
                        value: new _Object__WEBPACK_IMPORTED_MODULE_2__.DataObject(data),
                        option: { file },
                    }));
                    subscriber.complete();
                },
                complete: () => subscriber.complete(),
                error: (err) => subscriber.error(err),
            });
            return {
                unsubscribe: () => {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    }
    static isAble() {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    }
}


/***/ }),

/***/ "./src/Works/ExtendsWorks/OpenURLWork.ts":
/*!***********************************************!*\
  !*** ./src/Works/ExtendsWorks/OpenURLWork.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OpenURLWork)
/* harmony export */ });
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");





/**
 * 打开路径
 * http://www.baidu.com
 * node window: file:///C:/Users/Administrator    file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg
 *
 * node:可以打开文件 网页
 * web:只能代开网页
 */
class OpenURLWork extends _Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO {
    name = "OpenURLWork";
    run(input, option) {
        const that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
            const target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.unpackValue)(input);
            const sub = that.context.platform
                .open(target, option)
                .subscribe({
                next: _ => subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_4__.wrapperValue)(input, new _Object__WEBPACK_IMPORTED_MODULE_2__.BooleanObject(true))),
                complete: () => subscriber.complete(),
                error: (err) => subscriber.error(err)
            });
            return {
                unsubscribe: () => {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    }
    static isAble() {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_3__.isJS;
    }
}


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
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");




/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */
class QRCodeWork extends _Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO {
    name = "QRCodeWork";
    run(input, option) {
        const that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = "";
            else {
                target = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input);
            }
            const sub = that.context.platform
                .createQrCode(target, option)
                .subscribe({
                next: (res) => subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, res._value)),
                complete: () => subscriber.complete(),
                error: (err) => subscriber.error(err),
            });
            return {
                unsubscribe: () => {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    }
    static isAble() {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
        // return isNode || isWeb || isRN
    }
}



/***/ }),

/***/ "./src/Works/ExtendsWorks/RunCommandWork.ts":
/*!**************************************************!*\
  !*** ./src/Works/ExtendsWorks/RunCommandWork.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RunCommandWork)
/* harmony export */ });
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");




/**
 * "1 + $I$ "
 * @param template
 * @param input
 * @param option
 * @returns
 */
function handleEvalCommand(template, params, config, runOption) {
    const input = (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(params);
    let runCommand = template;
    if (typeof input === 'string') {
        const placeholder = config['*'];
        if (placeholder) {
            const reg = new RegExp(placeholder, 'g');
            runCommand = runCommand.replace(reg, input);
        }
    }
    else {
        Object.keys(config).forEach((key) => {
            const placeholder = config[key];
            const reg = new RegExp(placeholder, 'g');
            const value = input[key];
            runCommand = runCommand.replace(reg, value);
        });
    }
    return runCommand;
}
/**
 * 默认：
 * run javascript
 *
 * node:指定
 *  = "#javascript#console.log('hello world')"
 *  = "#shell#echo hello world"
 *
 *  lastWork-output-value:1000
 *  new RunCommandWork('$I$ + 1') === new RunCommandWork('$I$ + 1',{'*':'$I$ '})
 *  ===>run "1000 + 1"
 *  ==================================
 *
 *  lastWork-output-value:{A:1000,B:2}
 *  new RunCommandWork('$X$ + 20 * $Y$',{'A':'$X$,'B':'$Y$' '})
 *  ===> "1000 + 20 * 2"
 *  ===================================
 *
 *  lastWork-output-value:{A:1000,B:2}
 *  new RunCommandWork((params:{A:1000,B:2})=>{
 *     return `${A} * 2 + ${B}`
 *  })
 */
class RunCommandWork extends _Instruction__WEBPACK_IMPORTED_MODULE_0__.InstructionOTO {
    template = '';
    name = 'RunCommandWork';
    paramsConfig = {};
    callBack = undefined;
    constructor(...args) {
        super();
        if (typeof args[0] === 'string') {
            const template = args[0] || '$I$';
            const paramsConfig = args[1] || { '*': '$I$' };
            this.template = template;
            this.paramsConfig = paramsConfig;
        }
        else if (typeof args[0] === 'function') {
            this.callBack = args[0];
        }
    }
    run(command, option) {
        const that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
            let target;
            if (that.callBack && typeof that.callBack === 'function') {
                target = this.callBack((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(command), option);
            }
            else
                target = handleEvalCommand(that.template, command, this.paramsConfig, option);
            const sub = that.context.platform
                .runCommand(target)
                .subscribe({
                next: (info) => {
                    this.logMsg(`执行command：${info.error ? '失败' : '成功'}。结果：${info.result}`, command);
                    subscriber.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(command, (info.error ? undefined : info.result)));
                },
                complete: () => subscriber.complete(),
                error: (err) => subscriber.error(err),
            });
            return {
                unsubscribe: () => {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    }
    static isAble() {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
        // return isNode || isWeb || isRN || isElectron
    }
}


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Object_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Object/index */ "./src/Object/index.ts");
/* harmony import */ var _Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");
/* harmony import */ var _Instruction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");





// 一直发
class IntervalWork extends _Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTM {
    name = "IntervalWork";
    intervalTime;
    maxCount;
    notifier;
    constructor(interval, max = Infinity, notifier) {
        super();
        this.intervalTime = interval || 1000;
        this.maxCount = max;
        this.notifier = notifier || rxjs__WEBPACK_IMPORTED_MODULE_0__.NEVER;
    }
    run(input) {
        const intervalTime = parseInt((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input)) || this.intervalTime || 1000;
        const that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
            const sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(intervalTime, rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(that.maxCount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.notifier)).subscribe({
                next: (value) => observer.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, value)),
                error: (error) => observer.error(error),
                complete: () => observer.complete()
            });
            return {
                unsubscribe: () => {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    }
}
// 定时发
class TimeoutWork extends _Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTO {
    name = "TimeoutWork";
    intervalTime;
    constructor(interval) {
        super();
        this.intervalTime = interval || 1000;
    }
    run(input) {
        const intervalTime = parseInt((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input)) || this.intervalTime || 1000;
        const that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
            const sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(intervalTime, rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1)).subscribe({
                next: (value) => {
                    observer.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, value));
                },
                error: (error) => observer.error(error),
                complete: () => observer.complete()
            });
            return {
                unsubscribe: () => {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    }
}
// 延迟 然后一直发
class DelayIntervalWork extends _Instruction__WEBPACK_IMPORTED_MODULE_4__.InstructionOTM {
    name = 'DelayIntervalWork';
    intervalTime;
    maxCount;
    delayTime;
    notifier;
    constructor(delay = 0, interval = 1000, max = Infinity, notifier) {
        super();
        this.intervalTime = interval || 1000;
        this.maxCount = max;
        this.delayTime = delay || 0;
        this.notifier = notifier || rxjs__WEBPACK_IMPORTED_MODULE_0__.NEVER;
    }
    run(input) {
        const intervalTime = parseInt((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.unpackValue)(input)) || this.intervalTime || 1000;
        const that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
            const sub = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.timer)(that.delayTime, intervalTime, rxjs__WEBPACK_IMPORTED_MODULE_0__.asyncScheduler)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(that.maxCount), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.takeUntil)(this.notifier))
                .subscribe({
                next: (value) => observer.next((0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_3__.wrapperValue)(input, new _Object_index__WEBPACK_IMPORTED_MODULE_2__.NumberObject(value))),
                error: (error) => observer.error(error),
                complete: () => observer.complete()
            });
            return {
                unsubscribe: () => {
                    observer.unsubscribe();
                    sub.unsubscribe();
                }
            };
        });
    }
}



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









/**
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */
class Instruction extends rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject {
    name = 'Instruction';
    static _id = 0;
    id = Instruction._id++;
    uuid;
    beforeWork;
    nextWork;
    context;
    runSubscriptions = new Map();
    pools = []; // 订阅自己的
    // 运行配置 config:OPTION todo
    config = { development: true };
    constructor() {
        super();
        this.uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)();
    }
    // 连接上下通道
    prepare(before, next) {
        this.beforeWork = before;
        this.nextWork = next;
        this.config = this.context?.runOptions || {};
        this._connectChannel();
        return Promise.resolve();
    }
    // 处理上一个的传入
    _connectChannel() {
        const that = this;
        // // 处理数据
        const sub2 = this.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)((value) => {
            this.config?.development &&
                that.context?.sendLog({
                    work: [that],
                    content: this.context,
                    desc: '[Work:preRun]->接受到数据',
                    value: value,
                });
        })).subscribe({
            complete: () => { },
            error: (error) => that.error(error),
            next: (value) => that._run(value),
        });
        this.pools.push(sub2);
    }
    _run(value) {
        const sendLog = (desc, _value, _error) => {
            that.config?.development &&
                that.context?.sendLog({
                    work: [that],
                    content: this.context,
                    desc: desc,
                    value: _value || value,
                    error: _error,
                });
        };
        value = this.nextValue(value) || value;
        const that = this;
        const nextOption = (this.config?.workConfig || {})[this.name] || {};
        const execFunc = (0,_Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.PlatformSelect)({
            web: () => (that.web_run ??
                (that.run || _Util_tools__WEBPACK_IMPORTED_MODULE_7__.noop)).bind(that)(value, nextOption),
            node: () => (that.node_run ??
                (that.run || _Util_tools__WEBPACK_IMPORTED_MODULE_7__.noop)).bind(that)(value, nextOption),
            other: () => (that.run || _Util_tools__WEBPACK_IMPORTED_MODULE_7__.noop).bind(that)(value, nextOption),
        });
        sendLog('[Work][Func:run]->入口', value);
        const uuid = (0,uuid__WEBPACK_IMPORTED_MODULE_4__.v4)();
        const runSub = execFunc(value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(function (_value) {
            sendLog('[Work][Func:run]->结果', _value);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.observeOn)(rxjs__WEBPACK_IMPORTED_MODULE_1__.asyncScheduler))
            .subscribe({
            complete: () => {
                const unit = that.runSubscriptions.get(uuid);
                unit?.sub.unsubscribe();
                that.runSubscriptions.delete(uuid);
            },
            error: (err) => {
                sendLog('[Work][Func:run]->执行错误', value, err);
                that.completeOneLoop(value, new _Object__WEBPACK_IMPORTED_MODULE_0__.NULLObject(), false);
            },
            next: (res) => {
                sendLog('[Work][Func:run]->将执行下一个Work', res);
                that.completeOneLoop(value, res, true);
                that.nextWork?.next(res);
            },
        });
        const unit = new _WorkUnit__WEBPACK_IMPORTED_MODULE_5__.WorkUnit(that.context, that, runSub, uuid);
        this.runSubscriptions.set(unit.uuid, unit);
    }
    stopWork() {
        const that = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscribe) => {
            that.runSubscriptions.forEach((value) => {
                value?.sub.unsubscribe();
            });
            subscribe.next(true);
            subscribe.complete();
            return {
                unsubscribe: () => subscribe.unsubscribe(),
            };
        });
    }
    clear() {
        this.pools && this.pools.forEach(($1) => $1.unsubscribe());
        this.pools.length = 0;
        this.unsubscribe();
    }
    error(err) {
        this.context &&
            this.context.sendLog({
                work: [this],
                content: this.context,
                desc: '[Work:preRun]-接受上一个消息错误',
                date: new Date(),
                value: new _Object__WEBPACK_IMPORTED_MODULE_0__.StringObject(err.message),
            });
    }
    addVariable(name, value) {
        this.context && this.context.addVariable(this, name, value);
    }
    logMsg(msg, input) {
        this.config?.development &&
            this.context?.sendLog({
                work: [this],
                content: this.context,
                desc: msg,
                value: (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__.wrapperValue)(input, null),
            });
    }
    //重写
    next(value) {
        if (this.closed === false) {
            super.next(value);
        }
        else {
            this.context.sendLog({
                work: [this],
                content: this.context,
                desc: this.toString() + ' 已经关闭',
                value: (0,_Util_channel_value_util__WEBPACK_IMPORTED_MODULE_6__.wrapperValue)(value, null),
            });
        }
    }
    // 声明周期
    // 处理输入的值
    nextValue(input) {
        return input;
    }
    completeOneLoop(input, toValue, success) { }
    // 基础
    toString() {
        return `[${this.name}:${this.id}]`;
    }
    isAble() {
        return this.__proto__.isAble();
    }
    static isAble() {
        return _Util_Equipment__WEBPACK_IMPORTED_MODULE_2__.isJS;
    }
}
class InstructionOTO extends Instruction {
    nextValue(input) {
        return input;
    }
    completeOneLoop(input, toValue, success) { }
    run(input) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
}
class InstructionOTM extends Instruction {
    // 声明可以进行配置的属性 todo
    static OPTION;
    name = 'MultipleInstruction';
    nextValue(input) {
        return input;
    }
    completeOneLoop(input, next, success) { }
    run(input) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
            // subscriber.next(input);
            // 输出多次
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
}
class InstructionMTM extends Instruction {
    // 声明可以进行配置的属性 todo
    static OPTION;
    name = 'MultipleInstruction';
    nextValue(input) {
        return input;
    }
    completeOneLoop(input, next, success) { }
    run(input) {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable((subscriber) => {
            // subscriber.next(input);
            // 输出多次
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
}


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

class WorkUnit {
    context;
    work;
    uuid;
    sub;
    constructor(context, work, sub, uuid) {
        this.context = context;
        this.work = work;
        this.sub = sub;
        this.uuid = uuid ?? (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)();
    }
}


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















// 1


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