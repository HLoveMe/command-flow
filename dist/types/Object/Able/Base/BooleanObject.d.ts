import { Value } from '../../../Object';
import { ObjectTarget } from './ObjectTarget';
export declare class BooleanObject extends ObjectTarget<boolean> implements Value.BooleanAble {
    static type: string;
    _value: boolean;
    constructor(value?: boolean);
    valueOf(): boolean;
}
//# sourceMappingURL=BooleanObject.d.ts.map