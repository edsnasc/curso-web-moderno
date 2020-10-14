const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback

const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter ((notas) => notas < 7)
console.log(notasBaixas3)

const notasMenorQue7 = notas => notas < 7
const notasBaixas4 = notas.filter(notasMenorQue7)
console.log(notasBaixas4)