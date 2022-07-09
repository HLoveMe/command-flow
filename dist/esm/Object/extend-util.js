var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
        constructor(value = null) {
            super();
            this._value = value ?? {};
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