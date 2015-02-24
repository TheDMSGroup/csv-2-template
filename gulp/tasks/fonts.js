'use strict';

var path   = require('path');
var gulp   = require('gulp');
var lib    = require('../lib');
var config = require('../config');

var fonts     = lib.match('**/bootstrap/fonts/*').files;
var fontsDest = path.join(config.dest, 'fonts');

module.exports = function () {
  return gulp.src(fonts)
    .pipe(gulp.dest(fontsDest));
};

