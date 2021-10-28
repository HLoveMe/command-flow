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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayObject = void 0;
var util_1 = require("../../util");
var ObjectTarget_1 = require("./ObjectTarget");
var ArrayObject = /** @class */ (function (_super) {
    __extends(ArrayObject, _super);
    function ArrayObject(value) {
        var _this = _super.call(this, value) || this;
        _this._value = value;
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
    //collection
    ArrayObject.prototype.collectionArray = function () {
        return null;
    };
    var ArrayObject_1;
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
        (0, util_1.DefaultValue)(Object.prototype.toString.call([])),
        __metadata("design:type", String)
    ], ArrayObject, "type", void 0);
    ArrayObject = ArrayObject_1 = __decorate([
        util_1.ArrayUint,
        __metadata("design:paramtypes", [Array])
    ], ArrayObject);
    return ArrayObject;
}(ObjectTarget_1.ObjectTarget));
exports.ArrayObject = ArrayObject;
//# sourceMappingURL=ArrayObject.js.map