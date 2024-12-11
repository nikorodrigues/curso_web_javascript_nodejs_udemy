console.log(typeof console) // object
console.log(Math.ceil(6.1)) // 7 arredonda para cima
console.log(Math.floor(6.1)) // 6 arredonda para baixo

const obj1 = {}
obj1.nome = 'Bola'
//obj1['nome'] = 'Bola2' // Notação colchete
console.log(obj1.nome) // Bola

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('Exec...')
    }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome) // Cadeira
console.log(obj3.nome) // Mesa
obj3.exec() // ReferenceError: exec is not defined