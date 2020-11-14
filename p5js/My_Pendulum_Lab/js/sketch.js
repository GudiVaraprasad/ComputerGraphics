let pX = 360;
let pY = 240;
let hang = [];

let dirW = 480;
const timeSteps = 100;

function setup() {
  createCanvas(960, 480);
}

function direction(x, y) {
  x = map(x, 0, 480, -PI, PI);
  y = map(y, 0, 480, -PI, PI);
  return createVector(y, -sin(x));
}

function mousePressed() {
  pX = mouseX;
  pY = mouseY;
}

function draw() {
  background(51);
  strokeWeight(2);
  
  for (let y = 20; y <= height; y += 40) {
    for (let x = 20; x <= 480; x += 40) {
      stroke(255, 0, 0);
      noFill();
      circle(x, y, 6);
      stroke(255, 255, 255);
      const dir = direction(x, y);
      //dir.y /= 2;
      dir.setMag(20);
      line(x, y, x + dir.x, y + dir.y);
    }
  }
  
  stroke(0, 255, 0);
  for (const v of hang) {
    point(v.x, v.y);
  }
  
  strokeWeight(5);
  fill(0,255, 0);
  circle(pX, pY, 6);
  for (let i = 0; i < timeSteps; i++) {
    const dir = direction(pX, pY);
    pX += dir.x / timeSteps;
    pY += dir.y / timeSteps;
    if (pX < 0) {
      pX = dirW + pX;
    } else if (pX > dirW) {
      pX = pX - dirW;
    }
  }
  
  noStroke();
  fill(51);
  rect(dirW, 0, 960-dirW, height);
  
  translate(720, 240);
  rotate(map(pX, 0, 480, PI, -PI));
  stroke(175);
  strokeWeight(4);
  line(0, 0, 0, 120);
  noStroke();
  fill(255, 0, 0);
  circle(0, 120, 36);
  
  hang.push(createVector(pX, pY));
}