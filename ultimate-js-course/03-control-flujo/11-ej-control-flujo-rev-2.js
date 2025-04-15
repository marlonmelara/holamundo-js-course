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

// Usando IF (control de flujo)
let password = "clave";
const MIN_CHARACTERS = 12;

if (password.length >= MIN_CHARACTERS) {
  console.log("Es una contraseña segura.");
} else {
  console.log("Necesitas crear una contraseña con al menos 12 caracteres.");
}

// Usando función clásica
const checkPasswordStrength = function (password) {
  if (password.length >= MIN_CHARACTERS) {
    return "Es una contraseña segura.";
  } else {
    return "Necesitas crear una contraseña con al menos 12 caracteres.";
  }
};

console.log(checkPasswordStrength("holajavascript"));

// Usando Arrow Fuction
const checkPassword = (password) => {
  if (password.length >= MIN_CHARACTERS) {
    return "Es una contraseña segura.";
  } else {
    return "Necesitas crear una contraseña con al menos 12 caracteres.";
  }
};

console.log(checkPassword("hola123456678"));

// Usando operadores ternarios
const checkPasswordStrengthMessage = (password) => {
  return password.length >= MIN_CHARACTERS
    ? "Es una contraseña segura."
    : "Necesitas crear una contraseña con al menos 12 caracteres.";
};

console.log(checkPasswordStrengthMessage("123456")); // Resultado dinámico
