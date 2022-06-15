var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { attribute, DefaultValue } from "../../util";
import { ObjectTarget } from "./ObjectTarget";
export class StringObject extends ObjectTarget {
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
    attribute(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], StringObject.prototype, "valueOf", null);
__decorate([
    DefaultValue(Object.prototype.toString.call(new String())),
    __metadata("design:type", String)
], StringObject, "type", void 0);
//# sourceMappingURL=StringObject.js.map