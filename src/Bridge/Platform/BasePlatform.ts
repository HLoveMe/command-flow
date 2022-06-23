import { async, Observable, of, Subscriber } from "rxjs";
import { BooleanObject, StringObject, ObjectTarget } from "../../Object/Able/ObjectAble";
import {
  CommandStatus,
  FileLoadEvent,
  FileOption,
  PathLike,
  PlatformBridgeAble,
  QRcodeOption,
  RunTimeInfo,
  ResponseContent,
  Hardware,
} from "../ConfigTypes";
import * as QRCode from "qrcode-generator";
import { Value } from "../../Object";
import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { HardwareBase } from "./Hardware";

export class PlatformBridge extends HardwareBase implements PlatformBridgeAble {
  createQrCode(
    context: String,
    option?: QRcodeOption
  ): Observable<StringObject> {
    return new Observable((sub: Subscriber<StringObject>) => {
      let width = option?.SideLength ?? 200;
      let margin = 2;
      const qrCode = QRCode(option?.type || 4, option?.Level || "H");
      qrCode.addData((context ?? "") as string);
      qrCode.make();
      const moduleCount = qrCode.getModuleCount();
      const cellSize = (width - margin * 2) / moduleCount;
      const base64 = qrCode.createDataURL(cellSize, margin);
      // const base64 = qrcode.createDataURL(cellSize, margin).replace('data:image/gif;base64', 'data:image/png;base64');
      sub.next(new StringObject(base64));
      sub.complete();
      return {
        unsubscribe: () => sub.unsubscribe(),
      };
    });
  }
  loadRunInfo(): Observable<RunTimeInfo> {
    throw new Error("Method not implemented.");
  }
  runCommand(command: string, option?: any): Observable<CommandStatus> {
    return new Observable((subscriber) => {
      let result = null;
      let error = null;
      let status = false;
      try {
        result = eval(command?.toString())
        status = true;
      } catch (_error) {
        error = _error;
        status = false;
      } finally {
        subscriber.next({
          result,
          status,
          error,
          command
        })
        subscriber.complete()
      }
      return {
        unsubscribe: () => subscriber.unsubscribe()
      }
    })
  }
  open(url: String, option?: any): Observable<BooleanObject> {
    throw new Error("Method not implemented.");
  }
  loadFile(
    url: PathLike,
    option?: FileOption
  ): Observable<Value.ObjectAble<FileLoadEvent>> {
    throw new Error("Method not implemented.");
  }
  fetch(req: AxiosRequestConfig): Observable<Value.ObjectAble<ResponseContent>> {
    return new Observable((subscriber) => {
      Axios.request(req)
        .then((response: AxiosResponse) => {
          let error = null;
          let data = null;
          const content = {} as ResponseContent
          if (response.status !== 200) {
            error = new Error(`${response.status} ${response.statusText}`);
          } else {
            data = response.data
          }
          content.data = data;
          content.error = error;
          content.response = response;
          subscriber.next(new ObjectTarget(content));
          subscriber.complete()
        })
        .catch((error) => {
          subscriber.error(error)
        })
      return {
        unsubscribe: () => {
          subscriber.unsubscribe();
        }
      }
    })
  }
}
