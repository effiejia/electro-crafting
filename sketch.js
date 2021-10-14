let lucySheet;
let lucyData;
let demonSheet;
let demonData;
let demon2Sheet;
let demon2Data;

let lucyNormal = [];
let lucyPunch = [];
let lucySlash = [];
let demonNormal = [];
let demon2Normal = [];

let lucyN;
let lucyP;
let lucyS;
let demonN;
let demon2N;

let active = 'N';
let timeDelay;

let punchSound;
let slashSound;
let normalSound;

function preload() {
    lucyData = loadJSON('assets/lucy.json');
    lucySheet = loadImage('assets/lucy.png');
    demonData = loadJSON('assets/demon.json');
    demonSheet = loadImage('assets/demon.png');
    demon2Data = loadJSON('assets/demon2.json');
    demon2Sheet = loadImage('assets/demon2.png');

    punchSound = loadSound('assets/punch.mp3');
    slashSound = loadSound('assets/slash.mp3');
    normalSound = loadSound('assets/normal.wav');
}

function setup() {
    let width = windowWidth;
    let height = windowHeight; 
    createCanvas(width, height);
    
    let frames = lucyData.frames;
    let framesDemon = demonData.frames;
    let framesDemon2 = demon2Data.frames;

    for (let i = 0; i < 2; i++) {
        let posN = frames[i].position;
        let imgN = lucySheet.get(posN.x, posN.y, posN.w, posN.h);
        lucyNormal.push(imgN);
    }
    lucyN = new Lucy(lucyNormal, 1/16, width/4, height/3);

    for (let i = 0; i < 6; i++) {
        let posP = frames[i].position;
        let imgP = lucySheet.get(posP.x, posP.y, posP.w, posP.h);
        lucyPunch.push(imgP);
    }
    lucyP = new Lucy(lucyPunch, 1/8, width/4, height/3);

    for (let i = 6; i < 17; i++) {
        let posS = frames[i].position;
        let imgS = lucySheet.get(posS.x, posS.y, posS.w, posS.h);
        lucySlash.push(imgS);
    }
    lucyS = new Lucy(lucySlash, 1/4, width/4, height/3);

    for (let i = 0; i < 12; i++) {
        let pos = framesDemon[i].position;
        let img = demonSheet.get(pos.x, pos.y, pos.w, pos.h);
        demonNormal.push(img);
    }
    demonN = new Demon(demonNormal, 1/4, width/4 + 300, height/3 + 30); 

    for (let i = 0; i < 9; i++) {
        let pos2 = framesDemon2[i].position;
        let img2 = demon2Sheet.get(pos2.x, pos2.y, pos2.w, pos2.h);
        demon2Normal.push(img2);
    }
    demon2N = new Demon(demon2Normal, 1/5, width/4 + 360, height/3 - 20); 
}

function draw() {
    background(116, 155, 103);
    textSize(24);
    textAlign(CENTER);
    textFont('Helvetica');
    fill(210, 223, 206);
    text('Press "P" to punch OIWA, Press "S" to slash a TENGU, Press "N" to RECOVER', width/2, height/4);
    textSize(48);
    text('(NIN)JIA', width/2, height/6);

    if (active === 'N') {
        lucyN.show();
        lucyN.animate();
        timeDelay = 1000;
    } else if (active === 'P') {
        lucyP.show();
        lucyP.animate();
        timeDelay = 2000;
        demonN.show();
        demonN.animate();
    } else if (active === 'S') {
        lucyS.show();
        lucyS.animate();
        timeDelay = 3000;
        demon2N.show();
        demon2N.animate();
    }

}

function keyPressed() {
    if (keyCode == 78) {
        active = 'N';
        normalSound.play();
        return active;
    }
    if (keyCode == 80) {
        active = 'P';
        punchSound.play();
        return active;
    }
    if (keyCode == 83) {
        active = 'S';
        slashSound.play();
        return active;
    }
}

function reset() {
    active = 'N';
}
