
import { SingleInstruction } from "./Work";
import { InOutputAbleOrNil, InOutData, InOutputAble } from "../Type";
import { Observable, of } from "rxjs";
import { flatMap, takeLast, map } from "rxjs/operators";
import { toInOutValue } from "../Util/rxjs_operators";


class Base64EnCodeWork extends SingleInstruction {
  run(input: InOutputAbleOrNil) {

    this.output.next(input);
    this.output.complete();
  }
}

class Base64DecodeWork extends SingleInstruction {
  run(input: InOutputAbleOrNil) {
    if (input == null) {
      this.output.complete();
    } else {
      const subp = (input as InOutputAble).value()
        .pipe(
          takeLast(1),
          map((value) => Buffer.from(value.toString(), "utf-8").toString("base64")),
          toInOutValue,
          // flatMap(()=>)
        )
        .subscribe(this.output);
      this.pools.push(subp);
    }
  }
}

export {
  Base64DecodeWork,
  Base64EnCodeWork
}