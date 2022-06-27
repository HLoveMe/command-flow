import { Unit } from '../../util';
import * as Value from '../../Able';
import { ValueExtends } from '../../types';

var ExtendsMap: Map<any, ValueExtends.Constructor<any, {}>>;

/***
  创建新的包装对象

  type PromiseWrapper = ValueExtends.ExtendsType<Promise<number>>
  const PromiseConstruct = createExtendsConstruct(Promise<number>)
  const instance: PromiseWrapper = Reflect.construct(PromiseConstruct, [(res, rej) => { res(111)}])
  instance.then(()=>{})

 */

export function createExtendsConstruct<T, TC extends any = any/**暂不生效 */>(
  target: NewableFunction,
  exclude: string[] = []
): ValueExtends.Constructor<T, TC> {
  if (!ExtendsMap) ExtendsMap = new Map<any, ValueExtends.Constructor<any, {}>>()
  if (ExtendsMap.has(target))
    return ExtendsMap.get(target) as unknown as ValueExtends.Constructor<T, TC>;
  const Enum = {};
  const tempTarget = Reflect.construct(target as NewableFunction, []);
  exclude = [...exclude, 'constructor', 'valueOf'];
  Object.keys(Object.getOwnPropertyDescriptors(target.prototype)).forEach(($1) => {
    if (!exclude.includes($1) && typeof $1 !== 'symbol') {
      Enum[$1] = $1;
    }
  });
  const result: RegExpExecArray | null = /\[object (\w+)\]/g.exec(
    Object.prototype.toString.call(tempTarget)
  );
  if (!!result === false) return Object as unknown as any;
  @Unit(Enum, `exec${result[1]}`)
  class KV extends Value.ObjectTarget<T> {
    declare _value: T;
    constructor(value: T = null) {
      super();
      this._value = value ?? ({} as any as T);
    }
  }
  ExtendsMap.set(target, KV);
  return KV;
}

/**
 * @param target  Date
 * @param construct ['2021-06-23']
 * @param exclude 
 * @returns 
 * 
 * 
  简化 createExtendsConstruct

  type PromiseWrapper = ValueExtends.ExtendsType<Promise<number>>
  const aa: PromiseWrapper = createExtendsInstance<Promise<number>>(Promise, [(res, rej) => { setTimeout(() => res(111), 2000) }])
  aa.then(res => { })

 */
export function createExtendsInstance<T>(
  target: Function,
  construct: any[],
  exclude: string[] = []
): ValueExtends.WrapperReturnInterface<T> {
  type DateType = ValueExtends.WrapperReturnInterface<T>;
  const DateDome = createExtendsConstruct(target, exclude);
  return Reflect.construct(DateDome, construct) as DateType;
}
