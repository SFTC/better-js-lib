import path from 'path';
import fs from 'fs';
import { RollupOptions } from 'rollup';
import rollupTypescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { eslint } from 'rollup-plugin-eslint';
import json from 'rollup-plugin-json';
import sourceMaps from 'rollup-plugin-sourcemaps';
import multiInput from 'rollup-plugin-multi-input';
import { DEFAULT_EXTENSIONS } from '@babel/core';

import pkg from './package.json';

/* const paths = {
  input: path.join(__dirname, '/src/is.ts'),
  output: path.join(__dirname, '/lib'),
}; */

/** 读取 src 下的所有函数 */
const srcDir = fs.readdirSync(path.join(__dirname, '/src')).map((dir): string => `src/${dir}`);


// rollup 配置项
const rollupConfig: RollupOptions = {
  input: srcDir,
  output: [
    // 输出 es 规范的代码
    {
      format: 'esm',
      dir: 'lib',
      name: pkg.name,
    },
  ],
  // 指出应将哪些模块视为外部模块，如 Peer dependencies 中的依赖
  external: ['dayjs', 'emoji-regex', 'lodash.clonedeep', 'number-precision'],
  // plugins 需要注意引用顺序
  plugins: [
    // 验证导入的文件
    eslint({
      throwOnError: true, // lint 结果有错误将会抛出异常
      throwOnWarning: true,
      include: ['src/**/*.ts'],
      exclude: ['node_modules/**', 'lib/**', '*.js'],
    }),

    // 使得 rollup 支持 commonjs 规范，识别 commonjs 规范的依赖
    commonjs(),

    // 配合 commnjs 解析第三方模块
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules',
      },
    }),
    rollupTypescript(),
    babel({
      runtimeHelpers: true,
      // 只转换源代码，不运行外部依赖
      exclude: 'node_modules/**',
      // babel 默认不支持 ts 需要手动添加
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
      ],
    }),
    json({
      preferConst: true,
    }),
    multiInput({
      relative: 'src/'
    }),
    sourceMaps(),
  ],
};

export default rollupConfig;
