let debug = false; // Debug toggle
let dotX = 0;
let dotY = 0;
let dotSize = 50; // Size of the clickable image
let score = 0; // Player's score
let DotImage; // Placeholder for the image

function preload() {
  DotImage = loadImage("CuteCat.png"); // Load the image
}

function setup() {
  createCanvas(600, 600); // Game area
  randomizeDotPosition(); // Initialize the dot's position
}

function draw() {
  background("PaleVioletRed"); // Background color

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
    randomizeDotPosition(); // Move the dot to a new random location
  }
}

function randomizeDotPosition() {
  // Ensure the dot stays fully visible within the canvas
  dotX = random(dotSize / 2, width - dotSize / 2);
  dotY = random(dotSize / 2, height - dotSize / 2);
}
