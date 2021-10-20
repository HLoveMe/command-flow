import { InOutputAble, BaseType, InOutData } from "../../Type";
import { of, Observable, fromEvent, empty } from "rxjs";
import { statSync, existsSync, PathLike } from "fs";
import { JSForNodeJs } from "../../Util/EquipmentTools";
import { PlatformSelect } from "../../Util/Equipment";
const readline = require("readline");

class FileSource extends JSForNodeJs implements InOutputAble {
  file: PathLike;
  constructor(file: string) {
    super();
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
      return empty();
    }
    throw new Error("Method not implemented.");
  }
}

export default PlatformSelect({
  web: null,
  node: FileSource,
  reactNative: null,
}) as InOutputAble;
