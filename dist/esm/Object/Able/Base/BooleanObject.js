import { ObjectTarget } from './ObjectTarget';
export class BooleanObject extends ObjectTarget {
    static type;
    constructor(value = false) {
        super(value);
        this._value = value;
    }
    valueOf() {
        return !!this._value;
    }
}
//# sourceMappingURL=BooleanObject.js.map