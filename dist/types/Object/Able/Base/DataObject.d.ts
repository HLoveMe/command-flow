import { Value } from "../../../Object";
import { ObjectTarget } from "./ObjectTarget";
export declare class DataObject extends ObjectTarget<ArrayBuffer> implements Value.DataAble {
    _value: ArrayBuffer;
    constructor(value?: ArrayBuffer);
    data(): ArrayBuffer;
    valueOf(): ArrayBuffer;
}
//# sourceMappingURL=DataObject.d.ts.map