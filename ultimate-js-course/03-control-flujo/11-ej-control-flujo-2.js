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
let estaEncendida = true;
let temperatura = 0;

if (!tieneAgua) {
  console.log("La pava no tiene agua, no puede encender");
}
