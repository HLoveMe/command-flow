import { Observable } from "rxjs";
import { BooleanObject } from "../../../Object";
import { Value } from "../../../Object";
import { PathLike, FileLoadEvent, FileOption } from "../../ConfigTypes";
import { PlatformBridge } from "../BasePlatform";
export declare class WebBridge extends PlatformBridge {
    open(url: string): Observable<BooleanObject>;
    /**
     * 打开文件路径
     * @param url
     * @param option
     * @returns
     */
    loadFile(url: PathLike, option?: FileOption): Observable<Value.ObjectAble<FileLoadEvent>>;
}
//# sourceMappingURL=WebBase.d.ts.map