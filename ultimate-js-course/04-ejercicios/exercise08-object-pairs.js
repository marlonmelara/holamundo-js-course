/**
Crear algoritmo que tome un array de objetos
y devuelva un array de pares */

let array = [
  {
    id: 1,
    name: "Snoopy",
  },
  {
    id: 2,
    name: "Charlie",
  },
  {
    id: 3,
    name: "Lucy",
  },
];

const toPairs = (arr) => {
  let pairs = [];

  for (let obj of arr) {
    for (let key in obj) {
      pairs.push([key, obj[key]]);
    }
  }

  return pairs;
};

let result = toPairs(array);
console.log(result);
