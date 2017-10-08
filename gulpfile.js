/**
 * Created by Enter on 2017-10-08.
 */
var gulp = require('gulp');
var minify = require('gulp-minify-css');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('css', function () {
    gulp.src('css/*.css')
        .pipe(concat('main.css'))
        .pipe(rename({'suffix': '.min'}))
        .pipe(minify())
        .pipe(gulp.dest('css/'))
});