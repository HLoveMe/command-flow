import { ObjectTarget } from "..";
import * as Value from './Able/ObjectAble';
var ObjectMap = null;
var init = function () {
    if (ObjectMap === null) {
        ObjectMap = {
            "[object Object]": Value.ObjectTarget,
            "[object Map]": Value.MapObject,
            "[object Set]": Value.SetObject,
            "[object Array]": Value.ArrayObject,
            "[object Boolean]": Value.BooleanObject,
            "[object Date]": Value.DateObject,
            "[object Number]": Value.NumberObject,
            "[object String]": Value.StringObject,
            "[object ArrayBuffer]": Value.DataObject,
            "[object Uint8Array]": Value.DataObject,
            '[object Null]': Value.ObjectTarget,
            '[object Undefined]': Value.ObjectTarget,
        };
    }
    return ObjectMap;
};
export var isAbleType = function (value) {
    init();
    return Object.prototype.toString.call(value) === '[object flow-object]';
};
/**
 * 将js 数据转为 BaseType
 * 如果是BaseType类型 将不会包装。见[force]
 * @param value
 * @param force 是否强制包装
 * @returns
 */
export var decide = function (value, force) {
    if (force === void 0) { force = false; }
    init();
    if (isAbleType(value) && force === false)
        return value;
    var key = Object.prototype.toString.call(value);
    var Target = ObjectMap[key];
    if (Target) {
        return new Target(value);
    }
    return new ObjectTarget({});
};
//# sourceMappingURL=valueUtil.js.map