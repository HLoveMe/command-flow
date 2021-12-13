"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base_1 = require("./Base");
var FetchWork_1 = require("./Base/Works/ExtendsWorks/FetchWork");
function test01() {
    var context = new Base_1.Context();
    context.addWork(new Base_1.Base64EnCodeWork());
    context.addWork(new Base_1.Base64DecodeWork());
    context.addWork(new Base_1.Base64DecodeWork());
    context.prepareWorks();
    setInterval(function () {
        context.run(new Base_1.StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
    }, 5000);
}
// test01()
function test02() {
    var context = new Base_1.Context();
    context.addWork(new Base_1.OpenURLWork());
    context.prepareWorks();
    // context.run(new StringObject("file:///C:/Users/Administrator/AppData/Local/Programs/Python/Python310/"));
    context.run(new Base_1.StringObject("file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg"));
    //d:\元气壁纸缓存\img\116513f379bd664b7cfe5b3b40f5737d.jpg
    // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
// test02()
function test03() {
    var context = new Base_1.Context();
    context.addWork(new Base_1.QRCodeWork());
    context.prepareWorks();
    context.run(new Base_1.StringObject("AAAA"));
    // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
// test03();
function test04() {
    var context = new Base_1.Context();
    context.addWork(new Base_1.LoadFileWork());
    context.prepareWorks();
    context.run(new Base_1.StringObject("d:\\元气壁纸缓存\\img\\116513f379bd664b7cfe5b3b40f5737d.jpg"));
}
// test04()
function test05() {
    // const arr1 = new ArrayObject([1, 2, 3, 4]);
    // const a = (arr1 as ControlFlow.Collection).find(($1) => $1 >= 3);
    // const b = arr1.find(($1) => $1 >= 3);
    // const isAll = arr1.collectionArray(
    //   ControlFlow.ArrayEnum.Every,
    //   ($1: number, index: number) => {
    //     return $1 >= 1;
    //   }
    // );
    var set1 = new Base_1.SetObject(new Set());
    set1.add('aa');
    set1.add('bb');
    var a = set1.has('aa');
    var b = set1.has('aa11');
    debugger;
}
// test05();
function test06() {
    var context = new Base_1.Context();
    context.addWork(new FetchWork_1.default());
    context.prepareWorks();
    context.run(new Base_1.ObjectTarget({
        url: "https://www.baidu.com/s?ie=UTF-8&wd=jimp",
        method: "GET",
        contextType: "text/plain",
    }));
    setTimeout(function () {
        context.tryInsertInput(new Base_1.ObjectTarget({
            url: "https://www.baidu.com/s?ie=UTF-8&wd=jimp",
            method: "GET",
            contextType: "text/plain",
        }));
    }, 5000);
    // setTimeout(() => {
    // }, 1000000)
}
test06();
//# sourceMappingURL=test.js.map