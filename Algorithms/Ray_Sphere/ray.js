class Ray{
  constructor(x,y)
  {
    this.pos=createVector(x,y);
    this.dir=createVector(1,0);
    this.pos.x=x;
    this.pos.y=y;
   
    
  }

  origin()
  {
    return this.pos;
  }
  
  direction()
  {
    return this.dir;
  }
  show()
  {
    stroke(color(255,0,0));             
 line(this.pos.x,this.pos.y,this.pos.x+this.dir.x,this.pos.y+this.dir.y)
    
  }
  lookup(x,y){
  this.dir.x=x-this.pos.x;
  this.dir.y=y-this.pos.x;
   
}
  
}