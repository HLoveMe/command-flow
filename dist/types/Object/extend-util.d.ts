import { ValueExtends } from './types';
/***
  创建新的包装对象

  type PromiseWrapper = ValueExtends.ExtendsType<Promise<number>>
  const PromiseConstruct = createExtendsConstruct(Promise<number>)
  const instance: PromiseWrapper = Reflect.construct(PromiseConstruct, [(res, rej) => { res(111)}])
  instance.then(()=>{})

 */
export declare function createExtendsConstruct<T, TC extends any = any /**暂不生效 */>(target: NewableFunction, exclude?: string[]): ValueExtends.Constructor<T, TC>;
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
export declare function createExtendsInstance<T>(target: Function, construct: any[], exclude?: string[]): ValueExtends.WrapperReturnInterface<T>;
//# sourceMappingURL=extend-util.d.ts.map