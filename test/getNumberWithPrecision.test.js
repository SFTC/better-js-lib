import expect from 'expect.js';

import { getNumberWithPrecision } from '../src/index';

describe('将数字转为百分比格式', function() {
  it('normal', function () {
    expect(getNumberWithPrecision(0.126)).to.equal('12.60');
  });

  it('保留一位小数', function () {
    expect(getNumberWithPrecision(0.126, 1)).to.equal('12.6');
  });

  it('四舍五入保留整数', function () {
    expect(getNumberWithPrecision(0.126, 0)).to.equal('13');
  });

  it('precision 小于 0', function () {
    expect(getNumberWithPrecision(0.126, -1)).to.equal('0.126');
  });

  it('添加百分号后缀', function () {
    expect(getNumberWithPrecision(0.126, undefined, true)).to.equal('12.60%');
  });
});
