function getPointsDistance(s_lat, s_lng, e_lat, e_lng) {
  if (!(s_lat > 0 && s_lng > 0 && e_lat > 0 && e_lng > 0)){
    throw new Error('参数不正确');
  }

  var startLat = s_lat * Math.PI / 180.0;
  var endLat = e_lat * Math.PI / 180.0;
  var a = startLat - endLat;
  var  b = s_lng * Math.PI / 180.0 - e_lng * Math.PI / 180.0;
  var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a/2),2) + Math.cos(startLat) * Math.cos(endLat) * Math.pow(Math.sin(b/2), 2)));
  s = s * 6378.137;  // 地球半径
  s = Math.round(s * 10000) / 10000;
  return s;
}
export default getPointsDistance;