const { Context, OpenURLWork } = require('../dist/node/index.js')

async function test() {
  const context = new Context();
  context.addWork(new OpenURLWork());
  await context.prepareWorks();
  // context.dispatch("file:///C:/Users/Administrator");
  context.dispatch("file:///D:/DragTable.js");
}
test();