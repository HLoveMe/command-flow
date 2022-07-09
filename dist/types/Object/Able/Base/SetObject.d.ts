import { ValueExtends } from '../../types';
import { ValueExec } from '../../types';
import { Value } from "../../../Object";
import { NumberObjectAble } from './NumberObject';
declare type SetExecInterface<K> = ValueExec.ExecFunctionAble<Set<K>, 'size'>;
declare type BaseSetInterface<K> = ValueExec.BlurExecInterface<SetExecInterface<K>>;
interface _SetObjectAble<K> extends Value.SetAble<K>, BaseSetInterface<K> {
    get size(): NumberObjectAble;
}
declare type CustomConstructor = {
    new <K>(map: Set<K>): _SetObjectAble<K>;
    new <K>(source: Array<K>): _SetObjectAble<K>;
} & ValueExtends.Constructor<Set<any>>;
declare type SetObjectAble<K> = ValueExtends.WrapperReturnInterface<SetExecInterface<K>> & Value.SetAble<K> & {
    get size(): NumberObjectAble;
};
declare const SetObject: CustomConstructor;
export { SetObject, SetObjectAble };
//# sourceMappingURL=SetObject.d.ts.map