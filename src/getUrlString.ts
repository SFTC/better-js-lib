import is from './is';
import { AnyObject } from './index';

/** 把对象反序列化成 url 后缀参数的字符串形式 */
function getUrlString(obj: AnyObject, config: { hasPrefix?: boolean } = {}): string {
  if (!is.object(obj)) {
    throw new Error('getUrlString 的第一个参数的数据类型必须为对象');
  }

  var paramsString = '';
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      var element = obj[key];
      // 非基本数据类型的数据会做 JSON.stringify 处理
      if (!is.primitive(element)) {
        element = JSON.stringify(element);
      }
      paramsString += key + '=' + element + '&';
    }
  }

  // 截取最后的"&"
  paramsString = paramsString.substring(0, paramsString.length - 1);

  if (config.hasPrefix && paramsString) {
    paramsString = '?' + paramsString;
  }

  return paramsString;
}

export default getUrlString;
