getPointsDistance;
var expect = require('expect.js');

var getPointsDistance = require('../src/getPointsDistance.js').default;
describe('深度克隆', function() {
  it('参数不正确', function () {
    try {
      expect(getPointsDistance());
    } catch (err) {
      expect(err).to.eql(new Error('参数不正确'));
    }
  });
  it('参数正确', function () {
    expect(getPointsDistance(40.033917, 116.381252, 39.882336, 116.480129)).to.equal(18.8656);
  });
});
