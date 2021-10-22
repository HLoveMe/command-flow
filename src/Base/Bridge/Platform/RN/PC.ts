import { Observable, of } from "rxjs";
import { BooleanObject } from "../../../Object/BaseObject";
import { PCRnConfigAble } from "../../ConfigTypes";
import { PCPlatformConfig } from "../BasePlatform";

export class PCRnConfig
  extends PCPlatformConfig
  implements PCRnConfigAble
{
  open(url: string): Observable<BooleanObject> {
    return of(new BooleanObject(false));
  }
}
