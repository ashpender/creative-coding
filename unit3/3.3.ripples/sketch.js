let RippleX = 0;//Giving ripples their placement and values
let RippleY = 0;
let RippleD = 50; 

//Making a list for the ripples
let Ripplers = []; 

//Making class for the ripples
 class Rippler { 
  constructor(x,y) {
    this.x = x,
    this.y = y,
    this.d = 0
  }
  //Making new ripple
   draw(){
    this.d += 1;
    circle(this.x, this.y, this.d);
  }
}
function setup() {
  createCanvas(600, 600);
}

//Giving the charateristics of the ripples
function draw() {
  background(Black);
  stroke(random('Red', 'Orange', 'Blue'));
  strokeWeight(3);
  noFill();

  rippled += 1;
  circle(RippleX, RippleY, RippleD);

  //Clicking to make new ripples
  for (let i = 0; i < ripplers.length; i++){
    ripplers[i].draw();
  }
}

//Every click makes new ripple appear whever the mouse is
function mousePressed() {
  stroke(random('Red', 'Orange', 'Blue'));
  ripplex = mouseX;
  rippley = mouseY;
  rippled = 0;

  //Adding new ripple to the list
  ripplers.push(new Rippler (mouseX,mouseY));