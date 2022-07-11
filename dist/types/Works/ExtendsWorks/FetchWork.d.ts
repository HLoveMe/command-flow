import { Value } from '../../Object';
import { ChannelObject } from '../../Types';
import { InstructionOTO } from '../Instruction';
import { Observable } from 'rxjs';
import { RequestParamsInit } from '../../Bridge/ConfigTypes';
import { AxiosRequestConfig } from 'axios';
export default class FetchWork extends InstructionOTO {
    name: string;
    _getInitOption(input: Value.ObjectAble<RequestParamsInit>, baseOption?: RequestParamsInit): AxiosRequestConfig;
    run(input: ChannelObject<Value.ObjectAble<RequestParamsInit>>, baseOption?: RequestParamsInit): Observable<ChannelObject<Value.ObjectAble<any>>>;
    static isAble(): boolean;
}
//# sourceMappingURL=FetchWork.d.ts.map