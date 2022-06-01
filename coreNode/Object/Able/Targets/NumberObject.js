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
var NumberObject_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberObject = void 0;
const util_1 = require("../../util");
const ObjectTarget_1 = require("./ObjectTarget");
const BooleanObject_1 = require("./BooleanObject");
let NumberObject = NumberObject_1 = class NumberObject extends ObjectTarget_1.ObjectTarget {
    constructor(value = 1) {
        super(value);
        this._value = value;
    }
    valueOf() {
        return this._value;
    }
    merge(target) {
        return new NumberObject_1(this._value + target._value);
    }
    // Compare
    // compare: ControlFlow.CompareExec;
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
    // Calc
    // calc: ControlFlow.CalcFunction;
    plus(target) {
        return new NumberObject_1(this._value + target._value);
    }
    reduce(target) {
        return new NumberObject_1(this._value - target._value);
    }
    multi(target) {
        return new NumberObject_1(this._value * target._value);
    }
    divide(target) {
        return new NumberObject_1(target._value === 0 ? Infinity : this._value / target._value);
    }
};
NumberObject.attributes = new Set();
NumberObject.empty = new NumberObject_1(0);
__decorate([
    (0, util_1.attribute)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], NumberObject.prototype, "valueOf", null);
__decorate([
    (0, util_1.DefaultValue)(Object.prototype.toString.call(new Number())),
    __metadata("design:type", String)
], NumberObject, "type", void 0);
NumberObject = NumberObject_1 = __decorate([
    util_1.CalcUnit,
    util_1.CompareUnit,
    __metadata("design:paramtypes", [Number])
], NumberObject);
exports.NumberObject = NumberObject;
//# sourceMappingURL=NumberObject.js.map