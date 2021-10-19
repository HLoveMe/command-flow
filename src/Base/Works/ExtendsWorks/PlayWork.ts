import { SingleInstruction } from "../Work";
import { InOutputAbleOrNil } from "../../Type";

class PlayBase64MusicWork extends SingleInstruction {
  run(input: InOutputAbleOrNil) {
    this.output.complete();
  }
}


export {
  PlayBase64MusicWork
}