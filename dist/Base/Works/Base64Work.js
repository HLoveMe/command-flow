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
var Work_1 = require("./Work");
var operators_1 = require("rxjs/operators");
var rxjs_operators_1 = require("../Util/rxjs_operators");
//解码
var Base64EnCodeWork = /** @class */ (function (_super) {
    __extends(Base64EnCodeWork, _super);
    function Base64EnCodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Base64EnCodeWork";
        return _this;
    }
    Base64EnCodeWork.prototype.run = function (input) {
        if (input == null) {
            this.output.next(null);
            this.output.complete();
        }
        else {
            var subp = input.value()
                .pipe(operators_1.takeLast(1), operators_1.map(function (value) { return Buffer.from(value.toString(), "base64").toString("utf-8"); }), rxjs_operators_1.toInOutValue)
                .subscribe(this.output);
            this.pools.push(subp);
        }
    };
    return Base64EnCodeWork;
}(Work_1.SingleInstruction));
exports.Base64EnCodeWork = Base64EnCodeWork;
//编码
var Base64DecodeWork = /** @class */ (function (_super) {
    __extends(Base64DecodeWork, _super);
    function Base64DecodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Base64DecodeWork";
        return _this;
    }
    Base64DecodeWork.prototype.run = function (input) {
        var _this = this;
        if (input == null) {
            this.output.next(null);
            this.output.complete();
        }
        else {
            var subp = input.value()
                .pipe(operators_1.takeLast(1), operators_1.map(function (value) { return Buffer.from(value.valueOf(), "utf-8").toString("base64"); }), rxjs_operators_1.toInOutValue, operators_1.tap(function (value) { var _a; return (_a = _this.context) === null || _a === void 0 ? void 0 : _a.msgChannel.next(value); }))
                .subscribe(this.getOutoutObserver());
            this.pools.push(subp);
        }
    };
    return Base64DecodeWork;
}(Work_1.SingleInstruction));
exports.Base64DecodeWork = Base64DecodeWork;
//# sourceMappingURL=Base64Work.js.map