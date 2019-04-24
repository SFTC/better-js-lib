import NP from './precisionComputing.js';
NP.enableBoundaryChecking(false); // 关闭数字范围超过边界的 warn 提示

function exchangeCoordinates(Coord, origin, format) {
  if (!Coord.lng || !Coord.lat) {
    throw new Error('坐标参数 参数不正确');
  }
  if (origin !== 'bd' && origin !== 'gg') {
    throw new Error('origin 参数不正确， 当前仅支持百度(bd)/高德(gg)');
  }
  if (format !== 'bd' && format !== 'gg') {
    throw new Error('format 参数不正确， 当前仅支持百度(bd)/高德(gg)');
  }
  if (origin == format) {
    return Coord;
  }
  let x_pi = 3.14159265358979324 * 3000.0 / 180.0;
  if (origin == 'bd' && format == 'gg') {
    /**
     * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
     * 即 百度 转 谷歌、高德
     */
    var x = Coord.lng - 0.0065;
    var y = Coord.lat - 0.006;
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
    var gg_lng = z * Math.cos(theta);
    var gg_lat = z * Math.sin(theta);
    // 四舍五入保留小数点后 10 位有效数字
    gg_lng = NP.round(gg_lng, 10);
    gg_lat = NP.round(gg_lat, 10);

    return { lng: gg_lng, lat: gg_lat };
  }
  else if (origin == 'gg' && format == 'bd') {
    /**
     * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
     * 即谷歌、高德 转 百度
     */
    let z = Math.sqrt(Coord.lng * Coord.lng + Coord.lat * Coord.lat) + 0.00002 * Math.sin(Coord.lat * x_pi);
    let theta = Math.atan2(Coord.lat, Coord.lng) + 0.000003 * Math.cos(Coord.lng * x_pi);
    var bd_lng = z * Math.cos(theta) + 0.0065;
    var bd_lat = z * Math.sin(theta) + 0.006;
    // 四舍五入保留小数点后 10 位有效数字
    bd_lng = NP.round(bd_lng, 10);
    bd_lat = NP.round(bd_lat, 10);

    return { lng: bd_lng, lat: bd_lat };
  }
}

export default exchangeCoordinates;
