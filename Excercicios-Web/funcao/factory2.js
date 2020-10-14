function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('caderno', 20.00))
console.log(criarProduto('agenda', 35.99))