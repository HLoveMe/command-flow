import { Observable } from "rxjs";
import { BooleanObject, StringObject } from "../Object/BaseObject";
import { DataAble, ObjectAble } from "../Object/ObjectTypes";

export interface RunTimeInfo {
  name: string;
  platform: any;
}

export type PathLike = string | Buffer | URL;
export interface CommandStatus {
  command: string;
  status: boolean;
  error?: Error;
  result?: string;
}

export interface QRcodeOption {
  type: TypeNumber;
  Level: ErrorCorrectionLevel;
  SideLength: number;
}

export enum FileType {
  Audio = "audio/*",
  Video = "video/*",
  HTML = "text/html",
  txt = "text/plain",
  Image = "image/*",
  Csv = ".csv",
  Pdf = "application/pdf",
  Word = "application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword，application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  All = "*",
}
export interface FileOption {
  type: FileType;
}
export interface FileLoadEvent {
  total: number;
  loaded: number;
  data: Buffer;
}

export declare interface PlatformBridgeAble {
  //计算机运行相关硬件
  loadRunInfo(): Observable<RunTimeInfo>;
  //命令行工具
  /***
   * 运行一个脚本 path
   * 运行 javascript
   */
  runCommand(command: string, option?: any): Observable<CommandStatus>;

  //计算机操作
  open(url: String, option?: any): Observable<BooleanObject>;

  //文件相关
  loadFile(
    url: PathLike,
    option?: FileOption
  ): Observable<ObjectAble<FileLoadEvent>>;

  // 工具
  createQrCode(
    context: String,
    option?: QRcodeOption
  ): Observable<StringObject>;
}

export interface PCPlatformBridgeAble extends PlatformBridgeAble { }

export interface PCWebBridgeAble extends PCPlatformBridgeAble { }
export interface PCNodejsBridgeAble extends PCPlatformBridgeAble { }
export interface PCRnBridgeAble extends PCPlatformBridgeAble { }

export interface MobilePlatformBridgeAble extends PlatformBridgeAble { }
export interface MobileWebBridgeAble extends MobilePlatformBridgeAble { }
export interface MobileNodejsBridgeAble extends MobilePlatformBridgeAble { }
export interface MobileRnBridgeAble extends MobilePlatformBridgeAble { }
