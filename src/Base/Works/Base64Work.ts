
import { SingleInstruction } from "./Work";
import { InOutputAbleOrNil, InOutData, InOutputAble } from "../Type";
import { Observable, of } from "rxjs";
import { flatMap, takeLast, map, tap } from "rxjs/operators";
import { toInOutValue } from "../Util/rxjs_operators";
import { StringAble } from "../Object/ObjectTypes";

//解码
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
          map((value) => Buffer.from(value.toString(), "base64").toString("utf-8")),
          toInOutValue,
          // flatMap(()=>)
        )
        .subscribe(this.output);
      this.pools.push(subp);
    }
  }
}
//编码
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
          map((value) => Buffer.from((value as StringAble).valueOf(), "utf-8").toString("base64")),
          toInOutValue,
          tap((value) => this.context?.msgChannel.next(value)),
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