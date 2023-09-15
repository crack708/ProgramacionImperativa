//nombreArreglo.splice (argumento1,argumento2);

let puntajes =[1,7,0,8,4,9]; // definimos el arreglo
let comenzandoIndice = 2; // posicion a partir de la que vamos a remover elemntos
let numeroRemover = 3; //Cantidad de elementos que vamos a remover

let resultado = puntajes.splice(comenzandoIndice, numeroRemover);

console.log(puntajes);
console.log(resultado);



