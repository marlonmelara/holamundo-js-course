/**
Crear algoritmo que devuelva el precio
del producto más impuesto
*/

const totalPrice = (price, tax) => {
  const total = price + price * tax;
  return `El precio más impuesto es de ${total.toFixed(2)}`;
};

let result = totalPrice(19.9, 0.15);
console.log(result);
