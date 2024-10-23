function setup() {
  createCanvas(1050, 680);
  noLoop();
}

function draw() {
  background(218, 218, 214);

  let numShapes = 50;

  for (let i = 0; i < numShapes; i++) {
    push();
    let x = width / 2 + random(-750, 750); 
    let y = height / 2 + random(-200, 200);

    translate(x, y);

    for (let j = 0; j < 56; j++) {
      stroke(95, 200, 135);
      strokeWeight(2);
      line(0, j * 5, 100, j * 5);
    }

    pop();
  }
}



