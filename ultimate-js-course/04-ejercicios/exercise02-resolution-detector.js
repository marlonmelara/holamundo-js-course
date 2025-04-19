// Exercise #2
/**
- Nombre: ancho x alto
- 8K: 7680 x 4320
- 4K: 3840 x 2160
- WQHD: 2560 x 1440
- FHD: 1920 x 1080
- HD: 1280 x 720
- SD: 720 x 480
- VGA: 640 x 480
- QVGA: 320 x 240
- La función debe recibir un número y devolver el nombre de la resolución correspondiente.
- Si no existe la resolución, devolver "Resolución no válida"
*/

// Usando switch
const resolucion = (resolucion) => {
  switch (resolucion) {
    case "8K":
      return "La resolución es 8K con 7680 x 4320px";
    case "4K":
      return "La resolución es 4K con 3840 x 2160px";
    case "WQHD":
      return "La resolución es WQHD con 2560 x 1440";
    case "FHD":
      return "La resolución es FHD con 1920 x 1080";
    case "HD":
      return "La resolución es HD con 1280 x 720";
    case "SD":
      return "La resolución es SD con 720 x 480";
    case "VGA":
      return "La resolución es VGA con 640 x 480";
    case "QVGA":
      return "La resolución es QVGA con 320 x 240";
    default:
      return "Resolución no válida";
  }
};

console.log(resolucion("QH")); // Resolución no válida
console.log(resolucion("4K")); // La resolución es 4K con 3840 x 2160px

/**
- Ahora la función debe recibir el ancho y el alto como parámetros para determinar el nombre de la resolución correspondiente.
- Por ejemplo, si se proporcionan las dimensiones 1300 x 730, la función debe devolver "HD", ya que las medidas se encuentran dentro del rango correspondiente.
*/

const resolucion2 = (ancho, alto) => {
  if (ancho > 7680 && alto > 4320) {
    return "Resolución 8K";
  } else if (ancho >= 3840 && alto >= 2160) {
    return "Resolución 4K";
  } else if (ancho >= 2560 && alto >= 1440) {
    return "Resolución WQHD";
  } else if (ancho >= 1920 && alto >= 1080) {
    return "Resolución FHD";
  } else if (ancho >= 1280 && alto >= 720) {
    return "Resolución HD";
  } else if (ancho >= 720 && alto >= 480) {
    return "Resolución SD";
  } else if (ancho >= 640 && alto >= 480) {
    return "Resolución VGA";
  } else if (ancho >= 320 && alto >= 240) {
    return "Resolución QVGA";
  } else {
    return "Resolución no válida";
  }
};

let nombreResolucion = resolucion2(1300, 730);
console.log(nombreResolucion); // HD
