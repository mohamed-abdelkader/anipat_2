var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    minify = require('gulp-minify'),
    notify = require('gulp-notify'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    zip = require('gulp-zip');


// html task

gulp.task('html', function () {
  return gulp.src('stage/html/*.pug')
      .pipe(pug({pretty: true}))
      //.pipe(concat('index.html'))
      .pipe(notify("html task is done"))
      .pipe(gulp.dest('dist'))
      .pipe(livereload())
});

gulp.task('css', function () {
  return gulp.src(['stage/css/**/*.css', 'stage/css/**/*.scss'])
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle: 'expanded'}))
      .pipe(autoprefixer('last 2 version'))
      .pipe(concat('main.css'))
      .pipe(notify("css task is done"))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('dist/css'))
      .pipe(livereload())
});

///js task

gulp.task('js', function () {
  return gulp.src('stage/js/*.js')
      .pipe(concat('main.js'))
      .pipe(notify('js task is done'))
      .pipe(gulp.dest('dist/js'))
      .pipe(livereload())
});

// compressed task
gulp.task('compressed', function () {
  return gulp.src('dist/**/*.*')
      .pipe(zip('finle-project.zip'))
      .pipe(gulp.dest('.'))
      .pipe(notify('task compressed is done'))
});

gulp.task('watch', function () {
  require('./server.js')
  livereload.listen()
  gulp.watch('stage/html/**/*.pug', ['html'])
  gulp.watch(['stage/css/**/*.css', 'stage/css/**/*.scss'], ['css'])
  gulp.watch('stage/js/*.js', ['js'])
});
