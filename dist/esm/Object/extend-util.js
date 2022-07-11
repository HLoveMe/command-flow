import { __decorate, __metadata } from "tslib";
import { Unit } from './util';
import * as Value from './Able';
var ExtendsMap;
/***
  创建新的包装对象

  type PromiseWrapper = ValueExtends.ExtendsType<Promise<number>>
  const PromiseConstruct = createExtendsConstruct(Promise<number>)
  const instance: PromiseWrapper = Reflect.construct(PromiseConstruct, [(res, rej) => { res(111)}])
  instance.then(()=>{})

 */
export function createExtendsConstruct(target, exclude = []) {
    if (!ExtendsMap)
        ExtendsMap = new Map();
    if (ExtendsMap.has(target))
        return ExtendsMap.get(target);
    const Enum = {};
    exclude = [...exclude, 'constructor', 'valueOf'];
    Object.keys(Object.getOwnPropertyDescriptors(target.prototype)).forEach(($1) => {
        if (!exclude.includes($1) && typeof $1 !== 'symbol') {
            Enum[$1] = $1;
        }
    });
    let KV = class KV extends Value.ObjectTarget {
        constructor(value = {}) {
            super();
            this._value = value !== null && value !== void 0 ? value : {};
        }
    };
    KV = __decorate([
        Unit(Enum),
        __metadata("design:paramtypes", [Object])
    ], KV);
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
export function createExtendsInstance(target, construct, exclude = []) {
    const DateDome = createExtendsConstruct(target, exclude);
    return Reflect.construct(DateDome, construct);
}
//# sourceMappingURL=extend-util.js.map