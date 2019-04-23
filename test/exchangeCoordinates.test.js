var expect = require('expect.js');

var exchangeCoordinates = require('../src/exchangeCoordinates.js').default;
describe('判断是否为空对象', function() {
  it('经纬度格式不正确', function () {
    try {
      expect(exchangeCoordinates({}, 'bd', 'gg'));
    } catch (err) {
      expect(err).to.eql(new Error('坐标参数 参数不正确'));
    }
  });
  it('origin格式不正确', function () {
    try {
      expect(exchangeCoordinates({lng: 115.985058, lat: 40.008677}, 'a', 'gg'));
    } catch (err) {
      expect(err).to.eql(new Error('origin 参数不正确， 当前仅支持百度(bd)/高德(gg)'));
    }
  });
  it('format格式不正确', function () {
    try {
      expect(exchangeCoordinates({lng: 115.985058, lat: 40.008677}, 'bd', 'a'));
    } catch (err) {
      expect(err).to.eql(new Error('format 参数不正确， 当前仅支持百度(bd)/高德(gg)'));
    }
  });
  it('转换格式一致', function () {
    expect(exchangeCoordinates({lng: 115.985058, lat: 40.008677}, 'bd', 'bd')).to.eql({lng: 115.985058, lat: 40.008677});
  });
  it('参数合法', function () {
    expect(exchangeCoordinates({lng: 115.985058, lat: 40.008677}, 'bd', 'gg')).to.eql({ lng: 115.97842344078492, lat: 40.003018807517535 });
    expect(exchangeCoordinates({lng: 115.985058, lat: 40.008677}, 'gg', 'bd')).to.eql({ lng: 115.99168440493902, lat: 40.014344819989375 });
  });
    
});
