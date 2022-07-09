import { getObjectType } from './tools';
var JSRUNEnvirType;
(function (JSRUNEnvirType) {
    JSRUNEnvirType[JSRUNEnvirType["NODE_PC"] = 10] = "NODE_PC";
    JSRUNEnvirType[JSRUNEnvirType["WEB_PC"] = 20] = "WEB_PC";
    JSRUNEnvirType[JSRUNEnvirType["WEB_MOBILE"] = 26] = "WEB_MOBILE";
    JSRUNEnvirType[JSRUNEnvirType["OTHER"] = 100] = "OTHER";
})(JSRUNEnvirType || (JSRUNEnvirType = {}));
const EnvirType = {
    /**
     * WIndow 浏览器 运行环境
     */
    WINDOWS: 'win',
    /**
     * MAC 浏览器 运行环境
     */
    MACINTOSH: 'mac',
    /***
     * Linux 浏览器 运行环境
     */
    LINUX: 'linux',
    /***
     * ios 浏览器  运行环境
     */
    IOS: 'iOS',
    /**
     * 安卓 浏览器 运行环境
     */
    ANDROID: 'Android',
    /**
     * 黑莓 运行环境
     */
    BLACKBERRY: 'bb',
    /***
     * Win iphone 运行环境
     */
    WINDOWS_PHONE: 'winphone',
    Other: 'other',
};
/**
 * 是否为 rn 代码
 */
export function isReactNative() {
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
export function getJSEnvironment() {
    if (navigator.userAgent) {
        var userAgent = navigator.userAgent;
        var platform, result;
        const getDesktopOS = () => {
            var pf = navigator.platform;
            if (pf.indexOf('Win') != -1) {
                // 说明当前是Windows操作系统
                var rVersion = /Windows NT (\d+).(\d)/i;
                var uaResult = userAgent.match(rVersion);
                var sVersionStr = '';
                if (uaResult[1] == '6') {
                    if (uaResult[2] == 1) {
                        sVersionStr = '7'; // 说明当前运行在Windows 7 中
                    }
                    else if (uaResult[2] > 1) {
                        sVersionStr = '8'; // 说明当前运行在Windows 8 中
                    }
                }
                else {
                    sVersionStr = uaResult[1];
                }
                return { name: EnvirType.WINDOWS, versionStr: sVersionStr };
            }
            else if (pf.indexOf('Mac') != -1) {
                return { name: EnvirType.MACINTOSH, versionStr: '' }; // Macintosh操作系统
            }
            else if (pf.indexOf('Linux') != -1) {
                return { name: EnvirType.LINUX, versionStr: '' }; // 说明当前运行在Linux操作系统
            }
            return null;
        };
        platform = /Windows Phone (?:OS )?([\d.]*)/; // windows phone的正则表达式
        result = userAgent.match(platform);
        if (result) {
            return { name: EnvirType.WINDOWS_PHONE, versionStr: result[1] };
        }
        // BlackBerry 10
        if (userAgent.indexOf('(BB10;') > 0) {
            platform = /\sVersion\/([\d.]+)\s/; // BlackBerry的regular expression
            result = userAgent.match(platform);
            if (result) {
                return { name: EnvirType.BLACKBERRY, versionStr: result[1] };
            }
            else {
                return { name: EnvirType.BLACKBERRY, versionStr: '10' };
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
                result[3] = result[3].replace(/_/g, '.');
                return { name: EnvirType.IOS, versionStr: result[3] }; // iOS操作系统
            }
            else if (result[2].match(/Android/)) {
                result[2] = result[2].replace(/\s/g, '');
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
                versionStr: result.length == 3 ? result[2] : '',
            };
        }
        // Desktop
        return getDesktopOS();
    }
    else {
        return { name: EnvirType.Other, versionStr: '' };
    }
}
const topThis = Function('return this')();
var currentEnir;
if (topThis.process && getObjectType(topThis.process) === '[object process]') {
    currentEnir = JSRUNEnvirType.NODE_PC;
}
else {
    const typeName = getJSEnvironment().name;
    switch (typeName) {
        case EnvirType.WINDOWS:
            currentEnir = JSRUNEnvirType.WEB_PC;
            break;
        case EnvirType.MACINTOSH:
            currentEnir = JSRUNEnvirType.WEB_PC;
            break;
        case EnvirType.IOS:
            currentEnir = JSRUNEnvirType.WEB_MOBILE;
            break;
        case EnvirType.ANDROID:
            currentEnir = JSRUNEnvirType.WEB_MOBILE;
            break;
        case EnvirType.LINUX:
            currentEnir = JSRUNEnvirType.WEB_PC;
            break;
        default:
            currentEnir = JSRUNEnvirType.OTHER;
            break;
    }
}
const isWeb = currentEnir === JSRUNEnvirType.WEB_MOBILE ||
    currentEnir === JSRUNEnvirType.WEB_PC;
const isNode = currentEnir === JSRUNEnvirType.NODE_PC;
const isPC = currentEnir === JSRUNEnvirType.NODE_PC ||
    currentEnir === JSRUNEnvirType.WEB_PC;
const isMobile = currentEnir === JSRUNEnvirType.WEB_MOBILE;
const isJS = true;
const PlatformSelect = (select) => {
    let target;
    if (isWeb) {
        target = select.web;
    }
    else if (isNode) {
        target = select.node;
    }
    return target;
};
export { JSRUNEnvirType, currentEnir, isWeb, isNode, isPC, isMobile, isJS, PlatformSelect, };
//# sourceMappingURL=Equipment.js.map