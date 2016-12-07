var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    cleanCSS = require('gulp-clean-css'),
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect');


// server connect
gulp.task('connect', function() {
    connect.server({
        root: '',
        livereload: true
    });
});

//css
gulp.task('css', function () {
    gulp.src('style/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('style/css'));
    return gulp.src('style/css/style.css')
        .pipe(cleanCSS(''))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('style/css'))
        .pipe(livereload());
});


// watch
gulp.task("watch", function() {
    livereload.listen();
    gulp.watch("style/*.scss", ["css"]);
});

// default
gulp.task('default', ['connect', 'watch']);
