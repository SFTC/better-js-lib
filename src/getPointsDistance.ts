/** 计算两个坐标点之间的直线距离 */
export function getPointsDistance(sLat: number, sLng: number, eLat: number, eLng: number): number {
  if (!(sLat > 0 && sLng > 0 && eLat > 0 && eLng > 0)){
    throw new Error('参数不正确');
  }

  var startLat = sLat * Math.PI / 180.0;
  var endLat = eLat * Math.PI / 180.0;
  var a = startLat - endLat;
  var  b = sLng * Math.PI / 180.0 - eLng * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(startLat) * Math.cos(endLat) * Math.pow(Math.sin(b/2), 2)));
  s = s * 6378.137;  // 地球半径
  s = Math.round(s * 10000) / 10000;
  return s;
}