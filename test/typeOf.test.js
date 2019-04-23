/* global BigInt */
var expect = require('expect.js');

var typeOf = require('../src/typeOf.js').default;

describe('判断数据类型', function() {
  it('判断字符串', function() {
    expect(typeOf('aaa')).to.be.equal('string');
  });
  it('判断数字', function() {
    expect(typeOf(100)).to.be.equal('number');
  });
  it('判断布尔值', function() {
    expect(typeOf(true)).to.be.equal('boolean');
  });
  it('判断函数', function() {
    expect(typeOf(function(){})).to.be.equal('function');
  });
  it('判断数组', function() {
    expect(typeOf([1,2,3,4])).to.be.equal('array');
  });
  it('判断日期', function() {
    expect(typeOf(new Date())).to.be.equal('date');
  });
  it('判断正则', function() {
    expect(typeOf(new RegExp(''))).to.be.equal('regExp');
  });
  it('判断undefined', function() {
    expect(typeOf(undefined)).to.be.equal('undefined');
  });
  it('判断null', function() {
    expect(typeOf(null)).to.be.equal('null');
  });
  it('判断对象', function() {
    expect(typeOf({})).to.be.equal('object');
  });
  it('判断Symbol', function() {
    expect(typeOf(Symbol('123'))).to.be.equal('symbol');
  });
  it('判断BigInt', function() {
    // TOOD:这块需要判断其他环境的case，global 只是 node 环境的
    if (global.BigInt) {
      expect(typeOf(BigInt(42))).to.be.equal('bigint');
    } else {
      expect(true).to.be.ok();
    }
  });
});
