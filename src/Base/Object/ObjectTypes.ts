

export declare interface ArrayAble {
  len(): number;
  first(): any;
  last(): any;
}

export declare interface MapAble {
  len(): number;
}

export declare interface SetAble {
  len(): number;
}


export function attribute() {
  return function ($1: any, $2: string, descriptor: PropertyDescriptor) {
    ($1.attributes as Set<string>).add($2);
  }
}

export function Params(params: any) {
  return function (target: any, methodName: any, paramsIndex: any) {
    !target.$Meta && (target.$Meta = {});
    !target.$Meta[methodName] && (target.$Meta[methodName] = {});
    target.$Meta[methodName][paramsIndex] = params
  }
}