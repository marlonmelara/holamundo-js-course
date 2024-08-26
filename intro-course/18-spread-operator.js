const a = { b: 1 };
// Se crea un objeto 'a' con una propiedad 'b' igual a 1.

const b = a;
// 'b' no es una copia de 'a', sino una referencia al mismo objeto que 'a'.

console.log(a, b);
// Muestra el contenido de 'a' y 'b'. Ambos son idénticos ya que apuntan al mismo objeto.

console.log(b === a);
// Verifica si 'b' y 'a' son el mismo objeto en memoria. Devuelve true.

b.c = 2;
console.log(b, a);
// Se agrega una nueva propiedad 'c' a 'b'. Dado que 'b' y 'a' son el mismo objeto, 'a' también se ve afectado.

const c = { ...a };
// Aquí se crea un nuevo objeto 'c' copiando todas las propiedades de 'a' usando el spread operator.
// A diferencia de 'b', 'c' es un nuevo objeto independiente.

console.log(a, c);
// Muestra 'a' y 'c'. Tienen las mismas propiedades, pero son objetos diferentes.

c.d = 12;
console.log(a, c);
// Se agrega una nueva propiedad 'd' a 'c'. 'a' no se ve afectado porque 'c' es una copia independiente.

console.log(a === c);
// Verifica si 'a' y 'c' son el mismo objeto en memoria. Devuelve false porque son objetos diferentes.
