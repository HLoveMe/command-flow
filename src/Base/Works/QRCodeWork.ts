import { SingleInstruction } from "./Work";
import { InOutputAbleOrNil } from "../Type";

class QRCodeWork extends SingleInstruction {
  rn_run(input: InOutputAbleOrNil) {
  }
  web_run() { }
  node_run() { }
  run(input: InOutputAbleOrNil) {
    this.output.complete();
  }
}


export {
  QRCodeWork
}