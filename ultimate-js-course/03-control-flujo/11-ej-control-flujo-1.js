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

console.log("Ejercicio 1");

// Usando If
let tamanoArchivoUsuario = 1;
const tamanoArchivoMaximo = 5;

if (tamanoArchivoUsuario < tamanoArchivoMaximo) {
  console.log("El archivo cumple con el tamaño permitido.");
} else {
  console.log("El archivo ha excedido el tamaño máximo permitido.");
}

// Usando una función
function verificar(tamanoArchivoUsuario, tamanoArchivoMaximo) {
  if (tamanoArchivoUsuario < tamanoArchivoMaximo) {
    console.log("El archivo cumple con el tamaño permitido.");
  } else {
    console.log("El archivo ha excedido el tamaño máximo permitido.");
  }
}

verificar(tamanoArchivoUsuario, tamanoArchivoMaximo);

// Refactorizado con mejoras
const TAMANO_MAXIMO_MB = 5;

const verificarTamanoArchivo = (tamanoEnMB) => {
  return tamanoEnMB <= TAMANO_MAXIMO_MB
    ? "El archivo cumple con el tamaño permitido."
    : "El archivo ha excedido el tamaño máximo permitido.";
};

console.log(verificarTamanoArchivo(1)); // ✅
console.log(verificarTamanoArchivo(5)); // ✅
console.log(verificarTamanoArchivo(6)); // ❌

// Ejercicio 2: Contraseña más segura
/*
  ¿Cómo funciona?
  Trabajaremos en el registro de nuestros usuarios en nuestra aplicación.
  Lo que necesitaremos será no permitir que creen su cuenta con una
  contraseña insegura. Por lo tanto, si la contraseña tiene menos de
  12 caracteres, no les permitiremos crear su cuenta.

  Entradas.
  Crearemos una variable que tendrá la contraseña con una longitud
  determinada (menor a 12 caracteres). Otra variable contendrá el número
  de caracteres mínimos que pediremos a los usuarios.

  Después, haremos la evaluación de la longitud de la contraseña
  e imprimiremos en la consola el mensaje correspondiente.

  Salidas.
  Al realizar la comparación, se mostrará en la consola un mensaje
  dependiendo de si la longitud de la contraseña es menor, igual o mayor
  que la longitud mínima definida.
*/

console.log("Ejercicio 2");

// Usando If
let contrasena = "123456789";
const caracteresMinimos = 12;

if (contrasena.length >= caracteresMinimos) {
  console.log("Es una contraseña segura");
} else {
  console.log("Necesitas crear una contraseña con al menos 12 caracteres");
}

// Otra forma de usar if
let contrasenia = "seguro";
let longitudMinima = 12;

// Evaluamos la longitud de la contraseña
if (contrasenia.length < longitudMinima) {
  console.log(
    "La contraseña es demasiado corta. Necesita al menos " +
      longitudMinima +
      " caracteres."
  );
} else if (contrasenia.length === longitudMinima) {
  console.log(
    "La contraseña tiene la longitud exacta requerida (" +
      longitudMinima +
      " caracteres)."
  );
} else {
  console.log(
    "La contraseña cumple o supera el mínimo de " +
      longitudMinima +
      " caracteres."
  );
}

// Refactorizado con mejoras
const MIN_CARACTERES = 12;

const esContrasenaSegura = (contrasena) => {
  return contrasena.length >= MIN_CARACTERES
    ? "Es una contraseña segura"
    : "Necesitas crear una contraseña con al menos 12 caracteres";
};

console.log(esContrasenaSegura("123456789")); // ❌
console.log(esContrasenaSegura("soySegura12345")); // ✅
