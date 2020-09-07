import { Observable } from "rxjs";
import * as InOutValue from "../InOutputValue";
import { map, tap, catchError } from "rxjs/operators";
import { InOutputAbleOrNil, Work } from "../Type";
import { ValueAble } from "../Object/ObjectTypes";

const ObjectMap = {
  '[object Map]': InOutValue.InOutMap,
  '[object Set]': InOutValue.InOutSet,
  '[object Array]': InOutValue.InOutArray,
  '[object Boolean]': Boolean,
  '[object Date]': Date,
  '[object Number]': InOutValue.InOutNumber,
  '[object String]': InOutValue.InOutString
}
const decide = function (value: any) {
  const key = Object.prototype.toString.call(value);
  const Target = ObjectMap[key];
  if (Target) {
    switch (key) {
      case '[object Array]':
        return new Target(...value);
      default:
        return new Target(value);
    }
  }
  return null;
}
/**
 * 
 * @param source Object 值转为   ValueAble;
 */
export const toInOutValue = (source: Observable<any>): Observable<InOutputAbleOrNil> => {
  return source.pipe(
    map(value => decide(value))
  )
}


/**
 * Object 值转为   ValueAble;  记录Tap  ;Catch
 * @param work 
 */
export const ValueSwitchTapCatch = (work: Work) => {
  return (source: Observable<any>) => {
    return source.pipe(
      toInOutValue,
      tap((value) => work.context?.msgChannel.next(value)),
      catchError(err => { throw err })
    )
  }
}