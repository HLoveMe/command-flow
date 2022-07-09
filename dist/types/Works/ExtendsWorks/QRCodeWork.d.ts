import { ChannelObject } from "../../Types";
import { InstructionOTO } from "../Instruction";
import { Observable } from "rxjs";
import { QRcodeOption } from "../../Bridge/ConfigTypes";
import { StringObjectAble } from "../../Object/Able/Base/StringObject";
/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */
declare class QRCodeWork extends InstructionOTO {
    name: string;
    run(input: ChannelObject, option?: QRcodeOption): Observable<ChannelObject<StringObjectAble>>;
    static isAble(): boolean;
}
export { QRCodeWork };
//# sourceMappingURL=QRCodeWork.d.ts.map