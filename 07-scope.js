var miNombre = "Marlon"; //Variable global

function nombre() {
  var miApellido = "Melara"; //Variable local
  console.log(miNombre + " " + miApellido);
}

nombre();

miNombre;
miApellido;

miNombre();
console.log(miNombre);
console.log(miNombre + " " + miApellido);
