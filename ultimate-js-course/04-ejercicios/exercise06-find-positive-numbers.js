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

// Usando for of y operadores ternarios
const getPositiveCount2 = (arr) => {
  let count = 0;

  for (let num of arr) {
    count += num > 0 ? 1 : 0;
  }

  return count;
};

let positiveCount2 = getPositiveCount2(array);
console.log(positiveCount2);

/**
Encontrar cantidad de números
negativos */

const getNegativeCount = (arr) => {
  let count = 0;
  for (let num of arr) {
    count += num < 0 ? 1 : 0;
  }

  return count;
};

let negativeCount = getNegativeCount(array);
console.log(negativeCount);
