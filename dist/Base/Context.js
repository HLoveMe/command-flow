"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
var Types_1 = require("./Types");
var rxjs_1 = require("rxjs");
var ObjectAble_1 = require("./Object/Able/ObjectAble");
var Index_1 = require("./Bridge/Index");
var BeginWork_1 = require("./Works/ExtendsWorks/BeginWork");
var Context = /** @class */ (function () {
    function Context(runOptions) {
        this.status = Types_1.WorkType.WorkRunStatus.INIT;
        this.platform = Index_1.default;
        /**
         * 上下文变量
         */
        this.runConstant = new Map();
        /**
         * 所有work
         */
        this.works = [new BeginWork_1.BeginWork()];
        /**
         * 消息传输通道
         */
        this.msgChannel = new rxjs_1.Subject();
        /**
         * 需要销毁的Subscription
         */
        this.pools = [];
        this.runOptions = runOptions || {};
        var sub = this.msgChannel.subscribe(this.workMessage.bind(this), this.workError.bind(this));
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
        console.log("msgChannel", input.valueOf());
    };
    Context.prototype.workError = function (error) {
        console.log("msgChannelError", error);
        this.stopWorkChain();
    };
    Context.prototype.sendLog = function (status) {
        var log = {
            date: new Date().getTime(),
            work: (Array.isArray(status.work) ? status.work : [status.work]).forEach(function ($1) { return $1 === null || $1 === void 0 ? void 0 : $1.name; }),
            info: status.desc,
        };
        this.msgChannel.next(new ObjectAble_1.StringObject(JSON.stringify(log)));
    };
    Context.prototype.addWork = function (work) {
        if (this.status !== Types_1.WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: null,
                desc: "[content][Func:addWork][context status is not init]",
                value: new ObjectAble_1.BooleanObject(false),
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
        if (this.status !== Types_1.WorkType.WorkRunStatus.INIT) {
            return this.sendLog({
                content: this,
                work: null,
                desc: "[content][Func:prepareWorks][context status is not init]",
                value: new ObjectAble_1.BooleanObject(false),
            });
        }
        ;
        this.works.forEach(function ($1, index, source) {
            var before = source[index - 1];
            var after = source[index + 1];
            $1.prepare(before, after);
        });
        this.status = Types_1.WorkType.WorkRunStatus.READY;
    };
    Context.prototype.run = function (input, initOption) {
        if (this.status !== Types_1.WorkType.WorkRunStatus.READY) {
            return this.sendLog({
                content: this,
                work: null,
                desc: "[content][Func:run][run status is not ready]",
                value: new ObjectAble_1.BooleanObject(false),
            });
        }
        ;
        var inputWork = this.works[0];
        if (inputWork) {
            inputWork.startRun(input);
        }
        this.status = Types_1.WorkType.WorkRunStatus.RUNNING;
    };
    /**
     * 尝试再次输入某个值
     * 成功与否和Work是否支持有关
     * @param input
     * @returns
     */
    Context.prototype.tryInsertInput = function (input) {
        if (this.status !== Types_1.WorkType.WorkRunStatus.RUNNING) {
            return this.sendLog({
                content: this,
                work: null,
                desc: "[content][Func:tryInsertInput][run status is not running]",
                value: new ObjectAble_1.BooleanObject(false),
            });
        }
        ;
        var inputWork = this.works[0];
        if (inputWork) {
            inputWork.inputSubject.next(input);
        }
    };
    /**
     * 停止执行
     * 关闭
     */
    Context.prototype.stopWorkChain = function () {
        var _this = this;
        var that = this;
        return new rxjs_1.Observable(function (subscribe) {
            var taskUns = _this.works.map(function ($1) {
                return $1.stopWork();
            });
            var isSuccess = false;
            var errors = [];
            var sub = (0, rxjs_1.forkJoin)(taskUns).subscribe({
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
                        value: new ObjectAble_1.BooleanObject(isSuccess),
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
exports.Context = Context;
//# sourceMappingURL=Context.js.map