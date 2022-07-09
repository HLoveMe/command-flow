"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NULLObject = void 0;
const ObjectTarget_1 = require("./ObjectTarget");
class NULLObject extends ObjectTarget_1.ObjectTarget {
    constructor(value = null) {
        super(value);
        this._value = value;
    }
    // @attribute()
    valueOf() {
        return this._value;
    }
    merge(target) {
        return new NULLObject(null);
    }
    isTruly() {
        return !!this._value;
    }
    isNull() {
        return this._value === null;
    }
    isUndefined() {
        return this._value === undefined;
    }
}
exports.NULLObject = NULLObject;
