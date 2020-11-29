// Sutherland – Hodgeman Polygon clipping 

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  let window = new Window();
  window.display();

  let poly = new Polygon();
  poly.refDisp();

  strokeWeight(5)
  stroke(0, 100, 100);
  sutherClip(poly.vertices, poly.vertices.length, window.vertices,
    window.vertices.length);


}

function xIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  let nr = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) *
    (x3 * y4 - y3 * x4);
  let dr = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  return nr / dr;
}

function yIntersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  let nr = (x1 * y2 - y1 * x2) * (y3 - y4) -
    (y1 - y2) * (x3 * y4 - y3 * x4);
  let dr = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  return nr / dr;
}

// clipping wrt one clip edge
function clip(polyVert, polySize, x1, y1, x2, y2) {
  let newVert = [];
  let newPolSize = 0;

  for (let i = 0; i < polySize; i++) {
    let k = (i + 1) % polySize;
    let ix = polyVert[i][0];
    let iy = polyVert[i][1];
    let kx = polyVert[k][0];
    let ky = polyVert[k][1];

    // calculating position of first point wrt clipper line 
    let iPos = (x2 - x1) * (iy - y1) - (y2 - y1) * (ix - x1);

    // calculating position of second point wrt clipper line 
    let kPos = (x2 - x1) * (ky - y1) - (y2 - y1) * (kx - x1);

    // when both points are inside 
    if (iPos > 0 && kPos > 0) {
      newVert[newPolSize] = [];
      newVert[newPolSize][0] = kx;
      newVert[newPolSize][1] = ky;
      newPolSize++;
    }

    // when only first point is outside 
    else if (iPos <= 0 && kPos > 0) {
      newVert[newPolSize] = [];
      newVert[newPolSize][0] = xIntersect(x1, y1, x2, y2, ix, iy, kx, ky);
      newVert[newPolSize][1] = yIntersect(x1, y1, x2, y2, ix, iy, kx, ky);
      newPolSize++;

      newVert[newPolSize] = [];
      newVert[newPolSize][0] = kx;
      newVert[newPolSize][1] = ky;
      newPolSize++;
    }

    // when only second point is outside 
    else if (iPos > 0 && kPos <= 0) {
      newVert[newPolSize] = [];
      newVert[newPolSize][0] = xIntersect(x1,
        y1, x2, y2, ix, iy, kx, ky);
      newVert[newPolSize][1] = yIntersect(x1,
        y1, x2, y2, ix, iy, kx, ky);
      newPolSize++;
    }

    // when both points are outside 
    else {}
  }

  // copying new points into original array 
  polySize = newPolSize;
  for (let i = 0; i < polySize; i++) {
    polyVert[i] = [];
    polyVert[i][0] = newVert[i][0];
    polyVert[i][1] = newVert[i][1];
  }
}

function sutherClip(polyVert, polySize, windowVert, windowSize) {
  for (let i = 0; i < windowSize; i++) {
    let k = (i + 1) % windowSize;

    clip(polyVert, polySize, windowVert[i][0],
         windowVert[i][1], windowVert[k][0],
         windowVert[k][1]);
  }
 
  for (let i = 0; i < polySize; i++)
    print(polyVert[i][0], polyVert[i][1]);

  dispClip(polyVert);
}

function dispClip(finalPolyVert) {
  for (let i = 0; i < finalPolyVert.length; i++) {
    let k = (i + 1) % finalPolyVert.length;
    line(finalPolyVert[i][0], finalPolyVert[i][1],
      finalPolyVert[k][0], finalPolyVert[k][1]);
  }
}