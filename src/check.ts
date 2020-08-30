/** 校验字符串是否都是中文 */
export function checkCnString(tempString: string): boolean {
  var chineseReg = /^[\u4E00-\u9FA5]+$/;
  return chineseReg.test(tempString);
}

/**
 * 校验身份证号
 * @param {String} id 身份证号
 * @returns {Boolean} 检验结果
 */
export function checkIDCard(id: string): boolean {
  var format = /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
  //号码规则校验
  if (!format.test(id)) {
    return false;
  }
  //区位码校验
  //出生年月日校验,前正则限制起始年份为1900;
  var year = +id.substr(6, 4), //身份证年
    month = +id.substr(10, 2), //身份证月
    date = +id.substr(12, 2), //身份证日
    time = Date.parse(month + '-' + date + '-' + year), //身份证日期时间戳date
    nowTime = Date.now(), //当前时间戳
    dates = (new Date(year, month, 0)).getDate(); //身份证当月天数
  if (time > nowTime || date > dates) {
    return false;
  }
  //校验码判断
  var c = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //系数
  var b = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']; //校验码对照表
  var idArray = id.split('');
  var sum = 0;
  for (var k = 0; k < 17; k++) {
    sum += parseInt(idArray[k]) * c[k];
  }
  if (idArray[17].toUpperCase() != b[sum % 11].toUpperCase()) {
    return false;
  }
  return true;
}

/**
 * 校验邮箱
 * @param {string} mail 邮箱
 * @returns {boolean} 校验结果
 */
export function checkMail(mail: string): boolean {
  /**
   * 规则如下：
   * 以大写字母[A-Z]、小写字母[a-z]、数字[0-9]、下滑线[_]、减号[-]、点号[.]、中文[\u4e00-\u9fa5]开头，并需要重复一次至多次[+]
   * 中间必须包括 @ 符号
   * @ 之后需要连接大写字母[A-Z]、小写字母[a-z]、数字[0-9]、下滑线[_]、减号[-]、点号[.]，并需要重复一次至多次[+]
   * 结尾必须是点号[.]连接2至8位的大小写字母[A-Za-z]{2,8}
   */
  var reg = /^([A-Za-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/;
  return reg.test(mail);
}

/**
 * 校验手机号
 * @param {string} phone 手机号
 * @returns {boolean} 校验结果
 */
export function checkPhone(phone: string): boolean {
  /**
   * 规则如下：
   * 首位是必须是 1
   * 第二位数字为 [3-9]
   * 第三位数字为 [0-9]，第三位没有根据第二位数字加限制，考虑有可能随时加号段，这里校验较松
   * 后面为 8 位数字 \d{8}
   */
  var reg = /^1(3|4|5|6|7|8|9)[0-9]\d{8}$/;
  return reg.test(phone);
}

/**
 * 这个方法用来校验 ——> 手机， 座机， 分机号码
 */
export function checkTelephone(phoneNumber: string): boolean {
  var isPhone = /^(0\d{2,3}-?)?\d{7,8}$/;
  var isExt = /^[48]00-?\d{3}-?\d{4}$/;

  var regRes = false; // 校验结果

  if (checkPhone(phoneNumber)) {
    regRes = true;
  }
  if (isPhone.test(phoneNumber)) {
    regRes = true;
  }
  if (isExt.test(phoneNumber)) {
    regRes = true;
  }
  return regRes;
}

export default {
  checkCnString,
  checkIDCard,
  checkMail,
  checkPhone,
  checkTelephone,
};
