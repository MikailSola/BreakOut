
let movingRight = false;
let movingLeft = false;

let xpos = 800;
let ypos = 700;
let speed = 6;

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

      ellipse(x,y,50,50);
  x = x + vx;
  y = y + vy;

  if(x < 0 || x > 1000){
    vx = vx * -1;
  }
  
  if(y < 0 || y > 900){
    vy = vy * -1;
  }
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
