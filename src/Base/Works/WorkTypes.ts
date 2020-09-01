import { InOutNumber } from "../InOutputValue";

export declare type SwitchStatusValue = InOutNumber;

export class SwitchStatus {
  static OPEN: SwitchStatusValue = new InOutNumber(0);
  static CLOSE: SwitchStatusValue = new InOutNumber(1);
  static TOGGLE: SwitchStatusValue = new InOutNumber(2);
}




