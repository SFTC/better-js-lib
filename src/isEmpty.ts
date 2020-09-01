/** 判断一个值是否为空(null、undefined、'') */
function isEmpty(obj: any): boolean {
  return !(obj !== null && obj !== undefined && obj !== '');
}

export default isEmpty;
