// import { Context } from "./Base/Context";
// import { Base64DecodeWork, Base64EnCodeWork } from "./Base/Works/Base64Work";
// import { InOutString } from "./Base/Object/InOutputValue";
// import { BehaviorSubject } from "rxjs";
// import { takeLast } from "rxjs/operators";
// import { QRCodeWork } from "./Base/Works/QRCodeWork";

import { isNode } from "./Base/Util/EquipmentTools";

// const context = new Context();
// context.addWork(new Base64EnCodeWork())
// context.addWork(new Base64DecodeWork())
// context.addWork(new QRCodeWork())

// context.testRun(new InOutString("https://www.baidu.com/s?ie=UTF-8&wd=jimp"))

// // var qr = require('qr-image');


// // const a = qr.imageSync("AAAA", { type: "svg" })
// // console.log(Buffer.from(a).toString('base64'))


class A {
  @isNode
  _isAA() { }
}

console.log(new A()._isAA())