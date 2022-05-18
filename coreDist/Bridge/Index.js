import { isElectron, isPC, PlatformSelect } from "../Util/Equipment";
import { MobileNodejsBridge } from "./Platform/Node/Mobile";
import { PCNodejsBridge } from "./Platform/Node/PC";
import { MobileWebBridge } from "./Platform/Web/Mobile";
import { PCWebBridge } from "./Platform/Web/PC";
import './Difference/index';
var runConfig = PlatformSelect({
    web: { pc: PCWebBridge, mobile: MobileWebBridge },
    node: { pc: PCNodejsBridge, mobile: MobileNodejsBridge },
    electron: {},
});
var Target = runConfig[isElectron ? "electron" : isPC ? "pc" : "mobile"];
var Platform = new Target();
export default Platform;
//# sourceMappingURL=Index.js.map