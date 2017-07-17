var gulp = require("gulp");
var browserSync = require('browser-sync').create();
var babel = require("gulp-babel");

gulp.task("default", function () {
  return gulp.src("src/app.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});
