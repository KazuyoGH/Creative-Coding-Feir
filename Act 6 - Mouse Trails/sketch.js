// Initializes all the variables.
let r = 0;
let g = 0;
let b = 255;

let color1 = true
let color2 = false
let color3 = false

function setup() {
  createCanvas(400, 400);
  background(255)
  noStroke()
}

function draw() {
  // Changes the background to be a somewhat transparent to see a trail effect.
  background(255, 15)
  // If color is too blue, then deduct the blue value while also adding red.
  if (color1) {
    if (r<=255) {
      r++;
      b--
    } else {
      color1 = false;
      color2 = true;
    }
  }
  // If color is too red, then deduct the red value while also adding green.
  if (color2) {
    if (g<=255) {
      g++;
      r--
    } else {
      color2 = false;
      color3 = true;
    }
  }
  // If color is too green, then deduct the green value while also adding blue.
  if (color3) {
    if (b<=255) {
      b++;
      g--
    } else {
      color3 = false;
      color1 = true;
    }
  }
  
  fill(r, g, b)
  // Creates the circle, following the position of the mouse.
  circle(mouseX, mouseY, 50)
}