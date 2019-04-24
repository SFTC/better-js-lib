function singleDigitFormat(num) {
  if (!(/^[0-9]+$/.test(num))) {
    throw new Error('Parameter format error, should be Number');
  }
  if (Number(num) < 10) {
    return `0${num}`;
  }
  return num;
}
export default singleDigitFormat;
