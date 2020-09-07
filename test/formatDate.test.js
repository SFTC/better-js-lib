import expect from 'expect.js';
import dayjs from 'dayjs';

import { formatDate } from '../src/index';

const { formatTimeNum, format, formatSeconds, getDayZeroTm, dayjs: fnDayjs } = formatDate;

describe('formatTimeNum 方法会将 10 以下的数字回转换成一个在数字前面加 0 的字符串', function () {
  for (var i = 0; i < 10; i++) {
    (function(i) {
      it('输入 ' + i + ' 应该输出 "0' + i + '"', function () {
        expect(formatTimeNum(i)).to.equal('0' + i);
      });
    }).call(null, i);
  }
  it('输入 11 应该输出 "11"', function () {
    expect(formatTimeNum(11)).to.equal('11');
  });
});

describe('使用 format 格式化时间', function() {
  it('输入 format(new Date("2019-01-01 08:00:00"), "YYYY-MM-DD HH:mm:ss") 会输出 2019-01-01 08:00:00', function () {
    expect(format(new Date('2019-01-01 08:00:00'), 'YYYY-MM-DD HH:mm:ss')).to.equal('2019-01-01 08:00:00');
  });
});

describe('使用 formatSeconds 格式化秒', function () {
  it('输入 formatSeconds(86399) 会输出 23:59:59', function () {
    expect(formatSeconds(86399)).to.equal('23:59:59');
  });
});

describe('使用 getDayZeroTm 获取指定日期的零点时间戳', function () {
  var examDateStr = '2019-01-01 08:00:00';
  var tm = new Date(examDateStr).setHours(0, 0, 0, 0);
  it('输入 getDayZeroTm(' + examDateStr + ', ms) 会输出 ' + tm, function () {
    expect(getDayZeroTm(examDateStr, 'ms')).to.equal(tm);
  });
  it('输入 getDayZeroTm(' + examDateStr + ', s) 会输出 ' + tm, function () {
    expect(getDayZeroTm(examDateStr, 's')).to.equal(tm / 1000);
  });
  it('输入 getDayZeroTm(' + examDateStr + ') 会输出 dayjs 对象' + tm, function () {
    expect(dayjs(tm).isSame(getDayZeroTm(examDateStr))).to.equal(true);
  });
});

describe('使用 dayjs 方法来实例化一个 dayjs 对象', function () {
  it('输入 dayjs() 返回一个 当前时间的 dayjs 对象', function() {
    expect(dayjs(fnDayjs()).isSame(dayjs())).to.equal(true);
  });
});
