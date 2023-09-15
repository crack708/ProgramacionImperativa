/* Ejercicio 1 */
let participanetes = [
    {
        likes:34,
        username: "anita123"
    },
    {
        likes:54,
        username: "juanita123"
    },
    {
        likes:55,
        username: "pedrito123"
    },
    {
        likes:22,
        username: "pool123"
    },
    {
        likes:12,
        username: "sammy123"
    }
]
/*
let ordearPorLikes = () => {}
let ordearPorLikes = function(){

}*/

function ordearPorLikes (array){
    for (let i=0; i < array.length; i++){
        for (let j=0; j < array.length -1; j++){
            if(array[j].likes > array[j+1].likes){
                let temporal = array[j];
                array[j] = array[j+1];
                array[j+1] = temporal;
            }
        }
    }
    return array;
}

console.log(ordearPorLikes(participanetes));


let temperaturas = [
    {
        dia: 14,
        mes: "septiembre",
        tempMax: 28,
        tempMin: 13,
    },
    {
        dia: 5,
        mes: "julio",
        tempMax: 13,
        tempMin: 8,
    },
    {
        dia: 20,
        mes: "diciembre",
        tempMax: 35,
        tempMin: 20,
    },
    {
        dia: 2,
        mes: "agosto",
        tempMax: 15,
        tempMin: 3,
    },
    {
        dia: 4,
        mes: "enero",
        tempMax: 45,
        tempMin: 18,
    }
]

/* ordenar por tempertura minima de menor a mayor*/

function temperaturaMinima (array){
    for (let i=0; i < array.length; i++){
        for (let j=0; j < array.length -1; j++){
            if(array[j].tempMin > array[j+1].tempMin){
                let temporal = array[j];
                array[j] = array[j+1];
                array[j+1] = temporal;
            }
        }
    }
    return array;
}

console.log(temperaturaMinima(temperaturas));


/* ordenar por tempertura minima de mayor a menor*/

function temperaturaMaxima (array){
    for (let i=0; i < array.length; i++){
        for (let j=0; j < array.length -1; j++){
            if(array[j].tempMax > array[j+1].tempMax){
                let temporal = array[j];
                array[j] = array[j+1];
                array[j+1] = temporal;
            }
        }
    }
    return array;
}

console.log(temperaturaMaxima(temperaturas));