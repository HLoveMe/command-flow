import { ControlFlow } from '../Control';
import { CalcUnit, CompareUnit, onlyDeclaration } from '../../util';
import { Value } from '../../../Object';
import { BooleanObject } from './BooleanObject';
import { createExtendsConstruct } from '../../extend-util';
import { ValueExtends } from '../../types';
import { ValueExec } from '../../types';

type NumberExecInterface = ValueExec.ExecFunctionAble<Number>;
type BaseNumberInterface = ValueExec.BlurExecInterface<NumberExecInterface>;
const NumberWrapper = createExtendsConstruct<Number>(Number);
interface _NumberObjectAble
  extends Value.NumberAble,
  BaseNumberInterface,
  ControlFlow.Compare<Value.NumberAble>,
  ControlFlow.Calc<Value.NumberAble> { }

type CustomConstructor = {
  new(count: number): _NumberObjectAble;
} & ValueExtends.Constructor<number>;

type NumberObjectAble =
  ValueExtends.WrapperReturnInterface<NumberExecInterface> &
  Value.NumberAble & {} & ControlFlow.Compare<Value.NumberAble> &
  ControlFlow.Calc<Value.NumberAble>;

@CalcUnit
@CompareUnit
class _NumberObject
  extends NumberWrapper
  implements
  Value.NumberAble,
  ControlFlow.Compare<Value.NumberAble>,
  ControlFlow.Calc<Value.NumberAble>
{
  static type: string;
  declare _value: number;
  constructor(value: number = 1) {
    super(value);
    this._value = value;
  }
  get [Symbol.toStringTag](): string {
    return super[Symbol.toStringTag]
  }

  valueOf(): number {
    return this._value;
  }

  json(): Value.StringAble {
    return super.json();
  }

  @onlyDeclaration
  compare(type: string, target: Value.NumberAble): BooleanObject {
    return new BooleanObject(false);
  }

  more(target: Value.NumberAble): BooleanObject {
    return new BooleanObject(this._value > target._value);
  }
  equal(target: Value.NumberAble): BooleanObject {
    return new BooleanObject(this._value === target._value);
  }
  less(target: Value.NumberAble): BooleanObject {
    return new BooleanObject(this._value < target._value);
  }
  moreEqual(target: Value.NumberAble): BooleanObject {
    return new BooleanObject(this._value >= target._value);
  }
  lessEqual(target: Value.NumberAble): BooleanObject {
    return new BooleanObject(this._value <= target._value);
  }

  @onlyDeclaration
  calc(type: string, target: Value.NumberAble): _NumberObject {
    return new _NumberObject(0);
  }

  plus(target: Value.NumberAble): _NumberObject {
    return new _NumberObject(this._value + target._value);
  }
  reduce(target: Value.NumberAble): _NumberObject {
    return new _NumberObject(this._value - target._value);
  }
  multi(target: Value.NumberAble): _NumberObject {
    return new _NumberObject(this._value * target._value);
  }
  divide(target: Value.NumberAble): _NumberObject {
    return new _NumberObject(
      target._value === 0 ? Infinity : this._value / target._value
    );
  }
}
const NumberObject = _NumberObject as unknown as CustomConstructor;

export { NumberObject, NumberObjectAble };