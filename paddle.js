class Paddle {
    constructor() {
        this.x = xpos;
        this.y = ypos;
        this.length = l;
        this.width = w;
        
    }

    draw() {
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

        if (xpos < 0) { xpos = xpos + speed; }
        if (xpos > 800) { xpos = xpos - speed; }

        fill(255, 255, 255);
        rect(xpos, ypos, width, length);

    }
}