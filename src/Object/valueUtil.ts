import { Value } from '..';
import { BaseType } from '../Types';
import * as ObjectValue from './Able';
import { ValueExtends } from './types';

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
export function decide<T extends BaseType | any>(
  value: BaseType | any,
  force: boolean = false
): ValueExtends.GetAchieve<T> {
  init();
  if (isAbleType(value) && force === false) return value;
  const key = Object.prototype.toString.call(value);
  const Target = ObjectMap[key];
  if (Target) {
    return new Target(value ?? {});
  }
  return new ObjectValue.ObjectTarget(value as any) as any;
};