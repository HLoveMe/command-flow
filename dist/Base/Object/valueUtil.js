"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectAble_1 = require("./Able/ObjectAble");
var ObjectMap = {
    "[object Object]": ObjectAble_1.ObjectTarget,
    "[object Map]": ObjectAble_1.MapObject,
    "[object Set]": ObjectAble_1.SetObject,
    "[object Array]": ObjectAble_1.ArrayObject,
    //   "[object Boolean]": InOutValue.InOutBoolean,
    "[object Date]": ObjectAble_1.DateObject,
    "[object Number]": ObjectAble_1.NumberObject,
    "[object String]": ObjectAble_1.StringObject,
    "[object ArrayBuffer]": ObjectAble_1.DataObject,
};
//# sourceMappingURL=valueUtil.js.map