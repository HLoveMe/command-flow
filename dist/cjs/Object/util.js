"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unit = exports.CalcUnit = exports.CompareUnit = exports.onlyDeclaration = exports.onlyDeclarationTag = void 0;
const Able_1 = require("./Able");
const Control_1 = require("./Able/Control");
const valueUtil_1 = require("./valueUtil");
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
    Object.keys(Control_1.ControlFlow.CompareEnum).forEach((item) => {
        const key = Control_1.ControlFlow.CompareEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
            host.prototype[key] = () => new Able_1.BooleanObject(false);
        }
    });
    if (host.prototype.compare?.declaration === exports.onlyDeclarationTag ||
        !!host.prototype.compare === false)
        host.prototype.compare = function (type, target) {
            const execFunc = host.prototype[type]?.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
exports.CompareUnit = CompareUnit;
function CalcUnit(host) {
    Object.keys(Control_1.ControlFlow.CalcEnum).forEach((item) => {
        const key = Control_1.ControlFlow.CalcEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
            host.prototype[key] = () => new Able_1.NumberObject(0);
        }
    });
    if (host.prototype.calc?.declaration === exports.onlyDeclarationTag ||
        !!host.prototype.calc === false)
        host.prototype.calc = function (type, target) {
            const execFunc = host.prototype[type]?.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
exports.CalcUnit = CalcUnit;
function Unit(target) {
    const execName = 'execFunction';
    return function (host) {
        Object.keys(target).forEach((item) => {
            const key = target[item];
            const comFunction = host.prototype[key];
            if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
                host.prototype[key] = function (...args) {
                    const value = this.valueOf();
                    const execFunc = value[key];
                    let result;
                    if (typeof execFunc === 'function') {
                        result = execFunc.bind(value)(...args);
                    }
                    else
                        result = value;
                    return (0, valueUtil_1.decide)(result);
                };
            }
        });
        if (host.prototype[execName]?.declaration === exports.onlyDeclarationTag ||
            !!host.prototype[execName] === false)
            host.prototype[execName] = function (type, ...args) {
                const execFunc = host.prototype[type]?.bind(this);
                if (execFunc && typeof execFunc === 'function')
                    return execFunc(...args);
                return false;
            };
    };
}
exports.Unit = Unit;