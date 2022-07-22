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
  DelayIntervalConfig,
  IntervalConfig,
  TimeoutConfig,
} from '../Configs/types';

interface WorkBoot {
  runConfig?: any;
}

interface Base64DecodeWork extends WorkBoot {}

interface Base64EnCodeWork extends WorkBoot {}
interface OpenURLWork extends WorkBoot {}
interface QRCodeWork extends WorkBoot {
  runConfig?: QRcodeOption;
}

interface LoadFileWork extends WorkBoot {
  runConfig?: FileOption;
}
interface RunCommandWork extends WorkBoot {}

interface IntervalWork extends WorkBoot {
  runConfig?: IntervalConfig;
}

interface TimeoutWork extends WorkBoot {
  runConfig?: TimeoutConfig;
}

interface DelayIntervalWork extends WorkBoot {
  runConfig?: DelayIntervalConfig;
}

