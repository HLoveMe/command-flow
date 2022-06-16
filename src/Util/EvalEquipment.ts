import { isWeb as _isWeb, isNode as _isNode, isReactNative } from "./Equipment";

export function isRunWeb($1: any, $2: string, descriptor: PropertyDescriptor) {
  descriptor.value = () => _isWeb;
}

export function isRunNode($1: any, $2: string, descriptor: PropertyDescriptor) {
  descriptor.value = () => _isNode;
}

export function isRunElectron($1: any, $2: string, descriptor: PropertyDescriptor) {
  descriptor.value = () => isRunElectron;
}
export declare interface EnvironmentAble {
  isAble(): Boolean;
}
// export class BaseRunTime implements EnvironmentAble {
//   isAble() {
//     return true;
//   }
// }

// export class JSForIosAndroidPCWeb extends BaseRunTime {
//   isAble() {
//     if (
//       currentEnir === JSRUNEnvirType.WEB_MOBILE || currentEnir === JSRUNEnvirType.WEB_PC
//     )
//       return true;
//     return false;
//   }
// }

// export class JSForNodeJs extends BaseRunTime {
//   isAble() {
//     if (
//       currentEnir === JSRUNEnvirType.NODE_PC || currentEnir === JSRUNEnvirType.ELECTRON_PC
//     )
//       return true;
//     return false;
//   }
// }

// export class JSForElectron extends BaseRunTime {
//   isAble() {
//     return currentEnir === JSRUNEnvirType.ELECTRON_PC;
//   }
// }


