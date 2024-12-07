//for simples com var

for (let i = 0; i < 10; i++) { //
    console.log(i)
}

console.log('i =', i)
// O valor de i é 10, pois foi o valor que fez com que ele saisse do laço de repetição.
// quando i = 10, a expressão i < 10 é falsa, logo o laço de repetição é encerrado.

/*
let i = 0
console.log('i =', i) Uncaught ReferenceError ReferenceError: i is not defined
//este erro ocorre porque let nao tem escopo de bloco, logo i não é visivel fora do bloco de código.
*/