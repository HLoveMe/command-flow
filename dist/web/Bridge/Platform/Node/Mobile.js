import { of } from "rxjs";
import { BooleanObject, ObjectTarget } from "../../../Object/Able/ObjectAble";
import { PlatformBridge } from "../BasePlatform";
export class MobileNodejsBridge extends PlatformBridge {
    open(url) {
        return of(new BooleanObject(false));
    }
    loadFile(url, option) {
        return of(new ObjectTarget({
            total: 0,
            loaded: 0,
            data: new ArrayBuffer(0),
            finish: true,
            file: null,
        }));
    }
}
//# sourceMappingURL=Mobile.js.map