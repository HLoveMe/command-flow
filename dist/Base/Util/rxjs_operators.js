"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueSwitchTapCatch = exports.toInOutValue = void 0;
var InOutValue = require("../Object/InOutputValue");
var operators_1 = require("rxjs/operators");
var ObjectMap = {
    "[object Object]": InOutValue.InOutObject,
    "[object Map]": InOutValue.InOutMap,
    "[object Set]": InOutValue.InOutSet,
    "[object Array]": InOutValue.InOutArray,
    "[object Boolean]": InOutValue.InOutBoolean,
    "[object Date]": InOutValue.InOutDate,
    "[object Number]": InOutValue.InOutNumber,
    "[object String]": InOutValue.InOutString,
};
var decide = function (value) {
    var key = Object.prototype.toString.call(value);
    var Target = ObjectMap[key];
    if (Target) {
        switch (key) {
            case "[object Array]":
                return new (Target.bind.apply(Target, __spreadArray([void 0], value, false)))();
            default:
                return new Target(value);
        }
    }
    return null;
};
/**
 *
 * @param source Object 值转为   ValueAble;
 */
var toInOutValue = function (source) {
    return source.pipe((0, operators_1.map)(function (value) { return decide(value); }));
};
exports.toInOutValue = toInOutValue;
/**
 * Object 值转为   ValueAble;  记录Tap  ;Catch
 * @param work
 */
var ValueSwitchTapCatch = function (work) {
    // return (source: Observable<any>) => {
    //   return source.pipe(
    //     toInOutValue,
    //     tap((value) => work.context?.msgChannel.next(value)),
    //     catchError(err => { throw err })
    //   )
    // }
};
exports.ValueSwitchTapCatch = ValueSwitchTapCatch;
//# sourceMappingURL=rxjs_operators.js.map