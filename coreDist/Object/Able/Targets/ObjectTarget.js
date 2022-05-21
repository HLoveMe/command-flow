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
var ObjectTarget = /** @class */ (function () {
    function ObjectTarget(value) {
        if (value === void 0) { value = {}; }
        this._value = value;
    }
    Object.defineProperty(ObjectTarget.prototype, Symbol.toStringTag, {
        get: function () {
            return 'flow-object';
        },
        enumerable: false,
        configurable: true
    });
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
    ObjectTarget.attributes = new Set();
    ObjectTarget.empty = new ObjectTarget({});
    __decorate([
        DefaultValue(Object.prototype.toString.call({})),
        __metadata("design:type", String)
    ], ObjectTarget, "type", void 0);
    return ObjectTarget;
}());
export { ObjectTarget };
//# sourceMappingURL=ObjectTarget.js.map