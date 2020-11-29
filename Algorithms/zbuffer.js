function zBuffer(polygons) {
  let zBufferArray = [];
  let colorArray = [];
  /* Initialize arrays */
  for (let i = 0; i < this.config.sketchHeight; i += 1) {
    let bufferRow = [];
    let colorRow = [];
    for (let j = 0; j < this.config.sketchWidth; j += 1) {
      bufferRow.push(Infinity);
      colorRow.push(this.backgroundColor);
    }
    zBufferArray.push(bufferRow);
    colorArray.push(colorRow);
  }
  // Iterate over all polygons
  for (let i = 0; i < polygons.length; i += 1) {
    const polygon = polygons[i];
    for (let j = 0; j < polygon.length; j += 1) {
      const pixelRow = polygon[j];
      for (let k = 0; k < pixelRow.length; k += 1) {
        // Check z-depth of pixel
        if (pixelRow[k][3] < zBufferArray[j][k]) {
          zBufferArray[j][k] = pixelRow[k][3];
          colorArray[j][k] = pixelRow[k];
        }
      }
    }
  }
  return colorArray;
}
