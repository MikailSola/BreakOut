let movingRight = false;
let movingLeft = false;

let xpos = 500;
let ypos = 700;
let speed = 5;

var x, y, vx, vy;

function setup() {
	createCanvas(1000, 900);

  x = 0;
  y = 150;
  vx = 6;
  vy = 6;
}

function draw() {
	background(0);
    
  fill(0, 0, 255);
  rect(xpos, ypos, 100, 25);
    
    if (movingRight) {
        xpos += speed;
    }
    if (movingLeft) {
        xpos -= speed;
    }
}

function keyPressed() {
    if (key == 'a') {
        movingLeft = true;
    }
    if (key == 'd') {
        movingRight = true;
    }
}

function keyReleased() {
    if (key == 'a') {
        movingLeft = false;
    }
    if (key == 'd') {
        movingRight = false;
    }
}