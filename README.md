# [better-js-lib](https://github.com/SFTC/better-js-lib)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/yanhaijing/jslib-base)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/SFTC/better-js-lib/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/SFTC/better-js-lib.svg?branch=master)](https://travis-ci.org/SFTC/better-js-lib)
[![Coveralls](https://img.shields.io/coveralls/SFTC/better-js-lib.svg)](https://coveralls.io/github/SFTC/better-js-lib)
[![npm](http://img.shields.io/npm/v/better-js-lib.svg?style=flat-square)](https://www.npmjs.com/package/better-js-lib)
[![NPM downloads](http://img.shields.io/npm/dm/better-js-lib.svg?style=flat-square)](http://www.npmtrends.com/better-js-lib)

最好用的 `TS` 函数库

[Docs](./doc/api.md)

## :star: 特性

- 使用 typescript 编写，提供更好的代码提示和类型检查
- tree-shaking 支持
- 持续更新，欢迎 issue & RP ~

## :pill: 兼容性
单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 10+ |

**注意：编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](./demo/demo-global.html)中的例子**

## :open_file_folder: 目录介绍

```
.
├── demo 使用demo
├── lib 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

## :rocket: 使用者指南

通过npm下载安装代码

```bash
$ npm install --save better-js-lib
```

```js
import utils from 'better-js-lib';
// 按需引入函数
import { is } from 'better-js-lib';
```

## :bookmark_tabs: [文档](./doc/api.md)

## :kissing_heart: 贡献者指南
首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试:

```bash
$ npm test
```

> 注意：浏览器环境需要手动测试，位于`test/browser`

修改 package.json 中的版本号，修改 CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

## 贡献者列表

[contributors](https://github.com/SFTC/better-js-lib/graphs/contributors)

## :gear: 更新日志
[CHANGELOG.md](./CHANGELOG.md)

## :airplane: 计划列表
[TODO.md](./TODO.md)
