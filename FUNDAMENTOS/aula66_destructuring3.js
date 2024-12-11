// usando operador destructuring {min = 0, max = 1000} para definir valores padrão para min e max
function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// {max: 50, min: 40} é um objeto que será passado para a função rand
//console.log(rand({max: 50, min: 40})) // 40 - 50

const obj = { max: 50, min: 40 }
console.log(rand(obj)) // 40 - 50
console.log(rand({min: 955})) // 955 - 1000
console.log(rand({})) // 0 - 1000
//console.log(rand()) // TypeError: Cannot destructure property 'min' of 'undefined' as it is undefined