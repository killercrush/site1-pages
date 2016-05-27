var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
gulp.task('sass', function () {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minify({compatibility: 'ie8'}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./dist/css/'));
});


 
gulp.task('pug', function buildHTML() {
  return gulp.src('./src/pug/*.pug')
  .pipe(pug({
    // Your options in here. 
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('owl', function () {
  return gulp.src(['./src/jslib/jquery.js', 
  	'./src/jslib/owl.carousel.js', 
  	'./src/js/carousel-init.js'])
	.pipe(concat('script.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'));	
});
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });
