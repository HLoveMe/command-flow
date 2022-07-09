import { ChannelObject } from "../../Types";
import { InstructionMTM } from "../Instruction";
import { Observable } from "rxjs";
declare class Base64EnCodeWork extends InstructionMTM {
    name: string;
    run(input: ChannelObject): Observable<ChannelObject>;
    static isAble(): boolean;
}
declare class Base64DecodeWork extends InstructionMTM {
    name: string;
    run(input: ChannelObject): Observable<ChannelObject>;
    static isAble(): boolean;
}
export { Base64DecodeWork, Base64EnCodeWork };
//# sourceMappingURL=Base64Work.d.ts.map