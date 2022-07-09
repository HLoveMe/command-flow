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
import { CalcUnit, CompareUnit, onlyDeclaration } from '../../util';
import { BooleanObject } from './BooleanObject';
import { createExtendsConstruct } from '../../extend-util';
const NumberWrapper = createExtendsConstruct(Number);
let _NumberObject = _NumberObject_1 = class _NumberObject extends NumberWrapper {
    static type;
    constructor(value = 1) {
        super(value);
        this._value = value;
    }
    valueOf() {
        return this._value;
    }
    json() {
        return super.json();
    }
    compare(type, target) {
        return new BooleanObject(false);
    }
    more(target) {
        return new BooleanObject(this._value > target._value);
    }
    equal(target) {
        return new BooleanObject(this._value === target._value);
    }
    less(target) {
        return new BooleanObject(this._value < target._value);
    }
    moreEqual(target) {
        return new BooleanObject(this._value >= target._value);
    }
    lessEqual(target) {
        return new BooleanObject(this._value <= target._value);
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
    onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", BooleanObject)
], _NumberObject.prototype, "compare", null);
__decorate([
    onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", _NumberObject)
], _NumberObject.prototype, "calc", null);
_NumberObject = _NumberObject_1 = __decorate([
    CalcUnit,
    CompareUnit,
    __metadata("design:paramtypes", [Number])
], _NumberObject);
const NumberObject = _NumberObject;
export { NumberObject };
//# sourceMappingURL=NumberObject.js.map