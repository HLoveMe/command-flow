import { from, Observable, of } from "rxjs";
import { BooleanObj } from "../../../Object/BaseObject";
import { PCNodejsConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";
const nodeOpen = require("open");

/*** */
export class PCNodejsConfig
  extends PCPlatformConfig
  implements PCNodejsConfigAble {
  open(url: string): Observable<BooleanObj> {
    return from(nodeOpen(url, { wait: true }) as Observable<BooleanObj>);
  }
}
