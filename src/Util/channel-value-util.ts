import { BaseType, ObjectTarget } from "..";
import { decide, isAbleType } from "../Object/valueUtil";
import { ChannelObject, ChannelValue } from "../Types";
/**
 * 解包
 * @param value 
 * @returns 
 */
export function unpackValue<T extends any = string>(value: ChannelObject): T {
  if (!!value === false) return "" as unknown as T;
  return (value._value as ChannelValue).value.valueOf()
}

/**
 * 组合包装
 * @param input 
 * @param value 
 * @returns 
 */
export function wrapperValue<T extends BaseType = BaseType>(input: ChannelObject, value: T | any): ChannelObject<T> {
  const nextValue = decide<T>(value);
  return new ObjectTarget({
    ...(input._value),
    value: nextValue,
  })
}