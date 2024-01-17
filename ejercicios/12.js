/**
 * Transformar los números de un array a sus dobles mostrando la operación realizada
 */

const numbers = [-1, 0, 1, 2, 3, 4, 5];

const doubles = numbers.map((x) => `${x} * 2 = ${x * 2}`);

console.log(doubles);
