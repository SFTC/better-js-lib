# 文档

* [目录](#目录)
  * [Utils.idcard - *根据身份证号获取到一些个人信息*](#utilsidcard)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子)
  * [Utils.is - *判断 JavaScript 类型的校验库，可用于判断数据类型等*](#utilsis)
    * [general](#general)
    * [arguments](#arguments)
    * [array](#array)
    * [boolean](#boolean)
    * [date](#date)
    * [element](#element)
    * [error](#error)
    * [function](#function)
    * [number](#number)
    * [object](#object)
    * [regexp](#regexp)
    * [string](#string)
    * [encoded binary](#encoded-binary)
    * [Symbols](#symbols)
    * [BigInts](#bigints)
  * [Utils.tree - *全局替换树形结构数据的某个字段，并且在对应二级children数组上添加“全部”的选项*](#utilstree)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-1)
  * [Utils.check - *检验各类信息*](#utilscheck)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-2)
  * [Utils.getUrlQuery - *获取 url 中的参数*](#utilsgeturlquery)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-3)
  * [Utils.getUrlString - *将对象转换为 url 地址后面可以携带的参数形式*](#utilsgeturlstring)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-4)
  * [Utils.filterVoidObject - *过滤对象中的空值*](#utilsfiltervoidobject)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-5)
  * [Utils.isVoidObject - *用来判断是否为空对象*](#utilsisvoidobject)
  * [Utils.hasEmoji - *校验字符串中是否含有 Emoji 表情符号*](#utilshasemoji)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-6)
  * [Utils.getArrIntersection - *取多个数组的交集*](#utilsgetarrintersection)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-7)
  * [Utils.NP - *加、减、乘、除精确运算*](#utilsnp)
    * [方法](#方法)
      * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-8)
  * [Utils.deepCopy - *深拷贝数据*](#utilsdeepcopy)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-9)
  * [Utils.isEmpty - *判断参数是否为空、 null、 undefined*](#utilsisempty)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-10)
  * [Utils.getPointsDistance - *计算两个坐标点之间的直线距离*](#utilsgetpointsdistance)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-11)
  * [Utils.exchangeCoordinates - *用来转化坐标，以用于不同的坐标系*](#utilsexchangecoordinates)
    * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-12)
  * [Utils.formatDate - *集合 “时间类” 的方法*](#utilsformatdate)
    * [Utils.formatDate.formatTimeNum](#utilsformatdateformattimenum)
      * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-13)
      * [Utils.formatDate.format](#utilsformatdateformat)
      * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-14)
      * [Utils.formatDate.formatSeconds](#utilsformatdateformatseconds)
      * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-15)
      * [Utils.formatDate.getDayZeroTm](#utilsformatdategetdayzerotm)
      * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-16)
      * [Utils.formatDate.dayjs](#utilsformatdatedayjs)
      * [例子<g-emoji class="g-emoji" alias="chestnut" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f330.png">🌰</g-emoji>](#例子-17)

## Utils.idcard [:top:](#文档)

根据身份证号获取到一些个人信息

通过这个方式可以从身份证号中提取到这个人的籍贯、生日、年龄和生肖

- param {string} card 身份证号
- return {object} 个人信息，包括籍贯、生日、年龄和生肖

### 例子🌰

```js
Utils.idcard.idcard('131002199408153611');
/*
  {
    place: {
      province: '河北省',
      city: '廊坊市',
      district: '安次区',
    },
    birthday: {
      birthday: "1994/08/15",
      year: "1994",
      month: "08",
      day: "15"
    },
    age: '24',
    animalSigns: '狗'
  }
*/

Utils.idcard.IDCard15To18('131002940815361'); // 131002199408153611
Utils.idcard.getAge('131002199408153611'); // '24'
Utils.idcard.getAge('131002199408153611', 1554090947763); // '24'，可以通过设置第二个参数改变对比年龄的基准时间
Utils.idcard.getAnimalSigns('131002199408153611'); // '狗'
Utils.idcard.getBirthday('131002199408153611');
/*
{
  birthday: "1994/08/15",
  year: "1994",
  month: "08",
  day: "15"
}
*/
Utils.idcard.getArea('131002199408153611');
/*
{
  province: '河北省',
  city: '廊坊市',
  district: '安次区',
}
*/
```

可以通过 idcard 方法获取身份证号相关的全部信息，也可以通过单独的方法获取指定信息
注：如果传入身份证号的格式不对，以上方法统一返回数字 -1；请用 -1 判断身份证格式是否合法，没必要在获取身份证号信息之前自己写方法校验是否合法

---

## Utils.is

判断 JavaScript 类型的校验库，可用于判断数据类型等

### general

 - ``is.a`` (value, type) 或者 ``is.type`` (value, type) - 通过原生 typeof 校验数据类型
 - ``is.defined`` (value) - 校验 value 是否有定义
 - ``is.empty`` (value) - 校验 value 是否为空，这里的"空"包括 !!value === false、[]、{}
 - ``is.equal`` (value, other) - 校验 value 和 other 是否相等，包括基本数据类型、函数、日期、数组、对象的深层对比
 - ``is.hosted`` (value, host) - 校验 对象 `hosted` 的属性 `value` 是否是 hosted(包括除基本数据类型之外的对象数据类型)
 - ``is.instance`` (value, constructor) - 校验 value 是否是 constructor 的实例化对象
 - ``is.instanceof`` (value, constructor) - **已废弃**，因为在 ES3 及以后的浏览器环境 "instanceof" 成为一个关键字
 - ``is.nil`` (value) - 校验 value 的数据类型是否是 null
 - ``is.null`` (value) - **已废弃**，因为在 ES3 及以后的浏览器环境 "null" 成为一个关键字
 - ``is.undef`` (value) - 校验 value 的数据类型是否是 undefined
 - ``is.undefined`` (value) - **已废弃**，因为在 ES3 及以后的浏览器环境 "undefined" 成为一个关键字

### arguments

 - ``is.args`` (value) - 校验 value 的数据类型是否是参数数组
 - ``is.arguments`` (value) - **已废弃**，因为 "arguments" 是一个关键字deprecated
 - ``is.args.empty`` (value) - 校验 value 是否是一个空的参数数组

### array

 - ``is.array`` (value) - 校验 value 的数据类型是否是数组
 - ``is.array.empty`` (value) - 校验 value 是否是一个空的数组
 - ``is.arraylike`` (value) - 校验 value 是否是一个类数组

### boolean

 - ``is.bool`` (value) - 校验 value 的数据类型是否是布尔类型
 - ``is.boolean`` (value) - **已废弃**，因为在 ES3 及以后的浏览器环境 "boolean" 成为一个关键字
 - ``is.false`` (value) - **已废弃**，因为在 ES3 及以后的浏览器环境 "false" 成为一个关键字
 - ``is.true`` (value) - **已废弃**，因为在 ES3 及以后的浏览器环境 "true" 成为一个关键字

### date

 - ``is.date`` (value) - 校验 value 的数据类型是否是日期类型

### element

 - ``is.element`` (value) - 校验 value 是否是一个 HTML 元素节点

### error

 - ``is.error`` (value) - 校验 value 的数据类型是否是 Error

### function

 - ``is.fn`` (value) - 校验 value 的数据类型是否是函数类型(包括 `Function`、`GeneratorFunction`、`AsyncFunction`)
 - ``is.function`` (value) - **已废弃**，因为在 ES3 及以后的浏览器环境 "function" 成为一个关键字

### number

 - ``is.number`` (value) - 校验 value 的数据类型是否是数字
 - ``is.infinite`` (value) - 校验 value 是否为无穷大
 - ``is.decimal`` (value) - 校验 value 是否为小数
 - ``is.divisibleBy`` (value, n) - 校验 value 是否可以被整除
 - ``is.integer`` (value) - 校验 value 是否为整数
 - ``is.int`` (value) - **已废弃**，因为在 ES3 及以后的浏览器环境 "int" 成为一个关键字
 - ``is.maximum`` (value, others) - 判断 value 是否是 `others`数组中最大的
 - ``is.minimum`` (value, others) - 判断 value 是否是 `others`数组中最小的
 - ``is.nan`` (value) - 判断 value 是否是 NaN
 - ``is.even`` (value) - 判断 value 是否是偶数
 - ``is.odd`` (value) - 判断 value 是否是奇数
 - ``is.ge`` (value, other) - 判断 value 是否大于或等于 other
 - ``is.gt`` (value, other) - 判断 value 是否大于 other
 - ``is.le`` (value, other) - 判断 value 是否小于或等于 other
 - ``is.lt`` (value, other) - 判断 value 是否小于 other
 - ``is.within`` (value, start, finish) - 判断 value 是否位于 [start, finish] 区间内

### object

 - ``is.object`` (value) - 校验 value 的数据类型是否是对象

### regexp

 - ``is.regexp`` (value) - 校验 value 的数据类型是否是正则表达式

### string

 - ``is.string`` (value) - 校验 value 的数据类型是否是字符串

### encoded binary

 - ``is.base64`` (value) - 校验 value 是否是一个 base64 编码的二进制数据
 - ``is.hex`` (value) - 校验 value 是否是一个十六进制数据

### Symbols

 - ``is.symbol`` (value) - 校验 value 的数据类型是否是 symbol

### BigInts

 - ``is.bigint`` (value) - 校验 value 的数据类型是否是 ES-提议的 bigint 类型

更多 API 请参考：[is](https://github.com/enricomarino/is)

---

## Utils.tree

全局替换树形结构数据的某个字段，并且在对应二级children数组上添加“全部”的选项

- param {array} arr - 要处理的数组
- param {string} newKey - 要替换成的 key
- param {string} oldKey - 要被换成的 key
- param {boolen} [isDelete] - 旧的 key 是否要被干掉
- return {array} 返回处理之后的树形结构数据

### 例子🌰

```js
const arr = [
  {
    "dept_code":"001",
    "dept_name":"总部",
    "parent_dept_code":"",
    "type_level":0,
    "children":[
      {
        "dept_code":"CN02",
        "dept_name":"华东大区",
        "parent_dept_code":"001",
        "type_level":1,
        "children":[
          {
            "dept_code":"512Y",
            "dept_name":"苏州区部",
            "parent_dept_code":"CN02",
            "type_level":2,
            "children":[
              {
                "dept_code":"512A",
                "dept_name":"领秀江南经营分部",
                "parent_dept_code":"512Y",
                "type_level":3,
                "children":[
                  {
                    "dept_code":"512TG",
                    "dept_name":"干将东路速运营业点",
                    "parent_dept_code":"512A",
                    "type_level":4
                  }
                ]
              },
            ]
          }
        ]
      },
    ]
  }
];
Utils.tree(arr, 'title', 'dept_name', false);
/*
[
  {
    "dept_code":"001",
    "dept_name":"总部",
    "title": '总部',
    "parent_dept_code":"",
    "type_level":0,
    "children":[
      {
        "dept_code":"CN02",
        "dept_name":"华东大区",
        "title":"华东大区",
        "parent_dept_code":"001",
        "type_level":1,
        "children":[
          {
            "dept_code":"512Y",
            "dept_name":"苏州区部",
            "title":"苏州区部",
            "parent_dept_code":"CN02",
            "type_level":2,
            "children":[
              {
                "dept_code":"512A",
                "dept_name":"领秀江南经营分部",
                "title":"领秀江南经营分部",
                "parent_dept_code":"512Y",
                "type_level":3,
                "children":[
                  {
                    "dept_code":"512TG",
                    "dept_name":"干将东路速运营业点",
                    "title":"干将东路速运营业点",
                    "parent_dept_code":"512A",
                    "type_level":4
                  }
                ]
              },
            ]
          }
        ]
      },
    ]
  }
];
*/
```

---

## Utils.check

校验信息

这个方法集中了检验各类信息的函数

- param {string} message 需要校验的信息
- return {boolean} 校验结果

### 例子🌰

```js
/* 校验字符串是否都是中文 */
Utils.check.checkCnString('这是一段中文'); // true

/* 校验"身份证号"是否合法，只支持校验"18位"身份证 */
/* "15位"身份证号请通过 Utils.idcard.IDCard15To18 方法转成"18位"后再校验 */
Utils.check.checkIDCard('110102198401015378'); // true

/* 校验"邮箱"是否合法 */
Utils.check.checkMail('13888888888@163.com'); // true

/* 校验"手机号"是否合法 */
Utils.check.checkPhone('13888888888'); // true

/* 校验"手机， 座机， 分机号码"是否合法 */
Utils.check.checkPhone('13888888888'); // true
```

---

## Utils.getUrlQuery

获取 url 中的参数

- param {string} [key] 需要获取的 key，如果不传改参数则返回 url 中的所有参数组成的对象
- param {string} [url] 可以通过传入 url 参数来获取指定 url 的参数，不传则默认为 window.location.href
- return {string|object|null} 返回对应 key 的 value，如果没有的话则返回 null

### 例子🌰

```js
// url: http://localhost?name=zhangsan&age=25&phone=13888888888
getUrlQuery();
/*
{
  name: "zhangsan",
  age: "25",
  phone: "13888888888"
}
*/

getUrlQuery('name'); // zhangsan
getUrlQuery('sex'); // null
```

支持获取带 hash 的 url 的参数

---

## Utils.getUrlString

将对象转换为 url 地址后面可以携带的参数形式

- param {object} obj 需要转换的对象
- param {object} [config] 配置项
- - {boolean} hasPrefix 在首位增加"?"

### 例子🌰

```js
getUrlString({ name: "zhangsan", age: "25", phone: 13888888888 }); // name=zhangsan&age=25&phone=13888888888

getUrlString({ name: "zhangsan", age: "25", phone: 13888888888 }, { hasPrefix: true }); // ?name=zhangsan&age=25&phone=13888888888

getUrlString({ person: { name: "zhangsan", age: "25" }, auth: [1, 2, 3] }); // person={"name":"zhangsan","age":"25"}&auth=[1,2,3]
```

非原型数据类型的数据会做 JSON.stringify 处理

---

## Utils.filterVoidObject

这个方法用来过滤对象中的空值

- obj {Object} 待过滤object
- isValid {Function} 自定义回调函数，返回有效的值
- return {Object} 过滤后的object

### 例子🌰

```js
Utils.filterVoidObject({
  a: 1,
  b: null,
  c: undefined,
  d: '',
  e: '1'
});
/*
  {
    a: 1,
    e: '1'
  }
*/
```

---

## Utils.isVoidObject

这个方法用来判断是否为空对象

- param {Object} 待校验object
- return {Boolean} 是否为空对象

```js
Utils.isVoidObject({});
/* true */

Utils.isVoidObject({a: 1});
/* false */
```

---

## Utils.hasEmoji

这个方法用来校验字符串中是否含有 Emoji 表情符号

- text {String} 进行校验的字符串
- return {Boolean}是否含有表情符号
  
### 例子🌰

```js
Utils.hasEmoji('Unicorn 🦄'); // true

Utils.hasEmoji('cat'); // false
```

---

## Utils.getArrIntersection

取多个数组的交集

- param {Array[Array,Array,...]} 内容为一个一个的数组
- return {Array} 交集后的数组

### 例子🌰

```js
Utils.getArrIntersection([1, 2], [1, 2, 4, 5], [2, 4, 6]);
/* [2] */

Utils.getArrIntersection([1, 2], [1, 2, 4, 5], [3, 4, 6]);
/* [] */
```

---

## Utils.NP

这个方法用来解决 JavaScript 中浮点数 加、减、乘、除中数字精度的问题

### 方法

```js
NP.strip(num)                      // 获取离 num 最近的正确的数字
NP.plus(num1, num2, num3, ...)     // 加法，num + num2 + num3，至少传入两个数字
NP.minus(num1, num2, num3, ...)    // 减法，num - num2 - num3
NP.times(num1, num2, num3, ...)    // 乘法，num1 * num2 * num3
NP.divide(num1, num2, num3, ...)   // 除法，num1 / num2 / num3
NP.round(num, ratio)               // 为 num 保留 ratio 位小数
```

### 例子🌰

```js
NP.strip(0.09999999999999998); // = 0.1
NP.plus(0.1, 0.2);             // = 0.3, not 0.30000000000000004
NP.plus(2.3, 2.4);             // = 4.7, not 4.699999999999999
NP.minus(1.0, 0.9);            // = 0.1, not 0.09999999999999998
NP.times(3, 0.3);              // = 0.9, not 0.8999999999999999
NP.times(0.362, 100);          // = 36.2, not 36.199999999999996
NP.divide(1.21, 1.1);          // = 1.1, not 1.0999999999999999
NP.round(0.105, 2);            // = 0.11, not 0.1
```

注：如果你不想得到这样的提示 `XXX is beyond boundary when transfer to integer, the results may not be accurate`，使用下面的方式想项目启动时关闭边界检查：

```js
NP.enableBoundaryChecking(false); // default param is true
```

更多 API 请参考：[number-precision](https://github.com/nefe/number-precision)

---

## Utils.deepCopy

这个方法用来深拷贝数据，方法同 [lodash.clonedeep](https://lodash.com/docs/4.17.11#cloneDeep)，目前支持的数据类型：对象、数组、函数等

- param {Any} 需要被深拷贝的数据
- return {Any} 拷贝的新数据

### 例子🌰

```js
var obj = {
  key: {
    name: 'person'
  }
};

var obj_copy = Utils.deepCopy(obj);
obj_copy.key.name = 'person_copy';

obj.key.name; // 'person'
```

---

## Utils.isEmpty

判断参数是否为空、 null、 undefined

- obj {*} 任何数据
- return {Boolean} 校验结果
  
### 例子🌰

```js
Utils.isEmpty(null); // true
Utils.isEmpty('this is a string'); // false
```

---

## Utils.getPointsDistance

这个方法用来计算两个坐标点之间的直线距离

- param {Number} [s_lat] 起始点纬度
- param {Number} [s_lng] 起始点经度
- param {Number} [e_lat] 终点纬度
- param {Number} [e_lng] 终点经度
- return {Number} 距离，单位为米

### 例子🌰

```js
Utils.getPointsDistance(40, 166, 40, 167); // 118.1
```

---

## Utils.exchangeCoordinates

这个方法用来转化坐标，以用于不同的坐标系

- param {Object} [Coord] 坐标系，例如：{lng, lat}
- param {String} [origin] 原坐标系格式，可选值：[gg:国标，bd：百度坐标]
- param {String} [format] 要转成的格式，可选值：[gg:国标，bd：百度坐标]
- return {Object} 转换后的坐标

### 例子🌰

```js
Utils.exchangeCoordinates({ lng: 123, lat: 45 }, 'bd', 'gg'); // { lng: 123, lat: 45 }
```

---

## Utils.formatDate

这个方法集合了 **“时间类”** 的方法，引用 **[dayjs](https://github.com/iamkun/dayjs)** 时间库，因此用户也可以使用到所有的 dayjs 方法

### Utils.formatDate.formatTimeNum

这个方法用来格式化时间的数字，输入小于 9 的数字将输出数字前面加 0 的字符串，大于 9 的数字直接变以字符串的形式输出

### 例子🌰

```js
Utils.formatDate.formatTimeNum(6); // "06"
Utils.formatDate.formatTimeNum(12); // "12"
```

### Utils.formatDate.format

这个方法用来格式化时间

- param {String|Date} dateStr 可以解析传入的一个标准的[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)时间字符串，或者是一个 Date 对象
- param {String} formatVal 格式化模板，要格式化的形式
- return {String} 格式化后时间

### 例子🌰

```js
Utils.formatDate.format('2019-01-25', '[YYYY] YYYY-MM-DDTHH:mm:ssZ[Z]'); // 'YYYY 2019-01-25T00:00:00-02:00Z'
```

注：使用方法同 dayjs().format(String)，详情可参考 [dayjs api](https://github.com/iamkun/dayjs/blob/dev/docs/zh-cn/API-reference.md#%E6%A0%BC%E5%BC%8F%E5%8C%96)

### Utils.formatDate.formatSeconds

这个方法可以把秒转换成时分秒格式

- param {Number} seconds 秒数
- param {String} [formatVal] 格式化模板，默认是 'HH:mm:ss'
- return {String} 时间

### 例子🌰

```js
Utils.formatDate.formatSeconds('86399'); // 23:59:59
Utils.formatDate.formatSeconds('86399', 'mm:ss'); // 59:59
```

注：这个方法是从 "1970-01-01 00:00:00" 开始计算的，所以年月日的值没有意义

### Utils.formatDate.getDayZeroTm

这个方法可以获取指定某一天零点时的时间戳

- param {Number} dateStr 秒数
- param {String} [unit] 单位，可选值["s":秒|"ms":"毫秒"|"":"dayjs对象"]
- return {Number|Object} 时间戳或者 dayjs 对象

### 例子🌰

```js
Utils.formatDate.getDayZeroTm('2019-01-01 08:00:00', 's'); // 1546272000
Utils.formatDate.getDayZeroTm('2019-01-01 08:00:00', 'ms'); // 1546272000000
Utils.formatDate.getDayZeroTm('2019-01-01 08:00:00'); // 同 dayjs(1546272000000) 返回的对象
```

### Utils.formatDate.dayjs

这个方法用来获取一个 dayjs 对象

- param {String|Date} dateStr 可以解析传入的一个标准的[ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)时间字符串，或者是一个 Date 对象
- return {Object} dayjs 对象

### 例子🌰

```js
Utils.formatDate.dayjs('2019-01-01 08:00:00'); // 同 dayjs('2019-01-01 08:00:00') 返回的对象
```

注：这个方法会返回一个 dayjs 对象，也就是说返回的对象也拥有 dayjs 中所有的方法

---

<!-- demo
# 文档
这是一个xxx库，有xxx功能

## api模版
函数简单介绍

函数详细介绍

函数参数和返回值（要遵守下面的例子的规则）

- param {string} name1 name1描述
- param {number} [name2] name2描述 ([]代表可选参数)
- param {string|number} name3 name3描述 (| 代表多种类型)
- param { * } name3 name3描述 (*代表任意类型)
- param {boolean} obj.sex 复合参数定义
- return {string} 返回值描述

举个例子（要包含代码用例）

```js
// 代码
```

特殊说明，比如特殊情况下会报错等
 -->
