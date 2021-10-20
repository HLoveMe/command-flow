import { Observable } from "rxjs";
import {
  CommandLike,
  CommandStatus,
  PCPlatformConfigAble,
  RunTimeInfo,
} from "../ConfigTypes";

export class PCPlatformConfig implements PCPlatformConfigAble {
  loadRunInfo(): Observable<RunTimeInfo> {
    throw new Error("Method not implemented.");
  }
  runCommand(command: CommandLike): Observable<CommandStatus> {
    throw new Error("Method not implemented.");
  }
  open(url: String): Observable<boolean> {
    throw new Error("Method not implemented.");
  }
  loadFile(url: CommandLike): Observable<Buffer> {
    throw new Error("Method not implemented.");
  }
}
