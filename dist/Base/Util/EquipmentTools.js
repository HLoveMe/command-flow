"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRunRN = exports.isRunNode = exports.isRunWeb = void 0;
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
//# sourceMappingURL=EquipmentTools.js.map