let misMascotas = [
    {
      nombre: 'Doky',
      raza: 'schnauzer',
      edad: 4,
      sonido: 'Guau',
      sonidoDuplicado: function(){
      return this.sonido + " " + this.sonido;
     }
    },
    {
        nombre: 'Ruffo',
        raza: 'Dogo',
        edad: 6,
        sonido: 'Guauuu',
        sonidoDuplicado: function(){
        return this.sonido + " " + this.sonido;
       }
      },
      {
        nombre: 'Toby',
        raza: 'Labrador',
        edad: 12,
        sonido: 'Hola',
        sonidoDuplicado: function(){
        return this.sonido + " " + this.sonido;
       }
      },
  ];
  
  console.log (misMascotas[2].sonidoDuplicado())

  function aumentarEdad(){
    for (let i=0; i< misMascotas.length; i++)
    {
        misMascotas[i].edad+=1;
    }
  }
 
  aumentarEdad();
  console.log (misMascotas[2].edad)

  /* Ahora debemos crear otra función, que se llame  aumentarEdad2, que va a hacer un trabajo más fino:
    Si la mascota tiene menos de 6 años, debe aumentar su edad en 1
    Si la mascota tiene entre 6 y 10 años, debe aumentar su edad en 2
    Si la mascota tiene más de 10 años, deberá sumarle la mitad de su edad*/


function aumentarEdad2(){
    for (let i=0; i< misMascotas.length; i++)
    {
      if (misMascotas[i].edad<6){
        misMascotas[i].edad+=1;
      }
      else if (misMascotas[i].edad>=6 && misMascotas[i].edad<=10){
        misMascotas[i].edad+=2;
      }
      else{
        misMascotas[i].edad+= misMascotas[i].edad/2;
      }
    }
}

aumentarEdad2();

console.log (misMascotas[0].edad)
console.log (misMascotas[1].edad)
console.log (misMascotas[2].edad)


/*5) Ahora crearemos una función que va a generar un identificador (ID) en cada objeto, que será secuencial y que empezará en 1.
*/

function generarId(){
    for(let i=0; i<misMascotas.length; i++){
        misMascotas[i].id=i+1;
    }
}

generarId();

console.log(misMascotas);