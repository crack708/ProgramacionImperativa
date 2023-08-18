let numerosPrimos = [7,11,13,17];
numerosPrimos.unshift(5); // [5, 7,11,13,17];
numerosPrimos.unshift(1,2,3); // [1,2, 5, 7,11,13,17];

let noEsPrimo = numerosPrimos.shift(); // 1 // [2,3,5,7,11,13,17]