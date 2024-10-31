//I set out to create a landscape that shows the beauty of a port with sailboats resting on ever-changing water. I love how the waves turned out.They range from calm to big and dramatic, which adds life to the scene. Using different shades of blue gave the waves depth and made them look like they’re fading into the distance. The simple sailboats fit right in and add a nice touch to the overall look. The mix of boats, layered waves, and colors creates a peaceful vibe that I really enjoy.


function setup() {

  // create the canvas
  createCanvas(1000, 800);
  noLoop();  
}

function draw() {
  //dark blue for night sky
  background("MidnightBlue");

  //no outline on objects
  noStroke();

  //Making farthest wave dark and smooth
  fill("DarkSlateBlue");
  beginShape();
  for(let x = 0; x < 201; x++){
    let y = noise(x * 0.01) * 400;
    vertex(x*10, y);
  }
  vertex(1000, 800);
  vertex(0, 800);  
  endShape();

  //making second farthest wave and making it lighter
  fill("SteelBlue");
  beginShape();
  for(let x = 0; x < 1001; x+=.1){
    let y = noise(x * 0.005) * 700;
    vertex(x*8, y);
  }
  vertex(1000, 800);
  vertex(0, 800);
  endShape();

 //make closer wave and it is a lighter blue sense it is really close
 fill("RoyalBlue");
  beginShape();
  for(let x = 0; x < 800; x+=.1){
    let y = noise(x * 0.005) * 850;
    vertex(x*5, y);
  }
  vertex(1000, 800);
  vertex(0, 800);
  endShape();

  //Making still water, where to possibly park boats
  fill("DeepSkyBlue");
  rect(0, 600, 1000, 200);

  //placing boats
  for(let i = 0; i < 2; i++){
    Boats();
  }

}


function Boats(){
    //Randomize the coordinates of the boats
    let x = random(50, 900);
    let y = random(620, 700);

   // Setting the fill to brown for the boat and post
   fill("Brown");
   // Drawing the half-circle for the boat 
   arc(x, y, 200, 100, 0, PI, OPEN);
   // Draw the skinny rectangle for the post
   rect(x - 5, y - 150, 10, 150);
   // Set the fill to white for the sail
   fill("White");
   // Draw the triangle for the sail
   triangle(x, y - 150, x + 100, y - 50, x, y - 50);
}