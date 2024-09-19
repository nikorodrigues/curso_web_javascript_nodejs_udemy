const escola = "Cod3r"

console.log(escola.charAt(4)) // Retorna o caractere no índice 4
console.log(escola.charAt(5)) // Retorna o caractere no índice 5
console.log(escola.charCodeAt(3)) // Retorna o valor do caractere no índice 3 na tabela ASCII
console.log(escola.indexOf('3')) // Retorna o índice do caractere '3'

console.log(escola.substring(1)) // Retorna a string a partir do índice 1
console.log(escola.substring(0, 3)) // Retorna a string do índice 0(inicial) até o índice 3(final)

console.log('Escola'.concat(escola).concat("!")) // Concatenação de strings
console.log('Escola' + escola + "!") // Concatenação de strings
console.log(`escola ${escola}!`) // Concatenação de strings
console.log(escola.replace(3, 'e')) // Substitui o 3 por e
console.log(escola.replace(/\d/g, 'e')) // Substitui todos os dígitos por e
console.log(escola.replace(/\w/g, 'e')) // Substitui todas as letras por e

console.log('Ana,Maria,Pedro'.split(',')) // Separa a string em um array, utilizando a vírgula como separador
