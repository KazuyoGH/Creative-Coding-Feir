// Loads the contents before everything else runs.
function preload() {
  // Pre-loads the image.
  pic = loadImage('Eric.jpg')
}

function setup() {
  createCanvas(400, 400);
  background(255)
  // Creates a clip in which all objects inside will be seen through.
  beginClip();
  circle(200, 200, 200)
  endClip();
  image(pic, 100, 100, 200, 200)
  
  // Creates the text and the style for it.
  fill(255)
  textSize(24);
  textAlign(CENTER, CENTER);
  text("ERIC", 200, 200)
}

function draw() {
  // Starts the code to create a watercolor effect.
  let x = random(width);
  let y = random(height);
  let r = random(10, 30);
  
  // Disables any outlines.
  noStroke();
  // Fills the colors of the circle to a random value.
  fill(random(255), random(255), random(255), 50)
  // Generates the circles.
  ellipse(x, y, r, r)
}


