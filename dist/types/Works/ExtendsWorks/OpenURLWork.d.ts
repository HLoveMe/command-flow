import { ChannelObject } from "../../Types";
import { InstructionOTO } from "../Instruction";
import { Observable } from "rxjs";
import { BooleanObject } from "../../Object";
/**
 * 打开路径
 * http://www.baidu.com
 * node window: file:///C:/Users/Administrator    file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg
 *
 * node:可以打开文件 网页
 * web:只能代开网页
 */
export default class OpenURLWork extends InstructionOTO {
    name: string;
    run(input: ChannelObject, option?: any): Observable<ChannelObject<BooleanObject>>;
    static isAble(): boolean;
}
//# sourceMappingURL=OpenURLWork.d.ts.map