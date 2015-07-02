var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('webserver', function() {

    gulp.src('.')
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            open: "http://localhost:8000/examples/"
        }));
});/**
 * Created by s8019188 on 02.07.2015.
 */
