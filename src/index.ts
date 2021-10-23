import { Context } from "./Base/Context";
import { StringObject } from "./Base/Object/BaseObject";
import {
  Base64DecodeWork,
  Base64EnCodeWork,
} from "./Base/Works/ExtendsWorks/Base64Work";
import LoadFileWork from "./Base/Works/ExtendsWorks/LoadFileWork";
import OpenURLWork from "./Base/Works/ExtendsWorks/OpenURLWork";
import { QRCodeWork } from "./Base/Works/ExtendsWorks/QRCodeWork";
import RunCommandWork from "./Base/Works/ExtendsWorks/RunCommandWork";
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
    context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
  }, 5000);
}
// test01()

function test02() {
  const context = new Context();
  context.addWork(new OpenURLWork());
  // context.run(new StringObject("file:///C:/Users/Administrator/AppData/Local/Programs/Python/Python310/"));
  context.run(new StringObject("file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg"));
  //d:\元气壁纸缓存\img\116513f379bd664b7cfe5b3b40f5737d.jpg
  // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
// test02()

function test03() {
  const context = new Context();
  context.addWork(new QRCodeWork());
  context.run(new StringObject("AAAA"));
  // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
}
// test03()

function test04(){
  const context = new Context();
  context.addWork(new LoadFileWork());
  context.run(new StringObject("C:\\Users\\zihao.zhu\\Desktop\\chrome\\bocbaocobfecmglnmeaeppambideimao_2.1.3_chrome.zzzmh.cn.crx"));
}
// test04()

function test05(){
  const context = new Context();
  context.addWork(new RunCommandWork());
  context.run(new StringObject("node --version"));
}
test05()