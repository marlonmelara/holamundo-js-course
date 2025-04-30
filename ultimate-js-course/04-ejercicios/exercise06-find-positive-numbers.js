/**
Crear algoritmo que devuelva cantidad
de números positivos */

let array = [2, 5, 7, 15, -5, -100, 55];

const getPositiveCount = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    }
  }

  return count;
};

let positiveCount = getPositiveCount(array);
console.log(positiveCount);
