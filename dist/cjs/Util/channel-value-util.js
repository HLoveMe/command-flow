"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapperValue = exports.unpackValue = void 0;
var __1 = require("..");
var valueUtil_1 = require("../Object/valueUtil");
/**
 * 解包
 * @param value
 * @returns
 */
function unpackValue(value) {
    if (!!value === false)
        return '';
    return (value === null || value === void 0 ? void 0 : value._value).value.valueOf();
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
    var nextValue = (0, valueUtil_1.decide)(value);
    return new __1.ObjectTarget(__assign(__assign({}, input._value), { value: nextValue }));
}
exports.wrapperValue = wrapperValue;
