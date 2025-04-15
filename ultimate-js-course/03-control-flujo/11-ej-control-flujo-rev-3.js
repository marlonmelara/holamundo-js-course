//Ejercicio 3
/*
  ¿Cómo funciona?
  Tendrás que generar el sistema de control de una pava eléctrica / hervidor eléctrico de agua.

  Este ejercicio tendrá varios pasos con varias evaluaciones:

  - Verificamos si la pava tiene agua. Si no tiene, imprimimos un mensaje y no podemos encender.
  - Si sí tiene agua, cambiamos el estado de encendida a true e imprimimos que se ha encendido.
  - Mediante un ciclo, vamos sumando 25 a la temperatura en cada iteración
    e imprimimos el nuevo valor de la temperatura.
  - Cuando la temperatura alcance 100 grados, cambiamos el estado de encendida a false
    y mostramos el mensaje de que ahora el agua está caliente.

  Entradas:
  1) Una variable booleana para saber si la pava tiene agua.
  2) Una variable booleana para saber si la pava está encendida, iniciando en false.
  3) Una variable numérica para la temperatura, iniciando en 0.

  Salidas:
  - "La pava está encendida"
  - "Calentando agua... la temperatura es de: X grados" (por cada incremento)
  - "La temperatura de la pava ha llegado al máximo, la pava se apagará"
  - "Ahora tienes agua caliente a 100 grados"
  - O, si no tiene agua: "La pava no tiene agua, no puede encender"
*/

// Usando IF (control de flujo)
let hasWater = true;
let isOn = false;
let temperature = 0;

if (!hasWater) {
  console.log("La pava no tiene agua, no puede encender.");
} else if (!isOn) {
  isOn = true;
  console.log("La pava está encendida");
}

while (temperature < 100) {
  console.log(
    `Calentando agua... la temperatura es de: ${temperature} grados.`
  );
  temperature = temperature + 25;
  if (temperature >= 100) {
    isOn = false;
    console.log(
      `La temperatura de la pava ha llegado al máximo, la pava se apagará.`
    );
    console.log(`Ahora tienes agua caliente a ${temperature} grados.`);
  }
}

// Usando función clásica
const MAX_TEMP = 100;
const TEMP_STEP = 25;

function startKettle(hasWater) {
  let isOn = false;
  let temperature = 0;

  if (!hasWater) {
    console.log("La pava no tiene agua, no puede encender.");
    return;
  }

  isOn = true;
  console.log("La pava está encendida.");

  while (temperature < MAX_TEMP) {
    console.log(
      `Calentando agua... la temperatura es de: ${temperature} grados`
    );
    temperature += TEMP_STEP;
  }

  isOn = false;
  console.log(
    "La temperatura de la pava ha llegado al máximo, la pava se apagará."
  );
  console.log(`Ahora tienes agua caliente a ${temperature} grados.`);
}

startKettle(true);

// Usando Arrow Function
const TEMPERATURA_MAXIMA = 100;
const INCREMENTO_TEMPERATURA = 25;

const encenderPavaElectrica = (tieneAgua) => {
  let estaEncendida = false;
  let temperaturaActual = 0;

  if (!tieneAgua) {
    console.log("La pava no tiene agua, no puede encender.");
    return;
  }

  estaEncendida = true;
  console.log("La pava está encendida.");

  while (temperaturaActual < TEMPERATURA_MAXIMA) {
    console.log(
      `Calentando agua... la temperatura es de: ${temperaturaActual} grados`
    );
    temperaturaActual += INCREMENTO_TEMPERATURA;
  }

  estaEncendida = false;
  console.log(
    "La temperatura de la pava ha llegado al máximo, la pava se apagará."
  );
  console.log(`Ahora tienes agua caliente a ${temperaturaActual} grados.`);
};

encenderPavaElectrica(true);

// Versión con control de incremento de temperatura y limite de temperatura
function runCustomKettle(hasWater, maxTemp, step) {
  let isPoweredOn = false;
  let currentTemp = 0;

  if (!hasWater) {
    console.log("La pava no tiene agua, no puede encender.");
    return;
  }

  isPoweredOn = true;
  console.log("La pava está encendida.");

  while (currentTemp < maxTemp) {
    console.log(
      `Calentando agua... la temperatura es de: ${currentTemp} grados`
    );
    currentTemp += step;
  }

  isPoweredOn = false;
  console.log(
    "La temperatura de la pava ha llegado al máximo, la pava se apagará."
  );
  console.log(`Ahora tienes agua caliente a ${currentTemp} grados.`);
}

runCustomKettle(true, 90, 30); // 🔧 Puedes ajustar parámetros aquí
