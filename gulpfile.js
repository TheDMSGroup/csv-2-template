'use strict';

var gulp = require('gulp-task-master')({
  dirname: require('path').join('gulp', 'tasks')
});

gulp.task('default', ['watch']);

gulp.task('build', [
  'static',
  'styles',
  'scripts',
  'fonts'
]);

gulp.task('watch', [
  'static.watch',
  'styles.watch',
  'scripts.watch',
  'fonts'
]);
