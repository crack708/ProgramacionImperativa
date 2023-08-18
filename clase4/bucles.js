/*1) Crear una función que pida un valor por parámetro y muestre los 10
números siguientes.

2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
3) Escribir un programa que muestre la sumatoria de todos los números
entre el 0 y el 100
4) Dado un número entero positivo, mostrar su factorial. El factorial de
un número se obtiene multiplicando todos los números enteros
positivos que hay entre el 1 y ese número.

5) Crear una función que muestre todos los números de la secuencia de
fibonacci hasta el valor ingresado por parámetro.*/

function anterior(numero){
    return console.log(numero-1);
}
function triple(numero1){
    return console.log(numero1*3);
}
function anteriorDelTriple(numero2){
    return console.log((numero2*3)-1);
}

anteriorDelTriple(4);