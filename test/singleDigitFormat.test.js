var expect = require('expect.js');

var singleDigitFormat = require('../src/singleDigitFormat.js').default;
describe('数据格式变换', function() {
  it('参数不合法', function () {
    try {
      expect(singleDigitFormat());
      expect(singleDigitFormat(''));
      expect(singleDigitFormat(NaN));
      expect(singleDigitFormat(null));
    } catch (err) {
      expect(err).to.eql(new Error('Parameter format error, should be Number'));
    }
  });
  it('参数合法', function () {
    expect(singleDigitFormat('0')).to.equal('00');
    expect(singleDigitFormat('1')).to.equal('01');
    expect(singleDigitFormat('11')).to.equal('11');
  });
});
