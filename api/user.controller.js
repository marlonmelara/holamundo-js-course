const User = {
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

module.exports = User;
