import { BooleanObject, NumberObject } from './Able/ObjectAble';
import { Value } from '../Types';
import { ControlFlow } from './Control';
import { decide } from './valueUtil';

export const onlyDeclarationTag: string = 'onlyDeclaration';

// export function attribute() {
//   return function ($1: any, $2: string, descriptor: PropertyDescriptor) {
//     ($1.constructor.attributes as Set<string>).add($2);
//   };
// }

// export function Params(params: any) {
//   return function (target: any, methodName: any, paramsIndex: any) {
//     !target.$Meta && (target.$Meta = {});
//     !target.$Meta[methodName] && (target.$Meta[methodName] = {});
//     target.$Meta[methodName][paramsIndex] = params;
//   };
// }
// export class ObjectManager {
//   static types: Set<string> = new Set();
// }

// export function DefaultValue(value: string) {
//   return function (target: any, propertyName: string) {
//     target[propertyName] = value;
//     ObjectManager.types.add(value);
//   };
// }
/**
 * 声明 方式无效 仅仅作为标记
 */
export function onlyDeclaration(
  target: any,
  name: string,
  dec: PropertyDescriptor
) {
  dec.value.declaration = onlyDeclarationTag;
}

export function CompareUnit(host: any) {
  Object.keys(ControlFlow.CompareEnum).forEach((item) => {
    const key = ControlFlow.CompareEnum[item];
    const comFunction = host.prototype[key];
    if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
      host.prototype[key] = () => new BooleanObject(false);
    }
  });
  if (
    host.prototype.compare?.declaration === onlyDeclarationTag ||
    !!host.prototype.compare === false
  )
    host.prototype.compare = function (
      type: ControlFlow.CompareEnum,
      target: Value.ValueAble<any>
    ) {
      const execFunc = host.prototype[type]?.bind(
        this
      ) as ControlFlow.CompareFunction;
      if (execFunc && typeof execFunc === 'function')
        return execFunc.call(this, target);
      return false;
    };
}

export function CalcUnit(host: any) {
  Object.keys(ControlFlow.CalcEnum).forEach((item) => {
    const key = ControlFlow.CalcEnum[item];
    const comFunction = host.prototype[key];
    if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
      host.prototype[key] = () => new NumberObject(0);
    }
  });
  if (
    host.prototype.calc?.declaration === onlyDeclarationTag ||
    !!host.prototype.calc === false
  )
    host.prototype.calc = function (
      type: ControlFlow.CalcEnum,
      target: Value.ValueAble<any>
    ) {
      const execFunc = host.prototype[type]?.bind(
        this
      ) as ControlFlow.CalcFunction;
      if (execFunc && typeof execFunc === 'function')
        return execFunc.call(this, target);
      return false;
    };
}

export function ArrayUint(host: any) {
  Object.keys(ControlFlow.ArrayEnum).forEach((item) => {
    const key = ControlFlow.ArrayEnum[item];
    const comFunction = host.prototype[key];
    if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
      host.prototype[key] = function (...args: any[]) {
        const value = (this as Value.ArrayAble<any>).valueOf();
        const execFunc = value[key];
        let result;
        if (typeof execFunc === 'function') {
          result = execFunc.bind(value)(...args);
        } else result = value;
        return decide(result);
      };
    }
  });
  if (
    host.prototype.collectionArray?.declaration === onlyDeclarationTag ||
    !!host.prototype.collectionArray === false
  )
    host.prototype.collectionArray = function (
      type: ControlFlow.ArrayEnum,
      ...args: any[]
    ) {
      const execFunc = host.prototype[type]?.bind(
        this
      ) as ControlFlow.ArrayFunction<any>;
      if (execFunc && typeof execFunc === 'function') return execFunc(...args);
      return false;
    };
}

export function SetUint(host: any) {
  Object.keys(ControlFlow.SetEnum).forEach((item) => {
    const key = ControlFlow.SetEnum[item];
    const comFunction = host.prototype[key];
    if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
      host.prototype[key] = function (...args: any[]) {
        const value = (this as Value.SetAble<any>).valueOf();
        const execFunc = value[key];
        let result: any;
        if (typeof execFunc === 'function') {
          result = execFunc.bind(value)(...args);
        } else result = value;
        return decide(result);
      };
    }
  });
  if (
    host.prototype.collectionSet?.declaration === onlyDeclarationTag ||
    !!host.prototype.collectionSet === false
  )
    host.prototype.collectionSet = function (
      type: ControlFlow.SetEnum,
      ...args: any[]
    ) {
      const execFunc = host.prototype[type]?.bind(
        this
      ) as ControlFlow.SetFunction<any>;
      if (execFunc && typeof execFunc === 'function') return execFunc(...args);
      return false;
    };
}

export function MapUint(host: any) {
  Object.keys(ControlFlow.MapEnum).forEach((item) => {
    const key = ControlFlow.MapEnum[item];
    const comFunction = host.prototype[key];
    if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
      host.prototype[key] = function (...args: any[]) {
        const value = (this as Value.MapAble<any, any>).valueOf();
        const execFunc = value[key];
        let result;
        if (typeof execFunc === 'function') {
          result = execFunc.bind(value)(...args);
        } else result = value;
        return decide(result);
      };
    }
  });
  if (
    host.prototype.collectionMap?.declaration === onlyDeclarationTag ||
    !!host.prototype.collectionMap === false
  )
    host.prototype.collectionMap = function (
      type: ControlFlow.MapEnum,
      ...args: any[]
    ) {
      const execFunc = host.prototype[type]?.bind(
        this
      ) as ControlFlow.MapFunction<any>;
      if (execFunc && typeof execFunc === 'function') return execFunc(...args);
      return false;
    };
}

export function StringUint(host: any) {
  Object.keys(ControlFlow.StringEnum).forEach((item) => {
    const key = ControlFlow.StringEnum[item];
    const comFunction = host.prototype[key];
    if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
      host.prototype[key] = function (...args: any[]) {
        const value = (this as Value.StringAble).valueOf();
        const execFunc = value[key];
        let result;
        if (typeof execFunc === 'function') {
          result = (execFunc as Function).bind(value)(...args);
        } else result = value;
        return decide(result);
      };
    }
  });

  if (
    host.prototype.execString?.declaration === onlyDeclarationTag ||
    !!host.prototype.execString === false
  )
    host.prototype.execString = function (
      type: ControlFlow.StringEnum,
      ...args: any[]
    ) {
      const execFunc = host.prototype[type]?.bind(
        this
      ) as ControlFlow.StringExec;
      if (execFunc && typeof execFunc === 'function') return execFunc(...args);
      return false;
    };
}


export function NumberUint(host: any) {
  Object.keys(ControlFlow.NumberEnum).forEach((item) => {
    const key = ControlFlow.NumberEnum[item];
    const comFunction = host.prototype[key];
    if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
      host.prototype[key] = function (...args: any[]) {
        const value = (this as Value.NumberAble).valueOf();
        const execFunc = value[key];
        let result;
        if (typeof execFunc === 'function') {
          result = (execFunc as Function).bind(value)(...args);
        } else result = value;
        return decide(result);
      };
    }
  });

  if (
    host.prototype.execNumber?.declaration === onlyDeclarationTag ||
    !!host.prototype.execNumber === false
  )
    host.prototype.execNumber = function (
      type: ControlFlow.NumberEnum,
      ...args: any[]
    ) {
      const execFunc = host.prototype[type]?.bind(
        this
      ) as ControlFlow.NumberExec;
      if (execFunc && typeof execFunc === 'function') return execFunc(...args);
      return false;
    };
}


export function DateUint(host: any) {
  Object.keys(ControlFlow.DateEnum).forEach((item) => {
    const key = ControlFlow.DateEnum[item];
    const comFunction = host.prototype[key];
    if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
      host.prototype[key] = function (...args: any[]) {
        const value = (this as Value.DataAble).valueOf();
        const execFunc = value[key];
        let result;
        if (typeof execFunc === 'function') {
          result = (execFunc as Function).bind(value)(...args);
        } else result = value;
        return decide(result);
      };
    }
  });

  if (
    host.prototype.execDate?.declaration === onlyDeclarationTag ||
    !!host.prototype.execDate === false
  )
    host.prototype.execDate = function (
      type: ControlFlow.DateEnum,
      ...args: any[]
    ) {
      const execFunc = host.prototype[type]?.bind(
        this
      ) as ControlFlow.DateExec;
      if (execFunc && typeof execFunc === 'function') return execFunc(...args);
      return false;
    };
}

export function Unit(target: Object, execName: string) {
  return function (host: any) {
    Object.keys(target).forEach((item) => {
      const key = target[item];
      const comFunction = host.prototype[key];
      if (!comFunction || comFunction.declaration === onlyDeclarationTag) {
        host.prototype[key] = function (...args: any[]) {
          const value = (this as any).valueOf();
          const execFunc = value[key];
          let result;
          if (typeof execFunc === 'function') {
            result = (execFunc as Function).bind(value)(...args);
          } else result = value;
          return decide(result);
        };
      }
    });

    if (
      host.prototype[execName]?.declaration === onlyDeclarationTag ||
      !!host.prototype[execName] === false
    )
      host.prototype[execName] = function (
        type: string,
        ...args: any[]
      ) {
        const execFunc = host.prototype[type]?.bind(
          this
        ) as (...args: any[]) => void;
        if (execFunc && typeof execFunc === 'function') return execFunc(...args);
        return false;
      };
  }
}