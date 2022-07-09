import * as ObjectValue from './Able';
// type Detail<T> = ValueExtends.IsValue<T> extends true ? T : ValueExtends.GetDeepAchieve<T>
let ObjectMap = null;
const init = () => {
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
export const isAbleType = (value) => {
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
export function decide(value, force = false) {
    init();
    if (isAbleType(value) && force === false)
        return value;
    const key = Object.prototype.toString.call(value);
    const Target = ObjectMap[key];
    if (Target) {
        return new Target(value ?? {});
    }
    return new ObjectValue.ObjectTarget(value);
}
;
//# sourceMappingURL=valueUtil.js.map