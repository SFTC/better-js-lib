import is from './is';

/**
 * 判断一个值是否为空(null、undefined、'')
 * @deprecated please use the "is.empty2" method instead
 */
function isEmpty(value: any): boolean {
  console.warn('isEmpty is deprecated, please use is.empty2 instead');
  return is.empty2(value);
}

export default isEmpty;
