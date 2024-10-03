let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!false)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN) //not a number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('para finalizar...')
console.log('' || null || 0 || 'epa' || 123)

let nome = ''
console.log(nome || 'Desconhecido') //caso nome náo esteja valido || utilize esta informacao