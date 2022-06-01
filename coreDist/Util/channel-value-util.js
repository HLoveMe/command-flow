"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapperValue = exports.unpackValue = void 0;
const __1 = require("..");
const valueUtil_1 = require("../Object/valueUtil");
/**
 * 解包
 * @param value
 * @returns
 */
const unpackValue = (value) => {
    if (!!value === false)
        return "";
    return value._value.value.valueOf();
};
exports.unpackValue = unpackValue;
/**
 * 组合包装
 * @param input
 * @param value
 * @returns
 */
function wrapperValue(input, value) {
    const nextValue = (0, valueUtil_1.decide)(value);
    return new __1.ObjectTarget(Object.assign(Object.assign({}, (input._value)), { value: nextValue }));
}
exports.wrapperValue = wrapperValue;
//# sourceMappingURL=channel-value-util.js.map