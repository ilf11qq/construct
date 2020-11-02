const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css')
const autoPrefix = require('gulp-autoprefixer')

function style () {
    return gulp.src('css/style.scss').
    pipe(sass())
    .pipe(autoPrefix({
        cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('css'));
}

exports.style = style;
