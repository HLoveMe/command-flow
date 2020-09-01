import { Context } from "./Base/Context";
import { Base64DecodeWork, Base64EnCodeWork } from "./Base/Works/Base64Work";
import { InOutString } from "./Base/InOutputValue";
import { BehaviorSubject } from "rxjs";
import { takeLast } from "rxjs/operators";

const context = new Context();
context.addWork(new Base64DecodeWork())
// context.addWork(new Base64EnCodeWork())
context.testRun(new InOutString("zzzh"))