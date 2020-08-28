var typescript = require('@rollup/plugin-typescript');
var sourceMaps = require('rollup-plugin-sourcemaps');
// var babel = require('rollup-plugin-babel');
var json = require('rollup-plugin-json');

var pkg = require('../package.json');

var version = pkg.version;

var banner = 
`/*!
 * ${pkg.name} ${version} (https://github.com/bluescurry/better-js-lib)
 * API https://github.com/bluescurry/better-js-lib/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} bluescurry. All Rights Reserved
 * Licensed under MIT (https://github.com/bluescurry/better-js-lib/blob/master/LICENSE)
 */
`;

function getCompiler() {
  return [
    typescript({
      exclude: "node_modules/**",
      typescript: require('typescript'),
    }),
    /* babel({
      exclude: 'node_modules/**',
      extensions: ['.js', '.ts'],
    }), */
    json({
      // for tree-shaking, properties will be declared as
      // variables, using either `var` or `const`
      preferConst: true, // Default: false
    }),
    sourceMaps(),
  ];
}

exports.name = 'better-js-lib';
exports.banner = banner;
exports.getCompiler = getCompiler;
