
import { InOutNumber } from "../../Object/InOutputValue";
import { SwitchStatusValue, SwitchStatus } from "../WorkTypes";
import { InOutputAbleOrNil, BaseType } from "../../Type";
import { } from "react-native";
import { InstructionOTO } from "../Instruction";


export class FlashWork extends InstructionOTO {
  name: string = "FlashWork";
  // switch(value: BaseType) {
  //   const RNFlash = require('react-native-flash');
  //   if (value.equal(SwitchStatus.CLOSE)) {
  //     RNFlash.turnOffFlash(); // turn off flash
  //   } else if (value.equal(SwitchStatus.OPEN)) {
  //     RNFlash.turnOnFlash(); // turn on flash
  //   } else {
  //     //SwitchStatus.TOGGLE
  //     RNFlash.turnOffFlash(); // turn off flash
  //   }
  // }
  // rn_run(input: InOutputAbleOrNil) {
  //   const that = this;
  //   const Flash = require('react-native-flash');
  //   if (Flash) {
  //     const sub = input.value().pipe(
  //       takeLast(1),
  //     ).subscribe(
  //       (value) => that.switch(value),
  //       null,
  //       () => {
  //         this.output.next(null);
  //         this.output.complete();
  //       }
  //     )
  //     this.pools.push(sub);
  //     return;
  //   }
  //   this.output.next(null);
  //   this.output.complete();
  // }
  // run(input: InOutputAbleOrNil) {
  //   //react-native-camera  react-native-flash
  // }
}