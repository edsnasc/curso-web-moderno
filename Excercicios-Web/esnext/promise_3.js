const { promises } = require("fs")
const { resolve } = require("path")

function gerarNumeroEntre(min, max) {
    if(min > max) [max, min] =[min, max]
    return new Promise(resolve => {
        const fator = max - min +1
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumeroEntre(1, 8000)
.then(num => num * 10)
.then(numX10 => `O número gerado foi ${numX10}`)
.then(console.log)