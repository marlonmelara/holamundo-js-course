// Ejercicio 8

/*
Ejercicio 8: Control de acceso a edificio

Estás implementando el sistema de control de acceso para un edificio corporativo.
Cada visitante debe indicar si tiene cita previa, y su edad.

El sistema solo permitirá el ingreso si:
  - Tiene una cita programada.
  - Su edad es igual o mayor a 18 años.

En caso de no cumplir ambos requisitos, no podrá ingresar al edificio.

Entradas:
- Una variable booleana que indique si el visitante tiene cita previa (hasAppointment).
- Una variable numérica que contenga la edad del visitante (age).

Salidas:
- Si cumple ambas condiciones: imprimir "Acceso permitido".
- Si no cumple alguna: imprimir "Acceso denegado. Requiere cita y ser mayor de edad".
*/

// Usando condicional if-else
let hasAppointment = true;
let age = 25;

if (hasAppointment && age >= 18) {
  console.log("Acceso permitido");
} else {
  console.log("Acceso denegado. Requiere cita y ser mayor de edad");
}

//Usando condicional switch
switch (false) {
  case hasAppointment && age >= 18:
    console.log("Acceso permitido");
    break;
  default:
    console.log("Acceso denegado. Requiere cita y ser mayor de edad");
}

// Usando Arrow Function
const controlAcceso = (hasAppointment, age) => {
  if (hasAppointment && age >= 18) {
    console.log("Acceso permitido");
  } else {
    console.log("Acceso denegado. Requiere cita y ser mayor de edad");
  }
};

controlAcceso(true, 25);

// Usando Arrow Fuction y operador ternario
const getAccessMessage = (hasAppointment, age) => {
  return hasAppointment && age >= 18
    ? "Acceso permitido"
    : "Acceso denegado. Requiere cita y ser mayor de edad";
};

console.log(getAccessMessage(true, 25));
console.log(getAccessMessage(false, 25));
