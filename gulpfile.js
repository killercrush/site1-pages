var gulp = require('gulp');
var sass = require('gulp-sass');
var pug = require('gulp-pug');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var spritesmith = require('gulp.spritesmith');
var imagemin = require('gulp-imagemin');
var autoprefixer = require('gulp-autoprefixer');

// var info = autoprefixer({ browsers: ['> 2% in RU'] }).info();
// console.log(info);

gulp.task('sass', function () {
  return gulp.src('./src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minify({compatibility: 'ie8', mediaMerging: true}))
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('./dist/css/'));
});


 
gulp.task('pug', function buildHTML() {
  return gulp.src('./src/pug/*.pug')
  .pipe( pug( {pretty: false} ) )
  .pipe(gulp.dest('./dist'));
});

gulp.task('owl', function () {
  return gulp.src(['./src/jslib/jquery.js', 
  	'./src/jslib/owl.carousel.js',
    './src/jslib/jquery.modal.js', 
  	'./src/js/carousel-init.js'])
	.pipe(concat('script.min.js'))
	// .pipe(uglify())
	.pipe(gulp.dest('./dist/js'));	
});
// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });

gulp.task('sprites', function () {
  var spriteData = gulp.src('./src/images/icons/*.png').pipe(spritesmith({
    imgName: 'sprites.png',
    cssName: '_sprites.scss',
    imgPath: '../images/sprites.png' 
  }));

    spriteData.img.pipe(gulp.dest('./src/images/')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('./src/scss/')); // путь, куда сохраняем стили
});

gulp.task('images', function () {
	gulp.src(['./src/images/*.png', './src/images/*.jpg'])
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
});

gulp.task('prefix', () =>
    gulp.src('./dist/css/style.min.css')
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./dist/css/'))
);