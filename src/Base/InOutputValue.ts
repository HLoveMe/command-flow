import { InOutputAble, BaseType, InOutData } from "./Type";
import { of, Observable, range, fromEvent, empty } from "rxjs"
import { statSync, existsSync, PathLike } from "fs";
import { takeUntil, reduce, map } from "rxjs/operators";
import { StringObj, NumberObj, MapObject, ArrayObject, SetObject, ObjectTarget } from "./Object/BaseObject";
import { toInOutValue } from "./Util/rxjs_operators";
const readline = require("readline");

export class InOutObject extends ObjectTarget implements InOutputAble {
  value(): Observable<BaseType> {
    return of(this)
  }
}
export class InOutNumber extends NumberObj implements InOutputAble {
  value(): Observable<BaseType> {
    return of(this)
  }
}
export class InOutString extends StringObj implements InOutputAble {
  value(): Observable<BaseType> {
    return of(this)
  }
}

export class InOutMap<T, U> extends MapObject<T, U> implements InOutputAble {
  value(): InOutData {
    return of(this as MapObject<T, U>)
  }
}

export class InOutArray<T> extends ArrayObject<T> implements InOutputAble {
  value(): InOutData {
    return of(this as ArrayObject<T>)
  }
}

export class InOutSet<T> extends SetObject<T> implements InOutputAble {
  value(): InOutData {
    return of(this as SetObject<T>)
  }
}

export class FileSource implements InOutputAble {
  file: PathLike;
  constructor(file: string) {
    if (existsSync(file) && statSync(file).isFile()) {
      this.file = file;
    }
  }
  value(): InOutData {
    if (this.file) {
      const fileLine = readline(this.file, "utf-8");
      // return fromEvent(fileLine, "line").pipe(
      //   takeUntil(fromEvent(fileLine, "close")),
      //   // reduce(($1, $2) => $1 + $2, "")

      // )
    } else {
      return empty()
    }
    throw new Error("Method not implemented.");
  }
}

export class SocketSource implements InOutputAble {
  socket: WebSocket;
  constructor(socket: WebSocket) {
    this.socket = socket;
  }
  value(): InOutData {
    if (this.socket && this.socket.readyState == 1) {
      return fromEvent(this.socket, "message").pipe(
        takeUntil(fromEvent(this.socket, "close")),
        map(event => (event as MessageEvent).data)
      )
    }
    return empty();

    throw new Error("Method not implemented.");
  }

}