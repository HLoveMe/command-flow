"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
function test01() {
    var context = new Base_1.Context();
    context.addWork(new Base_1.Base64EnCodeWork());
    context.addWork(new Base_1.Base64DecodeWork());
    context.addWork(new Base_1.Base64DecodeWork());
    setInterval(function () {
        context.run(new Base_1.StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
    }, 5000);
}
// test01()
function test02() {
    var context = new Base_1.Context();
    context.addWork(new Base_1.OpenURLWork());
    // context.run(new StringObject("file:///C:/Users/Administrator/AppData/Local/Programs/Python/Python310/"));
    context.run(new Base_1.StringObject("file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg"));
    //d:\元气壁纸缓存\img\116513f379bd664b7cfe5b3b40f5737d.jpg
    // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
// test02()
function test03() {
    var context = new Base_1.Context();
    context.addWork(new Base_1.QRCodeWork());
    context.run(new Base_1.StringObject("AAAA"));
    // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
test03();
function test04() {
    var context = new Base_1.Context();
    context.addWork(new Base_1.LoadFileWork());
    context.run(new Base_1.StringObject("C:\\Users\\zihao.zhu\\Desktop\\chrome\\bocbaocobfecmglnmeaeppambideimao_2.1.3_chrome.zzzmh.cn.crx"));
}
// test04()
function test05() {
    var data1 = new Base_1.DataObject(Buffer.from([]));
    var data2 = new Base_1.DataObject(Buffer.from([]));
    debugger;
    data1.less(data2);
    var result = data1.compare(Base_1.ControlFlow.CompareEnum.Equal, data2);
}
// test05();
//# sourceMappingURL=test.js.map