import { from, Observable, of } from "rxjs";
import { PCNodejsConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";
const nodeOpen = require("open");

export class PCNodejsConfig
  extends PCPlatformConfig
  implements PCNodejsConfigAble {
  open(url: string): Observable<boolean> {
    return from(nodeOpen(url, { wait: true }) as Promise<boolean>);
  }
}
