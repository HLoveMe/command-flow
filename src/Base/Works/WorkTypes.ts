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

declare type Request_URL = string;
declare type Request_Method = "GET" | "POST" | "PUT" | "OPTIONS" | "DELETE";
declare type Request_Params = { [key: string]: string }
declare type Request_Header = { [key: string]: string }
declare type Request_Body = BodyInit

export interface RequestOption {
  URL: Request_URL;
  Method: Request_Method;
  Params: Request_Params;
  header:Request_Header;
  Body: Request_Body;
  Timeout:number
}