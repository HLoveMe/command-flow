import { ObjectTarget } from '..';
import { decide } from '../Object/valueUtil';
/**
 * 解包
 * @param value
 * @returns
 */
export function unpackValue(value) {
    if (!!value === false)
        return '';
    return (value === null || value === void 0 ? void 0 : value._value).value.valueOf();
}
/**
 * 组合包装
 * @param input
 * @param value
 * @returns
 * wrapperValue(null,string) = wrapperValue<string>(null,StringObject) => ChannelObject<StringObject>
 */
export function wrapperValue(input, value) {
    const nextValue = decide(value);
    return new ObjectTarget(Object.assign(Object.assign({}, input._value), { value: nextValue }));
}
//# sourceMappingURL=channel-value-util.js.map