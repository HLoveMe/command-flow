import { from, fromEvent, Observable, of, Subscription } from "rxjs";
import { BooleanObject, ObjectTarget } from "../../../Object/BaseObject";
import {
  CommandLike,
  FileLoadEvent,
  FileOption,
  PCNodejsConfigAble,
} from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";
import * as path from "path";
import * as fs from "fs";
import { ObjectAble } from "../../../Object/ObjectTypes";
const nodeOpen = require("open");

/*** */
export class PCNodejsConfig
  extends PCPlatformConfig
  implements PCNodejsConfigAble
{
  open(url: string): Observable<BooleanObject> {
    return from(nodeOpen(url, { wait: true }) as Observable<BooleanObject>);
  }

  loadFile(
    url: CommandLike,
    option?: FileOption
  ): Observable<ObjectAble<FileLoadEvent>> {
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
