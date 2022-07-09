import { ValueExtends } from '../../types';
import { ValueExec } from '../../types';
import { Value } from "../../../Object";
import { NumberObjectAble } from './NumberObject';
declare type ArrayExecInterface<T> = ValueExec.ExecFunctionAble<T[], 'length'>;
declare type BaseArrayInterface<T> = ValueExec.BlurExecInterface<ArrayExecInterface<T>>;
interface _ArrayObjectAble<T extends any = any> extends Value.ArrayAble<T>, BaseArrayInterface<T> {
    get length(): NumberObjectAble;
}
declare type CustomConstructor = {
    new <T>(...args: any[]): _ArrayObjectAble<T>;
    new <T>(count: number): _ArrayObjectAble<T>;
} & ValueExtends.Constructor<any[]>;
declare type ArrayObjectAble<T> = ValueExtends.WrapperReturnInterface<ArrayExecInterface<T>> & Value.ArrayAble<T> & {
    get length(): NumberObjectAble;
};
declare const ArrayObject: CustomConstructor;
export { ArrayObject, ArrayObjectAble };
//# sourceMappingURL=ArrayObject.d.ts.map