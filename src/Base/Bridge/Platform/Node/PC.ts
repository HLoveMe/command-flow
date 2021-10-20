import { from, Observable, of } from "rxjs";
import { PCNodejsConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";
const nodeOpen = require("open");

export class PCNodejsConfig
  extends PCPlatformConfig
  implements PCNodejsConfigAble
{
  open(url: string): Observable<boolean> {
    const a = nodeOpen(url, { wait: true }).then((a) => {
      debugger;
    });
    return of(true);
    // return from( as Promise<boolean>);
  }
}
