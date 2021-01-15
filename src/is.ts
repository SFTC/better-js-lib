var objProto = Object.prototype;
var owns = objProto.hasOwnProperty;
var toStr = objProto.toString;
var symbolValueOf: { (): symbol; call?: any };
if (typeof Symbol === 'function') {
  symbolValueOf = Symbol.prototype.valueOf;
}
var bigIntValueOf: { (): bigint; call?: any };
if (typeof BigInt === 'function') {
  // eslint-disable-next-line no-undef
  bigIntValueOf = BigInt.prototype.valueOf;
}
var isActualNaN = function (value: any): boolean {
  return value !== value;
};
var NON_HOST_TYPES = {
  'boolean': 1,
  number: 1,
  string: 1,
  undefined: 1
};

var base64Regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
var hexRegex = /^[A-Fa-f0-9]+$/;

interface IsType {
  /** 通过原生 typeof 校验数据类型 */
  a: (value: any, type: string) => boolean;
  /** 通过原生 typeof 校验数据类型 */
  type: (value: any, type: string) => boolean;
  /**  value 的数据类型 */
  getType: (value: any) => string;
  /** 校验 value 是否有定义 */
  defined: (value: any) => boolean;
  /** 校验 value 是否为空，这里的"空"包括 !!value === false、[]、{} */
  empty: (value: any) => boolean;
  /** 校验 value 是否为空，这里的"空"包括 null、undefined、'' */
  empty2: (value: any) => boolean;
  /** 校验 value 是否为空对象 */
  emptyObj: (value: any) => boolean;
  /** 校验 value 和 other 是否相等 */
  equal: (value: any, other: any) => boolean;
  /** 校验对象 hosted 的属性 value 是否是 hosted */
  hosted: (value: any, host: any) => boolean;
  /** 校验 value 是否是 constructor 的实例化对象 */
  instance: (value: any, host: any) => boolean;
  /** 校验 value 的数据类型是否是 null */
  nil: (value: any) => boolean;
  /** 校验 value 的数据类型是否是 undefined */
  undef: (value: any) => value is undefined;
  /** 校验 value 的数据类型是否是参数数组 */
  args: (value: any) => boolean;
  /** 校验 value 的数据类型是否是数组 */
  array: (value: any) => boolean;
  /** 校验 value 是否是一个空的参数数组 */
  'args-empty': (value: any) => boolean;
  /** 校验 value 是否是一个空的数组 */
  'array-empty': (value: any) => boolean;
  /** 校验 value 是否是一个类数组 */
  arraylike: (value: any) => boolean;
  /** 校验 value 的数据类型是否是对象 */
  object: (value: any) => boolean;
  /** 校验 value 是否可以被整除 */
  divisibleBy: (value: number, n: number) => boolean;
  /** 校验 value 是否为整数 */
  integer: (value: any) => boolean;
  /** 判断 value 是否是 others数组中最大的 */
  maximum: (value: number, others: any[]) => boolean;
  /** 判断 value 是否是 others数组中最小的 */
  minimum: (value: number, others: any[]) => boolean;
  /** 判断 value 是否是 NaN */
  nan: (value: any) => boolean;
  /** 判断 value 是否是偶数 */
  even: (value: number) => boolean;
  /** 判断 value 是否是奇数 */
  odd: (value: number) => boolean;
  /** 判断 value 是否大于或等于 other */
  ge: (value: number, other: number) => boolean;
  /** 判断 value 是否大于 other */
  gt: (value: number, other: number) => boolean;
  /** 判断 value 是否小于或等于 other */
  le: (value: number, other: number) => boolean;
  /** 判断 value 是否小于 other */
  lt: (value: number, other: number) => boolean;
  /** 判断 value 是否位于 [start, finish] 区间内 */
  within: (value: number, start: number, finish: number) => boolean;
  /** 判断 value 是否是基本数据类型 */
  primitive: (value: any) => boolean;
  /** 判断 value 是否是 hash */
  hash: (value: any) => boolean;
  /** 判断 value 是否是正则表达式 */
  regexp: (value: any) => boolean;
  /** 判断 value 是否是字符创 */
  string: (value: any) => boolean;
  /** 判断 value 是否是一个 base64 编码的二进制数据 */
  base64: (value: any) => boolean;
  /** 校验 value 是否是一个十六进制数据 */
  hex: (value: any) => boolean;
  /** 校验 value 的数据类型是否是 symbol */
  symbol: (value: any) => boolean;
  /** 校验 value 的数据类型是否是 ES-提议的 bigint 类型 */
  bigint: (value: any) => boolean;
  /** 校验 value 是否为小数 */
  decimal: (value: any) => boolean;
  /** 校验 value 是否为无穷大 */
  infinite: (value: any) => boolean;
  /** 校验 value 的数据类型是否是数字 */
  number: (value: any) => boolean;
  /** 校验 value 的数据类型是否是函数类型 */
  fn: (value: any) => boolean;
  /** 校验 value 的数据类型是否是 Error */
  error: (value: any) => boolean;
  /** 校验 value 是否是一个 HTML 元素节点 */
  element: (value: any) => boolean;
  /** 校验 value 是否是可转化为日期的数字 */
  'date-valid': (value: any) => boolean;
  /** 校验 value 的数据类型是否是日期类型 */
  date: (value: any) => boolean;
  /** 校验 value 的数据类型是否是布尔值 */
  bool: (value: any) => boolean;
}

/** is 判断各种数据类型 */
const is: IsType = {
  a: (value, type): boolean => typeof value === type,
  type: (value, type): boolean => typeof value === type,
  getType: (value): string => {
    var dataType = toStr.call(value);
    var regRes = dataType.match(/\[object (\w+)\]/);
    if (regRes) {
      return regRes[1].toLowerCase();
    }
    throw Error(`未获取到该数据【${JSON.stringify(value)}】的类型`);
  },
  defined: (value): boolean => typeof value !== 'undefined',
  empty: (value): boolean => {
    var type = toStr.call(value);
    var key: string | number | symbol;

    if (type === '[object Array]' || type === '[object Arguments]' || type === '[object String]') {
      return value.length === 0;
    }

    if (type === '[object Object]') {
      for (key in value) {
        if (owns.call(value, key)) {
          return false;
        }
      }
      return true;
    }

    return !value;
  },
  empty2(value): boolean {
    return is.nil(value) || is.undef(value) || value === '';
  },
  emptyObj(value): boolean {
    if (!is.object(value)) {
      return false;
    } else {
      return is.empty(value);
    }
  },
  equal: (value, other): boolean => {
    if (value === other) {
      return true;
    }

    var type = toStr.call(value);
    var key: string | number;

    if (type !== toStr.call(other)) {
      return false;
    }

    if (type === '[object Object]') {
      for (key in value) {
        if (!is.equal(value[key], other[key]) || !(key in other)) {
          return false;
        }
      }
      for (key in other) {
        if (!is.equal(value[key], other[key]) || !(key in value)) {
          return false;
        }
      }
      return true;
    }

    if (type === '[object Array]') {
      key = value.length;
      if (key !== other.length) {
        return false;
      }
      while ((key as number)--) {
        // @ts-ignore
        if (!is.equal(value[key], other[key])) {
          return false;
        }
      }
      return true;
    }

    if (type === '[object Function]') {
      return value.prototype === other.prototype;
    }

    if (type === '[object Date]') {
      return value.getTime() === other.getTime();
    }

    return false;
  },
  hosted: (value, host): boolean => {
    var type = typeof host[value];
    return type === 'object' ? !!host[value] : !NON_HOST_TYPES[type];
  },
  instance: (value, constructor): boolean => value instanceof constructor,
  nil: (value): boolean => value === null,
  undef: (value): value is undefined => typeof value === 'undefined',
  args: (value): boolean => {
    var isStandardArguments = toStr.call(value) === '[object Arguments]';
    var isOldArguments = !is.array(value) && is.arraylike(value) && is.object(value) && is.fn(value.callee);
    return isStandardArguments || isOldArguments;
  },
  'args-empty': (value): boolean => is.args(value) && value.length === 0,
  array: Array.isArray || ((value): boolean => toStr.call(value) === '[object Array]'),
  'array-empty': (value): boolean => is.array(value) && value.length === 0,
  arraylike: (value: any): boolean => !!value && !is.bool(value)&& owns.call(value, 'length') && isFinite(value.length) && is.number(value.length) && value.length >= 0,
  bool: (value: any): boolean => toStr.call(value) === '[object Boolean]',
  date: (value: any): boolean => toStr.call(value) === '[object Date]',
  'date-valid': (value: any): boolean => is.date(value) && !isNaN(Number(value)),
  element: (value: any): boolean => value !== undefined
    && typeof HTMLElement !== 'undefined'
    && value instanceof HTMLElement
    && value.nodeType === 1,
  error: (value: any): boolean => toStr.call(value) === '[object Error]',
  fn: (value: any): boolean => {
    var isAlert = typeof window !== 'undefined' && value === window.alert;
    if (isAlert) {
      return true;
    }
    var str = toStr.call(value);
    return str === '[object Function]' || str === '[object GeneratorFunction]' || str === '[object AsyncFunction]';
  },
  number: (value: any): boolean => toStr.call(value) === '[object Number]',
  infinite: (value: any): boolean => value === Infinity || value === -Infinity,
  decimal: (value: any): boolean => is.number(value) && !isActualNaN(value) && !is.infinite(value) && value % 1 !== 0,
  divisibleBy: (value: number, n: number): boolean => {
    var isDividendInfinite = is.infinite(value);
    var isDivisorInfinite = is.infinite(n);
    var isNonZeroNumber = is.number(value) && !isActualNaN(value) && is.number(n) && !isActualNaN(n) && n !== 0;
    return isDividendInfinite || isDivisorInfinite || (isNonZeroNumber && value % n === 0);
  },
  integer: (value): boolean => is.number(value) && !isActualNaN(value) && value % 1 === 0,
  maximum: (value: number, others: any[]): boolean => {
    if (isActualNaN(value)) {
      throw new TypeError('NaN is not a valid value');
    } else if (!is.arraylike(others)) {
      throw new TypeError('second argument must be array-like');
    }
    var len = others.length;
  
    while (--len >= 0) {
      if (value < others[len]) {
        return false;
      }
    }
  
    return true;
  },
  minimum:(value: number, others: any[]): boolean => {
    if (isActualNaN(value)) {
      throw new TypeError('NaN is not a valid value');
    } else if (!is.arraylike(others)) {
      throw new TypeError('second argument must be array-like');
    }
    var len = others.length;
  
    while (--len >= 0) {
      if (value > others[len]) {
        return false;
      }
    }

    return true;
  },
  nan:(value: any): boolean => !is.number(value) || value !== value,
  even:(value: number): boolean => is.infinite(value) || (is.number(value) && value === value && value % 2 === 0),
  odd:(value: number): boolean => is.infinite(value) || (is.number(value) && value === value && value % 2 !== 0),
  ge:(value: number, other: number): boolean => {
    if (isActualNaN(value) || isActualNaN(other)) {
      throw new TypeError('NaN is not a valid value');
    }
    return !is.infinite(value) && !is.infinite(other) && value >= other;
  },
  gt:(value: number, other: number): boolean => {
    if (isActualNaN(value) || isActualNaN(other)) {
      throw new TypeError('NaN is not a valid value');
    }
    return !is.infinite(value) && !is.infinite(other) && value > other;
  },
  le:(value: number, other: number): boolean => {
    if (isActualNaN(value) || isActualNaN(other)) {
      throw new TypeError('NaN is not a valid value');
    }
    return !is.infinite(value) && !is.infinite(other) && value <= other;
  },
  lt:(value: number, other: number): boolean => {
    if (isActualNaN(value) || isActualNaN(other)) {
      throw new TypeError('NaN is not a valid value');
    }
    return !is.infinite(value) && !is.infinite(other) && value < other;
  },
  within:(value: number, start: number, finish: number): boolean => {
    if (isActualNaN(value) || isActualNaN(start) || isActualNaN(finish)) {
      throw new TypeError('NaN is not a valid value');
    } else if (!is.number(value) || !is.number(start) || !is.number(finish)) {
      throw new TypeError('all arguments must be numbers');
    }
    var isAnyInfinite = is.infinite(value) || is.infinite(start) || is.infinite(finish);
    return isAnyInfinite || (value >= start && value <= finish);
  },
  object:(value: any): boolean => toStr.call(value) === '[object Object]',
  primitive:(value: any): boolean => {
    if (!value) {
      return true;
    }
    if (typeof value === 'object' || is.object(value) || is.fn(value) || is.array(value)) {
      return false;
    }
    return true;
  },
  hash:(value: any): boolean => is.object(value) && value.constructor === Object && !value.nodeType && !value.setInterval,
  regexp:(value: any): boolean => toStr.call(value) === '[object RegExp]',
  string:(value: any): boolean => toStr.call(value) === '[object String]',
  base64:(value: any): boolean => is.string(value) && (!value.length || base64Regex.test(value)),
  hex:(value: any): boolean => is.string(value) && (!value.length || hexRegex.test(value)),
  symbol:(value: any): boolean => typeof Symbol === 'function' && toStr.call(value) === '[object Symbol]' && typeof symbolValueOf.call(value) === 'symbol',
  // eslint-disable-next-line valid-typeof
  bigint:(value: any): boolean => typeof BigInt === 'function' && toStr.call(value) === '[object BigInt]' && typeof bigIntValueOf.call(value) === 'bigint'
};

export default is;
