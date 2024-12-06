/*
// ATRIBUIÇÃO POR REFERÊNCIA
// Qualquer alteração em um objeto que é referenciado por duas variáveis, altera o objeto em ambas as variáveis

const a = {name: 'Teste'} // a recebe o endereço de memória do objeto
console.log(a)

const b = a // b recebe o mesmo endereço de memória de a

b.name = 'Opa' // altera o objeto que a e b apontam

console.log('a', a) // a e b apontam para o mesmo objeto, então a.name também é alterado

a = 3 // a nao pode receber um novo valor, pois a é uma constante
*/

/*
// ATRIBUIÇÃO POR VALOR
// Quando se trabalha com tipos primitivos, a atribuição é feita por valor, ou seja, a variável recebe uma cópia do valor
let c = 3
let d = c
d++
console.log('c', c)
console.log('d', d)
*/

/*
let valor // variavel nao iniciada
console.log(valor) // undefined. Pq ela ainda nao existe ja que nao foi inicializada
console.log(valor2) // erro. Pq a variavel nao foi declarada

valor = null // ausência de valor
console.log(valor) // null
//console.log(valor.toString()) // erro. Pq nao se pode acessar uma propriedade de uma variavel que é null
*/


const produto = {}
console.log(produto.preco) // undefined. Pq preco nao foi definido
//console.log(produto.preco.a) // erro. Pq nao se pode acessar uma propriedade de algo que é undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evitar atribuir undefined  // nao é uma boa prática
console.log(!!produto.preco) // false
//delete produto.preco // deleta a propriedade preco do objeto
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco) // false
console.log(produto) // { preco: null }