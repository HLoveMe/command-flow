"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decide = exports.isAbleType = void 0;
const __1 = require("..");
const Value = require("./Able/ObjectAble");
let ObjectMap = null;
const init = () => {
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
            "[object Promise]": Value.ObjectTarget,
            '[object Null]': Value.ObjectTarget,
            '[object Undefined]': Value.ObjectTarget,
        };
    }
    return ObjectMap;
};
const isAbleType = (value) => {
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
const decide = function (value, force = false) {
    init();
    if ((0, exports.isAbleType)(value) && force === false)
        return value;
    const key = Object.prototype.toString.call(value);
    const Target = ObjectMap[key];
    if (Target) {
        return new Target(value !== null && value !== void 0 ? value : {});
    }
    return new __1.ObjectTarget(value !== null && value !== void 0 ? value : {});
};
exports.decide = decide;
//# sourceMappingURL=valueUtil.js.map