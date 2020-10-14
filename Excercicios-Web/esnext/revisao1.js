// let e const

{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'Ipad'
console.log(`${produto} é caro!!`)

// Destructuring

const [e, l, ...tras] = "Edson"
console.log(e, l, tras)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const { idade: i, nome } = { nome: 'Tatiane', idade: 45 }
console.log(i, nome)