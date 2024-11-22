 //I wanted to make a clock that represents a clock where for example the time is 4:25. there are 4 large lavender circles to represent the hour, 2 smaller orange squares to represent the tens place of the minute, 5 smaller yellow to represent the ones place of the minutes, then blue triangles to represent the seconds. I want each unit to stay within a quarter of the canvas, so the hour is in the first quarter, the tenths place is the second quarter, the ones place is the third quarter, and seconds is in the fourth quarter. This is shown going left to right.
 //I wanted an abstract fun feel to it. 

 // To track previous second, got the idea fromhttps://www.w3schools.com/jsref/jsref_setseconds.asp
let lastSecond = -1;

function setup() {
  createCanvas(700, 700);
  background(220);
  noStroke();

}

function draw() {
  let hr = hour();
  let mn = minute();
  let sec = second();

  // To help avoid excessive redraws
  if (sec !== lastSecond) {
    lastSecond = sec;

    background(220);

    // Stroke settings for all shapes
    strokeWeight(3);
    stroke(0);

    // Draw hours as large lavender circles
    for (let i = 0; i < hr; i++) {
      //control the x range of the circles
      let x = width / 2 + random(-325, -160);
      //control the y range of the circles
      let y = height / 2 + random(-300, 300); 
      fill(200, 150, 255, 200); // Lavender color
      ellipse(x, y, 50);
    }

    //Orange squares to represent the tenths place of the minutes
    let tens = floor(mn / 10);
    for (let i = 0; i < tens; i++) {
      //control the x range of the squares
      let x = width / 2 + random(-140, 20); 
      //control the y range of the squares
      let y = height / 2 + random(-300, 300); 
      fill(255, 165, 0, 200); // Orange color
      rect(x, y, 30, 30);
    }

    //Yellow circles to represent the ones place of the minutes
    let ones = mn % 10;
    for (let i = 0; i < ones; i++) {
      //control the x range of the circles
      let x = width / 2 + random(40, 175); 
      //control the y range of the circles
      let y = height / 2 + random(-300, 300);
      fill(255, 255, 0, 200); // Yellow color
      ellipse(x, y, 20);
    }

    //Blue triangles to represent the seconds
    for (let i = 0; i < sec; i++) {
      //control the x range of the triangles
      let x1 = width / 2 + random(190, 330); 
      //control the y range of the triangles
      let y1 = height / 2 + random(-300, 300);
      let x2 = x1 + random(-10, 10);
      let y2 = y1 + random(20, 30);
      let x3 = x1 + random(10, 20);
      let y3 = y1;
      fill(0, 0, 255, 200); // Blue color
      triangle(x1, y1, x2, y2, x3, y3);
    }
  }
}