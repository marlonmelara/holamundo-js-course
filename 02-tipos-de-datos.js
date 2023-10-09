console.log("Hola mundo!");

// Mi primera variable Cadena de texto
let miPrimeraVariable = "Mi primera variable!";
console.log(miPrimeraVariable);

// Mutualidad
miPrimeraVariable = "Esto ha cambiado";
console.log(miPrimeraVariable);

// Número
let miNumero = 0;
let miNumero2 = 12;
let miNumero3 = -258;

// Boolean
let miBoolean = true;
let miOtroBool = false;

console.log(miNumero, miNumero2, miNumero3, miBoolean, miOtroBool);

// Null y undef
let nulo = null;
let undef;

console.log(nulo, undef, 12, "ciao");

// Objeto, es una agrupación de datos que hacen sentido entre sí. Los objetos no tienen variables, sino propiedades.

// Objeto vacio
const miPrimerObjeto = {};

// Objeto con propiedades
const miObjeto = {
  unNumero: 12,
  unString: "Esta es una cadena de caracteres",
  unaCondicion: true,
};

console.log(miObjeto);
console.log(miObjeto.unNumero);

// Arreglo vacio
const arrVacio = [];

// Arreglo con elementos de cualquier tipo
const arr = [1, 2, "Hola", "Mundo", miObjeto];
console.log(arrVacio, arr);

arr.push(5);
console.log(arr);

arrVacio.push(0);
arrVacio.push(10);
arrVacio.push("Hola mundo");

console.log(arrVacio);
