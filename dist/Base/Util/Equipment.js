"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformSelect = exports.isRN = exports.isNode = exports.isWeb = exports.currentEnir = exports.JSRUNEnvirType = exports.getJSEnvironment = exports.isReactNative = void 0;
var JSRUNEnvirType;
(function (JSRUNEnvirType) {
    JSRUNEnvirType[JSRUNEnvirType["NODE"] = 10] = "NODE";
    JSRUNEnvirType[JSRUNEnvirType["NODE_WIN"] = 11] = "NODE_WIN";
    JSRUNEnvirType[JSRUNEnvirType["NODE_MAC"] = 12] = "NODE_MAC";
    JSRUNEnvirType[JSRUNEnvirType["NODE_LINUX"] = 13] = "NODE_LINUX";
    JSRUNEnvirType[JSRUNEnvirType["WEB"] = 20] = "WEB";
    JSRUNEnvirType[JSRUNEnvirType["WEB_WIN"] = 21] = "WEB_WIN";
    JSRUNEnvirType[JSRUNEnvirType["WEB_MAC"] = 22] = "WEB_MAC";
    JSRUNEnvirType[JSRUNEnvirType["WEB_LINUX"] = 23] = "WEB_LINUX";
    JSRUNEnvirType[JSRUNEnvirType["WEB_IOS"] = 24] = "WEB_IOS";
    JSRUNEnvirType[JSRUNEnvirType["WEB_ANDROID"] = 25] = "WEB_ANDROID";
    JSRUNEnvirType[JSRUNEnvirType["WEB_OTHER"] = 26] = "WEB_OTHER";
    JSRUNEnvirType[JSRUNEnvirType["RN"] = 30] = "RN";
    JSRUNEnvirType[JSRUNEnvirType["RN_MAC"] = 31] = "RN_MAC";
    JSRUNEnvirType[JSRUNEnvirType["RN_WIN"] = 32] = "RN_WIN";
    JSRUNEnvirType[JSRUNEnvirType["RN_IOS"] = 33] = "RN_IOS";
    JSRUNEnvirType[JSRUNEnvirType["RN_ANDROID"] = 34] = "RN_ANDROID";
})(JSRUNEnvirType || (JSRUNEnvirType = {}));
exports.JSRUNEnvirType = JSRUNEnvirType;
var EnvirType = {
    /**
     * WIndow 浏览器 运行环境
     */
    WINDOWS: "win",
    /**
     * MAC 浏览器 运行环境
     */
    MACINTOSH: "mac",
    /***
     * Linux 浏览器 运行环境
     */
    LINUX: "linux",
    /***
     * ios 浏览器  运行环境
     */
    IOS: "iOS",
    /**
     * 安卓 浏览器 运行环境
     */
    ANDROID: "Android",
    /**
     * 黑莓 运行环境
     */
    BLACKBERRY: "bb",
    /***
     * Win iphone 运行环境
     */
    WINDOWS_PHONE: "winphone",
    /**
     * React-Native 运行环境
     * 直接运行在手机上的React-native环境
     */
    REACTNATIVE: "react-native",
};
/**
 * 是否为 rn 代码
 */
function isReactNative() {
    var GLOBAL;
    try {
        GLOBAL = window;
    }
    catch (error) {
        GLOBAL = global || globalThis;
    }
    return (GLOBAL &&
        GLOBAL.ReactNative &&
        GLOBAL.ReactNative.NativeModules);
}
exports.isReactNative = isReactNative;
function getJSEnvironment() {
    if (navigator.userAgent) {
        var userAgent = navigator.userAgent;
        var platform, result;
        var getDesktopOS = function () {
            var pf = navigator.platform;
            if (pf.indexOf("Win") != -1) {
                // 说明当前是Windows操作系统
                var rVersion = /Windows NT (\d+).(\d)/i;
                var uaResult = userAgent.match(rVersion);
                var sVersionStr = "";
                if (uaResult[1] == "6") {
                    if (uaResult[2] == 1) {
                        sVersionStr = "7"; // 说明当前运行在Windows 7 中
                    }
                    else if (uaResult[2] > 1) {
                        sVersionStr = "8"; // 说明当前运行在Windows 8 中
                    }
                }
                else {
                    sVersionStr = uaResult[1];
                }
                return { name: EnvirType.WINDOWS, versionStr: sVersionStr };
            }
            else if (pf.indexOf("Mac") != -1) {
                return { name: EnvirType.MACINTOSH, versionStr: "" }; // Macintosh操作系统
            }
            else if (pf.indexOf("Linux") != -1) {
                return { name: EnvirType.LINUX, versionStr: "" }; // 说明当前运行在Linux操作系统
            }
            return null;
        };
        platform = /Windows Phone (?:OS )?([\d.]*)/; // windows phone的正则表达式
        result = userAgent.match(platform);
        if (result) {
            return { name: EnvirType.WINDOWS_PHONE, versionStr: result[1] };
        }
        // BlackBerry 10
        if (userAgent.indexOf("(BB10;") > 0) {
            platform = /\sVersion\/([\d.]+)\s/; // BlackBerry的regular expression
            result = userAgent.match(platform);
            if (result) {
                return { name: EnvirType.BLACKBERRY, versionStr: result[1] };
            }
            else {
                return { name: EnvirType.BLACKBERRY, versionStr: "10" };
            }
        }
        // iOS, Android, BlackBerry 6.0+:
        platform =
            /\(([a-zA-Z ]+);\s(?:[U]?[;]?)([\D]+)((?:[\d._]*))(?:.*[\)][^\d]*)([\d.]*)\s/;
        result = userAgent.match(platform);
        if (result) {
            var appleDevices = /iPhone|iPad|iPod/;
            var bbDevices = /PlayBook|BlackBerry/;
            if (result[0].match(appleDevices)) {
                result[3] = result[3].replace(/_/g, ".");
                return { name: EnvirType.IOS, versionStr: result[3] }; // iOS操作系统
            }
            else if (result[2].match(/Android/)) {
                result[2] = result[2].replace(/\s/g, "");
                return { name: EnvirType.ANDROID, versionStr: result[3] }; // Android操作系统
            }
            else if (result[0].match(bbDevices)) {
                return { name: EnvirType.BLACKBERRY, versionStr: result[4] }; // Blackberry
            }
        }
        //Android平台上的Firefox浏览器
        platform = /\((Android)[\s]?([\d][.\d]*)?;.*Firefox\/[\d][.\d]*/;
        result = userAgent.match(platform);
        if (result) {
            return {
                name: EnvirType.ANDROID,
                versionStr: result.length == 3 ? result[2] : "",
            };
        }
        // Desktop
        return getDesktopOS();
    }
    else {
        return { name: EnvirType.REACTNATIVE, versionStr: "" };
    }
}
exports.getJSEnvironment = getJSEnvironment;
var currentEnir;
exports.currentEnir = currentEnir;
if (process && process.env && process.title != "node") {
    var type = require("os").type();
    exports.currentEnir = currentEnir =
        type == "Windows_NT"
            ? JSRUNEnvirType.NODE_WIN
            : type == "Darwin"
                ? JSRUNEnvirType.NODE_MAC
                : JSRUNEnvirType.NODE_LINUX;
}
else {
    var typeName = getJSEnvironment().name;
    if (isReactNative() || typeName == EnvirType.REACTNATIVE) {
        var OS = require("react-native").Platform.OS;
        switch (OS) {
            case "ios":
                exports.currentEnir = currentEnir = JSRUNEnvirType.RN_IOS;
                break;
            case "android":
                exports.currentEnir = currentEnir = JSRUNEnvirType.RN_ANDROID;
                break;
            case "macos":
                exports.currentEnir = currentEnir = JSRUNEnvirType.RN_MAC;
                break;
            case "windows":
                exports.currentEnir = currentEnir = JSRUNEnvirType.RN_WIN;
                break;
        }
    }
    else {
        switch (typeName) {
            case EnvirType.WINDOWS:
                exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_WIN;
                break;
            case EnvirType.MACINTOSH:
                exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_MAC;
                break;
            case EnvirType.IOS:
                exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_IOS;
                break;
            case EnvirType.ANDROID:
                exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_ANDROID;
                break;
            case EnvirType.LINUX:
                exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_LINUX;
                break;
            default:
                exports.currentEnir = currentEnir = JSRUNEnvirType.WEB_OTHER;
                break;
        }
    }
}
var isWeb = currentEnir === JSRUNEnvirType.WEB ||
    currentEnir === JSRUNEnvirType.WEB_WIN ||
    currentEnir === JSRUNEnvirType.WEB_MAC ||
    currentEnir === JSRUNEnvirType.WEB_LINUX ||
    currentEnir === JSRUNEnvirType.WEB_IOS ||
    currentEnir === JSRUNEnvirType.WEB_ANDROID ||
    currentEnir === JSRUNEnvirType.WEB_OTHER;
exports.isWeb = isWeb;
var isNode = currentEnir === JSRUNEnvirType.NODE ||
    currentEnir === JSRUNEnvirType.NODE_WIN ||
    currentEnir === JSRUNEnvirType.NODE_MAC ||
    currentEnir === JSRUNEnvirType.NODE_LINUX;
exports.isNode = isNode;
var isRN = isReactNative();
exports.isRN = isRN;
var PlatformSelect = function (select) {
    if (isWeb) {
        return select.web;
    }
    else if (isNode) {
        return select.node;
    }
    else
        return select.reactnative;
};
exports.PlatformSelect = PlatformSelect;
//# sourceMappingURL=Equipment.js.map