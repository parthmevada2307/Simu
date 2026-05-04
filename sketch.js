let buttons = [];
let buttonLabels = [
  "Magic Liquids: Acid or Base?",
  "How is it acidic or basic?",
  "Mix and Change! Can We Flip It?"
];
let buttonColors = ["#4da6ff", "#ffd633", "#66cc66"];
let bgImage;
let clickSound;

function preload() {
  bgImage = loadImage("WhatsApp Image 2025-05-27 at 16.04.03_588b0500.jpg");
  clickSound = loadSound("mixkit-sci-fi-click-900.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  textFont("Helvetica");
  buildButtons();
}

function buildButtons() {
  buttons = [];
  let btnWidth = min(width * 0.85, 500);
  let btnHeight = max(height * 0.09, 60);
  let spacing = max(height * 0.03, 15);
  let startY = height * 0.32; // moved up from 0.42

  for (let i = 0; i < 3; i++) {
    buttons.push({
      x: width / 2 - btnWidth / 2,
      y: startY + i * (btnHeight + spacing),
      w: btnWidth,
      h: btnHeight,
      label: buttonLabels[i],
      color: buttonColors[i]
    });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buildButtons();
}

function draw() {
  background(bgImage);
  fill(0, 180);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(max(width * 0.035, 20));
  text("pH Scale Simulation", width / 2, height * 0.1);

  fill(255);
  textSize(min(max(width * 0.018, 13), 18));
  textStyle(BOLD);
  let descWidth = min(width * 0.85, 600);
  text(
    "Learn about the pH scale by mixing liquids and testing them with litmus paper.",
    width / 2 - descWidth / 2,
    height * 0.22,
    descWidth
  );

  for (let btn of buttons) {
    drawButton(btn);
  }
}

function drawButton(btn) {
  noStroke();
  fill(btn.color);
  rect(btn.x, btn.y, btn.w, btn.h, 20);
  fill(0);
  textSize(min(max(width * 0.018, 13), 18));
  textStyle(NORMAL);
  textAlign(CENTER, CENTER);
  text(btn.label, btn.x + 10, btn.y + 2, btn.w - 20, btn.h - 4);
}

function mouseClicked() {
  handlePress(mouseX, mouseY);
}

function handlePress(x, y) {
  for (let btn of buttons) {
    if (x > btn.x && x < btn.x + btn.w && y > btn.y && y < btn.y + btn.h) {
      playClickSound();
      if (btn.label === "Magic Liquids: Acid or Base?") {
        window.open("https://parthmevada2307.github.io/Sim1/", "_self");
      }
      if (btn.label === "How is it acidic or basic?") {
        window.open("https://parthmevada2307.github.io/Sim2/", "_self");
      }
      if (btn.label === "Mix and Change! Can We Flip It?") {
        window.open("https://parthmevada2307.github.io/Sim3/", "_self");
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
