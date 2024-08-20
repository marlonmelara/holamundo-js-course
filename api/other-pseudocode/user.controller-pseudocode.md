# Pseudo Código - User Controller

## 1. Función `get`

- **Descripción:** Maneja una solicitud para obtener un usuario específico.
- **Acciones:**
  - Busca un usuario por su `id`.
  - Responde con un estado 200 (OK).
  - Envía el usuario encontrado como respuesta.

## 2. Función `list`

- **Descripción:** Maneja una solicitud para listar todos los usuarios.
- **Acciones:**
  - Busca y devuelve una lista de todos los usuarios.
  - Responde con un estado 200 (OK).

## 3. Función `create`

- **Descripción:** Maneja una solicitud para crear un nuevo usuario.
- **Acciones:**
  - Crea un nuevo usuario con los datos proporcionados.
  - Responde con un estado 201 (Creado).
  - Envía el `id` del nuevo usuario creado.

## 4. Función `update`

- **Descripción:** Maneja una solicitud para actualizar un usuario existente.
- **Acciones:**
  - Busca un usuario por su `id` y actualiza sus datos.
  - Responde con un estado 204 (Sin contenido).

## 5. Función `destroy`

- **Descripción:** Maneja una solicitud para eliminar un usuario existente.
- **Acciones:**
  - Busca un usuario por su `id` y lo elimina si existe.
  - Responde con un estado 204 (Sin contenido).
