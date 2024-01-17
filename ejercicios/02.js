// Encontrar el nombre de la resolución de pantalla

/**
 * Name: width x height
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */

function resolution(width, height) {
  if (width >= 7680 && height >= 4320) {
    return "8K";
  } else if (width >= 3840 && height >= 2160) {
    return "FHD";
  } else if (width >= 2560 && height >= 1440) {
    return "WQHD";
  } else if (width >= 1920 && height >= 1080) {
    return "FHD";
  } else if (width >= 1280 && height >= 720) {
    return "HD";
  } else {
    return false;
  }
}

let resolutionName = resolution(1280, 720);
console.log(resolutionName);
