import { ValueExtends } from '../../types';
import { ValueExec } from '../../types';
import { Value } from "../../../Object";
declare type DateExecInterface = ValueExec.ExecFunctionAble<Date>;
declare type BaseDateInterface = ValueExec.BlurExecInterface<DateExecInterface>;
interface _DateObjectAble extends Value.DateAble, BaseDateInterface {
}
declare type CustomConstructor = {
    new (source: Date): _DateObjectAble;
} & ValueExtends.Constructor<Date>;
/***

 */
declare type DateObjectAble = ValueExtends.WrapperReturnInterface<DateExecInterface> & Value.DateAble;
declare const DateObject: CustomConstructor;
export { DateObject, DateObjectAble };
//# sourceMappingURL=DateObject.d.ts.map