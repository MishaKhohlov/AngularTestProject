const gulp = require('gulp'),
  browserSync = require('browser-sync').create(),
  stylus = require('gulp-stylus'),
  named = require('vinyl-named'),
  ignoreErrors = require('gulp-ignore-errors'),
  concat = require('gulp-concat'),
  sourcemaps = require('gulp-sourcemaps'),
  webpack = require('webpack-stream'),
  reload = browserSync.reload;

gulp.task('js', function () {
  gulp.src('build/app/app.js')
    .pipe(named())
    .pipe(webpack(require('./webpack.config.js'), null, function (err, stats) {}))
    .pipe(ignoreErrors())
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({stream: true}))
});

gulp.task('html', function () {
  gulp.src('build/index.html')
    .pipe(gulp.dest('dist/'))
    .pipe(reload({stream: true}));
});

gulp.task('styl', function () {
  gulp.src("build/app/app.styl")
    .pipe(sourcemaps.init())
    .pipe(stylus({
      // compress: true
    }))
    .pipe(gulp.dest("dist/css"))
    .pipe(ignoreErrors())
    .pipe(sourcemaps.write('.'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./dist/"
    },
    open: false
  });
});

gulp.task('watch', function () {
  gulp.watch('build/app/index.html', ['html']);
  gulp.watch(['build/app/**/*.**'], ['js']);
  gulp.watch('build/app/**/*.styl', ['styl']);
});

gulp.task('default', [
  'html',
  'js',
  'styl',
  'browser-sync',
  'watch'
]);
