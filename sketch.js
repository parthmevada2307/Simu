let buttons = [];
let buttonLabels = [
  "Magic Liquids: Acid or Base?",
  "How is it acidic or basic?",
  "Mix and Change! Can We Flip It?"
];

let buttonColors = ["#4da6ff", "#ffd633", "#66cc66"]; // Blue, Yellow, Green
let buttonWidths = [500, 500, 500]; // Increased widths

let osc; // oscillator for click sound
let bgImage; // background image
let clickSound;

function preload() {
  bgImage = loadImage("WhatsApp Image 2025-05-27 at 16.04.03_588b0500.jpg");
  clickSound = loadSound("mixkit-sci-fi-click-900.wav");
}

function setup() {
  createCanvas(1200, 800);
  textFont("Helvetica");

  let btnHeight = 70;
  let spacing = 50;

  for (let i = 0; i < 3; i++) {
    let btnWidth = buttonWidths[i];
    buttons.push({
      x: width / 2 - btnWidth / 2,
      y: 320 + i * (btnHeight + spacing),
      w: btnWidth,
      h: btnHeight,
      label: buttonLabels[i],
      color: buttonColors[i]
    });
  }

  osc = new p5.Oscillator('square');
  osc.freq(1000);
  osc.amp(0);
  osc.start();
}

function draw() {
  background(bgImage);
  fill(0, 180);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(48);
  text("pH Scale Simulation", width / 2, 87);

  fill(255);
  textSize(22);
  textStyle(BOLD);
  text("Learn about the pH scale by mixing liquids and testing them with litmus paper.", width / 2, 170);

  for (let btn of buttons) {
    drawButton(btn);
  }
}

function drawButton(btn) {
  noStroke();
  fill(btn.color);
  rect(btn.x, btn.y, btn.w, btn.h, 20);

  fill(0);
  textSize(18);
  textAlign(CENTER, CENTER);
  text(btn.label, btn.x + btn.w / 2, btn.y + btn.h / 2);
}

function mousePressed() {
  for (let btn of buttons) {
    if (
      mouseX > btn.x &&
      mouseX < btn.x + btn.w &&
      mouseY > btn.y &&
      mouseY < btn.y + btn.h
    ) {
      playClickSound();

     
      if (btn.label === "Magic Liquids: Acid or Base?") {
        window.open("https://parthmevada2307.github.io/Sim1/", "_blank");
      }
      
       if (btn.label === "How is it acidic or basic?" 
) {
        window.open("https://parthmevada2307.github.io/Sim2/","_blank");
      }
      
      if (btn.label === "Mix and Change! Can We Flip It?") {
        window.open("https://parthmevada2307.github.io/Sim3/", "_blank");
      }
    }
  }
}

function playClickSound() {
  if (clickSound.isPlaying()) {
    clickSound.stop();
  }
  clickSound.play();
}
