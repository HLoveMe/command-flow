import { ChannelObject } from '../../Types';
import { InstructionOTO } from '../Instruction';
import { Observable } from 'rxjs';
import { DataObject } from '../../Object';
import { FileOption } from '../../Bridge/ConfigTypes';
export default class LoadFileWork extends InstructionOTO {
    name: string;
    currentConfig: FileOption;
    constructor(config?: FileOption);
    run(input: ChannelObject, option?: FileOption): Observable<ChannelObject<DataObject>>;
    static isAble(): boolean;
}
//# sourceMappingURL=LoadFileWork.d.ts.map