# Pseudo Código - Modelo User (`user.js`)

## 1. Definición del Modelo `User`

- **Descripción:** Este modelo define la estructura de los documentos de usuario en la base de datos MongoDB utilizando Mongoose.

- **Campos del Modelo:**

  - `name`:

    - **Tipo:** `String`
    - **Requerido:** Sí
    - **Longitud Mínima:** 3 caracteres
    - **Descripción:** Almacena el nombre del usuario.

  - `lastname`:
    - **Tipo:** `String`
    - **Requerido:** Sí
    - **Longitud Mínima:** 3 caracteres
    - **Descripción:** Almacena el apellido del usuario.

- **Acciones:**
  - El modelo `User` se define utilizando `mongoose.model`, lo que permite crear y manipular documentos de la colección `User` en MongoDB.
