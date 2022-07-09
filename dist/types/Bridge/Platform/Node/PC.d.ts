import { Observable } from 'rxjs';
import { BooleanObject } from '../../../Object';
import { PathLike, FileLoadEvent, FileOption, CommandStatus } from '../../ConfigTypes';
import { Value } from '../../../Object';
import { PlatformBridge } from '../BasePlatform';
/*** */
export declare class PCNodejsBridge extends PlatformBridge {
    open(url: string): Observable<BooleanObject>;
    loadFile(url: PathLike, option?: FileOption): Observable<Value.ObjectAble<FileLoadEvent>>;
    /**
     * = "#javascript#console.log('hello world')" :default
     *  = "#shell#echo hello world"
     * @param command
     * @param option
     * @returns
     */
    runCommand(command: string, option?: any): Observable<CommandStatus>;
}
//# sourceMappingURL=PC.d.ts.map