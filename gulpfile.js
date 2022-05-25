const gulp = require('gulp');
const {
	src, dest, watch, parallel, task, series,
} = require('gulp');

const webp = require('imagemin-webp');
const imagemin = require('gulp-imagemin');
const extReplace = require('gulp-ext-replace');
const del = require('del');

const initWebP = function (done) {
    console.log('run');
    return gulp.src('public/images/*')
        .pipe(imagemin([
            webp({quality: 50})
        ]))
        .pipe(extReplace('.webp'))
        .pipe(gulp.dest('public/compressed_images/'))
};
const clean = () => del(['comimages']);

task(clean);
task(initWebP);
task('default', series('clean', 'initWebP'));

