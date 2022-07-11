"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _NumberObject_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberObject = void 0;
const util_1 = require("../../util");
const BooleanObject_1 = require("./BooleanObject");
const extend_util_1 = require("../../extend-util");
const NumberWrapper = (0, extend_util_1.createExtendsConstruct)(Number);
let _NumberObject = _NumberObject_1 = class _NumberObject extends NumberWrapper {
    static type;
    constructor(value = 1) {
        super(value);
        this._value = value;
    }
    get [Symbol.toStringTag]() {
        return super[Symbol.toStringTag];
    }
    valueOf() {
        return this._value;
    }
    json() {
        return super.json();
    }
    compare(type, target) {
        return new BooleanObject_1.BooleanObject(false);
    }
    more(target) {
        return new BooleanObject_1.BooleanObject(this._value > target._value);
    }
    equal(target) {
        return new BooleanObject_1.BooleanObject(this._value === target._value);
    }
    less(target) {
        return new BooleanObject_1.BooleanObject(this._value < target._value);
    }
    moreEqual(target) {
        return new BooleanObject_1.BooleanObject(this._value >= target._value);
    }
    lessEqual(target) {
        return new BooleanObject_1.BooleanObject(this._value <= target._value);
    }
    calc(type, target) {
        return new _NumberObject_1(0);
    }
    plus(target) {
        return new _NumberObject_1(this._value + target._value);
    }
    reduce(target) {
        return new _NumberObject_1(this._value - target._value);
    }
    multi(target) {
        return new _NumberObject_1(this._value * target._value);
    }
    divide(target) {
        return new _NumberObject_1(target._value === 0 ? Infinity : this._value / target._value);
    }
};
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
const NumberObject = _NumberObject;
exports.NumberObject = NumberObject;
