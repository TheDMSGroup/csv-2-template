'use strict';

var path   = require('path');
var gulp   = require('gulp');
var $      = require('../plugins');
var lib    = require('../lib');
var config = require('../config');

var styles = path.join(config.src, '**', '*.css');

module.exports = function () {
  return gulp.src(lib.ext('css').files.concat(styles))
    .pipe($.sourcemaps.init())
      .pipe($.concat('app.min.css'))
      .pipe($.pleeease())
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest(config.dest));
};

module.exports.watch = styles;

