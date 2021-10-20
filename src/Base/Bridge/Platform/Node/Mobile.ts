import { Observable, of } from "rxjs";
import { MobileNodejsConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class MobileNodejsConfig
  extends PCPlatformConfig
  implements MobileNodejsConfigAble
{
  open(url: string): Observable<boolean> {
    return of(false);
  }
}
