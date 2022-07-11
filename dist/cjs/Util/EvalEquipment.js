"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRunElectron = exports.isRunNode = exports.isRunWeb = void 0;
var Equipment_1 = require("./Equipment");
function isRunWeb($1, $2, descriptor) {
    descriptor.value = function () { return Equipment_1.isWeb; };
}
exports.isRunWeb = isRunWeb;
function isRunNode($1, $2, descriptor) {
    descriptor.value = function () { return Equipment_1.isNode; };
}
exports.isRunNode = isRunNode;
function isRunElectron($1, $2, descriptor) {
    descriptor.value = function () { return isRunElectron; };
}
exports.isRunElectron = isRunElectron;
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
