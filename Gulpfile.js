var gulp = require('gulp')
var shell = require('gulp-shell')

gulp.task('compile-bootstrap', function() {
    shell.task(['cd "bootstrap";grunt dist'])
});

gulp.task('bootstrap', ['compile-bootstrap'], function() {
    var srcToDest = {'bootstrap/dist/css/*': 'css',
                     'bootstrap/dist/fonts/*': 'fonts',
                     'bootstrap/dist/js/*': 'js'};
    for (var src in srcToDest) {
        gulp.src(src).pipe(gulp.dest(srcToDest[src]));
    }
})

gulp.task('all', ['bootstrap'])
