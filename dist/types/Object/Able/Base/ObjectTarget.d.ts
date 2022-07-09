import { Value } from "../../../Object";
import { StringObjectAble } from './StringObject';
export declare class ObjectTarget<T> implements Value.ObjectAble<T> {
    get [Symbol.toStringTag](): string;
    _value: T;
    constructor(value?: T);
    valueOf(): T;
    json(): StringObjectAble;
}
//# sourceMappingURL=ObjectTarget.d.ts.map