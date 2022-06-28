type isEqual<X, Y> = [X] extends [Y]
  ? [Y] extends [X]
  ? true
  : false
  : false;

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
  type KeyType = string | number | symbol;
  type KeyExclude<T, E extends KeyType> = keyof Omit<T, E>;
  type ValueInclude<T, E> = {
    [K in keyof T]: T[K] extends E ? K : never;
  }[keyof T];
  type ValidKey<T, K extends KeyType, E> = Extract<
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
    : Value.ObjectAble<T>;

  type GetInterface<T, U extends KeyType, E> = Pick<T, ValidKey<T, U, E>>;

  type ResetFunctionType<T extends (...args: any[]) => any> = T extends (
    ...args: infer P
  ) => infer R
    ? (...args: P) => isEqual<R, unknown> extends true ? void : GetReturnWrapper<R>
    : T;

  type CreateInterface<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ResetFunctionType<T[K]>
    : T[K];
  };
  export type Constructor<C, TC extends any = any> = {
    new();
    new(value: C);
  };
  /***
   * 去掉指定'constructor' | 'valueOf'属性，并值类型为 (...args: any[]) => any
   *
   * 将()=>any 转为 ()=>Value.ValueAble<any>
   */
  export type WrapperReturnInterface<T> = CreateInterface<
    GetInterface<T, 'constructor' | 'valueOf', (...args: any[]) => any>
  >;
}

export namespace ValueExec {
  type KeyType = string | number | symbol;

  type ExcludeKeys =
    | number
    | typeof Symbol.iterator
    | typeof Symbol.unscopables
    | 'toString'
    | 'toLocaleString'
    | 'constructor'
    | 'valueOf';

  type KeyExclude<
    T,
    E extends KeyType = never,
    DE extends KeyType = ExcludeKeys | E
    > = keyof Omit<T, DE>;

  declare type Exec<
    T,
    E extends KeyType = never,
    KS extends KeyType = KeyExclude<T, E>
    > = (key: KS, ...args: any[]) => any;


  type ExtendsFunction<T, E extends KeyType> = {
    [K in KeyExclude<T, E | ExcludeKeys>]: T[K] extends (
      ...args: [infer P, ...infer P2]
    ) => infer R
    ? isEqual<P, unknown> extends true
    ? () => R
    : P extends (...args: any[]) => any
    ? (...args: [(...args: any[]) => any, ...P2]) => R
    : (...args: [P, ...P2]) => R
    : T[K];
  };
  export type ExecFunctionAble<T, E extends KeyType = never> = {
    execFunction: Exec<T, E>;
  } & ExtendsFunction<T, E>;
  export type BlurArrayExecInterface<T> = {
    [K in keyof T]: K extends 'execFunction' ? T[K] : T[K] extends (...args: infer P) => any ? (...args: P) => any : T[K]
  }

}
