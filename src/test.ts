import {
  Context,
  Value,
  StringObject,
  DataObject,
  ControlFlow,
  Base64DecodeWork,
  Base64EnCodeWork,
  LoadFileWork,
  OpenURLWork,
  QRCodeWork,
  NumberObject,
} from "./Base";

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
  context.run(
    new StringObject(
      "file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg"
    )
  );
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
// test03();

function test04() {
  const context = new Context();
  context.addWork(new LoadFileWork());
  context.run(
    new StringObject(
      "C:\\Users\\zihao.zhu\\Desktop\\chrome\\bocbaocobfecmglnmeaeppambideimao_2.1.3_chrome.zzzmh.cn.crx"
    )
  );
}
// test04()

function test05() {
  const num1 = new NumberObject(1);
  const num2 =  new NumberObject(2);
  num1.less(num2)
}
test05();
