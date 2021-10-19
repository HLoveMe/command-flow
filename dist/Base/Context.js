"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
var rxjs_1 = require("rxjs");
var Context = /** @class */ (function () {
    function Context(runOptions) {
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
        this.runOptions = runOptions;
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
    Context.prototype.prepareWorks = function (initOption) {
        if (initOption === void 0) { initOption = null; }
        this.works.forEach(function ($1, index, source) {
            var before = source[index - 1];
            var after = source[index + 1];
            var input = index == 0 ? initOption : before.output;
            $1.prepare(input, before, after);
        });
    };
    Context.prototype.run = function (initOption) {
        this.prepareWorks(initOption);
    };
    /**
     * 测试运行
     * @param input
     */
    Context.prototype.testRun = function (input) {
        this.prepareWorks();
        this.works[0].input.next(input);
        this.works[0].input.complete();
    };
    Context.prototype.clear = function () {
        this.pools.forEach(function ($1) { return $1.unsubscribe(); });
    };
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=Context.js.map