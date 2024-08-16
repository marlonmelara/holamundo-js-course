// Función sin argumentos
/* Esta función 'iterar1' no recibe ningún argumento. Define un array 'numeros' dentro de su cuerpo, y utiliza un bucle 'for' para iterar sobre cada elemento del array, imprimiendo cada elemento en la consola.*/
function iterar1() {
  const numeros = [1, 2, "Hola", 4, 5];
  for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
  }
}

iterar1();
iterar1();

// Función con argumento
/* La función 'iterar2' recibe un argumento 'arg'. Utiliza un bucle 'for' para iterar sobre cada elemento del array proporcionado como argumento, imprimiendo cada elemento en la consola. Esto permite que la función 'iterar2' sea más flexible que 'iterar1', ya que puede operar sobre cualquier array que se pase como argumento.*/
function iterar2(arg) {
  for (let i = 0; i < arg.length; i++) {
    console.log(arg[i]);
  }
}

const numeros = [1, 2, "Hola", 4, 5];
const nombres = ["Pedro", "Juan", "Felipe", "Pepe", "Pepa"];

iterar2(numeros);
iterar2(nombres);

// Función con argumentos
// La función 'suma' recibe dos argumentos 'a' y 'b', y retorna la suma de estos dos argumentos.
// Esto permite usar la función 'suma' para sumar cualquier par de números que se pasen como argumentos.
function suma(a, b) {
  return a + b;
}

const resultadoSuma1 = suma(1, 2); // resultadoSuma1 es 3
const resultadoSuma2 = suma(6, 5); // resultadoSuma2 es 11
// También podemos utilizar los valores retornados por la función 'suma' como argumentos para otra llamada a 'suma'.
const resultadoSuma3 = suma(resultadoSuma1, resultadoSuma2); // resultadoSuma3 es 14
console.log(`Es igual a ${resultadoSuma1}`);
console.log(`Es igual a ${resultadoSuma2}`);
console.log("Es igual a", resultadoSuma3);
