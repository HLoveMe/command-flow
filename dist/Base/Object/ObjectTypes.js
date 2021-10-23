// export declare interface ValueAble<V> {
//   _value: V;
//   valueOf(): V;
// }
// export declare interface ObjectAble<V> extends ValueAble<V> {}
// export declare interface ArrayAble<T> extends ValueAble<Array<T>> {
//   len(): number;
//   first(): T;
//   last(): T;
//   valueOfIndex(index: number): T;
//   valueOf(): Array<T>;
// }
// export declare interface MapAble<T, U> extends ValueAble<Map<T, U>> {
//   len(): number;
//   get(key: T): U;
//   valueOf(): Map<T, U>;
// }
// export declare interface SetAble<T> extends ValueAble<Set<T>> {
//   len(): number;
//   valueOf(): Set<T>;
// }
// export declare interface NumberAble extends ValueAble<Number> {
//   valueOf(): Number;
// }
// export declare interface StringAble extends ValueAble<String> {
//   valueOf(): String;
// }
// export declare interface BooleanAble extends ValueAble<Boolean> {
//   valueOf(): Boolean;
// }
// export declare interface DateAble extends ValueAble<Date> {
//   timestamp(): number;
// }
// export declare interface DataAble extends ValueAble<Buffer> {
//   data(): Buffer;
// }
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
//# sourceMappingURL=ObjectTypes.js.map