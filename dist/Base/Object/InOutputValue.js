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
exports.InOutDate = exports.InOutBoolean = exports.InOutSet = exports.InOutArray = exports.InOutMap = exports.InOutString = exports.InOutNumber = exports.InOutObject = void 0;
var rxjs_1 = require("rxjs");
var BaseObject_1 = require("./BaseObject");
var InOutObject = /** @class */ (function (_super) {
    __extends(InOutObject, _super);
    function InOutObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutObject.prototype.value = function () {
        return (0, rxjs_1.of)(this);
    };
    return InOutObject;
}(BaseObject_1.ObjectTarget));
exports.InOutObject = InOutObject;
var InOutNumber = /** @class */ (function (_super) {
    __extends(InOutNumber, _super);
    function InOutNumber() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutNumber.prototype.value = function () {
        return (0, rxjs_1.of)(this);
    };
    return InOutNumber;
}(BaseObject_1.NumberObject));
exports.InOutNumber = InOutNumber;
var InOutString = /** @class */ (function (_super) {
    __extends(InOutString, _super);
    function InOutString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutString.prototype.value = function () {
        return (0, rxjs_1.of)(this);
    };
    return InOutString;
}(BaseObject_1.StringObject));
exports.InOutString = InOutString;
var InOutMap = /** @class */ (function (_super) {
    __extends(InOutMap, _super);
    function InOutMap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutMap.prototype.value = function () {
        return (0, rxjs_1.of)(this);
    };
    return InOutMap;
}(BaseObject_1.MapObject));
exports.InOutMap = InOutMap;
var InOutArray = /** @class */ (function (_super) {
    __extends(InOutArray, _super);
    function InOutArray() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutArray.prototype.value = function () {
        return (0, rxjs_1.of)(this);
    };
    return InOutArray;
}(BaseObject_1.ArrayObject));
exports.InOutArray = InOutArray;
var InOutSet = /** @class */ (function (_super) {
    __extends(InOutSet, _super);
    function InOutSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutSet.prototype.value = function () {
        return (0, rxjs_1.of)(this);
    };
    return InOutSet;
}(BaseObject_1.SetObject));
exports.InOutSet = InOutSet;
var InOutBoolean = /** @class */ (function (_super) {
    __extends(InOutBoolean, _super);
    function InOutBoolean() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutBoolean.prototype.value = function () {
        return (0, rxjs_1.of)(this);
    };
    return InOutBoolean;
}(BaseObject_1.BooleanObject));
exports.InOutBoolean = InOutBoolean;
var InOutDate = /** @class */ (function (_super) {
    __extends(InOutDate, _super);
    function InOutDate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InOutDate.prototype.value = function () {
        return (0, rxjs_1.of)(this);
    };
    return InOutDate;
}(BaseObject_1.DateObject));
exports.InOutDate = InOutDate;
//# sourceMappingURL=InOutputValue.js.map