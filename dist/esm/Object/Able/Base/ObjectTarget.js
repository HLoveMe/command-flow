export class ObjectTarget {
    get [Symbol.toStringTag]() {
        return 'flow-object';
    }
    constructor(value = {}) {
        this._value = value;
    }
    valueOf() {
        return this._value;
    }
    json() {
        const { StringObject } = require("./StringObject");
        try {
            return new StringObject(JSON.stringify(this._value));
        }
        catch (error) {
            return new StringObject("{}");
        }
    }
}
//# sourceMappingURL=ObjectTarget.js.map