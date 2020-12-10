let img;

function setup(){
  createCanvas(600,550,WEBGL);
  img = loadImage("./pic.jpg");
  img.resize(600,550);
}

function draw(){
  background(0);
  fill(0);
  noStroke();
  sphere(3);
  
  fill(230,0,20);
  var tiles=100;
  var tileSize=width/tiles;
  push();
  translate(width/2,height/2);
  rotateY(radians(frameCount*0.5));
  
  for(var x=0;x<tiles;x++)
  {
     for(var y=0; y<tiles;y++)
     {
       var c=img.get(x*tileSize, y*tileSize);
       var b= map(brightness(c),0,255,0,1);
       
       var z=map(b,0,1,-100,100);
       
       push();
       translate(x*tileSize-width/2,y*tileSize-height/2,z);
       sphere(tileSize*b*0.6);
       pop();
     }
  } 
  pop();
}
