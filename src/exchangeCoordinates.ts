import NP from 'number-precision';
NP.enableBoundaryChecking(false); // 关闭数字范围超过边界的 warn 提示

/** 位置经纬度 */
interface Point {
  lng: number;
  lat: number;
}

/** 坐标系规则标准 */
type PointRule = 'bd' | 'gg';

export function exchangeCoordinates(Coord: Point, origin: PointRule, format: PointRule): Point {
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
  let xPi = 3.14159265358979324 * 3000.0 / 180.0;
  if (origin == 'bd' && format == 'gg') {
    /**
     * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
     * 即 百度 转 谷歌、高德
     */
    var x = Coord.lng - 0.0065;
    var y = Coord.lat - 0.006;
    let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * xPi);
    let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * xPi);
    var ggLng = z * Math.cos(theta);
    var ggLat = z * Math.sin(theta);
    // 四舍五入保留小数点后 10 位有效数字
    ggLng = NP.round(ggLng, 10);
    ggLat = NP.round(ggLat, 10);

    return { lng: ggLng, lat: ggLat };
  }
  else if (origin == 'gg' && format == 'bd') {
    /**
     * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
     * 即谷歌、高德 转 百度
     */
    let z = Math.sqrt(Coord.lng * Coord.lng + Coord.lat * Coord.lat) + 0.00002 * Math.sin(Coord.lat * xPi);
    let theta = Math.atan2(Coord.lat, Coord.lng) + 0.000003 * Math.cos(Coord.lng * xPi);
    var bdLng = z * Math.cos(theta) + 0.0065;
    var bdLat = z * Math.sin(theta) + 0.006;
    // 四舍五入保留小数点后 10 位有效数字
    bdLng = NP.round(bdLng, 10);
    bdLat = NP.round(bdLat, 10);

    return { lng: bdLng, lat: bdLat };
  }
}

export default exchangeCoordinates;
