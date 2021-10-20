"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("./Base/Context");
var BaseObject_1 = require("./Base/Object/BaseObject");
var Base64Work_1 = require("./Base/Works/ExtendsWorks/Base64Work");
var OpenURLWork_1 = require("./Base/Works/ExtendsWorks/OpenURLWork");
// import { InOutString } from "./Base/Object/InOutputValue";
// import { BehaviorSubject } from "rxjs";
// import { takeLast } from "rxjs/operators";
// import { QRCodeWork } from "./Base/Works/QRCodeWork";
function test01() {
    var context = new Context_1.Context();
    context.addWork(new Base64Work_1.Base64EnCodeWork());
    context.addWork(new Base64Work_1.Base64DecodeWork());
    context.addWork(new Base64Work_1.Base64DecodeWork());
    setInterval(function () {
        context.run(new BaseObject_1.StringObj("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
    }, 5000);
}
// test01()
function test02() {
    var context = new Context_1.Context();
    context.addWork(new OpenURLWork_1.OpenURLWork());
    context.run(new BaseObject_1.StringObj("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
test02();
//# sourceMappingURL=index.js.map