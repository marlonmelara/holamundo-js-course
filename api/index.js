// Archivo: index.js

const mongoose = require("mongoose");

// 1. Conexión a la Base de Datos - Ref: db-pseudocode.md#1
mongoose.connect(
  "mongodb+srv://marlonmelara:qLJJfxCzUWQnzWhN@cluster0.drdhe.mongodb.net/miapp?retryWrites=true&w=majority&appName=Cluster0"
);

// 2. Definición del Modelo `User` - Ref: db-pseudocode.md#2
const User = mongoose.model("User", {
  username: String,
  edad: Number,
});

// 3. Función `crear` - Ref: db-pseudocode.md#3
const crear = async () => {
  const user = new User({ username: "john", edad: 15 });
  const savedUser = await user.save();
  console.log(savedUser);
};

// 4. Función `buscarTodo` - Ref: db-pseudocode.md#4
const buscarTodo = async () => {
  const users = await User.find();
  console.log(users);
};

// 5. Función `buscar`
const buscar = async () => {
  const user = await User.find({ username: "john" });
  console.log(user);
};

// 6. Función `buscarUno`
const buscarUno = async () => {
  const user = await User.findOne({ username: "jhon" });
  console.log(user);
};

// 7. Función `actualizar`
const actualizar = async () => {
  const user = await User.findOne({ username: "john" });
  console.log(user);
  user.username = "jhon";
  await user.save();
};

// 8. Función `eliminar`
const eliminar = async () => {
  try {
    const user = await User.findOne({ username: "jhon" }); // Buscar el usuario a eliminar
    console.log(user);

    if (user) {
      await user.deleteOne(); // Eliminar el usuario si existe
      console.log("Usuario eliminado correctamente");
    } else {
      console.log("El usuario no existe en la base de datos"); // Mensaje si no se encuentra el usuario
    }
  } catch (error) {
    console.error("Error al intentar eliminar el usuario:", error);
  }
};

//crear();
//buscarTodo();
//buscar();
//buscarUno();
//actualizar();
eliminar();
