// cria variavel a que recebe o primeiro elemento do array [10]
const [a] = [10]
console.log(a) // 10

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //n5 é undefined porque esta fora do array. n6 recebe 0 por padrão
console.log(n1, n3, n5, n6) // 10 9 undefined 0

// nao utilizado para arrays na pratica
const [, [, nota]] = [[, 8, 8], [9, 6, 8]] //nota recebe 6
console.log(nota) // 6

// destructuring é uma forma de extrair elementos de um array ou objeto
// {} objeto
// [] array
// const [a] // destructuring array
// = [10] // array com um elemento 10