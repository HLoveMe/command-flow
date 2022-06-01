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
exports.BooleanObject = void 0;
const util_1 = require("../../util");
const ObjectTarget_1 = require("./ObjectTarget");
class BooleanObject extends ObjectTarget_1.ObjectTarget {
    constructor(value = false) {
        super(value);
        this._value = value;
    }
    valueOf() {
        return !!(this._value);
    }
}
BooleanObject.attributes = new Set();
BooleanObject.empty = new BooleanObject(false);
__decorate([
    (0, util_1.attribute)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], BooleanObject.prototype, "valueOf", null);
__decorate([
    (0, util_1.DefaultValue)(Object.prototype.toString.call(new Boolean(1))),
    __metadata("design:type", String)
], BooleanObject, "type", void 0);
exports.BooleanObject = BooleanObject;
//# sourceMappingURL=BooleanObject.js.map