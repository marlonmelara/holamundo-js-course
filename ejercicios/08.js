/**
 * Crear algoritmo que tome un array de
 * objetos y devuelva un array de pares
 */

let array = [
  {
    id: 1,
    name: "Charlie",
  },
  {
    id: 2,
    name: "Snoopy",
  },
  {
    id: 3,
    name: "Linus",
  },
];

let pares = [
  [1, { id: 1, name: "Charlie" }],
  [2, { id: 2, name: "Snoopy" }],
  [3, { id: 3, name: "Linus" }],
];

function toPairs(arr) {
  let pairs = [];
  for (idx in arr) {
    let element = arr[idx];
    pairs[idx] = [element.id, element];
  }

  return pairs;
}

let result = toPairs(array);
console.log(result);
