//const { series } = require('gulp') usando o destrutuing
//const series = gulp.series 
const gulp = require('gulp')
const { series, parallel } = require('gulp')

const antes1 = cb => {
    console.log('Tarefa Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2!')
    return cb()
}

function copiar(cb) {
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    //nesse código o arquivo pode ter varias tranformações antes de fazer antes fazer a junção dos arquivos em uma determinada pasta
    gulp.src('pastaA/**/*.txt')
    // .pipe(ImagePelaMetade())
    // .pipe(ImagemEMPretoEBranco)
    // .pipe(TranformacaoA())
    // .pipe(TranformacaoB())
    // .pipe(TranformacaoC())
    .pipe(gulp.dest('pastaB'))
    return cb()
}

const fim = cb => {
    console.log('Tarefa Fim!')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2), //Execusão em ordem pararelo
    copiar,
    fim
    )
