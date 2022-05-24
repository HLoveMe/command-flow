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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { ControlFlow } from "../../Control";
import { ArrayUint, attribute, DefaultValue, onlyDeclaration, Params } from "../../util";
import { ObjectTarget } from "./ObjectTarget";
var ArrayObject = /** @class */ (function (_super) {
    __extends(ArrayObject, _super);
    function ArrayObject(value) {
        var _this = this;
        var init = typeof value === 'number' ? new Array(value) : (Array.isArray(value) ? value : []);
        _this = _super.call(this, init) || this;
        _this._value = init;
        return _this;
    }
    ArrayObject_1 = ArrayObject;
    ArrayObject.prototype.len = function () {
        return this._value.length;
    };
    ArrayObject.prototype.first = function () {
        return this[0];
    };
    ArrayObject.prototype.last = function () {
        return this[this._value.length - 1];
    };
    ArrayObject.prototype.valueOfIndex = function (index) {
        return this[index];
    };
    ArrayObject.prototype.valueOf = function () {
        return this._value;
    };
    ArrayObject.prototype.merge = function (target) {
        return new ArrayObject_1(__spreadArray(__spreadArray([], this._value, true), target._value, true));
    };
    ArrayObject.prototype.collectionArray = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return null;
    };
    ;
    // array function
    ArrayObject.prototype.length = function () { return null; };
    ArrayObject.prototype.concat = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return null;
    };
    ;
    ArrayObject.prototype.copyWithin = function (target, start, end) { return null; };
    ArrayObject.prototype.fill = function (value, start, end) { return null; };
    ;
    ArrayObject.prototype.find = function (predicate, thisArg) { return null; };
    ArrayObject.prototype.findIndex = function (predicate, thisArg) { return null; };
    ArrayObject.prototype.lastIndexOf = function (searchElement, fromIndex) { return null; };
    ;
    ArrayObject.prototype.pop = function () { return null; };
    ArrayObject.prototype.push = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return null;
    };
    ArrayObject.prototype.reverse = function () { return null; };
    ArrayObject.prototype.shift = function () { return null; };
    ArrayObject.prototype.unshift = function () {
        var items = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            items[_i] = arguments[_i];
        }
        return null;
    };
    ArrayObject.prototype.slice = function (start, end) { return null; };
    ArrayObject.prototype.sort = function (compareFn) { return null; };
    ArrayObject.prototype.splice = function (start, deleteCount) {
        var items = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            items[_i - 2] = arguments[_i];
        }
        return null;
    };
    ArrayObject.prototype.includes = function (searchElement, fromIndex) { return null; };
    ArrayObject.prototype.indexOf = function (searchElement, fromIndex) { return null; };
    ArrayObject.prototype.join = function (separator) { return null; };
    ArrayObject.prototype.keys = function () { return null; };
    ArrayObject.prototype.entries = function () { return null; };
    ArrayObject.prototype.values = function () { return null; };
    ArrayObject.prototype.forEach = function (callbackfn, thisArg) { return null; };
    ArrayObject.prototype.filter = function (predicate, thisArg) { return null; };
    ArrayObject.prototype.map = function (callbackfn, thisArg) { return null; };
    ArrayObject.prototype.every = function (predicate, thisArg) { return null; };
    ArrayObject.prototype.some = function (predicate, thisArg) { return null; };
    ArrayObject.prototype.reduce = function (callbackfn) { return null; };
    ArrayObject.prototype.reduceRight = function (callbackfn) { return null; };
    ArrayObject.prototype.toLocaleString = function () { return null; };
    var ArrayObject_1;
    ArrayObject.attributes = new Set();
    ArrayObject.empty = new ArrayObject_1([]);
    __decorate([
        attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], ArrayObject.prototype, "len", null);
    __decorate([
        attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "first", null);
    __decorate([
        attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "last", null);
    __decorate([
        attribute(),
        __param(0, Params("index")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "valueOfIndex", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "collectionArray", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ArrayObject.prototype, "length", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "concat", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "copyWithin", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Number]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "fill", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "find", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "findIndex", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "lastIndexOf", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "pop", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "push", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "reverse", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "shift", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "unshift", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "slice", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "sort", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number, Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "splice", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Number]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "includes", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Number]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "indexOf", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "join", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "keys", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "entries", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "values", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "forEach", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "filter", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "map", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "every", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "some", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "reduce", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "reduceRight", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "toLocaleString", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call([])),
        __metadata("design:type", String)
    ], ArrayObject, "type", void 0);
    ArrayObject = ArrayObject_1 = __decorate([
        ArrayUint,
        __metadata("design:paramtypes", [Object])
    ], ArrayObject);
    return ArrayObject;
}(ObjectTarget));
export { ArrayObject };
//# sourceMappingURL=ArrayObject.js.map