const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')// para trabalhar com typescript
const tsProject = ts.createProject('tsconfig.json')// ele pega o arquivo de configuração do typescript

function transformacaoTS() {
    return tsProject.src()
    .pipe(tsProject())//ele pega o que tiver na configuração do typescript e executa
    .pipe(gulp.dest('build'))//ele cria a pasta build e armazena os arquivos
}

exports.default = series(transformacaoTS)