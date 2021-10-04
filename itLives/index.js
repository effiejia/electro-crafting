// const backgroundColor = [230,220,190];
const sounds = Array.from({ length: 6 });

const defaultFill = [0, 0, 255];
const defaultStroke = [255, 255, 255];
const activeBallColor = [255, 0, 0];
const activeBallWidth = 9;

const lineColor = [255, 255, 255];
const activeLineColor = [255, 0, 0];
const lineWidth = 3;
const activeLineWidth = 9;

const ball1 = {
    x: 300,
    y: 600,
    r: 100,
    speed: 1,
    fillColor: defaultFill,
    strokeColor: defaultStroke,
    outlineWidth: 3,
    soundLength: 2000,
}

const ball2 = {
    x: 300,
    y: 400,
    r: 75,
    speed: 1.5,
    fillColor: defaultFill,
    strokeColor: defaultStroke,
    outlineWidth: 3,
    soundLength: 1000,
}

const ball3 = {
    x: 300,
    y: 200,
    r: 50,
    speed: 2,
    fillColor: defaultFill,
    strokeColor: defaultStroke,
    outlineWidth: 3,
    soundLength: 500,
}

const balls = [ball1, ball2, ball3]

const activateBall = (ball) => {
    ball.fillColor = activeBallColor
    ball.outlineWidth = activeBallWidth
    setTimeout(() => resetBall(ball), 500)
}

const resetBall = (ball) => {
    ball.fillColor = defaultFill
    ball.outlineWidth = defaultStroke
}

const drawCircle = ({x, y, r, fillColor, strokeColor}) => {
    stroke(strokeColor);
    fill(fillColor);
    ellipse(x, y, r);
}

const leftEdge = {
    x1: 130,
    y1: 0,
    x2: 130,
    y2: 800,
    color: lineColor,
    width: lineWidth,
}

const rightEdge = {
    x1: 670,
    y1: 0,
    x2: 670,
    y2: 800,
    color: lineColor,
    width: lineWidth,
}

const drawLine = ({x1, y1, x2, y2, color, width}) => {
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}

const lines = [leftEdge, rightEdge];

const activateLine = (line) => {
    line.color = activeLineColor
    line.width = activeLineWidth
    setTimeout(() => resetLine(line), 500)
}

const resetLine = (line) => {
    line.color = lineColor
    line.width = lineWidth
}

const updateBall = (ball) => {
    if (ball.x > rightEdge.x1 - ball.r/2) {
        ball.speed *= -1;
        ball.rightSound.play();
        activateBall(ball);
        activateLine(rightEdge);
    } else if (ball.x - ball.r/2 < leftEdge.x1) {
        ball.speed *= -1;
        ball.leftSound.play();
        activateBall(ball);
        activateLine(leftEdge);
    }
    ball.x += ball.speed;
}

function preload(){
    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.wav`)
    })

    ball1.rightSound = sounds[0];
    ball1.leftSound = sounds[1];
    ball2.rightSound = sounds[2];
    ball2.leftSound = sounds[3];
    ball3.rightSound = sounds[4];
    ball3.leftSound = sounds[5];

    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }
}

function setup(){
    createCanvas(800, 800);
}

function draw(){
    background(0,0,0);
    lines.forEach(line => {
        drawLine(line)
    })
    balls.forEach(ball => {
        updateBall(ball);
        drawCircle(ball);
    })
    
}