import { ContextImpl } from "../../Types";
import { ChannelObject, ChannelValue } from "../../Types";
import { InstructionOTO } from "../Instruction";
import { Observable, Subscriber } from "rxjs";
import {
  DataObject,
  ObjectTarget,
} from "../../Object/Able/ObjectAble";
import { isElectron, isMobile, isNode, isPC, isWeb } from "../../Util/Equipment";
import { FileLoadEvent, FileOption } from "../../Bridge/ConfigTypes";
import { takeLast, tap } from "rxjs/operators";
import { unpackValue } from "../../Util/channel-value-util";

export default class LoadFileWork extends InstructionOTO {
  name: string = "LoadFileWork";

  run(input: ChannelObject, option?: FileOption): Observable<ChannelObject<DataObject>> {
    const that = this;
    return new Observable((subscriber: Subscriber<ChannelObject<DataObject>>) => {
      const target = unpackValue(input);
      const sub = (that.context as ContextImpl).platform
        .loadFile(target, option)
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
    return !isMobile;
  }
}
