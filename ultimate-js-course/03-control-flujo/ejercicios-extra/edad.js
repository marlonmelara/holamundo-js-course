let edad = 18; // Edad de la persona
let nombre = "Sofía";
let esEstudiante = true;
let carrera = "Psicología";
let universidad = "Universidad de Lima";

if (edad >= 18) {
  console.log(`${nombre} tiene ${edad} años, por tanto es mayor de edad.`);
} else {
  console.log(`${nombre} tiene ${edad} años, por tanto es menor de edad.`);
}

if (esEstudiante) {
  console.log(`${nombre} es estudiante.`);
} else {
  console.log(`${nombre} no es estudiante.`);
}

if (carrera === "Psicología") {
  console.log(`${nombre} estudia ${carrera}.`);
} else {
  console.log(`${nombre} no estudia Psicología.`);
}

// = simbolo de asgnación
// == comparador de igualdad
// === comparador de igualdad estricta
// != comparador de desigualdad
// !== comparador de desigualdad estricta
// < menor que
// > mayor que
// <= menor o igual que
