import { InstructionOTO } from "../Instruction";
import { Observable } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { unpackValue, wrapperValue } from "../../Util/channel-value-util";
/**
 * 字符串生产QRcode base64
 * input => StringObject
 * output => StringObject
 */
class QRCodeWork extends InstructionOTO {
    name = "QRCodeWork";
    run(input, option) {
        const that = this;
        return new Observable((subscriber) => {
            let target;
            if (input === null || input === undefined)
                target = "";
            else {
                target = unpackValue(input);
            }
            const sub = that.context.platform
                .createQrCode(target, option)
                .subscribe({
                next: (res) => subscriber.next(wrapperValue(input, res._value)),
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
        // return isNode || isWeb || isRN
    }
}
export { QRCodeWork };
//# sourceMappingURL=QRCodeWork.js.map