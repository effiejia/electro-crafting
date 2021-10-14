class Demon {
    constructor({x, y}, size) {
        this.x = x
        this.y = y
        this.size = size
        this.images = images
        this.imageCounter = 12
        this.direction = 1
        this.velocityX = -10
        this.defeated = false
        this.disabled = false
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
        this.x += this.velocityX
        this.nextImage(0, 11)
    }

    die(){
        this.imageCounter = 0  
        this.disabled = true
        setTimeout(this.setDefeated, 500)
    }

    setDefeated = () => {
        this.defeated = true
    }

    render(){
        if(!this.defeated){
            image(this.images[this.imageCounter], this.x, this.y, this.size, this.size)
        }
    }

    update(){
        if(Math.random() > 0.1){
            this.x --
            if(this.imageCounter === 1){
                this.imageCounter = 2
            } else {
                this.imageCounter = 1
            }
        }

    }
}