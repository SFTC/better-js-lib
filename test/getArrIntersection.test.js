var expect = require('expect.js');

var getArrIntersection = require('../src/getArrIntersection.js').default;
describe('判断是否为空对象', function() {
  expect(getArrIntersection([])).to.eql([]);
  expect(getArrIntersection([1, 2], [2, 3], [2, 4, 5])).to.eql([2]);
});
