const mongoose = require("mongoose");

const Users = mongoose.model("User", {
  name: {
    type: String,
    requiered: true,
    minLength: 3,
  },
  lastname: {
    type: String,
    requiered: true,
    minLength: 3,
  },
});

module.exports = Users;
