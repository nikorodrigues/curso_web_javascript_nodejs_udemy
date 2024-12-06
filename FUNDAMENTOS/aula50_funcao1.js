// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3) // 5
imprimirSoma(2) // NaN. Pq b é undefined

//Funcao com retorno
function soma(a, b = 1){
    return a + b
}

console.log(soma(2, 3)) // 5
console.log(soma(2)) // 3