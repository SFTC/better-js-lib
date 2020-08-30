import expect from 'expect.js';

import { filterVoidObject } from '../src/index';

describe('过滤对象中的空值', function() {
  it('过滤空字符串', function () {
    expect(filterVoidObject({
      name: 'zhangsan',
      age: '25',
      alias: '',
      phone: 13888888888
    })).to.eql({
      name: 'zhangsan',
      age: '25',
      phone: 13888888888
    });
  });
  it('过滤null', function () {
    expect(filterVoidObject({
      name: 'zhangsan',
      age: '25',
      alias: null,
      phone: 13888888888
    })).to.eql({
      name: 'zhangsan',
      age: '25',
      phone: 13888888888
    });
  });
  it('过滤undefined', function () {
    expect(filterVoidObject({
      name: 'zhangsan',
      age: '25',
      alias: undefined,
      phone: 13888888888
    })).to.eql({
      name: 'zhangsan',
      age: '25',
      phone: 13888888888
    });
  });
  it('过滤空数组', function () {
    expect(filterVoidObject({
      name: 'zhangsan',
      age: '25',
      alias: undefined,
      phone: 13888888888,
      house: [],
    },function(value){ return !(Object.prototype.toString.call(value) === '[object Array]' && value.length === 0); })).to.eql({
      name: 'zhangsan',
      age: '25',
      alias: undefined,
      phone: 13888888888
    });
  });
  it('过滤数组中的空值', function () {
    expect(filterVoidObject({
      name: 'zhangsan',
      age: '25',
      alias: undefined,
      phone: 13888888888,
      house: [1,2,null],
    })).to.eql({
      name: 'zhangsan',
      age: '25',
      phone: 13888888888,
      house: [1,2],
    });
  });
  it('过滤循环对象', function () {
    let obj = {a:{}, c: ''};
    obj.a.b=obj.a;
    expect(filterVoidObject(obj).c).to.equal(undefined);
  });
});
