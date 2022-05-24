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
import { ControlFlow } from "../../Control";
import { attribute, DefaultValue, onlyDeclaration, SetUint } from "../../util";
import { ObjectTarget } from "./ObjectTarget";
import { decide } from "../../valueUtil";
var SetObject = /** @class */ (function (_super) {
    __extends(SetObject, _super);
    function SetObject(value) {
        var _this = this;
        var init = !!value ? (Array.isArray(value) ? new Set(value) : value) : new Set();
        _this = _super.call(this, init) || this;
        _this._value = init;
        return _this;
    }
    SetObject_1 = SetObject;
    SetObject.prototype.len = function () {
        return this._value.size;
    };
    SetObject.prototype.valueOf = function () {
        return this._value;
    };
    SetObject.prototype.merge = function (target) {
        var newSet = new Set();
        this._value.forEach(function ($1) { return newSet.add($1); });
        target.forEach(function ($1) { return newSet.add($1); });
        new Set().keys;
        return new SetObject_1(newSet);
    };
    SetObject.prototype.collectionSet = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return null;
    };
    ;
    SetObject.prototype.has = function (value) { return null; };
    SetObject.prototype.add = function (value) { return null; };
    SetObject.prototype.delete = function (value) { return null; };
    SetObject.prototype.clear = function () { return null; };
    SetObject.prototype.forEach = function (callbackfn, thisArg) { return null; };
    ;
    SetObject.prototype.entries = function () { return null; };
    ;
    SetObject.prototype.values = function () { return null; };
    ;
    SetObject.prototype.keys = function () { return null; };
    ;
    Object.defineProperty(SetObject.prototype, "size", {
        get: function () {
            return decide(this._value.size);
        },
        enumerable: false,
        configurable: true
    });
    var SetObject_1;
    SetObject.attributes = new Set();
    SetObject.empty = new SetObject_1(new Set());
    __decorate([
        attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], SetObject.prototype, "len", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Object]),
        __metadata("design:returntype", Object)
    ], SetObject.prototype, "collectionSet", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], SetObject.prototype, "has", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], SetObject.prototype, "add", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], SetObject.prototype, "delete", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], SetObject.prototype, "clear", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Function, Object]),
        __metadata("design:returntype", Object)
    ], SetObject.prototype, "forEach", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", ObjectTarget)
    ], SetObject.prototype, "entries", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", ObjectTarget)
    ], SetObject.prototype, "values", null);
    __decorate([
        onlyDeclaration,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", ObjectTarget)
    ], SetObject.prototype, "keys", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call(new Set())),
        __metadata("design:type", String)
    ], SetObject, "type", void 0);
    SetObject = SetObject_1 = __decorate([
        SetUint,
        __metadata("design:paramtypes", [Object])
    ], SetObject);
    return SetObject;
}(ObjectTarget));
export { SetObject };
//# sourceMappingURL=SetObject.js.map