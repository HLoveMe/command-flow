import { SingleInstruction } from "./Work";
import { InOutputAbleOrNil } from "../Type";

class RequestWork extends SingleInstruction {
  name: string = "RequestWork";
  
  run(input: InOutputAbleOrNil) {
    if(input != null){

      return;
    }
    this.output.next(null);
    this.output.complete();
  }
}


export {
  RequestWork
}