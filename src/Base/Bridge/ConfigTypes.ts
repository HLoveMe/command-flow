import { AxiosRequestConfig, AxiosResponse } from "axios";
import { Observable } from "rxjs";
import { BooleanObject, StringObject } from "../Object/Able/ObjectAble";
import { Value } from "../Types";

export interface RunTimeInfo {
  name: string;
  platform: any;
}

export type PathLike = string | URL;
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
  data: ArrayBuffer;
}

export interface RequestTimeOut {
  timeout: number;
}
export declare type RequestMethod = "GET" | "POST" | "PUT" | "OPTIONS" | "DELETE";
export interface RequestParamsInit {
  method?:RequestMethod;
  timeout?:number;
  data?:any;
  contextType?:SupportContentType;
  url:string;
}
export type RequestParams = AxiosRequestConfig
export enum SupportContentType {
  JSON = "application/json",
  TEXT = "text/plain",
}
export interface ResponseContent {
  error?: Error;
  data?: any;
  response: AxiosResponse;
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
  ): Observable<Value.ObjectAble<FileLoadEvent>>;

  // 工具
  createQrCode(
    context: String,
    option?: QRcodeOption
  ): Observable<StringObject>;

  // 网络
  // 仅仅支持json/txt
  fetch(req: AxiosRequestConfig): Observable<Value.ObjectAble<ResponseContent>>;
}

export interface BasePlatformBridgeAble extends PlatformBridgeAble { }

export interface PCWebBridgeAble extends BasePlatformBridgeAble { }
export interface PCNodejsBridgeAble extends BasePlatformBridgeAble { }
export interface PCRnBridgeAble extends BasePlatformBridgeAble { }

export interface MobilePlatformBridgeAble extends PlatformBridgeAble { }

export interface MobileWebBridgeAble extends MobilePlatformBridgeAble { }
export interface MobileNodejsBridgeAble extends MobilePlatformBridgeAble { }
export interface MobileRnBridgeAble extends MobilePlatformBridgeAble { }
