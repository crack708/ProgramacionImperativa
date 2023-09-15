//let arreglocopia = arreglo.slice();

let frutas = ["banana", "naranja","limon","MAnzana","Sandia"];
let todasFrutas = frutas.slice(); // clona el arreglo frutas ["banana", "naranja","MAnzana","Sandia"]
console.log(frutas);
console.log(todasFrutas);

let todosMenosBanana = frutas.slice(1);
console.log(todosMenosBanana); // el arregloe uqdaria [ 'naranja', 'MAnzana', 'Sandia' ] porque se elomino BANANA

let soloCitricos = frutas.slice(1,3);
console.log(soloCitricos); // clona el arreglo frutas desde el indice 1 hasta el 2 sin incluir 3 = [ 'naranja', 'limon' ]

