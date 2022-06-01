import { ObjectTarget } from "..";
import { decide } from "../Object/valueUtil";
/**
 * 解包
 * @param value
 * @returns
 */
export const unpackValue = (value) => {
    if (!!value === false)
        return "";
    return value._value.value.valueOf();
};
/**
 * 组合包装
 * @param input
 * @param value
 * @returns
 */
export function wrapperValue(input, value) {
    const nextValue = decide(value);
    return new ObjectTarget(Object.assign(Object.assign({}, (input._value)), { value: nextValue }));
}
//# sourceMappingURL=channel-value-util.js.map