var expect = require('expect.js');

var isEmpty = require('../src/isEmpty.js').default;

describe('判断是否为空', function() {
  it('判断空字符串', function () {
    expect(isEmpty('')).to.be.ok();
  });
  it('判断null', function () {
    expect(isEmpty(null)).to.be.ok();
  });
  it('判断undefined', function () {
    expect(isEmpty(undefined)).to.be.ok();
  });
  it('判断空对象', function () {
    expect(isEmpty({})).to.not.be.ok();
  });
  it('判断空数组', function () {
    expect(isEmpty([])).to.not.be.ok();
  });
  it('判断NaN', function () {
    expect(isEmpty([])).to.not.be.ok();
  });


});
