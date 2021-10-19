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
exports.JSForReactNative = exports.JSForNodeJs = exports.JSForIosAndroidPCWeb = exports.BaseRunTime = void 0;
var Equipment_1 = require("../Util/Equipment");
var BaseRunTime = /** @class */ (function () {
    function BaseRunTime() {
    }
    BaseRunTime.prototype.isAble = function () {
        return true;
    };
    BaseRunTime.prototype.current = function () {
        return Equipment_1.currentEnir;
    };
    return BaseRunTime;
}());
exports.BaseRunTime = BaseRunTime;
var JSForIosAndroidPCWeb = /** @class */ (function (_super) {
    __extends(JSForIosAndroidPCWeb, _super);
    function JSForIosAndroidPCWeb() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSForIosAndroidPCWeb.prototype.isAble = function () {
        if (Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.WEB ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.WEB_WIN ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.WEB_MAC ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.WEB_LINUX ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.WEB_IOS ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.WEB_ANDROID ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.WEB_OTHER)
            return true;
        return false;
    };
    return JSForIosAndroidPCWeb;
}(BaseRunTime));
exports.JSForIosAndroidPCWeb = JSForIosAndroidPCWeb;
var JSForNodeJs = /** @class */ (function (_super) {
    __extends(JSForNodeJs, _super);
    function JSForNodeJs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSForNodeJs.prototype.isAble = function () {
        if (Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.NODE ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.NODE_WIN ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.NODE_MAC ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.NODE_LINUX)
            return true;
        return false;
    };
    return JSForNodeJs;
}(BaseRunTime));
exports.JSForNodeJs = JSForNodeJs;
var JSForReactNative = /** @class */ (function (_super) {
    __extends(JSForReactNative, _super);
    function JSForReactNative() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JSForReactNative.prototype.isAble = function () {
        if (Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.RN ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.RN_MAC ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.RN_WIN ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.RN_IOS ||
            Equipment_1.currentEnir === Equipment_1.JSRUNEnvirType.RN_ANDROID)
            return true;
        return false;
    };
    return JSForReactNative;
}(BaseRunTime));
exports.JSForReactNative = JSForReactNative;
//# sourceMappingURL=Environment.js.map