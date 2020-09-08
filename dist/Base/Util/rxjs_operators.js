"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InOutValue = require("../Object/InOutputValue");
var operators_1 = require("rxjs/operators");
var ObjectMap = {
    '[object Object]': InOutValue.InOutObject,
    '[object Map]': InOutValue.InOutMap,
    '[object Set]': InOutValue.InOutSet,
    '[object Array]': InOutValue.InOutArray,
    '[object Boolean]': Boolean,
    '[object Date]': Date,
    '[object Number]': InOutValue.InOutNumber,
    '[object String]': InOutValue.InOutString
};
var decide = function (value) {
    var key = Object.prototype.toString.call(value);
    var Target = ObjectMap[key];
    if (Target) {
        switch (key) {
            case '[object Array]':
                return new (Target.bind.apply(Target, __spreadArrays([void 0], value)))();
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
exports.toInOutValue = function (source) {
    return source.pipe(operators_1.map(function (value) { return decide(value); }));
};
/**
 * Object 值转为   ValueAble;  记录Tap  ;Catch
 * @param work
 */
exports.ValueSwitchTapCatch = function (work) {
    return function (source) {
        return source.pipe(exports.toInOutValue, operators_1.tap(function (value) { var _a; return (_a = work.context) === null || _a === void 0 ? void 0 : _a.msgChannel.next(value); }), operators_1.catchError(function (err) { throw err; }));
    };
};
//# sourceMappingURL=rxjs_operators.js.map