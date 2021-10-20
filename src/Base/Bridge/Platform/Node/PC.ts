import { from, Observable } from "rxjs";
import { PCNodejsConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";
const NodeOpen = require("open");

export class PCNodejsConfig
  extends PCPlatformConfig
  implements PCNodejsConfigAble
{
  open(url: string): Observable<boolean> {
    return from(NodeOpen(url, { wait: true }) as Promise<boolean>);
  }
}
