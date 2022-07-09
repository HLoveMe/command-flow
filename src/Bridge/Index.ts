import { isPC, PlatformSelect } from '../Util/Equipment';
import { PlatformBridge } from './Platform/BasePlatform';
import { MobileNodejsBridge } from './Platform/Node/Mobile';
import { PCNodejsBridge } from './Platform/Node/PC';
import { MobileWebBridge } from './Platform/Web/Mobile';
import { PCWebBridge } from './Platform/Web/PC';
import './Difference/index';

const runConfig = PlatformSelect({
  web: { pc: PCWebBridge, mobile: MobileWebBridge },
  node: { pc: PCNodejsBridge, mobile: MobileNodejsBridge },
});
const Target = runConfig[isPC ? 'pc' : 'mobile'];
const Platform: PlatformBridge = Reflect.construct(Target, []);
export default Platform;
