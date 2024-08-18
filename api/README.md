# Explicación General del Proyecto

Este documento proporciona una explicación general de cómo funciona la aplicación creada en Node.js utilizando Express. La aplicación consta de dos archivos principales: `api.js` y `user.controller.js`. A continuación, se detalla el propósito y funcionamiento de cada uno.

## 1. api.js

Este archivo es el **punto de entrada** de la aplicación. Aquí es donde se configura el servidor y se definen las rutas que manejarán diferentes tipos de solicitudes HTTP.

### Paso a Paso

1. **Importar Módulos**:

   ```javascript
   const express = require("express");
   const user = require("./user.controller");
   ```

- **express:** Se importa la librería Express, que facilita la creación de servidores en Node.js.
- **user:** Se importa el controlador user.controller.js, que contiene la lógica para manejar las solicitudes HTTP.

2. **Crear una instancia de la aplicación:**:

   ```javascript
   const app = express();
   ```

- Se crea una instancia de Express, que se utiliza para definir rutas y manejar peticiones.

3. **Configurar el puerto:**

   ```javascript
   const port = 3000;
   ```

- Se define el puerto en el cual el servidor escuchará las solicitudes. Aquí es el puerto 3000.

4. **Definir Rutas:**

   - Las rutas son direcciones URL específicas que el servidor puede manejar, cada una con un tipo de solicitud (GET, POST, etc.).

   ```javascript
   app.get("/", user.list);
   ```

- GET /: Esta ruta responde con la lista de usuarios utilizando la función `user.list` definida en `user.controller.js`.

  ```javascript
  app.get("/:id", user.get);
  ```

- GET /:id: Esta ruta responde con un usuario específico, donde :id es un parámetro que puede ser cualquier valor. La lógica está en la función user.get.

  ```javascript
  app.post("/", user.create);
  ```

- POST /: Esta ruta permite crear un nuevo usuario, manejado por la función `user.create`.

  ```javascript
  app.put("/:id", user.update);
  app.patch("/:id", user.update);
  ```

- PUT y PATCH /:id: Estas rutas permiten actualizar un usuario identificado por :id. PUT reemplaza toda la información, mientras que PATCH realiza una actualización parcial, ambas manejadas por user.update.

  ```javascript
  app.delete("/:id", user.destroy);
  ```

- DELETE /:id: Esta ruta elimina un usuario específico, utilizando la función user.destroy.

5. **Iniciar el servidor:**

   ```javascript
   app.listen(port, () => {
     console.log("Arrancando la aplicación en el puerto " + port);
   });
   ```

- Aquí es donde el servidor comienza a escuchar las peticiones en el puerto definido (3000). Un mensaje en la consola indica que la aplicación está funcionando correctamente.

## 2. user.controller.js

Este archivo maneja la lógica específica para cada una de las rutas definidas en api.js. Separar la lógica en controladores es una buena práctica que facilita la organización y mantenimiento del código.

1. **Definición de Funciones:**

   ```javascript
   const User = {
     get: (req, res) => {
       res.status(200).send("Este es un usuario");
     },
     list: (req, res) => {
       res.status(200).send("Hola usuario");
     },
     create: (req, res) => {
       res.status(201).send("Creando un usuario");
     },
     update: (req, res) => {
       res.status(204).send("Actualizando un usuario");
     },
     destroy: (req, res) => {
       res.status(204).send("Eliminando un usuario");
     },
   };
   ```

- Cada función dentro de User corresponde a una ruta en `api.js` y maneja la lógica necesaria para responder a las solicitudes.
- `req`: Objeto que representa la solicitud hecha por el cliente. Contiene información como datos enviados y parámetros en la URL.
- `res`: Objeto que representa la respuesta que el servidor enviará al cliente.

2. **Exportar el Módulo:**

   ```javascript
   module.exports = User;
   ```

- Esto permite que el objeto User (con todas sus funciones) esté disponible para ser importado en otros archivos, como `api.js`.

## 3. Resumen General

- api.js actúa como el "director de orquesta", definiendo cómo se deben manejar las solicitudes HTTP y delegando las tareas específicas al "personal" definido en user.controller.js.

- user.controller.js maneja la "logística" de cada solicitud, determinando qué debe suceder cuando se recibe una solicitud GET, POST, PUT, PATCH, o DELETE en una ruta específica.

Ambos archivos trabajan juntos para crear una aplicación funcional en Node.js utilizando Express, manteniendo el código limpio, organizado y fácil de escalar a medida que el proyecto crece.
