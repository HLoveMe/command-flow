import { isElectron, isPC, PlatformSelect } from "../Util/Equipment";
import { PCPlatformConfig } from "./Platform/BasePlatform";
import { MobileNodejsConfig } from "./Platform/Node/Mobile";
import { PCNodejsConfig } from "./Platform/Node/PC";
import { MobileRnConfig } from "./Platform/RN/Mobile";
import { PCRnConfig } from "./Platform/RN/PC";
import { MobileWebConfig } from "./Platform/Web/Mobile";
import { PCWebConfig } from "./Platform/Web/PC";

const runConfig = PlatformSelect({
  web: { pc: PCWebConfig, mobile: MobileWebConfig },
  node: { pc: PCNodejsConfig, mobile: MobileNodejsConfig },
  reactNative: { pc: PCRnConfig, mobile: MobileRnConfig },
  electron: {},
});
const Target = runConfig[isElectron ? "electron" : isPC ? "pc" : "mobile"];
const Platform: PCPlatformConfig = new Target();
export default Platform;