import expect from 'expect.js';

import { exchangeObjectFieldName } from '../src/index';

describe('替换一个对象中一些指定属性的属性名', function() {
  it('替换属性名', function () {
    const data = {
      price01: 10000,
      price02: 10000,
      price03: 10000,
      value: '金额',
      obj: { value: '123' },
      arr: [1, 2, 3]
    };
    const processData = exchangeObjectFieldName(data, [
      {
        oldName: 'price01',
        newName: 'newprice01'
      },
      {
        oldName: 'obj',
        newName: 'newobj'
      }
    ]);
    expect(processData).to.eql({
      newprice01: 10000,
      price02: 10000,
      price03: 10000,
      value: '金额',
      newobj: { value: '123' },
      arr: [1, 2, 3]
    });
  });

  it('替换属性名并处理属性值', function () {
    const data = {
      price01: 10000,
      price02: 10000,
      price03: 10000,
      value: '金额',
      obj: { value: '123' },
      arr: [1, 2, 3]
    };
    const processData = exchangeObjectFieldName(data, [
      {
        oldName: 'price01',
        newName: 'newprice01',
        handler: (value) => value / 100
      },
      {
        oldName: 'obj',
        newName: 'newobj',
        handler: (value) => {
          value.value = '456';
          return value;
        }
      }
    ]);
    expect(processData).to.eql({
      newprice01: 100,
      price02: 10000,
      price03: 10000,
      value: '金额',
      newobj: { value: '456' },
      arr: [1, 2, 3]
    });
  });
});
