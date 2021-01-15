/* globals document, HTMLElement */

import forEach from 'foreach';
import genFn from 'make-generator-function';
import expect from 'expect.js';
import { is } from '../src/index';

var toStr = Object.prototype.toString;

describe('is.type/is.a', function () {
  it('boolean', function () {
    var booleans = [true, false];
    forEach(booleans, function (boolean) {
      expect(is.type(boolean, 'boolean')).to.be.ok();
      expect(is.a(boolean, 'boolean')).to.be.ok();
    });
  });

  it('number', function () {
    var numbers = [1, 0 / 1, 0 / -1, NaN, Infinity, -Infinity];
    forEach(numbers, function (number) {
      expect(is.type(number, 'number')).to.be.ok();
      expect(is.a(number, 'number')).to.be.ok();
    });
  });

  it('object', function () {
    var objects = [{}, null, new Date()];
    forEach(objects, function (object) {
      expect(is.type(object, 'object')).to.be.ok();
      expect(is.a(object, 'object')).to.be.ok();
    });
  });

  it('string', function () {
    var strings = ['', 'abc'];
    forEach(strings, function (string) {
      expect(is.type(string, 'string')).to.be.ok();
      expect(is.a(string, 'string')).to.be.ok();
    });
  });

  it('undefined', function () {
    expect(is.type(undefined, 'undefined')).to.be.ok();
    expect(is.a(undefined, 'undefined')).to.be.ok();
  });
});

describe('is.getType', function () {
  it('boolean', function () {
    var booleans = [true, false];
    forEach(booleans, function (boolean) {
      expect(is.getType(boolean)).to.equal('boolean');
    });
  });

  it('number', function () {
    var numbers = [1, 0 / 1, 0 / -1, NaN, Infinity, -Infinity];
    forEach(numbers, function (number) {
      expect(is.getType(number)).to.equal('number');
    });
  });

  it('object', function () {
    var objects = [{}, { a: 1 }];
    forEach(objects, function (object) {
      expect(is.getType(object)).to.equal('object');
    });
  });

  it('date', function () {
    expect(is.getType(new Date())).to.equal('date');
  });

  it('string', function () {
    var strings = ['', 'abc'];
    forEach(strings, function (string) {
      expect(is.getType(string)).to.equal('string');
    });
  });

  it('undefined', function () {
    expect(is.getType(undefined)).to.equal('undefined');
  });
});

describe('is.undef', function () {
  it('absent undefined is undefined', function () {
    expect(is.undef()).to.be.ok();
  });
  it('literal undefined is undefined', function() {
    expect(is.undef(undefined)).to.be.ok();
  });
  it('null is not undefined', function() {
    expect(is.undef(null)).to.not.be.ok();
  });
  it('object is not undefined', function() {
    expect(is.undef({})).to.not.be.ok();
  });
});

describe('is.defined', function () {
  it('undefined is not defined', function() {
    expect(is.defined()).to.not.be.ok();
  });
  it('null is defined', function() {
    expect(is.defined(null)).to.be.ok();
  });
  it('object is defined', function() {
    expect(is.defined({})).to.be.ok();
  });
});

describe('is.empty', function () {
  it('empty string is empty', function() {
    expect(is.empty('')).to.be.ok();
  });
  it('empty String object is empty', function() {
    expect(is.empty(Object(''))).to.be.ok();
  });
  it('empty array is empty', function() {
    expect(is.empty([])).to.be.ok();
  });
  it('empty object is empty', function() {
    expect(is.empty({})).to.be.ok();
  });
  it('null is empty', function() {
    expect(is.empty(null)).to.be.ok();
  });
  it('undefined is empty', function() {
    expect(is.empty()).to.be.ok();
  });
  it('undefined is empty', function() {
    expect(is.empty(undefined)).to.be.ok();
  });
  it('false is empty', function() {
    expect(is.empty(false)).to.be.ok();
  });
  it('0 is empty', function() {
    expect(is.empty(0)).to.be.ok();
  });
  it('nan is empty', function() {
    expect(is.empty(NaN)).to.be.ok();
  });
  (function () {
    it('empty arguments is empty', function() {
      expect(is.empty(arguments)).to.be.ok();
    });
  }());
  it('nonempty object is not empty', function() {
    expect(is.empty({ a: 1 })).to.not.be.ok();
  });
  it('true is not empty', function() {
    expect(is.empty(true)).to.not.be.ok();
  });
  it('regex is not empty', function() {
    expect(is.empty(/a/g)).to.not.be.ok();
  });
  it('date is not empty', function() {
    expect(is.empty(new Date())).to.not.be.ok();
  });
});

describe('is.empty2', function() {
  it('判断空字符串', function () {
    expect(is.empty2('')).to.be.ok();
  });
  it('判断null', function () {
    expect(is.empty2(null)).to.be.ok();
  });
  it('判断undefined', function () {
    expect(is.empty2(undefined)).to.be.ok();
  });
  it('判断空对象', function () {
    expect(is.empty2({})).to.not.be.ok();
  });
  it('判断空数组', function () {
    expect(is.empty2([])).to.not.be.ok();
  });
  it('判断NaN', function () {
    expect(is.empty2([])).to.not.be.ok();
  });
});

describe('is.emptyObj', function() {
  it('参数不合法', function () {
    try {
      expect(is.emptyObj([]));
    } catch (err) {
      expect(err).to.eql(new Error('参数类型非object'));
    }
  });
  it('参数合法', function () {
    expect(is.emptyObj({})).to.equal(true);
    expect(is.emptyObj({a: 1})).to.equal(false);
  });
});

describe('is.equal', function () {
  describe('primitives', function () {
    var primitives = [true, false, undefined, null, '', 'foo', 0, Infinity, -Infinity];
    forEach(primitives, function(primitive) {
      it('primitives are equal to themselves: ' + primitive, function() {
        expect(is.equal(primitive, primitive)).to.be.ok();
      });
    });
  });

  describe('arrays', function () {
    it('arrays are shallowly equal', function() {
      expect(is.equal([1, 2, 3], [1, 2, 3])).to.be.ok();
    });
    it('arrays are deep equal', function() {
      expect(is.equal([1, 2, [3, 4]], [1, 2, [3, 4]])).to.be.ok();
    });
    it('inequal arrays are not equal', function() {
      expect(is.equal([1, 2, 3], [5, 2, 3])).to.not.be.ok();
    });
    it('inequal arrays are not equal', function() {
      expect(is.equal([1, 2], [2, 3])).to.not.be.ok();
    });
    it('inequal length arrays are not equal', function() {
      expect(is.equal([1, 2, 3], [2, 3])).to.not.be.ok();
    });
    it('empty arrays are equal', function() {
      expect(is.equal([], [])).to.be.ok();
    });
    it('array is equal to itself', function() {
      var arr = [1, 2];
      expect(is.equal(arr, arr)).to.be.ok();
    });
  });

  describe('dates', function () {
    var now = new Date();
    it('two equal date objects are equal', function() {
      expect(is.equal(now, new Date(now.getTime()))).to.be.ok();
    });
    setTimeout(function () {
      it('two inequal date objects are not equal', function() {
        expect(is.equal(now, new Date())).to.not.be.ok();
      });
    }, 10);
  });

  describe('plain objects', function () {
    it('objects are shallowly equal', function() {
      expect(is.equal({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 })).to.be.ok();
    });
    it('objects are deep equal', function() {
      expect(is.equal({ a: { b: 1 } }, { a: { b: 1 } })).to.be.ok();
    });
    it('inequal objects are not equal', function() {
      expect(is.equal({ a: 1 }, { a: 2 })).to.not.be.ok();
    });
  });

  describe('object instances', function () {
    var F = function F() {
      this.foo = 'bar';
    };
    F.prototype = {};
    var G = function G() {
      this.foo = 'bar';
    };
    var f = new F();
    var g = new G();

    it('the same object instances are equal', function() {
      expect(is.equal(f, f)).to.be.ok();
    });
    it('two object instances are equal when the prototype and props are the same', function() {
      expect(is.equal(f, new F())).to.be.ok();
    });
    it('two object instances are equal when the prototype is not the same, but props are', function() {
      expect(is.equal(f, new G())).to.be.ok();
    });

    g.bar = 'baz';
    it('object instances are not equal when the prototype and props are not the same', function() {
      expect(is.equal(f, g)).to.not.be.ok();
    });
    it('object instances are not equal when the prototype and props are not the same', function() {
      expect(is.equal(g, f)).to.not.be.ok();
    });
  });

  describe('functions', function () {
    var F = function () {};
    F.prototype = {};
    var G = function () {};
    G.prototype = new Date();

    it('F and G have different prototypes', function() {
      expect(F.prototype).to.not.equal(G.prototype);
    });
    it('two functions are not equal when the prototype is not the same', function() {
      expect(is.equal(F, G)).to.not.be.ok();
    });

    var H = function () {};
    H.prototype = F.prototype;

    it('F and H have the same prototype', function() {
      expect(F.prototype).to.equal(H.prototype);
    });
    it('two functions are equal when the prototype is the same', function() {
      expect(is.equal(F, H)).to.be.ok();
    });
  });
});

describe('is.hosted', function () {
  it('object is hosted', function() {
    expect(is.hosted('a', { a: {} })).to.be.ok();
  });
  it('array is hosted', function() {
    expect(is.hosted('a', { a: [] })).to.be.ok();
  });
  it('function is hosted', function() {
    expect(is.hosted('a', { a: function () {} })).to.be.ok();
  });
  it('boolean value is not hosted', function() {
    expect(is.hosted('a', { a: true })).to.not.be.ok();
  });
  it('boolean value is not hosted', function() {
    expect(is.hosted('a', { a: false })).to.not.be.ok();
  });
  it('number value is not hosted', function() {
    expect(is.hosted('a', { a: 3 })).to.not.be.ok();
  });
  it('undefined value is not hosted', function() {
    expect(is.hosted('a', { a: undefined })).to.not.be.ok();
  });
  it('string value is not hosted', function() {
    expect(is.hosted('a', { a: 'abc' })).to.not.be.ok();
  });
  it('null value is not hosted', function() {
    expect(is.hosted('a', { a: null })).to.not.be.ok();
  });
});

describe('is.instance', function () {
  it('new Date is instanceof Date', function() {
    expect(is.instance(new Date(), Date)).to.be.ok();
  });
  var F = function () {};
  it('new constructor is instanceof constructor', function() {
    expect(is.instance(new F(), F)).to.be.ok();
  });
});

describe('is.nil', function () {
  var isNull = is.nil;
  it('null is null', function() {
    expect(isNull(null)).to.be.ok();
  });
  it('undefined is not null', function() {
    expect(isNull(undefined)).to.not.be.ok();
  });
  it('object is not null', function() {
    expect(isNull({})).to.not.be.ok();
  });
});

describe('is.args', function () {
  it('array is not arguments', function() {
    expect(is.args([])).to.not.be.ok();
  });
  (function () {
    it('arguments is arguments', function() {
      expect(is.args(arguments)).to.be.ok();
    });
  }());
  (function () {
    it('sliced arguments is not arguments', function() {
      expect(is.args(Array.prototype.slice.call(arguments))).to.not.be.ok();
    });
  }());
  var fakeOldArguments = {
    callee: function () {},
    length: 3
  };
  it('old-style arguments object is arguments', function() {
    expect(is.args(fakeOldArguments)).to.be.ok();
  });
});

describe('is["args-empty"]', function () {
  it('empty array is not empty arguments', function() {
    expect(is['args-empty']([])).to.not.be.ok();
  });
  (function () {
    it('empty arguments is empty arguments', function() {
      expect(is['args-empty'](arguments)).to.be.ok();
    });
  }());
  (function () {
    it('empty sliced arguments is not empty arguments', function() {
      expect(is['args-empty'](Array.prototype.slice.call(arguments))).to.not.be.ok();
    });
  }());
});

describe('is.array', function () {
  it('array is array', function() {
    expect(is.array([])).to.be.ok();
  });
  (function () {
    it('sliced arguments is array', function() {
      expect(is.array(Array.prototype.slice.call(arguments))).to.be.ok();
    });
  }());
});

describe('is["array-empty"]', function () {
  it('empty array is empty array', function() {
    expect(is['array-empty']([])).to.be.ok();
  });
  (function () {
    it('empty arguments is not empty array', function() {
      expect(is['array-empty'](arguments)).to.not.be.ok();
    });
  }());
  (function () {
    it('empty sliced arguments is empty array', function() {
      expect(is['array-empty'](Array.prototype.slice.call(arguments))).to.be.ok();
    });
  }());
});

describe('is.isarraylike', function () {
  it('undefined is not array-like', function() {
    expect(is.arraylike()).to.not.be.ok();
  });
  it('null is not array-like', function() {
    expect(is.arraylike(null)).to.not.be.ok();
  });
  it('false is not array-like', function() {
    expect(is.arraylike(false)).to.not.be.ok();
  });
  it('true is not array-like', function() {
    expect(is.arraylike(true)).to.not.be.ok();
  });
  it('object with zero length is array-like', function() {
    expect(is.arraylike({ length: 0 })).to.be.ok();
  });
  it('object with positive length is array-like', function() {
    expect(is.arraylike({ length: 1 })).to.be.ok();
  });
  it('object with negative length is not array-like', function() {
    expect(is.arraylike({ length: -1 })).to.not.be.ok();
  });
  it('object with NaN length is not array-like', function() {
    expect(is.arraylike({ length: NaN })).to.not.be.ok();
  });
  it('object with string length is not array-like', function() {
    expect(is.arraylike({ length: 'foo' })).to.not.be.ok();
  });
  it('object with empty string length is not array-like', function() {
    expect(is.arraylike({ length: '' })).to.not.be.ok();
  });
  it('array is array-like', function() {
    expect(is.arraylike([])).to.be.ok();
  });
  (function () {
    it('empty arguments is array-like', function() {
      expect(is.arraylike(arguments)).to.be.ok();
    });
  }());
  (function () {
    it('nonempty arguments is array-like', function() {
      expect(is.arraylike(arguments)).to.be.ok();
    });
  }(1, 2, 3));
});

describe('is.bool', function () {
  it('literal true is a boolean', function() {
    expect(is.bool(true)).to.be.ok();
  });
  it('literal false is a boolean', function() {
    expect(is.bool(false)).to.be.ok();
  });
  it('object true is a boolean', function() {
    expect(is.bool(Object(true))).to.be.ok();
  });
  it('object false is a boolean', function() {
    expect(is.bool(Object(false))).to.be.ok();
  });
  it('undefined is not a boolean', function() {
    expect(is.bool()).to.not.be.ok();
  });
  it('null is not a boolean', function() {
    expect(is.bool(null)).to.not.be.ok();
  });
});

describe('is.date', function () {
  it('new Date is date', function() {
    expect(is.date(new Date())).to.be.ok();
  });
  it('undefined is not date', function() {
    expect(is.date()).to.not.be.ok();
  });
  it('null is not date', function() {
    expect(is.date(null)).to.not.be.ok();
  });
  it('empty string is not date', function() {
    expect(is.date('')).to.not.be.ok();
  });
  var nowTS = (new Date()).getTime();
  it('timestamp is not date', function() {
    expect(is.date(nowTS)).to.not.be.ok();
  });
  var F = function () {};
  F.prototype = new Date();
  it('Date subtype is not date', function() {
    expect(is.date(new F())).to.not.be.ok();
  });
});

describe('is["date-valid"]', function () {
  it('new Date() is a valid date', function() {
    expect(is['date-valid'](new Date())).to.be.ok();
  });
  it('new Date("") is not a valid date', function() {
    expect(is['date-valid'](new Date(''))).to.not.be.ok();
  });
});

describe('is.element', function () {
  it('undefined is not element', function() {
    expect(is.element()).to.not.be.ok();
  });

  describe('when HTMLElement exists', { skip: typeof HTMLElement === 'undefined' }, function () {
    var element = document.createElement('div');
    it('HTMLElement is element', function() {
      expect(is.element(element)).to.be.ok();
    });
    it('object with nodeType is not element', function() {
      expect(is.element({ nodeType: 1 })).to.not.be.ok();
    });
  });

});

describe('is.error', function () {
  var err = new Error('foo');
  it('Error is error', function() {
    expect(is.error(err)).to.be.ok();
  });
  it('object is not error', function() {
    expect(is.error({})).to.not.be.ok();
  });
  var objWithErrorToString = {
    toString: function () {
      return '[object Error]';
    }
  };
  it('obj has Error\'s toString', function() {
    expect(String(objWithErrorToString)).to.equal(toStr.call(new Error()));
  });
  it('object with Error\'s toString is not error', function() {
    expect(is.error(objWithErrorToString)).to.not.be.ok();
  });
});

describe('is.fn', function () {
  it('function is function', function() {
    expect(is.fn(function () {})).to.be.ok();
  });
  if (typeof window !== 'undefined') {
    // in IE7/8, typeof alert === 'object'
    it('window.alert is function', function() {
      expect(is.fn(window.alert)).to.be.ok();
    });
  }
  it('object is not function', function() {
    expect(is.fn({})).to.not.be.ok();
  });
  it('null is not function', function() {
    expect(is.fn(null)).to.not.be.ok();
  });

  describe('generator functions', { skip: !genFn }, function () {
    it('generator function is function', function() {
      expect(is.fn(genFn)).to.be.ok();
    });
  });
});

describe('is.number', function () {
  it('positive zero is number', function() {
    expect(is.number(0)).to.be.ok();
  });
  it('negative zero is number', function() {
    expect(is.number(0 / -1)).to.be.ok();
  });
  it('three is number', function() {
    expect(is.number(3)).to.be.ok();
  });
  it('NaN is number', function() {
    expect(is.number(NaN)).to.be.ok();
  });
  it('infinity is number', function() {
    expect(is.number(Infinity)).to.be.ok();
  });
  it('negative infinity is number', function() {
    expect(is.number(-Infinity)).to.be.ok();
  });
  it('object number is number', function() {
    expect(is.number(Object(42))).to.be.ok();
  });
  it('undefined is not number', function() {
    expect(is.number()).to.not.be.ok();
  });
  it('null is not number', function() {
    expect(is.number(null)).to.not.be.ok();
  });
  it('true is not number', function() {
    expect(is.number(true)).to.not.be.ok();
  });
});

describe('is.infinite', function () {
  it('positive infinity is infinite', function() {
    expect(is.infinite(Infinity)).to.be.ok();
  });
  it('negative infinity is infinite', function() {
    expect(is.infinite(-Infinity)).to.be.ok();
  });
  it('NaN is not infinite', function() {
    expect(is.infinite(NaN)).to.not.be.ok();
  });
  it('a number is not infinite', function() {
    expect(is.infinite(0)).to.not.be.ok();
  });
});

describe('is.decimal', function () {
  it('decimal is decimal', function() {
    expect(is.decimal(1.1)).to.be.ok();
  });
  it('zero is not decimal', function() {
    expect(is.decimal(0)).to.not.be.ok();
  });
  it('integer is not decimal', function() {
    expect(is.decimal(1)).to.not.be.ok();
  });
  it('NaN is not decimal', function() {
    expect(is.decimal(NaN)).to.not.be.ok();
  });
  it('Infinity is not decimal', function() {
    expect(is.decimal(Infinity)).to.not.be.ok();
  });
});

describe('is.divisibleBy', function () {
  it('4 is divisible by 2', function() {
    expect(is.divisibleBy(4, 2)).to.be.ok();
  });
  it('4 is divisible by 2', function() {
    expect(is.divisibleBy(4, 2)).to.be.ok();
  });
  it('0 is divisible by 1', function() {
    expect(is.divisibleBy(0, 1)).to.be.ok();
  });
  it('infinity is divisible by anything', function() {
    expect(is.divisibleBy(Infinity, 1)).to.be.ok();
  });
  it('anything is divisible by infinity', function() {
    expect(is.divisibleBy(1, Infinity)).to.be.ok();
  });
  it('infinity is divisible by infinity', function() {
    expect(is.divisibleBy(Infinity, Infinity)).to.be.ok();
  });
  it('1 is not divisible by 0', function() {
    expect(is.divisibleBy(1, 0)).to.not.be.ok();
  });
  it('NaN is not divisible by 1', function() {
    expect(is.divisibleBy(NaN, 1)).to.not.be.ok();
  });
  it('1 is not divisible by NaN', function() {
    expect(is.divisibleBy(1, NaN)).to.not.be.ok();
  });
  it('NaN is not divisible by NaN', function() {
    expect(is.divisibleBy(NaN, NaN)).to.not.be.ok();
  });
  it('1 is not divisible by 3', function() {
    expect(is.divisibleBy(1, 3)).to.not.be.ok();
  });
});

describe('is.integer', function () {
  it('0 is integer', function() {
    expect(is.integer(0)).to.be.ok();
  });
  it('3 is integer', function() {
    expect(is.integer(3)).to.be.ok();
  });
  it('1.1 is not integer', function() {
    expect(is.integer(1.1)).to.not.be.ok();
  });
  it('NaN is not integer', function() {
    expect(is.integer(NaN)).to.not.be.ok();
  });
  it('infinity is not integer', function() {
    expect(is.integer(Infinity)).to.not.be.ok();
  });
  it('null is not integer', function() {
    expect(is.integer(null)).to.not.be.ok();
  });
  it('undefined is not integer', function() {
    expect(is.integer()).to.not.be.ok();
  });
});

describe('is.maximum', function () {
  it('3 is maximum of [3,2,1]', function() {
    expect(is.maximum(3, [3, 2, 1])).to.be.ok();
  });
  it('3 is maximum of [1,2,3]', function() {
    expect(is.maximum(3, [1, 2, 3])).to.be.ok();
  });
  it('4 is maximum of [1,2,3]', function() {
    expect(is.maximum(4, [1, 2, 3])).to.be.ok();
  });
  it('c is maximum of [a,b,c]', function() {
    expect(is.maximum('c', ['a', 'b', 'c'])).to.be.ok();
  });
  it('2 is not maximum of [1,2,3]', function() {
    expect(is.maximum(2, [1, 2, 3])).to.not.be.ok();
  });

  var nanError = new TypeError('NaN is not a valid value');
  it('throws when first value is NaN', function() {
    try {
      expect(is.maximum(NaN));
    } catch (err) {
      expect(err).to.eql(nanError);
    }
  });

  var error = new TypeError('second argument must be array-like');
  it('throws when second value is not array-like', function() {
    try{
      expect(is.maximum(2, null));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
  it('throws when second value is not array-like', function() {
    try{
      expect(is.maximum(2, {}));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
});

describe('is.minimum', function () {
  it('1 is minimum of [3,2,1]', function() {
    expect(is.minimum(1, [3, 2, 1])).to.be.ok();
  });
  it('0 is minimum of [1,2,3]', function() {
    expect(is.minimum(0, [1, 2, 3])).to.be.ok();
  });
  it('a is minimum of [a,b,c]', function() {
    expect(is.minimum('a', ['a', 'b', 'c'])).to.be.ok();
  });
  it('2 is not minimum of [1,2,3]', function() {
    expect(is.minimum(2, [1, 2, 3])).to.not.be.ok();
  });

  var nanError = new TypeError('NaN is not a valid value');
  it('throws when first value is NaN', function() {
    try{
      expect(is.minimum(NaN));
    } catch (err) {
      expect(err).to.eql(nanError);
    }
  });

  var error = new TypeError('second argument must be array-like');
  it('throws when second value is not array-like', function() {
    try{
      expect(is.minimum(2, null));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
  it('throws when second value is not array-like', function() {
    try{
      expect(is.minimum(2, {}));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
});

describe('is.nan', function () {
  it('NaN is not a number', function() {
    expect(is.nan(NaN)).to.be.ok();
  });
  it('string is not a number', function() {
    expect(is.nan('abc')).to.be.ok();
  });
  it('boolean is not a number', function() {
    expect(is.nan(true)).to.be.ok();
  });
  it('object is not a number', function() {
    expect(is.nan({})).to.be.ok();
  });
  it('array is not a number', function() {
    expect(is.nan([])).to.be.ok();
  });
  it('function is not a number', function() {
    expect(is.nan(function () {})).to.be.ok();
  });
  it('zero is a number', function() {
    expect(is.nan(0)).to.not.be.ok();
  });
  it('three is a number', function() {
    expect(is.nan(3)).to.not.be.ok();
  });
  it('1.1 is a number', function() {
    expect(is.nan(1.1)).to.not.be.ok();
  });
  it('infinity is a number', function() {
    expect(is.nan(Infinity)).to.not.be.ok();
  });
});

describe('is.even', function () {
  it('zero is even', function() {
    expect(is.even(0)).to.be.ok();
  });
  it('two is even', function() {
    expect(is.even(2)).to.be.ok();
  });
  it('infinity is even', function() {
    expect(is.even(Infinity)).to.be.ok();
  });
  it('1 is not even', function() {
    expect(is.even(1)).to.not.be.ok();
  });
  it('undefined is not even', function() {
    expect(is.even()).to.not.be.ok();
  });
  it('null is not even', function() {
    expect(is.even(null)).to.not.be.ok();
  });
  it('NaN is not even', function() {
    expect(is.even(NaN)).to.not.be.ok();
  });
});

describe('is.odd', function () {
  it('zero is odd', function() {
    expect(is.odd(1)).to.be.ok();
  });
  it('two is odd', function() {
    expect(is.odd(3)).to.be.ok();
  });
  it('infinity is odd', function() {
    expect(is.odd(Infinity)).to.be.ok();
  });
  it('0 is not odd', function() {
    expect(is.odd(0)).to.not.be.ok();
  });
  it('2 is not odd', function() {
    expect(is.odd(2)).to.not.be.ok();
  });
  it('undefined is not odd', function() {
    expect(is.odd()).to.not.be.ok();
  });
  it('null is not odd', function() {
    expect(is.odd(null)).to.not.be.ok();
  });
  it('NaN is not odd', function() {
    expect(is.odd(NaN)).to.not.be.ok();
  });
});

describe('is.ge', function () {
  it('3 is greater than 2', function() {
    expect(is.ge(3, 2)).to.be.ok();
  });
  it('2 is not greater than 3', function() {
    expect(is.ge(2, 3)).to.not.be.ok();
  });
  it('3 is greater than or equal to 3', function() {
    expect(is.ge(3, 3)).to.be.ok();
  });
  it('abc is greater than a', function() {
    expect(is.ge('abc', 'a')).to.be.ok();
  });
  it('abc is greater than or equal to abc', function() {
    expect(is.ge('abc', 'abc')).to.be.ok();
  });
  it('a is not greater than abc', function() {
    expect(is.ge('a', 'abc')).to.not.be.ok();
  });
  it('infinity is not greater than anything', function() {
    expect(is.ge(Infinity, 0)).to.not.be.ok();
  });
  it('anything is not greater than infinity', function() {
    expect(is.ge(0, Infinity)).to.not.be.ok();
  });

  var error = new TypeError('NaN is not a valid value');
  it('throws when first value is NaN', function() {
    try{
      expect(is.ge(NaN, 2));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
  it('throws when second value is NaN', function() {
    try{
      expect(is.ge(2, NaN));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
});

describe('is.gt', function () {
  it('3 is greater than 2', function() {
    expect(is.gt(3, 2)).to.be.ok();
  });
  it('2 is not greater than 3', function() {
    expect(is.gt(2, 3)).to.not.be.ok();
  });
  it('3 is not greater than 3', function() {
    expect(is.gt(3, 3)).to.not.be.ok();
  });
  it('abc is greater than a', function() {
    expect(is.gt('abc', 'a')).to.be.ok();
  });
  it('abc is not greater than abc', function() {
    expect(is.gt('abc', 'abc')).to.not.be.ok();
  });
  it('a is not greater than abc', function() {
    expect(is.gt('a', 'abc')).to.not.be.ok();
  });
  it('infinity is not greater than anything', function() {
    expect(is.gt(Infinity, 0)).to.not.be.ok();
  });
  it('anything is not greater than infinity', function() {
    expect(is.gt(0, Infinity)).to.not.be.ok();
  });

  var error = new TypeError('NaN is not a valid value');
  it('throws when first value is NaN', function() {
    try{
      expect(is.gt(NaN, 2));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
  it('throws when second value is NaN', function() {
    try{
      expect(is.gt(2, NaN));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
});

describe('is.le', function () {
  it('2 is lesser than or equal to 3', function() {
    expect(is.le(2, 3)).to.be.ok();
  });
  it('3 is not lesser than or equal to 2', function() {
    expect(is.le(3, 2)).to.not.be.ok();
  });
  it('3 is lesser than or equal to 3', function() {
    expect(is.le(3, 3)).to.be.ok();
  });
  it('a is lesser than or equal to abc', function() {
    expect(is.le('a', 'abc')).to.be.ok();
  });
  it('abc is lesser than or equal to abc', function() {
    expect(is.le('abc', 'abc')).to.be.ok();
  });
  it('abc is not lesser than or equal to a', function() {
    expect(is.le('abc', 'a')).to.not.be.ok();
  });
  it('infinity is not lesser than or equal to anything', function() {
    expect(is.le(Infinity, 0)).to.not.be.ok();
  });
  it('anything is not lesser than or equal to infinity', function() {
    expect(is.le(0, Infinity)).to.not.be.ok();
  });
  var error = new TypeError('NaN is not a valid value');
  it('throws when first value is NaN', function() {
    try{
      expect(is.le(NaN, 2));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
  it('throws when second value is NaN', function() {
    try{
      expect(is.le(2, NaN));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
});

describe('is.lt', function () {
  it('2 is lesser than 3', function() {
    expect(is.lt(2, 3)).to.be.ok();
  });
  it('3 is not lesser than 2', function() {
    expect(is.lt(3, 2)).to.not.be.ok();
  });
  it('3 is not lesser than 3', function() {
    expect(is.lt(3, 3)).to.not.be.ok();
  });
  it('a is lesser than abc', function() {
    expect(is.lt('a', 'abc')).to.be.ok();
  });
  it('abc is not lesser than abc', function() {
    expect(is.lt('abc', 'abc')).to.not.be.ok();
  });
  it('abc is not lesser than a', function() {
    expect(is.lt('abc', 'a')).to.not.be.ok();
  });
  it('infinity is not lesser than anything', function() {
    expect(is.lt(Infinity, 0)).to.not.be.ok();
  });
  it('anything is not lesser than infinity', function() {
    expect(is.lt(0, Infinity)).to.not.be.ok();
  });

  var error = new TypeError('NaN is not a valid value');
  it('throws when first value is NaN', function() {
    try{
      expect(is.lt(NaN, 2));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
  it('throws when second value is NaN', function() {
    try{
      expect(is.lt(2, NaN));
    } catch (err) {
      expect(err).to.eql(error);
    }
  });
});

describe('is.within', function () {
  describe('throws on NaN', function () {
    var nanError = new TypeError('NaN is not a valid value');
    it('throws when first value is NaN', function() {
      try{
        expect(is.within(NaN, 0, 0));
      } catch (err) {
        expect(err).to.eql(nanError);
      }
    });
    it('throws when second value is NaN', function() {
      try{
        expect(is.within(0, NaN, 0));
      } catch (err) {
        expect(err).to.eql(nanError);
      }
    });
    it('throws when third value is NaN', function() {
      try{
        expect(is.within(0, 0, NaN));
      } catch (err) {
        expect(err).to.eql(nanError);
      }
    });
  });

  describe('throws on non-number', function () {
    var error = new TypeError('all arguments must be numbers');
    it('throws when first value is string', function() {
      try{
        expect(is.within('', 0, 0));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
    it('throws when second value is string', function() {
      try{
        expect(is.within(0, '', 0));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
    it('throws when third value is string', function() {
      try{
        expect(is.within(0, 0, ''));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
    it('throws when first value is object', function() {
      try{
        expect(is.within({}, 0, 0));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
    it('throws when second value is object', function() {
      try{
        expect(is.within(0, {}, 0));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
    it('throws when third value is object', function() {
      try{
        expect(is.within(0, 0, {}));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
    it('throws when first value is null', function() {
      try{
        expect(is.within(null, 0, 0));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
    it('throws when second value is null', function() {
      try{
        expect(is.within(0, null, 0));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
    it('throws when third value is null', function() {
      try{
        expect(is.within(0, 0, null));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
    it('throws when first value is undefined', function() {
      try{
        expect(is.within(undefined, 0, 0));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
    it('throws when second value is undefined', function() {
      try{
        expect(is.within(0, undefined, 0));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
    it('throws when third value is undefined', function() {
      try{
        expect(is.within(0, 0, undefined));
      } catch (err) {
        expect(err).to.eql(error);
      }
    });
  });

  it('2 is between 1 and 3', function() {
    expect(is.within(2, 1, 3)).to.be.ok();
  });
  it('0 is between -1 and 1', function() {
    expect(is.within(0, -1, 1)).to.be.ok();
  });
  it('infinity always returns true', function() {
    expect(is.within(2, 0, Infinity)).to.be.ok();
  });
  it('infinity always returns true', function() {
    expect(is.within(2, Infinity, 2)).to.be.ok();
  });
  it('infinity always returns true', function() {
    expect(is.within(Infinity, 0, 1)).to.be.ok();
  });
  it('2 is not between -1 and 1', function() {
    expect(is.within(2, -1, -1)).to.not.be.ok();
  });
});

describe('is.object', function () {
  it('object literal is object', function() {
    expect(is.object({})).to.be.ok();
  });
  it('undefined is not an object', function() {
    expect(is.object()).to.not.be.ok();
  });
  it('null is not an object', function() {
    expect(is.object(null)).to.not.be.ok();
  });
  it('true is not an object', function() {
    expect(is.object(true)).to.not.be.ok();
  });
  it('string is not an object', function() {
    expect(is.object('')).to.not.be.ok();
  });
  it('NaN is not an object', function() {
    expect(is.object(NaN)).to.not.be.ok();
  });
  it('object constructor is not an object', function() {
    expect(is.object(Object)).to.not.be.ok();
  });
  it('function is not an object', function() {
    expect(is.object(function () {})).to.not.be.ok();
  });

  describe('Symbols', { skip: typeof Symbol !== 'function' }, function () {
    it('symbol is not an object', function() {
      expect(is.object(Symbol('foo'))).to.not.be.ok();
    });
  });

});

describe('is.primitive', function () {
  it('object literal is not a primitive', function() {
    expect(is.primitive({})).to.not.be.ok();
  });
  it('array is not a primitive', function() {
    expect(is.primitive([])).to.not.be.ok();
  });
  it('undefined is a primitive', function() {
    expect(is.primitive()).to.be.ok();
  });
  it('null is a primitive', function() {
    expect(is.primitive(null)).to.be.ok();
  });
  it('true is a primitive', function() {
    expect(is.primitive(true)).to.be.ok();
  });
  it('string is a primitive', function() {
    expect(is.primitive('')).to.be.ok();
  });
  it('NaN is a primitive', function() {
    expect(is.primitive(NaN)).to.be.ok();
  });
  it('object constructor is not a primitive', function() {
    expect(is.primitive(Object)).to.not.be.ok();
  });
  it('function is not a primitive', function() {
    expect(is.primitive(function () {})).to.not.be.ok();
  });

  describe('Symbols', { skip: typeof Symbol !== 'function' }, function () {
    it('symbol is a primitive', function() {
      expect(is.primitive(Symbol('foo'))).to.be.ok();
    });
  });

});

describe('is.hash', function () {
  it('empty object literal is hash', function() {
    expect(is.hash({})).to.be.ok();
  });
  it('object literal is hash', function() {
    expect(is.hash({ 1: 2, a: 'b' })).to.be.ok();
  });
  it('undefined is not a hash', function() {
    expect(is.hash()).to.not.be.ok();
  });
  it('null is not a hash', function() {
    expect(is.hash(null)).to.not.be.ok();
  });
  it('date is not a hash', function() {
    expect(is.hash(new Date())).to.not.be.ok();
  });
  it('string object is not a hash', function() {
    expect(is.hash(Object(''))).to.not.be.ok();
  });
  it('string literal is not a hash', function() {
    expect(is.hash('')).to.not.be.ok();
  });
  it('number object is not a hash', function() {
    expect(is.hash(Object(0))).to.not.be.ok();
  });
  it('number literal is not a hash', function() {
    expect(is.hash(1)).to.not.be.ok();
  });
  it('true is not a hash', function() {
    expect(is.hash(true)).to.not.be.ok();
  });
  it('false is not a hash', function() {
    expect(is.hash(false)).to.not.be.ok();
  });
  it('boolean obj is not hash', function() {
    expect(is.hash(Object(false))).to.not.be.ok();
  });
  it('literal false is not hash', function() {
    expect(is.hash(false)).to.not.be.ok();
  });
  it('literal true is not hash', function() {
    expect(is.hash(true)).to.not.be.ok();
  });

  describe('commonJS environment', { skip: typeof module === 'undefined' }, function () {
    it('module.exports is a hash', function() {
      expect(is.hash(module.exports)).to.be.ok();
    });
  });

  describe('browser stuff', { skip: typeof window === 'undefined' }, function () {
    it('window is not a hash', function() {
      expect(is.hash(window)).to.not.be.ok();
    });
    it('element is not a hash', function() {
      expect(is.hash(document.createElement('div'))).to.not.be.ok();
    });
  });

  describe('node stuff', { skip: typeof process === 'undefined' }, function () {
    it('global is not a hash', function() {
      expect(is.hash(global)).to.not.be.ok();
    });
    it('process is not a hash', function() {
      expect(is.hash(process)).to.not.be.ok();
    });
  });

});

describe('is.regexp', function () {
  it('regex literal is regex', function() {
    expect(is.regexp(/a/g)).to.be.ok();
  });
  it('regex object is regex', function() {
    expect(is.regexp(new RegExp('a', 'g'))).to.be.ok();
  });
  it('undefined is not regex', function() {
    expect(is.regexp()).to.not.be.ok();
  });
  it('function is not regex', function() {
    expect(is.regexp(function () {})).to.not.be.ok();
  });
  it('string regex is not regex', function() {
    expect(is.regexp('/a/g')).to.not.be.ok();
  });
});

describe('is.string', function () {
  it('string literal is string', function() {
    expect(is.string('foo')).to.be.ok();
  });
  it('string object is string', function() {
    expect(is.string(Object('foo'))).to.be.ok();
  });
  it('undefined is not string', function() {
    expect(is.string()).to.not.be.ok();
  });
  it('string constructor is not string', function() {
    expect(is.string(String)).to.not.be.ok();
  });
  var F = function () {};
  F.prototype = Object('');
  it('string subtype is not string', function() {
    expect(is.string(F)).to.not.be.ok();
  });
});

describe('is.base64', function () {
  it('string is base64 encoded', function() {
    expect(is.base64('wxyzWXYZ/+==')).to.be.ok();
  });
  it('zero length string is base64 encoded', function() {
    expect(is.base64('')).to.be.ok();
  });
  it('string length not a multiple of four is not base64 encoded', function() {
    expect(is.base64('wxyzWXYZ123/+==')).to.not.be.ok();
  });
  it('string with invalid characters is not base64 encoded', function() {
    expect(is.base64('wxyzWXYZ1234|]==')).to.not.be.ok();
  });
  it('string with = not at end is not base64 encoded', function() {
    expect(is.base64('wxyzWXYZ1234==/+')).to.not.be.ok();
  });
  it('string ending with === is not base64 encoded', function() {
    expect(is.base64('wxyzWXYZ1234/===')).to.not.be.ok();
  });
});

describe('is.hex', function () {
  it('string is hex encoded', function() {
    expect(is.hex('abcdABCD1234')).to.be.ok();
  });
  it('zero length string is hex encoded', function() {
    expect(is.hex('')).to.be.ok();
  });
  it('string with invalid characters is not hex encoded', function() {
    expect(is.hex('wxyzWXYZ1234/+==')).to.not.be.ok();
  });
});

describe('is.symbol', function () {
  describe('not symbols', function () {
    var notSymbols = [true, false, null, undefined, {}, [], function () {}, 42, NaN, Infinity, /a/g, '', 0, -0, new Error('error')];
    forEach(notSymbols, function (notSymbol) {
      it(notSymbol + ' is not symbol', function() {
        expect(is.symbol(notSymbol)).to.not.be.ok();
      });
    });

  });

  describe('symbols', { skip: typeof Symbol !== 'function' }, function () {
    it('Symbol("foo") is symbol', function() {
      expect(is.symbol(Symbol('foo'))).to.be.ok();
    });

    var notKnownSymbols = ['length', 'name', 'arguments', 'caller', 'prototype', 'for', 'keyFor'];
    var symbolKeys = Object.getOwnPropertyNames(Symbol).filter(function (name) {
      return notKnownSymbols.indexOf(name) < 0;
    });
    forEach(symbolKeys, function (symbolKey) {
      it(symbolKey + ' is symbol', function() {
        expect(is.symbol(Symbol[symbolKey])).to.be.ok();
      });
    });

  });

});

describe('is.bigint', function () {
  describe('not bigints', function () {
    var notBigints = [true, false, null, undefined, {}, [], function () {}, 42, NaN, Infinity, /a/g, '', 0, -0, new Error('error')];
    forEach(notBigints, function (notBigint) {
      it(notBigint + ' is not bigint', function() {
        expect(is.bigint(notBigint)).to.not.be.ok();
      });
    });

  });

  describe('bigints', { skip: typeof BigInt !== 'function' }, function () {
    var bigInts = [
      Function('return 42n')(), // eslint-disable-line no-new-func
      BigInt(42) // eslint-disable-line no-undef
    ];
    forEach(bigInts, function (bigInt) {
      it(bigInt + ' is bigint', function() {
        expect(is.bigint(bigInt)).to.be.ok();
      });
    });
  });
});
