import is from 'is_js';

function isVoidObject(obj: any): boolean {
  if (!is.object(obj)) {
    throw new Error('参数类型非object');
  } else {
    return is.empty(obj);
  }
}
export default isVoidObject;
