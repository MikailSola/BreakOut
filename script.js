
let movingRight = false;
let movingLeft = false;

let xpos = 400;
let ypos = 850;
let speed = 7;
let length = 12;
let width = 200;
var paddle;

//let x, y, vx, vy;

function setup() {
    createCanvas(1000, 900);
    paddle = new Paddle()

    // x = 500;
    // y = 0;
    // vx = 7;
    // vy = 7;
}

function draw() {
    background(0);
    
    paddle.draw();
   
          fill(200, 0, 0);
        ellipse(x, y, 23, 23);
        x = x + vx;
        y = y + vy;

        if (x < 0 || x > 1000) {
            vx = vx * -1;
        }

        if (y < 0 || y > 900) {
            vy = vy * -1;
        }

        if ((x > xpos && x < xpos + width && x < ypos + length) &&
            (y + length >= ypos)) {
            vx = ((xpos + width / 2 - x) / 8) * -1;
            vy *= -1;
        }


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

