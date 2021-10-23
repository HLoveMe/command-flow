import { from, fromEvent, Observable, of, Subscription } from "rxjs";
import { BooleanObject, ObjectTarget } from "../../../Object/Able/ObjectAble";
import {
  CommandLike,
  FileLoadEvent,
  FileOption,
  PCNodejsBridgeAble,
} from "../../ConfigTypes";
import * as fs from "fs";
import { Value } from "../../../Types";
import { PlatformBridge } from "../BasePlatform";
const nodeOpen = require("open");

/*** */
export class PCNodejsBridge
  extends PlatformBridge
  implements PCNodejsBridgeAble
{
  open(url: string): Observable<BooleanObject> {
    return from(nodeOpen(url, { wait: true }) as Observable<BooleanObject>);
  }

  loadFile(
    url: CommandLike,
    option?: FileOption
  ): Observable<Value.ObjectAble<FileLoadEvent>> {
    return new Observable((subscriber) => {
      const stat = fs.lstatSync(url as unknown as fs.PathLike);
      const subs: Subscription[] = [];
      if (!fs.existsSync(url as unknown as fs.PathLike)) {
        subscriber.error(new Error(`${url.toString()} is not exists`));
      } else if (stat.isDirectory()) {
        subscriber.error(new Error(`${url.toString()} is not file`));
      } else {
        const rs = fs.createReadStream(url as unknown as fs.PathLike);
        let data = Buffer.of();
        const sub1 = fromEvent(rs, "data").subscribe({
          next: (chunk: Buffer) => {
            data = Buffer.concat([data, chunk]);
            subscriber.next(
              new ObjectTarget<FileLoadEvent>({
                loaded: data.length,
                total: stat.size,
                data,
              })
            );
          },
        });
        const sub2 = fromEvent(rs, "end").subscribe({
          next: () => {
            subscriber.complete();
          },
        });
        subs.push(sub1);
        subs.push(sub2);
      }
      return {
        unsubscribe: () => {
          subscriber.unsubscribe();
          subs.forEach(($1) => $1.unsubscribe());
        },
      };
    });
  }
}
