const User = {
  // 1. Función `get` - Ref: api-pseudocode.md#1
  get: (req, res) => {
    res.status(200).send("Este es un usuario");
  },

  // 2. Función `list` - Ref: api-pseudocode.md#2
  list: (req, res) => {
    res.status(200).send("Hola usuario");
  },

  // 3. Función `create` - Ref: api-pseudocode.md#3
  create: (req, res) => {
    res.status(201).send("Creando un usuario");
  },

  // 4. Función `update` - Ref: api-pseudocode.md#4
  update: (req, res) => {
    res.status(204).send("Actualizando un usuario");
  },

  // 5. Función `destroy` - Ref: api-pseudocode.md#5
  destroy: (req, res) => {
    res.status(204).send("Eliminando un usuario");
  },
};

module.exports = User;
