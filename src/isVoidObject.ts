import is from './is';

/**
 * 判断一个对象是否为空对象
 * @deprecated please use the "is.emptyObj" method instead
 */
function isVoidObject(obj: any): boolean {
  console.warn('isVoidObject is deprecated, please use is.emptyObj instead');
  return is.emptyObj(obj);
}

export default isVoidObject;
