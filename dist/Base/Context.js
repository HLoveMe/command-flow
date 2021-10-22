"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
var rxjs_1 = require("rxjs");
var BaseObject_1 = require("./Object/BaseObject");
var Index_1 = require("./Bridge/Index");
var Context = /** @class */ (function () {
    function Context(runOptions) {
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
        this.runOptions = runOptions || {};
        var sub = this.msgChannel.subscribe(this.workMessage, this.workError);
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
        console.log("msgChannel", input);
    };
    Context.prototype.workError = function (error) {
        console.log("msgChannelError", error);
        this.stopWorkChain();
    };
    Context.prototype.sendLog = function (status) {
        var log = {
            date: new Date().getDate(),
            work: (Array.isArray(status.work) ? status.work : [status.work]).forEach(function ($1) { return $1.name; }),
            info: status.desc,
        };
        this.msgChannel.next(new BaseObject_1.StringObject(JSON.stringify(log)));
    };
    Context.prototype.addWork = function (work) {
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
    // 执行works
    Context.prototype.prepareWorks = function () {
        this.works.forEach(function ($1, index, source) {
            var before = source[index - 1];
            var after = source[index + 1];
            $1.prepare(before, after);
        });
    };
    Context.prototype.run = function (input, initOption) {
        this.prepareWorks();
        var inputWork = this.works[0];
        if (inputWork) {
            inputWork.startRun(input);
            // inputWork.complete()
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
                        value: new BaseObject_1.BooleanObject(isSuccess),
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