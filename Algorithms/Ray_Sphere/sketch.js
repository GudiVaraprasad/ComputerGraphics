let ray1;
let sphere_center,oc;
let radius,x,y;
function setup() {
  createCanvas(400, 400);
  ray1=new Ray(100,100);
  sphere_center=createVector();
  oc=createVector();
  sphere_center.x=150;
  sphere_center.y=150;
  radius=30;
 
}

function draw() {
  background(255);
 
  ray1.show();
  ellipse(sphere_center.x, sphere_center.y,radius,radius);
  ray1.lookup(mouseX,mouseY);
  let t =hit_sphere(sphere_center,radius,ray1);
  pt=createVector();
  pt.x=ray1.origin().x+t*ray1.direction().x;
  pt.y=ray1.origin().y+t*ray1.direction().y;
  ellipse(pt.x,pt.y,2);
  
  
}

function hit_sphere(sphere_center, radius, ray1){

oc.x = ray1.origin().x - sphere_center.x;
oc.y = ray1.origin().y - sphere_center.y;
let a = p5.Vector.dot(ray1.direction(), ray1.direction());
let b = 2.0 * p5.Vector.dot(oc, ray1.direction());
let c = p5.Vector.dot(oc,oc) - radius*radius;

let  discriminant = b*b - 4*a*c; 
if(discriminant < 0){
return ;
}
else{
let numerator = -b - sqrt(discriminant);
if(numerator > 0){
return numerator / (2 * a);
}

numerator = -b + sqrt(discriminant);
if(numerator > 0) {
return numerator / (2 * a);
}
else {
return ;
} 
}
}
