import { ContextImpl } from "../../Types";
import { ChannelObject, ChannelValue } from "../../Types";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import {
  DataObject,
  ObjectTarget,
} from "../../Object";
import { isElectron, isJS, isMobile, isNode, isPC, isWeb } from "../../Util/Equipment";
import { FileLoadEvent, FileOption, FileType } from "../../Bridge/ConfigTypes";
import { takeLast, tap } from "rxjs/operators";
import { unpackValue } from "../../Util/channel-value-util";

export default class LoadFileWork extends InstructionOTO {
  name: string = "LoadFileWork";
  currentConfig: FileOption = { type: FileType.All };
  constructor(config?: FileOption) {
    super();
    this.currentConfig = config || { type: FileType.All };
  }

  run(input: ChannelObject, option?: FileOption): Observable<ChannelObject<DataObject>> {
    const that = this;
    const runOption = { ...(option), ...(this.currentConfig) }
    return new Observable((subscriber: Subscriber<ChannelObject<DataObject>>) => {
      const target = unpackValue(input);
      const sub = (that.context as ContextImpl).platform
        .loadFile(target, runOption)
        .pipe(
          tap((obj: ObjectTarget<FileLoadEvent>) => {
            const { loaded, total, finish } = obj.valueOf();
            this.logMsg(`加载进度[load:progress]---：${loaded}/${total} 是否完成：${finish}`, input);
          }),
          takeLast(1)
        )
        .subscribe({
          next: (obj: ObjectTarget<FileLoadEvent>) => {
            const { data, file } = obj.valueOf();
            subscriber.next(new ObjectTarget({
              ...input._value,
              value: new DataObject(data),
              option: { file }
            }));
            subscriber.complete();
          },
          complete: () => subscriber.complete(),
          error: (err) => subscriber.error(err),
        });
      return {
        unsubscribe: () => {
          sub.unsubscribe();
          subscriber.unsubscribe();
        },
      };
    });
  }
  static isAble() {
    return isJS;
  }
}
