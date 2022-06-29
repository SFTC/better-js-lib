import expect from 'expect.js';
import jsdom from 'mocha-jsdom';

import { getUrlQuery } from '../src/index';

describe('带 query 的 url', function () {
  jsdom({ url: 'http://localhost?name=zhangsan&age=25&phone=13888888888' });

  it('不传 key，则获取 url 中的全部参数', function () {
    var query = {
      name: 'zhangsan',
      age: '25',
      phone: 13888888888,
    };
    expect(getUrlQuery()).to.be.eql(query);
  });

  it('从 url 中获取某一个指定的参数', function () {
    expect(getUrlQuery('name')).to.be.equal('zhangsan');
    expect(getUrlQuery('age')).to.be.equal('25');
    expect(getUrlQuery('phone')).to.be.equal('13888888888');
  });

  it('从 url 中获取一个不存在的参数则返回 null', function () {
    expect(getUrlQuery('sex')).to.be.eql(null);
  });
});

describe('带 hash 的 url', function () {
  jsdom({
    url: 'http://localhost#activity?name=zhangsan&age=25&phone=13888888888',
  });

  it('不传 key，则获取 url 中的全部参数', function () {
    var query = {
      name: 'zhangsan',
      age: '25',
      phone: 13888888888,
    };
    expect(getUrlQuery()).to.be.eql(query);
  });

  it('从 url 中获取某一个指定的参数', function () {
    expect(getUrlQuery('name')).to.be.equal('zhangsan');
    expect(getUrlQuery('age')).to.be.equal('25');
    expect(getUrlQuery('phone')).to.be.equal('13888888888');
  });

  it('从 url 中获取一个不存在的参数则返回 null', function () {
    expect(getUrlQuery('sex')).to.be.eql(null);
  });
});

describe('没有任何参数的 url', function () {
  jsdom({ url: 'http://localhost' });

  it('如果从 url 中没有获取到任何参数则返回 {}', function () {
    expect(getUrlQuery()).to.be.eql({});
  });

  it('从 url 中获取一个不存在的参数则返回 null', function () {
    expect(getUrlQuery('sex')).to.be.eql(null);
  });
});

describe('传入 url 参数', function () {
  var url = 'http://localhost?name=zhangsan&age=25&phone=13888888888';

  it('不传 key，则获取 url 中的全部参数', function () {
    var query = {
      name: 'zhangsan',
      age: '25',
      phone: 13888888888,
    };
    expect(getUrlQuery(null, url)).to.be.eql(query);
  });

  it('从 url 中获取某一个指定的参数', function () {
    expect(getUrlQuery('name', url)).to.be.equal('zhangsan');
    expect(getUrlQuery('age', url)).to.be.equal('25');
    expect(getUrlQuery('phone', url)).to.be.equal('13888888888');
  });

  it('从 url 中获取一个不存在的参数则返回 null', function () {
    expect(getUrlQuery('sex', url)).to.be.eql(null);
  });
});

describe('带 hash 的 url：http://localhost#activity?name=zhangsan&age=25&phone=13888888888', function () {
  jsdom({
    url: 'http://localhost#activity?name=zhangsan&age=25&phone=13888888888',
  });

  it('不传 key，则获取 url 中的全部参数', function () {
    var query = {
      name: 'zhangsan',
      age: '25',
      phone: 13888888888,
    };
    expect(getUrlQuery()).to.be.eql(query);
  });

  it('从 url 中获取某一个指定的参数', function () {
    expect(getUrlQuery('name')).to.be.equal('zhangsan');
    expect(getUrlQuery('age')).to.be.equal('25');
    expect(getUrlQuery('phone')).to.be.equal('13888888888');
  });

  it('从 url 中获取一个不存在的参数则返回 null', function () {
    expect(getUrlQuery('sex')).to.be.eql(null);
  });
});

describe('既带 hash 又带 query 的 url', function () {
  var url =
    'http://localhost?pversion-id=211&a=1#/cx/cancelSent?orderId=123456&b=2';
  jsdom({ url });

  it('从 url 中获取某一个指定的参数', function () {
    expect(getUrlQuery('pversion-id', url)).to.be.equal('211');
    expect(getUrlQuery('a', url)).to.be.equal('1');
    expect(getUrlQuery('orderId', url)).to.be.equal('123456');
    expect(getUrlQuery('b', url)).to.be.equal('2');
  });

  it('从页面中获取某一个指定的参数', function () {
    expect(getUrlQuery('pversion-id')).to.be.equal('211');
    expect(getUrlQuery('a')).to.be.equal('1');
    expect(getUrlQuery('orderId')).to.be.equal('123456');
    expect(getUrlQuery('b')).to.be.equal('2');
  });
});
