'use strict';

var gulp = require('gulp');
var server = require('browser-sync').create();
var del = require('del');
var include = require('posthtml-include');
var posthtml = require('gulp-posthtml');


gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(posthtml([ include() ]))
    .pipe(gulp.dest('build'));
});

gulp.task('copy-js', function() {
  return gulp.src('src/js/**', {
    base: 'src'
  })
  .pipe(gulp.dest('build'));
})

gulp.task('refresh', function(done) {
  server.reload();
  done();
});

gulp.task('server', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('src/js/*.js', gulp.series('copy-js', 'refresh'));
  gulp.watch('src/*.html', gulp.series('html', 'refresh'));
});

gulp.task('copy', function() {
  return gulp.src([
    'src/js/**',
    'src/**.png'
  ], {
    base: 'src'
  })
  .pipe(gulp.dest('build'));
});

gulp.task('clear', function() {
  return del('build');
});

gulp.task('build', gulp.series('clear', 'copy', 'html'));
gulp.task('start', gulp.series('build', 'server'));