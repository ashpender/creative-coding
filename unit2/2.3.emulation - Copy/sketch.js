//I am trying to replicate Vera Molnar, Lignes ou formes (“Lines or shapes”), 1983. Courtesy of The Anne and Michael Spalter Digital Art Collection, to the best of my ability at this moment. the interview is at this link https://www.rightclicksave.com/article/an-interview-with-vera-molnar, and a close up of the image can be found here https://cdn.prod.website-files.com/61e6c06a23cb13bf76051194/6303ac4fe078e95399392d51_Screen%20Shot%202022-08-22%20at%2018.15.38.png.

function setup() {
  createCanvas(1050, 680);
  //making sure that it doesn't animate and run one time
  noLoop();
}

function draw() {
  //making the background a light gray
  background(218, 218, 214);

  //defining the number of shapes to be made
  let numShapes = 55;

  //repeating the defined number of shapes and draw each one
  for (let i = 0; i < numShapes; i++) {
    push();
    //random position within the x range
    let x = width / 2 + random(-500, 400); 
    //random position within the y range
    let y = height / 2 + random(-300, 25);

    //moving the origin
    translate(x, y);

    //drawing a lot of thin parallel lines to form a green rectangle
    for (let j = 0; j < 56; j++) {
      stroke(95, 200, 135);
      strokeWeight(2);
      line(0, j * 5, 100, j * 5);
    }

    pop();
  }
}



