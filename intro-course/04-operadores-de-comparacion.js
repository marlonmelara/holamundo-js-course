// Operadores de comparación

// Comparación estricta si A es igual a B
const resultado1 = 5 === 6;
console.log(resultado1);

// Comparación no estricta si A es igual a B, string pueden ser iguales a números si el valor es el mismo
const resultado2 = 5 == 6;
const resultado3 = 5 == 5;
const resultado4 = 5 == "5";
console.log(resultado2, resultado3, resultado4);

// Comparación estricta A si es igual a B
const resultado5 = 5 === "5";
console.log(resultado5);

// Comparación menor que - mayor que
const resultado6 = 5 < 6;
const resultado7 = 5 > 6;
const resultado8 = 5 < 5;
const resultado9 = 5 > 5;
console.log(resultado6, resultado7, resultado8, resultado9);

const resultado10 = 5 <= 5;
const resultado11 = 5 <= 6;
const resultado12 = 5 <= 4;
const resultado13 = 5 >= 6;
const resultado14 = 5 >= 4;
console.log(resultado10, resultado11, resultado12, resultado13, resultado14);

const resultado15 = 5 !== 6;
const resultado16 = 5 != "5";
console.log(resultado15, resultado16);
