// import { Observable } from "rxjs";
// import * as InOutValue from "../Object/InOutputValue";
// import { map } from "rxjs/operators";
// import { InOutputAbleOrNil, WorkType } from "..";

import { Observable, Subscription } from "rxjs"
import { filter, map } from "rxjs/operators";
import { BaseType } from "..";

// const ObjectMap = {
//   "[object Object]": InOutValue.InOutObject,
//   "[object Map]": InOutValue.InOutMap,
//   "[object Set]": InOutValue.InOutSet,
//   "[object Array]": InOutValue.InOutArray,
//   "[object Boolean]": InOutValue.InOutBoolean,
//   "[object Date]": InOutValue.InOutDate,
//   "[object Number]": InOutValue.InOutNumber,
//   "[object String]": InOutValue.InOutString,
// };
// const decide = function (value: any) {
//   const key = Object.prototype.toString.call(value);
//   const Target = ObjectMap[key];
//   if (Target) {
//     switch (key) {
//       case "[object Array]":
//         return new Target(...value);
//       default:
//         return new Target(value);
//     }
//   }
//   return null;
// };
// /**
//  *
//  * @param source Object 值转为   ValueAble;
//  */
// export const toInOutValue = (
//   source: Observable<any>
// ): Observable<InOutputAbleOrNil> => {
//   return source.pipe(map((value) => decide(value)));
// };

// /**
//  * Object 值转为   ValueAble;  记录Tap  ;Catch
//  * @param work
//  */
// export const ValueSwitchTapCatch = (work: WorkType.Work) => {
//   // return (source: Observable<any>) => {
//   //   return source.pipe(
//   //     toInOutValue,
//   //     tap((value) => work.context?.msgChannel.next(value)),
//   //     catchError(err => { throw err })
//   //   )
//   // }
// };

/**
 * 缓存一个值
 * @param  
 * @returns 
 */
export function BufferValue() {
  let buffer: [number, BaseType] = null;
  return (source: Observable<[number, BaseType]>) => {
    return new Observable((observer) => {
      const sub = source.pipe(
        filter(nextValue => {
          if (buffer === null || nextValue[1].valueOf() != buffer[1].valueOf()) {
            buffer = nextValue;
            return true;
          }
          return false;
        })
      ).subscribe({
        next: (nextValue) => observer.next(nextValue),
      })
      return {
        unsubscribe: () => {
          sub.unsubscribe();
          observer.unsubscribe();
        }
      }
    })
  }
}