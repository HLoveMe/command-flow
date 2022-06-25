import { createExtendsConstruct } from "./extend-util";
import { ValueExtends } from '../../types'

const PromiseWrapper = createExtendsConstruct<Promise<any>, PromiseConstructor>(global.Promise, [])
type PromiseInterface = ValueExtends.ExtendsType<Promise<any>>

// const a: PromiseInterface = new PromiseWrapper(new Promise(()=>{}));
// a.finally().valueOf().catch(()=>{})
export {
  PromiseInterface, PromiseWrapper
}