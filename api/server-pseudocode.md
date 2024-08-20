# Pseudo Código - Servidor Express (`api.js` y `user.controller.js`)

## 1. Importar los módulos necesarios

- **Descripción:** Importar todas las dependencias necesarias para ejecutar el servidor.
- **Acciones:**
  - Importar la librería `express` para manejar la creación y configuración del servidor.
  - Importar `mongoose` para la conexión a la base de datos MongoDB.
  - Importar el controlador `user.controller` para manejar la lógica de las rutas.

## 2. Crear una instancia de la aplicación

- **Descripción:** Inicializar la aplicación Express.
- **Acciones:**
  - Crear una instancia de `express` para configurar la aplicación.

## 3. Configurar el puerto

- **Descripción:** Definir el puerto en el que el servidor escuchará las solicitudes.
- **Acciones:**
  - Configurar el puerto con un valor por defecto, en este caso `3000`.

## 4. Configurar las rutas y asignar los controladores

- **Descripción:** Definir las rutas de la API y asociarlas con los métodos del controlador `user.controller`.
- **Acciones:**

  - **GET /**:

    - **Función:** `user.list`
    - **Descripción:** Maneja las solicitudes `GET` a la raíz (`/`) para listar todos los usuarios.

  - **GET /:id**:

    - **Función:** `user.get`
    - **Descripción:** Maneja las solicitudes `GET` para obtener un usuario específico por `id`.

  - **POST /**:

    - **Función:** `user.create`
    - **Descripción:** Maneja las solicitudes `POST` para crear un nuevo usuario.

  - **PUT /:id**:

    - **Función:** `user.update`
    - **Descripción:** Maneja las solicitudes `PUT` para actualizar un usuario existente por `id`.

  - **PATCH /:id**:

    - **Función:** `user.update`
    - **Descripción:** Maneja las solicitudes `PATCH` para realizar una actualización parcial de un usuario existente por `id`.

  - **DELETE /:id**:
    - **Función:** `user.destroy`
    - **Descripción:** Maneja las solicitudes `DELETE` para eliminar un usuario existente por `id`.

## 5. Iniciar el servidor

- **Descripción:** Poner en marcha el servidor para que empiece a escuchar en el puerto configurado.
- **Acciones:**
  - Llamar a `app.listen` para que la aplicación escuche en el puerto configurado.
  - Mostrar un mensaje en la consola indicando que la aplicación ha arrancado correctamente.
