import { ObjectTarget } from '..';
import { NumberObjectAble, ValueExtends } from '../Object';
import { decide } from '../Object/valueUtil';
import { ChannelObject, ChannelValue } from '../Types';
/**
 * 解包
 * @param value
 * @returns
 */
export function unpackValue<T extends any = string>(value: ChannelObject): T {
  if (!!value === false) return '' as unknown as T;
  return (value._value as ChannelValue).value.valueOf();
}

/**
 * 组合包装
 * @param input
 * @param value
 * @returns
 * wrapperValue(null,string) = wrapperValue<string>(null,StringObject) => ChannelObject<StringObject>
 */

export function wrapperValue<T>(input: ChannelObject, value: T): ChannelObject<ValueExtends.GetDeepAchieve<T>> {
  const nextValue = decide(value);
  return new ObjectTarget({
    ...input._value,
    value: nextValue,
  }) as any;
}