
import { SingleInstruction } from "./Work";
import { InOutputAbleOrNil, InOutData, InOutputAble } from "../Type";
import { flatMap, takeLast, map, tap,catchError } from "rxjs/operators";
import { toInOutValue } from "../Util/rxjs_operators";
import { StringAble } from "../Object/ObjectTypes";
import { Base64 } from 'js-base64';
//解码
class Base64DecodeWork extends SingleInstruction {
  name: string = "Base64DecodeWork";
  run(input: InOutputAbleOrNil) {
    if (input == null) {
      this.output.next(null)
      this.output.complete();
    } else {
      const subp = (input as InOutputAble).value()
        .pipe(
          takeLast(1),
          map((value) => Base64.decode((value as StringAble).valueOf())),
          toInOutValue,
          tap((value) => this.context?.msgChannel.next(value)),
          catchError(err=>{throw err})
        )
        .subscribe(this.getOutoutObserver());
      this.pools.push(subp);
    }
  }
}
//编码
class Base64EnCodeWork extends SingleInstruction {
  name: string = "Base64EnCodeWork";
  run(input: InOutputAbleOrNil) {
    if (input == null) {
      this.output.next(null)
      this.output.complete();
    } else {
      const subp = (input as InOutputAble).value()
        .pipe(
          takeLast(1),
          map((value) => Base64.encode((value as StringAble).valueOf())),
          toInOutValue,
          tap((value) => this.context?.msgChannel.next(value)),
          catchError(err=>{throw err})
        )
        .subscribe(this.getOutoutObserver());
      this.pools.push(subp);
    }
  }
}

export {
  Base64DecodeWork,
  Base64EnCodeWork
}