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
function unpackValue(value) {
    if (!!value === false)
        return '';
    return value?._value.value.valueOf();
}
exports.unpackValue = unpackValue;
/**
 * 组合包装
 * @param input
 * @param value
 * @returns
 * wrapperValue(null,string) = wrapperValue<string>(null,StringObject) => ChannelObject<StringObject>
 */
function wrapperValue(input, value) {
    const nextValue = (0, valueUtil_1.decide)(value);
    return new __1.ObjectTarget({
        ...input._value,
        value: nextValue,
    });
}
exports.wrapperValue = wrapperValue;
