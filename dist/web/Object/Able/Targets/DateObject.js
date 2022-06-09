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
export class DateObject extends ObjectTarget {
    constructor(value = new Date()) {
        super(value);
        this._value = value;
    }
    timestamp() {
        return this.valueOf().getTime();
    }
    valueOf() {
        return new Date(this._value);
    }
}
DateObject.attributes = new Set();
DateObject.empty = new DateObject(new Date());
__decorate([
    attribute(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Number)
], DateObject.prototype, "timestamp", null);
__decorate([
    attribute(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Date)
], DateObject.prototype, "valueOf", null);
__decorate([
    DefaultValue(Object.prototype.toString.call(new Date())),
    __metadata("design:type", String)
], DateObject, "type", void 0);
//# sourceMappingURL=DateObject.js.map