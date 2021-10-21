import { BaseType, ContextImpl } from "../../Type";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { ValueAble } from "../../Object/ObjectTypes";
import { BooleanObj } from "../../Object/BaseObject";
import { isNode, isPC, isRN, isWeb } from "../../Util/Equipment";
import { FileOption } from "../../Bridge/ConfigTypes";

export default class LoadFileWork extends InstructionOTO {
    name: string = "LoadFileWork";
    run(input: BaseType, option?: FileOption): Observable<BooleanObj> {
        const that = this;
        return new Observable((subscriber: Subscriber<BooleanObj>) => {
            let target: string;
            if (input === null || input === undefined) target = "";
            else {
                target = ((input as ValueAble).valueOf() as Object).toString();
            }
            const sub = (that.context as ContextImpl).platform
                .loadFile(target, option)
                .subscribe({
                    next: _ => subscriber.next(new BooleanObj(true)),
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
        return (isNode && isPC) || (isWeb && isPC) || isRN
    }
}