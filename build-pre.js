
const argv = process.argv;
const param = argv[2];
const fs = require('fs');
const path = require('path');

function replaceContext(currentPath, nodeFile, webFile, item) {
  console.log(currentPath, nodeFile, webFile, item)
  const ignoreNode = path.join(currentPath, nodeFile);
  const ignoreWeb = path.join(currentPath, webFile);
  const nodePC = path.join(currentPath, item);
  fs.writeFileSync(nodePC, "");
  // console.log('param', param)
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
}



function getFiles(path) {    //读取目录下所有目录文件  返回数组
  return fs.readdirSync(path, { encoding: 'utf8', withFileTypes: true }).map($1 => $1.name)
}

function isFile(filepath) {  //判断是否是文件 Boolean
  let stat = fs.statSync(filepath)
  return stat.isFile()
}

function isDir(filepath) {  //判断是否是文件夹 Boolean
  let stat = fs.statSync(filepath)
  return stat.isDirectory()
}

function getRealName(item) {
  if (item.indexOf('.ignore.') > 0) {
    return item.replace('.ignore.', '').replace('web', '').replace('node', '')
  }
  return null;
}

function replaceFile(currentPath) {
  let filesArr = getFiles(currentPath);
  const currentIgnore = [];
  filesArr.forEach(item => {
    const nextPath = path.join(currentPath, item)
    if (isDir(nextPath)) {
      replaceFile(nextPath)
    } else {
      if (currentIgnore.indexOf(item) >= 0) return;
      const name = getRealName(item)
      if (name) {
        let nodeName;
        let webName;
        const isNode = item.indexOf('.ignore.node.') >= 0;
        if (isNode) {
          nodeName = item;
          webName = item.replace('.ignore.node.', '.ignore.web.');
        } else {
          webName = item;
          nodeName = item.replace('.ignore.web.', '.ignore.node.');
        }
        currentIgnore.push(nodeName)
        currentIgnore.push(webName)
        const realPath = path.join(currentPath, name);
        if (isFile(realPath)) {
          replaceContext(currentPath, nodeName, webName, name)
        }
      }
    }
  })
}

replaceFile(path.join(__dirname, 'src'))