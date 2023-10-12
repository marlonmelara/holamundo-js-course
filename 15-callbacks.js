// Definición de la función 'sumar'
// Esta función recibe tres argumentos: 'a', 'b' y 'cb'.
// 'a' y 'b' son números que serán sumados,
// mientras que 'cb' es una función callback que será invocada con el resultado de la suma.
function sumar(a, b, cb) {
  const r = a + b; // Calcula la suma de 'a' y 'b'
  cb(r); // Invoca la función callback 'cb' pasando el resultado 'r' como argumento
}

// Definición de la función 'callback'
// Esta función recibe un argumento 'result', que es el resultado de la suma.
// Imprime el resultado en la consola.
function callback(result) {
  console.log("resultado", result);
}

// Llamada a la función 'sumar'
// Se pasan los números 2 y 3 para ser sumados, y la función 'callback' para ser invocada con el resultado.
// La función 'callback' será invocada dentro de 'sumar', y recibirá el resultado de la suma (5) como argumento,
// lo que resultará en la salida: "resultado 5" en la consola.
sumar(2, 3, callback);
