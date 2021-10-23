import { Observable, Subscriber } from "rxjs";
import { BooleanObject, StringObject } from "../../Object/Able/ObjectAble";
import {
  CommandStatus,
  FileLoadEvent,
  FileOption,
  PathLike,
  PCPlatformBridgeAble,
  QRcodeOption,
  RunTimeInfo,
} from "../ConfigTypes";
import * as QRCode from "qrcode-generator";
import { Value } from "../../Types";

export class PlatformBridge implements PCPlatformBridgeAble {
  createQrCode(
    context: String,
    option?: QRcodeOption
  ): Observable<StringObject> {
    return new Observable((sub: Subscriber<StringObject>) => {
      let width = option?.SideLength ?? 200;
      let margin = 2;
      const qrcode = QRCode(option?.type || 4, option?.Level || "H");
      qrcode.addData((context ?? "") as string);
      qrcode.make();
      const moduleCount = qrcode.getModuleCount();
      const cellSize = (width - margin * 2) / moduleCount;
      const base64 = qrcode.createDataURL(cellSize, margin);
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
}
