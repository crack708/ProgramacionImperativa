const prompt = require("prompt-sync")({ sigint: true });
/*
let producto1 = "iphone";
let producto2 = "tv";
let producto3 = "radio";

let productos = ["iphone","tv", "radio"]

let word ="Hello";
word[0]; //  h
word[1]; //  e
word[4]; //  o
word[5]; // undefined
*/
//////
/*
let index = 3;

word[index]; // segunda l

let largoDelString = word.length;
word[largoDelString] // undefined

word[largoDelString -1] // la ultima letra o

////////////////
*/
/*
let index =2;
let saludo = "Bienvenidos a nuestra pagina";
let longitud = saludo.length;
console.log (saludo[longitud-1]);


let amigos = ["juan", "jorge","pepe", "francisco"];
amigos[0]//juan
amigos[1]//jorge
amigos.length; // 4
amigos[amigos.length];// undefined ya que la posicion del arreglo es 3 y se busca el 4 que no existe
amigos[amigos.length - 1];// Francisco
*/
/////////////
/*
let amigos = ["juan", "jorge","pepe", "francisco"];
amigos[0] = "Juancito"; // cambiamos el valor de juan por juancito
amigos[3] = "Panchito"; // cambiamos el valor de francisco por panchito

*/
/*
let amigos = ["juan", "jorge","pepe", "francisco"];

amigos[4] = "Omar"; // agrgamos en nueva posicion Omar
amigos[5] = "Mateo"; // agrgamos en la posicion 5 Mateo
// let amigos = ["juan", "jorge","pepe", "francisco", "Omar", "Mateo"];
*/
/////
/*
let amigos = ["juan", "jorge","pepe", "francisco"];
amigos[10] = "Ivan"; // agrega en posicion 10 Ivan
console.log(amigos);
// amigos = ["juan", "jorge","pepe", "francisco",empty * 4, "Ivan"];
/*
amigos(11) ["juan", "jorge","pepe", "francisco","MArco", "Ivan", empty * 4, "Ivan"];
//los indices del 6 al 9 quedarian vacias porque nos salteamos todas esas posiciones, agregando las pocición numero 10
*/

/////////////
/*
let coleccionRandom = ["Hola", 22, true, null, function() {console.log("hello");},["hola","chau"]];
console.log(coleccionRandom[4]); // muestra la funcion pero no la ejecuta

console.log(coleccionRandom[4]()); // ejecuta la funcion' ]

console.log(coleccionRandom[5]); // muestra ek arreglo [ 'hola', 'chau' ]

console.log(coleccionRandom[5][1]); // muestra el subarregloe chau
*/

let numbers =[2,33,44,55,22];
console.log(numbers[numbers.length]); // undefined
console.log(numbers[numbers.length - 1]); //mostraria el numero 22

//////////
let grupoDeAmigos = [
    ["Harry","Ron","Hermonie"],
    ["spiderman","Hulk","Iroman"],
    ["Penelope Glamour", "Pierre Nodoyuna","Patan"],
];

console.log(grupoDeAmigos[2][0]); // Glamour
console.log(grupoDeAmigos[0][3]); // Undefined
console.log(grupoDeAmigos[1][2]); // Ironman
/////////////////




