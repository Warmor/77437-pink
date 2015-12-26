"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minifyCss = require("gulp-minify-css");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var pngquant = require("imagemin-pngquant");
var uglify = require("gulp-uglify");

gulp.task("style", function() {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: "last 2 versions"})
    ]))
    .pipe(gulp.dest("source/css"))
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("source/css"));
});

gulp.task("start", ["style" , "js"], function() {
  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/js/main.js", ["js"]);
});


gulp.task("html", function() {
  gulp.src("source/*.html")
    .pipe(gulp.dest("build"));
});

gulp.task("css", function() {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: "last 2 versions"})
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minifyCss())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task("img", function() {
  return gulp.src("source/img/*")
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true,
      multipass: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest("build/img"));
});

gulp.task("js", function() {
  return gulp.src("source/js/main.js")
    .pipe(gulp.dest("build/js/"))
    .pipe(uglify())
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest("build/js/"))
    .pipe(gulp.dest("source/js/"));
});




gulp.task("build", ["css", "html", "img", "js"])

// Оставьте эту строку в самом конце файла
require("./.gosha");
