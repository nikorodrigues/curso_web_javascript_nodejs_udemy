var funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

//Chamando a funcao de indice 2 e Invocando a funcao. Usando LET
// o valor de i é 2 para [2]
// o valor de i é 8 para [8]
funcs[2]() // exibe 2
funcs[8]() // exibe 8