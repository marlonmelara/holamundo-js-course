new Promise((resolve, reject) => {
  setTimeout(() => reject("Rechaza! 🔴"), 3000); // Rechaza la promesa después de 3 segundos
})
  .then((x) => console.log(x)) // No se ejecutará porque la promesa es rechazada
  .catch((e) => console.error(e)); // Captura y maneja el rechazo, imprime "2" en la consola

// Crear una nueva promesa
const promesaBasica = new Promise((resolve, reject) => {
  const exito = true; // Cambia a false para probar el caso de rechazo

  if (exito) {
    resolve("La operación fue exitosa!"); // Resuelve la promesa con un mensaje de éxito
  } else {
    reject("Hubo un error en la operación."); // Rechaza la promesa con un mensaje de error
  }
});

// Manejar la promesa
promesaBasica
  .then((mensajeExito) => {
    console.log(mensajeExito); // Maneja la resolución de la promesa
  })
  .catch((mensajeError) => {
    console.error(mensajeError); // Maneja el rechazo de la promesa
  });
