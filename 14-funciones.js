function suma(a, b) {
  return a + b;
}

const resultadoSuma1 = suma(1, 2);
const resultadoSuma2 = suma(6, 5);
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2);
console.log("Es igual a", resultadoSuma3);
