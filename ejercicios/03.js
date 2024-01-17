/**
 * Indice validar que no sea menor a cero y que el elemento
 * exista en el array
 */

function getByIdx(arr, idx) {
  if (idx < 0 || arr.length <= idx) {
    return "Element does not exist";
  }
  return arr[idx];
}

let result = getByIdx([1, 2], 0);
console.log(result);
