var gulp = require('gulp'),
    // less = require('gulp-less'),
    livereload = require('gulp-livereload');
 
gulp.task('meituan', function() {
  gulp.src(['index.html','/js/*.js','css/*.css'])
    // .pipe(less())
    // .pipe(gulp.dest('css'))
    .pipe(livereload());
});
 
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['index.html','/js/*.js','css/*.css'], ['meituan']);
});