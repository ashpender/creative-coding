let dotX = 0;
let dotY = 0;
let dotSize = 50; // Size of the clickable image
let score = 0; // Player's score
let DotImage; // Placeholder for the image
let gameOver = false; // Flag for game state

function preload() {
  DotImage = loadImage("CuteCat.png"); // Load the image
}

function setup() {
  createCanvas(600, 600); // Game area
  randomizeDotPosition(); // Initialize the dot's position
  setInterval(randomizeDotPosition, 500); // Change position every 0.5 seconds
}

function draw() {
  background("PaleVioletRed"); // Background color

  if (gameOver) {
    textSize(50);
    fill(0);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2); // Display winning message
    noLoop(); // Stop the game loop
    return;
  }

  // Display the score in the top-left corner
  textSize(31);
  fill(0);
  text("Score: " + score, 5, 30);

  // Display the clickable image
  image(DotImage, dotX, dotY, dotSize, dotSize);
}

function mousePressed() {
  // Check if the mouse click is within the dot's bounds
  let d = dist(mouseX, mouseY, dotX + dotSize / 2, dotY + dotSize / 2);
  if (d < dotSize / 2) {
    score++; // Increment the score
    if (score >= 10) {
      gameOver = true; // End the game
    } else {
      randomizeDotPosition(); // Move the dot to a new random location
    }
  }
}

function randomizeDotPosition() {
  if (!gameOver) {
    // Ensure the dot stays fully visible within the canvas
    dotX = random(dotSize / 2, width - dotSize / 2);
    dotY = random(dotSize / 2, height - dotSize / 2);
  }
}
