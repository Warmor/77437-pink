"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");

gulp.task("style", function() {
  return gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: "last 2 versions"})
    ]))
    .pipe(gulp.dest("css"));
});

gulp.task("build", function() {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: "last 3 versions"})
    ]))
    .pipe(gulp.dest("build/css"));
  return gulp.src("source/**/*.html").pipe(gulp.dest("build"));
});

gulp.task("start", ["style"], function() {
  gulp.watch("less/**/*.less", ["style"]);
});



// Оставьте эту строку в самом конце файла
require("./.gosha");
