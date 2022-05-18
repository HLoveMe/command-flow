var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
import { WorkType } from "./Types";
import { forkJoin, Observable, Subject } from "rxjs";
import { BooleanObject } from "./Object/Able/ObjectAble";
import Platform from "./Bridge/Index";
import { BeginWork } from "./Works/ExtendsWorks/BeginWork";
import { decide } from "./Object/valueUtil";
var Context = /** @class */ (function () {
    function Context(runOptions) {
        var _this = this;
        this.status = WorkType.WorkRunStatus.INIT;
        this.platform = Platform;
        /**
         * 上下文变量
         */
        this.runConstant = new Map();
        /**
         * 所有work
         */
        this.works = [new BeginWork()];
        /**
         * 消息传输通道
         */
        this.msgChannel = new Subject();
        /**
         * 需要销毁的Subscription
         */
        this.pools = [];
        this.runOptions = runOptions || {};
        var sub = this.msgChannel.subscribe({
            next: function (value) { return _this.workMessage(value); },
            error: function (error) { return _this.workError(error); },
        });
        this.pools.push(sub);
    }
    /**
     * 增加上下文变量
     * @param from
     * @param name
     * @param value
     */
    Context.prototype.addVariable = function (from, name, value) {
        var w_map = this.runConstant.get(from.uuid);
        !w_map && this.runConstant.set(from.uuid, new Map());
        this.runConstant.get(from.uuid).set(name, value);
    };
    Context.prototype.workMessage = function (input) {
        // console.log("msgChannel", input);
    };
    Context.prototype.workError = function (error) {
        // console.log("msgChannelError", error);
        this.stopWorkChain();
    };
    Context.prototype.addWorkLog = function (tap) {
        return this.msgChannel.subscribe(tap);
    };
    Context.prototype.sendLog = function (status) {
        var log = {
            date: new Date(),
            work: (Array.isArray(status.work) ? status.work : [status.work]).filter(function ($1) { return $1 === null || $1 === void 0 ? void 0 : $1.name; }),
            desc: status.desc,
            value: status.value,
        };
        this.msgChannel.next(log);
    };
    Context.prototype.addWork = function (work) {
        if (this.status !== WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: null,
                desc: "[content][Func:addWork][context status is not init]",
                value: new BooleanObject(false),
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
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.status !== WorkType.WorkRunStatus.INIT) {
                    return [2 /*return*/, this.sendLog({
                            content: this,
                            work: null,
                            desc: "[content][Func:prepareWorks][context status is not init]",
                            value: new BooleanObject(false),
                        })];
                }
                ;
                this.works.forEach(function ($1, index, source) {
                    var before = source[index - 1];
                    var after = source[index + 1];
                    $1.prepare(before, after);
                });
                this.status = WorkType.WorkRunStatus.READY;
                return [2 /*return*/];
            });
        });
    };
    Context.prototype.run = function (input, initOption) {
        if (this.status === WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: null,
                desc: "[context][Func:run][run status is not ready  or 已经初始化]",
                value: new BooleanObject(false),
            });
        }
        ;
        var inputWork = this.works[0];
        if (inputWork) {
            inputWork.startRun(decide(input));
        }
        this.status = WorkType.WorkRunStatus.RUNNING;
    };
    // /**
    //  * 尝试再次输入某个值
    //  * 成功与否和Work是否支持有关
    //  * @param input 
    //  * @returns 
    //  */
    // tryInsertInput(input: BaseType) {
    //   if (this.status !== WorkType.WorkRunStatus.RUNNING) {
    //     return this.sendLog({
    //       content: this,
    //       work: null,
    //       desc: "[content][Func:tryInsertInput][run status is not running]",
    //       value: new BooleanObject(false),
    //     });
    //   };
    //   const inputWork = this.works[0];
    //   if (inputWork) {
    //     // (inputWork as unknown as WorkType.WorkEntrance).inputSubject.next(input);
    //   }
    // }
    /**
     * 停止执行
     * 关闭
     */
    Context.prototype.stopWorkChain = function () {
        var _this = this;
        var that = this;
        return new Observable(function (subscribe) {
            var taskUns = _this.works.map(function ($1) {
                return $1.stopWork();
            });
            var isSuccess = false;
            var errors = [];
            var sub = forkJoin(taskUns).subscribe({
                next: function (values) {
                    return (isSuccess = values.every(function ($1, index) {
                        if ($1 === true)
                            return true;
                        errors.push(_this.works[index]);
                        return false;
                    }));
                },
                error: function () {
                    // 关闭报错
                },
                complete: function () {
                    _this.sendLog({
                        content: that,
                        work: errors,
                        desc: "[content][Func:stopWorkChain]",
                        value: new BooleanObject(isSuccess),
                    });
                    subscribe.next(isSuccess);
                    subscribe.complete();
                },
            });
            return {
                unsubscribe: function () {
                    subscribe.unsubscribe();
                    sub.unsubscribe();
                },
            };
        });
    };
    Context.prototype.clear = function () {
        this.pools.forEach(function ($1) { return $1.unsubscribe(); });
    };
    return Context;
}());
export { Context };
//# sourceMappingURL=Context.js.map