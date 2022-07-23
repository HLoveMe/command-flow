/***
  Base64DecodeWork,
  Base64EnCodeWork,
  LoadFileWork,
  OpenURLWork,

  QRCodeWork,

  RunCommandWork,

  IntervalWork,
  TimeoutWork,
  DelayIntervalWork,
  FetchWork,
 */

import { FileOption, QRcodeOption } from '../Bridge/ConfigTypes';
import {
  ContextRunOption,
  DelayIntervalConfig,
  IntervalConfig,
  TimeoutConfig,
} from '../Configs/types';
import { LogBase } from '../Log/types';
import { ContextImpl } from '../Types';
type CommandParams = { [key: string]: string };
export type Base64DecodeWork = [runConfig?: any];
export type Base64EnCodeWork = [runConfig?: any];
export type OpenURLWork = [runConfig?: any];
export type QRCodeWork = [runConfig?: QRcodeOption];

export type LoadFileWork = [runConfig?: FileOption];
export type RunCommandWork =
  | [command: string, runMap?: { [key in string]: string }]
  | [(command: string | CommandParams, option: any) => string];

export type IntervalWork = [runConfig?: IntervalConfig];

export type TimeoutWork = [runConfig?: TimeoutConfig];

export type DelayIntervalWork = [runConfig?: DelayIntervalConfig];

type WorkConfig =
  | DelayIntervalWork
  | TimeoutWork
  | IntervalWork
  | RunCommandWork
  | LoadFileWork
  | QRCodeWork
  | OpenURLWork
  | Base64DecodeWork
  | Base64EnCodeWork;

type WorkConfigCreate = [string, WorkConfig];

type RUNSetting = {
  runOptions?: ContextRunOption;
  log?: { new (context: ContextImpl): LogBase };
  works: WorkConfigCreate[];
  signals: any[];
};

export { RUNSetting };
