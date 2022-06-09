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
export class BooleanObject extends ObjectTarget {
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
    attribute(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Boolean)
], BooleanObject.prototype, "valueOf", null);
__decorate([
    DefaultValue(Object.prototype.toString.call(new Boolean(1))),
    __metadata("design:type", String)
], BooleanObject, "type", void 0);
//# sourceMappingURL=BooleanObject.js.map