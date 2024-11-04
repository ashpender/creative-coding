function setup() {
  createCanvas(400, 600);
}

//following cancvas directions
let x = 26;
let y = 26;
let xspeed = 3;
let yspeed = 2;

function draw() {
  background(220);

   // check for collision with left and right edge
  if (x < 25 | x > 375){
      xspeed = xspeed * -1; // reverse the x direction
       fill(random(0,255),random(0,255),random(0,255),255);//changes color when hitting the sides
  }
  if (y < 25 | y > 575){
      yspeed = yspeed * -1; //reverse the y direction
      fill(random(0,255),random(0,255),random(0,255),255);//changes color when hitting up and down
  }

  x = x + xspeed; // iterate x

  y = y + yspeed; // iterate y

  // draw a circle
  circle(x, y, 50);
}
