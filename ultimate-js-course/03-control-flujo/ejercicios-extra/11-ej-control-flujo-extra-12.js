// Ejercicio 12
/*
-- Cálculo de descuento por monto de compra

¿Cómo funciona?

En una tienda, se desea aplicar un descuento automático según el monto total de la compra.

Reglas de descuento:
- Si el total de compra es menor a $100 → sin descuento
- Si es entre $100 y $199.99 → 10% de descuento
- Si es entre $200 y $499.99 → 15% de descuento
- Si es $500 o más → 20% de descuento

Entradas:
- Una variable `montoCompra` que representa el total gastado.

Salidas:
- Imprimir:
  - "Total con descuento: $[valor]" si aplica descuento.
  - "No se aplica descuento. Total: $[valor]" si no aplica.
*/

let montoCompra = 1000;
let descuento;

// Usando if-else
if (montoCompra >= 500) {
  descuento = 0.2;
  montoCompra = montoCompra * (1 - descuento);
  console.log(
    `Total con descuento: $${montoCompra.toFixed(2)} si aplica descuento.`
  ); // Total con descuento: $800.00 si aplica descuento
} else if (montoCompra >= 200) {
  descuento = 0.15;
  montoCompra = montoCompra * (1 - descuento);
  console.log(
    `Total con descuento: $${montoCompra.toFixed(2)}" si aplica descuento.`
  );
} else if (montoCompra >= 100) {
  descuento = 0.1;
  montoCompra = montoCompra * (1 - descuento);
  console.log(
    `Total con descuento: $${montoCompra.toFixed(2)}" si aplica descuento.`
  );
} else {
  descuento = 0;
  console.log(
    `No se aplica descuento. Total: $${montoCompra.toFixed(2)}" si no aplica`
  );
}

// Usando Arrow Function
const calcularDescuento = (monto) => {
  let descuento = 0;

  if (monto >= 500) descuento = 0.2;
  else if (monto >= 200) descuento = 0.15;
  else if (monto >= 100) descuento = 0.1;

  const total = monto * (1 - descuento);
  return descuento > 0
    ? `Total con descuento: $${total.toFixed(2)}`
    : `No se aplica descuento. Total: $${monto.toFixed(2)}`;
};

console.log(calcularDescuento(650)); // Total con descuento: $520.00
