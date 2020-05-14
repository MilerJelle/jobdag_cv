var gulp = require("gulp");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var cssnano = require("cssnano");
var browserSync = require("browser-sync").create();
var paths = { css: {
src: "./scss/*.scss",
dest: "./css/" }
};
function style() {
    return (
gulp
.src(paths.css.src)
.pipe(sass())
.on("error", sass.logError) .pipe(postcss([autoprefixer(), cssnano()])) .pipe(gulp.dest(paths.css.dest)) .pipe(browserSync.stream())
); }
function watch() { browserSync.init({
server: { baseDir: "./"
} });
gulp.watch(paths.css.src, style);
gulp.watch("*.html", reload); }
function reload() { browserSync.reload(); done();
}
exports.default = watch;