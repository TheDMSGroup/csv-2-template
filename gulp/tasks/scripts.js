'use strict';

var path   = require('path');
var gulp   = require('gulp');
var $      = require('../plugins');
var lib    = require('../lib');
var config = require('../config');

var scripts = path.join(config.src, '**', '*.js');

module.exports = function () {
  return gulp.src(lib.ext('js').files.concat(scripts))
    .pipe($.sourcemaps.init())
      .pipe($.ngAnnotate())
      .pipe($.concat('app.min.js'))
      .pipe($.uglify({
        output: { 'ascii_only': true }
      }))
    .pipe($.sourcemaps.write('./maps'))
    .pipe(gulp.dest(config.dest));
};

module.exports.watch = scripts;
