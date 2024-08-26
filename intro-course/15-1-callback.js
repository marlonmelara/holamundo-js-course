// https://youtu.be/kjCH7vvISsE
/**
 * Función 'modify' que modifica un array dado, añadiendo el elemento "midu" al final del array,
 * y luego invoca una función callback con el array modificado como argumento.
 *
 * @param {Array} array - El array que será modificado.
 * @param {function} callback - La función callback que será invocada con el array modificado.
 */
function modify(array, callback) {
  // hacemos algo...
  array.push("midu"); // Añade el elemento "midu" al final del array.
  // después de hacer algo...
  callback(array); // Invoca la función callback 'callback' pasando el array modificado como argumento.
}

// Definición del array 'names' que contiene tres elementos.
const names = ["pepe", "pipo", "ana"];

/**
 * Llamada a la función 'modify' pasando el array 'names' y una función anónima como argumentos.
 *
 * La función anónima se define en el lugar y se pasa como argumento a 'modify'.
 * Esta función anónima será invocada dentro de 'modify' con el array modificado,
 * y imprimirá un mensaje en la consola indicando la nueva longitud del array.
 */
modify(names, function (array) {
  console.log(
    `He modificado el array y ahora es de ${array.length} elementos!` // Imprime el mensaje y la nueva longitud del array en la consola.
  );
});
