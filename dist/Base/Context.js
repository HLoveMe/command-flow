"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context = /** @class */ (function () {
    function Context() {
        this.runConstant = new Map();
        this.works = [];
    }
    Context.prototype.addVariable = function (from, name, value) {
        var w_map = this.runConstant.get(from.uuid);
        !w_map && (this.runConstant.set(from.uuid, new Map()));
        this.runConstant.get(from.uuid).set(name, value);
    };
    Context.prototype.addWork = function (work) {
        work.context = this;
        this.works.push(work);
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
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=Context.js.map