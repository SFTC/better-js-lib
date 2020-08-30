import expect from 'expect.js';

import { getArrIntersection } from '../src/index';

describe('判断是否为空对象', function() {
  expect(getArrIntersection([])).to.eql([]);
  expect(getArrIntersection([1, 2], [2, 3], [2, 4, 5])).to.eql([2]);
});
