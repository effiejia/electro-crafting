class Demon {
    constructor(animation, speed, x, y) {
        this.x = x
        this.y =y
        this.animation = animation; 
        this.len = this.animation.length;
        this.speed = speed;
        this.index = 0;
    }

    show() {
        let index = floor(this.index) % this.len;
        image(this.animation[index], this.x, this.y);
    }

    animate() {
        this.index += this.speed;
    }
}