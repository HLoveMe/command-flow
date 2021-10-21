import { Observable } from "rxjs";
import { BooleanObj, StringObj } from "../Object/BaseObject";
import { DataAble } from "../Object/ObjectTypes";

export interface RunTimeInfo {
  name: string;
  platform: any;
}

export type CommandLike = string | Buffer | URL;
export type PathLike = CommandLike;
export interface CommandStatus {
  command: CommandLike;
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
  Audio = 'audio/*',
  Video = 'video/*',
  HTML = 'text/html',
  txt = 'text/plain',
  Image = 'image/*',
  Csv = '.csv',
  Pdf = 'application/pdf',
  Word = 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/msword，application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  All = '*'
}
export interface FileOption {
  type: FileType
}

export declare interface PlatformConfigAble {
  //计算机运行相关硬件
  loadRunInfo(): Observable<RunTimeInfo>;
  //命令行工具
  /***
   * 运行一个脚本 path
   * 运行 javascript 
   */
  runCommand(command: CommandLike, option?: any): Observable<CommandStatus>;

  //计算机操作
  open(url: String, option?: any): Observable<BooleanObj>;

  //文件相关
  loadFile(url: PathLike, option?: FileOption): Observable<DataAble>;

  // 工具
  createQrCode(context: String, option?: QRcodeOption): Observable<StringObj>;
}

export interface PCPlatformConfigAble extends PlatformConfigAble { }

export interface PCWebConfigAble extends PCPlatformConfigAble { }
export interface PCNodejsConfigAble extends PCPlatformConfigAble { }
export interface PCRnConfigAble extends PCPlatformConfigAble { }

export interface MobilePlatformConfigAble extends PlatformConfigAble { }
export interface MobileWebConfigAble extends MobilePlatformConfigAble { }
export interface MobileNodejsConfigAble extends MobilePlatformConfigAble { }
export interface MobileRnConfigAble extends MobilePlatformConfigAble { }
