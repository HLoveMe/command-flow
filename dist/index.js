"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("./Base/Context");
var BaseObject_1 = require("./Base/Object/BaseObject");
var Base64Work_1 = require("./Base/Works/ExtendsWorks/Base64Work");
// import { InOutString } from "./Base/Object/InOutputValue";
// import { BehaviorSubject } from "rxjs";
// import { takeLast } from "rxjs/operators";
// import { QRCodeWork } from "./Base/Works/QRCodeWork";
var context = new Context_1.Context();
context.addWork(new Base64Work_1.Base64EnCodeWork());
context.addWork(new Base64Work_1.Base64DecodeWork());
context.addWork(new Base64Work_1.Base64DecodeWork());
// context.addWork(new QRCodeWork())
context.run(new BaseObject_1.StringObj("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
// // var qr = require('qr-image');
// // const a = qr.imageSync("AAAA", { type: "svg" })
// // console.log(Buffer.from(a).toString('base64'))
//# sourceMappingURL=index.js.map