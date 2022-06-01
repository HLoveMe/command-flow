import { BooleanObject, NumberObject } from "./Able/ObjectAble";
import { ControlFlow } from "./Control";
import { decide } from "./valueUtil";
export const onlyDeclarationTag = 'onlyDeclaration';
export function attribute() {
    return function ($1, $2, descriptor) {
        $1.constructor.attributes.add($2);
    };
}
export function Params(params) {
    return function (target, methodName, paramsIndex) {
        !target.$Meta && (target.$Meta = {});
        !target.$Meta[methodName] && (target.$Meta[methodName] = {});
        target.$Meta[methodName][paramsIndex] = params;
    };
}
export class ObjectManager {
}
ObjectManager.types = new Set();
export function DefaultValue(value) {
    return function (target, propertyName) {
        target[propertyName] = value;
        ObjectManager.types.add(value);
    };
}
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
    if (((_a = host.prototype.compare) === null || _a === void 0 ? void 0 : _a.declaration) === onlyDeclarationTag || !!host.prototype.compare === false)
        (host.prototype.compare = function (type, target) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc.call(this, target);
            return false;
        });
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
    if (((_a = host.prototype.calc) === null || _a === void 0 ? void 0 : _a.declaration) === onlyDeclarationTag || !!host.prototype.calc === false)
        (host.prototype.calc = function (type, target) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc.call(this, target);
            return false;
        });
}
export function ArrayUint(host) {
    var _a;
    Object.keys(ControlFlow.ArrayEnum).forEach((item) => {
        const key = ControlFlow.ArrayEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
            host.prototype[key] = function (...args) {
                const value = this.valueOf();
                const execFunc = value[key];
                let result;
                if (typeof execFunc === "function") {
                    result = execFunc.bind(value)(...args);
                }
                else
                    result = value;
                return decide(result);
            };
        }
    });
    if (((_a = host.prototype.collectionArray) === null || _a === void 0 ? void 0 : _a.declaration) === onlyDeclarationTag || !!host.prototype.collectionArray === false)
        (host.prototype.collectionArray = function (type, ...args) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc(...args);
            return false;
        });
}
export function SetUint(host) {
    var _a;
    Object.keys(ControlFlow.SetEnum).forEach((item) => {
        const key = ControlFlow.SetEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
            host.prototype[key] = function (...args) {
                const value = this.valueOf();
                const execFunc = value[key];
                let result;
                if (typeof execFunc === "function") {
                    result = execFunc.bind(value)(...args);
                }
                else
                    result = value;
                return decide(result);
            };
        }
    });
    if (((_a = host.prototype.collectionSet) === null || _a === void 0 ? void 0 : _a.declaration) === onlyDeclarationTag || !!host.prototype.collectionSet === false)
        (host.prototype.collectionSet = function (type, ...args) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc(...args);
            return false;
        });
}
export function MapUint(host) {
    var _a;
    Object.keys(ControlFlow.MapEnum).forEach((item) => {
        const key = ControlFlow.MapEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
            host.prototype[key] = function (...args) {
                const value = this.valueOf();
                const execFunc = value[key];
                let result;
                if (typeof execFunc === "function") {
                    result = execFunc.bind(value)(...args);
                }
                else
                    result = value;
                return decide(result);
            };
        }
    });
    if (((_a = host.prototype.collectionMap) === null || _a === void 0 ? void 0 : _a.declaration) === onlyDeclarationTag || !!host.prototype.collectionMap === false)
        (host.prototype.collectionMap = function (type, ...args) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc(...args);
            return false;
        });
}
//# sourceMappingURL=util.js.map