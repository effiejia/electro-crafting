let img
let imgs = []
let counter = 0
const numImages = 16

function preload(){
    img = loadImage('lucyliu.png')
}

function setup(){
    createCanvas(400, 400)
    frameRate(5)
    for(let i = 0; i < numImages; i ++ ){
        imgs[i] = img.get( i * 96, 0, 96, 96)
    }
}

function draw(){
    background(60, 60, 60)
    // image(imgs[0], 0, 0, 200, 200)
    image(imgs[counter % numImages], 0, 0, 400, 400)
    counter ++
}
