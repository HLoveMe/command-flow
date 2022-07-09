import { ObjectTarget } from "./ObjectTarget";
export class DataObject extends ObjectTarget {
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
//# sourceMappingURL=DataObject.js.map