
/**
 * Escribir un programa que muestre por consola
 * los números del 1 al 100, sustituyendo los
 * múltiplos de 3 por la palabra “fizz”,
 * los múltiplos de 5 por “buzz” y los múltiplos
 * de ambos, es decir, los múltiplos de 3 y 5
 * (o de 15), por la palabra “fizzbuzz”.
 *
 * Por ejemplo:
 *
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 *//*
function imprimirNumero() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0){
            console.log("fizzbuzz");
        } else if (i % 5 === 0){
            console.log("buzz");
        } else if (i % 3 === 0){
            console.log("fizz");
        } else {
            console.log(i)
        }
    }
  }
  
  imprimirNumero();/*

  /**
 * Escriba una función que reciba dos parámetros:
 * una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada
 * (basado en uno). Por ejemplo, dado el siguiente
 * array:
 */
let array = [
	3,
	6,
	67,
	6,
	23,
	11,
	100,
	8,
	93,
	0,
	17,
	24,
	7,
	1,
	33,
	45,
	28,
	33,
	23,
	12,
	99,
	100
];

/**
 * Y el siguiente indice:
 */

let indice = 10;

/**
 * La funcion debera mostrar por consola el numero 6.
 */

function dosParametros (array,index){
    for(let i=0;i < array.length; i++){
        if (i==index){
            console.log(array[i])
        }
    }
}

dosParametros(array,indice);

// Extra: que pasa si cambias el valor de la variable indice a 10?
// Si tu función esta bien, deberias ver el numero 17 por consola.

// Escribe tu función debajo de esta linea.

// Invoca tu función debajo de esta linea.