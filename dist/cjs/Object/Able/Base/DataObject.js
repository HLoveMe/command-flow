"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataObject = void 0;
const ObjectTarget_1 = require("./ObjectTarget");
class DataObject extends ObjectTarget_1.ObjectTarget {
    constructor(value = new ArrayBuffer(0)) {
        super(value);
        this._value = value;
    }
    data() {
        return this.valueOf();
    }
    // @attribute()
    valueOf() {
        return this._value;
    }
}
exports.DataObject = DataObject;
