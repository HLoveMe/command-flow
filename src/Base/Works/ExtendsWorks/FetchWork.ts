import { ContextImpl, Value, } from "../../Types";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import { isJS } from "../../Util/Equipment";
import { RequestParamsInit, ResponseContent } from "../../Bridge/ConfigTypes";
import { ObjectTarget } from "../..";
import { AxiosRequestConfig } from "axios";
import { tap } from "rxjs/operators";
export default class FetchWork extends InstructionOTO {
  name: string = "FetchWork";

  _getInitOption(input: Value.ObjectAble<RequestParamsInit>): AxiosRequestConfig {
    const initParams = input.valueOf();
    const { url, method, timeout, data, contextType } = initParams;
    const request = {
      url,
      method: initParams.method || "GET",
      timeout: timeout || 10000,
      headers: {},
    } as AxiosRequestConfig
    request.data = data;
    if (method === "GET") {
      request.headers['Content-Type'] = contextType || 'application/json';
    }
    request.timeoutErrorMessage = '请求超时';
    return request;
  }

  run(input: Value.ObjectAble<RequestParamsInit>): Observable<Value.ObjectAble<any>> {
    const that = this;
    const options = this._getInitOption(input);
    return new Observable((subscriber: Subscriber<Value.ObjectAble<any>>) => {
      const fetchSub = (that.context as ContextImpl).platform.fetch(options as AxiosRequestConfig)
        .pipe(
          tap((result: Value.ObjectAble<ResponseContent>) => {
            const { data } = result.valueOf();
            this.logMsg(`[FetchWork][load:data]${data}`);
          })
        ).subscribe({
          next: (data: Value.ObjectAble<ResponseContent>) => {
            const result: ResponseContent = data.valueOf();
            if (result.error) {
              subscriber.error(result.error);
            } else {
              subscriber.next(new ObjectTarget(result.data));
              subscriber.complete();
            }
          },
          error: (error: Error) => subscriber.error(error),
          complete: () => subscriber.complete(),
        })
      return {
        unsubscribe: () => {
          subscriber.unsubscribe();
          fetchSub.unsubscribe()
        }
      }
    })
  }
  static isAble() {
    return isJS
  }
}
