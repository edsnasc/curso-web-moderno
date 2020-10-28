const { series, prependListener } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js')
    .pipe(babel({
        comments: false, //retira os comentários
        presets: ["env"] // ele pega tudo o que a de mais moderno na linguagem e transforma em uma versão mais antiga 
    }))
    .pipe(uglify())// ele minifica o arquivo 
    .on('error', err => console.log(err))// se acontecer algum erro até aqui ele envia uma msg de erro
    .pipe(concat('codigo.min.js'))//ele concatena os arquivos em um só
    .pipe(gulp.dest('build'))//ele cria uma pasta de destino para os arquios tratados
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)