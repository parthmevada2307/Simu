let buttons = [];
let bgImage;
let clickSound;

function preload() {
  bgImage = loadImage("WhatsApp Image 2025-05-27 at 16.04.03_588b0500.jpg");
  clickSound = loadSound("mixkit-sci-fi-click-900.wav");
}

function setup() {
  window.scrollTo(0, 0);
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
  textFont("Helvetica");
  buildDOMButtons();
}

function buildDOMButtons() {
  // Remove existing buttons
  for (let btn of buttons) {
    if (btn.dom) btn.dom.remove();
  }
  buttons = [];

  let buttonLabels = [
    { label: "Magic Liquids: Acid or Base?", color: "#4da6ff", url: "https://parthmevada2307.github.io/Sim1/" },
    { label: "How is it acidic or basic?", color: "#ffd633", url: "https://parthmevada2307.github.io/Sim2/" },
    { label: "Mix and Change! Can We Flip It?", color: "#66cc66", url: "https://parthmevada2307.github.io/Sim3/" }
  ];

  let btnWidth = min(width * 0.85, 500);
  let btnHeight = max(height * 0.09, 60);
  let spacing = max(height * 0.03, 15);
  let startY = height * 0.32;

  for (let i = 0; i < buttonLabels.length; i++) {
    let b = buttonLabels[i];
    let btn = createButton(b.label);
    
    btn.position(width / 2 - btnWidth / 2, startY + i * (btnHeight + spacing));
    btn.size(btnWidth, btnHeight);
    
    btn.style('background-color', b.color);
    btn.style('color', '#000');
    btn.style('border', 'none');
    btn.style('border-radius', '20px');
    btn.style('font-family', 'Helvetica, Arial, sans-serif');
    btn.style('font-size', `${min(max(width * 0.018, 13), 18)}px`);
    btn.style('font-weight', 'bold');
    btn.style('cursor', 'pointer');
    btn.style('box-shadow', '0 4px 6px rgba(0,0,0,0.3)');

    // Use pure DOM event listener for maximum mobile compatibility
    btn.elt.addEventListener('click', () => {
      playClickSound();
      window.open(b.url, "_self");
    });

    buttons.push({ dom: btn });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buildDOMButtons();
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
}

function playClickSound() {
  if (clickSound.isPlaying()) {
    clickSound.stop();
  }
  clickSound.play();
}
