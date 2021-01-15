import expect from 'expect.js';

import { GradientColor } from '../src/index';
import { colorHex, colorRgb } from '../src/GradientColor';

describe('根据首尾颜色和步长计算出渐变颜色的色值', function() {
  it('normal', function () {
    expect(new GradientColor('#0057A0', '#90D5FF').getColor(5)).to.eql(['rgb(0,87,160)','rgb(29,112,179)', 'rgb(58,137,198)', 'rgb(86,163,217)', 'rgb(115,188,236)']);
  });

  it('colorHex 三位色值', function () {
    expect(colorHex('#fff')).to.equal('#ffffff');
  });

  it('colorHex 六位色值', function () {
    expect(colorHex('#ffffff')).to.equal('#ffffff');
  });

  it('colorHex 非法色值1', function () {
    expect(colorHex('#fffff')).to.equal('#fffff');
  });

  it('colorHex 非法色值2', function () {
    expect(colorHex('abc')).to.equal('abc');
  });

  it('colorHex rgb', function () {
    expect(colorHex('rgb(0, 0, 0)')).to.equal('rgb(0, 0, 0)');
  });

  it('colorRgb 非法色值', function () {
    expect(colorRgb('#zzz')).to.eql([]);
  });

  it('colorRgb 非法色值', function () {
    expect(colorRgb('#fff')).to.eql([255, 255, 255]);
  });
});
