// 1. Definición del Modelo `User` - Ref: model-pseudocode.md#1-definición-del-modelo-user
const mongoose = require("mongoose");

const Users = mongoose.model("User", {
  name: {
    type: String,
    required: true,
    minLength: 3,
  },
  lastname: {
    type: String,
    required: true,
    minLength: 3,
  },
});

module.exports = Users;
