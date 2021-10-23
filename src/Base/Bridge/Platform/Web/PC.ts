import { Observable, of } from "rxjs";
import {
  BooleanObject,
  ObjectTarget,
} from "../../../Object/Able/ObjectAble";
import { ObjectAble } from "../../../Object/Able/Ables";
import {
  CommandLike,
  FileLoadEvent,
  FileOption,
  PCWebBridgeAble,
} from "../../ConfigTypes";
import { PlatformBridge } from "../BasePlatform";

export class PCWebBridge extends PlatformBridge implements PCWebBridgeAble {
  open(url: string): Observable<BooleanObject> {
    const result = window.open(url, "__blank");
    return of(new BooleanObject(result !== null));
  }
  loadFile(
    url: CommandLike,
    option?: FileOption
  ): Observable<ObjectAble<FileLoadEvent>> {
    return new Observable((subscriber) => {
      const input = document.createElement("input");
      input.type = "file";
      input.id = "_temp_input_select";
      input.accept = option?.type || "*";
      input.style.display = "none";
      document.body.append(input);
      input.addEventListener("change", (_) => {
        const reader = new FileReader();
        reader.onprogress = (info: ProgressEvent) => {
          const { total, loaded } = info;
          const data = Buffer.from(reader.result as ArrayBuffer);
          subscriber.next(
            new ObjectTarget<FileLoadEvent>({
              total,
              loaded,
              data: data,
            } as FileLoadEvent)
          );
        };
        reader.onload = (info: ProgressEvent) => {
          const data = Buffer.from(reader.result as ArrayBuffer);
          const { total, loaded } = info;
          subscriber.next(
            new ObjectTarget<FileLoadEvent>({ total, loaded, data })
          );
          subscriber.complete();
        };
        reader.readAsArrayBuffer(input.files[0]);
      });
      input.click();
      return {
        unsubscribe: () => subscriber.unsubscribe(),
      };
    });
  }
}
