import { InOutputAble, BaseType, InOutData } from "../Type";
import { of, Observable, fromEvent, empty } from "rxjs";
import { statSync, existsSync, PathLike } from "fs";
import { takeUntil, map } from "rxjs/operators";
import {
  StringObj,
  NumberObj,
  MapObject,
  ArrayObject,
  SetObject,
  ObjectTarget,
  BooleanObj,
  DateObj,
} from "./BaseObject";

export class InOutObject extends ObjectTarget implements InOutputAble {
  value(): Observable<BaseType> {
    return of(this);
  }
}
export class InOutNumber extends NumberObj implements InOutputAble {
  value(): Observable<BaseType> {
    return of(this);
  }
}
export class InOutString extends StringObj implements InOutputAble {
  value(): Observable<BaseType> {
    return of(this);
  }
}

export class InOutMap<T, U> extends MapObject<T, U> implements InOutputAble {
  value(): InOutData {
    return of(this as MapObject<T, U>);
  }
}

export class InOutArray<T> extends ArrayObject<T> implements InOutputAble {
  value(): InOutData {
    return of(this as ArrayObject<T>);
  }
}

export class InOutSet<T> extends SetObject<T> implements InOutputAble {
  value(): InOutData {
    return of(this as SetObject<T>);
  }
}
export class InOutBoolean extends BooleanObj implements InOutputAble {
  value(): InOutData {
    return of(this as BooleanObj);
  }
}
export class InOutDate extends DateObj implements InOutputAble {
  value(): InOutData {
    return of(this as DateObj);
  }
}