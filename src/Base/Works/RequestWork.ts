import { SingleInstruction } from "./Work";
import { InOutputAbleOrNil } from "../Type";
import { ValueAble, ObjectAble } from "../Object/ObjectTypes";
import { takeLast, map, flatMap } from "rxjs/operators";
import { ValueSwitchTapCatch } from "../Util/rxjs_operators";
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { RequestOption } from "./WorkTypes";
class RequestWork extends SingleInstruction {
  name: string = "RequestWork";
  validationInput(value: ValueAble): boolean {
    return true;
  }
  getHttpConfig(config: RequestOption): AxiosRequestConfig {
    const axiosConfi = {
      url:config.URL,
      method:config.Method,
      params:config.Params || {},
      headers:config.header || {},
      data:config.Body || {},
      timeout:config.Timeout || 10000,
    } as AxiosRequestConfig
    return axiosConfi;
  }
  run(input: InOutputAbleOrNil) {
    //RequestOption
    if (input != null) {
      const that = this;
      input.value().pipe(
        takeLast(1),
        map(value => {
          if (!that.validationInput(value)) throw "参数验证失败";
          return (value as ObjectAble).valueOf() as RequestOption
        }),
        flatMap(value => axios.request(that.getHttpConfig(value)).then((respone: AxiosResponse) => {
          // {
          //   // `data` 由服务器提供的响应
          //   data: {},
          
          //   // `status` 来自服务器响应的 HTTP 状态码
          //   status: 200,
          
          //   // `statusText` 来自服务器响应的 HTTP 状态信息
          //   statusText: 'OK',
          
          //   // `headers` 服务器响应的头
          //   headers: {},
          
          //   // `config` 是为请求提供的配置信息
          //   config: {}
          // }
          return respone.data
        })),
        ValueSwitchTapCatch(that)
      )
      return;
    }
    this.output.next(null);
    this.output.complete();
  }
}


export {
  RequestWork
}