"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AloneInstruction = exports.MultipleInstruction = exports.SingleInstruction = void 0;
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var Error_1 = require("../Error");
var Equipment_1 = require("../Util/Equipment");
var UUID = require("uuid/v4");
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
        // 运行配置 config:OPTION todo
        this.config = {};
        this.uuid = UUID();
    }
    SingleInstruction.prototype.error = function (err) {
        this.context && this.context.msgChannel.error(new Error_1.ExecError(this, err));
    };
    SingleInstruction.prototype.addVariable = function (name, value) {
        this.context && this.context.addVariable(this, name, value);
    };
    // 运行
    SingleInstruction.prototype.prepare = function (input, before, next) {
        var that = this;
        this.before = before;
        this.next = next;
        this.output = new rxjs_1.Subject();
        this.input = new rxjs_1.BehaviorSubject(undefined);
        this.handleInput();
        var sub;
        if ((0, rxjs_1.isObservable)(input)) {
            sub = input.subscribe(function (value) { return that.input.next(value); }, null, function () { return that.input.complete(); });
        }
        else {
            sub = (0, rxjs_1.of)(input).subscribe(function (value) { return that.input.next(value); });
        }
        this.pools.push(sub);
    };
    SingleInstruction.prototype._run = function (value) {
        var that = this;
        (0, Equipment_1.PlatformSelect)({
            reactNative: function () { var _a; return ((_a = that.rn_run) !== null && _a !== void 0 ? _a : that.run)(value); },
            web: function () { var _a; return ((_a = that.web_run) !== null && _a !== void 0 ? _a : that.run)(value); },
            node: function () {
                var _a;
                return ((_a = that.node_run) !== null && _a !== void 0 ? _a : that.run)(value);
            },
        })();
    };
    SingleInstruction.prototype.handleInput = function () {
        var that = this;
        var sub = this.input
            .pipe(
        // tap((value) => this.context?.msgChannel.next(value)),
        (0, operators_1.takeLast)(1))
            .subscribe({
            error: function (error) { return that.error(error); },
            next: function (value) { return that._run(value); },
        });
        this.pools.push(sub);
    };
    //
    SingleInstruction.prototype._getOutputObserver = function (next, error, complete) {
        var _a, _b;
        var that = this;
        return {
            next: (_a = next) !== null && _a !== void 0 ? _a : (function (value) {
                that.output.next(value);
            }),
            complete: (_b = complete) !== null && _b !== void 0 ? _b : (function () {
                that.output.complete();
            }),
            error: error !== null && error !== void 0 ? error : (function (error) {
                var _a;
                (_a = that.context) === null || _a === void 0 ? void 0 : _a.msgChannel.error(error);
                that.output.error(error);
            }),
        };
    };
    // 接受上一个的值
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
        var that = this;
        var sub = this.input.subscribe(function (value) { return that._run(value); }, function (error) { return that.error(error); });
        this.pools.push(sub);
    };
    return MultipleInstruction;
}(SingleInstruction));
exports.MultipleInstruction = MultipleInstruction;
/**
 * 没有输出的任务
 */
var AloneInstruction = /** @class */ (function (_super) {
    __extends(AloneInstruction, _super);
    function AloneInstruction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "AloneInstruction";
        return _this;
    }
    AloneInstruction.prototype.handleInput = function () {
        // this.output.complete();
        this.run(null);
    };
    AloneInstruction.prototype.run = function (input) {
        this.output.complete();
    };
    return AloneInstruction;
}(SingleInstruction));
exports.AloneInstruction = AloneInstruction;
//# sourceMappingURL=Work.js.map