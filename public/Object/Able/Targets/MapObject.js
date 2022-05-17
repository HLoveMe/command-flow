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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapObject = void 0;
var util_1 = require("../../util");
var ObjectTarget_1 = require("./ObjectTarget");
var MapObject = /** @class */ (function (_super) {
    __extends(MapObject, _super);
    function MapObject(value) {
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    MapObject_1 = MapObject;
    MapObject.prototype.len = function () {
        return this._value.size;
    };
    MapObject.prototype.valueOf = function () {
        throw this._value;
    };
    MapObject.prototype.merge = function (target) {
        var newMap = new Map(this._value);
        target._value.forEach(function ($1, key) { return newMap.set(key, $1); });
        return new MapObject_1(newMap);
    };
    var MapObject_1;
    MapObject.attributes = new Set();
    MapObject.empty = new MapObject_1(new Map());
    __decorate([
        (0, util_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], MapObject.prototype, "len", null);
    __decorate([
        (0, util_1.DefaultValue)(Object.prototype.toString.call(new Map())),
        __metadata("design:type", String)
    ], MapObject, "type", void 0);
    MapObject = MapObject_1 = __decorate([
        util_1.MapUint,
        __metadata("design:paramtypes", [Map])
    ], MapObject);
    return MapObject;
}(ObjectTarget_1.ObjectTarget));
exports.MapObject = MapObject;
//# sourceMappingURL=MapObject.js.map