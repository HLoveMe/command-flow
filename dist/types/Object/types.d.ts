import { MapObjectAble } from './Able/Base/MapObject';
import { NumberObjectAble } from './Able/Base/NumberObject';
import { SetObjectAble } from './Able/Base/SetObject';
import { StringObjectAble } from './Able/Base/StringObject';
import { ArrayObjectAble } from './Able/Base/ArrayObject';
import { BooleanObject } from './Able/Base/BooleanObject';
import { DataObject } from './Able/Base/DataObject';
import { DateObjectAble } from './Able/Base/DateObject';
import { NULLObject } from './Able/Base/NULLObject';
import { ObjectTarget } from './Able/Base/ObjectTarget';
declare type isEqual<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;
export declare namespace Value {
    type NULL = null | undefined;
    interface ValueAble<V> {
        get [Symbol.toStringTag](): string;
        _value: V;
        valueOf(): V;
    }
    interface ObjectAble<V> extends ValueAble<V> {
        json(): Value.StringAble;
    }
    interface ArrayAble<T> extends ValueAble<Array<T>>, ObjectAble<Array<T>> {
        len(): number;
        first(): T;
        last(): T;
        valueOfIndex(index: number): T;
        valueOf(): Array<T>;
    }
    interface MapAble<T, U> extends ValueAble<Map<T, U>>, ObjectAble<Map<T, U>> {
        len(): number;
        valueOf(): Map<T, U>;
    }
    interface SetAble<T> extends ValueAble<Set<T>>, ObjectAble<Set<T>> {
        len(): number;
        valueOf(): Set<T>;
    }
    interface NumberAble extends ValueAble<number>, ObjectAble<number> {
        valueOf(): number;
    }
    interface StringAble extends ValueAble<string>, ObjectAble<string> {
        valueOf(): string;
    }
    interface BooleanAble extends ValueAble<boolean>, ObjectAble<boolean> {
        valueOf(): boolean;
    }
    interface DateAble extends ValueAble<Date>, ObjectAble<Date> {
        timestamp(): number;
    }
    interface DataAble extends ValueAble<ArrayBuffer>, ObjectAble<ArrayBuffer> {
        data(): ArrayBuffer;
    }
    interface NUllAble extends ObjectAble<NULL> {
        valueOf(): null | undefined;
        isTruly(): boolean;
        isNull(): boolean;
        isUndefined(): boolean;
    }
    interface Mixins<V extends Value.ObjectAble<any> = Value.ObjectAble<any>, U extends any = NULL> extends ValueAble<V | U> {
    }
}
export declare namespace ValueExtends {
    type KeyType = string | number | symbol;
    type KeyExclude<T, E extends KeyType> = keyof Omit<T, E>;
    type ValueInclude<T, E> = {
        [K in keyof T]: T[K] extends E ? K : never;
    }[keyof T];
    type ValidKey<T, K extends KeyType, E> = Extract<KeyExclude<T, K>, ValueInclude<T, E>>;
    export type IsValue<T> = T extends Value.NUllAble ? true : T extends Value.NumberAble ? true : T extends Value.StringAble ? true : T extends Value.BooleanAble ? true : T extends Value.ArrayAble<infer U> ? true : T extends Value.MapAble<infer K, infer U> ? true : T extends Value.SetAble<infer U> ? true : T extends Value.DateAble ? true : T extends Value.DataAble ? true : T extends Value.ObjectAble<any> ? true : T extends Value.Mixins ? true : T extends Value.ValueAble<any> ? true : false;
    export type Wrapper<T> = T extends null | undefined ? NULLObject : T extends number ? Value.NumberAble : T extends string ? Value.StringAble : T extends boolean ? Value.BooleanAble : T extends Array<infer U> ? Value.ArrayAble<U> : T extends Map<infer K, infer U> ? Value.MapAble<K, U> : T extends Set<infer U> ? Value.SetAble<U> : T extends Date ? Value.DateAble : T extends ArrayBuffer ? Value.DataAble : Value.ObjectAble<T>;
    export type GetAchieve<T> = T extends ObjectTarget<any> ? T : T extends Value.NUllAble ? NULLObject : T extends Value.NumberAble ? NumberObjectAble : T extends Value.StringAble ? StringObjectAble : T extends Value.BooleanAble ? BooleanObject : T extends Value.ArrayAble<infer U> ? ArrayObjectAble<U> : T extends Value.MapAble<infer K, infer U> ? MapObjectAble<K, U> : T extends Value.SetAble<infer U> ? SetObjectAble<U> : T extends Value.DateAble ? DateObjectAble : T extends Value.DataAble ? DataObject : ObjectTarget<T>;
    export type GetDeepAchieve<T extends any = string> = IsValue<T> extends true ? GetAchieve<T> : GetAchieve<Wrapper<T>>;
    type GetInterface<T, U extends KeyType, E> = Pick<T, ValidKey<T, U, E>>;
    type ResetFunctionType<T extends (...args: any[]) => any> = T extends (...args: infer P) => infer R ? (...args: P) => isEqual<R, unknown> extends true ? void : Wrapper<R> : T;
    type CreateInterface<T> = {
        [K in keyof T]: T[K] extends (...args: any[]) => any ? ResetFunctionType<T[K]> : T[K];
    };
    export type Constructor<C, TC extends any = any> = {
        new (): any;
        new (value: C): any;
    };
    /***
     * 去掉指定'constructor' | 'valueOf'属性，并值类型为 (...args: any[]) => any
     *
     * 将()=>any 转为 ()=>Value.ValueAble<any>
     */
    export type WrapperReturnInterface<T> = CreateInterface<GetInterface<T, 'constructor' | 'valueOf', (...args: any[]) => any>>;
    export {};
}
export declare namespace ValueExec {
    type KeyType = string | number | symbol;
    type ExcludeKeys = number | typeof Symbol.iterator | typeof Symbol.unscopables | 'toString' | 'toLocaleString' | 'constructor' | 'valueOf';
    type KeyExclude<T, E extends KeyType = never, DE extends KeyType = ExcludeKeys | E> = keyof Omit<T, DE>;
    type Exec<T, E extends KeyType = never, KS extends KeyType = KeyExclude<T, E>> = (key: KS, ...args: any[]) => any;
    type ExtendsFunction<T, E extends KeyType> = {
        [K in KeyExclude<T, E | ExcludeKeys>]: T[K] extends (...args: [infer P, ...infer P2]) => infer R ? isEqual<P, unknown> extends true ? () => R : P extends (...args: any[]) => any ? (...args: [(...args: any[]) => any, ...P2]) => R : (...args: [P, ...P2]) => R : T[K];
    };
    export type ExecFunctionAble<T, E extends KeyType = never> = {
        execFunction: Exec<T, E>;
    } & ExtendsFunction<T, E>;
    export type BlurExecInterface<T> = {
        [K in keyof T]: K extends 'execFunction' ? T[K] : T[K] extends (...args: infer P) => any ? (...args: P) => any : T[K];
    };
    export {};
}
export {};
//# sourceMappingURL=types.d.ts.map