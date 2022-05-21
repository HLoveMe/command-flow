import { ObjectTarget } from "..";
import { BaseType } from "../Types";
import * as Value from './Able/ObjectAble'


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
  return ObjectMap
}
export const isAbleType = (value: any): boolean => {
  init();
  return Object.prototype.toString.call(value) === '[object flow-object]';
}

/**
 * 将js 数据转为 BaseType
 * 如果是BaseType类型 将不会包装。见[force]
 * @param value 
 * @param force 是否强制包装
 * @returns 
 */
export const decide = function (value: any | BaseType, force: boolean = false): BaseType {
  init()
  if (isAbleType(value) && force === false) return value
  const key = Object.prototype.toString.call(value);
  const Target = ObjectMap[key];
  if (Target) {
    return new Target(value ?? {});
  }
  return new ObjectTarget(value ?? {});
};
