// sintaxis 
/*
let persona = {
    nombre: "Luciano",
    apellido: "Moyano",
    edad: 27,
    estaVivo: true,
    mascotas: ["pepe","limon","Ruffo"],
    grupoFamiliar: {
        papa: "MArcelo",
        mama: "Nancy"
}
}
*/
/*------ Dot notattion vs Bracket Notattion ----

BRACKET NOTATION => nombreObjeto ["nombre prpiedad"]
DOT NOTATTION =>     nombreObejeto.nombrePropiedad

/*

let heroe = {
    nombre: "Mario",
    trabajo: "Plomero"
}
/*
// //  CAMBIAR PROPIEDAD ////////////////////////////////////////////////////////////////
// Dot notation //CODIGO
 heroe.nombre= "Luigi"

 //Bracket Notation
heroe["nombre"] = "Luigi"

// //  AGREGAR PROPIEDAD ////////////////////////////////////////////////////////////////
*/
// Dot notation //CODIGO
//heroe.nacionalidad = "Italaia"

//Bracket Notation
/*
heroe["nacionalidad"] = "Italia"


console.log(heroe);

// //  ELIMNAR  PROPIEDAD ////////////////////////////////////////////////////////////////
*/
// Dot notation //CODIGO
//delete arreglo.key 
//Bracket Notation
/// deletevarreglo ["key"]
//delete heroe.trabaajo


//// Objetos dentro de Arreglos
/*
let auto={
    marca:"Ford",
    modelo:"Fiesta",
    kilometraje: 0,
    nuevo: true,
    arrancar: function(){
        console.log("El auto se enciende")
    },
    partes: [{nombre: "bateria", estado: "nuevo"},{nombre:"motor", estado:"nuevo"}]
}

////   DOT NOTATION

//auto.partes[0] // {nombre:"bateria",estado:"nuevo"}
auto.partes[0].estado // {estado:"nuevo"}

///  BRACKET NOTATION
auto["partes"]

auto["partes"][1]
auto["partes"][1]["nombre"]
*/
/*
let ecommerce=[
    {nombre:"Samsung Tv", precio:6000, articulo:10},
    {nombre:"notebook", precio:4000, articulo:30},
    {nombre:"Auriculares", precio:1500, articulo:15},
    {nombre:"monitos", precio:12000, articulo:20},
    {nombre:"Teclado", precio:3000, articulo:5}
]

function elements(arreglo,propiedad,propiedad1){
    let nuevoArreglo =[];

    for (let i=0; i < arreglo.length; i++){
    nuevoArreglo.push(arreglo[i][propiedad],arreglo[i][propiedad1])
}
return nuevoArreglo;
}

console.log(elements(ecommerce, "nombre", "precio"))
*/

let banco = {
    clientes:  [{
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
      },
      {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
      },
      {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Jarret Lafuente",
      },
      {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
      },
      {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
      }],
     consultarCliente: function(nombre) {
        for (let i = 0; i<this.clientes.length; i++){
            if( this.clientes[i]["titularCuenta"] == nombre){
                console.log(this.clientes[i]);
            }
        }
    },
    deposito: function(titular,deposito){
        let saldo = 0;
        for (let i = 0; i<this.clientes.length; i++){
            if( this.clientes[i]["titularCuenta"] == titular){
                saldo = this.clientes[i]["saldoEnPesos"] +=deposito;
                console.log("Depósito realizado, su nuevo saldo es: " + saldo);
            }
        }

    },
    extraccion: function(titular,monto){
        let saldoActual = 0;
        for (let i = 0; i<this.clientes.length; i++){
            if( this.clientes[i]["titularCuenta"] == titular){
                saldoActual = this.clientes[i]["saldoEnPesos"] -= monto;
                if (saldoActual<=0){
                    console.log("Fondos insuficientes");
                }else {
                console.log("Extracción realizada correctamente, su nuevo saldo es: " + saldoActual + " Usted Retiro : " + monto);
            }
            }
        }

    },
}

banco.consultarCliente("Ramon Connell");

banco.deposito("Ramon Connell",1000);

banco.extraccion("Ramon Connell",7000);

