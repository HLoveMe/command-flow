import { Observable, of } from "rxjs";
import { PCRnConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class PCRnConfig
  extends PCPlatformConfig
  implements PCRnConfigAble
{
  open(url: string): Observable<boolean> {
    return of(false)
  }
}
