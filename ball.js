class Ball {
    constructor() {
        Ball.x = bx;
        ball.y = by;
        ball.vx = bvx;
        ball.vy = bvy;
    

    
}
    
}


function draw() {
    
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
}
