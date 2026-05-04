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
  createCanvas(windowWidth, windowHeight); // ✅ FIX 1: fits any screen size
  textFont("Helvetica");
  buildButtons(); // build buttons in a separate function so we can rebuild on resize
}

function buildButtons() {
  buttons = [];
  let btnWidth = min(width * 0.85, 500); // ✅ FIX 2: max 500px but shrinks on phone
  let btnHeight = max(height * 0.08, 55); // ✅ FIX 3: tall enough to tap on phone
  let spacing = height * 0.03;
  let startY = height * 0.42;

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
  resizeCanvas(windowWidth, windowHeight); // ✅ FIX 4: handles phone rotation
  buildButtons();
}

function draw() {
  background(bgImage);
  fill(0, 180);
  rect(0, 0, width, height);

  fill(255);
  textAlign(CENTER, TOP);
  textSize(max(width * 0.035, 20)); // ✅ FIX 5: text scales with screen
  text("pH Scale Simulation", width / 2, height * 0.1);

  fill(255);
  textSize(max(width * 0.018, 13)); // ✅ FIX 6: description text scales too
  textStyle(BOLD);
  text(
    "Learn about the pH scale by mixing liquids and testing them with litmus paper.",
    width / 2,
    height * 0.22,
    width * 0.85 // ✅ FIX 7: wraps text properly on small screens
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
  textSize(max(width * 0.018, 13)); // ✅ scales button text too
  textStyle(NORMAL);
  textAlign(CENTER, CENTER);
  text(btn.label, btn.x + btn.w / 2, btn.y + btn.h / 2);
}

function mousePressed() {
  handlePress(mouseX, mouseY); // ✅ FIX 8: shared function for mouse and touch
}

function touchStarted() {
  handlePress(touches[0].x, touches[0].y); // ✅ FIX 9: touch support added!
  return false; // prevents page scrolling when tapping
}

function handlePress(x, y) {
  for (let btn of buttons) {
    if (x > btn.x && x < btn.x + btn.w && y > btn.y && y < btn.y + btn.h) {
      playClickSound();
      if (btn.label === "Magic Liquids: Acid or Base?") {
        window.open("https://parthmevada2307.github.io/Sim1/", "_self"); // ✅ FIX 10: _self works in iframes on mobile
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
