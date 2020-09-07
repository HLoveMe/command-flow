import { InOutNumber, InOutString } from "../InOutputValue";
import { ValueAble, ObjectAble } from "../Object/ObjectTypes";

export declare type SwitchStatusValue = InOutNumber;

export class SwitchStatus {
  static OPEN: SwitchStatusValue = new InOutNumber(0);
  static CLOSE: SwitchStatusValue = new InOutNumber(1);
  static TOGGLE: SwitchStatusValue = new InOutNumber(2);
}

type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export declare type QRValue = InOutString;
export interface QROption extends ObjectAble {
  typeNumber: number; // 0-40
  errorCorrectionLevel: ErrorCorrectionLevel;
  cellSize: number;//4
  margin: number;//
  value: string;
}

export declare type QR = QRValue | QROption

