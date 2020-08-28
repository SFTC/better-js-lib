// rollup.config.js
// umd
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
import { terser } from "rollup-plugin-terser";

var common = require('./rollup.js');

var prod = process.env.NODE_ENV === 'production';

module.exports = {
  input: 'src/index.ts',
  output: {
    file: prod ? 'dist/index.aio.min.js' : 'dist/index.aio.js',
    format: 'umd',
    // When export and export default are not used at the same time, set legacy to true.
    // legacy: true,
    name: common.name,
    banner: common.banner,
    sourcemap: true
  },
  plugins: [
    nodeResolve({
      main: true,
      extensions: ['.ts', '.js']
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    ...common.getCompiler(),
    (prod && terser())
  ]
};
