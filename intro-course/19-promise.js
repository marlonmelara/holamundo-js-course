//Resolución de una promesa
// Resuelve una promesa con el valor 2 y luego imprime ese valor.
Promise.resolve(2).then((valor) => console.log(valor)); // Imprime: 2

// Resuelve una promesa con el valor 2, le suma 1, y luego imprime el nuevo valor.
Promise.resolve(2)
  .then((valor) => valor + 1) // Suma 1 al valor resuelto, resultando en 3.
  .then((valor) => console.log(valor)); // Imprime: 3

/***
Las promesas en JavaScript son un mecanismo para manejar operaciones asíncronas de manera más sencilla y estructurada. Permiten ejecutar código que toma tiempo (como llamadas a APIs, temporizadores, etc.) y gestionar el resultado (ya sea éxito o error) cuando la operación finaliza, sin bloquear el flujo del programa.

### Breve explicación:
- **Promesas**: Representan un valor que puede estar disponible ahora, en el futuro, o nunca. Una promesa puede estar en uno de tres estados:
  - **Pendiente (Pending)**: La operación asíncrona aún no ha finalizado.
  - **Resuelta (Fulfilled)**: La operación ha terminado con éxito, y la promesa contiene el resultado.
  - **Rechazada (Rejected)**: La operación falló, y la promesa contiene el motivo del fallo.
  - **`then()` y `catch()`**: Métodos para manejar el resultado de una promesa. `then()` se usa para manejar el éxito, y `catch()` para manejar errores.

Las promesas hacen que el código asíncrono sea más legible y manejable, especialmente en comparación con el anidamiento excesivo de callbacks, conocido como "callback hell". */

//Promesa rechazada
Promise.reject(2)
  .then((valor) => valor + 1) // Suma 1 al valor, pero no se ejecutará porque la promesa fue rechazada.
  .then((valor) => console.log(valor)) // No se ejecutará porque la promesa fue rechazada.
  .catch((e) => console.error(e)); // Maneja el rechazo de la promesa y muestra el error.
