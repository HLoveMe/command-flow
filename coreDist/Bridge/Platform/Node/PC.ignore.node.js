import { from, fromEvent, Observable } from "rxjs";
import { ObjectTarget } from "../../../Object/Able/ObjectAble";
import * as fs from "fs";
import { PlatformBridge } from "../BasePlatform";
const nodeOpen = require("open");
import * as process from "child_process";
/*** */
export class PCNodejsBridge extends PlatformBridge {
    open(url) {
        return from(nodeOpen(url, { wait: true }));
    }
    loadFile(url, option) {
        return new Observable((subscriber) => {
            const stat = fs.lstatSync(url);
            const subs = [];
            if (!fs.existsSync(url)) {
                subscriber.error(new Error(`${url.toString()} is not exists`));
            }
            else if (stat.isDirectory()) {
                subscriber.error(new Error(`${url.toString()} is not file`));
            }
            else {
                const rs = fs.createReadStream(url);
                let data = Buffer.of();
                const sub1 = fromEvent(rs, "data").subscribe({
                    next: (chunk) => {
                        data = Buffer.concat([data, chunk]);
                        subscriber.next(new ObjectTarget({
                            total: stat.size,
                            loaded: data.byteLength,
                            data: data,
                            finish: false,
                            file: null,
                        }));
                    },
                });
                const sub2 = fromEvent(rs, "end").subscribe({
                    next: () => {
                        subscriber.complete();
                    },
                });
                subs.push(sub1);
                subs.push(sub2);
            }
            return {
                unsubscribe: () => {
                    subscriber.unsubscribe();
                    subs.forEach(($1) => $1.unsubscribe());
                },
            };
        });
    }
    /**
   * = "#javascript#console.log('hello world')" :default
   *  = "#shell#echo hello world"
   * @param command
   * @param option
   * @returns
   */
    runCommand(command, option) {
        return new Observable((subscriber) => {
            const runJs = () => {
                let result = null;
                let status = false;
                let error = null;
                try {
                    result = eval(command === null || command === void 0 ? void 0 : command.toString());
                    status = true;
                }
                catch (err) {
                    result = null;
                    status = false;
                    error = err;
                }
                return {
                    status, result, command, error
                };
            };
            if (command.startsWith("#shell#")) {
                process.exec(command, function (error, stdout, stderr) {
                    subscriber.next({
                        result: stdout,
                        command,
                        status: error != null,
                        error,
                    });
                    subscriber.complete();
                });
            }
            else if (command.startsWith("#javascript#")) {
                subscriber.next(runJs());
                subscriber.complete();
            }
            else {
                subscriber.next(runJs());
                subscriber.complete();
            }
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
}
//# sourceMappingURL=PC.ignore.node.js.map