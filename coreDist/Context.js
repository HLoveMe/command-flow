"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const Types_1 = require("./Types");
const rxjs_1 = require("rxjs");
const Configs_1 = require("./Configs");
const ObjectAble_1 = require("./Object/Able/ObjectAble");
const Index_1 = require("./Bridge/Index");
const BeginWork_1 = require("./Works/ExtendsWorks/BeginWork");
const valueUtil_1 = require("./Object/valueUtil");
const operators_1 = require("rxjs/operators");
class Context {
    constructor(runOptions) {
        this.status = Types_1.WorkType.WorkRunStatus.INIT;
        this.platform = Index_1.default;
        /**
         * 上下文变量
         */
        this.runConstant = new Map();
        /**
         * 所有work
         */
        this.works = [];
        /**
         * 消息传输通道
         */
        this.msgChannel = new rxjs_1.Subject();
        /**
         * 需要销毁的Subscription
         */
        this.pools = [];
        this.runOptions = (runOptions || Configs_1.DefaultRunConfig);
        const sub = this.msgChannel.subscribe({
            next: (value) => this.workMessage(value),
            error: (error) => this.workError(error),
        });
        this.pools.push(sub);
        this.addWork(new BeginWork_1.BeginWork());
    }
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
        console.log("msgChannel", input);
    }
    workError(error) {
        console.log("msgChannelError", error);
        this.stopWorkChain();
    }
    addWorkLog(tap) {
        return this.msgChannel.subscribe(tap);
    }
    sendLog(status) {
        const log = {
            date: new Date(),
            work: status.work.filter(($1) => $1 === null || $1 === void 0 ? void 0 : $1.name),
            desc: status.desc,
            value: status.value,
            error: status.error,
        };
        this.msgChannel.next(log);
    }
    addWork(work) {
        if (work.constructor.isAble && work.constructor.isAble() === false) {
            const desc = "[content][Func:addWork][work isAble is false]";
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
                desc: "[content][Func:addWork][context status is not init]",
                value: new ObjectAble_1.BooleanObject(false),
            });
        }
        work.context = this;
        this.works.push(work);
    }
    addWorks(...works) {
        works.forEach(this.addWork);
    }
    prepareWorks() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.status !== Types_1.WorkType.WorkRunStatus.INIT) {
                return this.sendLog({
                    content: this,
                    work: [],
                    desc: "[content][Func:prepareWorks][context status is not init]",
                    value: new ObjectAble_1.BooleanObject(false),
                });
            }
            ;
            yield Promise.all(this.works.map(($1, index, source) => {
                const before = source[index - 1];
                const after = source[index + 1];
                return $1.prepare(before, after);
            }));
            this.status = Types_1.WorkType.WorkRunStatus.READY;
        });
    }
    dispatch(input) {
        if (this.status === Types_1.WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: [],
                desc: "[context][Func:run][run status is not ready  or 已经初始化]",
                value: new ObjectAble_1.BooleanObject(false),
            });
        }
        ;
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
            (0, rxjs_1.forkJoin)(taskUns).pipe((0, operators_1.take)(1)).subscribe({
                next: (values) => {
                    (isSuccess = values.every(($1, index) => {
                        if ($1 === true)
                            return true;
                        errors.push(this.works[index]);
                        return false;
                    }));
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
                        desc: "[content][Func:stopWorkChain]",
                        value: new ObjectAble_1.ObjectTarget({
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
//# sourceMappingURL=Context.js.map