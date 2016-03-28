var gulp = require('gulp');
var shell = require('gulp-shell');
var clean = require('gulp-clean');

gulp.task('clean-bootstrap', function() {
    return gulp.src('bootstrap', {read: false})
               .pipe(clean());
});

gulp.task('compile-bootstrap', ['clean-bootstrap'], function() {
    shell.task(['cd "bootstrap-src";grunt dist'])
});

gulp.task('bootstrap', ['compile-bootstrap'], function() {
    return gulp.src('bootstrap-src/dist/**/*').pipe(gulp.dest('bootstrap'));
});

gulp.task('all', ['bootstrap'])
