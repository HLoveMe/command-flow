import { Observable, of } from "rxjs";
import { BooleanObject } from "../../../Object/BaseObject";
import { MobileRnBridgeAble } from "../../ConfigTypes";
import { PlatformBridge } from "../BasePlatform";

export class MobileRnBridge
  extends PlatformBridge
  implements MobileRnBridgeAble
{
  open(url: string): Observable<BooleanObject> {
    return of(new BooleanObject(false));
  }
}
