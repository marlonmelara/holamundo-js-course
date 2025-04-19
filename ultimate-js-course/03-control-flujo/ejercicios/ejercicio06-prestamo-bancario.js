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
let puntajeCredito = 651;
let tasaInteres;

// Usando condicional if-else
if (!tieneCuenta) {
  console.log("No tiene cuenta, por tanto no se puede ofrecer préstamo");
} else if (puntajeCredito < 650) {
  console.log("No se puede otorgar por tener un puntaje inferior a 650");
} else if (puntajeCredito >= 750) {
  tasaInteres = 10;
} else if (puntajeCredito >= 700 && puntajeCredito <= 749) {
  tasaInteres = 15;
} else {
  tasaInteres = 10;
}

if (tasaInteres >= 15) {
  tasaInteres = tasaInteres * 0.9;
}

if (tieneCuenta && puntajeCredito >= 650) {
  console.log(`Préstamo aprobado con una tasa de interés del ${tasaInteres}`);
}

// Usando condicional switch
switch (true) {
  case !tieneCuenta:
    console.log("No tiene cuenta, por tanto no se puede ofrecer préstamo");
    break;
  case puntajeCredito < 650:
    console.log("No se puede otorgar por tener un puntaje inferior a 650");
    break;
  case puntajeCredito >= 750:
    tasaInteres = 10;
    break;
  case puntajeCredito >= 700 && puntajeCredito <= 749:
    tasaInteres = 15;
    break;
  default:
    tasaInteres = 10;
}

if (tasaInteres >= 15) {
  tasaInteres = tasaInteres * 0.9;
}
if (tieneCuenta && puntajeCredito >= 650) {
  console.log(`Préstamo aprobado con una tasa de interés del ${tasaInteres}`);
}

//Usando Arrow Function
const verificarCuenta = (esCliente, puntajeCliente) => {
  if (!esCliente) {
    console.log("No tiene cuenta, por tanto no se puede ofrecer préstamo");
  } else {
    if (puntajeCliente < 650) {
      console.log("No se puede otorgar por tener un puntaje inferior a 650");
    } else if (puntajeCliente >= 750) {
      tasaInteresCliente = 10;
    } else if (puntajeCliente >= 700 && puntajeCliente < 749) {
      tasaInteresCliente = 15;
    } else {
      tasaInteresCliente = 10;
    }
  }
};

if (tasaInteresCliente >= 15) {
  tasaInteresCliente = tasaInteresCliente * 0.9;
}
if (tieneCuenta && puntajeCredito >= 650) {
  console.log(`Préstamo aprobado con una tasa de interés del ${tasaInteres}`);
}

verificarCuenta(false, 751);
