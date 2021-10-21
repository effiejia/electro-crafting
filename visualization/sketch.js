// Code inspired from Daniel Shiffman's sound visualization tutorials

var sound1, sound2, sound3;
var amp1, amp2, amp3;
var vol1history = [];
var vol2history = [];
var vol3history = [];

function preload() {
  sound1 = loadSound('assets/clap.wav');
  sound2 = loadSound('assets/synth.wav');
  sound3 = loadSound('assets/hats.wav');
}

function setup() {
  createCanvas(window.innerHeight, window.innerHeight);
  angleMode(DEGREES);
  sound1.play();
  sound2.play();
  sound3.play();
  amp1 = new p5.Amplitude();
  amp2 = new p5.Amplitude();
  amp3 = new p5.Amplitude();
}

function draw() {
  background(0);
  var vol1 = amp1.getLevel();
  var vol2 = amp2.getLevel();
  var vol3 = amp3.getLevel();
  vol1history.push(vol1);
  vol2history.push(vol2);
  vol3history.push(vol3);
  stroke(255);
  noFill();

  translate(width / 2, height / 2);

  beginShape();
  for (var i = 0; i < 360; i++) {
    var r1 = map(vol1history[i], 0, 1, 50, 200);
    var x1 = r1 * cos(i);
    var y1 = r1 * sin(i);
    vertex(x1, y1);
  }
  endShape();

  beginShape();
  for (var j = 0; j < 360; j++) {
    var r2 = map(vol2history[j], 0, 1, 150, 300);
    var x2 = r2 * cos(j);
    var y2 = r2 * sin(j);
    vertex(x2, y2);
  }
  endShape();

  beginShape();
  for (var k = 0; k < 360; k++) {
    var r3 = map(vol3history[k], 0, 1, 250, 400);
    var x3 = r3 * cos(k);
    var y3 = r3 * sin(k);
    vertex(x3, y3);
  }
  endShape();

  if (vol1history.length > 360) {
    vol1history.splice(0, 1);
  }

  if (vol2history.length > 360) {
    vol2history.splice(0, 1);
  }

  if (vol3history.length > 360) {
    vol3history.splice(0, 1);
  }
}