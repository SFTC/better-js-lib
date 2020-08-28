import expect from 'expect.js';

import { is } from '../src/index';

describe('通过原生 typeof 校验数据类型', function() {
  it('判断数字', function () {
    expect(is.a(1, 'number')).to.be.ok();
    expect(is.type(1, 'number')).to.be.ok();
    expect(is.type('123', 'number')).to.not.be.ok();
  });
});
