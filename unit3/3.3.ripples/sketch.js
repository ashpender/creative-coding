//Wanted the ripples to look like a neon videogame vibe 
let RippleX = 0; // Giving ripples their placement and values
let RippleY = 0;
let RippleD = 50;

// Making a list for the ripples
let Ripplers = [];

// Class for the ripples
class Rippler {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.d = 0;
  }

  // Draws a new ripple
  draw() {
    this.d += 1;
    circle(this.x, this.y, this.d);
  }
}

function setup() {
  createCanvas(600, 600);
}

// Characteristics of the ripples
function draw() {
  background('black'); // Making Black background
  stroke(random(['red', 'orange', 'blue']));// Making the ripples change colors
  strokeWeight(3);
  noFill();

  RippleD += 1;
  circle(RippleX, RippleY, RippleD);

  // Drawing each ripple
  for (let i = 0; i < Ripplers.length; i++) {
    Ripplers[i].draw();
  }
}

// Every click makes a new ripple appear wherever the mouse is clicked
function mousePressed() {
  RippleX = mouseX;
  RippleY = mouseY;
  RippleD = 0;

  // Adding a new ripple to the list
  Ripplers.push(new Rippler(mouseX, mouseY));
}
