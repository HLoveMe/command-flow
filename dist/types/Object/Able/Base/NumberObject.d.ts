import { ControlFlow } from '../Control';
import { Value } from '../../../Object';
import { ValueExtends } from '../../types';
import { ValueExec } from '../../types';
declare type NumberExecInterface = ValueExec.ExecFunctionAble<Number>;
declare type BaseNumberInterface = ValueExec.BlurExecInterface<NumberExecInterface>;
interface _NumberObjectAble extends Value.NumberAble, BaseNumberInterface, ControlFlow.Compare<Value.NumberAble>, ControlFlow.Calc<Value.NumberAble> {
}
declare type CustomConstructor = {
    new (count: number): _NumberObjectAble;
} & ValueExtends.Constructor<number>;
declare type NumberObjectAble = ValueExtends.WrapperReturnInterface<NumberExecInterface> & Value.NumberAble & {} & ControlFlow.Compare<Value.NumberAble> & ControlFlow.Calc<Value.NumberAble>;
declare const NumberObject: CustomConstructor;
export { NumberObject, NumberObjectAble };
//# sourceMappingURL=NumberObject.d.ts.map