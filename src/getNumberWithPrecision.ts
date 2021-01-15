/**
 * 将数字转为百分比格式
 * @param value 数字
 * @param precision 保留小数点后几位有效数字
 * @param needUnit 是否需要添加单位后缀
 */
const getNumberWithPrecision = (
  value: number,
  precision: number = 2,
  needUnit: boolean = false,
): string => {
  const realValue = precision >= 0 ? (value * 100).toFixed(precision) : `${value}`;
  return needUnit ? `${realValue}%` : realValue;
};

export default getNumberWithPrecision;
