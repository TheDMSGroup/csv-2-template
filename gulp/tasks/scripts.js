'use strict';

var path   = require('path');
var gulp   = require('gulp');
var $      = require('../plugins');
var lib    = require('../lib');
var config = require('../config');

var scripts     = path.join(config.src, '**', '*.js');
var scriptsDest = path.join(config.dest, 'js');

module.exports = function () {
  return gulp.src(lib.ext('js').files.concat(scripts))
    .pipe($.sourcemaps.init())
      .pipe($.ngAnnotate())
      .pipe($.concat('app.min.js'))
      .pipe($.uglify())
    .pipe($.sourcemaps.write('../maps'))
    .pipe(gulp.dest(scriptsDest));
};

module.exports.watch = scripts;
