import { AnyObject } from './index';

/**
 * 从地址中解析出所有的参数
 * @param {String} url 地址
 * @return {Object} 参数对象
 * @todo 还未支持同时有 hash 参数和 query 的 url
 */
function getAllQueryJson(url: string): AnyObject {
  var regUrl = /^[^?]+\?([\w\W]+)$/,
    regPara = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
    arrUrl = regUrl.exec(url),
    ret = {};
  if (arrUrl && arrUrl[1]) {
    var strPara = arrUrl[1],
      result: RegExpExecArray | null;
    while ((result = regPara.exec(strPara)) != null) {
      ret[result[1]] = result[2];
    }
  }
  return ret;
}

/**
 * 解析URL传参
 * @param {Object} key
 * @param {String} [url] 可以通过传入 url 参数来获取指定 url 的参数
 */
function getUrlQuery(key: string, url?: string): string;
function getUrlQuery(key?: string, url?: string): AnyObject;
function getUrlQuery(key?: string, url?: string) {
  // 校验是否存在 url
  var urlFlag = url && typeof url === 'string';

  var queryString: string[] = [];
  if (urlFlag) {

    if (!key) {
      return getAllQueryJson(url as string);
    }

    /** 通过 ? 将 url 拆分开，再排除 hash 的 # 的影响 */
    const splitArr = (url as string).split('?').map(splitStr => splitStr.split('#')[0]);

    /** 数组长度大于 1，证明存在 url 参数，第一个元素是不带参的 url，没有用所以过滤掉 */
    if (splitArr.length > 1) {
      queryString = splitArr.slice(1);
    }

  } else {

    if (!key) {
      return getAllQueryJson(window.location.href);
    }
  
    //key 取 search 和 hash 的
    queryString = [window.location.search.substring(1), window.location.hash.split('?')[1]].filter((v) => v);
  }


  if (queryString.length > 0) {
    for (let i = 0; i < queryString.length; i++) {
      var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
      var r = queryString[i].match(reg);
      if (r != null) {
        return decodeURIComponent(r[2]);
      }
    }
    return '';
  } else {
    return '';
  }
}

export default getUrlQuery;
