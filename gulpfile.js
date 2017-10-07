const gulp = require('gulp');
const gulpif = require('gulp-if');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const del = require('del');
const exec = require('child_process').exec;

gulp.task('clean', () => {
  return del(['./public/**/*'])
});

gulp.task('static', () => {
  return gulp.src(['./index.html','./LICENSE','./manifest.json'])
    .pipe(gulp.dest('./public'));
})

gulp.task('images', () => {
  return gulp.src(['./images/**/*'])
    .pipe(gulp.dest('./public/images'));
})

gulp.task('audio', () => {
  return gulp.src(['./audio/*'])
    .pipe(gulp.dest('./public/audio'));
})

gulp.task('compile', () => {
  return gulp.src(['./*.js', '!./gulpfile.js', '!./workbox-cli-config.js'])
    .pipe(gulpif(/\.js$/, babel()))
    // .pipe(gulpif(/\.js$/, uglify()))
    .pipe(rename({
      suffix: "-compiled"
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('compile-alphabet-home', () => {
  return gulp.src(['./alphabet-home/alphabet-home.js'])
    .pipe(babel())
    // .pipe(uglify())
    .pipe(rename({
      suffix: "-compiled"
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('compile-daube-header-fixed', () => {
  return gulp.src(['./node_modules/daube-header-fixed/daube-header-fixed-compiled.js'])
    .pipe(babel())
    // .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('compile-daube-main-container', () => {
  return gulp.src(['./node_modules/daube-main-container/daube-main-container-compiled.js'])
    .pipe(babel())
    // .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('compile-daube-card', () => {
  return gulp.src(['./node_modules/daube-card/daube-card-compiled.js'])
    .pipe(babel())
    // .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('compile-daube-modal', () => {
  return gulp.src(['./node_modules/daube-modal/daube-modal-compiled.js'])
    .pipe(babel())
    // .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('move-es5', () => {
  return gulp.src(['./bower_components/webcomponentsjs/custom-elements-es5-adapter.js'])
    .pipe(gulp.dest('./public'));
});

gulp.task('move-loader', () => {
  return gulp.src(['./bower_components/webcomponentsjs/webcomponents-loader.js'])
    .pipe(gulp.dest('./public'));
});

gulp.task('createServiceWorker', (cb) => {
  exec('workbox generate:sw', function(err) {
    if (err) return cb(err);
    cb();
  })
});

gulp.task('default',
  gulp.series('clean',
              'static',
              'images',
              'audio',
              'compile',
              'compile-alphabet-home',
              'compile-daube-header-fixed',
              'compile-daube-main-container',
              'compile-daube-card',
              'compile-daube-modal',
              'move-es5',
              'move-loader',
              'createServiceWorker')
);