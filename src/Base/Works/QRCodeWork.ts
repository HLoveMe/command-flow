import { SingleInstruction } from "./Work";
import { InOutputAbleOrNil } from "../Type";
import { takeLast, map, tap, catchError } from "rxjs/operators";
import { toInOutValue, ValueSwitchTapCatch } from "../Util/rxjs_operators";
import { StringAble, ObjectAble } from "../Object/ObjectTypes";
import * as QRCode from 'qrcode-generator';
import { InOutString } from "../InOutputValue";
import { QROption } from "./WorkTypes";
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
  // rn_run(input: InOutputAbleOrNil) {
  //   this.web_run(input);
  // }
  // web_run(input: InOutputAbleOrNil) {
  //   if (input != null) {
  //     const sub = input.value().pipe(
  //       takeLast(1),
  //       map(value => {
  //         var jrQrcode = require('jr-qrcode');
  //         return jrQrcode.getQrBase64((value as StringAble).valueOf());
  //         // return Buffer.from(qr.imageSync((value as StringAble).valueOf(), { type: "png" }), 'utf8').toString('base64')
  //       }),
  //       ValueSwitchTapCatch(this)
  //     ).subscribe(this.getOutoutObserver());
  //     this.pools.push(sub);
  //     return
  //   }
  //   this.run(input);
  // }
  // node_run(input: InOutputAbleOrNil) {
  //   if (input != null) {
  //     const sub = input.value().pipe(
  //       takeLast(1),
  //       map(value => {
  //         const qr = require("qr-image");
  //         return Buffer.from(qr.imageSync((value as StringAble).valueOf(), { type: "png" }), 'utf8').toString('base64')
  //       }),
  //       ValueSwitchTapCatch(this)
  //     ).subscribe(this.getOutoutObserver());
  //     this.pools.push(sub);
  //     return
  //   }
  //   this.run(input);
  // }
  static defaultOption: QROption = {
    typeNumber: 4,
    errorCorrectionLevel: "L",
    cellSize: 4,
    margin: null,
    value: ""
  } as unknown as QROption;

  run(input: InOutputAbleOrNil) {
    if (input != null) {
      const sub = input.value().pipe(
        takeLast(1),
        map(value => {
          var option = QRCodeWork.defaultOption;
          if (value instanceof InOutString) {
            option.value = (value as InOutString).valueOf();
          } else {
            option = { ...option, ...(value as ObjectAble).valueOf() }
          }
          const QRCode = require("qrcode-generator")
          const typeNumber = option.typeNumber || QRCodeWork.defaultOption.typeNumber;
          const errorCorrectionLevel = option.typeNumber || QRCodeWork.defaultOption.typeNumber;
          const qr = QRCode(typeNumber, errorCorrectionLevel);
          qr.addData(option.value || QRCodeWork.defaultOption.value);
          qr.make();
          return qr.createDataURL(option.cellSize || QRCodeWork.defaultOption.cellSize,option.margin || QRCodeWork.defaultOption.margin);
        }),
        ValueSwitchTapCatch(this)
      ).subscribe(this.getOutoutObserver());
      this.pools.push(sub);
      return;
    }
    this.output.next(null)
    this.output.complete();
  }
}


export {
  QRCodeWork
}