/**
 * Crear algoritmo que devuelva número
 * menor y mayor de un array.
 */

let array = [2, 5, 7, 15, -5, -100, 55];
function getSmallerLarger(arr) {
  let smaller = arr[0];
  let larger = arr[0];
  for (number of arr) {
    smaller = smaller < number ? smaller : number;
    larger = larger > number ? larger : number;
  }
  return [smaller, larger];
}

let numbers = getSmallerLarger(array);
console.log(numbers);
