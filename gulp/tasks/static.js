'use strict';

var path   = require('path');
var gulp   = require('gulp');
var config = require('../config');

var files     = [
  path.join(config.src, '**', '*.html'),
  path.join(config.src, '**', '*.json')
];
var filesDest = config.dest;

module.exports = function () {
  return gulp.src(files)
    .pipe(gulp.dest(filesDest));
};

module.exports.watch = files;

