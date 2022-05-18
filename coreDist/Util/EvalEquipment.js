import { isWeb as _isWeb, isNode as _isNode } from "./Equipment";
export function isRunWeb($1, $2, descriptor) {
    descriptor.value = function () { return _isWeb; };
}
export function isRunNode($1, $2, descriptor) {
    descriptor.value = function () { return _isNode; };
}
export function isRunElectron($1, $2, descriptor) {
    descriptor.value = function () { return isRunElectron; };
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
//# sourceMappingURL=EvalEquipment.js.map