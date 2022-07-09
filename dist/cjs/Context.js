"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
const Types_1 = require("./Types");
const rxjs_1 = require("rxjs");
const Configs_1 = require("./Configs");
const Object_1 = require("./Object");
const Index_1 = require("./Bridge/Index");
const BeginWork_1 = require("./Works/ExtendsWorks/BeginWork");
const valueUtil_1 = require("./Object/valueUtil");
const operators_1 = require("rxjs/operators");
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
