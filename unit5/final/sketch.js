// https://docs.google.com/document/d/1DFav6rvg0CZG6TEfL_BG4UnnblGLsgUCqd4QF5lVPac/edit?usp=sharing link to my artist statement for my final project.
let dotX = 0;
let dotY = 0;
let dotSize = 50; //Size of the image
let score = 0; //Player's score
let DotImage; //Placeholder for the image
let startTime; //Tracking the start time
let endTime; //Tracking the end time

function preload() {
  DotImage = loadImage("CuteCat.png"); //Loading in the image
}

function setup() {
  createCanvas(600, 600); 
  randomizeDotPosition(); //Setting up the image's position
  setInterval(randomizeDotPosition, 500); //Changes the image's position every 0.5 seconds
  startTime = millis(); //Record the start time
}

function draw() {
  background("PaleVioletRed");
  //Setting up the "You Win!" and the stopwatch when the task is complete
  if (score >= 10) {
    textSize(50);
    fill(0);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2); //Displaying the "You Win!" message
    
    textSize(30);
    text("Time: " + ((endTime - startTime) / 1000).toFixed(2) + " seconds", width / 2, height / 2 + 60); //Displaying the stopwatch
    noLoop();
    return;
  }

  //Display the score in the top-left corner
  textSize(31);
  fill(0);
  text("Score: " + score, 5, 30);

  //Displaying the image
  image(DotImage, dotX, dotY, dotSize, dotSize);
}

function mousePressed() {
  //Making sure that when the mouse is clicked it is being clicked upon the image
  let d = dist(mouseX, mouseY, dotX + dotSize / 2, dotY + dotSize / 2);
  if (d < dotSize / 2) {
    score++; //Increases the score
    if (score >= 10) {
      endTime = millis(); //Record the end time
    } else {
      randomizeDotPosition(); //Moves the dot to a new random location
    }
  }
}

function randomizeDotPosition() {
  if (score < 10) {
    //Making sure that the image stays within the canvas
    dotX = random(dotSize / 2, width - dotSize / 2);
    dotY = random(dotSize / 2, height - dotSize / 2);
  }
}