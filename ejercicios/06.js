/**
 * Crear algoritmo que devuelva la cantidad
 * de números positivos en un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];

function countPositive(arr) {
  let quantity = 0;
  for (element of arr) {
    if (element > 0) {
      quantity++;
    }
  }
  return quantity;
}

let result = countPositive(array);
console.log(result);
