import { InstructionOTO } from "../Instruction";
import { Observable } from "rxjs";
import { DataObject, ObjectTarget, } from "../../Object";
import { isJS } from "../../Util/Equipment";
import { FileType } from "../../Bridge/ConfigTypes";
import { takeLast, tap } from "rxjs/operators";
import { unpackValue } from "../../Util/channel-value-util";
export default class LoadFileWork extends InstructionOTO {
    name = "LoadFileWork";
    currentConfig = { type: FileType.All };
    constructor(config) {
        super();
        this.currentConfig = config || { type: FileType.All };
    }
    run(input, option) {
        const that = this;
        const runOption = { ...(option), ...(this.currentConfig) };
        return new Observable((subscriber) => {
            const target = unpackValue(input);
            const sub = that.context.platform
                .loadFile(target, runOption)
                .pipe(tap((obj) => {
                const { loaded, total, finish } = obj.valueOf();
                this.logMsg(`加载进度[load:progress]---：${loaded}/${total} 是否完成：${finish}`, input);
            }), takeLast(1))
                .subscribe({
                next: (obj) => {
                    const { data, file } = obj.valueOf();
                    subscriber.next(new ObjectTarget({
                        ...input._value,
                        value: new DataObject(data),
                        option: { file }
                    }));
                    subscriber.complete();
                },
                complete: () => subscriber.complete(),
                error: (err) => subscriber.error(err),
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
//# sourceMappingURL=LoadFileWork.js.map