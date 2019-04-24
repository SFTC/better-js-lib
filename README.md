# [better-js-lib](https://github.com/SFTC/better-js-lib)

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/SFTC/better-js-lib/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/SFTC/better-js-lib.svg?branch=feature-1.0.0)](https://travis-ci.org/SFTC/better-js-lib)
[![Coverage Status](https://coveralls.io/repos/github/SFTC/better-js-lib/badge.svg?branch=feature-1.0.0)](https://coveralls.io/github/SFTC/better-js-lib?branch=feature-1.0.0)

更好用的 `JS|TS` 业务函数库

## :star: 特性

- 支持ES6+或TypeScript编写源码，编译生成生产代码
- 集成 babel-runtime (默认关闭)
- 第三方依赖自动注入（自动剔除第三方依赖无用代码tree shaking）
- 多环境支持（支持浏览器原生，支持AMD，CMD，支持Webpack，Rollup，fis等，支持Node）
- 集成代码风格校验(eslint|tslint)
- 集成单元测试环境（mocha）

## :pill: 兼容性

单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | Android   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 29+ | 55+  | 9+   | 50+  | 9+   | 4+   | 4+ |

**注意：编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](./demo/demo-global.html)中的例子**

## :open_file_folder: 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
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

如果你是node环境

```js
var base = require('better-js-lib');
```

如果你是webpack等环境

```js
import base from 'better-js-lib';
```

如果你是requirejs环境

```js
requirejs(['node_modules/better-js-lib/dist/index.aio.js'], function (base) {
    // xxx
})
```

如果你是浏览器环境

```html
<script src="node_modules/better-js-lib/dist/index.aio.js"></script>
```

## :bookmark_tabs: 文档
[API](./doc/api.md)

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

修改 package.json 中的版本号，修改 README.md 中的版本号，修改 CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

## :gear: 更新日志
[CHANGELOG.md](./CHANGELOG.md)

## :airplane: 计划列表
[TODO.md](./TODO.md)

## :bulb: 谁在使用