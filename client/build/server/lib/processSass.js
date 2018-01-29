'use strict';

var sass = require('node-sass');
var path = require('path');

module.exports = function processSass(data, filename) {
  var result = void 0;

  result = sass.renderSync({
    data: data,
    file: filename
  }).css;

  return result.toString('utf8');
};