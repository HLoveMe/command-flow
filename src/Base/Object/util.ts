import { BooleanObject, NumberObject } from "./Able/ObjectAble";
import { Value } from "../Types";
import { ControlFlow } from "./Control";

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

export function CompareUnit(host: any) {
  Object.keys(ControlFlow.CompareEnum).forEach((item) => {
    const key = ControlFlow.CompareEnum[item];
    const comFunction = host.prototype[key];
    if (!comFunction) {
      host.prototype[key] = () => new BooleanObject(false);
    }
  });
  !host.prototype.compare &&
    (host.prototype.compare = function (
      type: ControlFlow.CompareEnum,
      target: Value.ValueAble<any>
    ) {
      const execFunc = host.prototype[type]?.bind(
        this
      ) as ControlFlow.CompareFunction;
      if (execFunc && typeof execFunc === "function")
        return execFunc.call(this, target);
      return false;
    });
}

export function CalcUnit(host: any) {
  Object.keys(ControlFlow.CalcEnum).forEach((item) => {
    const key = ControlFlow.CalcEnum[item];
    const comFunction = host.prototype[key];
    if (!comFunction) {
      host.prototype[key] = () => new NumberObject(0);
    }
  });
  !host.prototype.calc &&
    (host.prototype.calc = function (
      type: ControlFlow.CalcEnum,
      target: Value.ValueAble<any>
    ) {
      const execFunc = host.prototype[type]?.bind(
        this
      ) as ControlFlow.CalcFunction;
      if (execFunc && typeof execFunc === "function")
        return execFunc.call(this, target);
      return false;
    });
}
