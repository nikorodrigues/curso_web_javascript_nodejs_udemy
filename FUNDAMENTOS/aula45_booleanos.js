let isAtivo = false
console.log(isAtivo)

isAtivo = true //forma padrao de usar booleanos
console.log(isAtivo)

// em js podemos usar o 1 para representar true e o 0 para representar false
isAtivo = 1
console.log(!!isAtivo) //!! converte algo que nao e VF(number) em VF

console.log('os verdadeiros...')
console.log(!!3, `3`)
console.log(!!-1, `-1`)
console.log(' ', `string vazia`)
console.log(!!'texto', `texto é true`)
console.log(!![], `[]`)
console.log(!!{}, `{}`)
console.log(!!Infinity, `Infinity`)
console.log(!!(isAtivo = true), `isAtivo = true`)

console.log('os falsos...')
console.log(!!0, '0 resolve pra falso')
console.log(!!'', `string vazia resolve pra falso, se tiver qlquer coisa na string, resolve pra verdadeiro mesmo espaco em branco`)
console.log(!!null, `null resolve pra falso`)
console.log(!!NaN, `NaN resolve pra falso`)
console.log(!!undefined, `undefined resolve pra falso`)
console.log(!!(isAtivo = false), `se o lado direito da atribuicao for falso, a atribuicao toda se torna falsa, ele avalia o que foi atribuido para a variável, nao se deu certo ou nao`)

console.log(`pra finalizar... OU`)
console.log(!!('' || null || 0 || ' '), `O resultado desta operacao é verdadeiro, porque ao menos um deles é verdadeiro no caso ' '`)

//exemplo prático

let nome = ''
console.log(nome || 'Desconhecido ', 'o nome deu false, entao retorna o segundo valor da expressao ||OU')
let nome2 = 'Lucas'
console.log(nome2 || 'Desconhecido ', 'o nome tem valor entao deu verdadeiro e imprime o nome')
