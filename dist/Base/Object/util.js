"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalcUnit = exports.CompareUnit = exports.DefaultValue = exports.ObjectManager = exports.Params = exports.attribute = void 0;
var __1 = require("..");
var Control_1 = require("./Control");
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
var ObjectManager = /** @class */ (function () {
    function ObjectManager() {
    }
    ObjectManager.types = new Set();
    return ObjectManager;
}());
exports.ObjectManager = ObjectManager;
function DefaultValue(value) {
    return function (target, propertyName) {
        target[propertyName] = value;
        ObjectManager.types.add(value);
    };
}
exports.DefaultValue = DefaultValue;
function CompareUnit(host) {
    Object.keys(Control_1.ControlFlow.CompareEnum).forEach(function (item) {
        var key = Control_1.ControlFlow.CompareEnum[item];
        var comFunction = host.prototype[key];
        if (!comFunction) {
            host.prototype[key] = function () { return new __1.BooleanObject(false); };
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
exports.CompareUnit = CompareUnit;
function CalcUnit(host) {
    Object.keys(Control_1.ControlFlow.CalcEnum).forEach(function (item) {
        var key = Control_1.ControlFlow.CalcEnum[item];
        var comFunction = host.prototype[key];
        if (!comFunction) {
            host.prototype[key] = function () { return new __1.NumberObject(0); };
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
exports.CalcUnit = CalcUnit;
//# sourceMappingURL=util.js.map