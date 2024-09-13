let a = 7;
let b = 94;

// objetivo: trocar o valor das variaveis a e b

let temp = a;
a = b;
b = temp;

console.log("a vale " + a);
console.log("b vale " + b);

// a = c. d = b (pior, pois ocupa mais memoria devido as 2 variaveis criadas)
// usado VAR let pois é uma variável que será alterada depois