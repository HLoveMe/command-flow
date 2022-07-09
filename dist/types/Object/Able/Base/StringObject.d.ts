import { ValueExtends } from '../../types';
import { ValueExec } from '../../types';
import { Value } from "../../../Object";
import { NumberObjectAble } from './NumberObject';
declare type StringExecInterface = ValueExec.ExecFunctionAble<String, 'length'>;
declare type BaseStringInterface = ValueExec.BlurExecInterface<StringExecInterface>;
interface _StringObjectAble extends Value.StringAble, BaseStringInterface {
    get length(): NumberObjectAble;
}
declare type CustomConstructor = {
    new <T>(source: string): _StringObjectAble;
} & ValueExtends.Constructor<any[]>;
declare type StringObjectAble = ValueExtends.WrapperReturnInterface<StringExecInterface> & Value.StringAble & {
    get length(): NumberObjectAble;
};
declare const StringObject: CustomConstructor;
export { StringObject, StringObjectAble };
//# sourceMappingURL=StringObject.d.ts.map