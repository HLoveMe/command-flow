
export declare interface ValueAble {
  valueOf(): any;
  equal(target: ValueAble): Boolean;
}
export declare interface ObjectAble extends ValueAble {

}
export declare interface ArrayAble<T> extends ValueAble {
  len(): number;
  first(): any;
  last(): any;
  valueOfIndex(index: number): T;
  valueOf(): Array<T>;
}

export declare interface MapAble<T, U> extends ValueAble {
  len(): number;
  get(key: T): U;
  valueOf(): Map<T, U>;
}

export declare interface SetAble<T> extends ValueAble {
  len(): number;
  valueOf(): Set<T>;
}

export declare interface NumberAble extends ValueAble {
  valueOf(): number;
}

export declare interface StringAble extends ValueAble {
  valueOf(): string;
}


export function attribute() {
  return function ($1: any, $2: string, descriptor: PropertyDescriptor) {
    ($1.constructor.attributes as Set<string>).add($2);
  }
}

export function Params(params: any) {
  return function (target: any, methodName: any, paramsIndex: any) {
    !target.$Meta && (target.$Meta = {});
    !target.$Meta[methodName] && (target.$Meta[methodName] = {});
    target.$Meta[methodName][paramsIndex] = params
  }
}