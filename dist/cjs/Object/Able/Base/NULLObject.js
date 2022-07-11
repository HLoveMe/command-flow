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
exports.NULLObject = void 0;
var ObjectTarget_1 = require("./ObjectTarget");
var NULLObject = /** @class */ (function (_super) {
    __extends(NULLObject, _super);
    function NULLObject(value) {
        if (value === void 0) { value = null; }
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    // @attribute()
    NULLObject.prototype.valueOf = function () {
        return this._value;
    };
    NULLObject.prototype.merge = function (target) {
        return new NULLObject(null);
    };
    NULLObject.prototype.isTruly = function () {
        return !!this._value;
    };
    NULLObject.prototype.isNull = function () {
        return this._value === null;
    };
    NULLObject.prototype.isUndefined = function () {
        return this._value === undefined;
    };
    return NULLObject;
}(ObjectTarget_1.ObjectTarget));
exports.NULLObject = NULLObject;
