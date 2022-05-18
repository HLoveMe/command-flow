import { BooleanObject, NumberObject } from "./Able/ObjectAble";
import { ControlFlow } from "./Control";
import { decide } from "./valueUtil";
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
var ObjectManager = /** @class */ (function () {
    function ObjectManager() {
    }
    ObjectManager.types = new Set();
    return ObjectManager;
}());
export { ObjectManager };
export function DefaultValue(value) {
    return function (target, propertyName) {
        target[propertyName] = value;
        ObjectManager.types.add(value);
    };
}
export function CompareUnit(host) {
    Object.keys(ControlFlow.CompareEnum).forEach(function (item) {
        var key = ControlFlow.CompareEnum[item];
        var comFunction = host.prototype[key];
        if (!comFunction) {
            host.prototype[key] = function () { return new BooleanObject(false); };
        }
    });
    !host.prototype.compare &&
        (host.prototype.compare = function (type, target) {
            var _a;
            var execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc.call(this, target);
            return false;
        });
}
export function CalcUnit(host) {
    Object.keys(ControlFlow.CalcEnum).forEach(function (item) {
        var key = ControlFlow.CalcEnum[item];
        var comFunction = host.prototype[key];
        if (!comFunction) {
            host.prototype[key] = function () { return new NumberObject(0); };
        }
    });
    !host.prototype.calc &&
        (host.prototype.calc = function (type, target) {
            var _a;
            var execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc.call(this, target);
            return false;
        });
}
export function ArrayUint(host) {
    Object.keys(ControlFlow.ArrayEnum).forEach(function (item) {
        var key = ControlFlow.ArrayEnum[item];
        var comFunction = host.prototype[key];
        if (!comFunction) {
            host.prototype[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var value = this.valueOf();
                var execFunc = value[key];
                var result;
                if (typeof execFunc === "function") {
                    result = execFunc.bind(value).apply(void 0, args);
                }
                else
                    result = value;
                return decide(result);
            };
        }
    });
    !host.prototype.collectionArray &&
        (host.prototype.collectionArray = function (type) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc.apply(void 0, args);
            return false;
        });
}
export function SetUint(host) {
    Object.keys(ControlFlow.SetEnum).forEach(function (item) {
        var key = ControlFlow.SetEnum[item];
        var comFunction = host.prototype[key];
        if (!comFunction) {
            host.prototype[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var value = this.valueOf();
                var execFunc = value[key];
                var result;
                if (typeof execFunc === "function") {
                    result = execFunc.bind(value).apply(void 0, args);
                }
                else
                    result = value;
                return decide(result);
            };
        }
    });
    !host.prototype.collectionArray &&
        (host.prototype.collectionArray = function (type) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc.apply(void 0, args);
            return false;
        });
}
export function MapUint(host) {
    Object.keys(ControlFlow.MapEnum).forEach(function (item) {
        var key = ControlFlow.MapEnum[item];
        var comFunction = host.prototype[key];
        if (!comFunction) {
            host.prototype[key] = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var value = this.valueOf();
                var execFunc = value[key];
                var result;
                if (typeof execFunc === "function") {
                    result = execFunc.bind(value).apply(void 0, args);
                }
                else
                    result = value;
                return decide(result);
            };
        }
    });
    !host.prototype.collectionArray &&
        (host.prototype.collectionArray = function (type) {
            var _a;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var execFunc = (_a = host.prototype[type]) === null || _a === void 0 ? void 0 : _a.bind(this);
            if (execFunc && typeof execFunc === "function")
                return execFunc.apply(void 0, args);
            return false;
        });
}
//# sourceMappingURL=util.js.map