import { Base64 } from 'js-base64';
import { InstructionMTM } from "../Instruction";
import { Observable } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
//编码
class Base64EnCodeWork extends InstructionMTM {
    name = "Base64EnCodeWork";
    run(input) {
        return new Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = unpackValue(input);
            }
            subscriber.next(wrapperValue(input, Base64.encode(target)));
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
    static isAble() {
        return isJS;
    }
}
//解码
class Base64DecodeWork extends InstructionMTM {
    name = "Base64DecodeWork";
    run(input) {
        return new Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = '';
            else {
                target = unpackValue(input);
            }
            subscriber.next(wrapperValue(input, Base64.decode(target)));
            subscriber.complete();
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
    static isAble() {
        return isJS;
    }
}
export { Base64DecodeWork, Base64EnCodeWork };
//# sourceMappingURL=Base64Work.js.map