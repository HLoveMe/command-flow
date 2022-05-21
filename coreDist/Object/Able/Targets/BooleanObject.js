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
import { attribute, DefaultValue } from "../../util";
import { ObjectTarget } from "./ObjectTarget";
var BooleanObject = /** @class */ (function (_super) {
    __extends(BooleanObject, _super);
    function BooleanObject(value) {
        if (value === void 0) { value = false; }
        var _this = _super.call(this, value) || this;
        _this._value = value;
        return _this;
    }
    BooleanObject.prototype.valueOf = function () {
        return !!(this._value);
    };
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
    return BooleanObject;
}(ObjectTarget));
export { BooleanObject };
//# sourceMappingURL=BooleanObject.js.map