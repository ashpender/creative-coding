let debug = false; // following canvas directions
let speedfactor = 4;
let xspeed = speedfactor;
let yspeed = speedfactor;
let x = 0;
let y = 0;
let d = 0;
let FollowerImage; // Corrected declaration
let score = 0; // Added score initialization

function preload() {
  FollowerImage = loadImage("Stalkercat.jpg");
}

function setup() {
  createCanvas(600, 600);

  // the spawn of image
  x = random(width);
  y = random(height);
}

function draw() {
  background("PaleVioletRed");

  // Score display in top left corner
  textSize(45);
  fill(0);
  text("score: " + score, 10, 30);

  // Distance formula
  d = sqrt((x - mouseX) ** 2 + (y - mouseY) ** 2);

  // Move the image
  x += xspeed;
  y += yspeed;

  // Display the image
  image(FollowerImage, x, y);

  // The image follows the cursor
  if (mouseX > x) {
    xspeed = speedfactor;
  } else {
    xspeed = -speedfactor;
  }
  if (mouseY > y) {
    yspeed = speedfactor;
  } else {
    yspeed = -speedfactor;
  }

  // If the image and cursor touch, respawn image randomly and increase score
  if (d < 25) {
    score += 1;
    x = random(width);
    y = random(height);
  }

  // Debug information
  if (debug) {
    textSize(30);
    text("mouseX: " + mouseX, 50, 50);
    text("mouseY: " + mouseY, 50, 80);
    text("x: " + x, 50, 120);
    text("y: " + y, 50, 150);
    text("d: " + d, 50, 180);
  }
}
