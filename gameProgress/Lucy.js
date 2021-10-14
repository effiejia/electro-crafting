class Lucy {
    constructor({x, y}, size) {
        this.x = x
        this.y = y
        this.size = size
        this.images = images
        this.imageCounter = 32
        this.direction = 1
        this.velocityX = 0
        this.accelerationX = 10
        this.drag = 2
    }

    nextImage(start, end) {
        if (this.imageCounter < start) {
            this.imageCounter = start
        } else if (this.imageCounter > end) {
            this.imageCounter = start
        } else {
            this.imageCounter += this.direction
        }
    }
    
    move() {
        this.velocityX += this.accelerationX
    }

    runLeft() {
        this.direction = -1
        this.move()
        this.nextImage(0, 4)
    }

    runRight() {
        this.direction = 1
        this.move()
        this.nextImage(17, 21)
    }

    towardsRest() {
        if (this.velocityX > 0) {
            this.velocityX -= this.drag
        } else {
            if (this.x > 500) {
                this.imageCounter = 3
            } else {
                this.imageCounter = 4
            }
        }
    }

    keepOnScreen() {
        if (this.x < 0) {
            this.x = 0
            this.velocityX = 0
        }
        if (this.x > 900) {
            this.x = 900
            this.velocityX = 0
        }
    }

    update() {
        this.x += this.direction * this.velocityX
        this.towardsRest()
        this.keepOnSCreen()
    }

    render() {
        image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
    }
    
}