
// const { Context,
//   StringObject,
//   DataObject,
//   ControlFlow,
//   Base64DecodeWork,
//   Base64EnCodeWork,
//   LoadFileWork,
//   OpenURLWork,
//   QRCodeWork,
//   NumberObject,
//   ArrayObject,
//   SetObject,
//   ObjectTarget } = require('./public/index')
// const FetchWork = require('./public/Works/ExtendsWorks/FetchWork')

// async function test01() {
//   const context = new Context();
//   context.addWork(new Base64EnCodeWork());
//   context.addWork(new Base64DecodeWork());
//   context.addWork(new Base64DecodeWork());
//   await context.prepareWorks();
//   setTimeout(() => {
//     context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
//   }, 5000);
// }
// test01()

// function test02() {
//   const context = new Context();
//   context.addWork(new OpenURLWork());
//   context.prepareWorks();
//   // context.run(new StringObject("file:///C:/Users/Administrator/AppData/Local/Programs/Python/Python310/"));
//   context.run(
//     new StringObject(
//       "file:///C:/Users/Administrator/Desktop/116513f379bd664b7cfe5b3b40f5737d.jpg"
//     )
//   );
//   //d:\元气壁纸缓存\img\116513f379bd664b7cfe5b3b40f5737d.jpg
//   // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
// }
// // test02()

// function test03() {
//   const context = new Context();
//   context.addWork(new QRCodeWork());
//   context.prepareWorks();
//   context.run(new StringObject("AAAA"));
//   // context.run(new StringObject("https://www.baidu.com/s?ie=UTF-8&wd=jimp"));
// }
// // test03();

// function test04() {
//   const context = new Context();
//   context.addWork(new LoadFileWork());
//   context.prepareWorks();
//   context.run(
//     new StringObject(
//       "d:\\元气壁纸缓存\\img\\116513f379bd664b7cfe5b3b40f5737d.jpg"
//     )
//   );
// }
// // test04()

// function test05() {
//   // const arr1 = new ArrayObject([1, 2, 3, 4]);
//   // const a = (arr1 as ControlFlow.Collection).find(($1) => $1 >= 3);
//   // const b = arr1.find(($1) => $1 >= 3);
//   // const isAll = arr1.collectionArray(
//   //   ControlFlow.ArrayEnum.Every,
//   //   ($1: number, index: number) => {
//   //     return $1 >= 1;
//   //   }
//   // );

//   // const set1 = new SetObject(new Set())
//   // set1.add('aa')
//   // set1.add('bb')
//   // const a = set1.has('aa')
//   // const b = set1.has('aa11')
//   // debugger;
// }
// // test05();
// function test06() {
//   const context = new Context();
//   context.addWork(new FetchWork());
//   context.prepareWorks();
//   context.run(
//     new ObjectTarget({
//       url: "https://www.baidu.com/s?ie=UTF-8&wd=jimp",
//       method: "GET",
//       contextType: "text/plain",
//     })
//   );
//   // setTimeout(() => {
//   //   context.tryInsertInput(
//   //     new ObjectTarget({
//   //       url: "https://www.baidu.com/s?ie=UTF-8&wd=jimp",
//   //       method: "GET",
//   //       contextType: "text/plain",
//   //     })
//   //   );
//   // }, 5000)
//   // setTimeout(() => {

//   // }, 1000000)
// }
// // test06()

// npm i @babel/plugin-transform-runtime -D --registry https://registry.npm.taobao.org
// npm i @babel/runtime -D --registry https://registry.npm.taobao.org
// npm i @babel/runtime-corejs3 -D --registry https://registry.npm.taobao.org