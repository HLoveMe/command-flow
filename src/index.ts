import { Context } from "./Base/Context";
import { StringObj } from "./Base/Object/BaseObject";
import {
  Base64DecodeWork,
  Base64EnCodeWork,
} from "./Base/Works/ExtendsWorks/Base64Work";
import { OpenURLWork } from "./Base/Works/ExtendsWorks/OpenURLWork";
import { QRCodeWork } from "./Base/Works/ExtendsWorks/QRCodeWork";
// import { InOutString } from "./Base/Object/InOutputValue";
// import { BehaviorSubject } from "rxjs";
// import { takeLast } from "rxjs/operators";
// import { QRCodeWork } from "./Base/Works/QRCodeWork";

function test01() {
  const context = new Context();
  context.addWork(new Base64EnCodeWork());
  context.addWork(new Base64DecodeWork());
  context.addWork(new Base64DecodeWork());
  setInterval(() => {
    context.run(new StringObj("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
  }, 5000);
}
// test01()

function test02() {
  const context = new Context();
  context.addWork(new OpenURLWork());
  // context.run(new StringObj("file:///C:/Users/Administrator/AppData/Local/Programs/Python/Python310/"));
  context.run(new StringObj("file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg"));
  //d:\元气壁纸缓存\img\116513f379bd664b7cfe5b3b40f5737d.jpg
  // context.run(new StringObj("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
test02()

function test03() {
  const context = new Context();
  context.addWork(new QRCodeWork());
  context.run(new StringObj("AAAA"));
  // context.run(new StringObj("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}

// test03()