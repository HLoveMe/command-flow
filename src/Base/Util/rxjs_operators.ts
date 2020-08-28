import { Observable } from "rxjs";
import * as InOutValue from "../InOutputValue";
import { map } from "rxjs/operators";
import { InOutputAbleOrNil } from "../Type";

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
  if (Target) return new Target(value);
  return null;
}

export const toInOutValue = (source: Observable<any>): Observable<InOutputAbleOrNil> => {
  return source.pipe(
    map(value => decide(value))
  )
}