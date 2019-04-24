/**
 * 解析URL传参
 * @param {Object} key
 * @param {String} [url] 可以通过传入 url 参数来获取指定 url 的参数
 */
function getUrlQuery(key, url) {
  // 校验是否存在 url
  var urlFlag = url && typeof url === 'string';

  var queryString = '';
  if (urlFlag) {

    if (!key) {
      return getAllQueryJson(url);
    }

    queryString = url.split('?')[1];
  } else {

    if (!key) {
      return getAllQueryJson(window.location.href);
    }

    var _search = window.location.search;
  
    //key 存在先通过 search 取值如果取不到就通过 hash 来取
    queryString = _search.substr(1) || window.location.hash.split('?')[1];
  }


  if (queryString) {
    var reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
    var r = queryString.match(reg);
    if (r != null) {
      return decodeURIComponent(r[2]);
    } else {
      return null;
    }
  } else {
    return null;
  }
}

/**
 * 从地址中解析出所有的参数
 * @param {String} url 地址
 * @return {Object} 参数对象
 */
function getAllQueryJson(url) {
  var reg_url = /^[^?]+\?([\w\W]+)$/,
    reg_para = /([^&=]+)=([\w\W]*?)(&|$|#)/g,
    arr_url = reg_url.exec(url),
    ret = {};
  if (arr_url && arr_url[1]) {
    var str_para = arr_url[1],
      result;
    while ((result = reg_para.exec(str_para)) != null) {
      ret[result[1]] = result[2];
    }
  }
  return ret;
}

export default getUrlQuery;
