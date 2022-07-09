import { Observable } from "rxjs";
import { BooleanObject } from "../../../Object";
import { Value } from "../../../Object";
import { PathLike, FileLoadEvent, FileOption } from "../../ConfigTypes";
import { PlatformBridge } from "../BasePlatform";
export declare class MobileNodejsBridge extends PlatformBridge {
    open(url: string): Observable<BooleanObject>;
    loadFile(url: PathLike, option?: FileOption): Observable<Value.ObjectAble<FileLoadEvent>>;
}
//# sourceMappingURL=Mobile.d.ts.map