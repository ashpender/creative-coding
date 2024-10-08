function setup() {
  // create a canvas
  createCanvas(400, 400);

  // disable animation
  noLoop();
}

function draw() {
  background(220);
  //Main body
  fill(280,100,230);
  stroke("gold");
  strokeWeight(5)
  circle(200,200,250);
  //Left eye
  fill(200,200,200);
  stroke("black");
  strokeWeight(5)
  circle(145,175,85);
  //Left Pupil
  fill("black");
  circle(145,175,20);
  //Right eye
  fill(200,200,200);
  stroke("black");
  strokeWeight(5)
  circle(255,175,85);
  //Right Pupil
  fill("black");
  circle(255,175,20);
  //Mouth
  stroke("black");
  strokeWeight(9)
  line(150,275,250,275)
  //Blushing
  stroke("red")
  strokeWeight(4)
  line(135,250,150,230)

  stroke("red")
  strokeWeight(4)
  line(150,250,165,230)

  stroke("red")
  strokeWeight(4)
  line(165,250,180,230)

  stroke("red")
  strokeWeight(4)
  line(180,250,195,230)

  stroke("red")
  strokeWeight(4)
  line(195,250,210,230)

  stroke("red")
  strokeWeight(4)
  line(210,250,225,230)

  stroke("red")
  strokeWeight(4)
  line(225,250,240,230)

  stroke("red")
  strokeWeight(4)
  line(240,250,255,230)

  stroke("red")
  strokeWeight(4)
  line(255,250,270,230)

  rectMode(CENTER);
 
}