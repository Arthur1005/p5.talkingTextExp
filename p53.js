let inputText = '';
let speech;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('monospace');
  speech = new p5.Speech();
  speech.setPitch(2);
  speech.setRate(1);
}

function draw() {
  background(20);

  noStroke();
  textAlign(CENTER, CENTER);
  if (inputText.length === 0) {
    let bright = map(sin(millis() / 400), -1, 1, 30, 80);
    fill(bright);
    textSize(16);
    text('TYPE SOMETHING', width / 2, height / 2);
  } else {
    fill(255);
    textSize(300);
    text(inputText.toUpperCase(), width / 2, height / 2);
  }
}

function keyPressed() {
  if (keyCode === BACKSPACE) {
    inputText = inputText.slice(0, -1);
  } else if (keyCode === ENTER && inputText.length > 0) {
    speech.speak(inputText);
  }
}

function keyTyped() {
  if (inputText.length < 8 && /^[a-zA-Z ]$/.test(key)) inputText += key;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
