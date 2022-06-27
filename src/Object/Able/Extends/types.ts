
type KeyType = string | number | symbol

type ExcludeKeys = number | typeof Symbol.iterator | typeof Symbol.unscopables | 'toString' | 'toLocaleString' | 'constructor' | 'valueOf'

type KeyExclude<T, E extends KeyType = never, DE extends KeyType = ExcludeKeys | E> = keyof Omit<T, DE>;

declare type Exec<T, E extends KeyType = never, KS extends KeyType = KeyExclude<T, E>> = (key: KS, ...args: any[]) => any

type ExtendsFunction<T, E extends KeyType> = {
  [K in KeyExclude<T, E | ExcludeKeys>]:
  T[K] extends (...args: [infer P, ...infer P2]) => any ?
  (P extends (...args: any[]) => any ?
    (...args: [(...args: any[]) => any, ...P2]) => any :
    (...args: [P, ...P2]) => any) :
  T[K]
}
/**
 * 生成初始 {execFunction:()=>{},需要的函数}
 */
export type ExecFunctionAble<T, E extends KeyType> = { execFunction: Exec<T, E> } & ExtendsFunction<T, E>