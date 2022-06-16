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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ArrayObject_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayObject = void 0;
const Control_1 = require("../../Control");
const util_1 = require("../../util");
const ObjectTarget_1 = require("./ObjectTarget");
const valueUtil_1 = require("../../valueUtil");
let ArrayObject = ArrayObject_1 = class ArrayObject extends ObjectTarget_1.ObjectTarget {
    constructor(value) {
        var init = typeof value === 'number' ? new Array(value) : (Array.isArray(value) ? value : []);
        super(init);
        this._value = init;
    }
    len() {
        return this._value.length;
    }
    first() {
        return this[0];
    }
    last() {
        return this[this._value.length - 1];
    }
    valueOfIndex(index) {
        return this[index];
    }
    valueOf() {
        return this._value;
    }
    merge(target) {
        return new ArrayObject_1([...this._value, ...target._value]);
    }
    collectionArray(key, ...args) { return null; }
    ;
    // array function
    concat(...items) { return null; }
    ;
    copyWithin(target, start, end) { return null; }
    fill(value, start, end) { return null; }
    ;
    find(predicate, thisArg) { return null; }
    findIndex(predicate, thisArg) { return null; }
    lastIndexOf(searchElement, fromIndex) { return null; }
    ;
    pop() { return null; }
    push(...items) { return null; }
    reverse() { return null; }
    shift() { return null; }
    unshift(...items) { return null; }
    slice(start, end) { return null; }
    sort(compareFn) { return null; }
    splice(start, deleteCount, ...items) { return null; }
    includes(searchElement, fromIndex) { return null; }
    indexOf(searchElement, fromIndex) { return null; }
    join(separator) { return null; }
    entries() { return null; }
    ;
    values() { return null; }
    ;
    keys() { return null; }
    ;
    forEach(callbackfn, thisArg) { return null; }
    filter(predicate, thisArg) { return null; }
    map(callbackfn, thisArg) { return null; }
    every(predicate, thisArg) { return null; }
    some(predicate, thisArg) { return null; }
    reduce(callbackfn, initialValue) { return null; }
    reduceRight(callbackfn, initialValue) { return null; }
    toLocaleString() { return null; }
    get length() {
        return (0, valueUtil_1.decide)(this._value.length);
    }
};
ArrayObject.attributes = new Set();
ArrayObject.empty = new ArrayObject_1([]);
__decorate([
    (0, util_1.attribute)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], ArrayObject.prototype, "len", null);
__decorate([
    (0, util_1.attribute)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "first", null);
__decorate([
    (0, util_1.attribute)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "last", null);
__decorate([
    (0, util_1.attribute)(),
    __param(0, (0, util_1.Params)("index")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "valueOfIndex", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "collectionArray", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "concat", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "copyWithin", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "fill", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "find", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "findIndex", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "lastIndexOf", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "pop", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "push", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "reverse", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "shift", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "unshift", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "slice", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "sort", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "splice", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "includes", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "indexOf", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "join", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ObjectTarget_1.ObjectTarget)
], ArrayObject.prototype, "entries", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ObjectTarget_1.ObjectTarget)
], ArrayObject.prototype, "values", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ObjectTarget_1.ObjectTarget)
], ArrayObject.prototype, "keys", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "forEach", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "filter", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "map", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "every", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "some", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "reduce", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "reduceRight", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], ArrayObject.prototype, "toLocaleString", null);
__decorate([
    (0, util_1.DefaultValue)(Object.prototype.toString.call([])),
    __metadata("design:type", String)
], ArrayObject, "type", void 0);
ArrayObject = ArrayObject_1 = __decorate([
    util_1.ArrayUint,
    __metadata("design:paramtypes", [Object])
], ArrayObject);
exports.ArrayObject = ArrayObject;
//# sourceMappingURL=ArrayObject.js.map