var numero = 1
{
    let numero = 2 // Let só é visivel dentro do bloco de código onde foi criada.
    console.log('dentro =', numero, 'Escopo Local') //exibe dentro = 2 Escopo Local
}
console.log('fora =', numero, 'Escopo Global - FUJA DELE!!!') // exibe fora = 1 Escopo Global - FUJA DELE!!!


var numero = 1
{
    //por que esse comportamento acontece? Pq numero2 nao existe no bloco, entao o motor procura no escopo global.
    let numero2 = 2 // Let só é visivel dentro do bloco de código onde foi criada.
    console.log('Let tem escopo de local(bloco), numero nao existe localmente entao o motor procura no escopo global.\ndentro =', numero, 'Escopo Local') //exibe dentro = 1 Escopo Local
}
console.log('fora =', numero, 'Escopo Global - FUJA DELE!!!') // exibe fora = 1 Escopo Global - FUJA DELE!!!