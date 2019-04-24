import is from './is.js';

function isVoidObject(obj) {
  if (!is.object(obj)) {
    throw new Error('参数类型非object');
  } else {
    return is.empty(obj);
  }
}
export default isVoidObject;
