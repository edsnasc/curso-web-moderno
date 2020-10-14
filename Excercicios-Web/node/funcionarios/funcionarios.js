const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const procurarLocal = local => local.pais === 'China'
const procurarFuncionario = funcionario => funcionario.genero === 'F'
const salarioMenor = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)


    // mulher chinesa com menor salário?
    const func = funcionarios
        .filter(procurarLocal)
        .filter(procurarFuncionario)
        .reduce(salarioMenor)

    console.log(func)
})




