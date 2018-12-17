let gulp = require('gulp')
let packager = require('./package.json')
let replace = require('gulp-replace')
let babel = require('gulp-babel')
/*
babel src --out-dir lib
 */
gulp.task('compile', ['replaceVersionDist'], function(){
  return gulp.src('./src/**/*.js')
    .pipe(replace('_VERSION_', packager.version))
    .pipe(babel())
    .pipe(gulp.dest('./lib'));
});

gulp.task('replaceVersionDist', function(){
  return gulp.src('./dist/**/*.js')
    .pipe(replace('_VERSION_', packager.version))
    .pipe(gulp.dest('./dist'));
});