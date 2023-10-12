// Definición de la función 'miFatArrowFunction' usando una fat arrow function (=>).
// Las fat arrow functions fueron introducidas en ECMAScript 6 (ES6) como una sintaxis más concisa
// para escribir funciones. Esta sintaxis es especialmente útil para funciones que contienen una sola expresión.
// En este caso, 'miFatArrowFunction' es una función que recibe dos argumentos 'a' y 'b',
// y retorna la suma de 'a' y 'b' en una expresión concisa.
const miFatArrowFuction = (a, b) => a + b;

// Llamada a la función 'miFatArrowFunction' con los argumentos 1 y 2.
// La función retorna la suma de 1 y 2, que es 3, y este valor es asignado a la variable 'resultado'.
const resultado = miFatArrowFuction(1, 2);

// Impresión del resultado en la consola.
// Se imprime "El resultado es 3" en la consola.
console.log("El resultado es", resultado);

// Definición de la función 'sum' usando una fat arrow function (=>), pero en una forma extendida.
// Cuando la función tiene un cuerpo con múltiples expresiones o declaraciones,
// se debe escribir entre llaves {} y se debe usar la palabra clave 'return' para especificar el valor que se retornará.
const sum = (a, b) => {
  return a + b; // Retorna la suma de 'a' y 'b'
};

// Llamada a la función 'sum' con los argumentos 2 y 8.
// La función retorna la suma de 2 y 8, que es 10, y este valor es asignado a la variable 'r'.
const r = sum(2, 8);

// Impresión del resultado en la consola.
// Se imprime "El resultado es 10" en la consola.
console.log("El resultado es", r);

// En resumen, ambas definiciones de funciones hacen lo mismo, sumar dos números,
// pero 'miFatArrowFunction' usa una sintaxis más concisa ya que la función tiene una sola expresión,
// mientras que 'sum' usa una forma extendida de la fat arrow function para incluir un cuerpo de función con una declaración de retorno.
