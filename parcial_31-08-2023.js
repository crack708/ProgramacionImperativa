/* Ejercicio 1 Realizar una función que reciba por parámetro dos valores y verifique qué tipo de dato son: 
Si ambos son tipo de dato Number deberá retornar su multiplicación. 
Si ambos son tipo de dato String deberá concatenarlos y retornar el resultado de esa concatenación.
Si ambos son tipo de dato Booleano deberán retornar false. */

function tipoDatos(par1, par2){
    if (typeof(par1)==='string' && typeof(par2)==='string' ){
        console.log (par1 + " " + par2);
    }
    else if (typeof(par1)==='number' && typeof(par2)==='number' ){
        console.log (par1*par2);
    }
    else{
        console.log (false);
    }

}

tipoDatos("hola","mundo");
tipoDatos(5,5);
tipoDatos(false,true);


/* Ejercicio 2:
Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor: 
nombre 
apellido
edad
esArgentino (bool)
*/

let usuario = {
    nombre: "Alberto",
    apellido: "Soriano",
    edad: 18,
    esArgentino: true,
  };
  
function validarUsuario(obj){
 if (obj.edad >=18 && obj.esArgentino===true){
    return obj.nombre + " " + obj.apellido + " vive en Argentina y es mayor de edad"
 }
 else if (obj.edad >=18 && obj.esArgentino===false){
    return obj.nombre + " " + obj.apellido + " NO vive en Argentina y es mayor de edad"
 }
 else if (obj.edad < 18 && obj.esArgentino===true){
    return obj.nombre + " " + obj.apellido + " vive en Argentina y NO es mayor de edad"
 }
 else{
    return obj.nombre + " " + obj.apellido + " No vive en Argentina y NO es mayor de edad"
 }
}

console.log (validarUsuario(usuario));

/*Realizar una función llamada verificacionDeTiposDeDatos que reciba dos valores por parámetro, 
estos pueden ser String o Booleano. Nuestra función deberá determinar si los valores recibidos son del mismo tipo*/

function verificacionDeTiposDeDatos (valor1, valor2){
    if((valor1 === true && valor2 === true) || (valor1 === false && valor2 === false) || (valor1 === true && valor2 === false) || (valor1 === false && valor2 === true)){
        console.log("Son del mismo tipo");
    }
    else if((valor1 !== true && valor2 !== true) && (valor1 !== false && valor2 !== false) && (valor1 !== true && valor2 !== false) && (valor1 !== false && valor2 !== true)){
        console.log("Son del mismo tipo");
    }
    else{
        console.log("No son del mismo tipo");
    }
}
verificacionDeTiposDeDatos (true,true);

/* Ejercicio 3:
Crear un array vacío llamado destinos. 
Dados estos tres objetos:
*/
let destinos = [];

let brasil = {
    cantidadDeVisitas: 3,
    clima: "soleado",
    habitantes: "212 millones",
   }
let rusia = {
    cantidadDeVisitas: 4,
    clima: "frío",
    habitantes: "144 millones",
}
let estadosUnidos = {
    cantidadDeVisitas: 1,
    clima: "nublado",
    habitantes: "329 millones",
}

destinos.push(brasil,rusia,estadosUnidos);

console.log(destinos);

/*Crea una función que reciba el array destinos como parámetro, e incremente en 1 la cantidad de visitas 
de cada uno de los destinos, llámala siguienteViaje. */

function siguienteViaje(destinos1){
    for (let i=0; i< destinos1.length; i++)
    {
        destinos1[i].cantidadDeVisitas+=1;
    }
  }
 
  siguienteViaje(destinos);

  /* Mostrar por consola el array de destinos antes y después de la ejecución de la función. */
  console.log(destinos);

/*   otro exmaen */

/*Dado el siguiente arreglo de objetos: */
//Realizar una función que reciba un array como parámetro, y lo recorra para filtrar los productos que sean de tipo “tecnologia”
// y que su precio sea mayor o igual a 50000, la función deberá retornar un nuevo arreglo con los productos que cumplan con las 
//condiciones antes mencionadas.

let productos = [
    {
        producto: "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto: "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto: "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto: "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto: "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto: "tablet",
        tipo: "tecnologia",
        precio: 60000
    },
];

function recibeProductos(arreglito){
    let nuevoArreglito = [];
    for (i=0; i<arreglito.length;i++){
        if (arreglito[i].tipo==="tecnologia" && arreglito[i].precio >= 50000){
            nuevoArreglito.push(arreglito[i]);
        }
    }
        return nuevoArreglito;
}

console.log (recibeProductos(productos));
