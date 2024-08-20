const Users = require("./User");

const User = {
  // 1. Función `get` - Ref: api-pseudocode.md#1-función-get
  get: async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({ _id: id });
    res.status(200).send(user);
  },

  // 2. Función `list` - Ref: api-pseudocode.md#2-función-list
  list: async (req, res) => {
    const users = await Users.find();
    res.status(200).send(users);
  },

  // 3. Función `create` - Ref: api-pseudocode.md#3-función-create
  create: async (req, res) => {
    const user = new Users(req.body);
    const savedUser = await user.save();
    res.status(201).send(savedUser._id);
  },

  // 4. Función `update` - Ref: api-pseudocode.md#4-función-update
  update: async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({ _id: id });
    Object.assign(user, req.body);
    await user.save();
    res.sendStatus(204);
  },

  // 5. Función `destroy` - Ref: api-pseudocode.md#5-función-destroy
  destroy: async (req, res) => {
    const { id } = req.params;
    const user = await Users.findOne({ _id: id });
    if (user) {
      user.deleteOne(); // Eliminar el usuario si existe
    }
    res.sendStatus(204);
  },
};

module.exports = User;
