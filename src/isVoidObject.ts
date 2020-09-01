import is from './is';

/** 判断一个对象是否为空对象 */
function isVoidObject(obj: any): boolean {
  if (!is.object(obj)) {
    throw new Error('参数类型非object');
  } else {
    return is.empty(obj);
  }
}

export default isVoidObject;
