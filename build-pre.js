
const argv = process.argv;
const param = argv[2];
const fs = require('fs');
const path = require('path');
const ignoreNode = path.join(__dirname, 'core', 'Bridge', 'Platform', "Node", "PC.ignore.node.ts");
const ignoreWeb = path.join(__dirname, 'core', 'Bridge', 'Platform', "Node", "PC.ignore.web.ts");
const nodePC = path.join(__dirname, 'core', 'Bridge', 'Platform', "Node", "PC.ts");
fs.writeFileSync(nodePC, "");
console.log('param', param)
if (param == '1') {
  fs.readFile(ignoreNode, 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFileSync(nodePC, data);
  })
} else {
  fs.readFile(ignoreWeb, 'utf8', (err, data) => {
    if (err) throw err;
    fs.writeFileSync(nodePC, data);
  })
}