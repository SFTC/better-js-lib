function intersect(arr0,arr1){
  return arr0.filter(function(item){
    return arr1.indexOf(item) !== -1;
  });
}

function getArrIntersection(){
  //将arguments转换成数组
  var argumentsArr = Array.prototype.slice.apply(arguments);
  return argumentsArr.reduce(function(prev,cur){
    return intersect(prev,cur);
  });
}

export default getArrIntersection;