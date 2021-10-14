let lucyImg, demonImg
let images
let game

function preload(){
    lucyImg = loadImage('assets/lucyliu.png')
    demonImg = loadImage('assets/demon1.png')

    images = {
        lucyImg,
        demonImg
    }
}

function setup(){
    createCanvas(1000, 600)
    background(60, 60, 60)
    frameRate(15)
    
    game = new Game(images)
    
}

function draw(){
    checkKeys()
    game.update()
    game.render()
}

function checkKeys() {
    if (keyIsDown(LEFT_ARROW)) {
        game.hero.runLeft()
        return
    } else if (keyIsDown(RIGHT_ARROW)) {
        game.hero.runRight()
        return
    }
}

function keyPressed() {
    if (key == 's') {
        game.hero.slash()
    }
}

