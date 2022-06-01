"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MapUint = exports.SetUint = exports.ArrayUint = exports.CalcUnit = exports.CompareUnit = exports.onlyDeclaration = exports.DefaultValue = exports.ObjectManager = exports.Params = exports.attribute = exports.onlyDeclarationTag = void 0;
const ObjectAble_1 = require("./Able/ObjectAble");
const Control_1 = require("./Control");
const valueUtil_1 = require("./valueUtil");
exports.onlyDeclarationTag = 'onlyDeclaration';
function attribute() {
    return function ($1, $2, descriptor) {
        $1.constructor.attributes.add($2);
    };
}
exports.attribute = attribute;
function Params(params) {
    return function (target, methodName, paramsIndex) {
        !target.$Meta && (target.$Meta = {});
        !target.$Meta[methodName] && (target.$Meta[methodName] = {});
        target.$Meta[methodName][paramsIndex] = params;
    };
}
exports.Params = Params;
class ObjectManager {
}
exports.ObjectManager = ObjectManager;
ObjectManager.types = new Set();
function DefaultValue(value) {
    return function (target, propertyName) {
        target[propertyName] = value;
        ObjectManager.types.add(value);
    };
}
exports.DefaultValue = DefaultValue;
/**
 * 声明 方式无效 仅仅作为标记
 */
function onlyDeclaration(target, name, dec) {
    dec.value.declaration = exports.onlyDeclarationTag;
}
exports.onlyDeclaration = onlyDeclaration;
function CompareUnit(host) {
    var _a;
    Object.keys(Control_1.ControlFlow.CompareEnum).forEach((item) => {
        const key = Control_1.ControlFlow.CompareEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
            host.prototype[key] = () => new ObjectAble_1.BooleanObject(false);
        }
    });
    if (((_a = host.prototype.compare) === null || _a === void 0 ? void 0 : _a.declaration) === exports.onlyDeclarationTag || !!host.prototype.compare === false)
        (host.prototype.compare = function (type, target) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc.call(this, target);
            return false;
        });
}
exports.CompareUnit = CompareUnit;
function CalcUnit(host) {
    var _a;
    Object.keys(Control_1.ControlFlow.CalcEnum).forEach((item) => {
        const key = Control_1.ControlFlow.CalcEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
            host.prototype[key] = () => new ObjectAble_1.NumberObject(0);
        }
    });
    if (((_a = host.prototype.calc) === null || _a === void 0 ? void 0 : _a.declaration) === exports.onlyDeclarationTag || !!host.prototype.calc === false)
        (host.prototype.calc = function (type, target) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc.call(this, target);
            return false;
        });
}
exports.CalcUnit = CalcUnit;
function ArrayUint(host) {
    var _a;
    Object.keys(Control_1.ControlFlow.ArrayEnum).forEach((item) => {
        const key = Control_1.ControlFlow.ArrayEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
            host.prototype[key] = function (...args) {
                const value = this.valueOf();
                const execFunc = value[key];
                let result;
                if (typeof execFunc === "function") {
                    result = execFunc.bind(value)(...args);
                }
                else
                    result = value;
                return (0, valueUtil_1.decide)(result);
            };
        }
    });
    if (((_a = host.prototype.collectionArray) === null || _a === void 0 ? void 0 : _a.declaration) === exports.onlyDeclarationTag || !!host.prototype.collectionArray === false)
        (host.prototype.collectionArray = function (type, ...args) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc(...args);
            return false;
        });
}
exports.ArrayUint = ArrayUint;
function SetUint(host) {
    var _a;
    Object.keys(Control_1.ControlFlow.SetEnum).forEach((item) => {
        const key = Control_1.ControlFlow.SetEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
            host.prototype[key] = function (...args) {
                const value = this.valueOf();
                const execFunc = value[key];
                let result;
                if (typeof execFunc === "function") {
                    result = execFunc.bind(value)(...args);
                }
                else
                    result = value;
                return (0, valueUtil_1.decide)(result);
            };
        }
    });
    if (((_a = host.prototype.collectionSet) === null || _a === void 0 ? void 0 : _a.declaration) === exports.onlyDeclarationTag || !!host.prototype.collectionSet === false)
        (host.prototype.collectionSet = function (type, ...args) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc(...args);
            return false;
        });
}
exports.SetUint = SetUint;
function MapUint(host) {
    var _a;
    Object.keys(Control_1.ControlFlow.MapEnum).forEach((item) => {
        const key = Control_1.ControlFlow.MapEnum[item];
        const comFunction = host.prototype[key];
        if (!comFunction || comFunction.declaration === exports.onlyDeclarationTag) {
            host.prototype[key] = function (...args) {
                const value = this.valueOf();
                const execFunc = value[key];
                let result;
                if (typeof execFunc === "function") {
                    result = execFunc.bind(value)(...args);
                }
                else
                    result = value;
                return (0, valueUtil_1.decide)(result);
            };
        }
    });
    if (((_a = host.prototype.collectionMap) === null || _a === void 0 ? void 0 : _a.declaration) === exports.onlyDeclarationTag || !!host.prototype.collectionMap === false)
        (host.prototype.collectionMap = function (type, ...args) {
            var _a;
            const execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc(...args);
            return false;
        });
}
exports.MapUint = MapUint;
//# sourceMappingURL=util.js.map