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
var SetObject_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetObject = void 0;
const Control_1 = require("../../Control");
const util_1 = require("../../util");
const ObjectTarget_1 = require("./ObjectTarget");
const valueUtil_1 = require("../../valueUtil");
let SetObject = SetObject_1 = class SetObject extends ObjectTarget_1.ObjectTarget {
    constructor(value) {
        const init = !!value ? (Array.isArray(value) ? new Set(value) : value) : new Set();
        super(init);
        this._value = init;
    }
    len() {
        return this._value.size;
    }
    valueOf() {
        return this._value;
    }
    merge(target) {
        const newSet = new Set();
        this._value.forEach(($1) => newSet.add($1));
        target.forEach(($1) => newSet.add($1));
        new Set().keys;
        return new SetObject_1(newSet);
    }
    collectionSet(key, ...args) { return null; }
    ;
    has(value) { return null; }
    add(value) { return null; }
    delete(value) { return null; }
    clear() { return null; }
    forEach(callbackfn, thisArg) { return null; }
    ;
    entries() { return null; }
    ;
    values() { return null; }
    ;
    keys() { return null; }
    ;
    get size() {
        return (0, valueUtil_1.decide)(this._value.size);
    }
};
SetObject.attributes = new Set();
SetObject.empty = new SetObject_1(new Set());
__decorate([
    (0, util_1.attribute)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], SetObject.prototype, "len", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], SetObject.prototype, "collectionSet", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], SetObject.prototype, "has", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], SetObject.prototype, "add", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], SetObject.prototype, "delete", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], SetObject.prototype, "clear", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Object)
], SetObject.prototype, "forEach", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ObjectTarget_1.ObjectTarget)
], SetObject.prototype, "entries", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ObjectTarget_1.ObjectTarget)
], SetObject.prototype, "values", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", ObjectTarget_1.ObjectTarget)
], SetObject.prototype, "keys", null);
__decorate([
    (0, util_1.DefaultValue)(Object.prototype.toString.call(new Set())),
    __metadata("design:type", String)
], SetObject, "type", void 0);
SetObject = SetObject_1 = __decorate([
    util_1.SetUint,
    __metadata("design:paramtypes", [Object])
], SetObject);
exports.SetObject = SetObject;
//# sourceMappingURL=SetObject.js.map