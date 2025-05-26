// Predefines variables.
let img;
let img2;

function preload() {
  // Preloads the map and hole images.
  img = loadImage('map.jpg');
  img2 = loadImage('hole.png')
}

function setup() {
  createCanvas(400, 400);
  background(255);
  // Resizes the map to be smaller.
  img.resize(1224, 662)
  // Hides the cursor from the canvas.
  noCursor();
}

function draw() {
  background(255);
  
  // Places the images, with the maps position being on the mouse.
  image(img, mouseX-612, mouseY-331)
  image(img2, 0, 0)
  
  // Adds texts to give more instruction to the user.
  fill(255);
  textAlign(CENTER);
  textSize(16);
  textStyle(BOLD);
  text("Satellite View.", width/2, 40);
  
  textSize(12);
  textStyle(ITALIC);
  text("(You may use your cursor to look around.)", width/2, 52);
}
