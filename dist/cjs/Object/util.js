"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = exports.CalcUnit = exports.CompareUnit = exports.onlyDeclaration = exports.onlyDeclarationTag = void 0;
var Able_1 = require("./Able");
var Control_1 = require("./Able/Control");
var valueUtil_1 = require("./valueUtil");
exports.onlyDeclarationTag = 'onlyDeclaration';
// export function attribute() {
//   return function ($1: any, $2: string, descriptor: PropertyDescriptor) {
//     ($1.constructor.attributes as Set<string>).add($2);
//   };
// }
// export function Params(params: any) {
//   return function (target: any, methodName: any, paramsIndex: any) {
//     !target.$Meta && (target.$Meta = {});
//     !target.$Meta[methodName] && (target.$Meta[methodName] = {});
//     target.$Meta[methodName][paramsIndex] = params;
//   };
// }
// export class ObjectManager {
//   static types: Set<string> = new Set();
// }
// export function DefaultValue(value: string) {
//   return function (target: any, propertyName: string) {
//     target[propertyName] = value;
//     ObjectManager.types.add(value);
//   };
// }
/**
 * 声明 方式无效 仅仅作为标记
 */
function onlyDeclaration(target, name, dec) {
    dec.value.declaration = exports.onlyDeclarationTag;
}
exports.onlyDeclaration = onlyDeclaration;
function CompareUnit(host) {
    var _a;
    Object.keys(Control_1.ControlFlow.CompareEnum).forEach(function (item) {
        var key = Control_1.ControlFlow.CompareEnum[item];
        var comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
            host.prototype[key] = function () { return new Able_1.BooleanObject(false); };
        }
    });
    if (((_a = host.prototype.compare) === null || _a === void 0 ? void 0 : _a.declaration) === exports.onlyDeclarationTag ||
        !!host.prototype.compare === false)
        host.prototype.compare = function (type, target) {
            var _a;
            var execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
exports.CompareUnit = CompareUnit;
function CalcUnit(host) {
    var _a;
    Object.keys(Control_1.ControlFlow.CalcEnum).forEach(function (item) {
        var key = Control_1.ControlFlow.CalcEnum[item];
        var comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
            host.prototype[key] = function () { return new Able_1.NumberObject(0); };
        }
    });
    if (((_a = host.prototype.calc) === null || _a === void 0 ? void 0 : _a.declaration) === exports.onlyDeclarationTag ||
        !!host.prototype.calc === false)
        host.prototype.calc = function (type, target) {
            var _a;
            var execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
exports.CalcUnit = CalcUnit;
function Unit(target) {
    var execName = 'execFunction';
    return function (host) {
        var _a;
        Object.keys(target).forEach(function (item) {
            var key = target[item];
            var comFunction = host.prototype[key];
            if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
                host.prototype[key] = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    var value = this.valueOf();
                    var execFunc = value[key];
                    var result;
                    if (typeof execFunc === 'function') {
                        result = execFunc.bind(value).apply(void 0, args);
                    }
                    else
                        result = value;
                    return (0, valueUtil_1.decide)(result);
                };
            }
        });
        if (((_a = host.prototype[execName]) === null || _a === void 0 ? void 0 : _a.declaration) === exports.onlyDeclarationTag ||
            !!host.prototype[execName] === false)
            host.prototype[execName] = function (type) {
                var _a;
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
                if (execFunc && typeof execFunc === 'function')
                    return execFunc.apply(void 0, args);
                return false;
            };
    };
}
exports.Unit = Unit;
