import { Observable } from "rxjs";
import { BooleanObject } from "../../Object";
import { CommandStatus, FileLoadEvent, FileOption, PathLike, PlatformBridgeAble, QRcodeOption, RunTimeInfo, ResponseContent } from "../ConfigTypes";
import { Value } from "../../Object";
import { AxiosRequestConfig } from "axios";
import { HardwareBase } from "./Hardware";
import { StringObjectAble } from "../../Object/Able/Base/StringObject";
export declare class PlatformBridge extends HardwareBase implements PlatformBridgeAble {
    createQrCode(context: String, option?: QRcodeOption): Observable<StringObjectAble>;
    loadRunInfo(): Observable<RunTimeInfo>;
    runCommand(command: string, option?: any): Observable<CommandStatus>;
    open(url: String, option?: any): Observable<BooleanObject>;
    loadFile(url: PathLike, option?: FileOption): Observable<Value.ObjectAble<FileLoadEvent>>;
    fetch(req: AxiosRequestConfig): Observable<Value.ObjectAble<ResponseContent>>;
}
//# sourceMappingURL=BasePlatform.d.ts.map