"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("./Base/Context");
var Base64Work_1 = require("./Base/Works/Base64Work");
var InOutputValue_1 = require("./Base/InOutputValue");
var context = new Context_1.Context();
context.addWork(new Base64Work_1.Base64EnCodeWork());
context.addWork(new Base64Work_1.Base64DecodeWork());
context.testRun(new InOutputValue_1.InOutString("zzzh"));
// var qr = require('qr-image');
// const a = qr.imageSync("AAAA", { type: "svg" })
// console.log(Buffer.from(a).toString('base64'))
//# sourceMappingURL=index.js.map