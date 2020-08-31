function intersect(arr0: any[], arr1: any[]): any[] {
  return arr0.filter(function(item: any): boolean {
    return arr1.indexOf(item) !== -1;
  });
}

/** 取多个数组的交集 */
export function getArrIntersection(): any[] {
  //将arguments转换成数组
  var argumentsArr = Array.prototype.slice.apply(arguments);
  return argumentsArr.reduce(function(prev: any[], cur: any[]): any[] {
    return intersect(prev,cur);
  });
}

export default getArrIntersection;
