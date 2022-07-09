import { InstructionOTO } from "../Instruction";
import { Observable } from "rxjs";
import { BooleanObject } from "../../Object";
import { isJS, } from "../../Util/Equipment";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
/**
 * 打开路径
 * http://www.baidu.com
 * node window: file:///C:/Users/Administrator    file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg
 *
 * node:可以打开文件 网页
 * web:只能代开网页
 */
export default class OpenURLWork extends InstructionOTO {
    name = "OpenURLWork";
    run(input, option) {
        const that = this;
        return new Observable((subscriber) => {
            const target = unpackValue(input);
            const sub = that.context.platform
                .open(target, option)
                .subscribe({
                next: _ => subscriber.next(wrapperValue(input, new BooleanObject(true))),
                complete: () => subscriber.complete(),
                error: (err) => subscriber.error(err)
            });
            return {
                unsubscribe: () => {
                    sub.unsubscribe();
                    subscriber.unsubscribe();
                },
            };
        });
    }
    static isAble() {
        return isJS;
    }
}
//# sourceMappingURL=OpenURLWork.js.map