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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MobileRnConfig = void 0;
var rxjs_1 = require("rxjs");
var BaseObject_1 = require("../../../Object/BaseObject");
var BasePlatform_1 = require("../BasePlatform");
var MobileRnConfig = /** @class */ (function (_super) {
    __extends(MobileRnConfig, _super);
    function MobileRnConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileRnConfig.prototype.open = function (url) {
        return (0, rxjs_1.of)(new BaseObject_1.BooleanObject(false));
    };
    return MobileRnConfig;
}(BasePlatform_1.PCPlatformConfig));
exports.MobileRnConfig = MobileRnConfig;
//# sourceMappingURL=Mobile.js.map