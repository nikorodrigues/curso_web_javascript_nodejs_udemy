//for simples com let

for (let i = 0; i < 10; i++) { //
    console.log(i)
}

console.log('i =', i)

// Gera um Uncaught ReferenceError ReferenceError: i is not defined
// O erro ocorre porque let tem escopo de bloco, logo let i não é visivel fora do bloco de código.