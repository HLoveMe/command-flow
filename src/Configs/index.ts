import { FileType, QRcodeOption } from '../Bridge/ConfigTypes';
/**
 * 默认的配置
 */
export const DefaultRunConfig = {
  development: true,
  environment: {},
  workConfig: {
    QRCodeWork: {
      type: 4,
      Level: 'H',
      SideLength: 100,
    } as QRcodeOption,
    RunCommandWork: {},
    LoadFileWork: {
      type: FileType.All,
    },
    FetchWork: {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
    IntervalWork: {
      intervalTime: 1000,
      max: Infinity,
    },
    TimeoutWork: {
      intervalTime: 1000,
    },
    DelayIntervalWork: {
      intervalTime: 1000,
      max: Infinity,
      delay: 0,
    },
  },
};
