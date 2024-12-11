// par chave/valor
const saudacao = 'Opa' //contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' //contexto léxico 2
    return saudacao
}

//const saudacao = 'Epa!!!!' //contexto léxico 3 (não vai sobrescrever o contexto 1).
//SyntaxError: Identifier 'saudacao' has already been declared


// Objetos sao grupos aninhados de pares chave/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)