// Hoisting significa Içamento, ou seja, a declaração de variáveis e funções são içadas para o topo do código,
// ou seja, o interpretador do JS lê primeiro as declarações e depois o código.

console.log('a =', a)
var a = 2
console.log('a =', a)
// Para Var - O içamento ocorre também dentro de uma função

console.log('b =', b)
let b = 2
console.log('b =', b) // ReferenceError: Cannot access 'b' before initialization
// Para Let - O içamento não ocorre dentro de uma função