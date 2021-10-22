import { Observable, of } from "rxjs";
import { BooleanObject } from "../../../Object/BaseObject";
import { PCRnBridgeAble } from "../../ConfigTypes";
import {  PlatformBridge } from "../BasePlatform";

export class PCRnBridge
  extends PlatformBridge
  implements PCRnBridgeAble
{
  open(url: string): Observable<BooleanObject> {
    return of(new BooleanObject(false));
  }
}
