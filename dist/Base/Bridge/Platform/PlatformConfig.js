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
exports.PCNodejsConfig = exports.PCPlatformConfig = void 0;
var rxjs_1 = require("rxjs");
var PCPlatformConfig = /** @class */ (function () {
    function PCPlatformConfig() {
    }
    PCPlatformConfig.prototype.loadRunInfo = function () {
        throw new Error("Method not implemented.");
    };
    PCPlatformConfig.prototype.runCommand = function (command) {
        throw new Error("Method not implemented.");
    };
    PCPlatformConfig.prototype.open = function (url) {
        throw new Error("Method not implemented.");
    };
    PCPlatformConfig.prototype.loadFile = function (url) {
        throw new Error("Method not implemented.");
    };
    return PCPlatformConfig;
}());
exports.PCPlatformConfig = PCPlatformConfig;
var PCNodejsConfig = /** @class */ (function (_super) {
    __extends(PCNodejsConfig, _super);
    function PCNodejsConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PCNodejsConfig.prototype.open = function (url) {
        var _url = new URL(url);
        if (_url.protocol === "https:" || _url.protocol === "http:") {
            // const result = window.open(url, "__blank");
            // return of(result !== null);
        }
        var result = window.open(url, "__blank");
        return (0, rxjs_1.of)(result !== null);
    };
    return PCNodejsConfig;
}(PCPlatformConfig));
exports.PCNodejsConfig = PCNodejsConfig;
//# sourceMappingURL=PlatformConfig.js.map