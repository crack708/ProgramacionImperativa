
const prompt = require("prompt-sync")({ sigint: true });//declaramo s vairable pasajero en uno
/*let pasajero = 1;

while (pasajero <=20){
    console.log ("puede pasar su asiento es el : " + pasajero);
    pasajero ++;
}*/
/*


let palabraMagica = "abrete sesamo";
let intento = prompt("cual es la palabra magica");
while (intento!=palabraMagica){
    console.log ("esa palabra es incorrecta");
    intento = prompt("cual es la palabra magica otravez")
}

console.log ("bienvenido palabra correcta");


let i= 1;
let inicial = 5;
let acumuladora = 0;
while (i <= final){

}

*/

//si o si? 

/*
let input;
while (!(input= prompt("escriba su nombre"))){
    console.log("no recibimos la informacion")
}
console.log("su nombre es: " + input);

*/
/*
for loops
son muy utiles para recorrer un arreglo y mopstrar todos sus elemtnnos, sien mbargo no esd la unica manerda hacerlo */
/*for (inicializacion; condicion; invbrfemento / decremento){

}*/
/*
let i=1;
while(i<=10){
    cvonsole.log(i);
    i++;
}

for (let i =1 ; i <=10; i++){
console.log(i);
}


for (let i=1; i<=16; i++){
    if (i%3===0 && i%5===0){
        console.log("FIZZ");
    } else if (i%5===0){
        console.log("BUZZ");
    }
    else if (i%3===0 ){
        console.log("FIZZ");

    }
    else{
        console.log(i);
    }
}


function fizzBuzz(palabra1, palabra2, num1, num2, num3){
    for (let i=1; i<=num3; i++){
        if (i % num1===0 && i % num2===0){
            console.log(palabra1 + palabra2);
        } else if (i % num1===0){
            console.log(palabra1);
        }
        else if (i%num2===0 ){
            console.log(palabra2);
        }
        else{
            console.log(i);
        }
    }
}

fizzBuzz("Digitarl", "House",2, 7, 17);

*/

function sumattion(num){
    let suma = 0;
    for (let i= 0; i<=num; i++){
        suma +=i;
    }
    return console.log(suma);
}
sumattion(8);