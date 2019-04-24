var expect = require('expect.js');

var getUrlString = require('../src/getUrlString.js').default;

describe('将对象转换为url参数的字符串', function() {

  describe('第一个参数必须为对象', function() {
    it('执行 getUrlString("") 会报错', function() {
      try {
        expect(getUrlString(''));
      } catch (err) {
        expect(err).to.eql(new Error('getUrlString 的第一个参数的数据类型必须为对象'));
      }
    });
    it('执行 getUrlString(123) 会报错', function() {
      try {
        expect(getUrlString(123));
      } catch (err) {
        expect(err).to.eql(new Error('getUrlString 的第一个参数的数据类型必须为对象'));
      }
    });
    it('执行 getUrlString([1, 2, 3]) 会报错', function() {
      try {
        expect(getUrlString([1, 2, 3]));
      } catch (err) {
        expect(err).to.eql(new Error('getUrlString 的第一个参数的数据类型必须为对象'));
      }
    });
  });

  describe('正常调用', function () {
    it('执行 getUrlString({ name: "zhangsan", age: "25", phone: 13888888888 }) 会输出 "name=zhangsan&age=25&phone=13888888888"', function () {
      expect(getUrlString({
        name: 'zhangsan',
        age: '25',
        phone: 13888888888
      })).to.equal('name=zhangsan&age=25&phone=13888888888');
    });
    it('执行 getUrlString({ person: { name: "zhangsan", age: "25" }, auth: [1, 2, 3] }) 会输出 person={"name":"zhangsan","age":"25"}&auth=[1,2,3]"', function () {
      expect(getUrlString({
        person: {
          name: 'zhangsan',
          age: '25'
        },
        auth: [1, 2, 3]
      })).to.equal('person={"name":"zhangsan","age":"25"}&auth=[1,2,3]');
    });
  });

  describe('增加 hasPrefix 配置', function() {
    it(
      '执行 getUrlString({ name: "zhangsan", age: "25", phone: 13888888888 }, { hasPrefix: true }) 会输出 "?name=zhangsan&age=25&phone=13888888888"',
      function () {
        expect(getUrlString({
          name: 'zhangsan',
          age: '25',
          phone: 13888888888
        }, {
          hasPrefix: true
        })).to.equal('?name=zhangsan&age=25&phone=13888888888');
      }
    );
  });

});
