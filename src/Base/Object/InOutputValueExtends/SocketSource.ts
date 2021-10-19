import { empty, fromEvent } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { InOutData, InOutputAble } from "../../Type";
import { PlatformSelect } from "../../Util/Equipment";
import { BaseRunTime } from "../Environment";

class SocketSource extends BaseRunTime implements InOutputAble {
  socket: WebSocket;
  constructor(socket: WebSocket) {
    super();
    this.socket = socket;
  }
  value(): InOutData {
    if (this.socket && this.socket.readyState == 1) {
      return fromEvent(this.socket, "message").pipe(
        takeUntil(fromEvent(this.socket, "close")),
        map((event) => (event as MessageEvent).data)
      );
    }
    return empty();

    throw new Error("Method not implemented.");
  }
}

export default PlatformSelect({
  web: SocketSource,
  node: SocketSource,
  reactNative: SocketSource,
}) as InOutputAble;
