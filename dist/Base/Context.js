"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
var rxjs_1 = require("rxjs");
var Context = /** @class */ (function () {
    function Context() {
        this.runConstant = new Map();
        this.works = [];
        this.msgChannel = new rxjs_1.Subject();
        this.pools = [];
        var sub = this.msgChannel.subscribe(this.workMessage, this.workError);
        this.pools.push(sub);
    }
    Context.prototype.addVariable = function (from, name, value) {
        var w_map = this.runConstant.get(from.uuid);
        !w_map && (this.runConstant.set(from.uuid, new Map()));
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
    Context.prototype.prepareWorks = function () {
        this.works.forEach(function ($1, index, souce) {
            var before = souce[index - 1];
            var after = souce[index + 1];
            var input = index == 0 ? null : before.output;
            $1.prepare(input, before, after);
        });
    };
    Context.prototype.run = function () {
        this.prepareWorks();
    };
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