//  OBJETO MATH : esta relacionado a las propiedades y metoods relacionados a las matematica
// Este obejeto no tpma cmo parametro un arreglo, sin oque toma una lista de numeros

Math.PI
Math.pow(9,2); // nos devuelve el prmier numero multiplicado tantas veces como se imdique en el segundo argumento
Math.random();  // nos devuelve un numero aleatorio entre 0 y 1
Math.floor(7,2); // nos devuelve el numero redondenado hacia bajo
Math.ceil(7.6) // nos devuelve el numero redondeado hacia arroba
Math.max(); // nos deveulve el valos mas grnade entre los numero que pasemso en parentesis
Math.min();// nos deveulve el valos mas pequeño entre los numero que pasemso en parentesis

let numeros = [5,10,25,58,12];
let maximo = 0;
function encotrarMaximo(array){
    for (let i=0; i<array.length;i++){
        if (maximo < array[i]){
            maximo = array[i];
        }
    }
    return maximo;

}
console.log("cons cilo for");
console.log(encotrarMaximo(numeros));

console.log ("con math.max");
console.log(Math.max(5,10,25,58,12));

console.log ("con math.min");
console.log(Math.min(5,10,25,58,12));


////////////////////////   MATRICES ///////////////////////////

// En matrices vamos a encontrar filas y columnas
let matrizNumeros = [
    [1,2,3], // las filas se ven de forma horizontal, primer subarreglo = 0
    [4,5,6], // columnas se ven de fomra vertical, segundo sugbarregloe = 1
    [7,8,9] // tercer subarreglo = 2
];

console.log(matrizNumeros[1])
console.log(matrizNumeros[1][0])

console.table(matrizNumeros);

// modificar un numero dentro de un subarreglo

matrizNumeros[1][0] = 9;
console.table(matrizNumeros);

// recorrer e imprimir con doble for


for (let i=0; i < matrizNumeros.length; i++){
    for (let j=0; j < matrizNumeros.length[i]; j++){
        console.log(matrizNumeros[i][j]);
    }
}

for (let i=0; i < matrizNumeros.length; i++){
    const filas = 
    for (let j=0; j < matrizNumeros.length[i]; j++){
        console.log(matrizNumeros[i][j]);
    }
}

for (let i=0; i < matrizNumeros.length; i++){
    for (let j=0; j < matrizNumeros[i].length; j++){
        if (matrizNumeros[i][j] % 2 === 0){
            console.log(matrizNumeros[i][j]);
        }

    }
}

// genrerar matriz de 10 x 10

function generarMatriz10por10(){
    let array = [];
    for(let i = 0; i <=90; i +=10){
        let filas = [];
        for (let j= 1; j <=10; j++){
            filas.push(i+j);
        }
        array.push(filas);
    }
    return array;
}

let matriz10por10 = generarMatriz10por10();
console.table(matriz10por10)