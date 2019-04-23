var expect = require('expect.js');

var deepCopy = require('../src/deepCopy.js').default;
describe('深度克隆', function() {
  it('非常规参数', function () {
    expect(deepCopy({})).to.eql({});
    expect(deepCopy([])).to.eql([]);
    expect(deepCopy(null)).to.eql({});
    expect(deepCopy('')).to.eql({});
    expect(deepCopy(1)).to.eql({});
    expect(deepCopy(undefined)).to.eql({});
    expect(deepCopy(false)).to.eql({});
  });
  it('常规参数', function () {
    expect(deepCopy({a: 1, b: 2})).to.eql({a: 1, b: 2});
    expect(deepCopy({a: 1, b: 2, c: {d: 4}})).to.eql({a: 1, b: 2, c: {d: 4}});
  });
    
});
