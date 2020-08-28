import { checkIDCard } from './check';

function curryRight(fn: any): any {
  var args = [].slice.call(arguments, 1);
  return function (): any {
    var newArgs = args.concat([].slice.call(arguments)).reverse();
    return fn.apply(null, newArgs);
  };
}

/** 通过身份证号获取一些个人信息，比如出生日期、属相等等 */
export class Idcard {
  /** 传入的身份证号 */
  protected idCard: string;

  public constructor(idCard: string) {
    this.idCard = idCard;
  }

  /** 15位身份证转18位身份证 */
  public IDCard15To18(oldCard: string = this.idCard): string {
    // 必须为 15 位身份证
    if (oldCard.length !== 15) {
      return '';
    }

    // 将15位身份证号码加入出生年变为17位
    var cId = oldCard.substring(0, 6) + '19' + oldCard.substring(6, 15);

    var strJiaoYan = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];

    var intQuan = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];

    var intTemp = 0;

    for (var i = 0; i < cId.length; i++) {
      intTemp += +cId[i] * intQuan[i];
    }

    intTemp %= 11;

    cId += +strJiaoYan[intTemp];

    return cId;
  }

  /**
   * 前置判断并处理身份账号
   * 1. 必须为字符串
   * 2. "15位"身份证号码需要转为"18位"
   * 3. 为合法的身份证号
   * @returns {String|Boolean} 验证成功则返回正确的身份证号，验证不成功返回 -1
   */
  private processIdCard(): string | boolean {
    if (typeof this.idCard !== 'string') {
      return false;
    }
  
    // "15位"身份证号码需要转为"18位"
    var len = this.idCard.length;
    const processedIdcard = len === 15 ? this.IDCard15To18(this.idCard) : this.idCard;

    if (!checkIDCard(processedIdcard)) {
      return false;
    }
  
    return processedIdcard;
  }

  /** 根据身份证号获取生日 */
  public getBirthday(): { birthday: string; year: string; month: string; day: string } | -1 {
    // 校验过的身份证号
    var proIdCard = this.processIdCard();
  
    if (!proIdCard) {
      return -1;
    }
    
    // 拆解字符串
    var substrCard = function (start: number, end: number): string {
      return (proIdCard as string).substr(start, end);
    };
    var substrCardTwo = function (start: number): any {
      // @ts-ignore
      return curryRight(substrCard, 2)(start);
    };
    var substrCardFour = function (start: number): any {
      // @ts-ignore
      return curryRight(substrCard, 4)(start);
    };
  
    // 生日年月日
    var birthday = '';
    var year = '';
    var month = '';
    var day = '';
  
    // 处理 18 位的身份证号码从号码中得到生日和性别代码
    year = substrCardFour(6);
    month = substrCardTwo(10);
    day = substrCardTwo(12);
    birthday = year + '/' + month + '/' + day;
  
    return {
      birthday: birthday,
      year: year,
      month: month,
      day: day
    };
  }
  
  /**
   * 根据身份证信息获取年龄
   * @param {String} [baseDate] 对比身份证号中生日的基准日期，不传则默认为当前的电脑系统时间
   */
  public getAge(baseDate?: string): number {
    // 校验过的身份证号
    var proIdCard = this.processIdCard();
  
    if (!proIdCard) {
      return -1;
    }
  
    var strBirthday = (proIdCard as string).substr(6, 4) + '/' + (proIdCard as string).substr(10, 2) + '/' + (proIdCard as string).substr(12, 2); // 生日年月日
  
    var birthDate = new Date(strBirthday);
    var nowDateTime = new Date();
  
    // 用户手动设置了基准日期
    if (baseDate && /string|number/.test(typeof baseDate)) {
      nowDateTime = new Date(baseDate);
    }
  
    // 计算年龄
    var age = nowDateTime.getFullYear() - birthDate.getFullYear();
    //再考虑月、天的因素;.getMonth()获取的是从0开始的，这里进行比较，不需要加1
    if (nowDateTime.getMonth() < birthDate.getMonth() || (nowDateTime.getMonth() === birthDate.getMonth() && nowDateTime.getDate() < birthDate.getDate())) {
      age--;
    }
  
    return age;
  }
  
  /** 根据身份证号获取性别 */
  public getSex(): string | -1 {
    // 校验过的身份证号
    var proIdCard = this.processIdCard();
  
    if (!proIdCard) {
      return -1;
    }
  
    var sex = +((proIdCard as string).substr(16, 1)) % 2 === 0 ? '女' : '男';
  
    return sex;
  }
  
  /** 根据身份证号获取生肖 */
  public getAnimalSigns(): string | -1 {
    // 校验过的身份证号
    var proIdCard = this.processIdCard();
  
    if (!proIdCard) {
      return -1;
    }
  
    var start = 1901;
    var end = +((proIdCard as string).substr(6, 4));
  
    // 计算生肖的比例系数
    var ratio = (start - end) % 12;
  
    // 生肖
    var animalSigns = '';
  
    switch (true) {
    case !!(ratio === 1 || ratio === -11):
      animalSigns = '鼠';
      break;
  
    case !!(ratio === 0):
      animalSigns = '牛';
      break;
  
    case !!(ratio === 11 || ratio === -1):
      animalSigns = '虎';
      break;
  
    case !!(ratio === 10 || ratio === -2):
      animalSigns = '兔';
      break;
  
    case !!(ratio === 9 || ratio === -3):
      animalSigns = '龙';
      break;
  
    case !!(ratio === 8 || ratio === -4):
      animalSigns = '蛇';
      break;
  
    case !!(ratio === 7 || ratio === -5):
      animalSigns = '马';
      break;
  
    case !!(ratio === 6 || ratio === -6):
      animalSigns = '羊';
      break;
  
    case !!(ratio === 5 || ratio === -7):
      animalSigns = '猴';
      break;
  
    case !!(ratio === 4 || ratio === -8):
      animalSigns = '鸡';
      break;
  
    case !!(ratio === 3 || ratio === -9):
      animalSigns = '狗';
      break;
  
    case !!(ratio === 2 || ratio === -10):
      animalSigns = '猪';
      break;
    }
  
    return animalSigns;
  }
  
  /** 从身份证号中获取到相关的所有信息 */
  public getAllInfo(): -1 | {
    birthday: {
      birthday: string;
      year: string;
      month: string;
      day: string;
    } | -1;
    age: number;
    sex: string | -1;
    animalSigns: string | -1; } {
    // 校验过的身份证号
    var proIdCard = this.processIdCard();
  
    if (!proIdCard) {
      return -1;
    }
  
    return {
      birthday: this.getBirthday(),
      age: this.getAge(),
      sex: this.getSex(),
      animalSigns: this.getAnimalSigns(),
    };
  }
}

export default Idcard;
