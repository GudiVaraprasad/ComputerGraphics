
function setup() {
createCanvas(500, 500, WEBGL);
strokeWeight(1.5);
}

function draw() {
  
background(255);
  
  // black ambientLight
  // ambientLight(v1, v2, v3, [alpha])
  // ambientLight(0, 0, 0, 100 )
  
// lights();
  
// Blue pointlight from the right
  // pointLight(v1, v2, v3, x, y, z)
pointLight(0, 0, 255, 200, -150, 0); // color and position
  
// Red directional light from the left
  // directionalLight(v1, v2, v3, position)
directionalLight(255, 0, 0,1, 0, 0);
  
// Green spotlight from the front
  // spotLight(color, position, direction, [angle], [conc])
spotLight(0, 255, 0, 0, 40, 200, 0, -0.5, -0.5, PI/2, 2);
  
  rotateX(millis() / 3000);
  rotateY(millis() / 1000);
  rotateZ(millis() / 6000);
  
plane(200);
}

// Contributed by GVP
