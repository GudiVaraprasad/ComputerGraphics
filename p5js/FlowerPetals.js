function setup() {
  createCanvas(400,400);
  // strokeWeight(2);
}

function draw() {
  background(0, 225, 0); // green
  fill(255, 135, 0);  // orange
  ellipse(100, 100, 200, 200); // top left petal
  ellipse(300, 100, 200, 200); // top right petal
  ellipse(300, 300, 200, 200); // bottom right petal
  ellipse(100, 300, 200, 200); // bottom left petal

  fill(255, 0, 0); // red
  ellipse(200, 200, 200, 200); // center petal
}

// Contributed by GVP
