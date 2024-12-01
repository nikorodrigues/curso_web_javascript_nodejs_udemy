const prod1 = {}

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaco
console.log(`prod1 ${JSON.stringify(prod1)}`) //para exibir um OBJETO no console.log, precisamos transformar o objeto em json usando função JSON.stringfy()

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        obj: {
            blabla: 2,
        }
    }
}
console.log(`(prod2 é um objeto que contem 3 propriedades -> nome, preco e obj(que é um objeto que tem 2 propriedades -> blabla e obj)) ${JSON.stringify(prod2)}`)

'{"nome": "Camisa Polo", "preco": 79.90 }' //JSON é um formato textual de objeto. OBJETO é uma coleção de {chaves: valor}
//link https://jsonlint.com/ << Validador de JSON. << tirar aspas simples

