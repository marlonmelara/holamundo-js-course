/**
 * Crear algoritmo que devuelva un
 * array de objetos en base a pares
 */

let pairs = [
  [1, { name: "Charlie" }],
  [2, { name: "Snoopy" }],
  [3, { name: "Linus" }],
];

function toCollection(pairsArray) {
  let collection = [];
  for (let pair of pairsArray) {
    let id = pair[0];
    let object = pair[1];
    object.id = id; // Asigna el id al objeto
    collection.push(object); // Agrega el objeto modificado a la colección
  }
  return collection;
}

let result = toCollection(pairs);
console.log(result);
