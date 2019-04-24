var babel = require('rollup-plugin-babel');

var pkg = require('../package.json');

// compatible with js-lib and @yanhaijing/js-lib
// @yanhaijing/js-lib -> js-lib
var name = pkg.name.split('/').pop();
// @yanhaijing/js-lib -> yanhaijing_js-lib
// var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * ${pkg.name} ${version} (https://github.com/yanhaijing/js-lib)
 * API https://github.com/yanhaijing/js-lib/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} yanhaijing. All Rights Reserved
 * Licensed under MIT (https://github.com/yanhaijing/js-lib/blob/master/LICENSE)
 */
`;

function getCompiler() {
  return babel({
    babelrc: false,
    presets: [
      [
        '@babel/preset-env',
        {
          'targets': {
            'browsers': 'last 2 versions, > 1%, ie >= 6, Android >= 4, iOS >= 6, and_uc > 9',
            'node': '0.10'
          },
          'modules': false,
          'loose': false
        }
      ]
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          'helpers': false,
          'regenerator': false
        }
      ]
    ],
    runtimeHelpers: true,
    exclude: 'node_modules/**'
  });
}

exports.name = name;
exports.banner = banner;
exports.getCompiler = getCompiler;
