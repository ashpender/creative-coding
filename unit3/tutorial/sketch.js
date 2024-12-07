//THis is almost the same as the ripple assignment, but insead the ripples grow and shrink, used https://editor.p5js.org/amcc/sketches/3ZLqytY_4 to help a little bit
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
    this.growing = true; // makes ripple grow
  }

  // Draws a new ripple
  draw() {
    if (this.growing) {
      this.d += 2; // Expand
      if (this.d > 100) this.growing = false; // after a certain point of growing it will shrink
    } else {
      this.d -= 2; // Contract
      if (this.d < 10) this.growing = true; // after a certain point of shrinking it will grow again
    }

    stroke(random(['red', 'orange', 'blue'])); // Randomize the colors
    circle(this.x, this.y, this.d);
  }
}

function setup() {
  createCanvas(600, 600);
}

// Characteristics of the ripples
function draw() {
  background('black'); // Making Black background  to clear the last drawings
  noFill();

  RippleD += 1;
  circle(RippleX, RippleY, RippleD);

  // Draw each ripple
  for (let i = 0; i < Ripplers.length; i++) {
    Ripplers[i].draw();
  }
}

// Every click makes a new ripple appear wherever the mouse is clicked
function mousePressed() {
  RippleX = mouseX;// Update the x-coordinate
  RippleY = mouseY;// Update the y-coordinate
  RippleD = 0; //Resets the diameter

  // Adding a new ripple to the list
  Ripplers.push(new Rippler(mouseX, mouseY));
}