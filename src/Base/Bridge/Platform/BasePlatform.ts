import { Observable, Subscriber } from "rxjs";
import { BooleanObj, StringObj } from "../../Object/BaseObject";
import {
  CommandLike,
  CommandStatus,
  PCPlatformConfigAble,
  QRcodeOption,
  RunTimeInfo,
} from "../ConfigTypes";
import * as QRCode from 'qrcode-generator'

export class PCPlatformConfig implements PCPlatformConfigAble {
  createQrCode(context: String, option?: QRcodeOption): Observable<StringObj> {
    return new Observable((sub: Subscriber<StringObj>) => {
      let width = option?.SideLength ?? 200;
      let margin = 2;
      const qrcode = QRCode(option?.type || 4, option?.Level || "H")
      qrcode.addData((context ?? "") as string)
      qrcode.make();
      const moduleCount = qrcode.getModuleCount();
      const cellSize = (width - margin * 2) / moduleCount;
      const base64 = qrcode.createDataURL(cellSize, margin)
      // const base64 = qrcode.createDataURL(cellSize, margin).replace('data:image/gif;base64', 'data:image/png;base64');
      sub.next(new StringObj(base64));
      sub.complete();
      return {
        unsubscribe: () => sub.unsubscribe()
      }
    })
  }
  loadRunInfo(): Observable<RunTimeInfo> {
    throw new Error("Method not implemented.");
  }
  runCommand(command: CommandLike): Observable<CommandStatus> {
    throw new Error("Method not implemented.");
  }
  open(url: String): Observable<BooleanObj> {
    throw new Error("Method not implemented.");
  }
  loadFile(url: CommandLike): Observable<Buffer> {
    throw new Error("Method not implemented.");
  }
}
