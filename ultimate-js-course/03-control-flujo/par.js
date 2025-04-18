// Definimos la función esPar que determina si un número es par
function esPar(numero) {
  // Retorna true si el número es divisible entre 2 (es par), de lo contrario retorna false
  return numero % 2 === 0;
}

// Llamamos a la función esPar con diferentes números y mostramos el resultado en la consola
console.log(esPar(4)); // true, porque 4 es divisible entre 2
console.log(esPar(5)); // false, porque 5 no es divisible entre 2
console.log(esPar(10)); // true, porque 10 es divisible entre 2
console.log(esPar(15)); // false, porque 15 no es divisible entre 2
