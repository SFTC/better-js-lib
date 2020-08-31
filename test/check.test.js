import expect from 'expect.js';

import { check } from '../src/index';

const { checkCnString, checkIDCard, checkMail, checkPhone, checkTelephone } = check;

describe('校验工具', function() {
  describe('校验字符串是否都是中文', function () {
    it('"这是一段文字" 是一段中文字符串', function () {
      expect(checkCnString('这是一段文字')).to.be.ok();
    });
    it('"这是一段文字aaa" 不是一段中文字符串', function () {
      expect(checkCnString('这是一段文字aaa')).to.not.be.ok();
    });
    it('{} 不是一段中文字符串', function () {
      expect(checkCnString({})).to.not.be.ok();
    });
  });

  describe('校验身份证号', function () {
    it('131002199408153611 是正确的身份证号', function () {
      expect(checkIDCard('131002199408153611')).to.be.ok();
    });
    it('123232123242321 不是正确的身份证号，因为号码规则不通过', function () {
      expect(checkIDCard('123232123242321')).to.not.be.ok();
    });
    it('131002199408153612 不是正确的身份证号，因为号检验码不通过', function () {
      expect(checkIDCard('131002199408153612')).to.not.be.ok();
    });
    it('231002211008153612 不是正确的身份证号，因为生日范围不通过', function () {
      expect(checkIDCard('231002211008153612')).to.not.be.ok();
    });
  });

  describe('校验邮箱格式', function () {
    it('619589061@qq.com 是正确的邮箱格式', function () {
      expect(checkMail('619589061@qq.com')).to.be.ok();
    });
    it('18888888888@163.com 是正确的邮箱格式', function () {
      expect(checkMail('18888888888@163.com')).to.be.ok();
    });
    it('18888888888@.com 是错误的邮箱格式', function () {
      expect(checkMail('18888888888@.com')).to.not.be.ok();
    });
    it('18888888888@@163.com', function () {
      expect(checkMail('18888888888@@163.com')).to.not.be.ok();
    });
  });

  describe('校验手机号码格式', function () {
    it('13888888888 是合法的手机号码格式', function () {
      expect(checkPhone('13888888888')).to.be.ok();
    });
    it('123888888888 不是合法的手机号码格式', function () {
      expect(checkPhone('123888888888')).to.not.be.ok();
    });
    it('123 不是合法的手机号码格式', function () {
      expect(checkPhone('123')).to.not.be.ok();
    });
  });

  describe('校验手机号码、座机号码、分机号码格式', function () {
    it('13888888888 是合法的手机号码格式', function () {
      expect(checkTelephone('13888888888')).to.be.ok();
    });
    it('0136-2197211 是合法的座机格式', function () {
      expect(checkTelephone('0136-2197211')).to.be.ok();
    });
    it('400-010-2323 是合法的分机格式', function () {
      expect(checkTelephone('400-010-2323')).to.be.ok();
    });
  });
});
