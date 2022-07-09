import { Value } from '../..';
import { ObjectTarget } from './ObjectTarget';
export declare class NULLObject extends ObjectTarget<Value.NULL> implements Value.NUllAble {
    _value: Value.NULL;
    constructor(value?: Value.NULL);
    valueOf(): Value.NULL;
    merge(target: Value.ObjectAble<Value.NULL>): any;
    isTruly(): boolean;
    isNull(): boolean;
    isUndefined(): boolean;
}
//# sourceMappingURL=NULLObject.d.ts.map