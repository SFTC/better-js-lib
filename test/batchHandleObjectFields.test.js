import expect from 'expect.js';

import { batchHandleObject } from '../src/index';

describe('对一个对象中指定字段进行批量处理', function() {
  it('批量处理金额，除以100', function () {
    const data = {
      price01: 10000,
      price02: 10000,
      price03: 10000,
      value: '金额',
      obj: { value: '123' },
      arr: [1, 2, 3]
    };
    const processData = batchHandleObject(data, ['price01', 'price02', 'price03'], (value) => value / 100);
    expect(processData).to.eql({
      price01: 100,
      price02: 100,
      price03: 100,
      value: '金额',
      obj: { value: '123' },
      arr: [1, 2, 3]
    });
  });

  it('批量处理字符串，添加"$符号"', function () {
    const data = {
      price01: '10000',
      price02: '10000',
      price03: '10000',
      value: '金额',
      obj: { value: '123' },
      arr: [1, 2, 3]
    };
    const processData = batchHandleObject(data, ['price01', 'price02', 'price03'], (value) => `$${value}`);
    expect(processData).to.eql({
      price01: '$10000',
      price02: '$10000',
      price03: '$10000',
      value: '金额',
      obj: { value: '123' },
      arr: [1, 2, 3]
    });
  });
});
