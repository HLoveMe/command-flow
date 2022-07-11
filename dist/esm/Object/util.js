import { BooleanObject, NumberObject } from './Able';
import { ControlFlow } from './Able/Control';
import { decide } from './valueUtil';
export const onlyDeclarationTag = 'onlyDeclaration';
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
export function onlyDeclaration(target, name, dec) {
    dec.value.declaration = onlyDeclarationTag;
}
export function CompareUnit(host) {
    var _a;
    Object.keys(ControlFlow.CompareEnum).forEach((item) => {
        const key = ControlFlow.CompareEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
            host.prototype[key] = () => new BooleanObject(false);
        }
    });
    if (((_a = host.prototype.compare) === null || _a === void 0 ? void 0 : _a.declaration) === onlyDeclarationTag ||
        !!host.prototype.compare === false)
        host.prototype.compare = function (type, target) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
export function CalcUnit(host) {
    var _a;
    Object.keys(ControlFlow.CalcEnum).forEach((item) => {
        const key = ControlFlow.CalcEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
            host.prototype[key] = () => new NumberObject(0);
        }
    });
    if (((_a = host.prototype.calc) === null || _a === void 0 ? void 0 : _a.declaration) === onlyDeclarationTag ||
        !!host.prototype.calc === false)
        host.prototype.calc = function (type, target) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
export function Unit(target) {
    const execName = 'execFunction';
    return function (host) {
        var _a;
        Object.keys(target).forEach((item) => {
            const key = target[item];
            const comFunction = host.prototype[key];
            if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
                host.prototype[key] = function (...args) {
                    const value = this.valueOf();
                    const execFunc = value[key];
                    let result;
                    if (typeof execFunc === 'function') {
                        result = execFunc.bind(value)(...args);
                    }
                    else
                        result = value;
                    return decide(result);
                };
            }
        });
        if (((_a = host.prototype[execName]) === null || _a === void 0 ? void 0 : _a.declaration) === onlyDeclarationTag ||
            !!host.prototype[execName] === false)
            host.prototype[execName] = function (type, ...args) {
                var _a;
                const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
                if (execFunc && typeof execFunc === 'function')
                    return execFunc(...args);
                return false;
            };
    };
}
//# sourceMappingURL=util.js.map