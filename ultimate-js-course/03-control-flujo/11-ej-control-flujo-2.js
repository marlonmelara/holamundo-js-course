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

let tieneAgua = true;
let estaEncendida = false;
let temperatura = 0;

if (!tieneAgua) {
  console.log("La pava no tiene agua, no puede encender");
} else {
  estaEncendida = true;
  console.log("La pava esta encendida");
}

while (temperatura < 100) {
  console.log(`Calentando agua... la temperatura es de ${temperatura}° grados`);
  temperatura = temperatura + 25;
  if (temperatura >= 100) {
    console.log(
      "La temperatura de la pava ha llegado al máximo, la pava se apagará"
    );
    encedido = false;
    console.log(`Ahora tienes el agua a ${temperatura}° grados`);
  }
}
// Ejercicio 4
/*
  ¿Cómo funciona?
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

// Dispositivo y array de potencias
let dispositivo = "Teléfono";
let potencia = [0, 5, 25, 65];
// Indices:
//   0 -> Cualquier dispositivo
//   1 -> Lámpara USB
//   2 -> Teléfono
//   3 -> MacBook

if (dispositivo === "Lampara USB") {
  console.log(`La potencia es ${potencia[1]} watts`);
} else if (dispositivo === "Teléfono") {
  console.log(`La potencia es ${potencia[2]} watts`);
} else if (dispositivo === "MacBook") {
  console.log(`La potencia es ${potencia[3]} watts`);
} else {
  // Si no coincide con ninguno de los anteriores
  console.log("Dispositivo desconocido, la potencia es 0 watts");
}

// Usando Switch
switch (dispositivo) {
  case "Cualquier dispositivo":
    console.log(`La potencia es ${potencia[0]} watts`);
    break;
  case "Lampara USB":
    console.log(`La potencia es ${potencia[1]} watts`);
    break;
  case "Teléfono":
    console.log(`La potencia es ${potencia[2]} watts`);
    break;
  case "MacBook":
    console.log(`La potencia es ${potencia[3]} watts`);
    break;
  default:
    console.log("Dispositivo desconocido, la potencia es 0 watts");
    break;
}
