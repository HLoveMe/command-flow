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
exports.DataObject = void 0;
var ObjectTarget_1 = require("./ObjectTarget");
var DataObject = /** @class */ (function (_super) {
    __extends(DataObject, _super);
    function DataObject(value) {
        if (value === void 0) { value = new ArrayBuffer(0); }
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    DataObject.prototype.data = function () {
        return this.valueOf();
    };
    // @attribute()
    DataObject.prototype.valueOf = function () {
        return this._value;
    };
    return DataObject;
}(ObjectTarget_1.ObjectTarget));
exports.DataObject = DataObject;
