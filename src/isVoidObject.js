function isVoidObject(obj) {
  let objType = Object.prototype.toString.call(obj);
  if (objType !== '[object Object]') {
    throw new Error('参数类型非object');
  } else {
    return !Object.keys(obj).length;
  }
}
export default isVoidObject;