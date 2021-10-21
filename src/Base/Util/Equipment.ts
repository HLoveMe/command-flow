enum JSRUNEnvirType {
  NODE = 10,
  NODE_WIN = 11,
  NODE_MAC = 12,
  NODE_LINUX = 13,
  WEB = 20,
  WEB_WIN = 21,
  WEB_MAC = 22,
  WEB_LINUX = 23,
  WEB_IOS = 24,
  WEB_ANDROID = 25,
  WEB_OTHER = 26,
  RN = 30,
  RN_MAC = 31,
  RN_WIN = 32,
  RN_IOS = 33,
  RN_ANDROID = 34,
}
const EnvirType = {
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
export function isReactNative() {
  var GLOBAL;
  try {
    GLOBAL = window;
  } catch (error) {
    GLOBAL = global || globalThis;
  }
  return (
    GLOBAL &&
    (GLOBAL as any).ReactNative &&
    (GLOBAL as any).ReactNative.NativeModules
  );
}

export function getJSEnvironment() {
  if (navigator.userAgent) {
    var userAgent = navigator.userAgent;
    var platform, result;
    const getDesktopOS = () => {
      var pf = navigator.platform;
      if (pf.indexOf("Win") != -1) {
        // 说明当前是Windows操作系统
        var rVersion = /Windows NT (\d+).(\d)/i;
        var uaResult: any[] = userAgent.match(rVersion);
        var sVersionStr = "";
        if (uaResult[1] == "6") {
          if (uaResult[2] == 1) {
            sVersionStr = "7"; // 说明当前运行在Windows 7 中
          } else if (uaResult[2] > 1) {
            sVersionStr = "8"; // 说明当前运行在Windows 8 中
          }
        } else {
          sVersionStr = uaResult[1];
        }
        return { name: EnvirType.WINDOWS, versionStr: sVersionStr };
      } else if (pf.indexOf("Mac") != -1) {
        return { name: EnvirType.MACINTOSH, versionStr: "" }; // Macintosh操作系统
      } else if (pf.indexOf("Linux") != -1) {
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
      } else {
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
      } else if (result[2].match(/Android/)) {
        result[2] = result[2].replace(/\s/g, "");
        return { name: EnvirType.ANDROID, versionStr: result[3] }; // Android操作系统
      } else if (result[0].match(bbDevices)) {
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
  } else {
    return { name: EnvirType.REACTNATIVE, versionStr: "" };
  }
}

var currentEnir: JSRUNEnvirType;
if (process && process.env && process.title) {
  const type = require("os").type();
  currentEnir =
    type == "Windows_NT"
      ? JSRUNEnvirType.NODE_WIN
      : type == "Darwin"
      ? JSRUNEnvirType.NODE_MAC
      : JSRUNEnvirType.NODE_LINUX;
} else {
  const typeName = getJSEnvironment().name;
  if (isReactNative() || typeName == EnvirType.REACTNATIVE) {
    const OS = require("react-native").Platform.OS;
    switch (OS) {
      case "ios":
        currentEnir = JSRUNEnvirType.RN_IOS;
        break;
      case "android":
        currentEnir = JSRUNEnvirType.RN_ANDROID;
        break;
      case "macos":
        currentEnir = JSRUNEnvirType.RN_MAC;
        break;
      case "windows":
        currentEnir = JSRUNEnvirType.RN_WIN;
        break;
    }
  } else {
    switch (typeName) {
      case EnvirType.WINDOWS:
        currentEnir = JSRUNEnvirType.WEB_WIN;
        break;
      case EnvirType.MACINTOSH:
        currentEnir = JSRUNEnvirType.WEB_MAC;
        break;
      case EnvirType.IOS:
        currentEnir = JSRUNEnvirType.WEB_IOS;
        break;
      case EnvirType.ANDROID:
        currentEnir = JSRUNEnvirType.WEB_ANDROID;
        break;
      case EnvirType.LINUX:
        currentEnir = JSRUNEnvirType.WEB_LINUX;
        break;
      default:
        currentEnir = JSRUNEnvirType.WEB_OTHER;
        break;
    }
  }
}

const isWeb =
  currentEnir === JSRUNEnvirType.WEB ||
  currentEnir === JSRUNEnvirType.WEB_WIN ||
  currentEnir === JSRUNEnvirType.WEB_MAC ||
  currentEnir === JSRUNEnvirType.WEB_LINUX ||
  currentEnir === JSRUNEnvirType.WEB_IOS ||
  currentEnir === JSRUNEnvirType.WEB_ANDROID ||
  currentEnir === JSRUNEnvirType.WEB_OTHER;


const isNode =
  currentEnir === JSRUNEnvirType.NODE ||
  currentEnir === JSRUNEnvirType.NODE_WIN ||
  currentEnir === JSRUNEnvirType.NODE_MAC ||
  currentEnir === JSRUNEnvirType.NODE_LINUX;

const isRN = isReactNative();

const isPC =
  currentEnir === JSRUNEnvirType.NODE_LINUX ||
  currentEnir === JSRUNEnvirType.NODE_MAC ||
  currentEnir === JSRUNEnvirType.NODE_WIN ||
  currentEnir === JSRUNEnvirType.WEB_WIN ||
  currentEnir === JSRUNEnvirType.WEB_MAC ||
  currentEnir === JSRUNEnvirType.WEB_LINUX ||
  currentEnir === JSRUNEnvirType.RN_MAC ||
  currentEnir === JSRUNEnvirType.RN_WIN;

const isMobile = !isPC;

export type PlatformOSType = "reactNative" | "web" | "node";

type Select<T> = (select: { [platform in PlatformOSType]: T }) => T;

const PlatformSelect: Select<any> = (select) => {
  if (isWeb) {
    return select.web;
  } else if (isNode) {
    return select.node;
  } else return select.reactNative;
};
export {
  JSRUNEnvirType,
  currentEnir,
  isWeb,
  isNode,
  isRN,
  isPC,
  isMobile,
  PlatformSelect,
};
