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
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SupportContentType = exports.FileType = void 0;
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
})(FileType = exports.FileType || (exports.FileType = {}));
var SupportContentType;
(function (SupportContentType) {
    SupportContentType["JSON"] = "application/json";
    SupportContentType["TEXT"] = "text/plain";
})(SupportContentType = exports.SupportContentType || (exports.SupportContentType = {}));
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Equipment_1 = __webpack_require__(/*! ../Util/Equipment */ "./src/Util/Equipment.ts");
const Mobile_1 = __webpack_require__(/*! ./Platform/Node/Mobile */ "./src/Bridge/Platform/Node/Mobile.ts");
const PC_1 = __webpack_require__(/*! ./Platform/Node/PC */ "./src/Bridge/Platform/Node/PC.ts");
const Mobile_2 = __webpack_require__(/*! ./Platform/Web/Mobile */ "./src/Bridge/Platform/Web/Mobile.ts");
const PC_2 = __webpack_require__(/*! ./Platform/Web/PC */ "./src/Bridge/Platform/Web/PC.ts");
__webpack_require__(/*! ./Difference/index */ "./src/Bridge/Difference/index.ts");
const runConfig = (0, Equipment_1.PlatformSelect)({
    web: { pc: PC_2.PCWebBridge, mobile: Mobile_2.MobileWebBridge },
    node: { pc: PC_1.PCNodejsBridge, mobile: Mobile_1.MobileNodejsBridge },
    electron: {},
});
const Target = runConfig[Equipment_1.isElectron ? "electron" : Equipment_1.isPC ? "pc" : "mobile"];
const Platform = new Target();
exports["default"] = Platform;


/***/ }),

/***/ "./src/Bridge/Platform/BasePlatform.ts":
/*!*********************************************!*\
  !*** ./src/Bridge/Platform/BasePlatform.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlatformBridge = void 0;
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Object_1 = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
const QRCode = __webpack_require__(/*! qrcode-generator */ "qrcode-generator");
const axios_1 = __webpack_require__(/*! axios */ "axios");
const Hardware_1 = __webpack_require__(/*! ./Hardware */ "./src/Bridge/Platform/Hardware.ts");
class PlatformBridge extends Hardware_1.HardwareBase {
    createQrCode(context, option) {
        return new rxjs_1.Observable((sub) => {
            let width = option?.SideLength ?? 200;
            let margin = 2;
            const qrCode = QRCode(option?.type || 4, option?.Level || "H");
            qrCode.addData((context ?? ""));
            qrCode.make();
            const moduleCount = qrCode.getModuleCount();
            const cellSize = (width - margin * 2) / moduleCount;
            const base64 = qrCode.createDataURL(cellSize, margin);
            // const base64 = qrcode.createDataURL(cellSize, margin).replace('data:image/gif;base64', 'data:image/png;base64');
            sub.next(new Object_1.StringObject(base64));
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
        return new rxjs_1.Observable((subscriber) => {
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
        return new rxjs_1.Observable((subscriber) => {
            axios_1.default.request(req)
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
                subscriber.next(new Object_1.ObjectTarget(content));
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
exports.PlatformBridge = PlatformBridge;


/***/ }),

/***/ "./src/Bridge/Platform/Hardware.ts":
/*!*****************************************!*\
  !*** ./src/Bridge/Platform/Hardware.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HardwareBase = void 0;
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
exports.HardwareBase = HardwareBase;


/***/ }),

/***/ "./src/Bridge/Platform/Node/Mobile.ts":
/*!********************************************!*\
  !*** ./src/Bridge/Platform/Node/Mobile.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MobileNodejsBridge = void 0;
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Object_1 = __webpack_require__(/*! ../../../Object */ "./src/Object/index.ts");
const BasePlatform_1 = __webpack_require__(/*! ../BasePlatform */ "./src/Bridge/Platform/BasePlatform.ts");
class MobileNodejsBridge extends BasePlatform_1.PlatformBridge {
    open(url) {
        return (0, rxjs_1.of)(new Object_1.BooleanObject(false));
    }
    loadFile(url, option) {
        return (0, rxjs_1.of)(new Object_1.ObjectTarget({
            total: 0,
            loaded: 0,
            data: new ArrayBuffer(0),
            finish: true,
            file: null,
        }));
    }
}
exports.MobileNodejsBridge = MobileNodejsBridge;


/***/ }),

/***/ "./src/Bridge/Platform/Node/PC.ts":
/*!****************************************!*\
  !*** ./src/Bridge/Platform/Node/PC.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PCNodejsBridge = void 0;
const BasePlatform_1 = __webpack_require__(/*! ../BasePlatform */ "./src/Bridge/Platform/BasePlatform.ts");
class PCNodejsBridge extends BasePlatform_1.PlatformBridge {
}
exports.PCNodejsBridge = PCNodejsBridge;


/***/ }),

/***/ "./src/Bridge/Platform/Web/Mobile.ts":
/*!*******************************************!*\
  !*** ./src/Bridge/Platform/Web/Mobile.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MobileWebBridge = void 0;
const WebBase_1 = __webpack_require__(/*! ./WebBase */ "./src/Bridge/Platform/Web/WebBase.ts");
class MobileWebBridge extends WebBase_1.WebBridge {
}
exports.MobileWebBridge = MobileWebBridge;


/***/ }),

/***/ "./src/Bridge/Platform/Web/PC.ts":
/*!***************************************!*\
  !*** ./src/Bridge/Platform/Web/PC.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PCWebBridge = void 0;
const WebBase_1 = __webpack_require__(/*! ./WebBase */ "./src/Bridge/Platform/Web/WebBase.ts");
class PCWebBridge extends WebBase_1.WebBridge {
}
exports.PCWebBridge = PCWebBridge;


/***/ }),

/***/ "./src/Bridge/Platform/Web/WebBase.ts":
/*!********************************************!*\
  !*** ./src/Bridge/Platform/Web/WebBase.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebBridge = void 0;
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Object_1 = __webpack_require__(/*! ../../../Object */ "./src/Object/index.ts");
const BasePlatform_1 = __webpack_require__(/*! ../BasePlatform */ "./src/Bridge/Platform/BasePlatform.ts");
class WebBridge extends BasePlatform_1.PlatformBridge {
    open(url) {
        const result = window.open(url, "__blank");
        return (0, rxjs_1.of)(new Object_1.BooleanObject(result !== null));
    }
    /**
     * 打开文件路径
     * @param url
     * @param option
     * @returns
     */
    loadFile(url, option) {
        return new rxjs_1.Observable((subscriber) => {
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
                    subscriber.next(new Object_1.ObjectTarget({
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
                    subscriber.next(new Object_1.ObjectTarget({ total, loaded, data, finish: true, file }));
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
exports.WebBridge = WebBridge;


/***/ }),

/***/ "./src/Configs/index.ts":
/*!******************************!*\
  !*** ./src/Configs/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DefaultRunConfig = void 0;
const ConfigTypes_1 = __webpack_require__(/*! ../Bridge/ConfigTypes */ "./src/Bridge/ConfigTypes.ts");
/**
 * 默认的配置
 */
exports.DefaultRunConfig = {
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
            type: ConfigTypes_1.FileType.All
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
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Context = void 0;
const Types_1 = __webpack_require__(/*! ./Types */ "./src/Types.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Configs_1 = __webpack_require__(/*! ./Configs */ "./src/Configs/index.ts");
const Object_1 = __webpack_require__(/*! ./Object */ "./src/Object/index.ts");
const Index_1 = __webpack_require__(/*! ./Bridge/Index */ "./src/Bridge/Index.ts");
const BeginWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/BeginWork */ "./src/Works/ExtendsWorks/BeginWork.ts");
const valueUtil_1 = __webpack_require__(/*! ./Object/valueUtil */ "./src/Object/valueUtil.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
class Context {
    status = Types_1.WorkType.WorkRunStatus.INIT;
    platform = Index_1.default;
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
    msgChannel = new rxjs_1.Subject();
    constructor(runOptions) {
        this.runOptions = (runOptions || Configs_1.DefaultRunConfig);
        const sub = this.msgChannel.subscribe({
            next: (value) => this.workMessage(value),
            error: (error) => this.workError(error),
        });
        this.pools.push(sub);
        this.addWork(new BeginWork_1.BeginWork());
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
        if (this.status !== Types_1.WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: [],
                desc: '[content][Func:addWork][context status is not init]',
                value: new Object_1.BooleanObject(false),
            });
        }
        work.context = this;
        this.works.push(work);
    }
    addWorks(...works) {
        works.forEach(this.addWork);
    }
    async prepareWorks() {
        if (this.status !== Types_1.WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: [],
                desc: '[content][Func:prepareWorks][context status is not init]',
                value: new Object_1.BooleanObject(false),
            });
        }
        await Promise.all(this.works.map(($1, index, source) => {
            const before = source[index - 1];
            const after = source[index + 1];
            return $1.prepare(before, after);
        }));
        this.status = Types_1.WorkType.WorkRunStatus.READY;
    }
    dispatch(input) {
        if (this.status === Types_1.WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: [],
                desc: '[context][Func:run][run status is not ready  or 已经初始化]',
                value: new Object_1.BooleanObject(false),
            });
        }
        const inputWork = this.works[0];
        if (inputWork) {
            inputWork.startRun((0, valueUtil_1.decide)(input));
        }
        this.status = Types_1.WorkType.WorkRunStatus.RUNNING;
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
            (0, rxjs_1.forkJoin)(taskUns)
                .pipe((0, operators_1.take)(1))
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
                        value: new Object_1.ObjectTarget({
                            id: 'stopWorkChain',
                            value: (0, valueUtil_1.decide)(isSuccess),
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
exports.Context = Context;


/***/ }),

/***/ "./src/Object/Able/Base/ArrayObject.ts":
/*!*********************************************!*\
  !*** ./src/Object/Able/Base/ArrayObject.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ArrayObject = void 0;
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
const extend_util_1 = __webpack_require__(/*! ../../extend-util */ "./src/Object/extend-util.ts");
const valueUtil_1 = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");
const ArrayWrapper = (0, extend_util_1.createExtendsConstruct)(Array, ['length']);
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
        return (0, valueUtil_1.decide)(this._value.length);
    }
}
const ArrayObject = _ArrayObject;
exports.ArrayObject = ArrayObject;


/***/ }),

/***/ "./src/Object/Able/Base/BooleanObject.ts":
/*!***********************************************!*\
  !*** ./src/Object/Able/Base/BooleanObject.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BooleanObject = void 0;
const ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");
class BooleanObject extends ObjectTarget_1.ObjectTarget {
    static type;
    constructor(value = false) {
        super(value);
        this._value = value;
    }
    valueOf() {
        return !!this._value;
    }
}
exports.BooleanObject = BooleanObject;


/***/ }),

/***/ "./src/Object/Able/Base/DataObject.ts":
/*!********************************************!*\
  !*** ./src/Object/Able/Base/DataObject.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataObject = void 0;
const ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");
class DataObject extends ObjectTarget_1.ObjectTarget {
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
exports.DataObject = DataObject;


/***/ }),

/***/ "./src/Object/Able/Base/DateObject.ts":
/*!********************************************!*\
  !*** ./src/Object/Able/Base/DateObject.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DateObject = void 0;
const Control_1 = __webpack_require__(/*! ../Control */ "./src/Object/Able/Control.ts");
const ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");
const StringObject_1 = __webpack_require__(/*! ./StringObject */ "./src/Object/Able/Base/StringObject.ts");
const NumberObject_1 = __webpack_require__(/*! ./NumberObject */ "./src/Object/Able/Base/NumberObject.ts");
const util_1 = __webpack_require__(/*! ../../util */ "./src/Object/util.ts");
let DateObject = class DateObject extends ObjectTarget_1.ObjectTarget {
    constructor(value = new Date()) {
        super(value);
        this._value = value;
    }
    // @attribute()
    timestamp() {
        return this.valueOf().getTime();
    }
    // @attribute()
    valueOf() {
        return new Date(this._value);
    }
    execFunction(key, ...args) {
        throw new Error('Method not implemented.');
    }
    toDateString() {
        return null;
    }
    toTimeString() {
        return null;
    }
    toLocaleString() {
        return null;
    }
    toLocaleDateString() {
        return null;
    }
    toLocaleTimeString() {
        return null;
    }
    getTime() {
        return null;
    }
    getFullYear() {
        return null;
    }
    getUTCFullYear() {
        return null;
    }
    getMonth() {
        return null;
    }
    getUTCMonth() {
        return null;
    }
    getDate() {
        return null;
    }
    getUTCDate() {
        return null;
    }
    getDay() {
        return null;
    }
    getUTCDay() {
        return null;
    }
    getHours() {
        return null;
    }
    getUTCHours() {
        return null;
    }
    getMinutes() {
        return null;
    }
    getUTCMinutes() {
        return null;
    }
    getSeconds() {
        return null;
    }
    getUTCSeconds() {
        return null;
    }
    getMilliseconds() {
        return null;
    }
    getUTCMilliseconds() {
        return null;
    }
    getTimezoneOffset() {
        return null;
    }
    setTime(time) {
        return null;
    }
    setMilliseconds(ms) {
        return null;
    }
    setUTCMilliseconds(ms) {
        return null;
    }
    setSeconds(sec, ms) {
        return null;
    }
    setUTCSeconds(sec, ms) {
        return null;
    }
    setMinutes(min, sec, ms) {
        return null;
    }
    setUTCMinutes(min, sec, ms) {
        return null;
    }
    setHours(hours, min, sec, ms) {
        return null;
    }
    setUTCHours(hours, min, sec, ms) {
        return null;
    }
    setDate(date) {
        return null;
    }
    setUTCDate(date) {
        return null;
    }
    setMonth(month, date) {
        return null;
    }
    setUTCMonth(month, date) {
        return null;
    }
    setFullYear(year, month, date) {
        return null;
    }
    setUTCFullYear(year, month, date) {
        return null;
    }
    toUTCString() {
        return null;
    }
    toISOString() {
        return null;
    }
    toJSON(key) {
        return null;
    }
};
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], DateObject.prototype, "execFunction", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", StringObject_1.StringObject)
], DateObject.prototype, "toDateString", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", StringObject_1.StringObject)
], DateObject.prototype, "toTimeString", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", StringObject_1.StringObject)
], DateObject.prototype, "toLocaleString", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", StringObject_1.StringObject)
], DateObject.prototype, "toLocaleDateString", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", StringObject_1.StringObject)
], DateObject.prototype, "toLocaleTimeString", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getTime", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getFullYear", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getUTCFullYear", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getMonth", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getUTCMonth", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getDate", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getUTCDate", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getDay", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getUTCDay", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getHours", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getUTCHours", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getMinutes", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getUTCMinutes", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getSeconds", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getUTCSeconds", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getMilliseconds", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getUTCMilliseconds", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "getTimezoneOffset", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setTime", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setMilliseconds", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setUTCMilliseconds", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setSeconds", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setUTCSeconds", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setMinutes", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setUTCMinutes", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setHours", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setUTCHours", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setDate", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setUTCDate", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setMonth", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setUTCMonth", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setFullYear", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", NumberObject_1.NumberObject)
], DateObject.prototype, "setUTCFullYear", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", StringObject_1.StringObject)
], DateObject.prototype, "toUTCString", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", StringObject_1.StringObject)
], DateObject.prototype, "toISOString", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", StringObject_1.StringObject)
], DateObject.prototype, "toJSON", null);
DateObject = __decorate([
    (0, util_1.Unit)(Control_1.ControlFlow.DateEnum),
    __metadata("design:paramtypes", [Date])
], DateObject);
exports.DateObject = DateObject;


/***/ }),

/***/ "./src/Object/Able/Base/MapObject.ts":
/*!*******************************************!*\
  !*** ./src/Object/Able/Base/MapObject.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MapObject_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapObject = void 0;
const Control_1 = __webpack_require__(/*! ../Control */ "./src/Object/Able/Control.ts");
const util_1 = __webpack_require__(/*! ../../util */ "./src/Object/util.ts");
const ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");
const valueUtil_1 = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");
// @MapUint
let MapObject = MapObject_1 = class MapObject extends ObjectTarget_1.ObjectTarget {
    constructor(value = new Map()) {
        super(value);
        this._value = new Map(value);
    }
    // @attribute()
    len() {
        return this._value.size;
    }
    valueOf() {
        return this._value;
    }
    merge(target) {
        const newMap = new Map(this._value);
        target._value.forEach(($1, key) => newMap.set(key, $1));
        return new MapObject_1(newMap);
    }
    execFunction(key, ...args) {
        return null;
    }
    get(key) {
        return null;
    }
    set(key, value) {
        return null;
    }
    has(key) {
        return null;
    }
    delete(key) {
        return null;
    }
    clear() {
        return null;
    }
    entries() {
        return null;
    }
    forEach(callback, thisArg) {
        return null;
    }
    values() {
        return null;
    }
    keys() {
        return null;
    }
    get size() {
        return (0, valueUtil_1.decide)(this._value.size);
    }
};
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], MapObject.prototype, "execFunction", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], MapObject.prototype, "get", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], MapObject.prototype, "set", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], MapObject.prototype, "has", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], MapObject.prototype, "delete", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MapObject.prototype, "clear", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MapObject.prototype, "entries", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", void 0)
], MapObject.prototype, "forEach", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MapObject.prototype, "values", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MapObject.prototype, "keys", null);
MapObject = MapObject_1 = __decorate([
    (0, util_1.Unit)(Control_1.ControlFlow.MapEnum),
    __metadata("design:paramtypes", [Map])
], MapObject);
exports.MapObject = MapObject;
// import { createExtendsConstruct } from '../Extends/extend-util';
// import { ValueExtends } from '../../types';
// import { ExecFunctionAble } from '../Extends/types';
// import { decide } from '../../valueUtil';
// import { Value } from "../../../Object";
// import { NumberObject } from './NumberObject';
// type MapExecInterface<K, V> = ExecFunctionAble<Map<K, V>, 'size'>;
// type MapInterface<K, V> = ValueExtends.WrapperReturnInterface<
//   MapExecInterface<K, V>
// > &
//   ValueExtends.Constructor<Map<K, V>>;
// const MapWrapper = createExtendsConstruct<Map<any, any>>(global.Map, ['size']);
// class _MapObject<T> extends MapWrapper {
//   get size(): NumberObject {
//     return decide(this._value.length) as NumberObject;
//   }
// }
// type CustomConstructor = {};
// interface CustomMapAble<K, V>
//   extends Value.MapAble<K, V>,
//   MapInterface<K, V>,
//   CustomConstructor { }
// export const ArrayObject = _ArrayObject as unknown as CustomArrayAble<any>;


/***/ }),

/***/ "./src/Object/Able/Base/NullObject.ts":
/*!********************************************!*\
  !*** ./src/Object/Able/Base/NullObject.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OptionalObject = void 0;
const ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");
class OptionalObject extends ObjectTarget_1.ObjectTarget {
    constructor(value = null) {
        super(value);
        this._value = value;
    }
    // @attribute()
    valueOf() {
        return this._value;
    }
    merge(target) {
        return new OptionalObject(null);
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
exports.OptionalObject = OptionalObject;


/***/ }),

/***/ "./src/Object/Able/Base/NumberObject.ts":
/*!**********************************************!*\
  !*** ./src/Object/Able/Base/NumberObject.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NumberObject_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NumberObject = void 0;
const Control_1 = __webpack_require__(/*! ../Control */ "./src/Object/Able/Control.ts");
const util_1 = __webpack_require__(/*! ../../util */ "./src/Object/util.ts");
const ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");
const BooleanObject_1 = __webpack_require__(/*! ./BooleanObject */ "./src/Object/Able/Base/BooleanObject.ts");
const StringObject_1 = __webpack_require__(/*! ./StringObject */ "./src/Object/Able/Base/StringObject.ts");
let NumberObject = NumberObject_1 = class NumberObject extends ObjectTarget_1.ObjectTarget {
    static type;
    constructor(value = 1) {
        super(value);
        this._value = value;
    }
    // @attribute()
    valueOf() {
        return this._value;
    }
    merge(target) {
        return new NumberObject_1(this._value + target._value);
    }
    compare(type, target) {
        return new BooleanObject_1.BooleanObject(false);
    }
    // Compare
    // compare: ControlFlow.CompareExec;
    more(target) {
        return new BooleanObject_1.BooleanObject(this._value > target._value);
    }
    equal(target) {
        return new BooleanObject_1.BooleanObject(this._value === target._value);
    }
    less(target) {
        return new BooleanObject_1.BooleanObject(this._value < target._value);
    }
    moreEqual(target) {
        return new BooleanObject_1.BooleanObject(this._value >= target._value);
    }
    lessEqual(target) {
        return new BooleanObject_1.BooleanObject(this._value <= target._value);
    }
    calc(type, target) {
        return new NumberObject_1(0);
    }
    plus(target) {
        return new NumberObject_1(this._value + target._value);
    }
    reduce(target) {
        return new NumberObject_1(this._value - target._value);
    }
    multi(target) {
        return new NumberObject_1(this._value * target._value);
    }
    divide(target) {
        return new NumberObject_1(target._value === 0 ? Infinity : this._value / target._value);
    }
    //
    execFunction(key, ...args) {
        (new Number()).toPrecision;
        return {};
    }
    toExponential(fractionDigits) {
        return null;
    }
    toFixed(fractionDigits) {
        return null;
    }
    toPrecision(precision) {
        return null;
    }
};
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, NumberObject]),
    __metadata("design:returntype", Object)
], NumberObject.prototype, "compare", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, NumberObject]),
    __metadata("design:returntype", NumberObject)
], NumberObject.prototype, "calc", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], NumberObject.prototype, "execFunction", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", StringObject_1.StringObject)
], NumberObject.prototype, "toExponential", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", StringObject_1.StringObject)
], NumberObject.prototype, "toFixed", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", StringObject_1.StringObject)
], NumberObject.prototype, "toPrecision", null);
NumberObject = NumberObject_1 = __decorate([
    util_1.CalcUnit,
    util_1.CompareUnit,
    (0, util_1.Unit)(Control_1.ControlFlow.NumberEnum),
    __metadata("design:paramtypes", [Number])
], NumberObject);
exports.NumberObject = NumberObject;


/***/ }),

/***/ "./src/Object/Able/Base/ObjectTarget.ts":
/*!**********************************************!*\
  !*** ./src/Object/Able/Base/ObjectTarget.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ObjectTarget = void 0;
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
    merge(target) {
        try {
            const result = Object.assign(this._value, target._value);
            return new ObjectTarget(result);
        }
        catch (error) {
            return new ObjectTarget({});
        }
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
exports.ObjectTarget = ObjectTarget;


/***/ }),

/***/ "./src/Object/Able/Base/SetObject.ts":
/*!*******************************************!*\
  !*** ./src/Object/Able/Base/SetObject.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SetObject_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SetObject = void 0;
const Control_1 = __webpack_require__(/*! ../Control */ "./src/Object/Able/Control.ts");
const util_1 = __webpack_require__(/*! ../../util */ "./src/Object/util.ts");
const ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");
const valueUtil_1 = __webpack_require__(/*! ../../valueUtil */ "./src/Object/valueUtil.ts");
let SetObject = SetObject_1 = class SetObject extends ObjectTarget_1.ObjectTarget {
    constructor(value) {
        const init = !!value
            ? Array.isArray(value)
                ? new Set(value)
                : value
            : new Set();
        super(init);
        this._value = init;
    }
    // @attribute()
    len() {
        return this._value.size;
    }
    valueOf() {
        return this._value;
    }
    merge(target) {
        const newSet = new Set();
        this._value.forEach(($1) => newSet.add($1));
        target.forEach(($1) => newSet.add($1));
        new Set().keys;
        return new SetObject_1(newSet);
    }
    execFunction(key, ...args) {
        return null;
    }
    has(value) {
        return null;
    }
    add(value) {
        return this;
    }
    delete(value) {
        return null;
    }
    clear() {
        return null;
    }
    forEach(callbackfn, thisArg) {
        return null;
    }
    entries() {
        return null;
    }
    values() {
        return null;
    }
    keys() {
        return null;
    }
    get size() {
        return (0, valueUtil_1.decide)(this._value.size);
    }
};
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], SetObject.prototype, "execFunction", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], SetObject.prototype, "has", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], SetObject.prototype, "add", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], SetObject.prototype, "delete", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SetObject.prototype, "clear", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", void 0)
], SetObject.prototype, "forEach", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], SetObject.prototype, "entries", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], SetObject.prototype, "values", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], SetObject.prototype, "keys", null);
SetObject = SetObject_1 = __decorate([
    (0, util_1.Unit)(Control_1.ControlFlow.SetEnum),
    __metadata("design:paramtypes", [Object])
], SetObject);
exports.SetObject = SetObject;


/***/ }),

/***/ "./src/Object/Able/Base/StringObject.ts":
/*!**********************************************!*\
  !*** ./src/Object/Able/Base/StringObject.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StringObject = void 0;
const Control_1 = __webpack_require__(/*! ../Control */ "./src/Object/Able/Control.ts");
const ObjectTarget_1 = __webpack_require__(/*! ./ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");
const util_1 = __webpack_require__(/*! ../../util */ "./src/Object/util.ts");
const NumberObject_1 = __webpack_require__(/*! ./NumberObject */ "./src/Object/Able/Base/NumberObject.ts");
let StringObject = class StringObject extends ObjectTarget_1.ObjectTarget {
    static type;
    constructor(value = '') {
        super(value);
        this._value = value;
    }
    // @attribute()
    valueOf() {
        return this._value;
    }
    execFunction(key, ...args) {
        // throw new Error('Method not implemented.');
        return null;
    }
    get length() {
        return new NumberObject_1.NumberObject(this._value.length);
    }
    anchor(name) {
        return null;
    }
    big() {
        return null;
    }
    blink() {
        return null;
    }
    bold() {
        return null;
    }
    charAt(pos) {
        return null;
    }
    charCodeAt(index) {
        return null;
    }
    codePointAt(pos) {
        return null;
    }
    concat(...args) {
        return null;
    }
    endsWith(searchString, endPosition) {
        return null;
    }
    fixed() {
        return null;
    }
    fontcolor(color) {
        return null;
    }
    fontsize(size) {
        return null;
    }
    includes(searchString, position) {
        return null;
    }
    indexOf(searchString, position) {
        return null;
    }
    italics() {
        return null;
    }
    lastIndexOf(searchString, position) {
        return null;
    }
    link(url) {
        return null;
    }
    localeCompare(that) {
        return null;
    }
    match(regexp) {
        return null;
    }
    matchAll(regexp) {
        return null;
    }
    normalize(form) {
        return null;
    }
    padEnd(targetLength, padString) {
        return null;
    }
    padStart(targetLength, padString) {
        return null;
    }
    repeat(count) {
        return null;
    }
    replace(searchValue, replaceValue) {
        return null;
    }
    replaceAll(searchValue, replaceValue) {
        return null;
    }
    search(regexp) {
        return null;
    }
    slice(start, end) {
        return null;
    }
    small() {
        return null;
    }
    split(separator, limit) {
        return null;
    }
    strike() {
        return null;
    }
    sub() {
        return null;
    }
    substr(start, length) {
        return null;
    }
    substring(start, end) {
        return null;
    }
    toLocaleLowerCase() {
        return null;
    }
    toLocaleUpperCase() {
        return null;
    }
    toLowerCase() {
        return null;
    }
    toUpperCase() {
        return null;
    }
    trim() {
        return null;
    }
    trimLeft() {
        return null;
    }
    trimRight() {
        return null;
    }
    toString() {
        return null;
    }
    sup() {
        return null;
    }
    startsWith(searchString, position) {
        return null;
    }
    trimStart() {
        return null;
    }
    trimEnd() {
        return null;
    }
    at(index) {
        return null;
    }
};
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], StringObject.prototype, "execFunction", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "anchor", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "big", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "blink", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "bold", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "charAt", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "charCodeAt", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "codePointAt", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "concat", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "endsWith", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "fixed", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "fontcolor", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "fontsize", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "includes", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "indexOf", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "italics", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "lastIndexOf", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "link", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "localeCompare", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegExp]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "match", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegExp]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "matchAll", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "normalize", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "padEnd", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "padStart", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "repeat", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "replace", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "replaceAll", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [RegExp]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "search", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "slice", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "small", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "split", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "strike", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "sub", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "substr", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "substring", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "toLocaleLowerCase", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "toLocaleUpperCase", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "toLowerCase", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "toUpperCase", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "trim", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "trimLeft", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "trimRight", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "toString", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "sup", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "startsWith", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "trimStart", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], StringObject.prototype, "trimEnd", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], StringObject.prototype, "at", null);
StringObject = __decorate([
    (0, util_1.Unit)(Control_1.ControlFlow.StringEnum),
    __metadata("design:paramtypes", [String])
], StringObject);
exports.StringObject = StringObject;


/***/ }),

/***/ "./src/Object/Able/Control.ts":
/*!************************************!*\
  !*** ./src/Object/Able/Control.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// import { BooleanAble, NumberAble, ValueAble } from "./Able/Ables";
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControlFlow = void 0;
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
    // Number
    let NumberEnum;
    (function (NumberEnum) {
        NumberEnum["ToExponential$"] = "toExponential";
        NumberEnum["ToFixed$"] = "toFixed";
        NumberEnum["ToPrecision"] = "toPrecision";
    })(NumberEnum = ControlFlow.NumberEnum || (ControlFlow.NumberEnum = {}));
    //集合属性
    let CollectionEnum;
    (function (CollectionEnum) {
        CollectionEnum["Contain"] = "contain";
        CollectionEnum["Add"] = "add";
        CollectionEnum["ValueFor"] = "valueFor";
        CollectionEnum["Keys"] = "keys";
        CollectionEnum["Values"] = "values";
    })(CollectionEnum = ControlFlow.CollectionEnum || (ControlFlow.CollectionEnum = {}));
    let ArrayEnum;
    (function (ArrayEnum) {
        ArrayEnum["Concat"] = "concat";
        ArrayEnum["CopyWithin"] = "copyWithin";
        ArrayEnum["Fill"] = "fill";
        ArrayEnum["Find"] = "find";
        ArrayEnum["FindIndex"] = "findIndex";
        ArrayEnum["LastIndexOf"] = "lastIndexOf";
        ArrayEnum["Pop"] = "pop";
        ArrayEnum["Push"] = "push";
        ArrayEnum["Reverse"] = "reverse";
        ArrayEnum["Shift"] = "shift";
        ArrayEnum["Unshift"] = "unshift";
        ArrayEnum["Slice"] = "slice";
        ArrayEnum["Sort"] = "sort";
        ArrayEnum["Splice"] = "splice";
        ArrayEnum["Includes"] = "includes";
        ArrayEnum["IndexOf"] = "indexOf";
        ArrayEnum["Join"] = "join";
        ArrayEnum["Keys"] = "keys";
        ArrayEnum["Entries"] = "entries";
        ArrayEnum["Values"] = "values";
        ArrayEnum["ForEach"] = "forEach";
        ArrayEnum["Filter"] = "filter";
        ArrayEnum["Map"] = "map";
        ArrayEnum["Every"] = "every";
        ArrayEnum["Some"] = "some";
        ArrayEnum["Reduce"] = "reduce";
        ArrayEnum["ReduceRight"] = "reduceRight";
    })(ArrayEnum = ControlFlow.ArrayEnum || (ControlFlow.ArrayEnum = {}));
    /**
     a = Object.keys(Object.getOwnPropertyDescriptors(String.prototype)).map($1=>`${$1}: ${$1}`).join('\n')
     b = a.split("\n")
     function titleCase(str) {
      newStr = str.slice(0,1).toUpperCase() +str.slice(1);
      return newStr;
    }
    c = b.map($1=>{return $1.replace(':','$=$')}).map($1=>{return "$$"+titleCase($1)})
   */
    let SetEnum;
    (function (SetEnum) {
        SetEnum["Has"] = "has";
        SetEnum["Add"] = "add";
        SetEnum["Delete"] = "delete";
        SetEnum["Clear"] = "clear";
        SetEnum["Entries"] = "entries";
        SetEnum["ForEach"] = "forEach";
        SetEnum["Values"] = "values";
        SetEnum["Keys"] = "keys";
    })(SetEnum = ControlFlow.SetEnum || (ControlFlow.SetEnum = {}));
    let MapEnum;
    (function (MapEnum) {
        MapEnum["Get"] = "get";
        MapEnum["Set"] = "set";
        MapEnum["Has"] = "has";
        MapEnum["Delete"] = "delete";
        MapEnum["Clear"] = "clear";
        MapEnum["Entries"] = "entries";
        MapEnum["ForEach"] = "forEach";
        MapEnum["Keys"] = "keys";
        MapEnum["Values"] = "values";
    })(MapEnum = ControlFlow.MapEnum || (ControlFlow.MapEnum = {}));
    let StringEnum;
    (function (StringEnum) {
        StringEnum["Anchor"] = "anchor";
        StringEnum["Big"] = "big";
        StringEnum["Blink"] = "blink";
        StringEnum["Bold"] = "bold";
        StringEnum["CharAt"] = "charAt";
        StringEnum["CharCodeAt"] = "charCodeAt";
        StringEnum["CodePointAt"] = "codePointAt";
        StringEnum["Concat"] = "concat";
        StringEnum["EndsWith"] = "endsWith";
        StringEnum["Fontcolor"] = "fontcolor";
        StringEnum["Fontsize"] = "fontsize";
        StringEnum["Fixed"] = "fixed";
        StringEnum["Includes"] = "includes";
        StringEnum["IndexOf"] = "indexOf";
        StringEnum["Italics"] = "italics";
        StringEnum["LastIndexOf"] = "lastIndexOf";
        StringEnum["Link"] = "link";
        StringEnum["LocaleCompare"] = "localeCompare";
        StringEnum["Match"] = "match";
        StringEnum["MatchAll"] = "matchAll";
        StringEnum["Normalize"] = "normalize";
        StringEnum["PadEnd"] = "padEnd";
        StringEnum["PadStart"] = "padStart";
        StringEnum["Repeat"] = "repeat";
        StringEnum["Replace"] = "replace";
        StringEnum["ReplaceAll"] = "replaceAll";
        StringEnum["Search"] = "search";
        StringEnum["Slice"] = "slice";
        StringEnum["Small"] = "small";
        StringEnum["Split"] = "split";
        StringEnum["Strike"] = "strike";
        StringEnum["Sub"] = "sub";
        StringEnum["Substr"] = "substr";
        StringEnum["Substring"] = "substring";
        StringEnum["Sup"] = "sup";
        StringEnum["StartsWith"] = "startsWith";
        StringEnum["ToString"] = "toString";
        StringEnum["Trim"] = "trim";
        StringEnum["TrimStart"] = "trimStart";
        StringEnum["TrimLeft"] = "trimLeft";
        StringEnum["TrimEnd"] = "trimEnd";
        StringEnum["TrimRight"] = "trimRight";
        StringEnum["ToLocaleLowerCase"] = "toLocaleLowerCase";
        StringEnum["ToLocaleUpperCase"] = "toLocaleUpperCase";
        StringEnum["ToLowerCase"] = "toLowerCase";
        StringEnum["ToUpperCase"] = "toUpperCase";
        StringEnum["ValueOf"] = "valueOf";
        StringEnum["At"] = "at";
    })(StringEnum = ControlFlow.StringEnum || (ControlFlow.StringEnum = {}));
    let DateEnum;
    (function (DateEnum) {
        DateEnum["ToDateString"] = "toDateString";
        DateEnum["ToTimeString"] = "toTimeString";
        DateEnum["ToISOString"] = "toISOString";
        DateEnum["ToUTCString"] = "toUTCString";
        DateEnum["GetDate"] = "getDate";
        DateEnum["SetDate"] = "setDate";
        DateEnum["GetDay"] = "getDay";
        DateEnum["GetFullYear"] = "getFullYear";
        DateEnum["SetFullYear"] = "setFullYear";
        DateEnum["GetHours"] = "getHours";
        DateEnum["SetHours"] = "setHours";
        DateEnum["GetMilliseconds"] = "getMilliseconds";
        DateEnum["SetMilliseconds"] = "setMilliseconds";
        DateEnum["GetMinutes"] = "getMinutes";
        DateEnum["SetMinutes"] = "setMinutes";
        DateEnum["GetMonth"] = "getMonth";
        DateEnum["SetMonth"] = "setMonth";
        DateEnum["GetSeconds"] = "getSeconds";
        DateEnum["SetSeconds"] = "setSeconds";
        DateEnum["GetTime"] = "getTime";
        DateEnum["SetTime"] = "setTime";
        DateEnum["GetTimezoneOffset"] = "getTimezoneOffset";
        DateEnum["GetUTCDate"] = "getUTCDate";
        DateEnum["SetUTCDate"] = "setUTCDate";
        DateEnum["GetUTCDay"] = "getUTCDay";
        DateEnum["GetUTCFullYear"] = "getUTCFullYear";
        DateEnum["SetUTCFullYear"] = "setUTCFullYear";
        DateEnum["GetUTCHours"] = "getUTCHours";
        DateEnum["SetUTCHours"] = "setUTCHours";
        DateEnum["GetUTCMilliseconds"] = "getUTCMilliseconds";
        DateEnum["SetUTCMilliseconds"] = "setUTCMilliseconds";
        DateEnum["GetUTCMinutes"] = "getUTCMinutes";
        DateEnum["SetUTCMinutes"] = "setUTCMinutes";
        DateEnum["GetUTCMonth"] = "getUTCMonth";
        DateEnum["SetUTCMonth"] = "setUTCMonth";
        DateEnum["GetUTCSeconds"] = "getUTCSeconds";
        DateEnum["SetUTCSeconds"] = "setUTCSeconds";
        DateEnum["ToJSON"] = "toJSON";
        DateEnum["ToLocaleString"] = "toLocaleString";
        DateEnum["ToLocaleDateString"] = "toLocaleDateString";
        DateEnum["ToLocaleTimeString"] = "toLocaleTimeString";
    })(DateEnum = ControlFlow.DateEnum || (ControlFlow.DateEnum = {}));
})(ControlFlow = exports.ControlFlow || (exports.ControlFlow = {}));


/***/ }),

/***/ "./src/Object/Able/index.ts":
/*!**********************************!*\
  !*** ./src/Object/Able/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createExtendsInstance = exports.createExtendsConstruct = exports.OptionalObject = exports.DataObject = exports.DateObject = exports.BooleanObject = exports.StringObject = exports.NumberObject = exports.SetObject = exports.MapObject = exports.ArrayObject = exports.ObjectTarget = void 0;
const ObjectTarget_1 = __webpack_require__(/*! ./Base/ObjectTarget */ "./src/Object/Able/Base/ObjectTarget.ts");
Object.defineProperty(exports, "ObjectTarget", ({ enumerable: true, get: function () { return ObjectTarget_1.ObjectTarget; } }));
const ArrayObject_1 = __webpack_require__(/*! ./Base/ArrayObject */ "./src/Object/Able/Base/ArrayObject.ts");
Object.defineProperty(exports, "ArrayObject", ({ enumerable: true, get: function () { return ArrayObject_1.ArrayObject; } }));
const MapObject_1 = __webpack_require__(/*! ./Base/MapObject */ "./src/Object/Able/Base/MapObject.ts");
Object.defineProperty(exports, "MapObject", ({ enumerable: true, get: function () { return MapObject_1.MapObject; } }));
const SetObject_1 = __webpack_require__(/*! ./Base/SetObject */ "./src/Object/Able/Base/SetObject.ts");
Object.defineProperty(exports, "SetObject", ({ enumerable: true, get: function () { return SetObject_1.SetObject; } }));
const NumberObject_1 = __webpack_require__(/*! ./Base/NumberObject */ "./src/Object/Able/Base/NumberObject.ts");
Object.defineProperty(exports, "NumberObject", ({ enumerable: true, get: function () { return NumberObject_1.NumberObject; } }));
const StringObject_1 = __webpack_require__(/*! ./Base/StringObject */ "./src/Object/Able/Base/StringObject.ts");
Object.defineProperty(exports, "StringObject", ({ enumerable: true, get: function () { return StringObject_1.StringObject; } }));
const BooleanObject_1 = __webpack_require__(/*! ./Base/BooleanObject */ "./src/Object/Able/Base/BooleanObject.ts");
Object.defineProperty(exports, "BooleanObject", ({ enumerable: true, get: function () { return BooleanObject_1.BooleanObject; } }));
const DateObject_1 = __webpack_require__(/*! ./Base/DateObject */ "./src/Object/Able/Base/DateObject.ts");
Object.defineProperty(exports, "DateObject", ({ enumerable: true, get: function () { return DateObject_1.DateObject; } }));
const DataObject_1 = __webpack_require__(/*! ./Base/DataObject */ "./src/Object/Able/Base/DataObject.ts");
Object.defineProperty(exports, "DataObject", ({ enumerable: true, get: function () { return DataObject_1.DataObject; } }));
const NullObject_1 = __webpack_require__(/*! ./Base/NullObject */ "./src/Object/Able/Base/NullObject.ts");
Object.defineProperty(exports, "OptionalObject", ({ enumerable: true, get: function () { return NullObject_1.OptionalObject; } }));
const extend_util_1 = __webpack_require__(/*! ../extend-util */ "./src/Object/extend-util.ts");
Object.defineProperty(exports, "createExtendsConstruct", ({ enumerable: true, get: function () { return extend_util_1.createExtendsConstruct; } }));
Object.defineProperty(exports, "createExtendsInstance", ({ enumerable: true, get: function () { return extend_util_1.createExtendsInstance; } }));


/***/ }),

/***/ "./src/Object/extend-util.ts":
/*!***********************************!*\
  !*** ./src/Object/extend-util.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createExtendsInstance = exports.createExtendsConstruct = void 0;
const util_1 = __webpack_require__(/*! ./util */ "./src/Object/util.ts");
const Value = __webpack_require__(/*! ./Able */ "./src/Object/Able/index.ts");
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
    let KV = class KV extends Value.ObjectTarget {
        constructor(value = null) {
            super();
            this._value = value ?? {};
        }
    };
    KV = __decorate([
        (0, util_1.Unit)(Enum),
        __metadata("design:paramtypes", [Object])
    ], KV);
    ExtendsMap.set(target, KV);
    return KV;
}
exports.createExtendsConstruct = createExtendsConstruct;
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
exports.createExtendsInstance = createExtendsInstance;


/***/ }),

/***/ "./src/Object/index.ts":
/*!*****************************!*\
  !*** ./src/Object/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./types */ "./src/Object/types.ts"), exports);
__exportStar(__webpack_require__(/*! ./Able */ "./src/Object/Able/index.ts"), exports);


/***/ }),

/***/ "./src/Object/types.ts":
/*!*****************************!*\
  !*** ./src/Object/types.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/Object/util.ts":
/*!****************************!*\
  !*** ./src/Object/util.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Unit = exports.CalcUnit = exports.CompareUnit = exports.onlyDeclaration = exports.onlyDeclarationTag = void 0;
const Able_1 = __webpack_require__(/*! ./Able */ "./src/Object/Able/index.ts");
const Control_1 = __webpack_require__(/*! ./Able/Control */ "./src/Object/Able/Control.ts");
const valueUtil_1 = __webpack_require__(/*! ./valueUtil */ "./src/Object/valueUtil.ts");
exports.onlyDeclarationTag = 'onlyDeclaration';
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
    dec.value.declaration = exports.onlyDeclarationTag;
}
exports.onlyDeclaration = onlyDeclaration;
function CompareUnit(host) {
    Object.keys(Control_1.ControlFlow.CompareEnum).forEach((item) => {
        const key = Control_1.ControlFlow.CompareEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
            host.prototype[key] = () => new Able_1.BooleanObject(false);
        }
    });
    if (host.prototype.compare?.declaration === exports.onlyDeclarationTag ||
        !!host.prototype.compare === false)
        host.prototype.compare = function (type, target) {
            const execFunc = host.prototype[type]?.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
exports.CompareUnit = CompareUnit;
function CalcUnit(host) {
    Object.keys(Control_1.ControlFlow.CalcEnum).forEach((item) => {
        const key = Control_1.ControlFlow.CalcEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
            host.prototype[key] = () => new Able_1.NumberObject(0);
        }
    });
    if (host.prototype.calc?.declaration === exports.onlyDeclarationTag ||
        !!host.prototype.calc === false)
        host.prototype.calc = function (type, target) {
            const execFunc = host.prototype[type]?.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
exports.CalcUnit = CalcUnit;
function Unit(target) {
    const execName = 'execFunction';
    return function (host) {
        Object.keys(target).forEach((item) => {
            const key = target[item];
            const comFunction = host.prototype[key];
            if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
                host.prototype[key] = function (...args) {
                    const value = this.valueOf();
                    const execFunc = value[key];
                    let result;
                    if (typeof execFunc === 'function') {
                        result = execFunc.bind(value)(...args);
                    }
                    else
                        result = value;
                    return (0, valueUtil_1.decide)(result);
                };
            }
        });
        if (host.prototype[execName]?.declaration === exports.onlyDeclarationTag ||
            !!host.prototype[execName] === false)
            host.prototype[execName] = function (type, ...args) {
                const execFunc = host.prototype[type]?.bind(this);
                if (execFunc && typeof execFunc === 'function')
                    return execFunc(...args);
                return false;
            };
    };
}
exports.Unit = Unit;


/***/ }),

/***/ "./src/Object/valueUtil.ts":
/*!*********************************!*\
  !*** ./src/Object/valueUtil.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.decide = exports.isAbleType = void 0;
const ObjectValue = __webpack_require__(/*! ./Able */ "./src/Object/Able/index.ts");
let ObjectMap = null;
const init = () => {
    if (ObjectMap === null) {
        ObjectMap = {
            '[object Object]': ObjectValue.ObjectTarget,
            '[object Map]': ObjectValue.MapObject,
            '[object Set]': ObjectValue.SetObject,
            '[object Array]': ObjectValue.ArrayObject,
            '[object Boolean]': ObjectValue.BooleanObject,
            '[object Date]': ObjectValue.DateObject,
            '[object Number]': ObjectValue.NumberObject,
            '[object String]': ObjectValue.StringObject,
            '[object ArrayBuffer]': ObjectValue.DataObject,
            '[object Uint8Array]': ObjectValue.DataObject,
            '[object Promise]': ObjectValue.ObjectTarget,
            '[object Null]': ObjectValue.OptionalObject,
            '[object Undefined]': ObjectValue.OptionalObject,
        };
    }
    return ObjectMap;
};
const isAbleType = (value) => {
    init();
    return Object.prototype.toString.call(value) === '[object flow-object]';
};
exports.isAbleType = isAbleType;
/**
 * 将js 数据转为 BaseType
 * 如果是BaseType类型 将不会包装。见[force]
 * @param value
 * @param force 是否强制包装
 * @returns
 */
function decide(value, force = false) {
    init();
    if ((0, exports.isAbleType)(value) && force === false)
        return value;
    const key = Object.prototype.toString.call(value);
    const Target = ObjectMap[key];
    if (Target) {
        return new Target(value ?? {});
    }
    return new ObjectValue.ObjectTarget(value);
}
exports.decide = decide;
;


/***/ }),

/***/ "./src/Types.ts":
/*!**********************!*\
  !*** ./src/Types.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkType = void 0;
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
})(WorkType = exports.WorkType || (exports.WorkType = {}));


/***/ }),

/***/ "./src/Util/Equipment.ts":
/*!*******************************!*\
  !*** ./src/Util/Equipment.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PlatformSelect = exports.isJS = exports.isMobile = exports.isElectron = exports.isPC = exports.isNode = exports.isWeb = exports.currentEnir = exports.JSRUNEnvirType = exports.getJSEnvironment = exports.isReactNative = void 0;
var JSRUNEnvirType;
(function (JSRUNEnvirType) {
    JSRUNEnvirType[JSRUNEnvirType["NODE_PC"] = 10] = "NODE_PC";
    JSRUNEnvirType[JSRUNEnvirType["WEB_PC"] = 20] = "WEB_PC";
    JSRUNEnvirType[JSRUNEnvirType["WEB_MOBILE"] = 26] = "WEB_MOBILE";
    JSRUNEnvirType[JSRUNEnvirType["ELECTRON_PC"] = 40] = "ELECTRON_PC";
    JSRUNEnvirType[JSRUNEnvirType["OTHER"] = 100] = "OTHER";
})(JSRUNEnvirType || (JSRUNEnvirType = {}));
exports.JSRUNEnvirType = JSRUNEnvirType;
const EnvirType = {
    /**
     * WIndow 浏览器 运行环境
     */
    WINDOWS: "win",
    /**
     * MAC 浏览器 运行环境
     */
    MACINTOSH: "mac",
    /***
     * Linux 浏览器 运行环境
     */
    LINUX: "linux",
    /***
     * ios 浏览器  运行环境
     */
    IOS: "iOS",
    /**
     * 安卓 浏览器 运行环境
     */
    ANDROID: "Android",
    /**
     * 黑莓 运行环境
     */
    BLACKBERRY: "bb",
    /***
     * Win iphone 运行环境
     */
    WINDOWS_PHONE: "winphone",
    Other: 'other'
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
exports.isReactNative = isReactNative;
function getJSEnvironment() {
    if (navigator.userAgent) {
        var userAgent = navigator.userAgent;
        var platform, result;
        const getDesktopOS = () => {
            var pf = navigator.platform;
            if (pf.indexOf("Win") != -1) {
                // 说明当前是Windows操作系统
                var rVersion = /Windows NT (\d+).(\d)/i;
                var uaResult = userAgent.match(rVersion);
                var sVersionStr = "";
                if (uaResult[1] == "6") {
                    if (uaResult[2] == 1) {
                        sVersionStr = "7"; // 说明当前运行在Windows 7 中
                    }
                    else if (uaResult[2] > 1) {
                        sVersionStr = "8"; // 说明当前运行在Windows 8 中
                    }
                }
                else {
                    sVersionStr = uaResult[1];
                }
                return { name: EnvirType.WINDOWS, versionStr: sVersionStr };
            }
            else if (pf.indexOf("Mac") != -1) {
                return { name: EnvirType.MACINTOSH, versionStr: "" }; // Macintosh操作系统
            }
            else if (pf.indexOf("Linux") != -1) {
                return { name: EnvirType.LINUX, versionStr: "" }; // 说明当前运行在Linux操作系统
            }
            return null;
        };
        platform = /Windows Phone (?:OS )?([\d.]*)/; // windows phone的正则表达式
        result = userAgent.match(platform);
        if (result) {
            return { name: EnvirType.WINDOWS_PHONE, versionStr: result[1] };
        }
        // BlackBerry 10
        if (userAgent.indexOf("(BB10;") > 0) {
            platform = /\sVersion\/([\d.]+)\s/; // BlackBerry的regular expression
            result = userAgent.match(platform);
            if (result) {
                return { name: EnvirType.BLACKBERRY, versionStr: result[1] };
            }
            else {
                return { name: EnvirType.BLACKBERRY, versionStr: "10" };
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
                result[3] = result[3].replace(/_/g, ".");
                return { name: EnvirType.IOS, versionStr: result[3] }; // iOS操作系统
            }
            else if (result[2].match(/Android/)) {
                result[2] = result[2].replace(/\s/g, "");
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
                versionStr: result.length == 3 ? result[2] : "",
            };
        }
        // Desktop
        return getDesktopOS();
    }
    else {
        return { name: EnvirType.Other, versionStr: "" };
    }
}
exports.getJSEnvironment = getJSEnvironment;
var currentEnir;
exports.currentEnir = currentEnir;
if ((globalThis || window).process) {
    if ((globalThis || window) &&
        (globalThis || window).process &&
        (globalThis || window).process.versions &&
        (globalThis || window).process.versions["electron"]) {
        exports.currentEnir = currentEnir = JSRUNEnvirType.ELECTRON_PC;
    }
    else
        exports.currentEnir = currentEnir = JSRUNEnvirType.NODE_PC;
}
else {
    const typeName = getJSEnvironment().name;
    switch (typeName) {
        case EnvirType.WINDOWS:
            exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_PC;
            break;
        case EnvirType.MACINTOSH:
            exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_PC;
            break;
        case EnvirType.IOS:
            exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_MOBILE;
            break;
        case EnvirType.ANDROID:
            exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_MOBILE;
            break;
        case EnvirType.LINUX:
            exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_PC;
            break;
        default:
            exports.currentEnir = currentEnir = JSRUNEnvirType.OTHER;
            break;
    }
}
const isWeb = currentEnir === JSRUNEnvirType.WEB_MOBILE || currentEnir === JSRUNEnvirType.WEB_PC;
exports.isWeb = isWeb;
const isNode = currentEnir === JSRUNEnvirType.NODE_PC;
exports.isNode = isNode;
const isElectron = currentEnir === JSRUNEnvirType.ELECTRON_PC;
exports.isElectron = isElectron;
const isPC = currentEnir === JSRUNEnvirType.NODE_PC ||
    currentEnir === JSRUNEnvirType.WEB_PC ||
    currentEnir === JSRUNEnvirType.ELECTRON_PC;
exports.isPC = isPC;
const isMobile = currentEnir === JSRUNEnvirType.WEB_MOBILE;
exports.isMobile = isMobile;
const isJS = true;
exports.isJS = isJS;
const PlatformSelect = (select) => {
    let target;
    if (isElectron) {
        target = select.electron;
    }
    else if (isWeb) {
        target = select.web;
    }
    else if (isNode) {
        target = select.node;
    }
    return target;
};
exports.PlatformSelect = PlatformSelect;


/***/ }),

/***/ "./src/Util/channel-value-util.ts":
/*!****************************************!*\
  !*** ./src/Util/channel-value-util.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wrapperValue = exports.unpackValue = void 0;
const __1 = __webpack_require__(/*! .. */ "./src/index.ts");
const valueUtil_1 = __webpack_require__(/*! ../Object/valueUtil */ "./src/Object/valueUtil.ts");
/**
 * 解包
 * @param value
 * @returns
 */
function unpackValue(value) {
    if (!!value === false)
        return "";
    return value._value.value.valueOf();
}
exports.unpackValue = unpackValue;
/**
 * 组合包装
 * @param input
 * @param value
 * @returns
 */
function wrapperValue(input, value) {
    const nextValue = (0, valueUtil_1.decide)(value);
    return new __1.ObjectTarget({
        ...(input._value),
        value: nextValue,
    });
}
exports.wrapperValue = wrapperValue;


/***/ }),

/***/ "./src/Util/tools.ts":
/*!***************************!*\
  !*** ./src/Util/tools.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/*
 * @Author:
 * @Date: 2022-06-08 19:31:16
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-06-22 17:42:51
 * @desc : undefined
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.noop = void 0;
const isURL = (url) => {
    var strRegex = '^((https|http|ftp)://)?' //(https或http或ftp):// 可有可无
        + '(([\\w_!~*\'()\\.&=+$%-]+: )?[\\w_!~*\'()\\.&=+$%-]+@)?' //ftp的user@  可有可无
        + '(([0-9]{1,3}\\.){3}[0-9]{1,3}' // IP形式的URL- 3位数字.3位数字.3位数字.3位数字
        + '|' // 允许IP和DOMAIN（域名） 
        + '(localhost)|' //匹配localhost
        + '([\\w_!~*\'()-]+\\.)*' // 域名- 至少一个[英文或数字_!~*\'()-]加上.
        + '\\w+\\.' // 一级域名 -英文或数字  加上.
        + '[a-zA-Z]{1,6})' // 顶级域名- 1-6位英文 
        + '(:[0-9]{1,5})?' // 端口- :80 ,1-5位数字
        + '((/?)|' // url无参数结尾 - 斜杆或这没有
        + '(/[\\w_!~*\'()\\.;?:@&=+$,%#-]+)+/?)$'; //请求参数结尾- 英文或数字和[]内的各种字符
    var re = new RegExp(strRegex, 'i'); //i不区分大小写
    //将url做uri转码后再匹配，解除请求参数中的中文和空字符影响
    if (re.test(encodeURI(url))) {
        return (true);
    }
    else {
        return (false);
    }
};
const isWindowFilePath = (url) => {
    return url.startsWith("file://");
};
function noop() { }
exports.noop = noop;


/***/ }),

/***/ "./src/Works/ExtendsWorks/Base64Work.ts":
/*!**********************************************!*\
  !*** ./src/Works/ExtendsWorks/Base64Work.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Base64EnCodeWork = exports.Base64DecodeWork = void 0;
const js_base64_1 = __webpack_require__(/*! js-base64 */ "js-base64");
const Instruction_1 = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
const channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");
//编码
class Base64EnCodeWork extends Instruction_1.InstructionMTM {
    name = "Base64EnCodeWork";
    run(input) {
        return new rxjs_1.Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = (0, channel_value_util_1.unpackValue)(input);
            }
            subscriber.next((0, channel_value_util_1.wrapperValue)(input, js_base64_1.Base64.encode(target)));
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
    static isAble() {
        return Equipment_1.isJS;
    }
}
exports.Base64EnCodeWork = Base64EnCodeWork;
//解码
class Base64DecodeWork extends Instruction_1.InstructionMTM {
    name = "Base64DecodeWork";
    run(input) {
        return new rxjs_1.Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = (0, channel_value_util_1.unpackValue)(input);
            }
            subscriber.next((0, channel_value_util_1.wrapperValue)(input, js_base64_1.Base64.decode(target)));
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
    static isAble() {
        return Equipment_1.isJS;
    }
}
exports.Base64DecodeWork = Base64DecodeWork;


/***/ }),

/***/ "./src/Works/ExtendsWorks/BeginWork.ts":
/*!*********************************************!*\
  !*** ./src/Works/ExtendsWorks/BeginWork.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BeginWork = void 0;
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const Instruction_1 = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
const Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
const Object_1 = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
const valueUtil_1 = __webpack_require__(/*! ../../Object/valueUtil */ "./src/Object/valueUtil.ts");
class BeginWork extends Instruction_1.InstructionOTO {
    static OPTION;
    name = "BeginWork";
    static _id = 0;
    // 输入 头部work
    // inputSubject: Subject<BaseType> = new Subject<BaseType>();
    inputSubscription;
    constructor() {
        super();
        this.uuid = (0, uuid_1.v4)();
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
        const id = runId ?? (0, uuid_1.v4)();
        this.nextWork.next(new Object_1.ObjectTarget({
            id,
            value: (0, valueUtil_1.decide)(value),
            option: {},
        }));
    }
    completeOneLoop() { }
    static isAble() {
        return Equipment_1.isJS;
    }
}
exports.BeginWork = BeginWork;


/***/ }),

/***/ "./src/Works/ExtendsWorks/FetchWork.ts":
/*!*********************************************!*\
  !*** ./src/Works/ExtendsWorks/FetchWork.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Instruction_1 = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
const __1 = __webpack_require__(/*! ../.. */ "./src/index.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
class FetchWork extends Instruction_1.InstructionOTO {
    name = "FetchWork";
    _getInitOption(input, baseOption) {
        const initParams = input.valueOf();
        const { url, method, timeout, data } = initParams;
        const request = {
            url,
            method: initParams.method || baseOption.method || "GET",
            timeout: timeout || baseOption.timeout || 10000,
            headers: {
                ...(baseOption.headers || {}),
                ...(initParams.headers || {}),
            },
        };
        request.data = data;
        if (method.toLocaleUpperCase() === "GET") {
            request.headers['Content-Type'] = request.headers['Content-Type'] || 'application/json';
        }
        request.timeoutErrorMessage = '请求超时';
        return request;
    }
    run(input, baseOption) {
        const that = this;
        const options = this._getInitOption(input._value.value, baseOption);
        return new rxjs_1.Observable((subscriber) => {
            const fetchSub = that.context.platform.fetch(options)
                .pipe((0, operators_1.tap)((result) => {
                const { data } = result.valueOf();
                this.logMsg(`[FetchWork][load:data]${data}`, input);
            })).subscribe({
                next: (data) => {
                    const result = data.valueOf();
                    if (result.error) {
                        subscriber.error(result.error);
                    }
                    else {
                        subscriber.next(new __1.ObjectTarget({
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
                }
            };
        });
    }
    static isAble() {
        return Equipment_1.isJS;
    }
}
exports["default"] = FetchWork;


/***/ }),

/***/ "./src/Works/ExtendsWorks/LoadFileWork.ts":
/*!************************************************!*\
  !*** ./src/Works/ExtendsWorks/LoadFileWork.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Instruction_1 = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Object_1 = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
const Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
const ConfigTypes_1 = __webpack_require__(/*! ../../Bridge/ConfigTypes */ "./src/Bridge/ConfigTypes.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");
class LoadFileWork extends Instruction_1.InstructionOTO {
    name = "LoadFileWork";
    currentConfig = { type: ConfigTypes_1.FileType.All };
    constructor(config) {
        super();
        this.currentConfig = config || { type: ConfigTypes_1.FileType.All };
    }
    run(input, option) {
        const that = this;
        const runOption = { ...(option), ...(this.currentConfig) };
        return new rxjs_1.Observable((subscriber) => {
            const target = (0, channel_value_util_1.unpackValue)(input);
            const sub = that.context.platform
                .loadFile(target, runOption)
                .pipe((0, operators_1.tap)((obj) => {
                const { loaded, total, finish } = obj.valueOf();
                this.logMsg(`加载进度[load:progress]---：${loaded}/${total} 是否完成：${finish}`, input);
            }), (0, operators_1.takeLast)(1))
                .subscribe({
                next: (obj) => {
                    const { data, file } = obj.valueOf();
                    subscriber.next(new Object_1.ObjectTarget({
                        ...input._value,
                        value: new Object_1.DataObject(data),
                        option: { file }
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
        return Equipment_1.isJS;
    }
}
exports["default"] = LoadFileWork;


/***/ }),

/***/ "./src/Works/ExtendsWorks/OpenURLWork.ts":
/*!***********************************************!*\
  !*** ./src/Works/ExtendsWorks/OpenURLWork.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Instruction_1 = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Object_1 = __webpack_require__(/*! ../../Object */ "./src/Object/index.ts");
const Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
const channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");
/**
 * 打开路径
 * http://www.baidu.com
 * node window: file:///C:/Users/Administrator    file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg
 *
 * node:可以打开文件 网页
 * web:只能代开网页
 */
class OpenURLWork extends Instruction_1.InstructionOTO {
    name = "OpenURLWork";
    run(input, option) {
        const that = this;
        return new rxjs_1.Observable((subscriber) => {
            const target = (0, channel_value_util_1.unpackValue)(input);
            const sub = that.context.platform
                .open(target, option)
                .subscribe({
                next: _ => subscriber.next((0, channel_value_util_1.wrapperValue)(input, new Object_1.BooleanObject(true))),
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
        return Equipment_1.isJS;
    }
}
exports["default"] = OpenURLWork;


/***/ }),

/***/ "./src/Works/ExtendsWorks/QRCodeWork.ts":
/*!**********************************************!*\
  !*** ./src/Works/ExtendsWorks/QRCodeWork.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QRCodeWork = void 0;
const Instruction_1 = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
const channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");
/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */
class QRCodeWork extends Instruction_1.InstructionOTO {
    name = "QRCodeWork";
    run(input, option) {
        const that = this;
        return new rxjs_1.Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = "";
            else {
                target = (0, channel_value_util_1.unpackValue)(input);
            }
            const sub = that.context.platform
                .createQrCode(target, option)
                .subscribe({
                next: (res) => subscriber.next((0, channel_value_util_1.wrapperValue)(input, res)),
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
        return Equipment_1.isJS;
        // return isNode || isWeb || isRN
    }
}
exports.QRCodeWork = QRCodeWork;


/***/ }),

/***/ "./src/Works/ExtendsWorks/RunCommandWork.ts":
/*!**************************************************!*\
  !*** ./src/Works/ExtendsWorks/RunCommandWork.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Instruction_1 = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Equipment_1 = __webpack_require__(/*! ../../Util/Equipment */ "./src/Util/Equipment.ts");
const channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");
/**
 * "1 + $I$ "
 * @param template
 * @param input
 * @param option
 * @returns
 */
function handleEvalCommand(template, params, config, runOption) {
    const input = (0, channel_value_util_1.unpackValue)(params);
    let runCommand = template;
    if (typeof input === 'string') {
        const placeholder = config['*'];
        if (placeholder) {
            runCommand = runCommand.replaceAll(placeholder, input);
        }
    }
    else {
        Object.keys(config).forEach(key => {
            const placeholder = config[key];
            const value = input[key];
            runCommand = runCommand.replaceAll(placeholder, value);
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
class RunCommandWork extends Instruction_1.InstructionOTO {
    template = '';
    name = "RunCommandWork";
    paramsConfig = {};
    callBack = null;
    constructor(...args) {
        super();
        if (typeof args[0] === 'string') {
            const template = args[0] || '$I$';
            const paramsConfig = args[1] || { "*": "$I$" };
            this.template = template;
            this.paramsConfig = paramsConfig;
        }
        else if (typeof args[0] === 'function') {
            this.callBack = args[0];
        }
    }
    run(command, option) {
        const that = this;
        return new rxjs_1.Observable((subscriber) => {
            let target;
            if (that.callBack && typeof that.callBack === 'function') {
                target = this.callBack((0, channel_value_util_1.unpackValue)(command), option);
            }
            else
                target = handleEvalCommand(that.template, command, this.paramsConfig, option);
            const sub = that.context.platform
                .runCommand(target)
                .subscribe({
                next: (info) => {
                    this.logMsg(`执行command：${info.error ? '失败' : '成功'}。结果：${info.result}`, command);
                    subscriber.next((0, channel_value_util_1.wrapperValue)(command, info.error ? undefined : info.result));
                },
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
        return Equipment_1.isJS;
        // return isNode || isWeb || isRN || isElectron
    }
}
exports["default"] = RunCommandWork;


/***/ }),

/***/ "./src/Works/ExtendsWorks/UtilWork.ts":
/*!********************************************!*\
  !*** ./src/Works/ExtendsWorks/UtilWork.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DelayIntervalWork = exports.TimeoutWork = exports.IntervalWork = void 0;
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const __1 = __webpack_require__(/*! ../.. */ "./src/index.ts");
const channel_value_util_1 = __webpack_require__(/*! ../../Util/channel-value-util */ "./src/Util/channel-value-util.ts");
const Instruction_1 = __webpack_require__(/*! ../Instruction */ "./src/Works/Instruction.ts");
// 一直发
class IntervalWork extends Instruction_1.InstructionOTM {
    name = "IntervalWork";
    intervalTime;
    maxCount;
    notifier;
    constructor(interval, max = Infinity, notifier) {
        super();
        this.intervalTime = interval || 1000;
        this.maxCount = max;
        this.notifier = notifier || rxjs_1.NEVER;
    }
    run(input) {
        const intervalTime = parseInt((0, channel_value_util_1.unpackValue)(input)) || this.intervalTime || 1000;
        const that = this;
        return new rxjs_1.Observable(observer => {
            const sub = (0, rxjs_1.interval)(intervalTime, rxjs_1.asyncScheduler).pipe((0, operators_1.take)(that.maxCount), (0, operators_1.takeUntil)(this.notifier)).subscribe({
                next: (value) => observer.next((0, channel_value_util_1.wrapperValue)(input, new __1.NumberObject(value))),
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
exports.IntervalWork = IntervalWork;
// 定时发
class TimeoutWork extends Instruction_1.InstructionOTO {
    name = "TimeoutWork";
    intervalTime;
    constructor(interval) {
        super();
        this.intervalTime = interval || 1000;
    }
    run(input) {
        const intervalTime = parseInt((0, channel_value_util_1.unpackValue)(input)) || this.intervalTime || 1000;
        const that = this;
        return new rxjs_1.Observable(observer => {
            const sub = (0, rxjs_1.interval)(intervalTime, rxjs_1.asyncScheduler)
                .pipe((0, operators_1.take)(1)).subscribe({
                next: (value) => {
                    observer.next((0, channel_value_util_1.wrapperValue)(input, new __1.NumberObject(value)));
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
exports.TimeoutWork = TimeoutWork;
// 延迟 然后一直发
class DelayIntervalWork extends Instruction_1.InstructionOTM {
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
        this.notifier = notifier || rxjs_1.NEVER;
    }
    run(input) {
        const intervalTime = parseInt((0, channel_value_util_1.unpackValue)(input)) || this.intervalTime || 1000;
        const that = this;
        return new rxjs_1.Observable(observer => {
            const sub = (0, rxjs_1.timer)(that.delayTime, intervalTime, rxjs_1.asyncScheduler)
                .pipe((0, operators_1.take)(that.maxCount), (0, operators_1.takeUntil)(this.notifier))
                .subscribe({
                next: (value) => observer.next((0, channel_value_util_1.wrapperValue)(input, new __1.NumberObject(value))),
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
exports.DelayIntervalWork = DelayIntervalWork;


/***/ }),

/***/ "./src/Works/Instruction.ts":
/*!**********************************!*\
  !*** ./src/Works/Instruction.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InstructionMTM = exports.InstructionOTM = exports.InstructionOTO = exports.Instruction = void 0;
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const Equipment_1 = __webpack_require__(/*! ../Util/Equipment */ "./src/Util/Equipment.ts");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const WorkUnit_1 = __webpack_require__(/*! ./WorkUnit */ "./src/Works/WorkUnit.ts");
const Object_1 = __webpack_require__(/*! ../Object */ "./src/Object/index.ts");
const channel_value_util_1 = __webpack_require__(/*! ../Util/channel-value-util */ "./src/Util/channel-value-util.ts");
const tools_1 = __webpack_require__(/*! ../Util/tools */ "./src/Util/tools.ts");
/**
 * 一次输入--->一次输出 InstructionOTO
 * 一次输入--->多次输出 InstructionOTM
 * n次输入---->m次输出 InstructionMTM
 */
class Instruction extends rxjs_1.Subject {
    name = "Instruction";
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
        this.uuid = (0, uuid_1.v4)();
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
        const sub2 = this
            .pipe((0, operators_1.tap)((value) => {
            this.config?.development &&
                that.context?.sendLog({
                    work: [that],
                    content: this.context,
                    desc: "[Work:preRun]->接受到数据",
                    value: value,
                });
        }))
            .subscribe({
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
        const execFunc = (0, Equipment_1.PlatformSelect)({
            web: () => (that.web_run ?? (that.run || tools_1.noop)).bind(that)(value, nextOption),
            node: () => (that.node_run ?? (that.run || tools_1.noop)).bind(that)(value, nextOption),
            electron: () => (that.electron_run ?? (that.run || tools_1.noop)).bind(that)(value, nextOption),
            other: () => ((that.run || tools_1.noop)).bind(that)(value, nextOption)
        });
        sendLog("[Work][Func:run]->入口", value);
        const uuid = (0, uuid_1.v4)();
        const runSub = execFunc(value)
            .pipe((0, operators_1.tap)(function (_value) {
            sendLog("[Work][Func:run]->结果", _value);
        }), (0, operators_1.observeOn)(rxjs_1.asyncScheduler))
            .subscribe({
            complete: () => {
                const unit = that.runSubscriptions.get(uuid);
                unit?.sub.unsubscribe();
                that.runSubscriptions.delete(uuid);
            },
            error: (err) => {
                sendLog("[Work][Func:run]->执行错误", value, err);
                that.completeOneLoop(value, null, false);
            },
            next: (res) => {
                sendLog("[Work][Func:run]->将执行下一个Work", res);
                that.completeOneLoop(value, res, true);
                that.nextWork?.next(res);
            },
        });
        const unit = new WorkUnit_1.WorkUnit(that.context, that, runSub, uuid);
        this.runSubscriptions.set(unit.uuid, unit);
    }
    stopWork() {
        const that = this;
        return new rxjs_1.Observable((subscribe) => {
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
                desc: "[Work:preRun]-接受上一个消息错误",
                date: new Date(),
                value: new Object_1.StringObject(err.message),
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
                value: (0, channel_value_util_1.wrapperValue)(input, null),
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
                desc: this.toString() + " 已经关闭",
                value: (0, channel_value_util_1.wrapperValue)(value, null),
            });
        }
    }
    // 声明周期
    // 处理输入的值
    nextValue(input) { return input; }
    completeOneLoop(input, toValue, success) { }
    // 基础
    toString() {
        return `[${this.name}:${this.id}]`;
    }
    isAble() {
        return this.__proto__.isAble();
    }
    static isAble() {
        return Equipment_1.isJS;
    }
}
exports.Instruction = Instruction;
class InstructionOTO extends Instruction {
    nextValue(input) {
        return input;
    }
    completeOneLoop(input, toValue, success) { }
    run(input) {
        return new rxjs_1.Observable((subscriber) => {
            subscriber.next(input);
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
}
exports.InstructionOTO = InstructionOTO;
class InstructionOTM extends Instruction {
    // 声明可以进行配置的属性 todo
    static OPTION;
    name = "MultipleInstruction";
    nextValue(input) { return input; }
    completeOneLoop(input, next, success) { }
    run(input) {
        return new rxjs_1.Observable((subscriber) => {
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
exports.InstructionOTM = InstructionOTM;
class InstructionMTM extends Instruction {
    // 声明可以进行配置的属性 todo
    static OPTION;
    name = "MultipleInstruction";
    nextValue(input) { return input; }
    completeOneLoop(input, next, success) { }
    run(input) {
        return new rxjs_1.Observable((subscriber) => {
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
exports.InstructionMTM = InstructionMTM;


/***/ }),

/***/ "./src/Works/WorkUnit.ts":
/*!*******************************!*\
  !*** ./src/Works/WorkUnit.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WorkUnit = void 0;
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
class WorkUnit {
    context;
    work;
    uuid;
    sub;
    constructor(context, work, sub, uuid) {
        this.context = context;
        this.work = work;
        this.sub = sub;
        this.uuid = uuid ?? (0, uuid_1.v4)();
    }
}
exports.WorkUnit = WorkUnit;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createExtendsInstance = exports.createExtendsConstruct = exports.decide = exports.isAbleType = exports.wrapperValue = exports.unpackValue = exports.FetchWork = exports.DelayIntervalWork = exports.TimeoutWork = exports.IntervalWork = exports.RunCommandWork = exports.QRCodeWork = exports.OpenURLWork = exports.LoadFileWork = exports.Base64EnCodeWork = exports.Base64DecodeWork = exports.InstructionOTO = exports.InstructionOTM = exports.InstructionMTM = exports.ControlFlow = exports.WorkType = exports.Context = exports.OptionalObject = exports.DataObject = exports.DateObject = exports.BooleanObject = exports.StringObject = exports.NumberObject = exports.SetObject = exports.MapObject = exports.ArrayObject = exports.ObjectTarget = void 0;
const Object_1 = __webpack_require__(/*! ./Object */ "./src/Object/index.ts");
Object.defineProperty(exports, "ObjectTarget", ({ enumerable: true, get: function () { return Object_1.ObjectTarget; } }));
Object.defineProperty(exports, "ArrayObject", ({ enumerable: true, get: function () { return Object_1.ArrayObject; } }));
Object.defineProperty(exports, "MapObject", ({ enumerable: true, get: function () { return Object_1.MapObject; } }));
Object.defineProperty(exports, "SetObject", ({ enumerable: true, get: function () { return Object_1.SetObject; } }));
Object.defineProperty(exports, "NumberObject", ({ enumerable: true, get: function () { return Object_1.NumberObject; } }));
Object.defineProperty(exports, "StringObject", ({ enumerable: true, get: function () { return Object_1.StringObject; } }));
Object.defineProperty(exports, "BooleanObject", ({ enumerable: true, get: function () { return Object_1.BooleanObject; } }));
Object.defineProperty(exports, "DateObject", ({ enumerable: true, get: function () { return Object_1.DateObject; } }));
Object.defineProperty(exports, "DataObject", ({ enumerable: true, get: function () { return Object_1.DataObject; } }));
Object.defineProperty(exports, "OptionalObject", ({ enumerable: true, get: function () { return Object_1.OptionalObject; } }));
Object.defineProperty(exports, "createExtendsConstruct", ({ enumerable: true, get: function () { return Object_1.createExtendsConstruct; } }));
Object.defineProperty(exports, "createExtendsInstance", ({ enumerable: true, get: function () { return Object_1.createExtendsInstance; } }));
const Types_1 = __webpack_require__(/*! ./Types */ "./src/Types.ts");
Object.defineProperty(exports, "WorkType", ({ enumerable: true, get: function () { return Types_1.WorkType; } }));
const Control_1 = __webpack_require__(/*! ./Object/Able/Control */ "./src/Object/Able/Control.ts");
Object.defineProperty(exports, "ControlFlow", ({ enumerable: true, get: function () { return Control_1.ControlFlow; } }));
const Context_1 = __webpack_require__(/*! ./Context */ "./src/Context.ts");
Object.defineProperty(exports, "Context", ({ enumerable: true, get: function () { return Context_1.Context; } }));
const Instruction_1 = __webpack_require__(/*! ./Works/Instruction */ "./src/Works/Instruction.ts");
Object.defineProperty(exports, "InstructionMTM", ({ enumerable: true, get: function () { return Instruction_1.InstructionMTM; } }));
Object.defineProperty(exports, "InstructionOTM", ({ enumerable: true, get: function () { return Instruction_1.InstructionOTM; } }));
Object.defineProperty(exports, "InstructionOTO", ({ enumerable: true, get: function () { return Instruction_1.InstructionOTO; } }));
const Base64Work_1 = __webpack_require__(/*! ./Works/ExtendsWorks/Base64Work */ "./src/Works/ExtendsWorks/Base64Work.ts");
Object.defineProperty(exports, "Base64DecodeWork", ({ enumerable: true, get: function () { return Base64Work_1.Base64DecodeWork; } }));
Object.defineProperty(exports, "Base64EnCodeWork", ({ enumerable: true, get: function () { return Base64Work_1.Base64EnCodeWork; } }));
const LoadFileWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/LoadFileWork */ "./src/Works/ExtendsWorks/LoadFileWork.ts");
exports.LoadFileWork = LoadFileWork_1.default;
const OpenURLWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/OpenURLWork */ "./src/Works/ExtendsWorks/OpenURLWork.ts");
exports.OpenURLWork = OpenURLWork_1.default;
const QRCodeWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/QRCodeWork */ "./src/Works/ExtendsWorks/QRCodeWork.ts");
Object.defineProperty(exports, "QRCodeWork", ({ enumerable: true, get: function () { return QRCodeWork_1.QRCodeWork; } }));
const FetchWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/FetchWork */ "./src/Works/ExtendsWorks/FetchWork.ts");
exports.FetchWork = FetchWork_1.default;
const RunCommandWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/RunCommandWork */ "./src/Works/ExtendsWorks/RunCommandWork.ts");
exports.RunCommandWork = RunCommandWork_1.default;
const UtilWork_1 = __webpack_require__(/*! ./Works/ExtendsWorks/UtilWork */ "./src/Works/ExtendsWorks/UtilWork.ts");
Object.defineProperty(exports, "IntervalWork", ({ enumerable: true, get: function () { return UtilWork_1.IntervalWork; } }));
Object.defineProperty(exports, "TimeoutWork", ({ enumerable: true, get: function () { return UtilWork_1.TimeoutWork; } }));
Object.defineProperty(exports, "DelayIntervalWork", ({ enumerable: true, get: function () { return UtilWork_1.DelayIntervalWork; } }));
const channel_value_util_1 = __webpack_require__(/*! ./Util/channel-value-util */ "./src/Util/channel-value-util.ts");
Object.defineProperty(exports, "unpackValue", ({ enumerable: true, get: function () { return channel_value_util_1.unpackValue; } }));
Object.defineProperty(exports, "wrapperValue", ({ enumerable: true, get: function () { return channel_value_util_1.wrapperValue; } }));
const valueUtil_1 = __webpack_require__(/*! ./Object/valueUtil */ "./src/Object/valueUtil.ts");
Object.defineProperty(exports, "isAbleType", ({ enumerable: true, get: function () { return valueUtil_1.isAbleType; } }));
Object.defineProperty(exports, "decide", ({ enumerable: true, get: function () { return valueUtil_1.decide; } }));
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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