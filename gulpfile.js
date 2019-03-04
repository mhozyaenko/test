const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

let config = {
    path: {
        scss: './src/scss/**/*.scss',
        html: './src/index.html',
        js: './src/js/**/*.js',
        img: './src/img/**/*.jpg'
    },
    output: {
        cssName: 'bundle.css',
        jsName: 'bundle.js',
        path: './public',
        pathImg: './public/img'
    }
}
gulp.task('html', function () {
    return gulp.src(config.path.html)
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
});
gulp.task('scss', function() {
    return gulp.src(config.path.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat(config.output.cssName))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src(config.path.js)
        .pipe(sourcemaps.init())
        .pipe(concat(config.output.jsName))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.output.path))
        .pipe(browserSync.stream());
})
gulp.task('images', function () {
    return gulp.src(config.path.img)
        .pipe(gulp.dest(config.output.pathImg))
})
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: config.output.path
        }
    });
    gulp.watch(config.path.scss, gulp.parallel('scss'));
    gulp.watch(config.path.js, gulp.parallel('js'));
    gulp.watch(config.path.html, gulp.parallel('html'));
})
gulp.task('default', gulp.parallel('html', 'scss', 'js', 'images', 'serve'));