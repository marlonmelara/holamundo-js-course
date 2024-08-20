// 1. Importar los módulos necesarios - Ref: server-pseudocode.md#1-importar-los-módulos-necesarios
const express = require("express");
const mongoose = require("mongoose");
const user = require("./user.controller"); // Importa el controlador que maneja las rutas

// 2. Crear una instancia de la aplicación - Ref: server-pseudocode.md#2-crear-una-instancia-de-la-aplicación
const app = express();

// 3. Configurar el puerto - Ref: server-pseudocode.md#3-configurar-el-puerto
const port = 3000;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://marlonmelara:qLJJfxCzUWQnzWhN@cluster0.drdhe.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0"
);

// 4. Configurar las rutas y asignar los controladores - Ref: server-pseudocode.md#4-configurar-las-rutas-y-asignar-los-controladores

// 4.1. GET / - Ref: server-pseudocode.md#41-get-
app.get("/", user.list);

// 4.2. GET /:id - Ref: server-pseudocode.md#42-get-id
app.get("/:id", user.get);

// 4.3. POST / - Ref: server-pseudocode.md#43-post-
app.post("/", user.create);

// 4.4. PUT /:id - Ref: server-pseudocode.md#44-put-id
app.put("/:id", user.update);

// 4.5. PATCH /:id - Ref: server-pseudocode.md#45-patch-id
app.patch("/:id", user.update);

// 4.6. DELETE /:id - Ref: server-pseudocode.md#46-delete-id
app.delete("/:id", user.destroy);

// 5. Iniciar el servidor - Ref: server-pseudocode.md#5-iniciar-el-servidor
app.listen(port, () => {
  console.log("Arrancando la aplicación en el puerto " + port);
});
