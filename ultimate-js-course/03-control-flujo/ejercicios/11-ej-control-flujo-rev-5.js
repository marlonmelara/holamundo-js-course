// Ejercicio 5
/*
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
let tiempoMolido = 0;

// Usando condicional if-else
if (!tieneContenedor) {
  console.log(
    "Error, no se puede encender porque no ha colocado el contenedor"
  );
} else if (numeroTazas <= 0) {
  console.log("Se ha seleccionado mal el número de tazas");
} else {
  console.log("Iniciando el proceso de molido...");
  tiempoMolido = numeroTazas * TIEMPO_POR_TAZA;
  console.log(
    `Proceso iniciado para ${numeroTazas} tazas que tardara ${tiempoMolido} segundos en prepararse`
  );
}

// Usando condicional switch
switch (true) {
  case !tieneContenedor:
    console.log(
      "Error, no se puede encender porque no ha colocado el contenedor"
    );
    break;
  case numeroTazas <= 0:
    console.log("Se ha seleccionado mal el número de tazas");
    break;
  default:
    console.log("Iniciando el proceso de molido...");
    tiempoMolido = numeroTazas * TIEMPO_POR_TAZA;
    console.log(
      `Proceso iniciado para ${numeroTazas} tazas que tardara ${tiempoMolido} segundos en prepararse`
    );
}

// Usando condicional ternario
let mensaje = !tieneContenedor
  ? "Error, no se puede encender porque no ha colocado el contenedor"
  : numeroTazas <= 0
  ? "Se ha seleccionado mal el número de tazas"
  : `Iniciando el proceso de molido... Proceso iniciado para ${numeroTazas} tazas que tardara ${tiempoMolido} segundos en prepararse`;
console.log(mensaje);

// Usando una función
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
  let tiempoMolido = numeroTazas * TIEMPO_POR_TAZA;
  console.log(
    `Proceso iniciado para ${numeroTazas} tazas que tardará ${tiempoMolido} segundos en prepararse.`
  );
}

molerCafe(true, 2);

// Usando Arrow Functions
const molerCafeArrow = (tieneContenedor, numeroTazas) => {
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
  let tiempoMolido = numeroTazas * TIEMPO_POR_TAZA;
  console.log(
    `Proceso iniciado para ${numeroTazas} tazas que tardará ${tiempoMolido} segundos en prepararse.`
  );
};

molerCafeArrow(true, 2);

// Usando Arrow Functions con parámetros por defecto
const molerCafeArrowDefault = (
  tieneContenedor = true,
  numeroTazas = 2,
  tiempoPorTaza = 5
) => {
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
  let tiempoMolido = numeroTazas * tiempoPorTaza;
  console.log(
    `Proceso iniciado para ${numeroTazas} tazas que tardará ${tiempoMolido} segundos en prepararse.`
  );
};

molerCafeArrowDefault(true, 6, 4);
// molerCafeArrowDefault(false, 2, 5);
