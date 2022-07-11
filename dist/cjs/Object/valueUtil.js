"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decide = exports.isAbleType = void 0;
var ObjectValue = require("./Able");
// type Detail<T> = ValueExtends.IsValue<T> extends true ? T : ValueExtends.GetDeepAchieve<T>
var ObjectMap = null;
var init = function () {
    if (ObjectMap === null) {
        ObjectMap = {
            '[object Object]': ObjectValue.ObjectTarget,
            '[object Map]': ObjectValue.MapObject,
            '[object Set]': ObjectValue.SetObject,
            '[object Array]': ObjectValue.ArrayObject,
            '[object Boolean]': ObjectValue.BooleanObject,
            '[object Date]': ObjectValue.DateObject,
            '[object Number]': ObjectValue.NumberObject,
            '[object String]': ObjectValue.StringObject,
            '[object ArrayBuffer]': ObjectValue.DataObject,
            '[object Uint8Array]': ObjectValue.DataObject,
            '[object Promise]': ObjectValue.ObjectTarget,
            '[object Null]': ObjectValue.NULLObject,
            '[object Undefined]': ObjectValue.NULLObject,
        };
    }
    return ObjectMap;
};
var isAbleType = function (value) {
    init();
    return Object.prototype.toString.call(value) === '[object flow-object]';
};
exports.isAbleType = isAbleType;
/**
 * 将js 数据转为 BaseType
 * 如果是BaseType类型 将不会包装。见[force]
 * @param value
 * @param force 是否强制包装
 * @returns
 */
function decide(value, force) {
    if (force === void 0) { force = false; }
    init();
    if ((0, exports.isAbleType)(value) && force === false)
        return value;
    var key = Object.prototype.toString.call(value);
    var Target = ObjectMap[key];
    if (Target) {
        return new Target(value !== null && value !== void 0 ? value : {});
    }
    return new ObjectValue.ObjectTarget(value);
}
exports.decide = decide;
;
