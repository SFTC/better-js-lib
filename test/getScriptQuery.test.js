import expect from 'expect.js';

import { getScriptQuery } from '../src/index';

describe('获取启动命令中指定参数的值', function() {
  it('npm run test', function () {
    expect(getScriptQuery('proxy')).to.equal(null);
  });
});
