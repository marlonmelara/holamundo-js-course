// Ejercicio 11
/*
-- Verificador de stock de productos

Una tienda en línea permite a los usuarios intentar comprar cierta cantidad de unidades de un producto.
Antes de confirmar la compra, debemos verificar si hay suficiente stock disponible.

Reglas:
- Si la cantidad solicitada es menor o igual al stock disponible, se aprueba la compra y se descuenta el stock.
- Si la cantidad solicitada es mayor al stock, se muestra un mensaje indicando que no hay suficiente stock.

Entradas:
- Una variable `stockDisponible` (número entero)
- Una variable `cantidadSolicitada` (número entero)

Salidas:
- Si hay stock suficiente:
  - Imprimir: "Compra realizada. Stock restante: [número]"
- Si no hay stock suficiente:
  - Imprimir: "No hay suficiente stock disponible"
*/

let stockDisponible = 100;
let cantidadSolicitada = 80;

// Usando if-else
if (cantidadSolicitada <= stockDisponible) {
  stockDisponible -= cantidadSolicitada; // Es equivalente a tener stockDisponible = stockDisponible - cantidadSolicitada
  console.log(`Compra realizada. Stock restante: ${stockDisponible}`);
} else {
  console.log("No hay suficiente stock disponible");
}

console.log(stockDisponible); // 20

// Usando Arrow function
let stock = 500;

const validarCompra = (venta) => {
  if (venta <= stock) {
    stock -= venta; // modifica directamente la variable global
    console.log(`Compra realizada. Stock restante: ${stock}`);
  } else {
    console.log("No hay suficiente stock disponible");
  }
};

validarCompra(400);
console.log(stock); // 100
