// novo recurso do ES2015
// destructuring é uma forma de extrair elementos de um array ou objeto
// objeto {}
// array []

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// Destructuring Objeto
const { nome, idade } = pessoa
console.log(nome, idade) // Ana 5

//cria variáveis n e i com os valores de nome e idade, para facilitar a leitura
const { nome: n, idade: i } = pessoa
console.log(n, i) // Ana 5

//atributo que nao existe no objeto
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) // undefined true

//extrai logradouro, numero, cep do endereco de pessoa
const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) // Rua ABC 1000 undefined

const { conta: { ag, num } } = pessoa
console.log(ag, num) // TypeError: Cannot destructure property 'ag' of 'pessoa.conta' as it is undefined