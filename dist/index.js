"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Context_1 = require("./Base/Context");
var ObjectAble_1 = require("./Base/Object/Able/ObjectAble");
var Control_1 = require("./Base/Object/Control");
var Base64Work_1 = require("./Base/Works/ExtendsWorks/Base64Work");
var LoadFileWork_1 = require("./Base/Works/ExtendsWorks/LoadFileWork");
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
        context.run(new ObjectAble_1.StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
    }, 5000);
}
// test01()
function test02() {
    var context = new Context_1.Context();
    context.addWork(new OpenURLWork_1.default());
    // context.run(new StringObject("file:///C:/Users/Administrator/AppData/Local/Programs/Python/Python310/"));
    context.run(new ObjectAble_1.StringObject("file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg"));
    //d:\元气壁纸缓存\img\116513f379bd664b7cfe5b3b40f5737d.jpg
    // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
// test02()
function test03() {
    var context = new Context_1.Context();
    context.addWork(new QRCodeWork_1.QRCodeWork());
    context.run(new ObjectAble_1.StringObject("AAAA"));
    // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
// test03()
function test04() {
    var context = new Context_1.Context();
    context.addWork(new LoadFileWork_1.default());
    context.run(new ObjectAble_1.StringObject("C:\\Users\\zihao.zhu\\Desktop\\chrome\\bocbaocobfecmglnmeaeppambideimao_2.1.3_chrome.zzzmh.cn.crx"));
}
// test04()
function test05() {
    var data1 = new ObjectAble_1.DataObject(Buffer.from([]));
    var data2 = new ObjectAble_1.DataObject(Buffer.from([]));
    debugger;
    data1.less(data2);
    var result = (data1).compare(Control_1.ControlFlow.CompareEnum.Equal, data2);
}
test05();
//# sourceMappingURL=index.js.map