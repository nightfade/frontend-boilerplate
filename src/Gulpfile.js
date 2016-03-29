var gulp = require('gulp');
var shell = require('gulp-shell');
var clean = require('gulp-clean');

var bootstrapSrc = 'bootstrap'
var bootstrapDest = '../www/bootstrap'

gulp.task('clean-bootstrap', function() {
    return gulp.src(bootstrapDest, {read: false})
               .pipe(clean({force: true}));
});

gulp.task('compile-bootstrap', ['clean-bootstrap'], function() {
    shell.task([`cd "${bootstrapSrc}";grunt dist`])
});

gulp.task('bootstrap', ['compile-bootstrap'], function() {
    return gulp.src(`${bootstrapSrc}/dist/**/*`).pipe(gulp.dest(bootstrapDest));
});

gulp.task('all', ['bootstrap'])
