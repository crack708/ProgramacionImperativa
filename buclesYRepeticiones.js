// 1) Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
/*
function diezsiguientes(num){
    for (i=1;i<=10;i++){
        num++;
        console.log(num);
    }
}

diezsiguientes(5);*/

////////////////////////////////////////////////////////////////////////////////////
// 2) Imprimir los números entre el 5 y el 20, saltando de tres en tres.
/*
for (let i=5; i<=20; i+=3){
    console.log(i);
}
*/
// 3) Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100
/*
function telasuma(){
let suma=0;
for (let i=0; i<=100;i++){
    suma+=i;
}

return suma;
}
let resultado=telasuma();
console.log("tu sumatoria es: " + resultado);
*/
//Dado un número entero positivo, mostrar su factorial. El factorial de un número se obtiene multiplicando todos los números enteros positivos que hay entre el 1 y ese número.
/*
function facti(num){
    let factorial=1;
    for(let i=1;i<=num;i++){
        factorial *=i;
}
return factorial;
}
let resutado1= facti(5);
console.log("el resultado de tu numero factorial es : " + resutado1 )
*/
//5) Crear una función que muestre todos los números de la secuencia de fibonacci hasta el valor ingresado por parámetro.

function fibonacci(num){
let inicial = 0;
let segundo = 1;
let resultado = 0;
for (let i=2;i<=num+1;i++){
   if (i==2){
    console.log (resultado);
   }
   else {
    resultado = inicial + segundo;
    segundo = inicial;
    inicial = resultado;
    console.log (resultado);
}
}
}

fibonacci(10);