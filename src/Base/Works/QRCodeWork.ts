import { SingleInstruction } from "./Work";
import { InOutputAbleOrNil } from "../Type";
import { takeLast, map, tap, catchError } from "rxjs/operators";
import { toInOutValue } from "../Util/rxjs_operators";
import { StringAble } from "../Object/ObjectTypes";
/**
 * 
const qr = require("qr-image")
//const aa = "data:image/svg+xml;base64," + Buffer.from(qr.imageSync("ASASSAS", { type: "svg" }), 'utf8').toString('base64')
const aa = "data:image/png;base64," + Buffer.from(qr.imageSync("ASASSAS", { type: "png" }), 'utf8').toString('base64')
console.log(aa)
debugger
 * 
 */
class QRCodeWork extends SingleInstruction {
  rn_run(input: InOutputAbleOrNil) { }
  web_run() { }
  node_run(input: InOutputAbleOrNil) {
    if (input != null) {
      const sub = input.value().pipe(
        takeLast(1),
        map(value => {
          const qr = require("qr-image");
          return Buffer.from(qr.imageSync((value as StringAble).valueOf(), { type: "png" }), 'utf8').toString('base64')
        }),
        toInOutValue,
        tap((value) => this.context?.msgChannel.next(value)),
        catchError(err => { throw err })
      )
      return
    }
    this.run(input);
  }
  run(input: InOutputAbleOrNil) {
    this.output.next(null)
    this.output.complete();
  }
}


export {
  QRCodeWork
}