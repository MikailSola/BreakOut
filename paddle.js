class Paddle {
    constructor() {
        this.x = 100;
        this.y = height - 50;
        this.w = 100;
        this.h = 15;
    }

    show() {          
        fill(255, 255, 255);
        rect(this.x, this.y, this.width, this.length);
    }

    move(dir) {
        if (this.x > width - this.w) {
            this.x = width - this.w - 1;
        } else if (this.x < this.w) {
            this.x = this.w + 1;
        }
            this.x = this.x + dir;
        }
    }
}