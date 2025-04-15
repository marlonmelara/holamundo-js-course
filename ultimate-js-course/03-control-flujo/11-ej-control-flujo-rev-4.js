// Ejercicio 4
/*
  Tenemos una batería portátil, capaz de proporcionar diferente potencia
  dependiendo del dispositivo que se conecte.
  - Si conectamos un teléfono: 25 watts
  - Si conectamos un MacBook: 65 watts
  - Si conectamos una lámpara USB: 5 watts
  - Para cualquier otro dispositivo: 0 watts

  Entradas:
  - Una variable llamada dispositivo (string) que indica el dispositivo conectado.
  - Una variable llamada potencia (número), que inicia sin valor.

  Salidas:
  - Determinar la potencia que proporcionará la batería (en watts)
  - Mostrar este dato en la consola.
*/

// Usando IF (control de flujo)
let device = "pc";
let power = 0;

if (device === "Teléfono") {
  power = 25;
  console.log(`El dispositivo utilizará ${power} watts de energía.`);
} else if (device === "MacBook") {
  power = 65;
  console.log(`El dispositivo utilizará ${power} watts de energía.`);
} else if (device === "Lámpara USB") {
  power = 5;
  console.log(`El dispositivo utilizará ${power} watts de energía.`);
} else {
  console.log(`Dispositivo desconocido, la potencia es ${power} watts`);
}

// Usando función clásica
function getPowerForDevice(device) {
  let power = 0;

  if (device === "Teléfono") {
    power = 25;
  } else if (device === "MacBook") {
    power = 65;
  } else if (device === "Lámpara USB") {
    power = 5;
  }

  return power;
}

console.log(`La potencia es ${getPowerForDevice("Teléfono")} watts`);

// Usando función clásica con Switch
function getDevicePowerSwitch(device) {
  let power = 0;

  switch (device) {
    case "Teléfono":
      power = 25;
      break;
    case "MacBook":
      power = 65;
      break;
    case "Lámpara USB":
      power = 5;
      break;
    default:
      power = 0;
  }

  return power;
}

console.log(`La potencia es ${getDevicePowerSwitch("Otro")} watts`);

// Arrow function usando objeto
const getPowerFromDevice = (device) => {
  const powerMap = {
    Teléfono: 25,
    MacBook: 65,
    "Lámpara USB": 5,
  };

  return powerMap[device] || 0;
};

console.log(`La potencia es ${getPowerFromDevice("Lámpara USB")} watts`);
