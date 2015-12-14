var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

var paths = {
  sass: ['./scss/**/*.scss'],
  appControllers: ['www/js/controllers/**/*.js','www/js/controllers/*/*.js'],
  appServices: ['www/js/services/**/*.js','www/js/services/*/*.js']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});


//Concatenate & Minify App
gulp.task('myrestaurant-controllers', function() {
    return gulp.src(['www/js/controllers/**/*.js', 'www/js/controllers/*/*.js'])
        .pipe(plumber())
        .pipe(concat('appControllers.js'))
        .pipe(ngAnnotate())
        //.pipe(uglify())
        .pipe(rename('appControllers.min.js'))
        .pipe(plumber.stop())
        .pipe(gulp.dest('www/js'))
        .pipe(notify("MyRestaurant controllers compiled!"));
});

//Concatenate & Minify App
gulp.task('myrestaurant-services', function() {
    return gulp.src(['www/js/services/**/*.js', 'www/js/services/*/*.js'])
        .pipe(plumber())
        .pipe(concat('appServices.js'))
        .pipe(ngAnnotate())
        //.pipe(uglify())
        .pipe(rename('appServices.min.js'))
        .pipe(plumber.stop())
        .pipe(gulp.dest('www/js'))
        .pipe(notify("MyRestaurant services compiled!"));
});

//Task that runs with ionic serve
gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.appControllers, ['myrestaurant-controllers']);
  gulp.watch(paths.appServices, ['myrestaurant-services']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
