// import { ControlFlow } from '../Control';
// import { onlyDeclaration, Unit } from '../../util';
// import { Value } from '../../../Object';
// import { ObjectTarget } from './ObjectTarget';
// import { NumberObject } from './NumberObject';
// import { decide } from '../../valueUtil';

// @Unit(ControlFlow.SetEnum)
// export class SetObject<T>
//   extends ObjectTarget<Set<T>>
//   implements Value.SetAble<T>, ControlFlow.CollectionSet<T>
// {
//   constructor(value?: Set<T> | Array<T>) {
//     const init = !!value
//       ? Array.isArray(value)
//         ? new Set(value)
//         : value
//       : new Set<T>();
//     super(init);
//     this._value = init;
//   }
//   // @attribute()
//   len(): number {
//     return this._value.size;
//   }

//   valueOf(): Set<T> {
//     return this._value;
//   }

//   merge(target: SetObject<T>): SetObject<T> {
//     const newSet = new Set<T>();
//     this._value.forEach(($1) => newSet.add($1));
//     target.forEach(($1) => newSet.add($1));
//     new Set().keys;
//     return new SetObject(newSet);
//   }

//   @onlyDeclaration
//   execFunction(key: ControlFlow.SetEnum, ...args: any[]): any {
//     return null as any;
//   }
//   @onlyDeclaration
//   has(value: T): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   add(value: T): this {
//     return this;
//   }
//   @onlyDeclaration
//   delete(value: T): Value.BooleanAble {
//     return null as any;
//   }
//   @onlyDeclaration
//   clear(): void {
//     return null as any;
//   }

//   @onlyDeclaration
//   forEach(
//     callbackfn: (value: T, value2: T, set: Set<T>) => void,
//     thisArg?: any
//   ): void {
//     return null as any;
//   }

//   @onlyDeclaration
//   entries(): Value.ObjectAble<IterableIterator<[T, T]>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   values(): Value.ObjectAble<IterableIterator<T>> {
//     return null as any;
//   }
//   @onlyDeclaration
//   keys(): Value.ObjectAble<IterableIterator<T>> {
//     return null as any;
//   }

//   get size(): Value.NumberAble {
//     return decide(this._value.size) as NumberObject;
//   }
// }

import { createExtendsConstruct } from '../../extend-util'
import { ValueExtends } from '../../types';
import { ValueExec } from '../../types';
import { decide } from '../../valueUtil';
import { Value } from "../../../Object";
import { NumberObjectAble } from './NumberObject';

type SetExecInterface<K> = ValueExec.ExecFunctionAble<Set<K>, 'size'>;
type BaseSetInterface<K> = ValueExec.BlurExecInterface<SetExecInterface<K>>
const SetWrapper = createExtendsConstruct<Set<any>>(Set, ['size']);

class _SetObject<K> extends SetWrapper {
  declare _value: Set<K>
  constructor(source: Set<K> | Array<K>) {
    super();
    this._value = new Set(source)
  }
  len(): number {
    return this._value.size;
  }
  valueOf(): Set<K> {
    return this._value;
  }
  get size(): NumberObjectAble {
    return decide(this._value.size) as NumberObjectAble;
  }
}

interface _SetObjectAble<K>
  extends Value.SetAble<K>, BaseSetInterface<K> { get size(): NumberObjectAble }
type CustomConstructor = { new <K>(map: Set<K>): _SetObjectAble<K>; new <K>(source: Array<K>): _SetObjectAble<K> } & ValueExtends.Constructor<Set<any>>;


type SetObjectAble<K> = ValueExtends.WrapperReturnInterface<SetExecInterface<K>> & Value.SetAble<K> & { get size(): NumberObjectAble }
const SetObject = _SetObject as unknown as CustomConstructor;

export {
  SetObject,
  SetObjectAble
}