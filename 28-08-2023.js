/* Integrantes del equipo 

1.- Jessica Martínez Alee
2.- Ana Cecilia Toribio Arrieta
3.- Alberto Soriano Vasquez

*/


/* 
Punto 1: Variables, Condicionales y Bucles

Escribe una función llamada encontrarMultiplos que tome dos números, numero y limite, y devuelva un arreglo con los múltiplos de numero hasta el limite, excluyendo el límite.
Luego, utiliza la función encontrarMultiplos para obtener los múltiplos de 5 hasta 50.

*/

//CODIGO

function encontrarMultiplos(num, lim){
let arreglo = [];
    for (i=1;i<lim;i++){
        if(i%num===0){
        arreglo.push(i);
        }
    }
    console.log(arreglo);
}

encontrarMultiplos(5,50);



/* 
Punto 2: Arreglos y Objetos
3. Crea un arreglo de 4 objetos, cada objeto representa un estudiante con propiedades como nombre, notas (arreglo de números) y aprobado (booleano).

Agrega un método al objeto para calcular si el estudiante aprobó o no, considerando que aprueba si su promedio de notas es mayor o igual a 70.

*/
//CODIGO

let estudiantes = [
    {
        nombre: "Cecilia",
        notas: [90,80,100,70],
        aprobado: true,
        promedio: function(){
          let sum=0;
          let prom = 0;
          for (let i = 0; i < this.notas.length; i++){
            sum+=this.notas[i];
          }
          prom = sum/this.notas.length
          if (prom >=70) {
            console.log('aprobó')
          }
          else{
            console.log('Reprobó')
          }
          return prom; 
        }
    },
    {
        nombre: "Alberto",
        notas: [50,60,70,60],
        aprobado: true,
        promedio: function(){
            let sum=0;
            let prom = 0;
            for (let i = 0; i < this.notas.length; i++){
              sum+=this.notas[i];
            }
            prom = sum/this.notas.length
            if (prom >=70) {
              console.log('aprobó')
            }
            else{
              console.log('Reprobó')
            }
            return prom; 
          }
    },
    {
        nombre: "Jessica",
        notas: [0,5,100,100],
        aprobado: true,
        promedio: function(){
            let sum=0;
            let prom = 0;
            for (let i = 0; i < this.notas.length; i++){
              sum+=this.notas[i];
            }
            prom = sum/this.notas.length
            if (prom >=70) {
              console.log('aprobó')
            }
            else{
              console.log('Reprobó')
            }
            return prom; 
          }
    },
    {
        nombre: "Carlos",
        notas: [90,80,100,70],
        aprobado: true,
        promedio: function(){
            let sum=0;
            let prom = 0;
            for (let i = 0; i < this.notas.length; i++){
              sum+=this.notas[i];
            }
            prom = sum/this.notas.length
            if (prom >=70) {
              console.log('aprobó')
            }
            else{
              console.log('Reprobó')
            }
            return prom; 
          }
    }
]
console.log(estudiantes[1].promedio());


// Función para calcular el promedio de notas

function calculaPromedio(estudiante){
    let sum = 0;
    let prom = 0;
    for (i=0; i< estudiante.notas.length; i++){
        sum+=estudiante.notas[i];
    }
    prom = sum/estudiante.notas.length
    return prom;
}
console.log(calculaPromedio(estudiantes[0]))


// Función para determinar si el estudiante aprobó


function aprobacion(estudiantes){
   let aprobado = false;
  let promedio = calculaPromedio(estudiantes);
  if (promedio > 70){
    aprobado = true;
  }
  return aprobado
}
console.log(aprobacion(estudiantes[0]));

// Calcular si los estudiantes aprobaron o no


// Imprimir estado de aprobación de los estudiantes
console.log(aprobacion(estudiantes[0]));
console.log(aprobacion(estudiantes[1]));
console.log(aprobacion(estudiantes[2]));
console.log(aprobacion(estudiantes[3]));


/* 
Punto 3: Arreglos y Bucles
7. Crea un arreglo de números y utiliza un bucle while para calcular la suma de los números pares en el arreglo.

*/

//CODIGO
let numeros = [3,5,6,2,8,10,12];
let sum=0;
let j=0;
while (numeros[j]) {
    if (numeros[j]%2==0){
     sum +=numeros[j];}
  j++;
}
console.log("aquí", sum);

/* 
Punto 4: Bucles y Arreglos
10. Crea una función que tome un arreglo de números y devuelva el producto de los números impares.
Respuesta y Explicación:
*/

//CODIGO

function multiplicacionImpares(array){
  let producto=1;
  for (i=0; i < array.length; i++){
    if (array[i]%2!=0){
      producto = array[i] * producto;
    }
  }
  return producto;
}
console.log(multiplicacionImpares(numeros));

/* 
Punto 5: Objetos y Condicionales
11. Crea un objeto vehiculo con propiedades como marca, modelo, anio y precio.
Agrega un método al objeto que calcule el impuesto a pagar según el año del vehículo. Si el año es anterior a 2010, el impuesto es del 10% del precio; si es posterior o igual a 2010, el impuesto es del 5%.
*/

//CODIGO

let vehiculo = {
  marca: "Volkswagen",
  modelo: "jetta",
  anio: 2020,
  precio: 2500,
  impuesto: function(){
    let impuestoTotal;
    if(this.anio < 2010){
      impuestoTotal = (this.precio * 10)/100;
    }
    else{
      impuestoTotal = (this.precio * 5)/100;
    }
    return impuestoTotal;
  }
};
console.log(vehiculo.impuesto());