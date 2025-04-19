// Exercise #3
/**
- Validar que el índice proporcionado no sea menor a cero.
- Verificar que el índice corresponda a un elemento existente en el array.
*/

const getElementAtIndex = (array, index) => {
  if (index < 0) {
    return "Index cannot be less than zero";
  } else if (index >= array.length) {
    return "Index does not correspond to an existing element in the array";
  } else {
    return array[index];
  }
};

let result = getElementAtIndex([1, 2], 1);
console.log(result);
