var expect = require('expect.js');

var toFixed = require('../src/toFixed.js').default;

describe('四舍五入', function() {
  it('情况一', function () {
    expect(toFixed(0.666, 2)).to.be.equal(0.67);
  });
  it('情况二', function () {
    expect(toFixed(0.666, 0)).to.be.equal(1);
  });
  it('情况三', function () {
    expect(toFixed(0.664, 2)).to.be.equal(0.66);
  });
  it('情况四', function () {
    expect(toFixed(0.664, 3)).to.be.equal(0.664);
  });
});
