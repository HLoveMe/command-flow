import { Observable, of } from "rxjs";
import { BooleanObject, ObjectTarget } from "../../../Object/Able/ObjectAble";
import { Value } from "../../../Types";
import {
  FileLoadEvent,
  FileOption,
  PathLike,
  PCWebBridgeAble,
} from "../../ConfigTypes";
import { PlatformBridge } from "../BasePlatform";
import { WebBridge } from "./WebBase";

export class PCWebBridge extends WebBridge implements PCWebBridgeAble {
  
}