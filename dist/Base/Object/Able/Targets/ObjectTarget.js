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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectTarget = void 0;
var util_1 = require("../../util");
var ObjectTarget = /** @class */ (function () {
    function ObjectTarget(value) {
        this._value = value;
    }
    ObjectTarget.prototype.valueOf = function () {
        return this._value;
    };
    ObjectTarget.prototype.merge = function (target) {
        try {
            var result = Object.assign(this._value, target._value);
            return new ObjectTarget(result);
        }
        catch (error) {
            return new ObjectTarget(null);
        }
    };
    ObjectTarget.prototype.json = function () {
        var StringObject = require("./StringObject").StringObject;
        try {
            return new StringObject(JSON.stringify(this._value));
        }
        catch (error) {
            return new StringObject("{}");
        }
    };
    ObjectTarget.prototype.more = function (target) {
        return false;
    };
    ObjectTarget.prototype.equal = function (target) {
        return false;
    };
    ObjectTarget.prototype.less = function (target) {
        return false;
    };
    ObjectTarget.prototype.moreEqual = function (target) {
        return false;
    };
    ObjectTarget.prototype.lessEqual = function (target) {
        return false;
    };
    ObjectTarget.attributes = new Set();
    ObjectTarget.empty = new ObjectTarget({});
    __decorate([
        (0, util_1.DefaultValue)(Object.prototype.toString.call({})),
        __metadata("design:type", String)
    ], ObjectTarget, "type", void 0);
    return ObjectTarget;
}());
exports.ObjectTarget = ObjectTarget;
//# sourceMappingURL=ObjectTarget.js.map