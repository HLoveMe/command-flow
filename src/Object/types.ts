export namespace Value {
  export type NULL = null | undefined;
  export interface ValueAble<V> {
    _value: V;
    valueOf(): V;
  }
  export interface ObjectAble<V> extends ValueAble<V> {
    json(): Value.StringAble;
    merge(target: ObjectAble<V>): ObjectAble<V>;
  }
  export interface ArrayAble<T>
    extends ValueAble<Array<T>>,
    ObjectAble<Array<T>> {
    len(): number;
    first(): T;
    last(): T;
    valueOfIndex(index: number): T;
    valueOf(): Array<T>;
  }

  export interface MapAble<T, U>
    extends ValueAble<Map<T, U>>,
    ObjectAble<Map<T, U>> {
    len(): number;
    valueOf(): Map<T, U>;
  }

  export interface SetAble<T> extends ValueAble<Set<T>>, ObjectAble<Set<T>> {
    len(): number;
    valueOf(): Set<T>;
  }

  export interface NumberAble extends ValueAble<number>, ObjectAble<number> {
    valueOf(): number;
  }

  export interface StringAble extends ValueAble<string>, ObjectAble<string> {
    valueOf(): string;
  }

  export interface BooleanAble extends ValueAble<boolean>, ObjectAble<boolean> {
    valueOf(): boolean;
  }

  export interface DateAble extends ValueAble<Date>, ObjectAble<Date> {
    timestamp(): number;
  }

  export interface DataAble
    extends ValueAble<ArrayBuffer>,
    ObjectAble<ArrayBuffer> {
    data(): ArrayBuffer;
  }

  export interface NullAble extends ValueAble<NULL>, ObjectAble<NULL> {
    valueOf(): null | undefined;
    isTruly(): boolean;
    isNull(): boolean;
    isUndefined(): boolean;
  }
  export interface Mixins<
    V extends Value.ObjectAble<any> = Value.ObjectAble<any>,
    U extends any = NULL
    > extends ValueAble<V | U> { }
}

export namespace ValueExtends {
  type KeyExclude<T, E extends string | number | symbol> = keyof Omit<T, E>;
  type ValueInclude<T, E> = {
    [K in keyof T]: T[K] extends E ? K : never;
  }[keyof T];
  type ValidKey<T, K extends string | number | symbol, E> = Extract<
    KeyExclude<T, K>,
    ValueInclude<T, E>
  >;
  type GetReturnWrapper<T> = T extends null | undefined
    ? Value.Mixins
    : T extends number
    ? Value.NumberAble
    : T extends string
    ? Value.StringAble
    : T extends boolean
    ? Value.BooleanAble
    : T extends Array<infer U>
    ? Value.ArrayAble<U>
    : T extends Map<infer K, infer U>
    ? Value.MapAble<K, U>
    : T extends Set<infer U>
    ? Value.SetAble<U>
    : T extends Date
    ? Value.DateAble
    : T extends ArrayBuffer
    ? Value.DataAble
    : Value.ObjectAble<T>
    | void
    ;

  type GetInterface<T, U extends string | number | symbol, E> = Pick<
    T,
    ValidKey<T, U, E>
  >;

  type ResetFunctionType<T extends (...args: any[]) => any> = T extends (
    ...args: infer P
  ) => infer R
    ? (...args: P) => GetReturnWrapper<R>
    : T;

  type CreateNewInterface<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ResetFunctionType<T[K]>
    : T[K];
  };
  export type Constructor<C, TC> = {
    new();
    new(value: C);
  };
  /***
   * 去掉指定'constructor' | 'valueOf'属性，并值类型为 (...args: any[]) => any
   * 
   * 将()=>any 转为 ()=>Value.ValueAble<any>
   */
  export type ExtendsType<T> = CreateNewInterface<
    GetInterface<T, 'constructor' | 'valueOf', (...args: any[]) => any>
  >;

}
