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
exports.StringObject = void 0;
var util_1 = require("../../util");
var ObjectTarget_1 = require("./ObjectTarget");
var StringObject = /** @class */ (function (_super) {
    __extends(StringObject, _super);
    function StringObject(value) {
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    StringObject.prototype.valueOf = function () {
        return this._value;
    };
    StringObject.attributes = new Set();
    StringObject.empty = new StringObject("");
    __decorate([
        (0, util_1.attribute)(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], StringObject.prototype, "valueOf", null);
    __decorate([
        (0, util_1.DefaultValue)(Object.prototype.toString.call(new String())),
        __metadata("design:type", String)
    ], StringObject, "type", void 0);
    return StringObject;
}(ObjectTarget_1.ObjectTarget));
exports.StringObject = StringObject;
//# sourceMappingURL=StringObject.js.map