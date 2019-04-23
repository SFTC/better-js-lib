var expect = require('expect.js');

var tree = require('../src/tree.js').default;

describe('tree', function () {
  it('常规', function () {
    const arr = [{ a: 1, children: [{ a: 2, children: [{ a: 3 }] }] }];
    // 判断所有层级
    expect(tree(arr, 'b', 'a', false)[0].b).to.equal(arr[0].a);
    expect(tree(arr, 'b', 'a', false)[0].children[0].b).to.equal(arr[0].children[0].a);
    expect(tree(arr, 'b', 'a', false)[0].children[0].children[0].b).to.equal(arr[0].children[0].children[0].a);
  });
});
