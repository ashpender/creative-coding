let dotX = 0;
let dotY = 0;
let dotSize = 50; // Size of the clickable image
let score = 0; // Player's score
let DotImage;
let gameOver = false;

function preload() {
  DotImage = loadImage("CuteCat.png"); // Load the image
}

function setup() {
  createCanvas(600, 600); // Create the canvas
  centerCanvas(); // Position the canvas in the center
  randomizeDotPosition(); // Start with a random position for the dot
  setInterval(randomizeDotPosition, 500); // Change dot position every 0.5 seconds
}

function centerCanvas() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y); // Reposition the canvas when called
}

function windowResized() {
  centerCanvas(); // Re-center the canvas when the window size changes
}

function draw() {
  background("PaleVioletRed"); // Set the background color

  if (gameOver) {
    textSize(50);
    fill(0);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2); // Show win message
    noLoop(); // Stop the game
    return;
  }

  textSize(31);
  fill(0);
  text("Score: " + score, 10, 30); // Display score in the top left

  image(DotImage, dotX, dotY, dotSize, dotSize); // Show the dot image
}

function mousePressed() {
  let d = dist(mouseX, mouseY, dotX + dotSize / 2, dotY + dotSize / 2);
  if (d < dotSize / 2) {
    score += 1; // Add to the score
    if (score >= 10) {
      gameOver = true; // End the game when score is 10
    } else {
      randomizeDotPosition(); // Move the dot if game isn’t over
    }
  }
}

function randomizeDotPosition() {
  if (!gameOver) {
    dotX = random(dotSize / 2, width - dotSize / 2);
    dotY = random(dotSize / 2, height - dotSize / 2); // Ensure the dot stays on canvas
  }
}
