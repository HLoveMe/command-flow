let fs = require('fs');
const path = require('path')
/** 主要版本 */
let major = process.version.match(/v([0-9]*).([0-9]*)/)[1]
/** 特性版本 */
let minor = process.version.match(/v([0-9]*).([0-9]*)/)[2]
/**
 * 文件夹复制
 * @param {string} source 源文件夹
 * @param {string} destination 目标文件夹
 */
function cpSync(source, destination) {
  // 判断node版本不是16.7.0以上的版本
  // 则进入兼容处理
  // 这样处理是因为16.7.0的版本支持了直接复制文件夹的操作
  if (Number(major) < 16 || Number(major) == 16 && Number(minor) < 7) {
    // 如果存在文件夹 先递归删除该文件夹
    if (fs.existsSync(destination)) fs.rmSync(destination, { recursive: true })
    // 新建文件夹 递归新建
    fs.mkdirSync(destination, { recursive: true });
    // 读取源文件夹
    let rd = fs.readdirSync(source)
    for (const fd of rd) {
      // 循环拼接源文件夹/文件全名称
      let sourceFullName = source + "/" + fd;
      // 循环拼接目标文件夹/文件全名称
      let destFullName = destination + "/" + fd;
      // 读取文件信息
      let lstatRes = fs.lstatSync(sourceFullName)
      // 是否是文件
      if (lstatRes.isFile()) fs.copyFileSync(sourceFullName, destFullName);
      // 是否是文件夹
      if (lstatRes.isDirectory()) cpSync(sourceFullName, destFullName);
    }
  }
  else fs.cpSync(source, destination, { force: true, recursive: true })
}
cpSync(path.join(__dirname, '../dist'), path.join(__dirname, "", 'src', "command",'dist'))
cpSync(path.join(__dirname, '../src'), path.join(__dirname, "", 'src', "command",'src'))