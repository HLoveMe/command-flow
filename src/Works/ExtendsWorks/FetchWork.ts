import { ContextImpl } from '../../Types';
import { Value } from '../../Object';
import { ChannelObject, ChannelValue } from '../../Types';
import { InstructionOTO } from '../Instruction';
import { Observable, Subscriber } from 'rxjs';
import { isJS } from '../../Util/Equipment';
import { RequestParamsInit, ResponseContent } from '../../Bridge/ConfigTypes';
import { ObjectTarget } from '../..';
import { AxiosRequestConfig } from 'axios';
import { tap } from 'rxjs/operators';
export default class FetchWork extends InstructionOTO {
  static NAME: string = 'FetchWork';
  constructor(runConfig?: RequestParamsInit){
    super(runConfig)
  }
  _getInitOption(
    input: Value.ObjectAble<RequestParamsInit>,
    baseOption: RequestParamsInit = {} as RequestParamsInit
  ): AxiosRequestConfig {
    const initParams = input.valueOf();
    const { url, method, timeout, data } = initParams;
    const request = {
      url,
      method: initParams.method || baseOption.method || 'GET',
      timeout: timeout || baseOption.timeout || 10000,
      headers: {
        ...(baseOption.headers || {}),
        ...(initParams.headers || {}),
      },
    } as AxiosRequestConfig;
    request.data = data;
    if (method && method.toLocaleUpperCase() === 'GET') {
      request.headers['Content-Type'] =
        request.headers['Content-Type'] || 'application/json';
    }
    request.timeoutErrorMessage = '请求超时';
    return request;
  }
  run(
    input: ChannelObject<Value.ObjectAble<RequestParamsInit>>,
    baseOption?: RequestParamsInit
  ): Observable<ChannelObject<Value.ObjectAble<any>>> {
    const that = this;
    const options = this._getInitOption(input._value.value, baseOption);
    return new Observable(
      (subscriber: Subscriber<ChannelObject<Value.ObjectAble<any>>>) => {
        const fetchSub = (that.context as ContextImpl).platform
          .fetch(options as AxiosRequestConfig)
          .pipe(
            tap((result: Value.ObjectAble<ResponseContent>) => {
              const { data } = result.valueOf();
              this.logMsg(`[FetchWork][load:data]${data}`, input);
            })
          )
          .subscribe({
            next: (data: Value.ObjectAble<ResponseContent>) => {
              const result: ResponseContent = data.valueOf();
              if (result.error) {
                subscriber.error(result.error);
              } else {
                subscriber.next(
                  new ObjectTarget({
                    ...input._value,
                    value: result.data,
                  })
                );
                subscriber.complete();
              }
            },
            error: (error: Error) => subscriber.error(error),
            complete: () => subscriber.complete(),
          });
        return {
          unsubscribe: () => {
            subscriber.unsubscribe();
            fetchSub.unsubscribe();
          },
        };
      }
    );
  }
  static isAble() {
    return isJS;
  }
}
