import { AloneInstruction } from "./Work";
import { InOutNumber } from "../InOutputValue";
import { SwitchStatusValue, SwitchStatus } from "./WorkTypes";
import { InOutputAbleOrNil, BaseType } from "../Type";
import { } from "react-native";
import { map, takeLast } from "rxjs/operators";
import { isRN } from "../Util/Equipment";


export class FlashWork extends AloneInstruction {

  name: string = "FlashWork";
  switch(value: BaseType) {
    if (value.equal(SwitchStatus.CLOSE)) {

    } else if (value.equal(SwitchStatus.OPEN)) {

    } else {
      //SwitchStatus.TOGGLE

    }
  }
  run(input: InOutputAbleOrNil) {
    //react-native-camera  react-native-flash
    const that = this;
    if (isRN) {
      const Camera = require("react-native-camera");
      if (Camera) {
        const sub = input.value().pipe(
          takeLast(1),
        ).subscribe(
          (value) => that.switch(value),
          null,
          () => {
            this.output.next(null);
            this.output.complete();
          }
        )
        this.pools.push(sub);
      }
      return;
    }
    this.output.next(null);
    this.output.complete();
  }
}