# Proyecto de Gestión de Usuarios con Express y MongoDB

Este proyecto es una API RESTful para la gestión de usuarios, construida con Node.js, Express y MongoDB. Permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una colección de usuarios en una base de datos MongoDB.

## Contenido

- [Proyecto de Gestión de Usuarios con Express y MongoDB](#proyecto-de-gestión-de-usuarios-con-express-y-mongodb)
  - [Contenido](#contenido)
  - [Instalación](#instalación)
  - [Configuración](#configuración)
  - [Uso](#uso)
  - [Estructura del Proyecto](#estructura-del-proyecto)
  - [Descripción de los Archivos](#descripción-de-los-archivos)
  - [Endpoints](#endpoints)
  - [Referencias al Pseudo Código](#referencias-al-pseudo-código)
  - [Licencia](#licencia)

## Instalación

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio

   ```

2. **Instalar las dependencias:**

   Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados. Luego ejecuta:

   ```bash
   npm install
   ```

## Configuración

1. **Conectar a MongoDB:**

   Este proyecto utiliza MongoDB como base de datos. En el archivo `api.js`, se establece una conexión a MongoDB usando una cadena de conexión. Asegúrate de actualizar esta cadena con tus credenciales:

   ```javascript
   mongoose.connect(
     "mongodb+srv://<tu-usuario>:<tu-contraseña>@cluster0.drdhe.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0"
   );
   ```

2. **Configurar el puerto:**

   El servidor Express escucha en el puerto `3000` por defecto. Puedes cambiar este puerto modificando la variable `port` en el archivo `api.js`:

   ```javascript
   const port = 3000;
   ```

## Uso

1. **Iniciar el servidor:**

   ```bash
   node api.js

   ```

2. **Probar la API:**

   Una vez que el servidor esté en funcionamiento, puedes interactuar con la API utilizando herramientas como [Postman](https://www.postman.com/) o [cURL](https://curl.se/).

## Estructura del Proyecto

```plaintext
├── api.js                  # Configuración del servidor y las rutas principales
├── user.js                 # Definición del modelo User usando Mongoose
├── user.controller.js      # Controladores para manejar las solicitudes CRUD
├── model-pseudocode.md     # Pseudo código para el modelo User
└── server-pseudocode.md    # Pseudo código para el servidor y las rutas
```

## Descripción de los Archivos

- **`api.js`**: Archivo principal que configura el servidor Express, define las rutas, y establece la conexión con MongoDB.

- **`user.js`**: Define el esquema del modelo `User` con Mongoose. Especifica los campos `name` y `lastname`, ambos obligatorios y con un mínimo de 3 caracteres.

- **`user.controller.js`**: Contiene los controladores que manejan la lógica de las rutas (GET, POST, PUT, PATCH, DELETE). Cada función está claramente documentada y vinculada al pseudo código.

- **`model-pseudocode.md` y `server-pseudocode.md`**: Archivos que contienen pseudo código detallado para `user.js` y `api.js`, respectivamente, describiendo de manera estructurada la lógica implementada.

## Endpoints

La API expone los siguientes endpoints:

- **GET `/`**: Lista todos los usuarios (`user.list`).

- **GET `/:id`**: Obtiene un usuario específico por `id` (`user.get`).

- **POST `/`**: Crea un nuevo usuario (`user.create`).

- **PUT `/:id`**: Actualiza un usuario existente por `id` (`user.update`).

- **PATCH `/:id`**: Realiza una actualización parcial de un usuario existente por `id` (`user.update`).

- **DELETE `/:id`**: Elimina un usuario existente por `id` (`user.destroy`).

## Referencias al Pseudo Código

Para facilitar la comprensión y mantenimiento del código, cada archivo `.js` está documentado con referencias al pseudo código correspondiente:

- **`user.js`**: Referencias al pseudo código en `model-pseudocode.md`.

- **`api.js`** y **`user.controller.js`**: Referencias al pseudo código en `server-pseudocode.md`.

Cada función y sección clave del código incluye un comentario que apunta a la sección relevante del pseudo código, lo que facilita el seguimiento de la lógica del proyecto.

## Licencia

Este proyecto está licenciado bajo la MIT License. Para más detalles, consulta el archivo [LICENSE](LICENSE).
