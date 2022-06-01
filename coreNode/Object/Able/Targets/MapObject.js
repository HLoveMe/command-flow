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
var MapObject_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapObject = void 0;
const Control_1 = require("../../Control");
const util_1 = require("../../util");
const ObjectTarget_1 = require("./ObjectTarget");
const valueUtil_1 = require("../../valueUtil");
let MapObject = MapObject_1 = class MapObject extends ObjectTarget_1.ObjectTarget {
    constructor(value = new Map()) {
        super(value);
        this._value = new Map(value);
    }
    len() {
        return this._value.size;
    }
    valueOf() {
        return this._value;
    }
    merge(target) {
        const newMap = new Map(this._value);
        target._value.forEach(($1, key) => newMap.set(key, $1));
        return new MapObject_1(newMap);
    }
    collectionMap(key, ...args) { return null; }
    get(key) { return null; }
    set(key, value) { return null; }
    has(key) { return null; }
    delete(key) { return null; }
    clear() { return null; }
    entries() { return null; }
    forEach(callback, thisArg) { return null; }
    values() { return null; }
    keys() { return null; }
    get size() {
        return (0, valueUtil_1.decide)(this._value.size);
    }
};
MapObject.attributes = new Set();
MapObject.empty = new MapObject_1(new Map());
__decorate([
    (0, util_1.attribute)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], MapObject.prototype, "len", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], MapObject.prototype, "collectionMap", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], MapObject.prototype, "get", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Object)
], MapObject.prototype, "set", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], MapObject.prototype, "has", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], MapObject.prototype, "delete", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MapObject.prototype, "clear", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MapObject.prototype, "entries", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Function, Object]),
    __metadata("design:returntype", Object)
], MapObject.prototype, "forEach", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MapObject.prototype, "values", null);
__decorate([
    util_1.onlyDeclaration,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], MapObject.prototype, "keys", null);
__decorate([
    (0, util_1.DefaultValue)(Object.prototype.toString.call(new Map())),
    __metadata("design:type", String)
], MapObject, "type", void 0);
MapObject = MapObject_1 = __decorate([
    util_1.MapUint,
    __metadata("design:paramtypes", [Map])
], MapObject);
exports.MapObject = MapObject;
//# sourceMappingURL=MapObject.js.map