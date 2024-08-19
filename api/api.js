// 1. Importar los módulos necesarios
const express = require("express");
const mongoose = require("mongoose");
const user = require("./user.controller"); // Importa el controlador que maneja las rutas

// 2. Crear una instancia de la aplicación
const app = express();

// 3. Configurar el puerto
const port = 3000;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://marlonmelara:qLJJfxCzUWQnzWhN@cluster0.drdhe.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0"
);

// 4. Configurar las rutas y asignar los controladores

// 4.1. GET /
// Utiliza el controlador `user.list` para manejar la ruta raíz
app.get("/", user.list);

// 4.2. GET /:id
// Utiliza el controlador `user.get` para obtener un recurso identificado por id
app.get("/:id", user.get);

// 4.3. POST /
// Utiliza el controlador `user.create` para manejar la creación de un nuevo recurso
app.post("/", user.create);

// 4.4. PUT /:id
// Utiliza el controlador `user.update` para actualizar un recurso identificado por id
app.put("/:id", user.update);

// 4.5. PATCH /:id
// Utiliza el controlador `user.update` para actualizar parcialmente un recurso identificado por id
app.patch("/:id", user.update);

// 4.6. DELETE /:id
// Utiliza el controlador `user.destroy` para eliminar un recurso identificado por id
app.delete("/:id", user.destroy);

// 5. Iniciar el servidor
app.listen(port, () => {
  console.log("Arrancando la aplicación en el puerto " + port);
});
