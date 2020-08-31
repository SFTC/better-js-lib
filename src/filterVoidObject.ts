import is from './is';
import { AnyObject } from './index';

/** 包括任意值的数组 */
type AnyArray = any[];

/** 过滤对象中的空值 */
export function filterVoidObject(
  obj: AnyObject,
  isValid = function(value: any): boolean {
    return value !== null && value !== undefined && value !== '';
  }
): AnyObject {
  //用于处理自循环对象
  let oriObj: AnyObject[] = [],
    newObj: AnyObject[] = [];

  function rec(_obj: AnyObject): AnyObject {
    if (!is.array(_obj) && !is.object(_obj)) return _obj;
    let pos = oriObj.indexOf(_obj);
    if (pos > -1) {
      return newObj[pos];
    }
    let result: AnyObject | AnyArray;
    if (is.array(_obj)) {
      result = [];
    } else {
      result = {};
    }
    oriObj.push(_obj);
    newObj.push(result);

    for (let key in _obj) {
      if (!_obj.hasOwnProperty(key)) continue;
      let child = rec(_obj[key]);
      if (!isValid(child)) {
        continue;
      }
      if (is.array(_obj)) {
        result.push(child);
      } else {
        result[key] = child;
      }
    }
    return result;
  }
  return rec(obj);
}

export default filterVoidObject;
