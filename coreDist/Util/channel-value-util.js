var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { ObjectTarget } from "..";
import { decide } from "../Object/valueUtil";
/**
 * 解包
 * @param value
 * @returns
 */
export var unpackValue = function (value) {
    return value._value.value.valueOf();
};
/**
 * 组合包装
 * @param input
 * @param value
 * @returns
 */
export function wrapperValue(input, value) {
    var nextValue = decide(value);
    return new ObjectTarget(__assign(__assign({}, (input._value)), { value: nextValue }));
}
//# sourceMappingURL=channel-value-util.js.map