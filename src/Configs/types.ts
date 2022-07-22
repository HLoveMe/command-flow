import { FileOption, FileType, QRcodeOption, RequestParamsInit } from "../Bridge/ConfigTypes";
// 整体运行配置
type WorkName = string
// Work 运行过程中可以配置的选项
export type RunCommandWorkConfig = { [key: WorkName]: any }
export type IntervalConfig = { intervalTime: number, max: number }
export type TimeoutConfig = { intervalTime: number }
export type DelayIntervalConfig = {intervalTime: number, max: number,delay:number }
export declare interface WorkRunOption {
  RunCommandWork: RunCommandWorkConfig;
  QRCodeWork: QRcodeOption,
  LoadFileWork: FileOption,
  FetchWork: RequestParamsInit,
  IntervalWork: IntervalConfig;
  TimeoutWork:TimeoutConfig;
  DelayIntervalWork:DelayIntervalConfig;
}
export declare interface Environment { }
export declare interface ContextRunOption {
  development: boolean;
  environment?: Environment,
  workConfig?: WorkRunOption,
}