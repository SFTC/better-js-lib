var expect = require('expect.js');

var idcard = require('../src/idcard.js');

describe('解析身份证号', function () {

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
        expect(idcard.getBirthday('131002199408153611')).to.eql(birthday);
      }
    );
    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(idcard.getBirthday('110102199901018781')).to.equal(-1);
    });
  });

  describe('从身份证号中得到年龄', function () {
    it('"131002199408153611" 应该返回"24"', function () {
      expect(idcard.getAge('131002199408153611')).to.equal(24);
    });
    it('设置了基准时间，"131002199408153611" 应该返回"24"', function () {
      expect(idcard.getAge('131002199408153611', 1554090947763)).to.equal(24);
    });
    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(idcard.getAge('110102199901018781')).to.equal(-1);
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
        expect(idcard.getArea('131002199408153611')).to.eql(area);
      }
    );
    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(idcard.getArea('110102199901018781')).to.equal(-1);
    });
  });

  describe('从身份证号中得到性别', function () {
    it('"131002199408153611" 应该返回"男"', function () {
      expect(idcard.getSex('131002199408153611')).to.equal('男');
    });
    it('"110102199901018780" 应该返回"女"', function () {
      expect(idcard.getSex('110102199901018780')).to.equal('女');
    });
    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(idcard.getSex('110102199901018781')).to.equal(-1);
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
        expect(idcard.getAnimalSigns(testIdCard[index])).to.equal(animalSigns[index]);
      }).bind(null, index));
    }

    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(idcard.getAnimalSigns('110102199901018781')).to.equal(-1);
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
        age: 24,
        area: {
          province: '河北省',
          city: '廊坊市',
          district: '安次区'
        },
        sex: '男',
        animalSigns: '狗'
      };
      expect(idcard.idcard('131002199408153611')).to.eql(msgIdCard);
    });

    it('"131002940815361" 应该返回完整的身份信息', function () {
      const msgIdCard = {
        birthday: {
          birthday: '1994/08/15',
          year: '1994',
          month: '08',
          day: '15'
        },
        age: 24,
        area: {
          province: '河北省',
          city: '廊坊市',
          district: '安次区'
        },
        sex: '男',
        animalSigns: '狗'
      };
      expect(idcard.idcard('131002940815361')).to.eql(msgIdCard);
    });

    it('"110102199901018781" 不是一个合法的身份证号', function () {
      expect(idcard.idcard('110102199901018781')).to.equal(-1);
    });
  });

  describe('"15位"身份证号转换为"18位"', function () {
    it('"131002940815361" 应该返回 "131002199408153611"', function () {
      expect(idcard.IDCard15To18('131002940815361')).to.equal('131002199408153611');
    });
    it('"1310029408153611" 应该返回 ""，因为不是"15位"', function () {
      expect(idcard.IDCard15To18('1310029408153611')).to.equal('');
    });
  });

  describe('其他 case', function() {
    it('110102199901018781 不是一个合法的身份证号，因为不是字符串类型', function () {
      expect(idcard.idcard(110102199901018781)).to.equal(-1);
    });
  });

});
