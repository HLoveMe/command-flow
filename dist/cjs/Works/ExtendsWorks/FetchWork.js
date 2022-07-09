"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Instruction_1 = require("../Instruction");
const rxjs_1 = require("rxjs");
const Equipment_1 = require("../../Util/Equipment");
const __1 = require("../..");
const operators_1 = require("rxjs/operators");
class FetchWork extends Instruction_1.InstructionOTO {
    name = "FetchWork";
    _getInitOption(input, baseOption) {
        const initParams = input.valueOf();
        const { url, method, timeout, data } = initParams;
        const request = {
            url,
            method: initParams.method || baseOption.method || "GET",
            timeout: timeout || baseOption.timeout || 10000,
            headers: {
                ...(baseOption.headers || {}),
                ...(initParams.headers || {}),
            },
        };
        request.data = data;
        if (method.toLocaleUpperCase() === "GET") {
            request.headers['Content-Type'] = request.headers['Content-Type'] || 'application/json';
        }
        request.timeoutErrorMessage = '请求超时';
        return request;
    }
    run(input, baseOption) {
        const that = this;
        const options = this._getInitOption(input._value.value, baseOption);
        return new rxjs_1.Observable((subscriber) => {
            const fetchSub = that.context.platform.fetch(options)
                .pipe((0, operators_1.tap)((result) => {
                const { data } = result.valueOf();
                this.logMsg(`[FetchWork][load:data]${data}`, input);
            })).subscribe({
                next: (data) => {
                    const result = data.valueOf();
                    if (result.error) {
                        subscriber.error(result.error);
                    }
                    else {
                        subscriber.next(new __1.ObjectTarget({
                            ...input._value,
                            value: result.data,
                        }));
                        subscriber.complete();
                    }
                },
                error: (error) => subscriber.error(error),
                complete: () => subscriber.complete(),
            });
            return {
                unsubscribe: () => {
                    subscriber.unsubscribe();
                    fetchSub.unsubscribe();
                }
            };
        });
    }
    static isAble() {
        return Equipment_1.isJS;
    }
}
exports.default = FetchWork;
