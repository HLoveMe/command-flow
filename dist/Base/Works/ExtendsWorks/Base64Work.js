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
exports.Base64EnCodeWork = exports.Base64DecodeWork = void 0;
var Work_1 = require("../Work");
var operators_1 = require("rxjs/operators");
var rxjs_operators_1 = require("../../Util/rxjs_operators");
var js_base64_1 = require("js-base64");
//解码
var Base64DecodeWork = /** @class */ (function (_super) {
    __extends(Base64DecodeWork, _super);
    function Base64DecodeWork() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Base64DecodeWork";
        return _this;
    }
    Base64DecodeWork.prototype.run = function (input) {
        if (input == null) {
            this.output.next(null);
            this.output.complete();
        }
        else {
            var subp = input.value()
                .pipe((0, operators_1.takeLast)(1), (0, operators_1.map)(function (value) { return js_base64_1.Base64.decode(value.valueOf()); }), (0, rxjs_operators_1.ValueSwitchTapCatch)(this)
            // toInOutValue,
            // tap((value) => this.context?.msgChannel.next(value)),
            // catchError(err=>{throw err})
            )
                .subscribe(this._getOutputObserver());
            this.pools.push(subp);
        }
    };
    return Base64DecodeWork;
}(Work_1.SingleInstruction));
exports.Base64DecodeWork = Base64DecodeWork;
//编码
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
                .pipe((0, operators_1.takeLast)(1), (0, operators_1.map)(function (value) { return js_base64_1.Base64.encode(value.valueOf()); }), 
            // toInOutValue,
            // tap((value) => this.context?.msgChannel.next(value)),
            // catchError(err=>{throw err})
            (0, rxjs_operators_1.ValueSwitchTapCatch)(this))
                .subscribe(this._getOutputObserver());
            this.pools.push(subp);
        }
    };
    return Base64EnCodeWork;
}(Work_1.SingleInstruction));
exports.Base64EnCodeWork = Base64EnCodeWork;
//# sourceMappingURL=Base64Work.js.map