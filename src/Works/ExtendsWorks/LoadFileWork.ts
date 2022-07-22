import { ContextImpl } from '../../Types';
import { ChannelObject, ChannelValue } from '../../Types';
import { InstructionOTO } from '../Instruction';
import { Observable, Subscriber } from 'rxjs';
import { DataObject, ObjectTarget, Value } from '../../Object';
import { isJS } from '../../Util/Equipment';
import { FileLoadEvent, FileOption, FileType } from '../../Bridge/ConfigTypes';
import { takeLast, tap } from 'rxjs/operators';
import { unpackValue } from '../../Util/channel-value-util';

export default class LoadFileWork extends InstructionOTO {
  static NAME: string = 'LoadFileWork';
  constructor(runConfig?: FileOption) {
    super(runConfig);
  }

  run(
    input: ChannelObject,
    option?: FileOption
  ): Observable<ChannelObject<DataObject>> {
    const that = this;
    return new Observable(
      (subscriber: Subscriber<ChannelObject<DataObject>>) => {
        const target = unpackValue(input);
        const sub = (that.context as ContextImpl).platform
          .loadFile(target, option)
          .pipe(
            tap((data) => {
              const obj = data as Value.ObjectAble<FileLoadEvent>;
              const { loaded, total, finish } = obj.valueOf();
              this.logMsg(
                `加载进度[load:progress]---：${loaded}/${total} 是否完成：${finish}`,
                input
              );
            }),
            takeLast(1)
          )
          .subscribe({
            next: (obj: Value.ObjectAble<FileLoadEvent>) => {
              const { data, file } = obj.valueOf();
              subscriber.next(
                new ObjectTarget({
                  ...input._value,
                  value: new DataObject(data),
                  option: { file },
                })
              );
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
      }
    );
  }
  static isAble() {
    return isJS;
  }
}
