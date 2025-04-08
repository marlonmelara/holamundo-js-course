let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

console.log("Fuera del While");

let indice = 0;
while (indice < 10) {
  if (indice % 2 == 0) {
    console.log("Número par", indice);
  }
  indice++;
}
