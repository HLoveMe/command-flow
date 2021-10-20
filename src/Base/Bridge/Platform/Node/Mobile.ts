import { Observable, of } from "rxjs";
import { BooleanObj } from "../../../Object/BaseObject";
import { MobileNodejsConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class MobileNodejsConfig
  extends PCPlatformConfig
  implements MobileNodejsConfigAble {
  open(url: string): Observable<BooleanObj> {
    return of(new BooleanObj(false));
  }
}
