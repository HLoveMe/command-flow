import { SingleInstruction } from "./Work";
import { InOutputAbleOrNil, ConfigInfo } from "../Type";
import { ValueAble } from "../Object/ObjectTypes";
import { takeLast, map } from "rxjs/operators";
import { ValueSwitchTapCatch } from "../Util/rxjs_operators";

class RequestWork extends SingleInstruction {
  name: string = "RequestWork";

  config: ConfigInfo = {
    json: true,
    text: false
  };
  setConfigOfResponse(json: Boolean = true) {
    this.config.json = json;
    this.config.text = !json;
  }
  validationInput(value: ValueAble): boolean {
    return true;
  }
  run(input: InOutputAbleOrNil) {
    if (input != null) {
      const that = this;
      input.value().pipe(
        takeLast(1),
        map(value => {
          if (!that.validationInput(value)) throw "参数验证失败";

        }),
        ValueSwitchTapCatch(that)
      )
      return;
    }
    this.output.next(null);
    this.output.complete();
  }
}


export {
  RequestWork
}