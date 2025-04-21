/**
Crear algoritmo que devuelva número
mayor y menor de un array */

let array = [2, 5, 7, 15, -5, -100, 55];

const getMinMax = (arr) => {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return { min, max };
};

let numbers = getMinMax(array);
console.log(numbers);
