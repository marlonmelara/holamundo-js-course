// Ejercicio 1: Tamaño máximo de carga
/*
  ¿Cómo funciona?
  Nuestro sistema solo aceptará aquellas imágenes que pesen menos de 5 MB.

  Tenemos que determinar si es que todas las imágenes que ha pasado el usuario
  son menores o iguales al tamaño máximo permitido por nuestro servidor.
  Si esto no es así, le notificaremos al usuario que el archivo ha excedido
  el tamaño máximo.

  Entradas.
  Definiremos 2 variables, una para el tamaño del archivo y otra para
  el tamaño máximo permitido de nuestro sistema.

  Salidas.
  Imprimiremos el texto: "El archivo cumple con el tamaño permitido."
  si es que pesa menos o igual de 5 MB,
  o : "El archivo ha excedido el tamaño máximo permitido."
  si es que pesa más de este tamaño.
*/

// Usando IF (control de flujo)
let fileSize = 10; // Tamaño del archivo en MB
const MAX_FILE_SIZE = 5;

if (fileSize <= MAX_FILE_SIZE) {
  console.log("El archivo cumple con el tamaño permitido.");
} else {
  console.log(
    `El archivo ha excedido el tamaño permitido. Debe ser menor o igual a ${MAX_FILE_SIZE} MB.`
  );
}

// Usando función clásica
function checkFile(fileSize) {
  if (fileSize <= MAX_FILE_SIZE) {
    console.log("El archivo cumple con el tamaño permitido.");
  } else {
    console.log(
      `El archivo ha excedido el tamaño permitido. Debe ser menor o igual a ${MAX_FILE_SIZE} MB.`
    );
  }
}
checkFile(10);

// Usando Arrow Fuction
const checkFileSize = (fileSizeMB) => {
  if (fileSizeMB <= MAX_FILE_SIZE) {
    return "El archivo cumple con el tamaño permitido.";
  } else {
    return `El archivo ha excedido el tamaño permitido. Debe ser menor o igual a ${MAX_FILE_SIZE} MB.`;
  }
};

console.log(checkFileSize(5));

//Usando Arrow Fuction y ternarias
const checkFileSizeWithReturn = (fileSizeMB) => {
  return fileSizeMB <= MAX_FILE_SIZE
    ? "El archivo cumple con el tamaño permitido."
    : `El archivo ha excedido el tamaño permitido. Debe ser menor o igual a ${MAX_FILE_SIZE} MB.`;
};

console.log(checkFileSizeWithReturn(10));
