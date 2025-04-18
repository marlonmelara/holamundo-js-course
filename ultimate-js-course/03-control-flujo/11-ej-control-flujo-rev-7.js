// Ejercicio 7
/*
  Tenemos un alimentador automático para perros y gatos. Dependiendo
  del tipo de mascota (perro o gato) y de su peso, determinamos
  cuántos gramos de alimento liberará el alimentador.

  Entradas:
  - tipoMascota (string): "perro" o "gato".
  - peso (number): Peso de la mascota en kilogramos.
  - cantidadComida (number): Aquí asignaremos los gramos de alimento.

  Reglas:
  - Perro:
      < 5 kg      => 100g
      5 - 9.99kg  => 200g
      10 - 19.99kg => 300g
      ≥ 20 kg     => 400g
  - Gato:
      < 3 kg      => 50g
      3 - 5.99kg  => 100g
      ≥ 6 kg      => 150g

  Salida:
  - Imprimimos la cantidad de gramos que el alimentador liberará
    de acuerdo al tipo de mascota y su peso.
*/

// Usando Arrow Function
const calcularComida = (tipoMascota, pesoMascota) => {
  let cantidadComida;

  if (tipoMascota === "perro") {
    if (pesoMascota < 5) {
      cantidadComida = 100;
    } else if (pesoMascota < 10) {
      cantidadComida = 200;
    } else if (pesoMascota < 20) {
      cantidadComida = 300;
    } else {
      cantidadComida = 400;
    }
  } else if (tipoMascota === "gato") {
    if (pesoMascota < 3) {
      cantidadComida = 50;
    } else if (pesoMascota < 6) {
      cantidadComida = 100;
    } else {
      cantidadComida = 150;
    }
  } else {
    console.log("Tipo de mascota indefinido, no se puede liberar alimento");
    return 0; // Previene que se use undefined
  }

  console.log(`Tu mascota tendrá ${cantidadComida} gramos de alimento.`);
  return cantidadComida;
};

calcularComida("perro", 4);
