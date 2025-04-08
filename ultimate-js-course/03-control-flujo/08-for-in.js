let user = {
  id: 1,
  name: "Chanchito Feliz",
  age: 25,
};

for (let prop in user) {
  console.log(prop);
}

for (let prop in user) {
  console.log(prop, user[prop]);
}

let animales = ["Caballo", "Vaca", "Perro"];
for (let indice in animales) {
  console.log(indice, animales[indice]);
}
