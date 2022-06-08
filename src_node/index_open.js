const { Context, OpenURLWork } = require('../dist/node/index.js')

console.log('aaaaaaaaaaaaaaaaaaaaaa', Context, OpenURLWork)

async function test() {
  const context = new Context();
  context.addWork(new OpenURLWork());
  await context.prepareWorks();
  context.dispatch("https://www.baidu.com");
}
test();