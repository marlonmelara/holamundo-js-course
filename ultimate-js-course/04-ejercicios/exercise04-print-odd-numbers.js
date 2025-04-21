/**
 * Crear un algoritmo que imprima todos los números impares del 0 al 10.
 */

// Usando un bucle while
let i = 0;
while (i <= 10) {
  if (i % 2 !== 0) {
    console.log("impar", i);
  }
  i++;
}

// Usando un bucle for
for (let i = 0; i <= 10; i++) {
  if (i % 2 !== 0) {
    console.log("impar", i);
  }
}

// Usando un bucle do while
let j = 0;
do {
  if (j % 2 !== 0) {
    console.log("impar", j);
  }
  j++;
} while (j <= 10);

// Usando un bucle for of
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbers) {
  if (number % 2 !== 0) {
    console.log("impar", number);
  }
}

// Usando un bucle for in
const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const index in numbers2) {
  if (numbers2[index] % 2 !== 0) {
    console.log("impar", numbers2[index]);
  }
}

// Usando un bucle forEach
const numbers3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers3.forEach((number) => {
  if (number % 2 !== 0) {
    console.log("impar", number);
  }
});

// Usando un bucle map
const numbers4 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = numbers4
  .map((number) => {
    if (number % 2 !== 0) {
      return number;
    }
  })
  .filter(Boolean); // Filtrar los valores undefined
console.log("impares", oddNumbers);

// Usando un bucle filter
const numbers5 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers2 = numbers5.filter((number) => number % 2 !== 0);
console.log("impares", oddNumbers2);

// Usando un bucle reduce
const numbers6 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers3 = numbers6.reduce((acc, number) => {
  if (number % 2 !== 0) {
    acc.push(number);
  }
  return acc;
}, []);
console.log("impares", oddNumbers3);
