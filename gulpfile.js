'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const plumber = require('gulp-plumber');

const DIR = {
  assets: 'assets',
  source: 'src'
};

let errorHandler = (error) => {
  console.error(error.message);
  this.emit('end');
};

const plumberOption = {
  errorHandler: errorHandler
};

gulp.task('js', () => {
  gulp.src([
    'src/lib/cssbeautify.js',
    'src/lib/specificity.js',
    'src/lib/tablesorter.js'
  ])
  .pipe(plumber(plumberOption))
  .pipe(concat('css-spec'))
});


gulp.task('watch', () => {
  let watcher = {
    js: gulp.watch(DIR.UNCOM, ['js'])
  };

  let notiify = (event) => {
    gutil.log('File', gutil.colors.yellow(event.path), 'was', util.colors.magenta(event.type));
  };

  for (let key in watcher) {
    watcher[key].on('change', notiify);
  }
});