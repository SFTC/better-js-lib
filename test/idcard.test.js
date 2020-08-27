import expect from 'expect.js';

import { Idcard } from '../src/index';

describe('解析身份证号', function () {
  var age = new Date().getFullYear() - 1994;

  describe('从身份证号中得到生日', function () {
    it(
      '"131002199408153611" 应该返回"{ birthday: "1994/08/15", year: "1994", month: "08", day: "15" }"',
      function () {
        const birthday = {
          birthday: '1994/08/15',
          year: '1994',
          month: '08',
          day: '15'
        };
        expect(new Idcard('131002199408153611').getBirthday()).to.eql(birthday);
      }
    );
    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(new Idcard('110102199901018781').getBirthday()).to.equal(-1);
    });
  });

  describe('从身份证号中得到年龄', function () {
    it(`"131002199408153611" 应该返回"${age}"`, function () {
      expect(new Idcard('131002199408153611').getAge()).to.equal(age);
    });
    it(`设置了基准时间，"131002199408153611" 应该返回"${age}"`, function () {
      expect(new Idcard('131002199408153611', 1554090947763).getAge()).to.equal(age);
    });
    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(new Idcard('110102199901018781').getAge()).to.equal(-1);
    });
  });

  describe('从身份证号中得到籍贯（省市区）', function () {
    it(
      '"131002199408153611" 应该返回"{ province: "河北省", city: "廊坊市", district: "安次区" }"',
      function () {
        const area = {
          province: '河北省',
          city: '廊坊市',
          district: '安次区'
        };
        expect(new Idcard('131002199408153611').getArea()).to.eql(area);
      }
    );
    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(new Idcard('110102199901018781').getArea()).to.equal(-1);
    });
  });

  describe('从身份证号中得到性别', function () {
    it('"131002199408153611" 应该返回"男"', function () {
      expect(new Idcard('131002199408153611').getSex()).to.equal('男');
    });
    it('"110102199901018780" 应该返回"女"', function () {
      expect(new Idcard('110102199901018780').getSex()).to.equal('女');
    });
    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(new Idcard('110102199901018781').getSex()).to.equal(-1);
    });
  });

  describe('从身份证号中得到生肖', function () {
    var animalSigns = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    var testIdCard = [
      '110102198401015378', '110102198501019392', '110102198601019437',
      '110102198701017092', '110102198801018455', '110102198901018559',
      '11010219900101539x', '110102199101017851', '110102199201012935',
      '110102199301019990', '131002199408153611', '110102199501010173'
    ];
    
    var index = -1;
    var _length = animalSigns.length;
    while (++index < _length) {
      it('"' + testIdCard[index] + '" 应该返回 "' + animalSigns[index] + '"', (function (index) {
        expect(new Idcard(testIdCard[index]).getAnimalSigns()).to.equal(animalSigns[index]);
      }).bind(null, index));
    }

    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(new Idcard('110102199901018781').getAnimalSigns()).to.equal(-1);
    });
  });

  describe('从身份证号中得到所有身份信息', function () {
    it('"131002199408153611" 应该返回完整的身份信息', function () {
      const msgIdCard = {
        birthday: {
          birthday: '1994/08/15',
          year: '1994',
          month: '08',
          day: '15'
        },
        age: age,
        area: {
          province: '河北省',
          city: '廊坊市',
          district: '安次区'
        },
        sex: '男',
        animalSigns: '狗'
      };
      expect(new Idcard('131002199408153611').getAllInfo()).to.eql(msgIdCard);
    });

    it('"131002940815361" 应该返回完整的身份信息', function () {
      const msgIdCard = {
        birthday: {
          birthday: '1994/08/15',
          year: '1994',
          month: '08',
          day: '15'
        },
        age: age,
        area: {
          province: '河北省',
          city: '廊坊市',
          district: '安次区'
        },
        sex: '男',
        animalSigns: '狗'
      };
      expect(new Idcard('131002940815361').getAllInfo()).to.eql(msgIdCard);
    });

    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(new Idcard('110102199901018781').getAllInfo()).to.equal(-1);
    });
  });

  describe('"15位"身份证号转换为"18位"', function () {
    it('"131002940815361" 应该返回 "131002199408153611"', function () {
      expect(new Idcard('131002940815361').IDCard15To18()).to.equal('131002199408153611');
    });
    it('"1310029408153611" 应该返回 ""，因为不是"15位"', function () {
      expect(new Idcard('1310029408153611').IDCard15To18()).to.equal('');
    });
  });

  describe('其他 case', function() {
    it('110102199901018781 不是一个合法的身份证号，因为不是字符串类型', function () {
      expect(new Idcard(110102199901018781n).getAllInfo()).to.equal(-1);
    });
  });

});
