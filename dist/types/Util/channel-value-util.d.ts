import { ValueExtends } from '../Object';
import { ChannelObject } from '../Types';
/**
 * 解包
 * @param value
 * @returns
 */
export declare function unpackValue<T extends any = string>(value?: ChannelObject): T;
/**
 * 组合包装
 * @param input
 * @param value
 * @returns
 * wrapperValue(null,string) = wrapperValue<string>(null,StringObject) => ChannelObject<StringObject>
 */
export declare function wrapperValue<T>(input: ChannelObject, value: T): ChannelObject<ValueExtends.GetDeepAchieve<T>>;
//# sourceMappingURL=channel-value-util.d.ts.map