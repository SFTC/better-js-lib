/** 判断一个值是否为空(null、undefined、'') */
export function isEmpty(obj: any): boolean {
  return !(obj !== null && obj !== undefined && obj !== '');
}

export default isEmpty;
