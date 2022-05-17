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
exports.SetObject = void 0;
var util_1 = require("../../util");
var ObjectTarget_1 = require("./ObjectTarget");
var SetObject = /** @class */ (function (_super) {
    __extends(SetObject, _super);
    function SetObject(value) {
        var _this = _super.call(this, value) || this;
        _this._value = value;
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
        return new SetObject_1(newSet);
    };
    var SetObject_1;
    SetObject.attributes = new Set();
    SetObject.empty = new SetObject_1(new Set());
    __decorate([
        (0, util_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Number)
    ], SetObject.prototype, "len", null);
    __decorate([
        (0, util_1.DefaultValue)(Object.prototype.toString.call(new Set())),
        __metadata("design:type", String)
    ], SetObject, "type", void 0);
    SetObject = SetObject_1 = __decorate([
        util_1.SetUint,
        __metadata("design:paramtypes", [Set])
    ], SetObject);
    return SetObject;
}(ObjectTarget_1.ObjectTarget));
exports.SetObject = SetObject;
//# sourceMappingURL=SetObject.js.map