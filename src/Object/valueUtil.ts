import * as ObjectValue from './Able';
import { ValueExtends } from './types';
// type Detail<T> = ValueExtends.IsValue<T> extends true ? T : ValueExtends.GetDeepAchieve<T>
let ObjectMap:any = null;
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
export const isAbleType = (value: any): boolean => {
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
export function decide<T>(
  value: T,
  force: boolean = false
): ValueExtends.GetDeepAchieve<T> {
  init();
  if (isAbleType(value) && force === false) return value as any;
  const key = Object.prototype.toString.call(value);
  const Target = ObjectMap[key];
  if (Target) {
    return new Target(value ?? {});
  }
  return new ObjectValue.ObjectTarget(value as any) as any;
};