"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooleanObject = void 0;
const ObjectTarget_1 = require("./ObjectTarget");
class BooleanObject extends ObjectTarget_1.ObjectTarget {
    static type;
    constructor(value = false) {
        super(value);
        this._value = value;
    }
    valueOf() {
        return !!this._value;
    }
}
exports.BooleanObject = BooleanObject;
