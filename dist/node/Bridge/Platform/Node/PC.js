"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCNodejsBridge = void 0;
const rxjs_1 = require("rxjs");
const ObjectAble_1 = require("../../../Object/Able/ObjectAble");
const fs = require("fs");
const BasePlatform_1 = require("../BasePlatform");
const nodeOpen = require('open');
const process = require("child_process");
/*** */
class PCNodejsBridge extends BasePlatform_1.PlatformBridge {
    open(url) {
        return new rxjs_1.Observable((subscriber) => {
            nodeOpen(url, { wait: true }).then($1 => {
                debugger;
                subscriber.next(new ObjectAble_1.BooleanObject(true));
                subscriber.complete();
            });
            return {
                unsubscribe: () => subscriber.unsubscribe(),
            };
        });
    }
    loadFile(url, option) {
        return new rxjs_1.Observable((subscriber) => {
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
                const sub1 = (0, rxjs_1.fromEvent)(rs, 'data').subscribe({
                    next: (chunk) => {
                        data = Buffer.concat([data, chunk]);
                        subscriber.next(new ObjectAble_1.ObjectTarget({
                            total: stat.size,
                            loaded: data.byteLength,
                            data: data,
                            finish: false,
                            file: null,
                        }));
                    },
                    complete: () => { },
                    error: (err) => { }
                });
                const sub2 = (0, rxjs_1.fromEvent)(rs, 'end').subscribe({
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
        return new rxjs_1.Observable((subscriber) => {
            const runJs = () => {
                let result = null;
                let status = false;
                let error = null;
                try {
                    result = eval(command?.toString());
                    status = true;
                }
                catch (err) {
                    result = null;
                    status = false;
                    error = err;
                }
                return {
                    status,
                    result,
                    command,
                    error,
                };
            };
            if (command.startsWith('#shell#')) {
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
            else if (command.startsWith('#javascript#')) {
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
exports.PCNodejsBridge = PCNodejsBridge;
//# sourceMappingURL=PC.js.map