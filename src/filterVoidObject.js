import typeOf from './typeOf.js';
export default function filterVoidObject(
  obj,
  isValid = function(value) {
    return value !== null && value !== undefined && value !== '';
  }
) {
  //用于处理自循环对象
  let oriObj = [],
    newObj = [];

  function rec(obj) {
    if (typeOf(obj) !== 'object' && typeOf(obj) !== 'array') return obj;
    let pos = oriObj.indexOf(obj);
    if (pos > -1) {
      return newObj[pos];
    }
    let result;
    if (typeOf(obj) === 'array') {
      result = [];
    } else {
      result = {};
    }
    oriObj.push(obj);
    newObj.push(result);

    for (let key in obj) {
      if (!obj.hasOwnProperty(key)) continue;
      let child = rec(obj[key]);
      if (!isValid(child)) {
        continue;
      }
      if (typeOf(obj) === 'array') {
        result.push(child);
      } else {
        result[key] = child;
      }
    }
    return result;
  }
  return rec(obj, isValid);
}
