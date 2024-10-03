const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) //undefined porque nao existe no array

valores[4] = 10
console.log(valores)
console.log(valores.length)

//funcao de array PUSH para adicionar novos elementos no array
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//funcao POP - exclui o ultimo valor do array
console.log(valores.pop())
delete valores[0]
console.log(valores)

//em JS um array e do tipo OBJECT
console.log(typeof valores)

// O array e um tipo de dados dinamico(cresce ou diminui tamanho)
// Estrutura indexada e heterogenea(pode misturar dados»NAO E BOA PRATICA)
// metodo PUSH
// forma de acessar a partir do indice»nome do array ou identificador[index], = 10 para adicionar um novo valor ao array
// ao tentar acessar um index que nao existe no array retorna undefined
// pop para tirar do array
// delete no contexto de OBJETO para deletar um valor dentro do obj
// typeof valores » array em JS e objeto