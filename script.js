var paddle;
var gamestate = 1;

function setup() {
    createCanvas(600, 800);
    paddle = new Paddle();
}

function draw() {
    console.log(gamestate);
    background(0);
    if (gamestate == 0) {
        menu();
    } else if (gamestate == 1) {
        game();
    } else if (gamestate == 2) {
        win();
    } else if (gamestate == 3) {
        lose();
    }
} 

function menu() {
    
}
  
function game() {
    paddle.show();

    if(keyIsDown(LEFT_ARROW)) {
        paddle.move(5);
    }
    
    if(keyIsDown(RIGHT_ARROW)) {
        paddle.move(5);
    }
    
}

function win() {
    
}

function lose() {
    
}

function keyPressed() {
	if (keyCode === 13) {
        gamestate = 1;
    }
}
