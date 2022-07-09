import { ObjectTarget } from './ObjectTarget';
export class NULLObject extends ObjectTarget {
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
//# sourceMappingURL=NULLObject.js.map