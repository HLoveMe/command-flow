"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("./Base/Context");
var BaseObject_1 = require("./Base/Object/BaseObject");
var Base64Work_1 = require("./Base/Works/ExtendsWorks/Base64Work");
var OpenURLWork_1 = require("./Base/Works/ExtendsWorks/OpenURLWork");
var QRCodeWork_1 = require("./Base/Works/ExtendsWorks/QRCodeWork");
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
        context.run(new BaseObject_1.StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
    }, 5000);
}
// test01()
function test02() {
    var context = new Context_1.Context();
    context.addWork(new OpenURLWork_1.default());
    // context.run(new StringObject("file:///C:/Users/Administrator/AppData/Local/Programs/Python/Python310/"));
    context.run(new BaseObject_1.StringObject("file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg"));
    //d:\元气壁纸缓存\img\116513f379bd664b7cfe5b3b40f5737d.jpg
    // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
test02();
function test03() {
    var context = new Context_1.Context();
    context.addWork(new QRCodeWork_1.QRCodeWork());
    context.run(new BaseObject_1.StringObject("AAAA"));
    // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
// test03()
//# sourceMappingURL=index.js.map