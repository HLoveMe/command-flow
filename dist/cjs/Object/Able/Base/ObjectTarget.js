"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectTarget = void 0;
var ObjectTarget = /** @class */ (function () {
    function ObjectTarget(value) {
        if (value === void 0) { value = {}; }
        this._value = value;
    }
    Object.defineProperty(ObjectTarget.prototype, Symbol.toStringTag, {
        get: function () {
            return 'flow-object';
        },
        enumerable: false,
        configurable: true
    });
    ObjectTarget.prototype.valueOf = function () {
        return this._value;
    };
    ObjectTarget.prototype.json = function () {
        var StringObject = require("./StringObject").StringObject;
        try {
            return new StringObject(JSON.stringify(this._value));
        }
        catch (error) {
            return new StringObject("{}");
        }
    };
    return ObjectTarget;
}());
exports.ObjectTarget = ObjectTarget;
