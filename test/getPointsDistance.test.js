import expect from 'expect.js';

import { getPointsDistance } from '../src/index';

describe('计算两个坐标点之间的直线距离', function() {
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
