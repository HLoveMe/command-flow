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
exports.PCNodejsConfig = void 0;
var rxjs_1 = require("rxjs");
var BasePlatform_1 = require("../BasePlatform");
var nodeOpen = require("open");
/*** */
var PCNodejsConfig = /** @class */ (function (_super) {
    __extends(PCNodejsConfig, _super);
    function PCNodejsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PCNodejsConfig.prototype.open = function (url) {
        return (0, rxjs_1.from)(nodeOpen(url, { wait: true }));
    };
    return PCNodejsConfig;
}(BasePlatform_1.PCPlatformConfig));
exports.PCNodejsConfig = PCNodejsConfig;
//# sourceMappingURL=PC.js.map