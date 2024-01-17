/**
 * Crear algoritmo que devuelva la cantidad
 * de números pares en un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55, 22, 45, -8];

function countEven(arr) {
  let quantity = 0;
  for (element of arr) {
    if (element % 2 == 0) {
      quantity++;
    }
  }
  return quantity;
}

let result = countEven(array);
console.log(result);
