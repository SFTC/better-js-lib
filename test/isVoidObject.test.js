var expect = require('expect.js');

var isVoidObject = require('../src/isVoidObject.js').default;
describe('判断是否为空对象', function() {
  it('参数不合法', function () {
    try {
      expect(isVoidObject([]));
    } catch (err) {
      expect(err).to.eql(new Error('参数类型非object'));
    }
  });
  it('参数合法', function () {
    expect(isVoidObject({})).to.equal(true);
    expect(isVoidObject({a: 1})).to.equal(false);
  });
    
});
