// 1. Importar el módulo de Express
const express = require("express");

// 2. Crear una instancia de la aplicación
const app = express();

// 3. Configurar el puerto
const port = 3000;

// 4. Configurar las rutas

// 4.1. GET /
// Respuesta para la ruta raíz
app.get("/", (req, res) => {
  res.status(200).send("Hola mundo");
});

// 4.2. GET /:id
// Respuesta para obtener un recurso identificado por id
app.get("/:id", (req, res) => {
  console.log(req.params); // Imprime los parámetros de la solicitud
  res.status(200).send(req.params); // Responde con los parámetros recibidos
});

// 4.3. POST /
// Respuesta para la ruta raíz con POST
app.post("/", (req, res) => {
  res.status(201).send("Hola mundo otra vez");
});

// 4.4. PUT /:id
// Respuesta para actualizar un recurso identificado por id
app.put("/:id", (req, res) => {
  console.log(req.params); // Imprime la solicitud para depuración
  res.sendStatus(204); // Responde con No Content
});

// 4.5. PATCH /:id
// Respuesta para actualizar parcialmente un recurso identificado por id
app.patch("/:id", (req, res) => {
  res.sendStatus(204); // Responde con No Content
});

// 4.6. DELETE /:id
// Respuesta para eliminar un recurso identificado por id
app.delete("/:id", (req, res) => {
  res.sendStatus(204); // Responde con No Content
});

// 5. Iniciar el servidor
app.listen(port, () => {
  console.log("Arrancando la aplicación en el puerto " + port);
});
