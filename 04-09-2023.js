let array = [23,5,3,6,6,8,3,4,6,67,88,22,];
let index = 10;
function buscarEnArray(array, index){
    if (!(index < array.length)){
        console.log("Indice Fuera de Limites");
        return
    }
    console.log(array[index]);
}

// buscarEnArray(array, index);

let imprimirNumeros = () => {
    for (let i=1;i<=100;i++){
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

//imprimirNumeros();

function mesNumero(mes){
    switch(mes){
            case "enero":
              console.log("31");
              break;
            case "febrero":
              console.log("28");
              break;
            case "marzo":
              console.log("31");
              break;
            case "abril":
              console.log("30");
              break;
            case "mayo":
              console.log("31");
              break;
            case "junio":
              console.log("30");
              break;
            case "julio":
              console.log("31");
              break;
              case "agosto":
                console.log("31");
                break;
              case "septiemebre":
                console.log("30");
                break;
              case "octubre":
                console.log("31");
                break;
              case "noviembre":
                console.log("30");
                break;
                case "diciembre":
                console.log("31");
                break;
            default:
              console.log("no es un dato valido");
    }
}

//mesNumero("enero");

let arreglito= [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function repetidos(arreglo) {
    let repetidos = [];
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[i] === arreglo[j] && !repetidos.includes(arreglo[i])) {
                repetidos.push(arreglo[i]);
            }
        }
    }
    return repetidos;
}


console.log(repetidos(arreglito));