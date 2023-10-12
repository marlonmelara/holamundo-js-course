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
 * Llamada a la función 'sumar' pasando dos números y una función anónima como argumentos.
 *
 * La función anónima se define en el lugar y se pasa como argumento a 'sumar'.
 * Esta función anónima será invocada dentro de 'sumar' con el resultado de la suma,
 * y imprimirá el mensaje en la consola.
 */
sumar(2, 3, function (r) {
  console.log("Soy una función anonima y mi resultado es", r); // Imprime el mensaje y el resultado en la consola
});
