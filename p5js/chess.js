function setup() 
{
  createCanvas(400, 400);
  strokeWeight(2);
}

function draw()
{
  background(220);

  black = 10;
  white = 255;
  for (y = 0; y < height; y += 50) 
  {
    for (x = 0; x < width; x += 50) 
    {
      if (x % 100 == 0) 
      {
        if (y % 100 == 0) 
        {
          fill(color(255, 140, 26));
        }
        if (y % 100 == 50)
        {
          fill(color(255, 166, 77));
        }
      }
      
      if (x % 100 == 50) 
      {
        if (y % 100 == 50) 
        {
          fill(color(255, 140, 26));
        }
        if (y % 100 == 0) 
        {
          fill(color(255, 166, 77));
        }
      }
      rect(x, y, 50, 50);
    }
  }
}

// Gudi Varaprasad - 19BCE7048
