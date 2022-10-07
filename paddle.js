class Paddle {
    constructor() {
        this.x = 100;
        this.y = height - 50;
        this.length = 20;
        this.width = 100;        
    }

    draw() {          

        if(keyIsDown(RIGHT_ARROW) ){
            this.x += 5;
        }
        if(keyIsDown(LEFT_ARROW)) {
            this.x -= 5;
        }

        fill(255, 255, 255);
        rect(this.x, this.y, this.width, this.length);
    }
}