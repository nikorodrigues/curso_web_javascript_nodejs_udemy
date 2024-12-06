// Armazenando uma funcao em uma variavel
const imprimirSoma = function(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // 5

// Armaezando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3)) // 5

// Retorno implicito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3)) // -1

const imprimir2 = a => console.log(a)
console.log('=> de 1 parametro sem (). Legal!!!') // Legal!!!