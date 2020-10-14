//par nome/valor
const saudacao = 'Opa' // cexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//Objetos são grupos aninhados de pares nome/valor
const Cliente = {
    nome: 'Maria Julia',
    idade: 15,
    peso: 55,
    endereço: {
        logradouro: 'Rua muito legal',
        numero: 123
    }

}

console.log(saudacao)
console.log(exec())
console.log(Cliente)