export function attribute() {
  return function ($1: any, $2: string, descriptor: PropertyDescriptor) {
    ($1.constructor.attributes as Set<string>).add($2);
  };
}

export function Params(params: any) {
  return function (target: any, methodName: any, paramsIndex: any) {
    !target.$Meta && (target.$Meta = {});
    !target.$Meta[methodName] && (target.$Meta[methodName] = {});
    target.$Meta[methodName][paramsIndex] = params;
  };
}
export class ObjectManager {
  static types: Set<string> = new Set();
}

export function DefaultValue(value: string) {
  return function (target: any, propertyName: string) {
    target[propertyName] = value;
    ObjectManager.types.add(value);
  };
}
