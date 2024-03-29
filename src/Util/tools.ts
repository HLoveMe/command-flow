/*
 * @Author:
 * @Date: 2022-06-08 19:31:16
 * @Last Modified by: zihao.zhu
 * @Last Modified time: 2022-07-21 18:45:23
 * @desc : undefined
 */

const isURL = (url: string): boolean => {
  var strRegex =
    '^((https|http|ftp)://)?' + //(https或http或ftp):// 可有可无
    "(([\\w_!~*'()\\.&=+$%-]+: )?[\\w_!~*'()\\.&=+$%-]+@)?" + //ftp的user@  可有可无
    '(([0-9]{1,3}\\.){3}[0-9]{1,3}' + // IP形式的URL- 3位数字.3位数字.3位数字.3位数字
    '|' + // 允许IP和DOMAIN（域名）
    '(localhost)|' + //匹配localhost
    "([\\w_!~*'()-]+\\.)*" + // 域名- 至少一个[英文或数字_!~*\'()-]加上.
    '\\w+\\.' + // 一级域名 -英文或数字  加上.
    '[a-zA-Z]{1,6})' + // 顶级域名- 1-6位英文
    '(:[0-9]{1,5})?' + // 端口- :80 ,1-5位数字
    '((/?)|' + // url无参数结尾 - 斜杆或这没有
    "(/[\\w_!~*'()\\.;?:@&=+$,%#-]+)+/?)$"; //请求参数结尾- 英文或数字和[]内的各种字符

  var re = new RegExp(strRegex, 'i'); //i不区分大小写
  //将url做uri转码后再匹配，解除请求参数中的中文和空字符影响
  if (re.test(encodeURI(url))) {
    return true;
  } else {
    return false;
  }
};

const isWindowFilePath = (url: string): boolean => {
  return url.startsWith('file://');
};
/**
 *
 * @param source String.prototype.replaceAll
 * @param string
 * @param replaceValue
 * @returns
 */
const replaceAll = (
  source: string,
  string: string,
  replaceValue: string
): string => {
  if (source.indexOf(string) >= 0) {
    source = source.replace(string, replaceValue);
    return replaceAll(source, string, replaceValue);
  }
  return source;
};

const has = Function.call.bind(Object.prototype.hasOwnProperty);

const getObjectType = (source: any) => Object.prototype.toString.call(source);


function noop() {}

export { noop, has, getObjectType, replaceAll };
