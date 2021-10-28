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
// test03();
function test04() {
    var context = new Base_1.Context();
    context.addWork(new Base_1.LoadFileWork());
    context.run(new Base_1.StringObject("d:\\元气壁纸缓存\\img\\116513f379bd664b7cfe5b3b40f5737d.jpg"));
}
// test04()
function test05() {
    var arr1 = new Base_1.ArrayObject([1, 2, 3, 4]);
    // const a = (arr1 as ControlFlow.Collection).find(($1) => $1 >= 3);
    // const b = arr1.find(($1) => $1 >= 3);
    var isAll = arr1.collectionArray(Base_1.ControlFlow.ArrayEnum.Every, function ($1, index) {
        return $1 >= 1;
    });
    debugger;
}
test05();
//# sourceMappingURL=test.js.map