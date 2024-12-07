{
    {
        {
            { var sera = 'Imprime o valor de será' }
        }
    }
}
console.log(sera) // Será???
// A variavel var é visivel globalmente, entao SERA é impresso, mesmo que esteja dentro de um bloco de código.

function teste() {
    var local = 123
    console.log(local) // a variavel local é visivel APENAS dentro do bloco de código do bloco {var = local}
}

teste()
// console.log(local) // Erro: local is not defined, PORQUE var local = 123 esta dentro do bloco{}, visivel apenas no bloco{}

// Window » Escopo global EXECUTADO PELO BROWSER » Em node é global apenas
//window » variavel local do browser(exibe tudo dentro do browser que não é função, que nao está dentro de um bloco de código)
//*Quando uma variavel é criada fora da função, ela é criada no escopo global, ou seja, ela é visivel em qualquer lugar do código.
//window.a
//console.log(window.a) // 123 // a variavel a foi criada no escopo global, por isso é visivel em qualquer lugar do código.`
//var a = 'teste'
//console.log(a) // teste