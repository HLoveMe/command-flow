// import { InOutputAble, BaseType, InOutData } from "../Type";
// import { of, Observable, fromEvent, empty } from "rxjs";
// import { statSync, existsSync, PathLike } from "fs";
// import { takeUntil, map } from "rxjs/operators";
// import {
//   StringObject,
//   NumberObject,
//   MapObject,
//   ArrayObject,
//   SetObject,
//   ObjectTarget,
//   BooleanObject,
//   DateObject,
// } from "./BaseObject";
// export class InOutObject<T extends BaseType>
//   extends ObjectTarget<T>
//   implements InOutputAble
// {
//   value(): Observable<BaseType> {
//     return of(null);
//   }
// }
// export class InOutNumber extends NumberObject implements InOutputAble {
//   value(): Observable<BaseType> {
//     return of(this);
//   }
// }
// export class InOutString extends StringObject implements InOutputAble {
//   value(): Observable<BaseType> {
//     return of(this);
//   }
// }
// export class InOutMap<T, U> extends MapObject<T, U> implements InOutputAble {
//   value(): InOutData {
//     return of(this as MapObject<T, U>);
//   }
// }
// export class InOutArray<T> extends ArrayObject<T> implements InOutputAble {
//   value(): InOutData {
//     return of(this as ArrayObject<T>);
//   }
// }
// export class InOutSet<T> extends SetObject<T> implements InOutputAble {
//   value(): InOutData {
//     return of(this as SetObject<T>);
//   }
// }
// export class InOutBoolean extends BooleanObject implements InOutputAble {
//   value(): InOutData {
//     return of(this as BooleanObject);
//   }
// }
// export class InOutDate extends DateObject implements InOutputAble {
//   value(): InOutData {
//     return of(this as DateObject);
//   }
// }
//# sourceMappingURL=InOutputValue.js.map