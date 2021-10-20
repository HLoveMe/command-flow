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
exports.JSForReactNative = exports.JSForNodeJs = exports.JSForIosAndroidPCWeb = exports.BaseRunTime = exports.isRunRN = exports.isRunNode = exports.isRunWeb = void 0;
var Equipment_1 = require("./Equipment");
function isRunWeb($1, $2, descriptor) {
    descriptor.value = function () { return Equipment_1.isWeb; };
}
exports.isRunWeb = isRunWeb;
function isRunNode($1, $2, descriptor) {
    descriptor.value = function () { return Equipment_1.isNode; };
}
exports.isRunNode = isRunNode;
function isRunRN($1, $2, descriptor) {
    descriptor.value = function () { return (0, Equipment_1.isReactNative)(); };
}
exports.isRunRN = isRunRN;
var Equipment_2 = require("./Equipment");
var BaseRunTime = /** @class */ (function () {
    function BaseRunTime() {
    }
    BaseRunTime.prototype.isAble = function () {
        return true;
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
        if (Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.WEB ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.WEB_WIN ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.WEB_MAC ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.WEB_LINUX ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.WEB_IOS ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.WEB_ANDROID ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.WEB_OTHER)
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
        if (Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.NODE ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.NODE_WIN ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.NODE_MAC ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.NODE_LINUX)
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
        if (Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.RN ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.RN_MAC ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.RN_WIN ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.RN_IOS ||
            Equipment_2.currentEnir === Equipment_2.JSRUNEnvirType.RN_ANDROID)
            return true;
        return false;
    };
    return JSForReactNative;
}(BaseRunTime));
exports.JSForReactNative = JSForReactNative;
//# sourceMappingURL=EquipmentTools.js.map