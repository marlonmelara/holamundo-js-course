// Ejercicio 5
/*
  ¿Cómo funciona?
  En los molinos de café en grano podemos seleccionar cuántas tazas deseamos.
  Aquí primero verificaremos si el molino tiene el contenedor de café molido.
  Después, verificamos cuántas tazas necesita el usuario.
  Con base en ello, determinamos cuánto tiempo debe funcionar el molino
  para entregar la cantidad de café molido adecuada.

  Entradas:
  - Una variable booleana que indique si el molino tiene el contenedor.
  - El número de tazas que necesitamos (número entero).
  - Una constante con el tiempo en segundos que tarda el molino por cada taza.

  Salidas:
  - Si el molino no tiene contenedor, debemos imprimir un mensaje de error
    avisando que no se puede encender.
  - Si el número de tazas es menor o igual a 0, debemos imprimir que no se ha
    seleccionado un número de tazas válido.
  - Si todo está correcto (el molino sí tiene contenedor y la cantidad de tazas > 0),
    imprimimos que se está iniciando el proceso y luego cuántas tazas se prepararán
    y en cuánto tiempo.
*/

let tieneContenedor = true;
let numeroTazas = 2;
const TIEMPO_POR_TAZA = 5;

if (!tieneContenedor) {
  console.log(
    "Error, no se puede encender porque no ha colocado el contenedor"
  );
} else if (numeroTazas <= 0) {
  console.log("Se ha seleccionado mal el número de tazas");
} else {
  console.log("Iniciando el proceso de molido...");
  console.log(
    `Proceso iniciado para ${numeroTazas} tazas que tardara ${
      numeroTazas * TIEMPO_POR_TAZA
    } segundos en prepararse`
  );
}

// Con una función
function molerCafe(tieneContenedor, numeroTazas) {
  if (!tieneContenedor) {
    console.log(
      "Error: no se puede encender porque no ha colocado el contenedor."
    );
    return;
  }

  if (numeroTazas <= 0) {
    console.log("Se ha seleccionado mal el número de tazas");
    return;
  }
  console.log("Iniciando el proceso de molido...");
  console.log(
    `Proceso iniciado para ${numeroTazas} tazas que tardará ${
      numeroTazas * TIEMPO_POR_TAZA
    } segundos en prepararse.`
  );
}

molerCafe(true, 2);

// Ejercicio 6
/*
  Trabajamos en un banco que ofrece préstamos a muchos clientes; algunos
  de ellos tienen cuenta en nuestro banco.
  Queremos determinar:
    1) Si podemos o no ofrecer un préstamo (basado en el puntaje de crédito).
    2) A qué tasa de interés, si es que se aprueba.
    3) Si el cliente tiene cuenta con nosotros y la tasa es >= 15%,
       le aplicamos un descuento del 10% sobre dicha tasa.

  Reglas de puntaje de crédito y su tasa de interés base:
    - 750 o mayor    => 10%
    - 700 a 749      => 15%
    - 650 a 699      => 10%
    - Menor a 650    => NO se otorga préstamo

  Descuento:
    - Solo aplicable si el cliente tiene cuenta (true)
    - Y solo si la tasa obtenida es 15% o mayor,
      en ese caso se reduce la tasa en un 10% de su valor
      (por ejemplo, 15% pasa a 13.5%).

  Entradas:
    - tieneCuenta (boolean): indica si el solicitante es cliente del banco.
    - puntajeCredito (number): el puntaje de crédito del solicitante.
    - tasaInteres (number): variable para asignar la tasa resultante.

  Salidas:
    - Mensaje indicando si se aprueba o no el préstamo.
    - En caso de aprobación, se muestra la tasa de interés final.
*/

let tieneCuenta = true;
let puntajeCredito = 749;
let tasaInteres;

if (!tieneCuenta) {
  console.log("No tiene cuenta, por tanto no se puede ofrecer préstamo");
} else {
  if (puntajeCredito < 650) {
    console.log("No se puede otorgar por tener un puntaje inferior a 650");
  } else if (puntajeCredito >= 750) {
    tasaInteres = 10;
  } else if (puntajeCredito >= 700 && puntajeCredito <= 749) {
    tasaInteres = 15;
  } else {
    tasaInteres = 10;
  }
}

if (tasaInteres >= 15) {
  tasaInteres = tasaInteres * 0.9;
}

if (tieneCuenta && puntajeCredito >= 650) {
  console.log(`Préstamo aprobado con una tasa de interés del ${tasaInteres}`);
}
