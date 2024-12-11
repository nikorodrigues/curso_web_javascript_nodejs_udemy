// descrição: Arquivo criado para mostrar a utilização de destructuring em funções
function rand({min = 0, max = 1000}) {
    if (min > max) [min, max] = [max, min] // [min, max] = [max, min](cria novo array com valores desestruturados)
                                            // inverte os valores de min e max
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // 40 - 50 navega entre os valores 40 e 50
console.log(rand([992])) // 0 - 992 navega entre 0 e 992
console.log(rand([, 10])) // 0 - 10 navega entre 0 e 10
console.log(rand([])) // 0 - 1000 navegara entre 0 e 1000
console.log(rand()) // TypeError: Cannot destructure property 'min' of 'undefined' as it is undefined