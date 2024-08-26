// Declarar e inicializar una variable llamada "nombre" con el valor "Juan"
let nombre = "Juan";

nombre;

// Declarar una variable llamada "edad" sin inicializarla
let edad;

edad;

// Asignar un valor a la variable "edad"
edad = 25;

edad;

// Declarar e inicializar una variable tipo arreglo
let elementos = ["Computadora", "Celular"];

elementos;

// Declarar e inicializar una variable tipo objeto
let persona = {
  nombre: "Marlon",
  edad: 48,
};

persona;

// Funciones

// Declaración de una función con nombre
function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

// Llamada a la función con nombre (declarativa)
saludar("Juan"); // Output: ¡Hola, Juan!

// Declaración de una función anónima asignada a una variable
var sumar = function (a, b) {
  return a + b;
};

// Uso de la función anónima (expresión)
var resultado = sumar(3, 7);
console.log(resultado); // Output: 8

// Declarativa
function miFuncion() {
  return 3;
}

// Expresión
var miFuncion = function (a, b) {
  return a + b;
};

// Declarativa
function saludar(nombre) {
  console.log(`Hola ${nombre}`);
}

saludar("Diego");

// Expresión
var nombre1 = function (nombre) {
  console.log(`Hola ${nombre}`);
};

nombre1("Diego");

/* En este desafío encontrarás una función llamada solution que recibe un parámetro llamado valor. Debes encontrar el tipo de dato del parámetro valor y retornarlo desde la función solution.

Recuerda que el parámetro valor será distinto por cada distinta forma en que ejecutemos la función solution. */

function solution(valor) {
  return typeof valor;
}

solution(1);
solution("Marlon");
solution(true);

function solution(valor) {
  console.log(typeof valor);
  return typeof valor;
}
