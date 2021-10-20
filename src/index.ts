import { Context } from "./Base/Context";
import { StringObj } from "./Base/Object/BaseObject";
import {
  Base64DecodeWork,
  Base64EnCodeWork,
} from "./Base/Works/ExtendsWorks/Base64Work";
// import { InOutString } from "./Base/Object/InOutputValue";
// import { BehaviorSubject } from "rxjs";
// import { takeLast } from "rxjs/operators";
// import { QRCodeWork } from "./Base/Works/QRCodeWork";

const context = new Context();
context.addWork(new Base64EnCodeWork());
context.addWork(new Base64DecodeWork());
context.addWork(new Base64DecodeWork());
// context.addWork(new QRCodeWork())

setInterval(() => {
  context.run(new StringObj("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}, 5000);

// // var qr = require('qr-image');

// // const a = qr.imageSync("AAAA", { type: "svg" })
// // console.log(Buffer.from(a).toString('base64'))
