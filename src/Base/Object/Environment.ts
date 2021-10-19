import { currentEnir, JSRUNEnvirType } from "../Util/Equipment";

declare interface EnvironmentAble {
  isAble(): Boolean;
  current(): JSRUNEnvirType;
}
export class BaseRunTime implements EnvironmentAble {
  isAble() {
    return true;
  }
  current() {
    return currentEnir;
  }
}

export class JSForIosAndroidPCWeb extends BaseRunTime {
  isAble() {
    if (
      currentEnir === JSRUNEnvirType.WEB ||
      currentEnir === JSRUNEnvirType.WEB_WIN ||
      currentEnir === JSRUNEnvirType.WEB_MAC ||
      currentEnir === JSRUNEnvirType.WEB_LINUX ||
      currentEnir === JSRUNEnvirType.WEB_IOS ||
      currentEnir === JSRUNEnvirType.WEB_ANDROID ||
      currentEnir === JSRUNEnvirType.WEB_OTHER
    )
      return true;
    return false;
  }
}

export class JSForNodeJs extends BaseRunTime {
  isAble() {
    if (
      currentEnir === JSRUNEnvirType.NODE ||
      currentEnir === JSRUNEnvirType.NODE_WIN ||
      currentEnir === JSRUNEnvirType.NODE_MAC ||
      currentEnir === JSRUNEnvirType.NODE_LINUX
    )
      return true;
    return false;
  }
}

export class JSForReactNative extends BaseRunTime {
  isAble() {
    if (
      currentEnir === JSRUNEnvirType.RN ||
      currentEnir === JSRUNEnvirType.RN_MAC ||
      currentEnir === JSRUNEnvirType.RN_WIN ||
      currentEnir === JSRUNEnvirType.RN_IOS ||
      currentEnir === JSRUNEnvirType.RN_ANDROID
    )
      return true;
    return false;
  }
}
