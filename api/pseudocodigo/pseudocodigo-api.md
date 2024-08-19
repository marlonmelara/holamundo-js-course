# Pseudocódigo para el Servidor Express

1. **Importar los módulos necesarios**

   - Cargar la librería `express` para crear la aplicación.
   - Importar el controlador `user.controller` que manejará la lógica de las rutas.

2. **Crear una instancia de la aplicación**

   - Inicializar `express` para crear la aplicación.

3. **Configurar el puerto**

   - Definir el puerto en el cual la aplicación escuchará.

4. **Configurar las rutas y asignar los controladores**

   - **GET /**: Configurar la ruta raíz (`/`) para listar recursos mediante `user.list`.
   - **GET /:id**: Configurar la ruta para obtener un recurso identificado por `id` mediante `user.get`.
   - **POST /**: Configurar la ruta raíz (`/`) para crear un nuevo recurso mediante `user.create`.
   - **PUT /:id**: Configurar la ruta para actualizar un recurso existente identificado por `id` mediante `user.update`.
   - **PATCH /:id**: Configurar la ruta para realizar una actualización parcial de un recurso existente identificado por `id` mediante `user.update`.
   - **DELETE /:id**: Configurar la ruta para eliminar un recurso existente identificado por `id` mediante `user.destroy`.

5. **Iniciar el servidor**
   - Hacer que la aplicación escuche en el puerto definido.
   - Mostrar un mensaje en la consola indicando que la aplicación ha arrancado.
