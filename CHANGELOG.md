# 变更日志

## 1.0.2 / 2019-07-18

- fixbug：修改 idcard 中 areaCode.min.json 的引入方式

## 0.2.0 / 2019-03-22

- 新增 tree.js 文件

## 0.1.0 / 2019-03-20

- 新增 iscard.js文件

## 2.0.0 / 2019-3-1

- 使用 ts 重构，提供更好的代码提示

## 2.0.9 / 2020-12-3

- 新增 `asyncWorker` 和 `checkXlsxWorker` 方法

## 2.1.0 / 2020-12-23

- fixbug package.json "main" error
- update dayjs to "1.9.7"

## 2.2.0 / 2022-01-20

- 校验座机号时兼容分机号逻辑 [#24](https://github.com/SFTC/better-js-lib/pull/24)

## 2.3.3 / 2022-06-29

- getUrlQuery 方法获取指定参数时，兼容既有`url`参数又有`hash`参数的case

## 2.3.4 / 2022-07-07

- 删除 `asyncWorker` 和 `checkXlsxWorker` 方法以减少包体积
- 优化 `getUrlQuery` 方法的 ts 类型，当获取不到参数时不再返回 `null`，而是返回 `""`

## 2.3.5 / 2023-09-07

- 修复 `getUrlString` 方法传入空对象并设置 `hasPrefix=true` 时返回 `"?"` 的问题，修正为返回 `""`

## 2.3.6 / 2024-08-14

- 优化 `is.fn` 方法的返回类型
