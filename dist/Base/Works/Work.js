"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var v5_1 = require("uuid/v5");
/**
 * 1:输入形式
 * 2:多次执行
 * 3:
 */
var SingleInstruction = /** @class */ (function () {
    function SingleInstruction() {
        this.name = "SingleInstruction";
        this.id = SingleInstruction._id++;
        this.pools = [];
        this.uuid = v5_1.default();
    }
    SingleInstruction.prototype.addVariable = function (name, value) {
        this.context && this.context.addVariable(this, name, value);
    };
    SingleInstruction.prototype.prepare = function (input, before, next) {
        this.before = before;
        this.next = next;
        this.output = new rxjs_1.Subject();
        this.input = rxjs_1.isObservable(input) ? rxjs_1.from(input) : rxjs_1.of(input);
        this.handleInput();
    };
    SingleInstruction.prototype.handleInput = function () {
        var _this = this;
        var sub = operators_1.takeLast(1)(this.input).subscribe(function (value) { return _this.run(value); });
        this.pools.push(sub);
    };
    SingleInstruction.prototype.run = function (input) {
        this.output.next(input);
        this.output.complete();
    };
    SingleInstruction.prototype.stop = function () {
        // throw new Error("Method not implemented.");
    };
    SingleInstruction.prototype.clear = function () {
        this.pools && this.pools.forEach(function ($1) { return $1.unsubscribe(); });
        this.pools.length = 0;
        // throw new Error("Method not implemented.");
    };
    SingleInstruction._id = 0;
    return SingleInstruction;
}());
exports.SingleInstruction = SingleInstruction;
var MultipleInstruction = /** @class */ (function (_super) {
    __extends(MultipleInstruction, _super);
    function MultipleInstruction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "MultipleInstruction";
        return _this;
    }
    MultipleInstruction.prototype.handleInput = function () {
        var _this = this;
        var sub = this.input.subscribe(function (value) { return _this.run(value); });
        this.pools.push(sub);
    };
    return MultipleInstruction;
}(SingleInstruction));
exports.MultipleInstruction = MultipleInstruction;
//# sourceMappingURL=Work.js.map