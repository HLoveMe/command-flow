import { QRcodeOption } from "../Bridge/ConfigTypes";

// 整体运行配置
type WorkName = string
// Work 运行过程中可以配置的选项
export declare interface WorkRunOption { }
export declare interface Environment { }
export declare interface ContextRunOption {
  development: boolean;
  environment?: Environment,
  workConfig?: { [key: WorkName]: WorkRunOption },
}
/**
 * 默认的配置
 */
export const DefaultRunConfig = {
  development: true,
  environment: {},
  workConfig: {
    QRCodeWork: {
      type: 4,
      Level: "H",
      SideLength: 100,
    } as QRcodeOption
  },
}