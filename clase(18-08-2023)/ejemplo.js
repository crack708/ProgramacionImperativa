const prompt = require("prompt-sync")({ sigint: true });

////////////////////////////////////////////////////////////

let edad = parseInt(prompt("Ingresa tu numero"));
let impar = edad % 2;

if (edad < 0 ) {
  console.log("Error, edad inválida. Por favor ingrese un número válido.");
} else if (edad < 18) {
  console.log("No podes ingresar al bar");
} else if (edad < 21) {
        if (impar===1){ 
            console.log("Podes ingresar al bar, pero no podes tomar alcohol. ¿Sabías que tu edad es impar? ");}
        else {
        console.log("Podes ingresar al bar, pero no podes tomar alcohol.");}
}else {
    if(edad === 21) {
        console.log("Podes ingresar al bar y tambien tomar alcohol, ¡Felicidades has llegado ala mayoria de edad!");
    } else {
  console.log("Podes ingresar al bar y tambien tomar alcohol");
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////

function totalAPagar(vehiculo, litrosConsumidos) {
  switch (vehiculo){
    case "coche":
      if (litrosConsumidos < 25 ){
        console.log (86 * litrosConsumidos + 50);
      }
      else{
        console.log (86 * litrosConsumidos + 25);
      }
      break;
    case "moto":
      if (litrosConsumidos < 25 ){
        console.log (70 * litrosConsumidos + 50);
      }
      else{
        console.log (70 * litrosConsumidos + 25);
      }
      break;
    case "autobus":
      if (litrosConsumidos < 25 ){
        console.log (55 * litrosConsumidos + 50);
      }
      else{
        console.log (55 * litrosConsumidos + 25);
      }
      break;
    default:
      console.log("Datos erroneos");
    }
  }

  totalAPagar("coche", 30);
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////

  function sandwhich(base,pan,adi1,adi2,adi3,adi4,adi5,adi6) {
    let precioBase=0;
    let precioPan=0;
    let precioAdicional=0;
    switch (base){
      case "pollo":
        precioBase = 150;
        break;
      case "carne":
        precioBase = 200;
        break;
      case "veggie":
        precioBase = 100;
        break;
      default:
        console.log("Este tipo de Base no lo tenemos");
      }
      switch (pan){
        case "blanco":
          precioPan = 50;
          break;
        case "negro":
          precioPan = 60;
          break;
        case "s/gluten":
          precioPan = 75;
          break;
        default:
          console.log("Pan no existente");
        }

      if(adi1==true){
          precioAdicional += 20;
      } 
      if(adi2==true){
          precioAdicional += 15;
      } 
      if(adi3==true){
          precioAdicional += 10;
      } 
      if(adi4==true){
          precioAdicional += 15;
      } 
      if(adi5==true){
          precioAdicional += 5;
      } 
      if(adi6==true){
          precioAdicional += 5;
      } 
      else {
        console.log("No elegiste adicionales")
      }

      let total = precioBase + precioPan + precioAdicional;
      console.log("El costo total de tu sandwich es de: $" + total);
    }
    sandwhich("pollo","blanco", true,true,true,true,true,true,);

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////

    function numeroSecreto(num) {
      let numero = Math.floor(Math.random() * 10);
      if (num===numero){
      console.log ("felicidades acertaste el numero secreto");
      }
      else{
        console.log("sigue intentandolo el numero secreto era: " + numero + " el tuyo fue: " + num);
      }
    }
    numeroSecreto(5)