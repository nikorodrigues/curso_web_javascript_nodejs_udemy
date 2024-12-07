var numero = 1
{
    var numero = 2
    console.log('dentro =', numero, 'Escopo Local')
}
console.log('fora =', numero, 'Escopo Global - FUJA DELE!!!')

// Nao existe escopo de bloco para variaveis do tipo var, por isso a variavel numero foi sobrescrita.