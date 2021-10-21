import { from, fromEvent, Observable, of, Subscription } from "rxjs";
import { BooleanObj, DataObj } from "../../../Object/BaseObject";
import { CommandLike, FileOption, PCNodejsConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";
import * as path from 'path'
import * as fs from 'fs'
const nodeOpen = require("open");

/*** */
export class PCNodejsConfig
  extends PCPlatformConfig
  implements PCNodejsConfigAble {
  open(url: string): Observable<BooleanObj> {
    return from(nodeOpen(url, { wait: true }) as Observable<BooleanObj>);
  }

  loadFile(url: CommandLike, option?: FileOption): Observable<DataObj> {
    return new Observable(subscriber => {
      const stat = fs.lstatSync(url as unknown as fs.PathLike);
      const subs: Subscription[] = []
      if (stat.isDirectory()) {
        subscriber.error(new Error(`${url.toString()} is not file`))
      } else {
        const rs = fs.createReadStream(url as unknown as fs.PathLike, 'binary');
        let data = Buffer.of();
        const sub1 = fromEvent(rs, 'data').subscribe({
          next: (chunk: Buffer) => {
            data = Buffer.concat([data, chunk])
          }
        })
        const sub2 = fromEvent(rs, 'end').subscribe({
          next: () => {
            subscriber.next(new DataObj(data));
            subscriber.complete()
          },
        })
        subs.push(sub1)
        subs.push(sub2)
      }
      return {
        unsubscribe: () => {
          subscriber.unsubscribe();
          subs.forEach($1 => $1.unsubscribe())
        }
      }
    })
  }
}
