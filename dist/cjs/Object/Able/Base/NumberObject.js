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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberObject = void 0;
var util_1 = require("../../util");
var BooleanObject_1 = require("./BooleanObject");
var extend_util_1 = require("../../extend-util");
var NumberWrapper = (0, extend_util_1.createExtendsConstruct)(Number);
var _NumberObject = /** @class */ (function (_super) {
    __extends(_NumberObject, _super);
    function _NumberObject(value) {
        if (value === void 0) { value = 1; }
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    _NumberObject_1 = _NumberObject;
    Object.defineProperty(_NumberObject.prototype, Symbol.toStringTag, {
        get: function () {
            return _super.prototype[Symbol.toStringTag];
        },
        enumerable: false,
        configurable: true
    });
    _NumberObject.prototype.valueOf = function () {
        return this._value;
    };
    _NumberObject.prototype.json = function () {
        return _super.prototype.json.call(this);
    };
    _NumberObject.prototype.compare = function (type, target) {
        return new BooleanObject_1.BooleanObject(false);
    };
    _NumberObject.prototype.more = function (target) {
        return new BooleanObject_1.BooleanObject(this._value > target._value);
    };
    _NumberObject.prototype.equal = function (target) {
        return new BooleanObject_1.BooleanObject(this._value === target._value);
    };
    _NumberObject.prototype.less = function (target) {
        return new BooleanObject_1.BooleanObject(this._value < target._value);
    };
    _NumberObject.prototype.moreEqual = function (target) {
        return new BooleanObject_1.BooleanObject(this._value >= target._value);
    };
    _NumberObject.prototype.lessEqual = function (target) {
        return new BooleanObject_1.BooleanObject(this._value <= target._value);
    };
    _NumberObject.prototype.calc = function (type, target) {
        return new _NumberObject_1(0);
    };
    _NumberObject.prototype.plus = function (target) {
        return new _NumberObject_1(this._value + target._value);
    };
    _NumberObject.prototype.reduce = function (target) {
        return new _NumberObject_1(this._value - target._value);
    };
    _NumberObject.prototype.multi = function (target) {
        return new _NumberObject_1(this._value * target._value);
    };
    _NumberObject.prototype.divide = function (target) {
        return new _NumberObject_1(target._value === 0 ? Infinity : this._value / target._value);
    };
    var _NumberObject_1;
    __decorate([
        util_1.onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", BooleanObject_1.BooleanObject)
    ], _NumberObject.prototype, "compare", null);
    __decorate([
        util_1.onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", _NumberObject)
    ], _NumberObject.prototype, "calc", null);
    _NumberObject = _NumberObject_1 = __decorate([
        util_1.CalcUnit,
        util_1.CompareUnit,
        __metadata("design:paramtypes", [Number])
    ], _NumberObject);
    return _NumberObject;
}(NumberWrapper));
var NumberObject = _NumberObject;
exports.NumberObject = NumberObject;
