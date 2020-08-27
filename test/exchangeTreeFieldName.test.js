import expect from 'expect.js';

import { exchangeTreeFieldName } from '../src/index';

describe('全局替换树形结构数据的某个字段', function () {
  it('常规', function () {
    const arr = [{ a: 1, children: [{ a: 2, children: [{ a: 3 }] }] }];
    // 判断所有层级
    expect(exchangeTreeFieldName(arr, 'b', 'a', false)[0].b).to.equal(arr[0].a);
    expect(exchangeTreeFieldName(arr, 'b', 'a', false)[0].children[0].b).to.equal(arr[0].children[0].a);
    expect(exchangeTreeFieldName(arr, 'b', 'a', false)[0].children[0].children[0].b).to.equal(arr[0].children[0].children[0].a);
  });
});
