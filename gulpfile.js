var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css');
    gulpIncludeTemplate = require("gulp-include-template");

gulp.task('build', ['template', 'inline-css'], function() {
    return gulp.src('./.tmp/*.html')
        .pipe(gulp.dest('./output'));
});

gulp.task("template", ["copy-html"], function() {
    return gulp.src("./.tmp/*.html")
        .pipe(gulpIncludeTemplate())
        .pipe(gulp.dest("./.tmp"));
});

gulp.task("inline-css", ["copy-css", "template"], function() {
    return gulp.src("./.tmp/*.html")
        .pipe(inlineCss())
        .pipe(gulp.dest("./.tmp"));
});

gulp.task("copy-css", function() {
    return gulp.src("*css/**/*")
        .pipe(gulp.dest("./.tmp"));
});

gulp.task("copy-html", function() {
    return gulp.src("./mail-templates/*.html")
        .pipe(gulp.dest("./.tmp"));
});
