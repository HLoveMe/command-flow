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
    Object.keys(ControlFlow.CompareEnum).forEach((item) => {
        const key = ControlFlow.CompareEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
            host.prototype[key] = () => new BooleanObject(false);
        }
    });
    if (host.prototype.compare?.declaration === onlyDeclarationTag ||
        !!host.prototype.compare === false)
        host.prototype.compare = function (type, target) {
            const execFunc = host.prototype[type]?.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
export function CalcUnit(host) {
    Object.keys(ControlFlow.CalcEnum).forEach((item) => {
        const key = ControlFlow.CalcEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
            host.prototype[key] = () => new NumberObject(0);
        }
    });
    if (host.prototype.calc?.declaration === onlyDeclarationTag ||
        !!host.prototype.calc === false)
        host.prototype.calc = function (type, target) {
            const execFunc = host.prototype[type]?.bind(this);
            if (execFunc && typeof execFunc === 'function')
                return execFunc.call(this, target);
            return false;
        };
}
export function Unit(target) {
    const execName = 'execFunction';
    return function (host) {
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
        if (host.prototype[execName]?.declaration === onlyDeclarationTag ||
            !!host.prototype[execName] === false)
            host.prototype[execName] = function (type, ...args) {
                const execFunc = host.prototype[type]?.bind(this);
                if (execFunc && typeof execFunc === 'function')
                    return execFunc(...args);
                return false;
            };
    };
}
//# sourceMappingURL=util.js.map