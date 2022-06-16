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
exports.StringObject = void 0;
const util_1 = require("../../util");
const ObjectTarget_1 = require("./ObjectTarget");
class StringObject extends ObjectTarget_1.ObjectTarget {
    constructor(value = '') {
        super(value);
        this._value = value;
    }
    valueOf() {
        return this._value;
    }
}
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
exports.StringObject = StringObject;
//# sourceMappingURL=StringObject.js.map