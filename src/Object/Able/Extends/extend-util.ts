
import { Unit } from '../../util'
import * as Value from "../../Able";
import { ValueExtends } from '../../types'


const ExtendsMap = new Map<any, Function>();

/***
  创建新的包装对象

  type PromiseWrapper = ValueExtends.ExtendsType<Promise<number>>
  const PromiseConstruct = createExtendsConstruct(Promise<number>)
  const instance: PromiseWrapper = Reflect.construct(PromiseConstruct, [(res, rej) => { res(111)}])
  instance.then(()=>{})

 */
export function createExtendsConstruct<T extends any>(target: T, exclude: string[] = []): Function {
  if (ExtendsMap.has(target)) return ExtendsMap.get(target) as unknown as Function
  const Enum = {};
  const tempTarget = Reflect.construct(target as Function, [])
  exclude = [...exclude, 'constructor', 'valueOf'];
  Object.keys(tempTarget).forEach($1 => {
    if (!exclude.includes($1) && typeof $1 !== 'symbol') {
      Enum[$1] = $1;
    }
  })
  const result: RegExpExecArray | null = /\[object (\w+)\]/g.exec(Object.prototype.toString.call(tempTarget));
  if (!!result === false) return Function;
  @Unit(Enum, `exec${result[1]}`)
  class KV extends Value.ObjectTarget<T> {
    declare _value: T;
  }
  ExtendsMap.set(target, KV);
  return KV
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
  const aa: PromiseWrapper = createExtendsInstance<Promise<any>>(Promise, [(res, rej) => { setTimeout(() => res(111), 2000) }])
  aa.then(res => { })

 */
export function createExtendsInstance<T>(target: Function, construct: any[], exclude: string[] = []): ValueExtends.ExtendsType<T> {
  type DateType = ValueExtends.ExtendsType<T>
  const DateDome = createExtendsConstruct(target)
  return Reflect.construct(DateDome, construct) as DateType
}


