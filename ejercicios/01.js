// Encontrar el número mayor entre a y b

// function cualEsMayor(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// Usando operadores ternarios
function whichIsLarger(a, b) {
  return a > b ? a : b;
}

let larger = whichIsLarger(10, 5);
console.log(larger);
