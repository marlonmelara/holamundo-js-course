/**
 * Función 'sumar' que calcula la suma de dos números y luego invoca una función callback con el resultado.
 *
 * @param {number} a - El primer número a sumar.
 * @param {number} b - El segundo número a sumar.
 * @param {function} cb - La función callback que será invocada con el resultado de la suma.
 */
function sumar(a, b, cb) {
  const r = a + b; // Calcula la suma de 'a' y 'b'
  cb(r); // Invoca la función callback 'cb' pasando el resultado 'r' como argumento
}

/**
 * Función 'callback' que recibe un argumento y lo imprime en la consola junto con la cadena "resultado".
 *
 * @param {number} result - El resultado que será impreso en la consola.
 */
function callback(result) {
  console.log("resultado", result); // Imprime "resultado" y el valor de 'result' en la consola
}

/**
 * Llamada a la función 'sumar' pasando dos números y la función 'callback' como argumentos.
 *
 * La función 'callback' será invocada dentro de 'sumar' con el resultado de la suma,
 * y imprimirá el mensaje "resultado" seguido del resultado en la consola.
 */
sumar(2, 3, callback); // Output: "resultado 5"
