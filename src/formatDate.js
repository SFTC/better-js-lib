import dayjs from 'dayjs';
const date = {};

/**
 * 格式化时间中的数字
 *
 * @param {Number} n 数字
 * @returns {String} 格式化之后的数字
 */
date.formatTimeNum = function(n) {
  return (n < 10 ? '0' : '') + n;
};

/**
 * 格式化时间
 *
 * @param {String} dateStr 日期
 * @param {String} formatVal 格式化模板
 * @returns {String} 格式化后的时间
 */
date.format = function(dateStr, formatVal) {
  return dayjs(dateStr).format(formatVal);
};

/**
 * 把秒转成时间格式
 *
 * @param {Number} seconds 秒数
 * @param {String} formatVal 格式化模板
 * @returns {String} 格式化后时间
 */
date.formatSeconds = function(seconds, formatVal = 'HH:mm:ss') {
  return dayjs('1970-01-01 00:00:00').add(seconds, 'second').format(formatVal);
};

/**
 * 获取指定天的零点时间戳
 *
 * @param {String} dateStr 日期
 * @param {String} unit 单位
 * @returns {Number|Object} 时间戳或者 dayjs 对象
 */
date.getDayZeroTm = function(dateStr, unit) {
  switch (unit) {
  case 's':
    return dayjs(dateStr).hour(0).minute(0).second(0).millisecond(0).unix();
  case 'ms':
    return dayjs(dateStr).hour(0).minute(0).second(0).millisecond(0).valueOf();
  default:
    return dayjs(dateStr).hour(0).minute(0).second(0).millisecond(0);
  }
};

/**
 * 将日期转为 dayjs 对象
 *
 * @param {String} dateStr 日期
 * @returns {Number|Object} dayjs 对象
 */
date.dayjs = function(dateStr) {
  return dayjs(dateStr);
};

export default date;
