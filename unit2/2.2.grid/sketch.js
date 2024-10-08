function setup() {
  // create a canvas
  createCanvas(1200, 1200);

  // disable animation
  noLoop();
}
//based on instructions
function draw() {
background(220)
translate(100,100);
//change 8 to 11 to make it look a bit bigger
for (let x = 0; x < 11; x++){
  for (let y = 0; y < 11; y++){
      //changed if from ellipse to arc
      arc(-20,0,100,100);
    //based on instructions
      push();
      //based on instructions
      translate(x * 100, y * 100);
        // Random the main color
      fill(random(300), random(300), random(300));
      // Random the stroke color
      stroke(random(300), random(300), random(300));
      // Random the stroke thickness, making it out of 8 so there is more variety and the grid is 8 by 8
      strokeWeight(random(0, 8));
      //based on instructions
      ellipse(0,0,100,100);
      //based on instructions
      pop();
   }
}
  
}