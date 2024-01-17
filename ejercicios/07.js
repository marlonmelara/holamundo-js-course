/**
 * Crear algoritmo que devuelva el precio
 * del producto más el impuesto.
 */

function totalPrice(price, tax) {
  return price + price * tax;
}
5;
let result = totalPrice(19.9, 0.15);
console.log(result);
