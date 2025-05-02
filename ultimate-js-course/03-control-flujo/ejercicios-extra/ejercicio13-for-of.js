// Ejercicio 1:
// Dado un array de números, crea una función que devuelva la suma de todos los números utilizando un bucle for...of.

let numbers = [0, 1, 2, 3, 4];

const sumArray = (arr) => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};

let result = sumArray(numbers);
console.log(result); // El resultado será 10

// Ejercicio 2:
// Dado un string, crea una función que cuente cuántas vocales contiene usando un bucle for...of.

// Ejercicio 3:
// Dado un array de palabras, crea una función que devuelva un nuevo array con las palabras que tienen más de 5 caracteres, usando for...of.
