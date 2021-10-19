"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Params = exports.attribute = void 0;
function attribute() {
    return function ($1, $2, descriptor) {
        $1.constructor.attributes.add($2);
    };
}
exports.attribute = attribute;
function Params(params) {
    return function (target, methodName, paramsIndex) {
        !target.$Meta && (target.$Meta = {});
        !target.$Meta[methodName] && (target.$Meta[methodName] = {});
        target.$Meta[methodName][paramsIndex] = params;
    };
}
exports.Params = Params;
//# sourceMappingURL=ObjectTypes.js.map