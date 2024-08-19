# Pseudo Código - Conexión, CRUD y Búsqueda en MongoDB

## 1. Conexión a la Base de Datos

- **Descripción:** Establece una conexión con una base de datos MongoDB utilizando Mongoose.
- **Acciones:**
  - Usa la librería `mongoose` para conectarse a una base de datos MongoDB en la nube.
  - La conexión se realiza mediante una URI específica que incluye las credenciales de acceso y el nombre de la base de datos.

## 2. Definición del Modelo `User`

- **Descripción:** Define un modelo de Mongoose para la colección `User`.
- **Acciones:**
  - El modelo tiene dos campos: `username` (tipo `String`) y `edad` (tipo `Number`).
  - Este modelo se utiliza para crear y manipular documentos en la colección `User`.

## 3. Función `crear`

- **Descripción:** Crea un nuevo documento en la colección `User`.
- **Acciones:**
  - Crea una nueva instancia del modelo `User` con datos específicos (`username` y `edad`).
  - Guarda esta nueva instancia en la base de datos utilizando `await` para manejar la operación asincrónica.
  - Imprime en consola el documento guardado para confirmar su creación.

## 4. Función `buscarTodo`

- **Descripción:** Recupera todos los documentos en la colección `User`.
- **Acciones:**
  - Usa el método `find()` de Mongoose para obtener todos los documentos en la colección `User`.
  - Imprime en consola la lista de todos los usuarios encontrados.

## 5. Función `buscar`

- **Descripción:** Recupera documentos que coinciden con un criterio específico.
- **Acciones:**
  - Usa el método `find()` de Mongoose para buscar usuarios cuyo `username` sea "john".
  - Imprime en consola los usuarios encontrados.

## 6. Función `buscarUno`

- **Descripción:** Recupera un solo documento que coincida con un criterio específico.
- **Acciones:**
  - Usa el método `findOne()` de Mongoose para buscar un usuario cuyo `username` sea "jhon".
  - Imprime en consola el usuario encontrado.

## 7. Función `actualizar`

- **Descripción:** Actualiza un documento en la colección `User`.
- **Acciones:**
  - Busca un usuario cuyo `username` sea "john" utilizando `findOne()`.
  - Si el usuario existe, actualiza su `username` a "jhon".
  - Guarda los cambios en la base de datos utilizando `save()` y `await`.
  - Imprime en consola el usuario antes de la actualización y después de los cambios.

## 8. Función `eliminar`

- **Descripción:** Elimina un documento de la colección `User`.
- **Acciones:**
  - Busca un usuario cuyo `username` sea "jhon" utilizando `findOne()`.
  - Si el usuario existe, lo elimina de la base de datos utilizando `deleteOne()`.
  - Imprime un mensaje en consola indicando si el usuario fue eliminado correctamente o si no existía.
  - Maneja cualquier error que pueda ocurrir durante la operación de eliminación utilizando un bloque `try-catch`.
