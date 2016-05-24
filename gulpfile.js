var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});


 
gulp.task('pug', function buildHTML() {
  return gulp.src('./src/**/*.pug')
  .pipe(pug({
    // Your options in here. 
  }))
  .pipe(gulp.dest('dist'));
});
 
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });
