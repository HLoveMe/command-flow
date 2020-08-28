"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
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
var ObjectTypes_1 = require("./ObjectTypes");
function DefaultValue(value) {
    return function (target, propertyName) {
        target[propertyName] = value;
        BaseObject.types.add(value);
    };
}
var BaseObject = /** @class */ (function () {
    function BaseObject() {
    }
    BaseObject.types = new Set();
    return BaseObject;
}());
var ArrayObject = /** @class */ (function (_super) {
    __extends(ArrayObject, _super);
    function ArrayObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = new Set();
        return _this;
    }
    ArrayObject.prototype.len = function () {
        return this.length;
    };
    ArrayObject.prototype.first = function () {
        return this[0];
    };
    ArrayObject.prototype.last = function () {
        return this[this.length - 1];
    };
    ArrayObject.prototype.valueOf = function (index) {
        return this[index];
    };
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], ArrayObject.prototype, "len", null);
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "first", null);
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "last", null);
    __decorate([
        ObjectTypes_1.attribute(),
        __param(0, ObjectTypes_1.Params("index")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", Object)
    ], ArrayObject.prototype, "valueOf", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call([])),
        __metadata("design:type", String)
    ], ArrayObject, "type", void 0);
    return ArrayObject;
}(Array));
exports.ArrayObject = ArrayObject;
var MapObject = /** @class */ (function (_super) {
    __extends(MapObject, _super);
    function MapObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = new Set();
        return _this;
    }
    MapObject.prototype.len = function () {
        return this.size;
    };
    MapObject.prototype.get = function (key) {
        return this.get(key);
    };
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], MapObject.prototype, "len", null);
    __decorate([
        ObjectTypes_1.attribute(),
        __param(0, ObjectTypes_1.Params("key")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Object)
    ], MapObject.prototype, "get", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call(new Map())),
        __metadata("design:type", String)
    ], MapObject, "type", void 0);
    return MapObject;
}(Map));
exports.MapObject = MapObject;
var SetObject = /** @class */ (function (_super) {
    __extends(SetObject, _super);
    function SetObject() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.attributes = new Set();
        return _this;
    }
    SetObject.prototype.len = function () {
        return this.size;
    };
    SetObject.prototype.has = function (value) {
        return _super.prototype.has.call(this, value);
    };
    __decorate([
        ObjectTypes_1.attribute(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], SetObject.prototype, "len", null);
    __decorate([
        ObjectTypes_1.attribute(),
        __param(0, ObjectTypes_1.Params("value")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Boolean)
    ], SetObject.prototype, "has", null);
    __decorate([
        DefaultValue(Object.prototype.toString.call(new Set())),
        __metadata("design:type", String)
    ], SetObject, "type", void 0);
    return SetObject;
}(Set));
exports.SetObject = SetObject;
//# sourceMappingURL=BaseObject.js.map