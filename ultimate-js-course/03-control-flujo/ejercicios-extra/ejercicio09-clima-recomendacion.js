code; // Ejercicio 9

/*
Ejercicio 9: Detector de clima

Queremos mostrar un mensaje en pantalla que recomiende al usuario qué tipo de ropa usar dependiendo de la temperatura actual.

El sistema debe evaluar el valor de la temperatura y responder con uno de los siguientes mensajes:

- Si la temperatura es menor a 10°C → "Hace frío, lleva abrigo"
- Si la temperatura está entre 10°C y 20°C (inclusive) → "Clima fresco, lleva una chaqueta ligera"
- Si la temperatura está entre 21°C y 30°C (inclusive) → "Clima templado, puedes vestir cómodo"
- Si la temperatura es mayor a 30°C → "Hace calor, usa ropa ligera"

Entradas:
- Una variable numérica llamada `temperatura` que representa los grados Celsius actuales.

Salidas:
- Imprimir el mensaje correspondiente en función del rango de temperatura.
*/

// Usando condicional if-else
let temperatura = 21;
if (temperatura > 30) {
  console.log("Hace calor, usa ropa ligera");
} else if (temperatura >= 21) {
  console.log("Clima templado, puedes vestir cómodo");
} else if (temperatura >= 10) {
  console.log("Clima fresco, lleva una chaqueta ligera");
} else {
  console.log("Hace frío, lleva abrigo");
}

// Usando función clásica
function recomendarRopa(temperatura) {
  if (temperatura > 30) {
    console.log("Hace calor, usa ropa ligera");
  } else if (temperatura >= 21) {
    console.log("Clima templado, puedes vestir cómodo");
  } else if (temperatura >= 10) {
    console.log("Clima fresco, lleva una chaqueta ligera");
  } else {
    console.log("Hace frío, lleva abrigo");
  }
}

recomendarRopa(15);

// Usando Arrow Function + retorno de mensaje
const getClothingRecommendation = (temperatura) => {
  if (temperatura > 30) return "Hace calor, usa ropa ligera";
  if (temperatura >= 21) return "Clima templado, puedes vestir cómodo";
  if (temperatura >= 10) return "Clima fresco, lleva una chaqueta ligera";
  return "Hace frío, lleva abrigo";
};

console.log(getClothingRecommendation(22));
