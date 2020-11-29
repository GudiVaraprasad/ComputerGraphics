var r = "red"
var y = "grey"
var g = "grey"
var count = 0


function setup() {
  createCanvas(450, 500);
}

function draw() {
  background(250);
  fill("black")
  rect(140, 70, 110, 250)
  fill(r)
  ellipse(195, 120, 50, 50)
  fill(y)
  ellipse(195, 200, 50, 50)
  fill(g)
  ellipse(195, 280, 50, 50)
}

function mouseClicked() {
  if(mouseY <= 400) {
    if(count == 0) {
    count = 1
    r = "grey"
    y = "yellow"
    } else if (count == 1) {
    count = 2
    y = "grey"
    g = "green"
  } else if (count == 2) {
    count = 0
    g = "grey"
    r = "red"
  }
}
}
