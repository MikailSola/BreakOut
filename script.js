var x, y, vx, vy;

function setup() {
	createCanvas(1800, 900);

  x = 0;
  y = 150;
  vx = 6;
  vy = 6;
}

function draw() {
	background(0);
  
  ellipse(x,y,50,50);
  x = x + vx;
  y = y + vy;

  if(x <= 0 || x >= width){
    vx = vx * -1;
  }

   if(y <= 0 || y >= height){
    vy = vy * -1;
  }
}