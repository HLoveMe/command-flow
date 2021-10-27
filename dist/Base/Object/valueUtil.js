"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decide = void 0;
var ObjectMap = null;
var decide = function (value) {
    if (ObjectMap === null) {
        var Value = require("./Able/ObjectAble");
        ObjectMap = {
            "[object Object]": Value.ObjectTarget,
            "[object Map]": Value.MapObject,
            "[object Set]": Value.SetObject,
            "[object Array]": Value.ArrayObject,
            "[object Boolean]": Value.BooleanObject,
            "[object Date]": Value.DateObject,
            "[object Number]": Value.NumberObject,
            "[object String]": Value.StringObject,
            "[object ArrayBuffer]": Value.DataObject,
            "[object Uint8Array]": Value.DataObject,
        };
    }
    var key = Object.prototype.toString.call(value);
    var Target = ObjectMap[key];
    if (Target) {
        return new Target(value);
    }
    return null;
};
exports.decide = decide;
//# sourceMappingURL=valueUtil.js.map