const { parallel } = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')//ele seleciona o arquivo sass index onde ja contem importados tds os outros arquivos importados
    .pipe(sass().on('error', sass.logError))//chama o tratamento com arquivos sass
    .pipe(uglifycss({"UglifyComments": true}))//minifica o arquivo em uma linha com todos comentarios
    .pipe(concat('estilo.min.css'))//concatena os arquivos em um só
    .pipe(gulp.dest('build/css'))//cria uma pasata build com uma subpasta css e tranfere o estilo.min.css
}

function copiarHTML(cb) {
    gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
    return cb()
}
exports.default = parallel(transformacaoCSS,copiarHTML)