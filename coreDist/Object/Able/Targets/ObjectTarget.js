var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DefaultValue } from "../../util";
export class ObjectTarget {
    constructor(value = {}) {
        this._value = value;
    }
    get [Symbol.toStringTag]() {
        return 'flow-object';
    }
    valueOf() {
        return this._value;
    }
    merge(target) {
        try {
            const result = Object.assign(this._value, target._value);
            return new ObjectTarget(result);
        }
        catch (error) {
            return new ObjectTarget(null);
        }
    }
    json() {
        const { StringObject } = require("./StringObject");
        try {
            return new StringObject(JSON.stringify(this._value));
        }
        catch (error) {
            return new StringObject("{}");
        }
    }
}
ObjectTarget.attributes = new Set();
ObjectTarget.empty = new ObjectTarget({});
__decorate([
    DefaultValue(Object.prototype.toString.call({})),
    __metadata("design:type", String)
], ObjectTarget, "type", void 0);
//# sourceMappingURL=ObjectTarget.js.map