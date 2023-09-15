/* crear una funcion que agrege al array u nuevo objeto y ñps ordene dada su sestatura */

let personas[
    {
        nombre: "Alberto",
        apellido; "Scot",
        ocupacion: "cantante",
        estatura: 135,   
    },
    {
        nombre: "Adrian",
        apellido; "PErez",
        ocupacion: "obrero",
        estatura: 100,   
    },
    {
        nombre: "juanada",
        apellido; "la cubana",
        ocupacion: "prograadaora",
        estatura: 50,   
    }
];

function armarArreglo(arreglo){
arreglo.push({
    nombre: "Trvis",
    apellido; "Scot",
    ocupacion: "cantante",
    estatura: 135,  
});
for (let i =0; i< personas.length; i++){
    for (let j=0; j< personas.length - 1; j++){
        if (personas[j].estatura < personas[j+1].estatura){
            let num = personas[j];
            personas[j] = personas [j+1];
            personas[j+1]= num;
        }
    }
}
return arreglo;
}

console.log(armarArreglo(personas))

/* crear iuna funcion que reciba por parametor un arreglo yn un string si el string es "ASC"