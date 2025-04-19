// Ejercicio 10
/*
-- Calculadora de envío

Queremos calcular el costo de envío de un producto dependiendo del destino
y si el usuario es cliente premium.

Las reglas son las siguientes:

- Si el destino es "nacional" y el usuario NO es premium → envío cuesta $50
- Si el destino es "nacional" y el usuario ES premium → envío cuesta $0
- Si el destino es "internacional" y el usuario NO es premium → envío cuesta $200
- Si el destino es "internacional" y el usuario ES premium → envío cuesta $100

Entradas:
- Una variable `destino` que puede ser "nacional" o "internacional"
- Una variable booleana `esPremium` que indica si el cliente es premium o no

Salidas:
- Imprimir: "El costo de envío es: $[valor]"
*/

let destino = "internacional";
let esPremium = false;
let valor;

// Usando if-else
if (destino === "nacional" && !esPremium) {
  valor = 50;
} else if (destino === "nacional" && esPremium) {
  valor = 0;
} else if (destino === "internacional" && !esPremium) {
  valor = 200;
} else {
  valor = 100;
}

console.log(`El costo de envío es: $${valor}`);

// Versión con if + operador ternario
if (destino === "nacional") {
  valor = esPremium ? 0 : 50;
} else if (destino === "internacional") {
  valor = esPremium ? 100 : 200;
}

console.log(`El costo de envío es: $${valor}`);

// Usando Arrow function + operador ternario
const calcularEnvio = (destino, esPremium) => {
  if (destino === "nacional") {
    return esPremium ? 0 : 50;
  } else if (destino === "internacional") {
    return esPremium ? 100 : 200;
  } else {
    return "Destino no válido";
  }
};

console.log(`El costo de envío es: $${calcularEnvio("internacional", false)}`);
