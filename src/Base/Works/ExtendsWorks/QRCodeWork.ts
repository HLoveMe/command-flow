import { SingleInstruction } from "../Work";
import { InOutputAbleOrNil } from "../../Type";
import { takeLast, map, tap, catchError } from "rxjs/operators";
import { toInOutValue, ValueSwitchTapCatch } from "../../Util/rxjs_operators";
import { StringAble, ObjectAble } from "../../Object/ObjectTypes";
import { InOutString } from "../../Object/InOutputValue";
import { QROption } from "../WorkTypes";
class QRCodeWork extends SingleInstruction {
  name: string = "QRCodeWork"
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
          const errorCorrectionLevel = option.errorCorrectionLevel || QRCodeWork.defaultOption.errorCorrectionLevel;
          const qr = QRCode(typeNumber, errorCorrectionLevel);
          qr.addData(option.value || QRCodeWork.defaultOption.value);
          qr.make();
          return qr.createDataURL(option.cellSize || QRCodeWork.defaultOption.cellSize, option.margin || QRCodeWork.defaultOption.margin);
        }),
        ValueSwitchTapCatch(this)
      ).subscribe(this.getOutputObserver());
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